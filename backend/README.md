# SnapVerse Backend API

Full-featured backend API for SnapVerse photo-sharing social network with MongoDB and JWT authentication.

## 🚀 Features

- ✅ User authentication (signup, login) with JWT
- ✅ Password hashing with bcrypt
- ✅ Create, read, update, delete posts
- ✅ Like/unlike posts
- ✅ Add/delete comments
- ✅ User search
- ✅ Profile management
- ✅ Follow/unfollow users
- ✅ MongoDB database with Mongoose
- ✅ TypeScript
- ✅ CORS enabled
- ✅ Input validation
- ✅ Error handling

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🛠️ Installation

### 1. Install MongoDB

**Windows:**
```bash
# Download from https://www.mongodb.com/try/download/community
# Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
```

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

The `.env` file is already created with default values:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/snapverse
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5175
```

**⚠️ Important:** Change `JWT_SECRET` to a random secure string in production!

### 4. Start the server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm run build
npm start
```

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/posts` | Get all posts | No |
| GET | `/api/posts/:id` | Get single post | No |
| GET | `/api/posts/user/:userId` | Get user's posts | No |
| POST | `/api/posts` | Create new post | Yes |
| PUT | `/api/posts/:id` | Update post | Yes |
| DELETE | `/api/posts/:id` | Delete post | Yes |
| POST | `/api/posts/:id/like` | Like post | Yes |
| DELETE | `/api/posts/:id/like` | Unlike post | Yes |
| POST | `/api/posts/:id/comments` | Add comment | Yes |
| DELETE | `/api/posts/:id/comments/:commentId` | Delete comment | Yes |

### Users

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users/search?q=query` | Search users | No |
| GET | `/api/users/:id` | Get user by ID | No |
| PUT | `/api/users/profile` | Update profile | Yes |
| POST | `/api/users/:id/follow` | Follow user | Yes |
| DELETE | `/api/users/:id/follow` | Unfollow user | Yes |

## 📝 API Usage Examples

### Register User

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "olena@example.com",
    "fullName": "Olena Yasynetska",
    "username": "olena_dev",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "673c1234567890abcdef1234",
    "username": "olena_dev",
    "email": "olena@example.com",
    "fullName": "Olena Yasynetska",
    "avatar": "https://i.pravatar.cc/150?img=1",
    "followers": 0,
    "following": 0,
    "createdAt": "2024-11-14T10:30:00.000Z"
  }
}
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "loginInput": "olena_dev",
    "password": "password123"
  }'
```

### Create Post (requires authentication)

```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "imageUrl": "https://picsum.photos/600/800",
    "caption": "Beautiful sunset 🌅 #nature"
  }'
```

### Like Post

```bash
curl -X POST http://localhost:5000/api/posts/POST_ID/like \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Search Users

```bash
curl http://localhost:5000/api/users/search?q=olena
```

## 🗄️ Database Schema

### User Model

```typescript
{
  username: string;      // unique, 3-30 characters
  email: string;         // unique, valid email
  password: string;      // hashed with bcrypt
  fullName: string;
  avatar?: string;       // default: pravatar.cc
  bio?: string;          // max 160 characters
  followers: number;     // default: 0
  following: number;     // default: 0
  createdAt: Date;
  updatedAt: Date;
}
```

### Post Model

```typescript
{
  userId: ObjectId;      // ref: User
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption?: string;      // max 2200 characters
  likes: ObjectId[];     // array of User IDs
  comments: [{
    userId: ObjectId;
    username: string;
    text: string;        // max 500 characters
    createdAt: Date;
  }];
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔐 Authentication

This API uses **JWT (JSON Web Tokens)** for authentication.

### How to use:

1. Register or login to get a token
2. Include token in Authorization header:
   ```
   Authorization: Bearer YOUR_JWT_TOKEN
   ```
3. Token expires in 7 days (configurable in `.env`)

## 🧪 Testing

### Health Check

```bash
curl http://localhost:5000/api/health
```

**Response:**
```json
{
  "success": true,
  "message": "SnapVerse API is running",
  "timestamp": "2024-11-14T10:30:00.000Z"
}
```

## 🚨 Error Handling

All errors return JSON in this format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

### Common HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (not authorized for this action)
- `404` - Not Found
- `500` - Server Error

## 📂 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts       # MongoDB connection
│   ├── controllers/
│   │   ├── authController.ts # Auth logic
│   │   ├── postController.ts # Post logic
│   │   └── userController.ts # User logic
│   ├── middleware/
│   │   └── auth.ts           # JWT middleware
│   ├── models/
│   │   ├── User.ts           # User schema
│   │   └── Post.ts           # Post schema
│   ├── routes/
│   │   ├── auth.ts           # Auth routes
│   │   ├── posts.ts          # Post routes
│   │   └── users.ts          # User routes
│   └── server.ts             # Main server file
├── .env                      # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

## 🌐 Deployment

### Deploy to Railway (Free)

1. Create account on [Railway.app](https://railway.app)
2. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```
3. Login and deploy:
   ```bash
   railway login
   railway init
   railway up
   ```
4. Add MongoDB plugin in Railway dashboard
5. Set environment variables in Railway

### Deploy to Render (Free)

1. Create account on [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set build command: `npm install && npm run build`
5. Set start command: `npm start`
6. Add environment variables
7. Create MongoDB database (free tier available)

## 🔧 Development

### Watch mode with auto-reload:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
```

### Run production build:

```bash
npm start
```

## 📊 MongoDB Atlas Setup (Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create new cluster (free tier: M0)
4. Create database user
5. Whitelist IP address (0.0.0.0/0 for development)
6. Get connection string
7. Update `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/snapverse
   ```

## 🛡️ Security Best Practices

- ✅ Passwords are hashed with bcrypt (salt rounds: 10)
- ✅ JWT tokens expire after 7 days
- ✅ CORS configured for specific frontend URL
- ✅ Input validation on all endpoints
- ✅ MongoDB injection protection (Mongoose)
- ⚠️ Change JWT_SECRET in production
- ⚠️ Use HTTPS in production
- ⚠️ Set NODE_ENV=production

## 📝 License

ISC

## 👤 Author

**Olena Yasynetska**

- GitHub: [@OlenaYasynetska](https://github.com/OlenaYasynetska)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

---

**Made with ❤️ for SnapVerse**

