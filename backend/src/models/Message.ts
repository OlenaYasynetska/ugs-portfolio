import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  sender: mongoose.Types.ObjectId;
  recipient: mongoose.Types.ObjectId;
  text: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    text: {
      type: String,
      required: [true, 'Message text is required'],
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Индекс для быстрого поиска сообщений между двумя пользователями
MessageSchema.index({ sender: 1, recipient: 1, createdAt: -1 });
// Индекс для поиска непрочитанных сообщений
MessageSchema.index({ recipient: 1, read: 1, createdAt: -1 });

export default mongoose.model<IMessage>('Message', MessageSchema);

