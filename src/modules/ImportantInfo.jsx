import React from 'react';
import { useTranslation } from 'react-i18next';
import PharmacyDutyBlock from './PharmacyDutyBlock';
import EmergencyCallsBlock from './EmergencyCallsBlock';

export default function ImportantInfo() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="module-heading" style={{
        color: '#1565c0',
        fontSize: '3.8em',
        margin: '0 0 2vw 0',
        textAlign: 'center',
        maxWidth: '90vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        letterSpacing: '0.02em',
        fontWeight: 900,
      }}>{t('important_info')}</h2>
      
      {/* Блок оперативной службы и контактов Посольства Украины */}
      <div style={{
        background: 'rgba(255,255,255,0.9)',
        borderRadius: 16,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        padding: '3vw',
        margin: '0 auto 3vw auto',
        maxWidth: 1200,
        width: '90%',
        boxSizing: 'border-box',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vw',
        }}>
          {/* Баннер Посольства Украины */}
          <div style={{
            background: 'linear-gradient(90deg, #1565c0 0%, #42a5f5 100%)',
            borderRadius: 12,
            padding: '2vw',
            marginBottom: '1vw',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2vw',
            }}>
              {/* Украинский флаг */}
              <div style={{
                width: '8vw',
                height: '4vw',
                background: 'linear-gradient(180deg,rgb(18, 82, 156) 50%, #ffd700 50%)',
                borderRadius: '0.5vw',
                minWidth: 24,
                minHeight: 32,
                alignSelf: 'center',
              }}></div>
              
              {/* Название Посольства */}
              <div style={{
                fontSize: '1.6em',
                fontWeight: 700,
                flex: 1,
                textAlign: 'center',
              }}>Посольство України в Республіці Австрія</div>
              
              {/* Тризуб */}
              <div style={{
                minWidth: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="5 5 650 922">
                  <path d="m5 5h650v689c0 48-29 97-76 117l-251 105-251-105c-44-20-76-65-72-117z" fill="#005bbb" stroke="#ffd500" strokeWidth="10"/>
                  <path id="a" d="m329 53c-6 4-2 396 0 401 12 43 29 81 48 112-104 31-63 146-48 287 7-12 17-21 28-28 43-34 70-81 79-132h133v-580c-148 88-132 213-148 361 59-10 75 76-3 83-92-149-59-257-59-419 0-37-9-62-30-85zm200 143v297h-22c-6-23-21-41-42-51 8-85 10-189 64-246zm-22 337h22v120h-89c0-19-3-39-8-58 36-4 68-29 75-62zm-114 71c4 16 6 33 6 49h-50c1-27 19-44 44-49zm-44 89h46c-7 31-23 61-46 85z" fill="#ffd500"/>
                  <use transform="matrix(-1 0 0 1 658 0)" xlinkHref="#a"/>
                </svg>
              </div>
            </div>
            
            {/* Логотип gov.ua */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1vw',
              marginTop: '1vw',
            }}>
              <div>
                <div style={{
                  fontSize: '1.8em',
                  fontWeight: 700,
                  marginBottom: '0.3vw',
                }}>gov.ua</div>
                <div style={{
                  fontSize: '1em',
                  opacity: 0.9,
                }}>Державні сайти України</div>
              </div>
            </div>
          </div>
          
          {/* Оперативна служба */}
          <div style={{
            borderBottom: '2px solid #1565c0',
            paddingBottom: '2vw',
          }}>
            <h3 style={{
              color: '#1565c0',
              fontSize: '1.8em',
              margin: '0 0 1.5vw 0',
              fontWeight: 700,
              textAlign: 'center',
            }}>Оперативна служба</h3>
            <p style={{
              color: '#d32f2f',
              fontSize: '1.2em',
              fontWeight: 600,
              textAlign: 'center',
              margin: '0 0 1.5vw 0',
              fontStyle: 'italic',
            }}>Виключно у випадку загрози життю або загибелі громадян України</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3vw',
              flexWrap: 'wrap',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>телефон:</div>
                <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#1565c0' }}>(+43) 1 4797 17252</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>телефон:</div>
                <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#1565c0' }}>+436766098277</div>
                <div style={{ fontSize: '1em', color: '#666' }}>WhatsApp/Сигнал</div>
              </div>
            </div>
          </div>
          
          {/* Контакти */}
          <div style={{
            borderBottom: '2px solid #1565c0',
            paddingBottom: '2vw',
          }}>
            <h3 style={{
              color: '#1565c0',
              fontSize: '1.8em',
              margin: '0 0 1.5vw 0',
              fontWeight: 700,
              textAlign: 'center',
            }}>Контакти</h3>
            
            {/* Адреса */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2vw',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>Адреса:</div>
                <div style={{ fontSize: '1.2em', fontWeight: 600, color: '#1565c0' }}>1180, м. Відень, вул. Нааффгассе, 23</div>
                <div style={{ fontSize: '1.2em', fontWeight: 600, color: '#1565c0' }}>1180, Wien, Naaffgasse 23</div>
              </div>
            </div>
            
            {/* Телефони */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2vw',
              marginBottom: '2vw',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>телефон:</div>
                <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#1565c0' }}>+43 1 479 717252</div>
                <div style={{ fontSize: '1em', color: '#666' }}>консульські питання</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>телефон:</div>
                <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#1565c0' }}>+43 1 479 717222</div>
                <div style={{ fontSize: '1em', color: '#666' }}>консульські питання</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>телефон:</div>
                <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#1565c0' }}>+43 1 479 717240</div>
                <div style={{ fontSize: '1em', color: '#666' }}>консульські питання</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>телефон:</div>
                <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#1565c0' }}>+43 1 479 717255</div>
                <div style={{ fontSize: '1em', color: '#666' }}>консульські питання</div>
              </div>
            </div>
            
            {/* Факс */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2vw',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>факс:</div>
                <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#1565c0' }}>+43 1 479 71 72 47</div>
              </div>
            </div>
            
            {/* Електронна пошта */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2vw',
              marginBottom: '2vw',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>Електронна пошта:</div>
                <div style={{ fontSize: '1.2em', fontWeight: 600, color: '#1565c0' }}>emb_at@mfa.gov.ua</div>
                <div style={{ fontSize: '1em', color: '#666' }}>базовий</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>Електронна пошта:</div>
                <div style={{ fontSize: '1.2em', fontWeight: 600, color: '#1565c0' }}>consul_at@mfa.gov.ua</div>
                <div style={{ fontSize: '1em', color: '#666' }}>по консульських питаннях</div>
              </div>
            </div>
            
            {/* Синя горизонтальна лінія між електронною поштою та графіком роботи */}
            <div style={{
              height: '2px',
              background: '#1565c0',
              width: '90%',
              margin: '2vw auto',
              borderRadius: '1px',
            }}></div>
            
            {/* Графік роботи */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2vw',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5vw' }}>Графік роботи:</div>
                <div style={{ fontSize: '1.2em', fontWeight: 600, color: '#1565c0' }}>Понеділок – четвер 09:00-18:00</div>
                <div style={{ fontSize: '1.2em', fontWeight: 600, color: '#1565c0' }}>П'ятниця 09:00-16:45</div>
                <div style={{ fontSize: '1.2em', fontWeight: 600, color: '#1565c0' }}>Обідня перерва: 13:00 – 13:45</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .info-block-inner {
          height: 220px;
        }
        @media (max-width: 900px) {
          .info-flex-row {
            flex-direction: column !important;
          }
          .info-flex-col {
            max-width: 100% !important;
            min-width: 0 !important;
            height: auto !important;
          }
          .info-block-inner {
            height: auto;
            min-height: 160px;
          }
        }
      `}</style>
      <div className="info-flex-row" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '2vw',
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto 4vw',
        boxSizing: 'border-box',
        padding: '0 2vw',
        height: '100%',
      }}>
        <div className="info-flex-col" style={{ flex: '1 1 50px', minWidth: '280px', maxWidth: 600, boxSizing: 'border-box', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <PharmacyDutyBlock />
        </div>
        <div className="info-flex-col" style={{ flex: '1 1 50px', minWidth: '220px', maxWidth: 600, boxSizing: 'border-box', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <EmergencyCallsBlock />
        </div>
      </div>
    </>
  );
} 