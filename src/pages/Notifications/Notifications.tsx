import { useState, useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI, notificationsAPI } from '../../api/client';
import { Heart, MessageCircle, UserPlus, Bell, CheckCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow';
  user: {
    username: string;
    avatar?: string;
  };
  post?: {
    id: string;
    imageUrl: string;
  };
  text?: string;
  createdAt: Date;
  read: boolean;
}

const Notifications: FC = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      navigate('/about');
      return;
    }

    loadNotifications();
  }, [navigate]);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      
      const result = await notificationsAPI.getAll();
      
      if (result.success && result.notifications) {
        // Преобразуем данные с сервера в нужный формат
        const formattedNotifications = result.notifications.map((n: any) => ({
          id: n._id,
          type: n.type,
          user: {
            username: n.sender?.username || 'Unknown',
            avatar: n.sender?.avatar,
          },
          post: n.post ? {
            id: n.post._id,
            imageUrl: n.post.imageUrl,
          } : undefined,
          text: getNotificationText(n),
          createdAt: new Date(n.createdAt),
          read: n.read,
        }));
        
        setNotifications(formattedNotifications);
      }
    } catch (error) {
      console.error('Error loading notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const getNotificationText = (notification: any) => {
    switch (notification.type) {
      case 'like':
        return 'liked your photo';
      case 'comment':
        return `commented: "${notification.comment || ''}"`;
      case 'follow':
        return 'started following you';
      default:
        return '';
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      await notificationsAPI.markAsRead(notificationId);
      setNotifications(prev =>
        prev.map(n => (n.id === notificationId ? { ...n, read: true } : n))
      );
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationsAPI.markAllAsRead();
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return `${Math.floor(seconds / 604800)}w ago`;
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
            <Heart className="h-5 w-5 fill-red-600 text-red-600" />
          </div>
        );
      case 'comment':
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
            <MessageCircle className="h-5 w-5 text-blue-600" />
          </div>
        );
      case 'follow':
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100">
            <UserPlus className="h-5 w-5 text-sky-600" />
          </div>
        );
      default:
        return null;
    }
  };

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center pl-64" style={{ background: 'transparent' }}>
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600"></div>
          <p className="text-slate-600">Loading notifications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 pl-64" style={{ background: 'transparent' }}>
      <div className="mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Notifications</h1>
          {unreadCount > 0 && (
            <p className="mt-1 text-sm text-slate-600">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex gap-4 border-b border-slate-200">
          <button
            onClick={() => setFilter('all')}
            className={`pb-3 text-sm font-medium transition ${
              filter === 'all'
                ? 'border-b-2 border-slate-900 text-slate-900'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`pb-3 text-sm font-medium transition ${
              filter === 'unread'
                ? 'border-b-2 border-slate-900 text-slate-900'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Unread {unreadCount > 0 && `(${unreadCount})`}
          </button>
        </div>

        {/* Mark all as read button */}
        {unreadCount > 0 && (
          <div className="mb-4 flex justify-end">
            <button
              onClick={markAllAsRead}
              className="text-sm font-medium text-sky-600 hover:text-sky-700"
            >
              Mark all as read
            </button>
          </div>
        )}

        {/* Notifications List */}
        <div className="space-y-2">
          {filteredNotifications.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <Bell className="h-8 w-8 text-slate-400" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">No notifications</h3>
              <p className="text-slate-600">
                {filter === 'unread' 
                  ? "You've read all your notifications" 
                  : "You don't have any notifications yet"}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => !notification.read && markAsRead(notification.id)}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 shadow-sm transition hover:bg-slate-50 ${
                  !notification.read ? 'bg-blue-50' : 'bg-white'
                }`}
              >
                {/* User Avatar */}
                <div className="relative flex-shrink-0">
                  {notification.user.avatar ? (
                    <img
                      src={notification.user.avatar}
                      alt={notification.user.username}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-sm font-semibold text-white">
                      {notification.user.username.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {/* Icon Badge */}
                  <div className="absolute -bottom-1 -right-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm text-slate-900">
                    <span className="font-semibold">{notification.user.username}</span>{' '}
                    <span className="text-slate-600">{notification.text}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{getTimeAgo(notification.createdAt)}</p>
                </div>

                {/* Post Thumbnail */}
                {notification.post && (
                  <div className="flex-shrink-0">
                    <img
                      src={notification.post.imageUrl}
                      alt="Post"
                      className="h-12 w-12 rounded-md object-cover"
                    />
                  </div>
                )}

                {/* Unread Indicator */}
                {!notification.read && (
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer message */}
        {filteredNotifications.length > 0 && (
          <div className="mt-8 text-center">
            <div className="mb-2 flex justify-center">
              <CheckCircle className="h-12 w-12 text-slate-300" />
            </div>
            <p className="text-sm font-medium text-slate-600">You've seen all the updates</p>
            <p className="text-xs text-slate-500">Check back later for new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;

