import { Response } from 'express';
import Message from '../models/Message';
import { AuthRequest } from '../middleware/auth';
import User from '../models/User';

// @desc    Get all conversations for current user
// @route   GET /api/messages/conversations
// @access  Private
export const getConversations = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user!._id;

    // Находим всех пользователей, с которыми есть переписка
    const messages = await Message.find({
      $or: [{ sender: userId }, { recipient: userId }],
    })
      .sort({ createdAt: -1 })
      .populate('sender', 'username fullName avatar')
      .populate('recipient', 'username fullName avatar');

    // Группируем по собеседникам
    const conversationsMap = new Map<string, any>();

    messages.forEach((msg) => {
      const otherUserId =
        String((msg.sender as any)._id) === String(userId)
          ? String((msg.recipient as any)._id)
          : String((msg.sender as any)._id);

      const otherUser =
        String((msg.sender as any)._id) === String(userId) 
          ? (msg.recipient as any) 
          : (msg.sender as any);

      if (!conversationsMap.has(otherUserId)) {
        conversationsMap.set(otherUserId, {
          userId: otherUserId,
          username: otherUser.username || 'Unknown',
          fullName: otherUser.fullName || 'User',
          avatar: otherUser.avatar,
          lastMessage: msg.text,
          lastMessageTime: msg.createdAt,
          unreadCount: 0,
        });
      }

      // Подсчитываем непрочитанные сообщения
      if (
        String((msg.recipient as any)._id) === String(userId) &&
        !msg.read
      ) {
        const conv = conversationsMap.get(otherUserId)!;
        conv.unreadCount += 1;
      }
    });

    const conversations = Array.from(conversationsMap.values()).sort(
      (a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime()
    );

    res.status(200).json({
      success: true,
      conversations,
    });
  } catch (error: any) {
    console.error('❌ Get conversations error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Get messages with a specific user
// @route   GET /api/messages/:userId
// @access  Private
export const getMessages = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const currentUserId = req.user!._id;
    const otherUserId = req.params.userId;

    // Проверяем, что пользователь существует
    const otherUser = await User.findById(otherUserId);
    if (!otherUser) {
      res.status(404).json({
        success: false,
        error: 'User not found',
      });
      return;
    }

    // Получаем все сообщения между двумя пользователями
    const messages = await Message.find({
      $or: [
        { sender: currentUserId, recipient: otherUserId },
        { sender: otherUserId, recipient: currentUserId },
      ],
    })
      .sort({ createdAt: 1 })
      .populate('sender', 'username fullName avatar')
      .populate('recipient', 'username fullName avatar');

    // Помечаем все сообщения от собеседника как прочитанные
    await Message.updateMany(
      {
        sender: otherUserId,
        recipient: currentUserId,
        read: false,
      },
      { read: true }
    );

    res.status(200).json({
      success: true,
      messages,
      otherUser: {
        id: otherUser._id,
        username: otherUser.username,
        fullName: otherUser.fullName,
        avatar: otherUser.avatar,
      },
    });
  } catch (error: any) {
    console.error('❌ Get messages error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Send a message
// @route   POST /api/messages
// @access  Private
export const sendMessage = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { recipientId, text } = req.body;

    if (!recipientId || !text) {
      res.status(400).json({
        success: false,
        error: 'Please provide recipient ID and message text',
      });
      return;
    }

    if (text.trim().length === 0) {
      res.status(400).json({
        success: false,
        error: 'Message text cannot be empty',
      });
      return;
    }

    // Проверяем, что получатель существует
    const recipient = await User.findById(recipientId);
    if (!recipient) {
      res.status(404).json({
        success: false,
        error: 'Recipient not found',
      });
      return;
    }

    // Нельзя отправлять сообщение самому себе
    if (String(recipientId) === String(req.user!._id)) {
      res.status(400).json({
        success: false,
        error: 'Cannot send message to yourself',
      });
      return;
    }

    const message = await Message.create({
      sender: req.user!._id,
      recipient: recipientId,
      text: text.trim(),
    });

    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'username fullName avatar')
      .populate('recipient', 'username fullName avatar');

    console.log('✅ Message sent:', {
      messageId: message._id,
      sender: String(req.user!._id),
      recipient: recipientId,
    });

    res.status(201).json({
      success: true,
      message: populatedMessage,
    });
  } catch (error: any) {
    console.error('❌ Send message error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Mark messages as read
// @route   PUT /api/messages/:userId/read
// @access  Private
export const markAsRead = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const currentUserId = req.user!._id;
    const otherUserId = req.params.userId;

    await Message.updateMany(
      {
        sender: otherUserId,
        recipient: currentUserId,
        read: false,
      },
      { read: true }
    );

    res.status(200).json({
      success: true,
      message: 'Messages marked as read',
    });
  } catch (error: any) {
    console.error('❌ Mark as read error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Get unread messages count
// @route   GET /api/messages/unread-count
// @access  Private
export const getUnreadCount = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user!._id;

    const count = await Message.countDocuments({
      recipient: userId,
      read: false,
    });

    res.status(200).json({
      success: true,
      count,
    });
  } catch (error: any) {
    console.error('❌ Get unread count error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

