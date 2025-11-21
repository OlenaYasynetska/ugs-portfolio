import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  try {
    // Используем 127.0.0.1 вместо localhost, чтобы избежать проблем с IPv6 (::1) на Windows
    const mongoURI =
      process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/snapverse';
    
    await mongoose.connect(mongoURI);
    
    console.log('✅ MongoDB connected successfully');
    console.log(`📊 Database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
  console.error('❌ MongoDB error:', error);
});

