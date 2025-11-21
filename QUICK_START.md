# ⚡ Quick Start - SnapVerse

## 🚀 Быстрый запуск за 5 минут

### Шаг 1: Установить MongoDB (один раз)

**Вариант А: Локально (Windows)**
```powershell
# Скачать: https://www.mongodb.com/try/download/community
# Установить как Windows Service
# Проверить:
Get-Service MongoDB
```

**Вариант Б: MongoDB Atlas (облако, проще)**
```
1. Зарегистрироваться: https://www.mongodb.com/cloud/atlas
2. Создать бесплатный кластер (M0)
3. Получить строку подключения
4. Обновить backend/.env:
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/snapverse
```

---

### Шаг 2: Запустить Backend

```powershell
# Открыть PowerShell #1
cd F:\UGS\backend
npm install
npm run dev
```

**Ждать сообщение:**
```
✅ MongoDB connected successfully
🚀 SnapVerse Backend Server Started
📡 Server running on port 5000
```

---

### Шаг 3: Запустить Frontend

```powershell
# Открыть PowerShell #2
cd F:\UGS
npm run dev
```

**Ждать сообщение:**
```
➜  Local:   http://localhost:5175/
```

---

### Шаг 4: Открыть в браузере

```
http://localhost:5175/about
```

---

## ✅ Проверка

### 1. Backend работает?

Открыть: http://localhost:5000/api/health

Должно показать:
```json
{
  "success": true,
  "message": "SnapVerse API is running"
}
```

### 2. Frontend работает?

Открыть: http://localhost:5175/about

Должна показаться форма регистрации

### 3. Зарегистрироваться

1. Заполнить форму:
   - Email: `test@example.com`
   - Full Name: `Test User`
   - Username: `testuser`
   - Password: `password123`
2. Нажать "Sign up"
3. Должно появиться: "Success! Welcome testuser!"

### 4. Проверить в консоли (F12)

Должно быть:
```
✅ Registration successful! {user: {...}}
🔑 Token saved to localStorage
```

---

## 🎯 Что дальше?

Читайте полную документацию:
- `FULLSTACK_GUIDE.md` - Полное руководство
- `SETUP_BACKEND.md` - Детальная установка
- `backend/README.md` - API документация

---

## 🐛 Проблемы?

### Backend не запускается

```powershell
# Проверить MongoDB
Get-Service MongoDB

# Запустить
Start-Service MongoDB
```

### Порт 5000 занят

Изменить в `backend/.env`:
```
PORT=5001
```

### CORS ошибка

Проверить `backend/.env`:
```
FRONTEND_URL=http://localhost:5175
```

---

**Готово! 🎉**

