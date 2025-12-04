import { useTranslation } from 'react-i18next';

/**
 * Данные для структурированных данных JSON-LD страницы Language Courses
 */
export const getStructuredData = (t) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'UGS Steyr - German Language Courses',
  description: t('german_courses_description', 'Наші курси німецької мови в Штайрі пропонують вам практичні заняття, невеликі групи та досвідчених тренерів.'),
  url: 'https://ugs-info.at/language-courses',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Steyr',
    addressRegion: 'Upper Austria',
    addressCountry: 'AT',
    postalCode: '4400'
  },
  telephone: '+4367687347277',
  email: 'contact@ugs-info.at',
  offers: [
    {
      '@type': 'Course',
      name: 'A1 German Course Part 1',
      description: 'A1 level German language course for beginners',
      provider: {
        '@type': 'Organization',
        name: 'UGS Steyr'
      },
      courseCode: 'A1-P1',
      startDate: '2025-01-19',
      schedule: 'Monday and Wednesday 12:00-15:00, Friday 9:00-12:00',
      price: '185',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    },
    {
      '@type': 'Course',
      name: 'A2 German Course Part 1',
      description: 'A2 level German language course',
      provider: {
        '@type': 'Organization',
        name: 'UGS Steyr'
      },
      courseCode: 'A2-P1',
      startDate: '2025-12-10',
      schedule: 'Monday, Wednesday and Thursday 9:00-12:00',
      price: '185',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    },
    {
      '@type': 'Course',
      name: 'A2 German Course Part 1 (Day)',
      description: 'A2 level German language course - day schedule',
      provider: {
        '@type': 'Organization',
        name: 'UGS Steyr'
      },
      courseCode: 'A2-P1-DAY',
      startDate: '2026-01-13',
      schedule: 'Tuesday and Thursday 14:00-17:00',
      price: '185',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    },
    {
      '@type': 'Course',
      name: 'B1 German Course Part 1',
      description: 'B1 level German language course',
      provider: {
        '@type': 'Organization',
        name: 'UGS Steyr'
      },
      courseCode: 'B1-P1',
      startDate: '2026-01-13',
      schedule: 'Tuesday and Thursday 17:00-20:00',
      price: '185',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127'
  }
});

/**
 * Константы для заголовков грамматики по языкам
 */
export const GRAMMAR_HEADINGS = {
  uk: 'Легка німецька граматика. Навчайся онлайн із драйвом та натхненням',
  de: 'Leichte deutsche Grammatik — online lernen und Spaß haben',
  en: 'Easy German Grammar — Learn Online with Fun & Flow'
};

/**
 * Константы для описаний уровней грамматики по языкам
 */
export const GRAMMAR_LEVELS = {
  uk: {
    A1: 'Починай з базових правил у дружньому темпі',
    A2: 'Закріплюй граматику для впевненого щоденного спілкування',
    B1: 'Виходь на новий рівень та говори комплексно'
  },
  de: {
    A1: 'Starte mit den Grundlagen in angenehmem Tempo',
    A2: 'Festige die Grammatik für sichere Gespräche im Alltag',
    B1: 'Gehe aufs nächste Level und sprich komplexe Gedanken aus'
  },
  en: {
    A1: 'Start with the essentials in a friendly pace',
    A2: 'Strengthen grammar for confident everyday conversation',
    B1: 'Move to the next level and express complex ideas'
  }
};

