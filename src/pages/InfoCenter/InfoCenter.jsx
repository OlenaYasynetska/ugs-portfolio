import React from 'react';
import { useTranslation } from 'react-i18next';

const InfoCenter = () => {
  const { t } = useTranslation();

  const infoSections = [
    {
      id: 'basic-info',
      title: t('info_basic_title') || 'Основна інформація',
      icon: '📋',
      items: [
        { label: t('info_basic_1') || 'Реєстрація в Австрії', description: t('info_basic_1_desc') || 'Як зареєструватися в Австрії та отримати необхідні документи' },
        { label: t('info_basic_2') || 'Медичне страхування', description: t('info_basic_2_desc') || 'Система охорони здоров\'я та медичне страхування в Австрії' },
        { label: t('info_basic_3') || 'Робота та освіта', description: t('info_basic_3_desc') || 'Можливості працевлаштування та освіти для українців' },
        { label: t('info_basic_4') || 'Банківські послуги', description: t('info_basic_4_desc') || 'Як відкрити рахунок та користуватися банківськими послугами' }
      ]
    },
    {
      id: 'documents',
      title: t('info_documents_title') || 'Документи та посвідчення',
      icon: '📄',
      items: [
        { label: t('info_documents_1') || 'Тимчасовий захист', description: t('info_documents_1_desc') || 'Як отримати та продовжити статус тимчасового захисту' },
        { label: t('info_documents_2') || 'Документи для роботи', description: t('info_documents_2_desc') || 'Необхідні документи для працевлаштування' },
        { label: t('info_documents_3') || 'Водійські права', description: t('info_documents_3_desc') || 'Обмін та використання водійських прав' },
        { label: t('info_documents_4') || 'Свідоцтва про освіту', description: t('info_documents_4_desc') || 'Визнання українських свідоцтв про освіту' }
      ]
    },
    {
      id: 'social-services',
      title: t('info_social_title') || 'Соціальні послуги',
      icon: '🤝',
      items: [
        { label: t('info_social_1') || 'Соціальна допомога', description: t('info_social_1_desc') || 'Види соціальної підтримки та як їх отримати' },
        { label: t('info_social_2') || 'Житло', description: t('info_social_2_desc') || 'Пошук житла та житлові програми' },
        { label: t('info_social_3') || 'Мовні курси', description: t('info_social_3_desc') || 'Безкоштовні курси німецької мови' },
        { label: t('info_social_4') || 'Психологічна допомога', description: t('info_social_4_desc') || 'Підтримка для тих, хто потребує психологічної допомоги' }
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Заголовок страницы */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            🏛️ {t('info_center_title') || 'Інфоцентр'}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#7f8c8d',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t('info_center_subtitle') || 'Вся необхідна інформація для українців в Австрії'}
          </p>
        </div>

        {/* Секции информации */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {infoSections.map((section) => (
            <div
              key={section.id}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  marginRight: '1rem'
                }}>
                  {section.icon}
                </span>
                <h2 style={{
                  fontSize: '1.5rem',
                  color: '#2c3e50',
                  margin: 0,
                  fontWeight: 'bold'
                }}>
                  {section.title}
                </h2>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '1rem',
                      background: 'rgba(52, 152, 219, 0.1)',
                      borderRadius: '8px',
                      border: '1px solid rgba(52, 152, 219, 0.2)'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.1rem',
                      color: '#2c3e50',
                      margin: '0 0 0.5rem 0',
                      fontWeight: '600'
                    }}>
                      {item.label}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#7f8c8d',
                      margin: 0,
                      lineHeight: '1.5'
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Контактная информация */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            📞 {t('info_contact_title') || 'Контакти для допомоги'}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(46, 204, 113, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(46, 204, 113, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#27ae60',
                margin: '0 0 1rem 0',
                fontWeight: 'bold'
              }}>
                🇺🇦 Посольство України
              </h3>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>📍 Адреса:</strong> Naaffgasse 23, 1180 Wien
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>☎️ Телефон:</strong> +43 1 479 71 72
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>🌐 Сайт:</strong> austria.mfa.gov.ua
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(52, 152, 219, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(52, 152, 219, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#3498db',
                margin: '0 0 1rem 0',
                fontWeight: 'bold'
              }}>
                🏛️ ÖIF (Інтеграційний фонд)
              </h3>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>📍 Адреса:</strong> Stockhofstraße 36, 4020 Linz
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>☎️ Телефон:</strong> +43 732 17 61 00
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>🌐 Сайт:</strong> integrationsfonds.at
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(155, 89, 182, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(155, 89, 182, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#9b59b6',
                margin: '0 0 1rem 0',
                fontWeight: 'bold'
              }}>
                ⚖️ Правова допомога
              </h3>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>📍 Адреса:</strong> Derfflingerstraße 1/3, 4020 Linz
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>☎️ Телефон:</strong> +43 732 67 68 70
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>🌐 Сайт:</strong> rechtsberatung.at
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCenter;
