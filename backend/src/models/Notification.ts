import { Schema, model, Document } from 'mongoose';

export interface INotification extends Document {
  recipient: Schema.Types.ObjectId; // Кому пришло уведомление
  sender: Schema.Types.ObjectId; // Кто отправил (лайкнул, прокомментировал, подписался)
  type: 'like' | 'comment' | 'follow';
  post?: Schema.Types.ObjectId; // Если это лайк или комментарий
  comment?: string; // Текст комментария (если type === 'comment')
  read: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['like', 'comment', 'follow'],
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    comment: {
      type: String,
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

// Индекс для быстрого поиска непрочитанных уведомлений пользователя
NotificationSchema.index({ recipient: 1, read: 1, createdAt: -1 });

export default model<INotification>('Notification', NotificationSchema);

