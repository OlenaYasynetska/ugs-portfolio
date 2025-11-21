import express from 'express';
import {
  getConversations,
  getMessages,
  sendMessage,
  markAsRead,
  getUnreadCount,
} from '../controllers/messageController';
import { protect } from '../middleware/auth';

const router = express.Router();

// All routes require authentication
router.get('/conversations', protect, getConversations);
router.get('/unread-count', protect, getUnreadCount);
router.get('/:userId', protect, getMessages);
router.post('/', protect, sendMessage);
router.put('/:userId/read', protect, markAsRead);

export default router;

