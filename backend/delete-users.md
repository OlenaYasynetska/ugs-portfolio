# Удаление пользователей из MongoDB

## Способ 1: Удалить ВСЕХ пользователей

```bash
# Откройте MongoDB Shell
mongosh mongodb://127.0.0.1:27017/snapverse

# Удалить всех пользователей
db.users.deleteMany({})
```

## Способ 2: Удалить конкретных пользователей по email

```bash
mongosh mongodb://127.0.0.1:27017/snapverse

# Удалить одного пользователя
db.users.deleteOne({ email: "test@example.com" })

# Удалить нескольких пользователей
db.users.deleteMany({ 
  email: { 
    $in: ["test@example.com", "olena@example.com", "olena2024@gmail.com"] 
  }
})
```

## Способ 3: Удалить по username

```bash
mongosh mongodb://127.0.0.1:27017/snapverse

db.users.deleteMany({ 
  username: { 
    $in: ["testuser", "olena_dev", "olena2024"] 
  }
})
```

## Способ 4: Удалить по _id

```bash
mongosh mongodb://127.0.0.1:27017/snapverse

# Если вы знаете конкретный _id
db.users.deleteOne({ _id: ObjectId("673561a6c78e9a8b4c123456") })
```

## Способ 5: Посмотреть всех пользователей перед удалением

```bash
mongosh mongodb://127.0.0.1:27017/snapverse

# Показать всех пользователей
db.users.find().pretty()

# Показать только email и username
db.users.find({}, { email: 1, username: 1, _id: 0 }).pretty()

# Подсчитать количество
db.users.countDocuments()
```

## ⚠️ ВАЖНО: Удалить ВСЮ коллекцию users

```bash
mongosh mongodb://127.0.0.1:27017/snapverse

# Полностью удалить коллекцию
db.users.drop()
```

## Проверка после удаления

```bash
# Посмотреть сколько осталось пользователей
db.users.countDocuments()

# Показать всех оставшихся
db.users.find().pretty()
```

