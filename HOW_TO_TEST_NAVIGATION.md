# 🧪 Как протестировать навигацию SnapVerse

## 🚀 Быстрый старт

### 1️⃣ Запустите Backend (в отдельном терминале)

```bash
cd F:\UGS\backend
npm run dev
```

**Ожидаемый вывод:**
```
🚀 SnapVerse Backend Server Started
📡 Server running on port 5000
🌐 API URL: http://localhost:5000/api
✅ MongoDB connected successfully
```

### 2️⃣ Запустите Frontend (в другом терминале)

```bash
cd F:\UGS
npm run dev
```

**Ожидаемый вывод:**
```
VITE ready in X ms
➜  Local:   http://localhost:5175/
```

---

## 📝 Сценарий тестирования

### ✅ Шаг 1: Регистрация нового пользователя

1. Откройте в браузере: **http://localhost:5175/about**
2. Вы увидите форму **Log in**
3. Нажмите внизу **"Sign up"**
4. Заполните форму регистрации:
   ```
   Email:     newuser@example.com
   Full Name: New User
   Username:  newuser
   Password:  password123
   ```
5. Нажмите **"Sign up"**
6. ✨ **Появится Success Modal**: "Welcome newuser! Your account has been created."
7. ⏱️ **Через 2 секунды** автоматически откроется **http://localhost:5175/feed**

### ✅ Шаг 2: Изучите страницу Feed

Вы попадете на **ленту постов**:

```
┌─────────────────────────────────────────────────┐
│  ICHGRAM                                        │
│  Welcome back, newuser!                         │
├─────────────────────────────────────────────────┤
│  [Feed] [Search] [Profile] [Logout]             │
├─────────────────────────────────────────────────┤
│                                                  │
│  📷 Post 1                                       │
│  ❤️ 5 likes     💬 3 comments                    │
│                                                  │
│  📷 Post 2                                       │
│  ❤️ 10 likes    💬 7 comments                    │
│                                                  │
│  (или "No posts yet" если база пустая)          │
└─────────────────────────────────────────────────┘
```

**Что можно делать:**
- ❤️ Лайкнуть пост
- 💬 Написать комментарий
- 🔄 Прокрутить ленту

### ✅ Шаг 3: Поиск пользователей

1. Нажмите **"Search"** в навигации
2. Введите в поле поиска: `newuser` (или другой username)
3. Увидите список найденных пользователей
4. Кликните на пользователя → откроется его профиль

### ✅ Шаг 4: Просмотр профиля

1. Нажмите **"Profile"** в навигации
2. Вы увидите свой профиль:
   ```
   ┌─────────────────────────────────────────────┐
   │  @newuser                                    │
   │  New User                                    │
   │                                              │
   │  Posts: 0    Followers: 0    Following: 0   │
   │                                              │
   │  [Edit Profile]        [Logout]             │
   └─────────────────────────────────────────────┘
   ```

3. Нажмите **"Edit Profile"**:
   - Измените Full Name
   - Добавьте Bio
   - Нажмите "Save"

### ✅ Шаг 5: Logout и повторный вход

1. Нажмите **"Logout"** в навигации
2. Вы вернетесь на **http://localhost:5175/about**
3. Заполните форму входа:
   ```
   Username or email: newuser
   Password:          password123
   ```
4. Нажмите **"Log in"**
5. ✨ **Появится Success Modal**: "Welcome back newuser!"
6. ⏱️ **Через 2 секунды** снова откроется **http://localhost:5175/feed**

### ✅ Шаг 6: Проверка защищенных роутов

1. **Выйдите из системы** (Logout)
2. Попробуйте открыть напрямую:
   - **http://localhost:5175/feed** ❌
   - **http://localhost:5175/profile** ❌
   - **http://localhost:5175/search** ❌
3. Вас автоматически перенаправит на **/about** (страница авторизации)
4. Это работа **ProtectedRoute** компонента! 🔐

---

## 📊 Проверка данных в MongoDB

Откройте **MongoDB Compass**:

```
mongodb://127.0.0.1:27017
```

Перейдите в базу **SNAPVERSE** → коллекция **users**:

```json
{
  "_id": "...",
  "email": "newuser@example.com",
  "fullName": "New User",
  "username": "newuser",
  "password": "$2a$10$...",  // хэшированный пароль
  "bio": "",
  "avatar": "",
  "followers": [],
  "following": [],
  "createdAt": "2025-11-14T..."
}
```

✅ **Пользователь сохранен в базе!**

---

## 🐛 Возможные проблемы

### ❌ Backend не запускается

**Проблема:**
```
MongoDB connection error: ECONNREFUSED
```

**Решение:**
1. Убедитесь, что MongoDB запущен:
   ```bash
   "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\data\db"
   ```
2. Или используйте MongoDB Atlas (облачная база)

### ❌ "No posts yet" на странице Feed

**Это нормально!** База данных пустая.

**Чтобы добавить тестовые посты:**
1. Используйте backend API напрямую:
   ```bash
   POST http://localhost:5000/api/posts
   Body: {
     "imageUrl": "https://picsum.photos/400/400",
     "caption": "My first post!"
   }
   ```
2. Или подождите, пока функция создания постов будет добавлена в UI

### ❌ Frontend показывает ошибку после регистрации

**Проверьте консоль браузера (F12):**
- Есть ли ошибка от backend?
- Проверьте Network tab → статус запроса

**Проверьте консоль backend:**
- Какие ошибки показывает сервер?

---

## ✅ Чек-лист успешного теста

- [ ] Backend запущен на порту 5000
- [ ] Frontend запущен на порту 5175
- [ ] MongoDB подключена (локально или Atlas)
- [ ] Регистрация → Success Modal → переход на /feed (2 сек)
- [ ] Login → Success Modal → переход на /feed (2 сек)
- [ ] Навигация Feed/Search/Profile работает
- [ ] Logout → возврат на /about
- [ ] Попытка открыть /feed без авторизации → редирект на /about
- [ ] Navbar показывается только на SnapVerse страницах
- [ ] Обычная Nav показывается на публичных страницах

---

## 🎉 Поздравляем!

Если все работает — вы успешно реализовали:

✅ **Регистрацию и авторизацию**  
✅ **Автоматическую навигацию после входа**  
✅ **Защищенные роуты**  
✅ **Ленту постов**  
✅ **Профили пользователей**  
✅ **Поиск пользователей**  
✅ **Адаптивный дизайн**  
✅ **Интеграцию с MongoDB**  

Теперь у вас полноценный **Instagram-clone (SnapVerse)**! 🚀

