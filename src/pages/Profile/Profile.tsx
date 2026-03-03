import { useState, useEffect, type FC } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { usersAPI, postsAPI, authAPI } from '../../api/client';
import { EditProfile } from '../../components/SnapVerse/EditProfile';
import { MyPosts } from '../../components/SnapVerse/MyPosts';
import { CreatePost } from '../../components/SnapVerse/CreatePost';

interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  bio?: string;
  avatar?: string;
  website?: string;
  followers: number;
  following: number;
  createdAt: Date | string;
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

const Profile: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useParams<{ username?: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreatingPost, setIsCreatingPost] = useState(() => {
    const fromState = Boolean((location.state as any)?.openCreate);
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get('create') === '1';
    return fromState || fromQuery;
  });

  useEffect(() => {
    // Проверяем авторизацию
    const token = localStorage.getItem('auth_token');
    const userStr = localStorage.getItem('current_user');
    
    if (!token || !userStr) {
      navigate('/about');
      return;
    }

    const loggedUser = JSON.parse(userStr);
    setCurrentUser(loggedUser);

    // Если username не указан, показываем профиль текущего пользователя
    const profileUsername = username || loggedUser.username;
    loadProfile(profileUsername);
  }, [username, navigate]);

  // Синхронизируем режим Create с параметром ?create=1 и state.openCreate,
  // чтобы кнопка Create внизу/слева всегда открывала форму создания поста.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get('create') === '1';
    const fromState = Boolean((location.state as any)?.openCreate);
    const shouldBeCreating = fromQuery || fromState;
    if (shouldBeCreating !== isCreatingPost) {
      setIsCreatingPost(shouldBeCreating);
    }
  }, [location.search, location.state, isCreatingPost]);

  const loadProfile = async (profileUsername: string) => {
    try {
      setLoading(true);
      
      const currentUserStr = localStorage.getItem('current_user');
      const currentUserData = currentUserStr ? JSON.parse(currentUserStr) : null;
      
      // Если username указан в URL и это не текущий пользователь, загружаем из API
      if (username && username !== currentUserData?.username) {
        console.log('🔍 Loading profile for username from API:', profileUsername);
        const result = await usersAPI.getByUsername(profileUsername);
        
        if (result.success && result.user) {
          const apiUser = result.user;
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
            createdAt: apiUser.createdAt || new Date(),
          };
          setUser(normalizedUser);
          
          // Загружаем посты этого пользователя
          const postsResult = await postsAPI.getByUserId(normalizedUser.id);
          if (postsResult.success) {
            setPosts(postsResult.posts || []);
          } else {
            setPosts([]);
          }
        } else {
          setUser(null);
          setPosts([]);
        }
      } else {
        // Загружаем данные текущего пользователя из localStorage
        if (currentUserStr) {
          const userData = JSON.parse(currentUserStr);
          setUser(userData);
          console.log('👤 Current user:', userData);
        }

        // Загружаем все посты и фильтруем по текущему пользователю
        const postsResult = await postsAPI.getAll();
        if (postsResult.success && currentUserData) {
          const userPosts = postsResult.posts?.filter(
            (p: Post) => p.userId === currentUserData.id || p.username === currentUserData.username
          ) || [];
          console.log('✅ User posts found:', userPosts.length);
          setPosts(userPosts);
        }
      }
    } catch (error) {
      console.error('❌ Error loading profile:', error);
      setUser(null);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (data: { fullName: string; bio: string; avatar?: string; website?: string }) => {
    try {
      console.log('Updating profile with data:', data);
      const result = await usersAPI.updateProfile(data);
      console.log('Update result:', result);
      
      if (result.success) {
        const updatedCurrentUser = { ...(currentUser || {}), ...data };
        setCurrentUser(updatedCurrentUser as User);
        localStorage.setItem('current_user', JSON.stringify(updatedCurrentUser));
        await loadProfile(user?.username || '');
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleFollow = async (userId: string) => {
    try {
      console.log('🔄 Following/Unfollowing user:', userId);
      
      // Просто вызываем follow (backend сам разберется)
      const result = await usersAPI.follow(userId);
      
      if (result.success) {
        console.log('✅ Follow successful!');
        // Перезагружаем профиль для обновления счетчиков
        loadProfile(user?.username || '');
      }
    } catch (error) {
      console.error('❌ Error following/unfollowing:', error);
      alert('Failed to follow/unfollow user');
    }
  };

  const handleUnfollow = async (userId: string) => {
    try {
      console.log('🔄 Unfollowing user:', userId);
      
      const result = await usersAPI.unfollow(userId);
      
      if (result.success) {
        console.log('✅ Unfollow successful!');
        // Перезагружаем профиль для обновления счетчиков
        loadProfile(user?.username || '');
      }
    } catch (error) {
      console.error('❌ Error unfollowing:', error);
      alert('Failed to unfollow user');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_user');
    navigate('/about');
  };

  const handleCreatePost = async (imageUrl: string, caption: string) => {
    try {
      const result = await postsAPI.create(imageUrl, caption);
      if (result.success) {
        await loadProfile(user?.username || currentUser?.username || '');
        setIsCreatingPost(false);
        navigate('/profile', { replace: true });
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        const result = await postsAPI.delete(postId);
        if (result.success) {
          setPosts(posts.filter(p => p._id !== postId));
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center ml-0 md:ml-20 lg:ml-64" style={{ background: 'transparent' }}>
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600"></div>
          <p className="text-slate-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center ml-0 md:ml-20 lg:ml-64" style={{ background: 'transparent' }}>
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-semibold text-slate-900">User not found</h2>
          <button
            onClick={() => navigate('/feed')}
            className="text-sky-600 hover:underline"
          >
            Back to Feed
          </button>
        </div>
      </div>
    );
  }

  const isOwnProfile = currentUser?.username === user.username;

  const renderPublicPosts = () => (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">
          {user?.username}'s posts
        </h2>
      </div>
      <div className="p-5" style={{ width: '80%', margin: '0 auto' }}>
        {posts.length === 0 ? (
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
            {posts.map((post) => (
              <div key={post._id} className="relative aspect-square overflow-hidden bg-slate-100">
                <img src={post.imageUrl} alt={post.caption} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-8 ml-0 md:ml-20 lg:ml-64" style={{ background: 'transparent' }}>
      <div className="mx-auto max-w-4xl space-y-6 px-4">
        {isCreatingPost ? (
          <div className="max-h-[calc(100vh-160px)] overflow-y-auto pr-1">
            <div className="mb-6 text-center">
              <h1
                className="text-4xl font-bold text-slate-900"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                ICHGRAM
              </h1>
            </div>
            <CreatePost
              onSave={handleCreatePost}
              onCancel={() => {
                setIsCreatingPost(false);
                navigate('/profile', { replace: true });
              }}
            />
          </div>
        ) : isEditing ? (
          <EditProfile
            user={user}
            onSave={(data) => {
              handleUpdateProfile(data);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            {/* Profile Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="h-32 w-32 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 text-5xl font-semibold text-white">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-4">
                    <h1 className="text-2xl font-light text-slate-900">{user.username}</h1>
                    {isOwnProfile ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="rounded-lg border border-slate-300 px-4 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                      >
                        Edit profile
                      </button>
                    ) : (
                      <button
                        onClick={() => handleFollow(user.id)}
                        className="rounded-lg bg-sky-500 px-6 py-1.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                      >
                        Follow
                      </button>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="mb-4 flex gap-8 text-base">
                    <div>
                      <span className="font-semibold text-slate-900">{posts.length}</span>{' '}
                      <span className="text-slate-600">posts</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">{user.followers}</span>{' '}
                      <span className="text-slate-600">followers</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">{user.following}</span>{' '}
                      <span className="text-slate-600">following</span>
                    </div>
                  </div>

                  {/* Name & Bio */}
                  <div>
                    <p className="font-semibold text-slate-900">{user.fullName}</p>
                    {user.bio && <p className="mt-1 text-sm text-slate-700 whitespace-pre-wrap">{user.bio}</p>}
                  </div>
                </div>
              </div>
            </div>
            
            {isOwnProfile ? (
              <MyPosts
                posts={posts}
                onDeletePost={handleDeletePost}
                onCreatePost={() => {
                  setIsCreatingPost(true);
                  navigate('/profile?create=1');
                }}
              />
            ) : (
              renderPublicPosts()
            )}
          </>
        )}
      </div>

    </div>
  );
};

export default Profile;

