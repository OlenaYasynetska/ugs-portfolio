export type RichTextToken = {
  type: 'text' | 'link';
  value: string;
};

export type AuthField = {
  id: string;
  placeholder: string;
  type?: string;
  errorText?: string;
};

export type AuthFooter = {
  text: string;
  actionLabel: string;
};

export type AuthCard = {
  id: string;
  variant: 'signup' | 'signupError' | 'login';
  heading?: string;
  fields: AuthField[];
  infoBlocks?: RichTextToken[][];
  ctaLabel: string;
  footer?: AuthFooter;
  showDivider?: boolean;
  supportLink?: string;
};

export const brandLabel = 'ICHGRAM';

const sharedInfoBlocks: RichTextToken[][] = [
  [
    { type: 'text', value: 'People who use our service may have uploaded your contact information to Instagram. ' },
    { type: 'link', value: 'Learn More' },
  ],
  [
    { type: 'text', value: 'By signing up, you agree to our ' },
    { type: 'link', value: 'Terms' },
    { type: 'text', value: ', ' },
    { type: 'link', value: 'Privacy Policy' },
    { type: 'text', value: ' and ' },
    { type: 'link', value: 'Cookies Policy' },
    { type: 'text', value: '.' },
  ],
];

export const authCards: AuthCard[] = [
  {
    id: 'signup',
    variant: 'signup',
    heading: 'Sign up to see photos and videos from your friends.',
    fields: [
      { id: 'email', placeholder: 'Email', type: 'email' },
      { id: 'fullName', placeholder: 'Full Name' },
      { id: 'username', placeholder: 'Username' },
      { id: 'password', placeholder: 'Password', type: 'password' },
    ],
    infoBlocks: sharedInfoBlocks,
    ctaLabel: 'Sign up',
  },
  {
    id: 'signup-error',
    variant: 'signupError',
    heading: 'Sign up to see photos and videos from your friends.',
    fields: [
      { id: 'email', placeholder: 'Email', type: 'email' },
      { id: 'fullName', placeholder: 'Full Name' },
      { id: 'username', placeholder: 'Username', errorText: 'This username is already taken.' },
      { id: 'password', placeholder: 'Password', type: 'password' },
    ],
    infoBlocks: sharedInfoBlocks,
    ctaLabel: 'Sign up',
    footer: {
      text: 'Have an account?',
      actionLabel: 'Log in',
    },
  },
  {
    id: 'login',
    variant: 'login',
    fields: [
      { id: 'login', placeholder: 'Username, or email' },
      { id: 'password', placeholder: 'Password', type: 'password' },
    ],
    ctaLabel: 'Log in',
    showDivider: true,
    supportLink: 'Forgot password?',
    footer: {
      text: "Don't have an account?",
      actionLabel: 'Sign up',
    },
  },
];

// ========== Backend API Types & Mock Data ==========

export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  avatar?: string;
  bio?: string;
  followers: number;
  following: number;
  createdAt: string;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  userAvatar?: string;
  imageUrl: string;
  caption: string;
  likes: number;
  likedByUser: boolean;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
}

// Mock Users Database with LocalStorage persistence
const defaultUsers: User[] = [
  {
    id: 'user-1',
    username: 'john_doe',
    fullName: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Photographer 📷 | Traveler ✈️',
    followers: 1523,
    following: 342,
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'user-2',
    username: 'jane_smith',
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=45',
    bio: 'Designer | Coffee lover ☕',
    followers: 2341,
    following: 567,
    createdAt: '2024-02-20T14:20:00Z',
  },
  {
    id: 'user-3',
    username: 'alex_dev',
    fullName: 'Alex Developer',
    email: 'alex@example.com',
    avatar: 'https://i.pravatar.cc/150?img=33',
    bio: 'Full-stack developer 💻',
    followers: 892,
    following: 234,
    createdAt: '2024-03-10T09:15:00Z',
  },
];

// Load users from LocalStorage or use defaults
const loadUsers = (): User[] => {
  try {
    const stored = localStorage.getItem('snapverse_users');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load users from localStorage:', error);
  }
  return [...defaultUsers];
};

// Save users to LocalStorage
const saveUsers = (users: User[]) => {
  try {
    localStorage.setItem('snapverse_users', JSON.stringify(users));
    console.log('💾 Users saved to localStorage');
  } catch (error) {
    console.error('Failed to save users to localStorage:', error);
  }
};

const mockUsers: User[] = loadUsers();

// Load posts from LocalStorage or use defaults
const defaultPosts: Post[] = [
  {
    id: 'post-1',
    userId: 'user-1',
    username: 'john_doe',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    imageUrl: 'https://picsum.photos/600/600?random=1',
    caption: 'Beautiful sunset at the beach 🌅 #nature #photography',
    likes: 245,
    likedByUser: false,
    comments: [
      {
        id: 'comment-1',
        userId: 'user-2',
        username: 'jane_smith',
        text: 'Stunning shot! 😍',
        createdAt: '2024-11-12T15:30:00Z',
      },
      {
        id: 'comment-2',
        userId: 'user-3',
        username: 'alex_dev',
        text: 'Amazing colors!',
        createdAt: '2024-11-12T16:45:00Z',
      },
    ],
    createdAt: '2024-11-12T14:22:00Z',
  },
  {
    id: 'post-2',
    userId: 'user-2',
    username: 'jane_smith',
    userAvatar: 'https://i.pravatar.cc/150?img=45',
    imageUrl: 'https://picsum.photos/600/600?random=2',
    caption: 'New design project coming soon! 🎨✨',
    likes: 412,
    likedByUser: true,
    comments: [
      {
        id: 'comment-3',
        userId: 'user-1',
        username: 'john_doe',
        text: "Can't wait to see it!",
        createdAt: '2024-11-13T10:20:00Z',
      },
    ],
    createdAt: '2024-11-13T09:15:00Z',
  },
  {
    id: 'post-3',
    userId: 'user-3',
    username: 'alex_dev',
    userAvatar: 'https://i.pravatar.cc/150?img=33',
    imageUrl: 'https://picsum.photos/600/600?random=3',
    caption: 'Late night coding session 💻🌙 #developer #coding',
    likes: 178,
    likedByUser: false,
    comments: [],
    createdAt: '2024-11-13T02:45:00Z',
  },
];

const loadPosts = (): Post[] => {
  try {
    const stored = localStorage.getItem('snapverse_posts');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load posts from localStorage:', error);
  }
  return [...defaultPosts];
};

const savePosts = (posts: Post[]) => {
  try {
    localStorage.setItem('snapverse_posts', JSON.stringify(posts));
    console.log('💾 Posts saved to localStorage');
  } catch (error) {
    console.error('Failed to save posts to localStorage:', error);
  }
};

const mockPosts: Post[] = loadPosts();

// ========== SnapVerse Backend API ==========

// Simulate JWT token generation
const generateMockToken = (userId: string): string => {
  return `mock.jwt.token.${userId}.${Date.now()}`;
};

// User Authentication
export const mockAuthAPI = {
  signup: (email: string, fullName: string, username: string, password: string): AuthResponse => {
    // Check if username exists
    const existingUser = mockUsers.find((u) => u.username === username);
    if (existingUser) {
      return { success: false, error: 'Username already taken' };
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      username,
      fullName,
      email,
      followers: 0,
      following: 0,
      createdAt: new Date().toISOString(),
    };

    mockUsers.push(newUser);
    saveUsers(mockUsers); // Save to localStorage
    const token = generateMockToken(newUser.id);

    return { success: true, token, user: newUser };
  },

  login: (loginInput: string, password: string): AuthResponse => {
    const user = mockUsers.find((u) => u.username === loginInput || u.email === loginInput);

    if (!user) {
      return { success: false, error: 'User not found' };
    }

    // Mock password validation (always succeeds for demo)
    const token = generateMockToken(user.id);
    return { success: true, token, user };
  },

  validateToken: (token: string): User | null => {
    const userId = token.split('.')[3];
    return mockUsers.find((u) => u.id === userId) || null;
  },
};

// Posts CRUD Operations
export const mockPostsAPI = {
  getAll: (): Post[] => {
    return [...mockPosts].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  getById: (postId: string): Post | null => {
    return mockPosts.find((p) => p.id === postId) || null;
  },

  getByUserId: (userId: string): Post[] => {
    return mockPosts.filter((p) => p.userId === userId);
  },

  create: (userId: string, imageUrl: string, caption: string): Post => {
    const user = mockUsers.find((u) => u.id === userId);
    if (!user) throw new Error('User not found');

    const newPost: Post = {
      id: `post-${Date.now()}`,
      userId,
      username: user.username,
      userAvatar: user.avatar,
      imageUrl,
      caption,
      likes: 0,
      likedByUser: false,
      comments: [],
      createdAt: new Date().toISOString(),
    };

    mockPosts.push(newPost);
    savePosts(mockPosts);
    return newPost;
  },

  update: (postId: string, caption: string): Post | null => {
    const post = mockPosts.find((p) => p.id === postId);
    if (!post) return null;

    post.caption = caption;
    savePosts(mockPosts);
    return post;
  },

  delete: (postId: string): boolean => {
    const index = mockPosts.findIndex((p) => p.id === postId);
    if (index === -1) return false;

    mockPosts.splice(index, 1);
    savePosts(mockPosts);
    return true;
  },
};

// Comments & Likes
export const mockInteractionsAPI = {
  likePost: (postId: string, userId: string): boolean => {
    const post = mockPosts.find((p) => p.id === postId);
    if (!post) return false;

    if (!post.likedByUser) {
      post.likes += 1;
      post.likedByUser = true;
      savePosts(mockPosts);
    }
    return true;
  },

  unlikePost: (postId: string, userId: string): boolean => {
    const post = mockPosts.find((p) => p.id === postId);
    if (!post) return false;

    if (post.likedByUser) {
      post.likes -= 1;
      post.likedByUser = false;
      savePosts(mockPosts);
    }
    return true;
  },

  addComment: (postId: string, userId: string, text: string): Comment | null => {
    const post = mockPosts.find((p) => p.id === postId);
    const user = mockUsers.find((u) => u.id === userId);

    if (!post || !user) return null;

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      userId,
      username: user.username,
      text,
      createdAt: new Date().toISOString(),
    };

    post.comments.push(newComment);
    savePosts(mockPosts);
    return newComment;
  },

  deleteComment: (postId: string, commentId: string): boolean => {
    const post = mockPosts.find((p) => p.id === postId);
    if (!post) return false;

    const index = post.comments.findIndex((c) => c.id === commentId);
    if (index === -1) return false;

    post.comments.splice(index, 1);
    savePosts(mockPosts);
    return true;
  },
};

// User Search & Profile Management
export const mockUsersAPI = {
  search: (query: string): User[] => {
    const lowerQuery = query.toLowerCase();
    return mockUsers.filter(
      (u) =>
        u.username.toLowerCase().includes(lowerQuery) ||
        u.fullName.toLowerCase().includes(lowerQuery)
    );
  },

  getById: (userId: string): User | null => {
    return mockUsers.find((u) => u.id === userId) || null;
  },

  updateProfile: (
    userId: string,
    updates: Partial<Pick<User, 'fullName' | 'bio' | 'avatar'>>
  ): User | null => {
    const user = mockUsers.find((u) => u.id === userId);
    if (!user) return null;

    if (updates.fullName) user.fullName = updates.fullName;
    if (updates.bio !== undefined) user.bio = updates.bio;
    if (updates.avatar !== undefined) user.avatar = updates.avatar;

    saveUsers(mockUsers);
    return user;
  },

  follow: (followerId: string, targetUserId: string): boolean => {
    const target = mockUsers.find((u) => u.id === targetUserId);
    if (!target) return false;

    target.followers += 1;
    saveUsers(mockUsers);
    return true;
  },

  unfollow: (followerId: string, targetUserId: string): boolean => {
    const target = mockUsers.find((u) => u.id === targetUserId);
    if (!target) return false;

    target.followers = Math.max(0, target.followers - 1);
    saveUsers(mockUsers);
    return true;
  },
};

// Export mock data for components
export { mockUsers, mockPosts };
