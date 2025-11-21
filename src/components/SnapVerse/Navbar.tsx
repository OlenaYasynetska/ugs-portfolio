import { type FC, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authAPI, notificationsAPI, messagesAPI } from '../../api/client';
import { Home, Search, Video, MessageCircle, Bell, PlusSquare, User, LogOut } from 'lucide-react';

const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = authAPI.getCurrentUser();
  const [unreadCount, setUnreadCount] = useState(0);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);

  useEffect(() => {
    loadUnreadCount();
    loadUnreadMessagesCount();
    
    // Обновляем счетчики каждые 30 секунд
    const interval = setInterval(() => {
      loadUnreadCount();
      loadUnreadMessagesCount();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const loadUnreadCount = async () => {
    try {
      const result = await notificationsAPI.getUnreadCount();
      if (result.success) {
        setUnreadCount(result.count);
      }
    } catch (error) {
      console.error('Error loading unread count:', error);
    }
  };

  const loadUnreadMessagesCount = async () => {
    try {
      const result = await messagesAPI.getUnreadCount();
      if (result.success) {
        setUnreadMessagesCount(result.count);
      }
    } catch (error) {
      console.error('Error loading unread messages count:', error);
    }
  };

  const handleLogout = () => {
    authAPI.logout();
    navigate('/about');
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => `
    flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200
    ${isActive(path) 
      ? 'bg-slate-100 text-slate-900 font-semibold' 
      : 'text-slate-700 hover:bg-slate-50'
    }
  `;

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-6">
        <Link 
          to="/feed" 
          className="text-4xl font-bold italic text-slate-900 transition-colors hover:text-sky-600" 
          style={{ fontFamily: 'Brush Script MT, cursive' }}
        >
          ICHGRAM
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        <Link to="/feed" className={navLinkClass('/feed')}>
          <Home className="h-6 w-6" />
          <span>Home</span>
        </Link>

        <Link to="/search" className={navLinkClass('/search')}>
          <Search className="h-6 w-6" />
          <span>Search</span>
        </Link>

        <button className={navLinkClass('/explore')}>
          <Video className="h-6 w-6" />
          <span>Cashs</span>
        </button>

        <Link to="/messages" className={navLinkClass('/messages')}>
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            {/* Badge с количеством непрочитанных сообщений */}
            {unreadMessagesCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                {unreadMessagesCount > 9 ? '9+' : unreadMessagesCount}
              </span>
            )}
          </div>
          <span>Messages</span>
        </Link>

        <Link to="/notifications" className={navLinkClass('/notifications')}>
          <div className="relative">
            <Bell className="h-6 w-6" />
            {/* Badge с количеством непрочитанных уведомлений */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </div>
          <span>Notifications</span>
        </Link>

        <button className={navLinkClass('/create')}>
          <PlusSquare className="h-6 w-6" />
          <span>Create</span>
        </button>

        <Link to="/profile" className={navLinkClass('/profile')}>
          <User className="h-6 w-6" />
          <span>Profile</span>
        </Link>
      </nav>

      {/* User Info & Logout */}
      <div className="border-t border-slate-200 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 text-sm font-semibold text-white">
            {currentUser?.username?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">{currentUser?.username || 'User'}</p>
            <p className="text-xs text-slate-500">{currentUser?.fullName || 'User Name'}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Navbar;

