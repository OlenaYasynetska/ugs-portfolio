// Скрипт для удаления тестовых пользователей
// Запуск: node delete-test-users.js

const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/snapverse';

// Схема пользователя (минимальная)
const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  fullName: String,
});

const User = mongoose.model('User', UserSchema);

async function deleteTestUsers() {
  try {
    console.log('🔌 Подключение к MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Подключено к MongoDB');

    // Показать всех пользователей ДО удаления
    console.log('\n📋 Пользователи ДО удаления:');
    const usersBefore = await User.find({}, 'email username fullName');
    usersBefore.forEach((user, index) => {
      console.log(`${index + 1}. ${user.email} | ${user.username} | ${user.fullName}`);
    });
    console.log(`Всего: ${usersBefore.length} пользователей\n`);

    // ВЫБЕРИТЕ ОДИН ИЗ ВАРИАНТОВ:

    // Вариант 1: Удалить ВСЕХ пользователей
    const result = await User.deleteMany({});
    console.log(`🗑️  Удалено ${result.deletedCount} пользователей`);

    // Вариант 2: Удалить по email
    // const result = await User.deleteMany({ 
    //   email: { 
    //     $in: ['test@example.com', 'olena@example.com', 'olena2024@gmail.com'] 
    //   }
    // });
    // console.log(`🗑️  Удалено ${result.deletedCount} пользователей`);

    // Вариант 3: Удалить по username
    // const result = await User.deleteMany({ 
    //   username: { 
    //     $in: ['testuser', 'olena_dev', 'olena2024'] 
    //   }
    // });
    // console.log(`🗑️  Удалено ${result.deletedCount} пользователей`);

    // Показать оставшихся пользователей ПОСЛЕ удаления
    console.log('\n📋 Пользователи ПОСЛЕ удаления:');
    const usersAfter = await User.find({}, 'email username fullName');
    if (usersAfter.length === 0) {
      console.log('Нет пользователей');
    } else {
      usersAfter.forEach((user, index) => {
        console.log(`${index + 1}. ${user.email} | ${user.username} | ${user.fullName}`);
      });
    }
    console.log(`Всего: ${usersAfter.length} пользователей`);

  } catch (error) {
    console.error('❌ Ошибка:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('\n🔌 Отключено от MongoDB');
  }
}

// Запуск
deleteTestUsers();

