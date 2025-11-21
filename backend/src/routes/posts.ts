import express from 'express';
import {
  getAllPosts,
  getPost,
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  addComment,
  deleteComment,
} from '../controllers/postController';
import { protect } from '../middleware/auth';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.get('/user/:userId', getUserPosts);
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);
router.post('/:id/like', protect, likePost);
router.delete('/:id/like', protect, unlikePost);
router.post('/:id/comments', protect, addComment);
router.delete('/:id/comments/:commentId', protect, deleteComment);

export default router;

