import express from 'express';
import {
  searchUsers,
  getUser,
  getUserByUsername,
  updateProfile,
  followUser,
  unfollowUser,
} from '../controllers/userController';
import { protect } from '../middleware/auth';

const router = express.Router();

// Middleware для логирования всех запросов к /users
router.use((req, res, next) => {
  console.log(`📥 [${req.method}] ${req.path}`, req.params, req.query);
  next();
});

// ВАЖНО: Специфичные роуты должны быть ПЕРЕД общими роутами типа /:id
router.get('/search', searchUsers);
// Используем другой формат, чтобы избежать конфликта
router.get('/find', getUserByUsername);
router.get('/:id', (req, res, next) => {
  console.log('⚠️ Route /:id matched, params:', req.params);
  getUser(req as any, res);
});
router.put('/profile', protect, updateProfile);
router.post('/:id/follow', protect, followUser);
router.delete('/:id/follow', protect, unfollowUser);

export default router;

