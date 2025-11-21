# 🚀 Установка и запуск SnapVerse Backend

## Шаг 1: Установка MongoDB

### Вариант А: MongoDB Community (локально на компьютере)

#### Windows:

1. **Скачать MongoDB:**
   - Перейти на https://www.mongodb.com/try/download/community
   - Выбрать версию для Windows
   - Скачать `.msi` установщик

2. **Установить:**
   - Запустить установщик
   - Выбрать "Complete" installation
   - Установить как Windows Service (галочка)
   - Завершить установку

3. **Проверить установку:**
   ```powershell
   mongod --version
   ```

4. **Запустить MongoDB:**
   ```powershell
   # MongoDB должен запуститься автоматически как служба Windows
   # Проверить статус:
   Get-Service MongoDB
   
   # Если не запущен:
   Start-Service MongoDB
   ```

#### macOS:

```bash
# Установить через Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Запустить
brew services start mongodb-community

# Проверить
mongosh
```

#### Linux (Ubuntu/Debian):

```bash
# Установить
sudo apt-get update
sudo apt-get install -y mongodb

# Запустить
sudo systemctl start mongodb
sudo systemctl enable mongodb

# Проверить
mongosh
```

---

### Вариант Б: MongoDB Atlas (облако, бесплатно)

**Рекомендуется для начинающих!**

1. **Создать аккаунт:**
   - Перейти на https://www.mongodb.com/cloud/atlas
   - Нажать "Try Free"
   - Зарегистрироваться (можно через Google)

2. **Создать кластер:**
   - Выбрать "FREE" план (M0)
   - Выбрать регион (ближайший к вам)
   - Назвать кластер "SnapVerse"
   - Нажать "Create Cluster"

3. **Создать пользователя:**
   - Security → Database Access → Add New Database User
   - Username: `snapverse_admin`
   - Password: (сгенерировать или придумать)
   - Роль: "Read and write to any database"
   - Сохранить пароль!

4. **Настроить доступ:**
   - Security → Network Access → Add IP Address
   - Выбрать "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

5. **Получить строку подключения:**
   - Databases → Connect → Drivers
   - Выбрать "Node.js" и версию
   - Скопировать строку подключения:
   ```
   mongodb+srv://snapverse_admin:<password>@snapverse.xxxxx.mongodb.net/
   ```
   - Заменить `<password>` на ваш пароль

6. **Обновить `.env`:**
   ```env
   MONGODB_URI=mongodb+srv://snapverse_admin:YOUR_PASSWORD@snapverse.xxxxx.mongodb.net/snapverse
   ```

---

## Шаг 2: Запуск Backend сервера

### 1. Перейти в папку backend:

```powershell
cd F:\UGS\backend
```

### 2. Убедиться что зависимости установлены:

```powershell
npm install
```

### 3. Проверить файл `.env`:

Файл `F:\UGS\backend\.env` должен содержать:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/snapverse
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5175
```

**Если используете MongoDB Atlas**, замените `MONGODB_URI` на вашу строку подключения!

### 4. Запустить сервер:

```powershell
npm run dev
```

### 5. Проверить что сервер работает:

Вы должны увидеть:

```
✅ MongoDB connected successfully
📊 Database: snapverse

🚀 SnapVerse Backend Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Server running on port 5000
🌐 API URL: http://localhost:5000/api
🔍 Health check: http://localhost:5000/api/health
🎨 Frontend URL: http://localhost:5175
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Available endpoints:
  POST   /api/auth/signup
  POST   /api/auth/login
  GET    /api/auth/me
  GET    /api/posts
  POST   /api/posts
  GET    /api/users/search
  PUT    /api/users/profile
```

### 6. Проверить в браузере:

Откройте: http://localhost:5000/api/health

Должны увидеть:
```json
{
  "success": true,
  "message": "SnapVerse API is running",
  "timestamp": "2024-11-14T..."
}
```

---

## Шаг 3: Тестирование API

### Вариант А: Через браузер (только GET запросы)

```
http://localhost:5000/api/health
```

### Вариант Б: Через Postman

1. Скачать Postman: https://www.postman.com/downloads/
2. Создать новый запрос:
   - Method: POST
   - URL: `http://localhost:5000/api/auth/signup`
   - Body → raw → JSON:
   ```json
   {
     "email": "test@example.com",
     "fullName": "Test User",
     "username": "testuser",
     "password": "password123"
   }
   ```
3. Send

### Вариант В: Через PowerShell (curl)

```powershell
# Регистрация
curl -X POST http://localhost:5000/api/auth/signup `
  -H "Content-Type: application/json" `
  -d '{\"email\":\"test@example.com\",\"fullName\":\"Test User\",\"username\":\"testuser\",\"password\":\"password123\"}'

# Вход
curl -X POST http://localhost:5000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{\"loginInput\":\"testuser\",\"password\":\"password123\"}'
```

---

## 🐛 Решение проблем

### Ошибка: "MongoDB connection error"

**Проблема:** MongoDB не запущен

**Решение:**
```powershell
# Windows
Start-Service MongoDB

# Или проверить статус
Get-Service MongoDB
```

### Ошибка: "Port 5000 already in use"

**Проблема:** Порт 5000 занят

**Решение:** Изменить порт в `.env`:
```env
PORT=5001
```

### Ошибка: "Cannot find module"

**Проблема:** Не установлены зависимости

**Решение:**
```powershell
cd F:\UGS\backend
npm install
```

### Ошибка: "CORS policy"

**Проблема:** Frontend не может подключиться

**Решение:** Проверить `FRONTEND_URL` в `.env`:
```env
FRONTEND_URL=http://localhost:5175
```

---

## 📊 Просмотр данных в MongoDB

### Вариант А: MongoDB Compass (GUI)

1. Скачать: https://www.mongodb.com/try/download/compass
2. Установить
3. Подключиться:
   - Локально: `mongodb://localhost:27017`
   - Atlas: (строка подключения из Atlas)
4. Выбрать базу `snapverse`
5. Просмотреть коллекции `users` и `posts`

### Вариант Б: mongosh (командная строка)

```bash
# Подключиться
mongosh

# Выбрать базу
use snapverse

# Посмотреть пользователей
db.users.find().pretty()

# Посмотреть посты
db.posts.find().pretty()

# Посчитать пользователей
db.users.countDocuments()
```

---

## 🎯 Следующие шаги

1. ✅ Backend запущен на `http://localhost:5000`
2. ✅ MongoDB работает
3. ⏭️ Теперь нужно обновить Frontend для работы с API

**Готовы обновить Frontend?** Скажите, и я создам API клиент для подключения React приложения к backend!

---

## 📝 Полезные команды

```powershell
# Запустить backend
cd F:\UGS\backend
npm run dev

# Остановить backend
Ctrl + C

# Проверить MongoDB
Get-Service MongoDB

# Запустить MongoDB
Start-Service MongoDB

# Остановить MongoDB
Stop-Service MongoDB

# Очистить базу данных
mongosh
use snapverse
db.dropDatabase()
```

---

## 🌐 Деплой (опционально)

После разработки можно задеплоить на:

- **Backend:** Railway.app, Render.com (бесплатно)
- **MongoDB:** MongoDB Atlas (бесплатно до 512MB)
- **Frontend:** Vercel, Netlify (бесплатно)

Инструкции по деплою в `backend/README.md`

---

**Готово! Backend API работает! 🎉**

