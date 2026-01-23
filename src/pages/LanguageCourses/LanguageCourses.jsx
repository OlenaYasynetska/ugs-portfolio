import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import Main from '../../components/Main/Main';
import bfiImg from '../../assets/BFI.png';
import kursImg from '../../assets/Sprachkurs/ChatGPT Image 23 янв. 2026 г., 15_56_06.png';
import { useSEO } from '../../hooks/useSEO';
import { getStructuredData, GRAMMAR_HEADINGS, GRAMMAR_LEVELS } from '../../data/languageCoursesData';

const LanguageCourses = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLang = i18n.language?.split('-')[0] || 'uk';
  const grammarHeading = GRAMMAR_HEADINGS[currentLang] || GRAMMAR_HEADINGS.uk;
  const grammarLevels = GRAMMAR_LEVELS[currentLang] || GRAMMAR_LEVELS.uk;
  const [showFullKursInfo, setShowFullKursInfo] = useState(false);

  // Обработка якорей при загрузке страницы
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1); // Убираем #
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Если это секция с курсом, автоматически открываем полный текст
          if (hash === 'free-german-course') {
            setShowFullKursInfo(true);
          }
        }
      }, 300); // Небольшая задержка для загрузки контента
    }
  }, [location.hash]);

  // SEO настройки
  useSEO({
    titles: {
      uk: 'Курси німецької мови в Штайрі | Мовні курси | UGS Steyr',
      de: 'Deutschkurse in Steyr | Sprachkurse | UGS Steyr',
      en: 'German Language Courses in Steyr | Language Courses | UGS Steyr'
    },
    descriptions: {
      uk: 'Курси німецької мови в Штайрі для українців. Рівні A1, A2, B1. Практичні заняття, невеликі групи, досвідчені тренери. Реєстрація: 0676 8734 7277',
      de: 'Deutschkurse in Steyr für Ukrainer. Niveaus A1, A2, B1. Praktische Unterrichtsstunden, kleine Gruppen, erfahrene Trainer. Anmeldung: 0676 8734 7277',
      en: 'German language courses in Steyr for Ukrainians. Levels A1, A2, B1. Practical lessons, small groups, experienced trainers. Registration: 0676 8734 7277'
    },
    keywords: {
      uk: 'курси німецької мови, мовні курси Штайр, німецька мова для українців, курси A1 A2 B1, навчання німецької, інтеграція Австрія, UGS Steyr',
      de: 'Deutschkurse, Sprachkurse Steyr, Deutsch für Ukrainer, Kurse A1 A2 B1, Deutsch lernen, Integration Österreich, UGS Steyr',
      en: 'German language courses, language courses Steyr, German for Ukrainians, courses A1 A2 B1, learn German, integration Austria, UGS Steyr'
    },
    baseUrl: 'https://ugs-info.at',
    currentLang
  });

  // JSON-LD структурированные данные для SEO
  const structuredData = getStructuredData(t);

  const defaultBfiText =
    'Чудова новина — BFI продовжує набір на online-курси з вивчення німецької!\nХочете вивчити німецьку мову та отримати перспективи працевлаштування в Австрії?\nВи втомились від бюрократії і потребуєте допомоги з записом на курс?\nМи раді повідомити, що набір на онлайн-курси німецької мови від лідера освітнього ринку Австрії BFI для тимчасово переміщених осіб з України продовжується. Якщо ви або ваші знайомі перебуваєте в Австрії та зацікавлені у швидкому й ефективному вивченні німецької онлайн — звертайтеся до нас для запису.\nКурси є повністю безкоштовними, оскільки фінансуються Австрійським інтеграційним фондом ÖIF.';

  const bfiParagraphs = t('bfi_section_text', defaultBfiText)
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const bfiContacts = [
    {
      label: t('bfi_contact_email_label', 'E-mail'),
      value: 'online-courses@workconsult.ua',
      href: 'mailto:online-courses@workconsult.ua',
    },
    {
      label: t('bfi_contact_telegram_label', 'Telegram-бот'),
      value: '@deutschkurs_bfi_bot',
      href: 'https://t.me/deutschkurs_bfi_bot',
    },
    {
      label: t('bfi_contact_phone_label', 'Телефон'),
      value: '+380(67)586-74-89',
      href: 'tel:+380675867489',
    },
    {
      label: t('bfi_contact_website_label', 'Веб-сторінка'),
      value: 'https://de4ua.workconsult.ua',
      href: 'https://de4ua.workconsult.ua',
    },
  ];

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

        {/* Kurs Section */}
        <section
          id="free-german-course"
          style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            marginBottom: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'flex-start',
            scrollMarginTop: '80px',
          }}
        >
          <img
            src={kursImg}
            alt={t('kurs_image_alt', 'German language courses in Austria')}
            style={{
              flex: '1 1 280px',
              maxWidth: '420px',
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
            }}
          />
          <div style={{ flex: '1 1 320px' }}>
            <h2
              style={{
                color: '#0057b8',
                marginBottom: '20px',
                fontSize: '1.8em',
                fontWeight: 'bold',
              }}
            >
              {t('kurs_title', 'German language courses in Austria — free basic education in Upper Austria')}
            </h2>

            <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '15px' }}>
              {t('kurs_intro', 'Free German language course for adults in Austria (Oberösterreich) offers basic education and development of language skills for everyday life, work and further learning.')}
            </p>

            <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '20px' }}>
              {t('kurs_description', 'The course is held in Upper Austria and is aimed at adults who want to improve reading, writing, written German, communication and basic mathematics. Training takes place in small groups, at a calm pace and taking into account the individual level of knowledge of the participants.')}
            </p>

            <h3 style={{ color: '#0057b8', marginBottom: '15px', fontSize: '1.4em', fontWeight: 'bold' }}>
              {t('kurs_program_title', 'Free German language course for adults (Oberösterreich)')}
            </h3>

            <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '20px' }}>
              {t('kurs_program_text', 'The basic education program is aimed at strengthening language and learning skills. Classes are built on real-life situations, which helps participants confidently use German in everyday life and at work.')}
            </p>

            <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
              {t('kurs_advantages_title', 'Course advantages:')}
            </h4>
            <ul style={{ color: '#314155', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
              <li>{t('kurs_advantages_1', 'free education in Austria')}</li>
              <li>{t('kurs_advantages_2', 'small groups')}</li>
              <li>{t('kurs_advantages_3', 'individual approach')}</li>
              <li>{t('kurs_advantages_4', 'learning without pressure and stress')}</li>
              <li>{t('kurs_advantages_5', 'preparation for work or further learning')}</li>
            </ul>

            {!showFullKursInfo && (
              <button
                onClick={() => setShowFullKursInfo(true)}
                style={{
                  background: '#0057b8',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '20px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.background = '#004494'}
                onMouseLeave={(e) => e.target.style.background = '#0057b8'}
              >
                {t('more_ellipsis', 'Далі...')}
              </button>
            )}

            {showFullKursInfo && (
              <>
                <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
                  {t('kurs_program_content_title', 'Course program')}
                </h4>
            <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '10px' }}>
              {t('kurs_program_content_text', 'The following areas are studied within the course:')}
            </p>
            <ul style={{ color: '#314155', lineHeight: '1.8', marginBottom: '10px', paddingLeft: '20px' }}>
              <li>{t('kurs_program_content_1', 'basics of reading and writing in German')}</li>
              <li>{t('kurs_program_content_2', 'improving written German')}</li>
              <li>{t('kurs_program_content_3', 'development of communication skills')}</li>
              <li>{t('kurs_program_content_4', 'everyday mathematics')}</li>
              <li>{t('kurs_program_content_5', 'skills necessary for everyday and professional life')}</li>
            </ul>
            <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic' }}>
              {t('kurs_program_content_note', 'The course is suitable for participants with different levels of training. Content and complexity are selected individually.')}
            </p>

            <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
              {t('kurs_dates_title', 'Dates and location of the German language course')}
            </h4>
            <div style={{ color: '#314155', lineHeight: '1.8', marginBottom: '15px' }}>
              <p><strong>{t('kurs_location_title', 'Training location:')}</strong></p>
              <p style={{ whiteSpace: 'pre-line' }}>{t('kurs_location', 'BFI Steyr\nSchaffgasse 2, 4400 Steyr, Austria')}</p>
            </div>
            <div style={{ color: '#314155', lineHeight: '1.8', marginBottom: '15px' }}>
              <p><strong>{t('kurs_period_title', 'Training period:')}</strong> {t('kurs_period', '09.03.2026 – 07.07.2026')}</p>
              <p><strong>{t('kurs_duration_title', 'Duration:')}</strong> {t('kurs_duration', '320 academic hours')}</p>
              <p><strong>{t('kurs_cost_title', 'Cost:')}</strong> {t('kurs_cost', 'The course is completely free')}</p>
            </div>

            <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
              {t('kurs_start_title', 'Course start and registration')}
            </h4>
            <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>{t('kurs_start_date', '📅 March 9, 2026')}</strong>
            </p>
            <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '15px' }}>
              {t('kurs_start_text', 'To participate, you must complete mandatory registration, including an information meeting and a selection interview.')}
            </p>
            <div style={{ color: '#314155', lineHeight: '1.8', marginBottom: '20px' }}>
              <p><strong>{t('kurs_info_meetings_title', 'Information meeting dates:')}</strong></p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>{t('kurs_info_meeting_1', 'January 29, 2026, 08:00')}</li>
                <li>{t('kurs_info_meeting_2', 'February 4, 2026, 08:00')}</li>
              </ul>
            </div>

            <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
              {t('kurs_contacts_title', 'Contacts for course registration')}
            </h4>
            <div style={{ color: '#314155', lineHeight: '1.8', marginBottom: '15px' }}>
              <p><strong>{t('kurs_contact_person_title', 'Contact person:')}</strong> {t('kurs_contact_person', 'Mag. Karin Maresch')}</p>
              <p><strong>E-mail:</strong> <a href={`mailto:${t('kurs_contact_email', 'karin.maresch@bfi-ooe.at')}`} style={{ color: '#0057b8', textDecoration: 'none' }}>{t('kurs_contact_email', 'karin.maresch@bfi-ooe.at')}</a></p>
              <p><strong>{t('phone', 'Phone')}:</strong> <a href={`tel:${t('kurs_contact_phone', '0664 881 729 97').replace(/\s/g, '')}`} style={{ color: '#0057b8', textDecoration: 'none' }}>{t('kurs_contact_phone', '0664 881 729 97')}</a></p>
              <p style={{ whiteSpace: 'pre-line' }}><strong>{t('contacts', 'Contacts')}:</strong> {t('kurs_contact_address', 'BFI OÖ\nSchaffgasse 2, 4400 Steyr, Austria')}</p>
            </div>

                <h4 style={{ color: '#0057b8', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
                  {t('kurs_funding_title', 'Program funding')}
                </h4>
                <p style={{ color: '#314155', lineHeight: '1.6', marginBottom: '20px' }}>
                  {t('kurs_funding_text', 'The German language course is funded by the European Social Fund (ESF+), the Federal Ministry of Education, Science and Research of Austria and the state of Upper Austria. Training is conducted within the framework of adult education programs.')}
                </p>

                <button
                  onClick={() => setShowFullKursInfo(false)}
                  style={{
                    background: '#0057b8',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#004494'}
                  onMouseLeave={(e) => e.target.style.background = '#0057b8'}
                >
                  {t('hide_text', 'Сховати')}
                </button>
              </>
            )}
          </div>
        </section>

        {/* BFI Online Courses Section */}
        <section
          style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            marginBottom: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <img
            src={bfiImg}
            alt={t('bfi_image_alt', 'BFI online courses')}
            style={{
              flex: '1 1 280px',
              maxWidth: '420px',
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
            }}
          />
          <div style={{ flex: '1 1 320px' }}>
            <h2
              style={{
                color: '#0057b8',
                marginBottom: '20px',
                fontSize: '1.8em',
                fontWeight: 'bold',
              }}
            >
              {t('bfi_section_title', 'Online-курси BFI з німецької')}
            </h2>

            <div style={{ color: '#314155', lineHeight: '1.6', marginBottom: '20px' }}>
              {bfiParagraphs.map((paragraph, index) => (
                <p key={`bfi-top-paragraph-${index}`} style={{ marginBottom: '12px' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              style={{
                background: '#f8fbff',
                borderRadius: '12px',
                padding: '16px 20px',
                border: '1px solid #e0e7ff',
                marginBottom: '20px',
              }}
            >
              <h3 style={{ margin: '0 0 12px 0', color: '#0369a1', fontSize: '1.1rem' }}>
                {t('bfi_contacts_title', 'Контакти')}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {bfiContacts.map((contact) => (
                  <li key={`bfi-top-contact-${contact.label}`} style={{ marginBottom: '8px', fontSize: '0.95rem' }}>
                    <strong>{contact.label}:</strong>{' '}
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ color: '#0d6efd', textDecoration: 'none' }}
                    >
                      {contact.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://de4ua.workconsult.ua"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#1d4ed8',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)',
              }}
            >
              {t('bfi_button_label', 'Зареєструватися на сайті')}
            </a>
          </div>
        </section>
        
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
            🇦🇹 {t('german_courses_title', 'Курси німецької мови в Штайрі - реєструйся прямо зараз!')}
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

        <div
          style={{
            margin: '40px 0 60px',
            width: '100%',
            background: '#eef2f5',
            borderRadius: '18px',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: '0 15px 35px rgba(15, 23, 42, 0.12)',
            padding: '35px 25px',
            color: '#0f172a',
            fontFamily: '"Playfair Display", "Times New Roman", serif',
            lineHeight: 1.4
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.6em, 4vw, 2.4em)',
              letterSpacing: '0.04em',
              textAlign: 'center',
              marginBottom: '25px'
            }}
          >
            {grammarHeading}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              fontSize: '1em'
            }}
          >
            {['A1', 'A2', 'B1'].map((level) => {
              const isA1 = level === 'A1';
              return (
                <div
                  key={level}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)',
                    padding: '25px',
                    textAlign: 'center',
                    cursor: isA1 ? 'pointer' : 'default',
                    transition: 'transform 0.2s ease'
                  }}
                  onClick={isA1 ? () => navigate('/language-courses/a1') : undefined}
                  onKeyDown={
                    isA1
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigate('/language-courses/a1');
                          }
                        }
                      : undefined
                  }
                  role={isA1 ? 'button' : undefined}
                  tabIndex={isA1 ? 0 : undefined}
                >
                  <div
                    style={{
                      fontSize: '2.2em',
                      fontWeight: '700',
                      color: '#0f172a',
                      marginBottom: '10px'
                    }}
                  >
                    {level}
                  </div>
                  <div style={{ color: '#475569', fontSize: '0.95em' }}>
                    {grammarLevels[level]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </Main>
  );
};

export default LanguageCourses;

