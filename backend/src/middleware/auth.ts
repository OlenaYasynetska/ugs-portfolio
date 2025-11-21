import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

// Extend Express Request type to include user
export interface AuthRequest extends Request {
  user?: IUser;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token: string | undefined;

    // Check for token in Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Check if token exists
    if (!token) {
      res.status(401).json({
        success: false,
        error: 'Not authorized to access this route',
      });
      return;
    }

    try {
      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'fallback-secret'
      ) as { id: string };

      // Get user from token
      const user = await User.findById(decoded.id);

      if (!user) {
        res.status(401).json({
          success: false,
          error: 'User not found',
        });
        return;
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        error: 'Token is invalid or expired',
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error in authentication',
    });
  }
};

// Generate JWT Token
export const generateToken = (userId: string): string => {
  return jwt.sign(
    { id: userId }, 
    process.env.JWT_SECRET || 'fallback-secret', 
    { expiresIn: process.env.JWT_EXPIRE || '7d' } as jwt.SignOptions
  );
};

