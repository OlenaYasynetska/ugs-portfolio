# 🚀 Запуск SnapVerse проекта

## ✅ MongoDB уже запущен!

MongoDB работает (процесс 46976). Можете проверить в MongoDB Compass.

---

## 📝 Запуск Backend и Frontend

### Вариант 1: Через BAT файлы (проще)

**1. Запустить Backend:**
```
Двойной клик на: F:\UGS\backend\start-backend.bat
```

**2. Запустить Frontend:**
```
Двойной клик на: F:\UGS\start-frontend.bat
```

---

### Вариант 2: Через PowerShell (вручную)

**1. Открыть PowerShell #1 (Backend):**
```powershell
cd F:\UGS\backend
npm run dev
```

**Ожидаемый вывод:**
```
✅ MongoDB connected successfully
📊 Database: snapverse
🚀 SnapVerse Backend Server Started
📡 Server running on port 5000
```

**2. Открыть PowerShell #2 (Frontend):**
```powershell
cd F:\UGS
npm run dev
```

**Ожидаемый вывод:**
```
➜  Local:   http://localhost:5175/
```

---

## 🌐 Открыть в браузере

```
http://localhost:5175/about
```

---

## ✅ Проверка

### 1. Backend работает?

Открыть в браузере:
```
http://localhost:5000/api/health
```

Должно показать:
```json
{
  "success": true,
  "message": "SnapVerse API is running",
  "timestamp": "2024-11-14T..."
}
```

### 2. MongoDB подключён?

В терминале backend должно быть:
```
✅ MongoDB connected successfully
```

### 3. Frontend работает?

Открыть:
```
http://localhost:5175/about
```

Должна показаться форма регистрации.

---

## 🐛 Если что-то не работает

### Backend не запускается

**Ошибка:** "Cannot find module"
```powershell
cd F:\UGS\backend
npm install
npm run dev
```

### Frontend не запускается

**Ошибка:** "Cannot find module"
```powershell
cd F:\UGS
npm install
npm run dev
```

### MongoDB не подключается

**Проверить что MongoDB запущен:**
```powershell
Get-Process mongod
```

Если не запущен:
```powershell
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\data\db"
```

---

## 📊 Конфигурация

### Backend (.env)

Файл: `F:\UGS\backend\.env`

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/snapverse
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-snapverse-2024
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5175
```

### Frontend (.env.local)

Файл: `F:\UGS\.env.local`

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🎯 Что дальше?

1. ✅ Зарегистрироваться на http://localhost:5175/about
2. ✅ Проверить данные в MongoDB Compass
3. ✅ Войти в систему
4. ✅ Начать разработку!

---

**Готово! Проект настроен и готов к работе! 🎉**

