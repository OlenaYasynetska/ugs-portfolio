import { useState, useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersAPI, postsAPI } from '../../api/client';
import { SearchUsers } from '../../components/SnapVerse/SearchUsers';

interface User {
  id: string;
  username: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  email?: string;
  website?: string;
  followers?: number;
  following?: number;
}

interface Post {
  _id: string;
  userId: string;
  username: string;
  caption: string;
  imageUrl: string;
  likes: string[];
  comments: any[];
  createdAt: Date;
}

const Search: FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUserPosts, setSelectedUserPosts] = useState<Post[]>([]);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    // Проверяем авторизацию
    const token = localStorage.getItem('auth_token');
    const userStr = localStorage.getItem('current_user');
    
    if (!token || !userStr) {
      navigate('/about');
      return;
    }

    setCurrentUser(JSON.parse(userStr));
  }, [navigate]);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      const result = await usersAPI.search(searchQuery);
      if (result.success) {
        // Нормализуем данные пользователей из поиска
        const normalizedUsers = (result.users || []).map((user: any) => ({
          id: String(user._id || user.id),
          username: user.username,
          fullName: user.fullName,
          avatar: user.avatar,
          bio: user.bio,
          email: user.email,
          website: user.website,
          followers: typeof user.followers === 'number' ? user.followers : 0,
          following: typeof user.following === 'number' ? user.following : 0,
        }));
        setResults(normalizedUsers);
      }
    } catch (error) {
      console.error('Error searching users:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = async (username: string) => {
    try {
      console.log('🔍 Loading profile for username:', username);
      setLoadingProfile(true);
      
      // Всегда загружаем полные данные из API
      const result = await usersAPI.getByUsername(username);
      console.log('📦 API result:', result);
      
      // API возвращает либо { success: true, user: ... } либо { success: true, users: [...] }
      if (result.success) {
        const apiUser = result.user || (result.users && result.users[0]);
        
        if (apiUser) {
          console.log('👤 API user data:', apiUser);
          
          const normalizedUser: User = {
            id: String(apiUser._id || apiUser.id),
            username: apiUser.username,
            fullName: apiUser.fullName,
            email: apiUser.email || '',
            bio: apiUser.bio || '',
            avatar: apiUser.avatar,
            website: apiUser.website || '',
            followers: typeof apiUser.followers === 'number' ? apiUser.followers : 0,
            following: typeof apiUser.following === 'number' ? apiUser.following : 0,
          };
          
          console.log('✅ Normalized user:', normalizedUser);
          setSelectedUser(normalizedUser);
          
          // Загружаем посты этого пользователя
          const postsResult = await postsAPI.getByUserId(normalizedUser.id);
          console.log('📸 Posts result:', postsResult);
          if (postsResult.success) {
            setSelectedUserPosts(postsResult.posts || []);
          } else {
            setSelectedUserPosts([]);
          }
        } else {
          console.warn('⚠️ User not found in result:', result);
          alert('User not found');
        }
      } else {
        console.warn('⚠️ API error:', result);
        alert('User not found');
      }
    } catch (error) {
      console.error('❌ Error loading user profile:', error);
      alert('Failed to load user profile');
    } finally {
      setLoadingProfile(false);
    }
  };

  const handleBackToSearch = () => {
    setSelectedUser(null);
    setSelectedUserPosts([]);
    setFollowed(false);
  };

  // Если выбран пользователь, показываем его профиль
  if (selectedUser) {
    return (
      <div className="min-h-screen py-8 pl-64" style={{ background: 'transparent' }}>
        <div className="mx-auto max-w-4xl space-y-6 px-4">
          {/* Кнопка назад */}
          <button
            onClick={handleBackToSearch}
            className="mb-4 text-sm font-semibold text-sky-600 hover:text-sky-700 hover:underline"
          >
            ← Back to Search
          </button>

          {loadingProfile ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-slate-600">Loading profile...</p>
            </div>
          ) : (
            <>
              {/* Profile Card */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {selectedUser.avatar ? (
                      <img
                        src={selectedUser.avatar}
                        alt={selectedUser.username}
                        className="h-32 w-32 rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className={`flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 text-5xl font-semibold text-white ${selectedUser.avatar ? 'hidden' : ''}`}>
                      {selectedUser.username.charAt(0).toUpperCase()}
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-4">
                      <h1 className="text-2xl font-light text-slate-900">{selectedUser.username}</h1>
                      <button
                        onClick={async () => {
                          if (followed) return; // Предотвращаем повторное нажатие
                          
                          try {
                            const result = await usersAPI.follow(selectedUser.id);
                            if (result.success) {
                              // Обновляем счетчик подписчиков
                              setSelectedUser(prev => prev ? { ...prev, followers: (prev.followers || 0) + 1 } : null);
                              // Делаем кнопку неактивной
                              setFollowed(true);
                            }
                          } catch (error) {
                            console.error('Error following user:', error);
                          }
                        }}
                        disabled={followed}
                        className={`rounded-lg px-6 py-1.5 text-sm font-semibold transition ${
                          followed 
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                            : 'bg-sky-500 text-white hover:bg-sky-600'
                        }`}
                      >
                        {followed ? 'Following' : 'Follow'}
                      </button>
                    </div>

                    {/* Stats */}
                    <div className="mb-4 flex gap-8 text-base">
                      <div>
                        <span className="font-semibold text-slate-900">{selectedUserPosts.length}</span>{' '}
                        <span className="text-slate-600">posts</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">{selectedUser.followers || 0}</span>{' '}
                        <span className="text-slate-600">followers</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">{selectedUser.following || 0}</span>{' '}
                        <span className="text-slate-600">following</span>
                      </div>
                    </div>

                    {/* Name & Bio */}
                    <div>
                      <p className="font-semibold text-slate-900">{selectedUser.fullName}</p>
                      {selectedUser.bio && <p className="mt-1 text-sm text-slate-700 whitespace-pre-wrap">{selectedUser.bio}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <h2 className="text-base font-semibold text-slate-900">
                    {selectedUser.username}'s posts
                  </h2>
                </div>
                <div className="p-5" style={{ width: '80%', margin: '0 auto' }}>
                  {selectedUserPosts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                        <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="mb-1 text-sm font-semibold text-slate-900">No posts yet</h3>
                      <p className="text-xs text-slate-500">This user hasn't shared anything yet</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-1">
                      {selectedUserPosts.map((post) => (
                        <div key={post._id} className="relative aspect-square overflow-hidden bg-slate-100">
                          <img src={post.imageUrl} alt={post.caption} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Обычный вид поиска
  return (
    <div className="min-h-screen py-8 pl-64" style={{ background: 'transparent' }}>
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900" style={{ fontFamily: 'Brush Script MT, cursive' }}>
            ICHGRAM
          </h1>
          <p className="mt-2 text-slate-600">Search for users</p>
        </div>

        <SearchUsers
          query={query}
          results={results}
          loading={loading}
          onSearch={handleSearch}
          onUserClick={handleUserClick}
        />

        {!loading && query.trim().length >= 2 && results.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <svg className="mx-auto mb-4 h-16 w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">No users found</h3>
            <p className="text-slate-600">Try searching for a different username</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

