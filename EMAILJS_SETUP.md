# Настройка EmailJS для отправки писем

## Шаг 1: Регистрация на EmailJS
1. Перейдите на https://www.emailjs.com/
2. Зарегистрируйтесь и создайте аккаунт
3. Войдите в панель управления

## Шаг 2: Настройка Email Service
1. В панели управления перейдите в раздел "Email Services"
2. Нажмите "Add New Service"
3. Выберите "Gmail" или "Outlook" (или другой провайдер)
4. Подключите ваш email аккаунт (contact@ugs-info.at)
5. Запишите **Service ID** (например: service_xxxxxxx)

## Шаг 3: Создание Email Template
1. Перейдите в раздел "Email Templates"
2. Нажмите "Create New Template"
3. Настройте шаблон письма:

**Тема письма:**
```
Новое сообщение от {{from_name}}
```

**Содержимое письма:**
```
Имя: {{from_name}}
Email: {{from_email}}
Сообщение: {{message}}

---
Это сообщение отправлено с сайта UGS.
```

4. Сохраните шаблон и запишите **Template ID** (например: template_xxxxxxx)

## Шаг 4: Получение User ID
1. В панели управления перейдите в раздел "Account" → "API Keys"
2. Скопируйте **Public Key** (User ID)

## Шаг 5: Обновление кода
Замените в файле `src/components/ContactForm/ContactForm.jsx` следующие значения:

```javascript
emailjs.send(
  'YOUR_SERVICE_ID',     // Замените на ваш Service ID
  'YOUR_TEMPLATE_ID',    // Замените на ваш Template ID
  templateParams,
  'YOUR_USER_ID'         // Замените на ваш User ID
)
```

## Пример:
```javascript
emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams,
  'user_def456'
)
```

## Шаг 6: Тестирование
1. Запустите приложение
2. Откройте форму контактов
3. Заполните и отправьте тестовое сообщение
4. Проверьте, что письмо пришло на contact@ugs-info.at

## Примечания:
- EmailJS бесплатно позволяет отправлять до 200 писем в месяц
- Для большего количества писем потребуется платный план
- Убедитесь, что email аккаунт contact@ugs-info.at настроен для получения писем 