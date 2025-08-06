import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Main from '../../components/Main/Main';

const Blog = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      category: 'integration',
      title: {
        ua: 'Як успішно інтегруватися в австрійське суспільство',
        de: 'Wie man sich erfolgreich in die österreichische Gesellschaft integriert',
        en: 'How to successfully integrate into Austrian society'
      },
      excerpt: {
        ua: 'Практичні поради для українців, які хочуть швидко адаптуватися до життя в Австрії',
        de: 'Praktische Tipps für Ukrainer, die sich schnell an das Leben in Österreich anpassen möchten',
        en: 'Practical tips for Ukrainians who want to quickly adapt to life in Austria'
      },
      date: '2025-08-05',
      readTime: '5 хв',
      image: 'integration.jpg'
    },
    {
      id: 2,
      category: 'language',
      title: {
        ua: 'Ефективні методи вивчення німецької мови',
        de: 'Effektive Methoden zum Deutschlernen',
        en: 'Effective methods for learning German'
      },
      excerpt: {
        ua: 'Перевірені способи швидкого вивчення німецької мови для українців',
        de: 'Bewährte Wege, um schnell Deutsch für Ukrainer zu lernen',
        en: 'Proven ways to quickly learn German for Ukrainians'
      },
      date: '2025-08-04',
      readTime: '7 хв',
      image: 'german-learning.jpg'
    },
    {
      id: 3,
      category: 'work',
      title: {
        ua: 'Пошук роботи в Австрії: покроковий гід',
        de: 'Jobsuche in Österreich: Schritt-für-Schritt-Anleitung',
        en: 'Job search in Austria: step-by-step guide'
      },
      excerpt: {
        ua: 'Детальний план дій для пошуку роботи в Австрії з урахуванням специфіки ринку праці',
        de: 'Detaillierter Aktionsplan für die Jobsuche in Österreich unter Berücksichtigung der Besonderheiten des Arbeitsmarktes',
        en: 'Detailed action plan for job search in Austria considering the specifics of the labor market'
      },
      date: '2025-08-03',
      readTime: '10 хв',
      image: 'job-search.jpg'
    },
    {
      id: 4,
      category: 'education',
      title: {
        ua: 'Освіта в Австрії: можливості для українських дітей',
        de: 'Bildung in Österreich: Möglichkeiten für ukrainische Kinder',
        en: 'Education in Austria: opportunities for Ukrainian children'
      },
      excerpt: {
        ua: 'Як записати дитину до школи та які освітні можливості доступні в Австрії',
        de: 'Wie man ein Kind in der Schule anmeldet und welche Bildungsmöglichkeiten in Österreich verfügbar sind',
        en: 'How to enroll a child in school and what educational opportunities are available in Austria'
      },
      date: '2025-08-02',
      readTime: '6 хв',
      image: 'education.jpg'
    },
    {
      id: 5,
      category: 'culture',
      title: {
        ua: 'Українська культура в Австрії: збереження традицій',
        de: 'Ukrainische Kultur in Österreich: Bewahrung der Traditionen',
        en: 'Ukrainian culture in Austria: preserving traditions'
      },
      excerpt: {
        ua: 'Як зберегти українську культурну спадщину, живучи в Австрії',
        de: 'Wie man das ukrainische Kulturerbe bewahrt, während man in Österreich lebt',
        en: 'How to preserve Ukrainian cultural heritage while living in Austria'
      },
      date: '2025-08-01',
      readTime: '8 хв',
      image: 'culture.jpg'
    },
    {
      id: 6,
      category: 'legal',
      title: {
        ua: 'Правові аспекти тимчасового захисту в Австрії',
        de: 'Rechtliche Aspekte des vorübergehenden Schutzes in Österreich',
        en: 'Legal aspects of temporary protection in Austria'
      },
      excerpt: {
        ua: 'Важливі правові питання, які потрібно знати українцям з тимчасовим захистом',
        de: 'Wichtige rechtliche Fragen, die Ukrainer mit vorübergehendem Schutz kennen sollten',
        en: 'Important legal issues that Ukrainians with temporary protection should know'
      },
      date: '2025-07-31',
      readTime: '12 хв',
      image: 'legal.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: { ua: 'Всі статті', de: 'Alle Artikel', en: 'All articles' } },
    { id: 'integration', name: { ua: 'Інтеграція', de: 'Integration', en: 'Integration' } },
    { id: 'language', name: { ua: 'Мова', de: 'Sprache', en: 'Language' } },
    { id: 'work', name: { ua: 'Робота', de: 'Arbeit', en: 'Work' } },
    { id: 'education', name: { ua: 'Освіта', de: 'Bildung', en: 'Education' } },
    { id: 'culture', name: { ua: 'Культура', de: 'Kultur', en: 'Culture' } },
    { id: 'legal', name: { ua: 'Право', de: 'Recht', en: 'Legal' } }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCurrentLanguage = () => {
    return i18n.language || 'ua';
  };

  const currentLang = getCurrentLanguage();

  return (
    <Main>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ color: '#0057b8', textAlign: 'center', marginBottom: '20px' }}>
          📚 {t('blog_title', 'Корисні статті')}
        </h1>
        
        <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', color: '#666', marginBottom: '40px' }}>
          {t('blog_subtitle', 'Статті про інтеграцію, освіту, роботу та культурне життя українців в Австрії')}
        </p>

        {/* Фильтр по категориям */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '10px', 
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: '8px 16px',
                border: selectedCategory === category.id ? '2px solid #0057b8' : '1px solid #ddd',
                borderRadius: '20px',
                background: selectedCategory === category.id ? '#0057b8' : 'white',
                color: selectedCategory === category.id ? 'white' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
            >
              {category.name[currentLang]}
            </button>
          ))}
        </div>

        {/* Список статей */}
        <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {filteredPosts.map(post => (
            <article key={post.id} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }}
            >
              <div style={{ marginBottom: '15px' }}>
                <span style={{
                  background: '#e3f2fd',
                  color: '#1565c0',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {categories.find(cat => cat.id === post.category)?.name[currentLang]}
                </span>
              </div>

              <h2 style={{ 
                color: '#0057b8', 
                marginBottom: '15px', 
                fontSize: '1.4rem',
                lineHeight: '1.3'
              }}>
                {post.title[currentLang]}
              </h2>

              <p style={{ 
                color: '#666', 
                lineHeight: '1.6', 
                marginBottom: '20px',
                fontSize: '16px'
              }}>
                {post.excerpt[currentLang]}
              </p>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                color: '#999',
                fontSize: '14px'
              }}>
                <span>{new Date(post.date).toLocaleDateString(currentLang === 'ua' ? 'uk-UA' : currentLang === 'de' ? 'de-DE' : 'en-US')}</span>
                <span>⏱️ {post.readTime}</span>
              </div>

              <button style={{
                background: '#0057b8',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '15px',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#004494'}
              onMouseLeave={(e) => e.target.style.background = '#0057b8'}
              >
                {t('read_more', 'Читати далі')}
              </button>
            </article>
          ))}
        </div>

        {/* Призыв к действию */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ffd700, #0057b8)', 
          color: 'white', 
          padding: '40px', 
          borderRadius: '12px', 
          marginTop: '50px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>
            ✍️ {t('write_for_us', 'Напишіть для нас')}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px' }}>
            {t('blog_cta', 'Маєте цікавий досвід інтеграції або корисні поради? Поділіться ними з нашою громадою!')}
          </p>
          <button style={{
            background: 'white',
            color: '#0057b8',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '15px'
          }}>
            {t('submit_article', 'Надіслати статтю')}
          </button>
          <button style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            {t('contact_editor', 'Зв\'язатися з редактором')}
          </button>
        </div>

        {/* Подписка на блог */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '30px', 
          borderRadius: '12px', 
          marginTop: '30px',
          textAlign: 'center',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ color: '#0057b8', marginBottom: '15px' }}>
            📧 {t('subscribe_to_blog', 'Підпишіться на наш блог')}
          </h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            {t('subscribe_description', 'Отримуйте нові статті та корисні поради на вашу електронну пошту')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder={t('email_placeholder', 'Ваша електронна пошта')}
              style={{
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                minWidth: '250px'
              }}
            />
            <button style={{
              background: '#0057b8',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              {t('subscribe', 'Підписатися')}
            </button>
          </div>
        </div>

      </div>
    </Main>
  );
};

export default Blog; 