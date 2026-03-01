// SnapVerse API Client
// Connects React frontend to Node.js backend

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token
const getToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

// Helper function to make API requests
const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const token = getToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'API request failed');
    }

    return data;
  } catch (error: any) {
    console.error('API Error:', error);
    if (error?.message === 'Failed to fetch' || error?.name === 'TypeError') {
      throw new Error(
        'Server is not reachable. Make sure the backend is running (cd backend → npm run dev, port 5000).'
      );
    }
    throw error;
  }
};

// ========== Authentication API ==========

export const authAPI = {
  // Register new user
  signup: async (
    email: string,
    fullName: string,
    username: string,
    password: string
  ) => {
    const data = await apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, fullName, username, password }),
    });

    if (data.success && data.token) {
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('current_user', JSON.stringify(data.user));
    }

    return data;
  },

  // Login user
  login: async (loginInput: string, password: string) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ loginInput, password }),
    });

    if (data.success && data.token) {
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('current_user', JSON.stringify(data.user));
    }

    return data;
  },

  // Get current user
  getMe: async () => {
    return await apiRequest('/auth/me');
  },

  // Logout
  logout: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_user');
  },

  // Check if user is logged in
  isAuthenticated: (): boolean => {
    return !!getToken();
  },

  // Get current user from localStorage
  getCurrentUser: () => {
    const userStr = localStorage.getItem('current_user');
    return userStr ? JSON.parse(userStr) : null;
  },
};

// ========== Posts API ==========

export const postsAPI = {
  // Get all posts
  getAll: async () => {
    return await apiRequest('/posts');
  },

  // Get single post
  getById: async (postId: string) => {
    return await apiRequest(`/posts/${postId}`);
  },

  // Get user's posts
  getByUserId: async (userId: string) => {
    return await apiRequest(`/posts/user/${userId}`);
  },

  // Create new post
  create: async (imageUrl: string, caption: string) => {
    return await apiRequest('/posts', {
      method: 'POST',
      body: JSON.stringify({ imageUrl, caption }),
    });
  },

  // Update post
  update: async (postId: string, caption: string) => {
    return await apiRequest(`/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ caption }),
    });
  },

  // Delete post
  delete: async (postId: string) => {
    return await apiRequest(`/posts/${postId}`, {
      method: 'DELETE',
    });
  },

  // Like post
  like: async (postId: string) => {
    return await apiRequest(`/posts/${postId}/like`, {
      method: 'POST',
    });
  },

  // Unlike post
  unlike: async (postId: string) => {
    return await apiRequest(`/posts/${postId}/like`, {
      method: 'DELETE',
    });
  },

  // Add comment
  addComment: async (postId: string, text: string) => {
    return await apiRequest(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ text }),
    });
  },

  // Delete comment
  deleteComment: async (postId: string, commentId: string) => {
    return await apiRequest(`/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
    });
  },
};

// ========== Interactions API (Likes & Comments) ==========

export const interactionsAPI = {
  // Like post
  likePost: async (postId: string) => {
    return await apiRequest(`/posts/${postId}/like`, {
      method: 'POST',
    });
  },

  // Unlike post
  unlikePost: async (postId: string) => {
    return await apiRequest(`/posts/${postId}/like`, {
      method: 'DELETE',
    });
  },

  // Add comment
  addComment: async (postId: string, text: string) => {
    return await apiRequest(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ text }),
    });
  },

  // Delete comment
  deleteComment: async (postId: string, commentId: string) => {
    return await apiRequest(`/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
    });
  },
};

// ========== Users API ==========

export const usersAPI = {
  // Search users
  search: async (query: string) => {
    return await apiRequest(`/users/search?q=${encodeURIComponent(query)}`);
  },

  // Get user by username (используем search с exact=true)
  getByUsername: async (username: string) => {
    return await apiRequest(`/users/search?q=${encodeURIComponent(username)}&exact=true`);
  },

  // Get user by ID
  getById: async (userId: string) => {
    return await apiRequest(`/users/${userId}`);
  },

  // Update profile
  updateProfile: async (updates: {
    fullName?: string;
    bio?: string;
    avatar?: string;
    website?: string;
  }) => {
    return await apiRequest('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  // Follow user
  follow: async (userId: string) => {
    return await apiRequest(`/users/${userId}/follow`, {
      method: 'POST',
    });
  },

  // Unfollow user
  unfollow: async (userId: string) => {
    return await apiRequest(`/users/${userId}/follow`, {
      method: 'DELETE',
    });
  },
};

// ========== Notifications API ==========

export const notificationsAPI = {
  // Get all notifications
  getAll: async () => {
    return await apiRequest('/notifications');
  },

  // Get unread count
  getUnreadCount: async () => {
    return await apiRequest('/notifications/unread-count');
  },

  // Mark as read
  markAsRead: async (notificationId: string) => {
    return await apiRequest(`/notifications/${notificationId}/read`, {
      method: 'PUT',
    });
  },

  // Mark all as read
  markAllAsRead: async () => {
    return await apiRequest('/notifications/read-all', {
      method: 'PUT',
    });
  },
};

// ========== Messages API ==========

export const messagesAPI = {
  // Get all conversations
  getConversations: async () => {
    return await apiRequest('/messages/conversations');
  },

  // Get messages with a specific user
  getMessages: async (userId: string) => {
    return await apiRequest(`/messages/${userId}`);
  },

  // Send a message
  sendMessage: async (recipientId: string, text: string) => {
    return await apiRequest('/messages', {
      method: 'POST',
      body: JSON.stringify({ recipientId, text }),
    });
  },

  // Mark messages as read
  markAsRead: async (userId: string) => {
    return await apiRequest(`/messages/${userId}/read`, {
      method: 'PUT',
    });
  },

  // Get unread messages count
  getUnreadCount: async () => {
    return await apiRequest('/messages/unread-count');
  },
};

// ========== Health Check ==========

export const healthCheck = async () => {
  try {
    const response = await fetch(`${API_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error('Backend is not reachable:', error);
    return { success: false, error: 'Backend is offline' };
  }
};

