import { Response } from 'express';
import Post from '../models/Post';
import Like from '../models/Like';
import { AuthRequest } from '../middleware/auth';
import mongoose from 'mongoose';
import { createNotification, deleteNotification } from './notificationController';

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
export const getAllPosts = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      count: posts.length,
      posts,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Public
export const getPost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({
        success: false,
        error: 'Post not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Get user posts
// @route   GET /api/posts/user/:userId
// @access  Public
export const getUserPosts = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const posts = await Post.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: posts.length,
      posts,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Create post
// @route   POST /api/posts
// @access  Private
export const createPost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { imageUrl, caption } = req.body;

    if (!imageUrl) {
      res.status(400).json({
        success: false,
        error: 'Please provide an image URL',
      });
      return;
    }

    const post = await Post.create({
      userId: req.user!._id,
      username: req.user!.username,
      userAvatar: req.user!.avatar,
      imageUrl,
      caption: caption || '',
      likes: [],
      comments: [],
    });

    res.status(201).json({
      success: true,
      post,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
export const updatePost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({
        success: false,
        error: 'Post not found',
      });
      return;
    }

    // Check if user owns the post
    if (String(post.userId) !== String(req.user!._id)) {
      res.status(403).json({
        success: false,
        error: 'Not authorized to update this post',
      });
      return;
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { caption: req.body.caption },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
export const deletePost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({
        success: false,
        error: 'Post not found',
      });
      return;
    }

    // Check if user owns the post
    if (String(post.userId) !== String(req.user!._id)) {
      res.status(403).json({
        success: false,
        error: 'Not authorized to delete this post',
      });
      return;
    }

    await post.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Like post
// @route   POST /api/posts/:id/like
// @access  Private
export const likePost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = String(req.user?._id);
    const postId = req.params.id;
    console.log('👍 Like request received', { postId, userId });

    const post = await Post.findById(req.params.id);

    if (!post) {
      console.warn('⚠️  Like request: post not found', { postId, userId });
      res.status(404).json({
        success: false,
        error: 'Post not found',
      });
      return;
    }

    // Check if already liked
    if (post.likes.some(id => String(id) === String(req.user!._id))) {
      console.warn('⚠️  Like request: already liked', {
        postId,
        userId,
        likes: post.likes.length,
      });
      res.status(400).json({
        success: false,
        error: 'Post already liked',
      });
      return;
    }

    console.log('📝 Like request: before save', {
      postId,
      userId,
      likesBefore: post.likes.length,
    });

    post.likes.push(req.user!._id as mongoose.Types.ObjectId);
    await post.save();

    await Like.findOneAndUpdate(
      { postId: post._id, userId: req.user!._id },
      { postId: post._id, userId: req.user!._id },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log('✅ Like saved', {
      postId,
      userId,
      likesAfter: post.likes.length,
    });

    // Создаем уведомление для владельца поста
    console.log('🔔 Creating notification:', {
      recipient: String(post.userId),
      sender: String(req.user!._id),
      type: 'like',
      postId: String(post._id)
    });
    
    await createNotification(
      String(post.userId),
      String(req.user!._id),
      'like',
      String(post._id)
    );
    
    console.log('✅ Notification created successfully');

    res.status(200).json({
      success: true,
      likes: post.likes.length,
    });
  } catch (error: any) {
    console.error('❌ Like request failed', {
      postId: req.params.id,
      userId: req.user?._id,
      error: error.message,
    });
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Unlike post
// @route   DELETE /api/posts/:id/like
// @access  Private
export const unlikePost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = String(req.user?._id);
    const postId = req.params.id;
    console.log('👎 Unlike request received', { postId, userId });

    const post = await Post.findById(req.params.id);

    if (!post) {
      console.warn('⚠️  Unlike request: post not found', { postId, userId });
      res.status(404).json({
        success: false,
        error: 'Post not found',
      });
      return;
    }

    // Check if not liked
    if (!post.likes.some(id => String(id) === String(req.user!._id))) {
      console.warn('⚠️  Unlike request: post not liked yet', {
        postId,
        userId,
        likes: post.likes.length,
      });
      res.status(400).json({
        success: false,
        error: 'Post not liked yet',
      });
      return;
    }

    console.log('📝 Unlike request: before save', {
      postId,
      userId,
      likesBefore: post.likes.length,
    });

    post.likes = post.likes.filter(
      (id) => String(id) !== String(req.user!._id)
    );
    await post.save();

    await Like.deleteOne({
      postId: post._id,
      userId: req.user!._id,
    });

    console.log('✅ Unlike saved', {
      postId,
      userId,
      likesAfter: post.likes.length,
    });

    // Удаляем уведомление о лайке
    await deleteNotification(
      String(post.userId),
      String(req.user!._id),
      'like',
      String(post._id)
    );

    res.status(200).json({
      success: true,
      likes: post.likes.length,
    });
  } catch (error: any) {
    console.error('❌ Unlike request failed', {
      postId: req.params.id,
      userId: req.user?._id,
      error: error.message,
    });
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Add comment
// @route   POST /api/posts/:id/comments
// @access  Private
export const addComment = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(400).json({
        success: false,
        error: 'Please provide comment text',
      });
      return;
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({
        success: false,
        error: 'Post not found',
      });
      return;
    }

    const comment = {
      _id: new mongoose.Types.ObjectId(),
      userId: req.user!._id as mongoose.Types.ObjectId,
      username: req.user!.username,
      text,
      createdAt: new Date(),
    };

    post.comments.push(comment);
    await post.save();

    res.status(201).json({
      success: true,
      comment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Delete comment
// @route   DELETE /api/posts/:id/comments/:commentId
// @access  Private
export const deleteComment = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({
        success: false,
        error: 'Post not found',
      });
      return;
    }

    const comment = post.comments.find(
      (c) => String(c._id) === req.params.commentId
    );

    if (!comment) {
      res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
      return;
    }

    // Check if user owns the comment
    if (String(comment.userId) !== String(req.user!._id)) {
      res.status(403).json({
        success: false,
        error: 'Not authorized to delete this comment',
      });
      return;
    }

    post.comments = post.comments.filter(
      (c) => String(c._id) !== req.params.commentId
    );
    await post.save();

    res.status(200).json({
      success: true,
      message: 'Comment deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

