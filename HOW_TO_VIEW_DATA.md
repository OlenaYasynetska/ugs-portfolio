# Как посмотреть сохранённые данные SnapVerse

## 🔍 Способ 1: Chrome DevTools (рекомендуется)

### Шаги:
1. Откройте сайт в браузере Chrome
2. Нажмите **F12** (или правая кнопка мыши → "Inspect" / "Проверить")
3. Перейдите на вкладку **"Application"** (или **"Приложение"**)
4. Слева в меню найдите **"Storage"** → **"Local Storage"**
5. Кликните на **`http://localhost:5175`** (или ваш домен)
6. Справа увидите все ключи:
   - **`snapverse_users`** — все пользователи
   - **`snapverse_posts`** — все посты

### Что увидите:
```
Key: snapverse_users
Value: [{"id":"user-1","username":"john_doe",...},{"id":"user-1731616234567","username":"Lena",...}]
```

### Как читать:
- Кликните на значение → откроется JSON в удобном виде
- Можно скопировать, редактировать, удалить

---

## 💻 Способ 2: Консоль браузера (для разработчиков)

### Шаги:
1. Нажмите **F12** → вкладка **"Console"** (или **"Консоль"**)
2. Вставьте код и нажмите **Enter**

### Посмотреть всех пользователей:
```javascript
const users = JSON.parse(localStorage.getItem('snapverse_users'));
console.table(users);
```

### Найти конкретного пользователя (Lena):
```javascript
const users = JSON.parse(localStorage.getItem('snapverse_users'));
const lena = users.find(u => u.username === 'Lena');
console.log('👤 Lena:', lena);
```

### Посмотреть все посты:
```javascript
const posts = JSON.parse(localStorage.getItem('snapverse_posts'));
console.table(posts);
```

### Посчитать пользователей:
```javascript
const users = JSON.parse(localStorage.getItem('snapverse_users'));
console.log('📊 Всего пользователей:', users.length);
```

---

## 🛠️ Способ 3: Создать страницу администратора

Создадим специальную страницу для просмотра данных.

### Файл: `src/pages/Admin/Admin.tsx`

```typescript
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Загрузить данные из LocalStorage
    const usersData = JSON.parse(localStorage.getItem('snapverse_users') || '[]');
    const postsData = JSON.parse(localStorage.getItem('snapverse_posts') || '[]');
    
    setUsers(usersData);
    setPosts(postsData);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>📊 SnapVerse Admin Panel</h1>
      
      <h2>👥 Users ({users.length})</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '40px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><strong>{user.username}</strong></td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.followers}</td>
              <td>{user.following}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>📝 Posts ({posts.length})</h2>
      <table border="1" cellPadding="10" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Caption</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td><strong>{post.username}</strong></td>
              <td>{post.caption.substring(0, 50)}...</td>
              <td>❤️ {post.likes}</td>
              <td>💬 {post.comments.length}</td>
              <td>{new Date(post.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>🗑️ Управление данными</h2>
      <button 
        onClick={() => {
          localStorage.removeItem('snapverse_users');
          localStorage.removeItem('snapverse_posts');
          alert('✅ Все данные удалены!');
          window.location.reload();
        }}
        style={{
          padding: '10px 20px',
          background: 'red',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        🗑️ Очистить все данные
      </button>
    </div>
  );
};

export default Admin;
```

### Добавить роут в `App.jsx`:
```javascript
import Admin from '../../pages/Admin/Admin';

// В Routes:
<Route path="/admin" element={<Admin />} />
```

### Открыть:
```
http://localhost:5175/admin
```

---

## 🧹 Как очистить данные

### Удалить всё:
```javascript
localStorage.clear();
location.reload();
```

### Удалить только пользователей:
```javascript
localStorage.removeItem('snapverse_users');
location.reload();
```

### Удалить только посты:
```javascript
localStorage.removeItem('snapverse_posts');
location.reload();
```

### Сбросить к дефолтным данным:
```javascript
localStorage.removeItem('snapverse_users');
localStorage.removeItem('snapverse_posts');
location.reload();
// При следующей загрузке вернутся изначальные 3 пользователя и 3 поста
```

---

## 📊 Полезные команды для консоли

### Экспортировать данные:
```javascript
// Скопировать всех пользователей
copy(localStorage.getItem('snapverse_users'));
```

### Импортировать данные:
```javascript
const newUsers = [/* ваш JSON */];
localStorage.setItem('snapverse_users', JSON.stringify(newUsers));
location.reload();
```

### Посмотреть размер данных:
```javascript
const users = localStorage.getItem('snapverse_users');
const posts = localStorage.getItem('snapverse_posts');
console.log('Users size:', (users.length / 1024).toFixed(2), 'KB');
console.log('Posts size:', (posts.length / 1024).toFixed(2), 'KB');
```

### Найти пользователя по email:
```javascript
const users = JSON.parse(localStorage.getItem('snapverse_users'));
const user = users.find(u => u.email === 'yasynetskalena@gmail.com');
console.log(user);
```

---

## 🎯 Быстрый доступ

Добавьте в закладки браузера:

**JavaScript Bookmarklet:**
```javascript
javascript:(function(){const u=JSON.parse(localStorage.getItem('snapverse_users')||'[]');alert('Users: '+u.length+'\n\n'+u.map(x=>x.username).join('\n'));})();
```

Нажав на закладку, увидите список всех пользователей!

---

## 📱 Где физически хранятся данные

### Windows:
```
C:\Users\<Ваше имя>\AppData\Local\Google\Chrome\User Data\Default\Local Storage\leveldb\
```

### macOS:
```
~/Library/Application Support/Google/Chrome/Default/Local Storage/leveldb/
```

### Linux:
```
~/.config/google-chrome/Default/Local Storage/leveldb/
```

**Примечание:** Данные в этих файлах зашифрованы и не читаются напрямую. Используйте DevTools или консоль браузера.

---

## ✅ Резюме

| Способ | Сложность | Удобство | Для кого |
|--------|-----------|----------|----------|
| DevTools → Application | ⭐ Легко | ⭐⭐⭐ | Все |
| Консоль браузера | ⭐⭐ Средне | ⭐⭐ | Разработчики |
| Admin страница | ⭐⭐⭐ Сложно | ⭐⭐⭐ | Продвинутые |

**Рекомендация:** Начните с **DevTools → Application** — это самый простой способ! 🚀

