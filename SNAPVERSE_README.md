# SnapVerse Social Media Showcase

Полнофункциональная демонстрация социальной сети в стиле Instagram, созданная с использованием **TypeScript**, **Tailwind CSS** и **Mock Backend API**.

## 🎯 Реализованный функционал

### Backend API (Mock) — `src/data/dbMassages.ts`

#### 1. **Аутентификация с JWT**
- `mockAuthAPI.signup()` — регистрация пользователя
- `mockAuthAPI.login()` — вход с генерацией JWT токена
- `mockAuthAPI.validateToken()` — валидация токена

#### 2. **CRUD операции с постами**
- `mockPostsAPI.getAll()` — получить все посты
- `mockPostsAPI.getById()` — получить пост по ID
- `mockPostsAPI.getByUserId()` — посты конкретного пользователя
- `mockPostsAPI.create()` — создать новый пост
- `mockPostsAPI.update()` — редактировать пост
- `mockPostsAPI.delete()` — удалить пост

#### 3. **Лайки и комментарии**
- `mockInteractionsAPI.likePost()` — поставить лайк
- `mockInteractionsAPI.unlikePost()` — убрать лайк
- `mockInteractionsAPI.addComment()` — добавить комментарий
- `mockInteractionsAPI.deleteComment()` — удалить комментарий

#### 4. **Управление пользователями**
- `mockUsersAPI.search()` — поиск по имени/username
- `mockUsersAPI.getById()` — получить профиль
- `mockUsersAPI.updateProfile()` — редактировать профиль (bio, avatar)
- `mockUsersAPI.follow()` / `unfollow()` — подписки

---

## 🎨 Frontend компоненты

### 1. **AuthCard** (`src/pages/About/About.tsx`)
Форма регистрации и входа в стиле Instagram:
- Валидация полей с отображением ошибок
- Поддержка всех вариантов: signup, signup-error, login
- Стилизация Tailwind с адаптивностью

### 2. **PostCard** (`src/components/SnapVerse/PostCard.tsx`)
Карточка поста с полным функционалом:
- ❤️ Лайки с анимацией (like/unlike)
- 💬 Комментарии с возможностью добавления
- 🖼️ Отображение изображений через Picsum
- ⏰ Относительное время ("2h ago")

### 3. **UserProfile** (`src/components/SnapVerse/UserProfile.tsx`)
Профиль пользователя:
- Аватар с градиентной рамкой
- Статистика: posts, followers, following
- Редактирование bio и имени (для своего профиля)
- Follow/Unfollow кнопка
- Сетка постов (3 колонки)

### 4. **SearchUsers** (`src/components/SnapVerse/SearchUsers.tsx`)
Поисковая система:
- Поиск по username или полному имени
- Debounce для оптимизации
- Результаты с аватарами и кнопкой "View"

---

## 📦 Структура данных

### User
```typescript
{
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
{
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
```

### Comment
```typescript
{
  id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: string;
}
```

---

## 🛠 Технологический стек

| Категория | Технологии |
|-----------|-----------|
| **Frontend** | React 19, TypeScript, Tailwind CSS 3.4 |
| **Build** | Vite 7 |
| **Routing** | React Router 7 |
| **Backend (Mock)** | In-Memory Database, JWT simulation |
| **Icons** | SVG (inline) |
| **Images** | Picsum, Pravatar |

---

## 🚀 Запуск проекта

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Открыть страницу About
http://localhost:5175/about
```

---

## 📸 Демонстрируемые функции

1. **Регистрация/Вход** — карточка signup с валидацией
2. **Профиль** — John Doe с возможностью редактирования
3. **Лента постов** — 3 поста с лайками и комментариями
4. **Поиск** — найти Jane Smith или Alex Developer

---

## 🔗 API Reference

Все функции находятся в `src/data/dbMassages.ts`:

```typescript
import {
  mockAuthAPI,
  mockPostsAPI,
  mockInteractionsAPI,
  mockUsersAPI
} from './data/dbMassages';

// Пример: Регистрация
const result = mockAuthAPI.signup(
  'user@example.com',
  'John Doe',
  'john_doe',
  'password123'
);

// Пример: Лайк поста
mockInteractionsAPI.likePost('post-1', 'user-1');

// Пример: Поиск
const users = mockUsersAPI.search('jane');
```

---

## 📝 Лицензия

MIT — создано по аналогии с [SnapVerse-frontend](https://github.com/OlenaYasynetska/SnapVerse-frontend) и [SnapVerse-backend](https://github.com/OlenaYasynetska/SnapVerse-backend)

---

## 👩‍💻 Автор

Проект разработан для демонстрации полного стека технологий социальной сети в образовательных целях.

