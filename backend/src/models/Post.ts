import mongoose, { Document, Schema } from 'mongoose';

export interface IComment {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  username: string;
  text: string;
  createdAt: Date;
}

export interface IPost extends Document {
  userId: mongoose.Types.ObjectId;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: mongoose.Types.ObjectId[];
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: [true, 'Comment text is required'],
      maxlength: [500, 'Comment cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true,
  }
);

const PostSchema = new Schema<IPost>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userAvatar: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    caption: {
      type: String,
      maxlength: [2200, 'Caption cannot exceed 2200 characters'],
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
PostSchema.index({ userId: 1, createdAt: -1 });
PostSchema.index({ createdAt: -1 });

export default mongoose.model<IPost>('Post', PostSchema);

