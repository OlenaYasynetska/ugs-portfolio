import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Main from '../../components/Main/Main';

const LanguageCourses = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language?.split('-')[0] || 'uk';

  // Обновление мета-тегов для SEO
  useEffect(() => {
    const baseUrl = 'https://ugs-info.at';
    const pageUrl = `${baseUrl}${location.pathname}`;
    
    // Обновление title
    const titles = {
      uk: 'Курси німецької мови в Штайрі | Мовні курси | UGS Steyr',
      at: 'Deutschkurse in Steyr | Sprachkurse | UGS Steyr',
      en: 'German Language Courses in Steyr | Language Courses | UGS Steyr'
    };
    document.title = titles[currentLang] || titles.uk;

    // Обновление description
    const descriptions = {
      uk: 'Курси німецької мови в Штайрі для українців. Рівні A1, A2, B1. Практичні заняття, невеликі групи, досвідчені тренери. Реєстрація: 0676 8734 7277',
      de: 'Deutschkurse in Steyr für Ukrainer. Niveaus A1, A2, B1. Praktische Unterrichtsstunden, kleine Gruppen, erfahrene Trainer. Anmeldung: 0676 8734 7277',
      en: 'German language courses in Steyr for Ukrainians. Levels A1, A2, B1. Practical lessons, small groups, experienced trainers. Registration: 0676 8734 7277'
    };
    updateMetaTag('name', 'description', descriptions[currentLang] || descriptions.uk);
    updateMetaTag('property', 'og:description', descriptions[currentLang] || descriptions.uk);
    updateMetaTag('property', 'twitter:description', descriptions[currentLang] || descriptions.uk);

    // Обновление og:title
    updateMetaTag('property', 'og:title', titles[currentLang] || titles.uk);
    updateMetaTag('property', 'twitter:title', titles[currentLang] || titles.uk);

    // Обновление URL
    updateMetaTag('property', 'og:url', pageUrl);
    updateMetaTag('property', 'twitter:url', pageUrl);

    // Обновление keywords
    const keywords = {
      uk: 'курси німецької мови, мовні курси Штайр, німецька мова для українців, курси A1 A2 B1, навчання німецької, інтеграція Австрія, UGS Steyr',
      de: 'Deutschkurse, Sprachkurse Steyr, Deutsch für Ukrainer, Kurse A1 A2 B1, Deutsch lernen, Integration Österreich, UGS Steyr',
      en: 'German language courses, language courses Steyr, German for Ukrainians, courses A1 A2 B1, learn German, integration Austria, UGS Steyr'
    };
    updateMetaTag('name', 'keywords', keywords[currentLang] || keywords.uk);

    // Canonical URL
    updateCanonical(pageUrl);
  }, [currentLang, location.pathname]);

  // Функции для обновления мета-тегов
  const updateMetaTag = (attribute, value, content) => {
    const selector = attribute === 'name' 
      ? `meta[name="${value}"]` 
      : `meta[property="${value}"]`;
    let meta = document.querySelector(selector);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, value);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateCanonical = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };

  // JSON-LD структурированные данные для SEO
  const structuredData = {
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
  };

  return (
    <Main>
      {/* JSON-LD структурированные данные для поисковых роботов */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article itemScope itemType="https://schema.org/EducationalOrganization" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h1 itemProp="name" style={{ 
          color: '#0057b8', 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: 'clamp(1.8em, 5vw, 2.5em)',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          {t('language_courses', 'Мовні курси')}
        </h1>
        
        {/* Основная карточка с информацией о курсах */}
        <section itemScope itemType="https://schema.org/Service" style={{ 
          background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
          padding: '30px', 
          borderRadius: '16px', 
          border: '1px solid #e9ecef',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          marginBottom: '40px'
        }}>
          <h2 style={{ 
            color: '#0057b8', 
            marginBottom: '20px',
            fontSize: '1.8em',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            🇩🇪 {t('german_courses_title', 'Курси німецької мови в Штайрі - реєструйся прямо зараз!')}
          </h2>

          <p style={{ 
            fontSize: '1.2em', 
            lineHeight: '1.6', 
            color: '#333',
            textAlign: 'center',
            marginBottom: '15px',
            fontWeight: '500'
          }}>
            {t('german_courses_question', 'Хочете покращити або перезапустити свої навички німецької мови?')}
          </p>

          <p style={{ 
            fontSize: '1.1em', 
            lineHeight: '1.6', 
            color: '#555',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            {t('german_courses_description', 'Наші курси німецької мови в Штайрі пропонують вам практичні заняття, невеликі групи та досвідчених тренерів.')}
          </p>

          {/* Уровни курсов */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📚 {t('course_levels_title', 'Рівні курсів та розклад:')}
            </h3>

            <div style={{ display: 'grid', gap: '20px' }}>
              {/* A1 Часть 1 */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
                  A1 {t('part', 'Частина')} 1
                </h4>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('start_date', 'Початок')}:</strong> 19.01.2025
                </p>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('schedule', 'Розклад')}:</strong>
                </p>
                <ul style={{ marginLeft: '20px', color: '#555' }}>
                  <li>{t('a1_schedule_1', 'Понеділок та Середа 12:00-15:00')}</li>
                  <li>{t('a1_schedule_2', 'П\'ятниця 9:00-12:00')}</li>
                </ul>
              </div>

              {/* A2 Часть 1 */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
                  A2 {t('part', 'Частина')} 1
                </h4>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('start_date', 'Початок')}:</strong> 10.12.2025
                </p>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('schedule', 'Розклад')}:</strong>
                </p>
                <ul style={{ marginLeft: '20px', color: '#555' }}>
                  <li>{t('a2_schedule_1', 'Понеділок, Середа та Четвер 9:00-12:00')}</li>
                </ul>
              </div>

              {/* A2 часть 1 (день) */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
                  A2 {t('part', 'Частина')} 1 ({t('day', 'день')})
                </h4>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('start_date', 'Початок')}:</strong> 13.01.2026
                </p>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('schedule', 'Розклад')}:</strong>
                </p>
                <ul style={{ marginLeft: '20px', color: '#555' }}>
                  <li>{t('a2_day_schedule', 'Вівторок та Четвер 14:00-17:00')}</li>
                </ul>
              </div>

              {/* B1 Часть 1 */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
                  B1 {t('part', 'Частина')} 1
                </h4>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('start_date', 'Початок')}:</strong> 13.01.2026
                </p>
                <p style={{ marginBottom: '8px', color: '#333' }}>
                  <strong>{t('schedule', 'Розклад')}:</strong>
                </p>
                <ul style={{ marginLeft: '20px', color: '#555' }}>
                  <li>{t('b1_schedule', 'Вівторок та Четвер 17:00-20:00')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Стоимость */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              💰 {t('course_cost_title', 'Вартість курсу:')}
            </h3>

            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #ddd',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', color: '#333' }}>
                  <strong>{t('cost_group_1', 'Країна О О (мігранти та громадяни ЄС)')}:</strong> €185 {t('including_materials', 'включаючи матеріали')}
                </li>
                <li style={{ marginBottom: '12px', color: '#333' }}>
                  <strong>{t('cost_group_2', 'Шукачі притулку')}:</strong> €22.50 {t('including_materials', 'включаючи матеріали')}
                </li>
                <li style={{ marginBottom: '12px', color: '#333' }}>
                  <strong>{t('cost_group_3', 'Цільова група IF (індивідуальна підтримка)')}:</strong> {t('no_cost', 'без витрат')}
                </li>
              </ul>
            </div>
          </div>

          {/* Регистрация */}
          <div>
            <h3 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📞 {t('registration_title', 'Для реєстрації:')}
            </h3>

            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #ddd',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <p style={{ marginBottom: '12px', color: '#333' }}>
                {t('registration_options', 'Через сайт або безпосередньо від мене')}
              </p>
              <p style={{ marginBottom: '8px', color: '#333' }}>
                <strong>{t('phone', 'Телефон')}:</strong>{' '}
                <a href="tel:+4367687347277" style={{ color: '#0057b8', textDecoration: 'none', fontWeight: 'bold' }}>
                  0676 8734 7277
                </a>
              </p>
              <p style={{ marginBottom: '0', color: '#333' }}>
                <strong>{t('website', 'Веб-сайт')}:</strong>{' '}
                <a 
                  href="https://www.volkshilfe-ooe.at/dienstleistung/deutsch-als-fremdsprache" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#0057b8', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  www.volkshilfe-ooe.at/dienstleistung/deutsch-als-fremdsprache
                </a>
              </p>
            </div>
          </div>
        </section>
      </article>
    </Main>
  );
};

export default LanguageCourses;

