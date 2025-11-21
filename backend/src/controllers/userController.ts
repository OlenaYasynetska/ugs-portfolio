import { Response } from 'express';
import User from '../models/User';
import { AuthRequest } from '../middleware/auth';

// @desc    Search users or get user by exact username
// @route   GET /api/users/search?q=query&exact=true
// @access  Public
export const searchUsers = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const query = req.query.q as string;
    const exact = req.query.exact === 'true';
    
    console.log('🔍 searchUsers called:', { query, exact, exactRaw: req.query.exact });

    if (!query) {
      res.status(400).json({
        success: false,
        error: 'Please provide a search query',
      });
      return;
    }

    // Если exact=true, ищем точное совпадение username и возвращаем одного пользователя
    if (exact) {
      console.log('✅ Exact search mode, looking for username:', query);
      const user = await User.findOne({ username: query }).select('-password');
      
      if (!user) {
        res.status(404).json({
          success: false,
          error: 'User not found',
        });
        return;
      }

      res.status(200).json({
        success: true,
        user,
      });
      return;
    }

    // Обычный поиск
    const users = await User.find({
      $or: [
        { username: { $regex: query, $options: 'i' } },
        { fullName: { $regex: query, $options: 'i' } },
      ],
    })
      .select('-password')
      .limit(20);

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Public
export const getUser = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      res.status(404).json({
        success: false,
        error: 'User not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};


// @desc    Get user by username
// @route   GET /api/users/username/:username
// @access  Public
export const getUserByUsername = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    // Поддерживаем оба варианта: query параметр и path параметр
    const username = (req.query.username as string) || req.params.username;
    console.log('🔍 getUserByUsername called with username:', username);
    
    if (!username) {
      res.status(400).json({
        success: false,
        error: 'Username is required',
      });
      return;
    }
    
    const user = await User.findOne({ username: username }).select(
      '-password'
    );

    console.log('👤 Found user:', user ? user.username : 'null');

    if (!user) {
      res.status(404).json({
        success: false,
        error: 'User not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error: any) {
    console.error('❌ Error in getUserByUsername:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};


// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { fullName, bio, avatar, website } = req.body;

    const user = await User.findById(req.user!._id);

    if (!user) {
      res.status(404).json({
        success: false,
        error: 'User not found',
      });
      return;
    }

    if (fullName) user.fullName = fullName;
    if (bio !== undefined) user.bio = bio;
    if (avatar !== undefined) user.avatar = avatar;
    if (website !== undefined) user.website = website;

    await user.save();

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        avatar: user.avatar,
        bio: user.bio,
        followers: user.followers,
        following: user.following,
        createdAt: user.createdAt,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Follow user
// @route   POST /api/users/:id/follow
// @access  Private
export const followUser = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userToFollow = await User.findById(req.params.id);

    if (!userToFollow) {
      res.status(404).json({
        success: false,
        error: 'User not found',
      });
      return;
    }

    // Can't follow yourself
    if (req.params.id === String(req.user!._id)) {
      res.status(400).json({
        success: false,
        error: 'You cannot follow yourself',
      });
      return;
    }

    const currentUser = await User.findById(req.user!._id);

    if (!currentUser) {
      res.status(404).json({
        success: false,
        error: 'Current user not found',
      });
      return;
    }

    // Update followers/following counts
    userToFollow.followers += 1;
    currentUser.following += 1;

    await userToFollow.save();
    await currentUser.save();

    res.status(200).json({
      success: true,
      message: `You are now following ${userToFollow.username}`,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// @desc    Unfollow user
// @route   DELETE /api/users/:id/follow
// @access  Private
export const unfollowUser = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userToUnfollow = await User.findById(req.params.id);

    if (!userToUnfollow) {
      res.status(404).json({
        success: false,
        error: 'User not found',
      });
      return;
    }

    const currentUser = await User.findById(req.user!._id);

    if (!currentUser) {
      res.status(404).json({
        success: false,
        error: 'Current user not found',
      });
      return;
    }

    // Update followers/following counts
    userToUnfollow.followers = Math.max(0, userToUnfollow.followers - 1);
    currentUser.following = Math.max(0, currentUser.following - 1);

    await userToUnfollow.save();
    await currentUser.save();

    res.status(200).json({
      success: true,
      message: `You unfollowed ${userToUnfollow.username}`,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

