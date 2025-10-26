# План улучшения Home.jsx

## 🔍 Текущие проблемы (1475 строк)

### 1. **Множество повторяющихся inline-стилей**
```javascript
// Повторяется 50+ раз:
style={{
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 16,
  boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
  padding: '2vw',
  maxWidth: 1200,
  width: '85%',
  margin: '0 auto 1vw auto',
  textAlign: 'left',
}}
```

### 2. **Логика внутри JSX**
```javascript
{(() => {
  const news25 = news.find(n => n.id === 25);
  return (<div>...</div>);
})()}
```

### 3. **Hardcoded тексты**
```javascript
const fullText = news.find(item => item.id === 42)?.text[lang] || 
  'У Відні є вулиця... (огромная строка)';
```

### 4. **Дублирование кода для разных экранов**
```javascript
isSmallScreen ? 400 : 1200
isSmallScreen ? '95%' : '85%'
```

### 5. **Множество useState**
```javascript
const [showFull, setShowFull] = useState(false);
const [showFullKolschitzkyText, setShowFullKolschitzkyText] = useState(false);
const [showFullDiplomaText, setShowFullDiplomaText] = useState(false);
```

---

## ✅ Рекомендации по улучшению

### **ШАГ 1: Использовать уже созданные хуки**

```javascript
// До:
const [showFullKolschitzkyText, setShowFullKolschitzkyText] = useState(false);
const getKolschitzkyText = () => { /* 50 строк кода */ };

// После:
import { usePostState, usePostTexts, useResponsiveStyles } from '../../hooks';

const postState = usePostState();
const texts = usePostTexts(lang);
const styles = useResponsiveStyles();
```

### **ШАГ 2: Создать компоненты для повторяющихся элементов**

```javascript
// Создать: src/components/Post/SimplePost.jsx
export default function SimplePost({ title, text, lang, newsId }) {
  const postData = news.find(item => item.id === newsId);
  
  return (
    <div style={HOME_STYLES.postCard}>
      <h2 style={HOME_STYLES.titleStyle}>
        📌 {title || postData?.title[lang]}
      </h2>
      <div style={HOME_STYLES.textStyle}>
        {text || postData?.text[lang]}
      </div>
    </div>
  );
}
```

### **ШАГ 3: Вынести стили в константы**

```javascript
// Использовать уже созданный: src/constants/homeStyles.js
import { HOME_STYLES } from '../../constants/homeStyles';

// Вместо:
<div style={{
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 16,
  // ... 10 строк
}}>

// Использовать:
<div style={HOME_STYLES.postCard}>
```

### **ШАГ 4: Создать компоненты для модулей**

```javascript
// Создать: src/components/Home/sections/ThisIsInterestingSection.jsx
export default function ThisIsInterestingSection({ 
  lang, 
  styles,
  postState,
  texts 
}) {
  return (
    <>
      <div style={HOME_STYLES.moduleHeading}>
        {t('this_is_interesting') || 'Це цікаво'}
      </div>
      
      <PostCard isSmallScreen={styles.isSmallScreen}>
        <img src={halloweenImg} style={HOME_STYLES.imageStyle} />
      </PostCard>
      
      {/* Другие посты */}
    </>
  );
}
```

### **ШАГ 5: Использовать memo для оптимизации**

```javascript
// Создать компоненты с React.memo
import { memo } from 'react';

export default memo(function SimplePost(props) {
  // ...
});
```

---

## 📝 Конкретные изменения

### 1. **Заменить повторяющиеся стили**

**До (строки 377-390):**
```javascript
<div style={{
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 16,
  boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
  padding: '2vw',
  maxWidth: isSmallScreen ? 400 : 1200,
  width: isSmallScreen ? '95%' : '85%',
  margin: '0 auto 1vw auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}}>
```

**После:**
```javascript
import { PostCard } from '../../components/Post';
import { HOME_STYLES } from '../../constants/homeStyles';

<PostCard 
  isSmallScreen={styles.isSmallScreen}
  customStyles={{
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}
>
```

### 2. **Вынести логику из IIFE**

**До (строки 332-364):**
```javascript
{(() => {
  const news25 = news.find(n => n.id === 25);
  return (
  <div style={{...}}>
    <h2 style={{...}}>
      📌 {news25?.title[lang] || 'Як дізнатися свій податковий номер...'}
    </h2>
    <div style={{whiteSpace: 'pre-line'}}>
      {news25?.text[lang] || 'Податковий ідентифікаційний номер...'}
    </div>
  </div>
  );
})()}
```

**После:**
```javascript
import SimplePost from '../../components/Post/SimplePost';

<SimplePost 
  title="📌 {t('tin_title')}"
  newsId={25}
  lang={lang}
/>
```

### 3. **Упростить состояние**

**До:**
```javascript
const [showFull, setShowFull] = useState(false);
const [showFullKolschitzkyText, setShowFullKolschitzkyText] = useState(false);
const [showFullDiplomaText, setShowFullDiplomaText] = useState(false);
```

**После:**
```javascript
import { usePostState } from '../../hooks';

const postState = usePostState();
// Все состояния уже внутри!
```

### 4. **Использовать созданные хуки**

**До:**
```javascript
const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
const isSmallScreen = typeof window !== 'undefined' ? window.innerWidth < 700 : false;
// ...
useEffect(() => {
  const handleResize = () => {
    setH1FontSize(window.innerWidth <= 900 ? '2.8em' : '4em');
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

**После:**
```javascript
import { useResponsiveStyles } from '../../hooks';

const styles = useResponsiveStyles();
// isMobile, isSmallScreen, h1FontSize - все доступно!
```

---

## 🎯 Приоритет улучшений

### **Высокий приоритет:**
1. ✅ Использовать `useResponsiveStyles` (уже создан)
2. ✅ Использовать `usePostState` (уже создан)
3. ✅ Использовать `usePostTexts` (уже создан)
4. ✅ Заменить повторяющиеся стили на `HOME_STYLES`

### **Средний приоритет:**
1. Создать `SimplePost` компонент
2. Разбить на секции (`ThisIsInterestingSection`, `CalendarSection`)
3. Создать `ExpandablePost` компонент для длинных текстов

### **Низкий приоритет:**
1. Добавить React.memo для оптимизации
2. Вынести данные в конфигурацию
3. Добавить TypeScript типы

---

## 💡 Пример итоговой структуры Home.jsx

```javascript
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsiveStyles, usePostState, usePostTexts } from '../../hooks';
import { HOME_STYLES } from '../../constants/homeStyles';
import { PostCard, ExpandablePost, SimplePost } from '../../components/Post';
import ThisIsInterestingSection from '../../components/Home/sections/ThisIsInterestingSection';
import CalendarSection from '../../components/Home/sections/CalendarSection';
import NewsBlock from '../../modules/NewsBlock';
import ImportantInfo from '../../modules/ImportantInfo';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const styles = useResponsiveStyles();
  const postState = usePostState();
  const texts = usePostTexts(lang);
  
  return (
    <div style={HOME_STYLES.container}>
      <Hero />
      <NewsBlock />
      <ImportantInfo />
      
      <ThisIsInterestingSection 
        lang={lang}
        styles={styles}
        postState={postState}
        texts={texts}
      />
      
      <CalendarSection lang={lang} />
      
      {/* Другие секции */}
    </div>
  );
}
```

---

## 📊 Ожидаемый результат

- ✅ **1475 строк → ~200 строк** в основном файле
- ✅ **Читаемость** - код разбит на логические части
- ✅ **Переиспользование** - компоненты можно использовать повторно
- ✅ **Поддерживаемость** - легко найти и изменить нужную часть
- ✅ **Производительность** - оптимизация через memo
- ✅ **Тестируемость** - каждый компонент легко тестировать
