# План рефакторинга кода для Home.jsx

## 🎯 Основные проблемы текущего кода

### 1. **Огромный монолитный компонент (1475 строк)**
- Весь функционал в одном файле
- Смешение логики и представления
- Множество повторяющихся стилей

### 2. **Повторяющийся inline-стили**
- Стили дублируются в каждом посте
- Нет переиспользуемых компонентов
- Трудно поддерживать единый стиль

### 3. **Логика внутри JSX**
- Много условных блоков `{(() => { ... })()}`
- Сложная логика отображения
- Трудно тестировать

### 4. **Состояние разбросано**
- Много useState в основном компоненте
- Нет четкой структуры состояния
- Трудно отследить зависимости

---

## 📋 План рефакторинга

### **ЭТАП 1: Создание переиспользуемых компонентов**

#### 1.1 Создать компоненты постов
```
src/components/Post/
├── PostCard.jsx          # Базовый компонент поста
├── PostCard.module.css    # Стили поста
├── AustriaFacts.jsx       # Специальный пост с фактами об Австрии
└── expandable/            # Расширяемые посты
    ├── ExpandablePost.jsx
    └── ExpandablePost.module.css
```

#### 1.2 Создать модульные компоненты
```
src/components/Home/
├── ImagePost.jsx         # Пост с изображением
├── ImageTextPost.jsx     # Пост с изображением и текстом
├── AustriaFactsPost.jsx  # Пост с фактами об Австрии
└── TypedPost.jsx         # Различные типы постов
```

---

### **ЭТАП 2: Вынести логику в custom hooks**

#### 2.1 Создать хук для управления постом
```javascript
// src/hooks/usePostState.js
export function usePostState(postId, initialText) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFull, setShowFull] = useState(false);
  
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleShowFull = () => setShowFull(!showFull);
  
  const getDisplayText = (fullText) => {
    if (showFull) return fullText;
    return fullText.substring(0, 500) + '...';
  };
  
  return {
    isExpanded,
    showFull,
    toggleExpanded,
    toggleShowFull,
    getDisplayText
  };
}
```

#### 2.2 Создать хук для стилей
```javascript
// src/hooks/useResponsiveStyles.js
export function useResponsiveStyles() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return {
    isMobile: windowWidth < 520,
    isTablet: windowWidth < 768,
    isSmallScreen: windowWidth < 700,
    isMediumScreen: windowWidth < 900,
    h1FontSize: windowWidth <= 900 ? '2.8em' : '4em'
  };
}
```

#### 2.3 Создать хук для анимаций
```javascript
// src/hooks/useHomeAnimations.js
export function useHomeAnimations() {
  const isEurovisionImageVisible = useImageDrawAnimation('eurovision-image', 0);
  const isWienImageVisible = useImageDrawAnimation('wien-image', 200);
  const isBergImageVisible = useImageDrawAnimation('berg-image', 400);
  
  const numberAnimations = useNumberAnimation(5, 0, 400, 'dance', 2);
  const oldNumberAnimations = useNumberAnimation(5, 0, 400, 'dance', 2.5);
  
  const { getFullCSS: getPostAnimationsCSS } = useCardAnimation(3, {
    baseDelay: 0,
    delayIncrement: 300,
    animationType: 'slideInUp',
    duration: 0.6
  });
  
  return {
    isEurovisionImageVisible,
    isWienImageVisible,
    isBergImageVisible,
    numberAnimations,
    oldNumberAnimations,
    getPostAnimationsCSS
  };
}
```

#### 2.4 Создать хук для текстов
```javascript
// src/hooks/usePostTexts.js
export function usePostTexts(lang) {
  const getKolschitzkyText = () => {
    const fullText = news.find(item => item.id === 42)?.text[lang] || '...';
    // логика получения текста
    return fullText;
  };
  
  const getDiplomaText = () => {
    const fullText = news.find(item => item.id === 45)?.text[lang] || '...';
    // логика получения текста
    return fullText;
  };
  
  return {
    getKolschitzkyText,
    getDiplomaText
  };
}
```

---

### **ЭТАП 3: Создать константы и конфигурацию**

#### 3.1 Создать константы стилей
```javascript
// src/constants/homeStyles.js
export const HOME_STYLES = {
  container: {
    minHeight: 'calc(100vh - 120px)',
    background: 'url(/background.png) center/cover no-repeat fixed',
    padding: '2vw 0',
  },
  
  postCard: {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: 16,
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
    padding: '2vw',
    maxWidth: 1200,
    width: '85%',
    margin: '0 auto 1vw auto',
    textAlign: 'left',
  },
  
  moduleHeading: {
    fontWeight: 900,
    fontSize: '3.8em',
    color: '#1565c0',
    margin: '3vw 0 1vw 0',
    letterSpacing: '0.02em',
    textAlign: 'center',
  },
  
  buttonPrimary: {
    background: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease'
  }
};

export const BREAKPOINTS = {
  mobile: 520,
  tablet: 768,
  smallScreen: 700,
  mediumScreen: 900
};
```

#### 3.2 Создать конфигурацию постов
```javascript
// src/config/homePosts.js
export const HOME_POSTS_CONFIG = {
  kolschitzky: {
    id: 42,
    type: 'expandable',
    image: kolschitzkyImg,
    layout: 'image-text'
  },
  
  diploma: {
    id: 45,
    type: 'expandable',
    image: null,
    layout: 'text-only'
  },
  
  austriaFacts1: {
    id: 'austria-facts-1',
    type: 'animated-list',
    image: WienImg,
    layout: 'image-text',
    animationDelay: 200
  }
  // ... и т.д.
};
```

---

### **ЭТАП 4: Разбить компонент на подкомпоненты**

#### 4.1 Создать секции
```
src/components/Home/sections/
├── HeroSection.jsx
├── NewsSection.jsx
├── ThisIsInterestingSection.jsx
├── CalendarSection.jsx
└── KlimaticketSection.jsx
```

#### 4.2 Создать контейнеры
```
src/components/Home/containers/
├── HomeContainer.jsx      # Главный контейнер
├── PostsContainer.jsx     # Контейнер для постов
└── SectionsContainer.jsx  # Контейнер для секций
```

---

### **ЭТАП 5: Рефакторинг Home.jsx**

#### Итоговая структура:
```javascript
// src/pages/Home/Home.jsx
import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { useHomeAnimations } from '../../hooks/useHomeAnimations';
import { usePostTexts } from '../../hooks/usePostTexts';
import { HeroSection } from '../../components/Home/sections/HeroSection';
import { NewsSection } from '../../components/Home/sections/NewsSection';
import { ThisIsInterestingSection } from '../../components/Home/sections/ThisIsInterestingSection';
import { CalendarSection } from '../../components/Home/sections/CalendarSection';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const styles = useResponsiveStyles();
  const animations = useHomeAnimations();
  const texts = usePostTexts(lang);
  
  return (
    <div style={HOME_STYLES.container}>
      <HeroSection />
      <NewsSection lang={lang} />
      <ThisIsInterestingSection 
        lang={lang} 
        styles={styles}
        animations={animations}
        texts={texts}
      />
      <CalendarSection lang={lang} />
      {/* Другие секции */}
    </div>
  );
}
```

---

## 📁 Предлагаемая структура проекта

```
src/
├── components/
│   ├── Post/              # Переиспользуемые посты
│   ├── Home/              # Специфичные для Home компоненты
│   │   ├── sections/     # Секции страницы
│   │   ├── containers/   # Контейнеры
│   │   └── posts/        # Отдельные посты
│   └── shared/            # Переиспользуемые компоненты
│
├── hooks/
│   ├── useResponsiveStyles.js
│   ├── useHomeAnimations.js
│   ├── usePostState.js
│   └── usePostTexts.js
│
├── constants/
│   ├── homeStyles.js
│   └── homePosts.js
│
└── utils/
    ├── postHelpers.js     # Вспомогательные функции
    └── styleHelpers.js    # Вспомогательные функции стилей
```

---

## 🎯 Преимущества после рефакторинга

1. **Читаемость** - код разбит на логические части
2. **Переиспользование** - компоненты можно использовать повторно
3. **Тестируемость** - каждый компонент легко тестировать
4. **Поддерживаемость** - легко найти и изменить нужную часть
5. **Производительность** - можно оптимизировать отдельные компоненты
6. **Масштабируемость** - легко добавлять новые посты и секции

---

## 🚀 План внедрения (постепенно)

### Неделя 1: Подготовка
- [ ] Создать структуру папок
- [ ] Создать константы стилей
- [ ] Создать хук useResponsiveStyles

### Неделя 2: Hooks
- [ ] Создать useHomeAnimations
- [ ] Создать usePostState
- [ ] Создать usePostTexts

### Неделя 3: Компоненты
- [ ] Создать PostCard компонент
- [ ] Создать ExpandablePost компонент
- [ ] Создать AustriaFactsPost компонент

### Неделя 4: Рефакторинг
- [ ] Разбить Home.jsx на секции
- [ ] Рефакторить посты на компоненты
- [ ] Протестировать функциональность

### Неделя 5: Оптимизация
- [ ] Мемоизация компонентов
- [ ] Оптимизация анимаций
- [ ] Финальные правки
