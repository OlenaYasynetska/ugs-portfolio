# SnapVerse Backend API Documentation

## 📚 Overview

This is a **full-featured mock backend** for SnapVerse, a photo and post-sharing service. All data is persisted in **LocalStorage** and remains after page reloads.

**Based on:** [SnapVerse-backend](https://github.com/OlenaYasynetska/SnapVerse-backend)

---

## 🗄️ Data Storage

### LocalStorage Keys:
- `snapverse_users` - User accounts database
- `snapverse_posts` - Posts database

### Data Persistence:
- ✅ Survives page reloads
- ✅ Survives browser restarts
- ❌ Cleared when LocalStorage is cleared
- ❌ Not shared between different browsers

---

## 🔐 Authentication API

### `mockAuthAPI.signup()`

**Description:** Register a new user account

**Parameters:**
```typescript
signup(
  email: string,
  fullName: string,
  username: string,
  password: string
): AuthResponse
```

**Returns:**
```typescript
{
  success: boolean;
  token?: string;        // JWT-like token
  user?: User;           // User object
  error?: string;        // Error message if failed
}
```

**Example:**
```typescript
import { mockAuthAPI } from './data/dbMassages';

const result = mockAuthAPI.signup(
  'olena@example.com',
  'Olena Yasynetska',
  'olena_dev',
  'password123'
);

if (result.success) {
  console.log('✅ User registered:', result.user);
  console.log('🔑 Token:', result.token);
} else {
  console.log('❌ Error:', result.error);
}
```

**Validation:**
- ❌ Username must be unique
- ✅ Auto-generates user ID
- ✅ Auto-saves to LocalStorage

---

### `mockAuthAPI.login()`

**Description:** Login with username/email and password

**Parameters:**
```typescript
login(
  loginInput: string,   // Username or email
  password: string
): AuthResponse
```

**Returns:** Same as `signup()`

**Example:**
```typescript
const result = mockAuthAPI.login('olena_dev', 'password123');

if (result.success) {
  console.log('✅ Login successful');
  localStorage.setItem('auth_token', result.token);
} else {
  console.log('❌ Invalid credentials');
}
```

---

### `mockAuthAPI.validateToken()`

**Description:** Validate JWT token and get user info

**Parameters:**
```typescript
validateToken(token: string): AuthResponse
```

**Example:**
```typescript
const token = localStorage.getItem('auth_token');
const result = mockAuthAPI.validateToken(token);

if (result.success) {
  console.log('✅ Token valid, user:', result.user);
} else {
  console.log('❌ Token invalid or expired');
}
```

---

## 📝 Posts API

### `mockPostsAPI.getAll()`

**Description:** Get all posts (sorted by newest first)

**Returns:** `Post[]`

**Example:**
```typescript
import { mockPostsAPI } from './data/dbMassages';

const posts = mockPostsAPI.getAll();
console.log('📄 Total posts:', posts.length);
```

---

### `mockPostsAPI.getById()`

**Description:** Get a single post by ID

**Parameters:**
```typescript
getById(postId: string): Post | null
```

**Example:**
```typescript
const post = mockPostsAPI.getById('post-1');
if (post) {
  console.log('📷 Post:', post.caption);
}
```

---

### `mockPostsAPI.getByUserId()`

**Description:** Get all posts by a specific user

**Parameters:**
```typescript
getByUserId(userId: string): Post[]
```

**Example:**
```typescript
const userPosts = mockPostsAPI.getByUserId('user-1');
console.log('📸 User has', userPosts.length, 'posts');
```

---

### `mockPostsAPI.create()`

**Description:** Create a new post

**Parameters:**
```typescript
create(
  userId: string,
  username: string,
  userAvatar: string,
  imageUrl: string,
  caption: string
): Post
```

**Returns:** Newly created `Post` object

**Example:**
```typescript
const newPost = mockPostsAPI.create(
  'user-1',
  'olena_dev',
  'https://i.pravatar.cc/150?img=1',
  'https://picsum.photos/600/800',
  'Beautiful sunset 🌅 #nature #photography'
);

console.log('✅ Post created:', newPost.id);
```

**Auto-generated:**
- ✅ Post ID
- ✅ Timestamp
- ✅ Initial likes (0)
- ✅ Empty comments array
- ✅ Saves to LocalStorage

---

### `mockPostsAPI.update()`

**Description:** Update post caption

**Parameters:**
```typescript
update(postId: string, caption: string): Post | null
```

**Example:**
```typescript
const updated = mockPostsAPI.update('post-1', 'New caption! 🎉');
if (updated) {
  console.log('✅ Post updated');
}
```

---

### `mockPostsAPI.delete()`

**Description:** Delete a post

**Parameters:**
```typescript
delete(postId: string): boolean
```

**Example:**
```typescript
const deleted = mockPostsAPI.delete('post-1');
if (deleted) {
  console.log('✅ Post deleted');
}
```

---

## 💬 Interactions API (Likes & Comments)

### `mockInteractionsAPI.likePost()`

**Description:** Like a post

**Parameters:**
```typescript
likePost(postId: string, userId: string): boolean
```

**Example:**
```typescript
import { mockInteractionsAPI } from './data/dbMassages';

const liked = mockInteractionsAPI.likePost('post-1', 'user-1');
if (liked) {
  console.log('❤️ Post liked!');
}
```

---

### `mockInteractionsAPI.unlikePost()`

**Description:** Unlike a post

**Parameters:**
```typescript
unlikePost(postId: string, userId: string): boolean
```

---

### `mockInteractionsAPI.addComment()`

**Description:** Add a comment to a post

**Parameters:**
```typescript
addComment(
  postId: string,
  userId: string,
  text: string
): Comment | null
```

**Returns:**
```typescript
{
  id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: string;
}
```

**Example:**
```typescript
const comment = mockInteractionsAPI.addComment(
  'post-1',
  'user-1',
  'Amazing photo! 😍'
);

if (comment) {
  console.log('💬 Comment added:', comment.id);
}
```

---

### `mockInteractionsAPI.deleteComment()`

**Description:** Delete a comment

**Parameters:**
```typescript
deleteComment(postId: string, commentId: string): boolean
```

---

## 👥 Users API

### `mockUsersAPI.search()`

**Description:** Search users by username or full name

**Parameters:**
```typescript
search(query: string): User[]
```

**Example:**
```typescript
import { mockUsersAPI } from './data/dbMassages';

const results = mockUsersAPI.search('olena');
console.log('🔍 Found', results.length, 'users');
```

**Search:**
- ✅ Case-insensitive
- ✅ Searches username
- ✅ Searches full name
- ✅ Returns all matches

---

### `mockUsersAPI.getById()`

**Description:** Get user by ID

**Parameters:**
```typescript
getById(userId: string): User | null
```

---

### `mockUsersAPI.updateProfile()`

**Description:** Update user profile

**Parameters:**
```typescript
updateProfile(
  userId: string,
  updates: Partial<Pick<User, 'fullName' | 'bio' | 'avatar'>>
): User | null
```

**Example:**
```typescript
const updated = mockUsersAPI.updateProfile('user-1', {
  fullName: 'Olena Yasynetska',
  bio: 'Full-stack developer 💻 | TypeScript lover',
  avatar: 'https://i.pravatar.cc/150?img=50'
});

if (updated) {
  console.log('✅ Profile updated');
}
```

---

### `mockUsersAPI.follow()`

**Description:** Follow a user

**Parameters:**
```typescript
follow(followerId: string, targetUserId: string): boolean
```

**Example:**
```typescript
const followed = mockUsersAPI.follow('user-1', 'user-2');
if (followed) {
  console.log('✅ Now following user-2');
}
```

**Updates:**
- ✅ Increments target user's followers count
- ✅ Saves to LocalStorage

---

### `mockUsersAPI.unfollow()`

**Description:** Unfollow a user

**Parameters:**
```typescript
unfollow(followerId: string, targetUserId: string): boolean
```

---

## 📊 Data Types

### User
```typescript
interface User {
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
```

### Post
```typescript
interface Post {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  likedByUser: boolean;
  comments: Comment[];
  createdAt: string;
}
```

### Comment
```typescript
interface Comment {
  id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: string;
}
```

### AuthResponse
```typescript
interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
}
```

---

## 🚀 Usage Example

```typescript
import {
  mockAuthAPI,
  mockPostsAPI,
  mockInteractionsAPI,
  mockUsersAPI
} from './data/dbMassages';

// 1. Register user
const signupResult = mockAuthAPI.signup(
  'olena@example.com',
  'Olena Yasynetska',
  'olena_dev',
  'password123'
);

if (signupResult.success) {
  const userId = signupResult.user.id;
  
  // 2. Create post
  const post = mockPostsAPI.create(
    userId,
    'olena_dev',
    'https://i.pravatar.cc/150',
    'https://picsum.photos/600/800',
    'My first post! 🎉'
  );
  
  // 3. Like post
  mockInteractionsAPI.likePost(post.id, userId);
  
  // 4. Add comment
  mockInteractionsAPI.addComment(
    post.id,
    userId,
    'Great start! 👏'
  );
  
  // 5. Update profile
  mockUsersAPI.updateProfile(userId, {
    bio: 'Full-stack developer 💻'
  });
  
  console.log('✅ All operations completed!');
}
```

---

## 🔧 Development Tools

### Clear All Data
```javascript
// In browser console
localStorage.removeItem('snapverse_users');
localStorage.removeItem('snapverse_posts');
location.reload();
```

### View All Users
```javascript
// In browser console
const users = JSON.parse(localStorage.getItem('snapverse_users'));
console.table(users);
```

### View All Posts
```javascript
// In browser console
const posts = JSON.parse(localStorage.getItem('snapverse_posts'));
console.table(posts);
```

---

## 📝 Notes

1. **No real authentication** - Passwords are not hashed or validated
2. **No real JWT** - Tokens are just mock strings
3. **No API rate limiting** - All operations are instant
4. **No file uploads** - Use external image URLs
5. **No real-time updates** - Refresh page to see changes from other tabs

This is a **development/demo backend** for learning and prototyping. For production, use a real backend with proper database, authentication, and security measures.

---

## 🎯 Features

✅ User registration & login  
✅ JWT-like token generation  
✅ Create, read, update, delete posts  
✅ Like/unlike posts  
✅ Add/delete comments  
✅ User search  
✅ Profile management  
✅ Follow/unfollow users  
✅ LocalStorage persistence  
✅ TypeScript types  
✅ Auto-save on all mutations  

---

**Author:** Based on [SnapVerse-backend](https://github.com/OlenaYasynetska/SnapVerse-backend)  
**File:** `src/data/dbMassages.ts`  
**Version:** 1.0.0

