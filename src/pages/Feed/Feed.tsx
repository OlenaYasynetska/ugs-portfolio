import { useState, useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { postsAPI } from '../../api/client';
import { PostCard } from '../../components/SnapVerse/PostCard';

interface User {
  id: string;
  username: string;
  fullName: string;
  avatar?: string;
}

interface Comment {
  _id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: Date;
}

interface Post {
  _id: string;
  userId: string;
  username: string;
  caption: string;
  imageUrl: string;
  likes: string[];
  comments: Comment[];
  createdAt: Date;
}

const Feed: FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Проверяем авторизацию
    const token = localStorage.getItem('auth_token');
    const userStr = localStorage.getItem('current_user');
    
    if (!token || !userStr) {
      navigate('/about');
      return;
    }

    setCurrentUser(JSON.parse(userStr));
    loadPosts();
  }, [navigate]);

  const generateRandomPosts = () => {
    setLoading(true);
    
    // Массив случайных изображений
    const randomImages = [
      'https://picsum.photos/600/600?random=1',
      'https://picsum.photos/600/600?random=2',
      'https://picsum.photos/600/600?random=3',
      'https://picsum.photos/600/600?random=4',
      'https://picsum.photos/600/600?random=5',
      'https://picsum.photos/600/600?random=6',
      'https://picsum.photos/600/600?random=7',
      'https://picsum.photos/600/600?random=8',
      'https://picsum.photos/600/600?random=9',
      'https://picsum.photos/600/600?random=10',
    ];

    // Массив случайных подписей
    const randomCaptions = [
      'Хочу на море 🌊',
      'Проект с участием выпускников IT Career Hub',
      'Получите инструкцию к поиску работы в Германии',
      'Какие бонусы получают наши студенты?',
      'Студентка з трема дітьми та большой мечтой',
      'Beautiful sunset 🌅',
      'Amazing view from the mountains ⛰️',
      'Coffee time ☕',
      'New adventures await 🚀',
      'Living my best life 💫',
    ];

    // Генерируем 6 случайных постов
    const generatedPosts: Post[] = [];
    const usedIndices = new Set<number>();

    for (let i = 0; i < 6; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * randomImages.length);
      } while (usedIndices.has(randomIndex));
      usedIndices.add(randomIndex);

      const randomLikesCount = Math.floor(Math.random() * 50);
      generatedPosts.push({
        _id: `post-${Date.now()}-${i}`,
        id: `post-${Date.now()}-${i}`,
        userId: currentUser?.id || 'user-1',
        username: currentUser?.username || 'user',
        caption: randomCaptions[randomIndex],
        imageUrl: randomImages[randomIndex],
        likes: Array.from({ length: randomLikesCount }, (_, idx) => `user-${idx}`),
        likedByUser: false,
        comments: [],
        createdAt: new Date(),
      });
    }

    // Перемешиваем посты для случайного порядка
    const shuffled = generatedPosts.sort(() => Math.random() - 0.5);
    
    setPosts(shuffled);
    setLoading(false);
  };

  const loadPosts = async () => {
    try {
      setLoading(true);
      const result = await postsAPI.getAll();
      if (result.success) {
        // Перемешиваем посты в случайном порядке
        const shuffledPosts = (result.posts || []).sort(() => Math.random() - 0.5);
        // Берем только первые 6 постов
        const limitedPosts = shuffledPosts.slice(0, 6);
        setPosts(limitedPosts);
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      const post = posts.find(p => p._id === postId);
      if (!post || !currentUser) return;

      const isLiked = post.likes.includes(currentUser.id);
      
      if (isLiked) {
        await postsAPI.unlike(postId);
      } else {
        await postsAPI.like(postId);
      }
      
      // Обновляем локальное состояние
      setPosts(posts.map(p => {
        if (p._id === postId) {
          return {
            ...p,
            likes: isLiked 
              ? p.likes.filter(id => id !== currentUser.id)
              : [...p.likes, currentUser.id]
          };
        }
        return p;
      }));
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleComment = async (postId: string, text: string) => {
    try {
      const result = await postsAPI.addComment(postId, text);
      if (result.success) {
        // Обновляем пост с новым комментарием
        loadPosts();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center pl-64" style={{ background: 'transparent' }}>
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600"></div>
          <p className="text-slate-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 pl-64" style={{ background: 'transparent' }}>
      <div className="mx-auto px-4" style={{ width: '80%' }}>
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900" style={{ fontFamily: 'Brush Script MT, cursive' }}>
            ICHGRAM
          </h1>
          <p className="mt-2 text-slate-600">Welcome back, {currentUser?.username}!</p>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <svg className="mx-auto mb-4 h-16 w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">No posts yet</h3>
            <p className="text-slate-600">Be the first to share something!</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                currentUserId={currentUser?.id || ''}
                onLike={handleLike}
                onComment={handleComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;

