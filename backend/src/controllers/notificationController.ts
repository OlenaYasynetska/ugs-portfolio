import { Response } from 'express';
import Notification from '../models/Notification';
import { AuthRequest } from '../middleware/auth';

// @desc    Get user notifications
// @route   GET /api/notifications
// @access  Private
export const getNotifications = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const notifications = await Notification.find({
      recipient: req.user!._id,
    })
      .populate('sender', 'username fullName avatar')
      .populate('post', 'imageUrl')
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      notifications,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Get unread notifications count
// @route   GET /api/notifications/unread-count
// @access  Private
export const getUnreadCount = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const count = await Notification.countDocuments({
      recipient: req.user!._id,
      read: false,
    });

    res.status(200).json({
      success: true,
      count,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Mark notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
export const markAsRead = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const notification = await Notification.findOne({
      _id: req.params.id,
      recipient: req.user!._id,
    });

    if (!notification) {
      res.status(404).json({
        success: false,
        error: 'Notification not found',
      });
      return;
    }

    notification.read = true;
    await notification.save();

    res.status(200).json({
      success: true,
      notification,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Mark all notifications as read
// @route   PUT /api/notifications/read-all
// @access  Private
export const markAllAsRead = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    await Notification.updateMany(
      {
        recipient: req.user!._id,
        read: false,
      },
      {
        read: true,
      }
    );

    res.status(200).json({
      success: true,
      message: 'All notifications marked as read',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Create notification (helper function)
export const createNotification = async (
  recipientId: string,
  senderId: string,
  type: 'like' | 'comment' | 'follow',
  postId?: string,
  comment?: string
): Promise<void> => {
  try {
    console.log('📝 createNotification called with:', { recipientId, senderId, type, postId });
    
    // Не создаем уведомление, если пользователь лайкает свой пост
    if (recipientId === senderId) {
      console.log('⚠️ Same user - skipping notification');
      return;
    }

    // Проверяем, нет ли уже такого уведомления (для лайков)
    if (type === 'like') {
      const existing = await Notification.findOne({
        recipient: recipientId,
        sender: senderId,
        type: 'like',
        post: postId,
      });

      if (existing) {
        console.log('⚠️ Notification already exists - skipping');
        return; // Уведомление уже существует
      }
    }

    const notification = await Notification.create({
      recipient: recipientId,
      sender: senderId,
      type,
      post: postId,
      comment,
      read: false,
    });
    
    console.log('✅ Notification created:', notification._id);
  } catch (error) {
    console.error('❌ Error creating notification:', error);
  }
};

// @desc    Delete notification (helper function for unlike)
export const deleteNotification = async (
  recipientId: string,
  senderId: string,
  type: 'like' | 'comment' | 'follow',
  postId?: string
): Promise<void> => {
  try {
    await Notification.deleteOne({
      recipient: recipientId,
      sender: senderId,
      type,
      post: postId,
    });
  } catch (error) {
    console.error('Error deleting notification:', error);
  }
};

