// Очистка всех данных в MongoDB (база ugs-db)
// Запуск из папки backend: node clear-database.js

const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/snapverse';

async function clearDatabase() {
  try {
    console.log('🔌 Подключение к MongoDB...');
    await mongoose.connect(MONGODB_URI);
    const dbName = mongoose.connection.db.databaseName;
    console.log('✅ Подключено к базе:', dbName);

    await mongoose.connection.db.dropDatabase();
    console.log('🗑️  База "' + dbName + '" полностью очищена (все коллекции удалены).');

  } catch (error) {
    console.error('❌ Ошибка:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Отключено от MongoDB');
  }
}

clearDatabase();
