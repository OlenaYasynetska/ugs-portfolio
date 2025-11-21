import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import userRoutes from './routes/users';
import notificationRoutes from './routes/notifications';
import messageRoutes from './routes/messages';

// Create Express app
const app: Application = express();

// Middleware - увеличиваем лимит для загрузки изображений
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS configuration - разрешаем запросы с любых портов localhost
app.use(
  cors({
    origin: function (origin, callback) {
      // Разрешаем запросы без origin (например, Postman) или с localhost
      if (!origin || origin.startsWith('http://localhost')) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/messages', messageRoutes);

// Health check route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'SnapVerse API is running',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

// Error handler
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Server error',
  });
});

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDatabase();

    // Start listening
    app.listen(PORT, () => {
      console.log('');
      console.log('🚀 SnapVerse Backend Server Started');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`📡 Server running on port ${PORT}`);
      console.log(`🌐 API URL: http://localhost:${PORT}/api`);
      console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
      console.log(`🎨 Frontend URL: ${process.env.FRONTEND_URL}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
      console.log('📚 Available endpoints:');
      console.log('  POST   /api/auth/signup');
      console.log('  POST   /api/auth/login');
      console.log('  GET    /api/auth/me');
      console.log('  GET    /api/posts');
      console.log('  POST   /api/posts');
      console.log('  GET    /api/users/search');
      console.log('  PUT    /api/users/profile');
      console.log('');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;

