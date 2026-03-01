import { useState, useEffect, useRef, type FC } from 'react';
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { messagesAPI, authAPI, usersAPI } from '../../api/client';
import { Send, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.svg';

interface Conversation {
  userId: string;
  username: string;
  fullName: string;
  avatar?: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
}

interface Message {
  _id: string;
  sender: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
  };
  recipient: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
  };
  text: string;
  read: boolean;
  createdAt: Date;
}

interface OtherUser {
  id: string;
  username: string;
  fullName: string;
  avatar?: string;
}

interface UserSearchResult {
  id: string;
  username: string;
  fullName: string;
  avatar?: string;
}

const Messages: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [otherUser, setOtherUser] = useState<OtherUser | null>(null);
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [showNewMessageModal, setShowNewMessageModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<UserSearchResult[]>([]);
  const [searchingUsers, setSearchingUsers] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentUserId = authAPI.getCurrentUser()?.id || '';

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      navigate('/about');
      return;
    }

    loadConversations();
  }, [navigate]);

  useEffect(() => {
    const paramUserId = searchParams.get('userId');
    const stateUserId = (location.state as { userId?: string } | undefined)?.userId;
    const initialUserId = paramUserId || stateUserId;

    if (initialUserId && initialUserId !== selectedUserId) {
      setSelectedUserId(initialUserId);
    }
  }, [searchParams, location.state, selectedUserId]);

  useEffect(() => {
    if (selectedUserId) {
      loadMessages(selectedUserId);
      // Обновляем список чатов каждые 5 секунд
      const interval = setInterval(() => {
        loadConversations();
        loadMessages(selectedUserId);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedUserId]);

  useEffect(() => {
    // Прокручиваем вниз при новых сообщениях
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadConversations = async () => {
    try {
      const result = await messagesAPI.getConversations();
      if (result.success && result.conversations) {
        setConversations(result.conversations);
      }
    } catch (error) {
      console.error('Error loading conversations:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (userId: string) => {
    try {
      const result = await messagesAPI.getMessages(userId);
      if (result.success) {
        setMessages(result.messages || []);
        setOtherUser(result.otherUser || null);
        // Помечаем сообщения как прочитанные
        await messagesAPI.markAsRead(userId);
        // Обновляем список чатов чтобы убрать счетчик непрочитанных
        loadConversations();
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const handleSelectConversation = (userId: string) => {
    setSelectedUserId(userId);
    if (userId) {
      setSearchParams({ userId });
    } else {
      setSearchParams({});
    }
  };

  const handleSearchUsers = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearchingUsers(true);
      const result = await usersAPI.search(searchQuery.trim());
      if (result.success && result.users) {
        const filtered = result.users
          .filter((u: any) => String(u._id || u.id) !== currentUserId)
          .map((u: any) => ({
            id: u._id || u.id,
            username: u.username,
            fullName: u.fullName,
            avatar: u.avatar,
          }));
        setSearchResults(filtered);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching users:', error);
    } finally {
      setSearchingUsers(false);
    }
  };

  const handleStartConversation = async (user: UserSearchResult) => {
    setShowNewMessageModal(false);
    setSearchQuery('');
    setSearchResults([]);
    handleSelectConversation(user.id);
    await loadMessages(user.id);
  };

  const handleSendMessage = async () => {
    if (!messageText.trim() || !selectedUserId || sending) return;

    try {
      setSending(true);
      const result = await messagesAPI.sendMessage(selectedUserId, messageText.trim());
      
      if (result.success && result.message) {
        setMessages([...messages, result.message]);
        setMessageText('');
        // Обновляем список чатов
        loadConversations();
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const formatTime = (date: Date | string) => {
    const d = new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHrs < 24) return `${diffHrs}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: d.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
  };

  const isMyMessage = (message: Message) => {
    return String(message.sender._id) === String(currentUserId);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center ml-0 md:ml-20 lg:ml-64" style={{ background: 'transparent' }}>
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600"></div>
          <p className="text-slate-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen ml-0 md:ml-20 lg:ml-64 flex flex-col overflow-hidden" style={{ background: 'transparent' }}>
      <div className="flex flex-1 min-h-0" style={{ background: 'transparent' }}>
      {/* Left Panel - Conversations List */}
      <div className="w-48 sm:w-64 md:w-72 lg:w-80 border-r border-slate-200 bg-white flex flex-col min-h-0">
        {/* Шапка: только иконка + ICHGRAM при экране < 768px */}
        <div className="md:hidden border-b border-slate-200 p-3">
          <div className="flex items-center justify-between gap-2">
            <img src={logo} alt="" className="h-10 w-10 flex-shrink-0 object-contain" />
            <Link
              to="/feed"
              className="text-xl font-bold italic whitespace-nowrap transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'Brush Script MT, cursive',
                color: '#1e3a5f',
                textShadow: '0 1px 2px rgba(30, 58, 95, 0.2)',
              }}
            >
              ICHGRAM
            </Link>
          </div>
        </div>

        <div className="border-b border-slate-200 p-4 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Messages</h2>
          <button
            onClick={() => {
              setShowNewMessageModal(true);
              setSearchQuery('');
              setSearchResults([]);
            }}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            New message
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {conversations.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p>No conversations yet</p>
              <p className="mt-2 text-sm">Start a conversation from someone's profile</p>
            </div>
          ) : (
            conversations.map((conv) => (
              <button
                key={conv.userId}
                  onClick={() => handleSelectConversation(conv.userId)}
                className={`w-full border-b border-slate-100 p-4 text-left transition hover:bg-slate-50 ${
                  selectedUserId === conv.userId ? 'bg-slate-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
                    {conv.avatar ? (
                      <img src={conv.avatar} alt={conv.username} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-lg font-bold text-white">
                        {conv.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">{conv.username}</h3>
                      {conv.unreadCount > 0 && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                          {conv.unreadCount > 9 ? '9+' : conv.unreadCount}
                        </span>
                      )}
                    </div>
                    <p className="truncate text-sm text-slate-600">{conv.lastMessage}</p>
                    <p className="text-xs text-slate-400">{formatTime(conv.lastMessageTime)}</p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Right Panel - Active Conversation */}
      <div className="flex-1 flex flex-col bg-white min-h-0">
        {selectedUserId && otherUser ? (
          <div className="flex flex-col min-h-0 flex-1">
            {/* Header */}
            <div className="border-b border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
                  {otherUser.avatar ? (
                    <img src={otherUser.avatar} alt={otherUser.username} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                      {otherUser.username.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{otherUser.username}</h3>
                  <p className="text-xs text-slate-500">{otherUser.fullName}</p>
                </div>
              </div>
            </div>

            {/* Messages — прокрутка без видимой полосы */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 pb-20 sm:pb-4 scrollbar-hide">
              {messages.length === 0 ? (
                <div className="flex h-full items-center justify-center text-slate-500">
                  <p>No messages yet. Start the conversation!</p>
                </div>
              ) : (
                messages.map((message) => {
                  const isMine = isMyMessage(message);
                  return (
                    <div
                      key={message._id}
                      className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs rounded-2xl px-4 py-2 ${
                          isMine
                            ? 'bg-sky-600 text-white'
                            : 'bg-slate-100 text-slate-900'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`mt-1 text-xs ${
                            isMine ? 'text-sky-100' : 'text-slate-500'
                          }`}
                        >
                          {formatTime(message.createdAt)}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-200 p-4 mb-16 sm:mb-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Write message..."
                  className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  disabled={sending}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim() || sending}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white transition hover:bg-sky-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-slate-500">
            <div className="text-center">
              <MessageCircle className="mx-auto mb-4 h-16 w-16 text-slate-300" />
              <p className="text-lg font-medium">Select a conversation</p>
              <p className="mt-2 text-sm">Choose a conversation from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
      </div>

      {showNewMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">Start a new conversation</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchUsers();
                  }
                }}
                placeholder="Search by username or name"
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <button
                onClick={handleSearchUsers}
                className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:opacity-50"
                disabled={searchingUsers}
              >
                {searchingUsers ? 'Searching...' : 'Search'}
              </button>
            </div>

            <div className="mt-4 max-h-60 overflow-y-auto scrollbar-hide">
              {searchResults.length === 0 ? (
                <p className="py-6 text-center text-sm text-slate-500">
                  {searchQuery.trim()
                    ? 'No users found'
                    : 'Enter a name to find someone'}
                </p>
              ) : (
                searchResults.map((user) => (
                  <button
                    key={user.id}
                    onClick={() => handleStartConversation(user)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-slate-50"
                  >
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.username} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{user.username}</p>
                      <p className="text-sm text-slate-500">{user.fullName}</p>
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowNewMessageModal(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;

