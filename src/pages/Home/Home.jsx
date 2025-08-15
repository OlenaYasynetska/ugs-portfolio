import React from 'react';
import background from '../../assets/background.png';
import Hero from '../../modules/Hero';
import NewsBlock from '../../modules/NewsBlock';
import ImportantInfo from '../../modules/ImportantInfo';
import MainModulesContainer from '../../modules/MainModulesContainer';
import Calendar from '../../components/Calendar/Calendar';
import AdminCalendar from '../../components/AdminCalendar/AdminCalendar';
import { useTranslation } from 'react-i18next';
import { news } from '../../data/db';
import fieldImg from '../../assets/field.png';
import zakonImg from '../../assets/zakon.jpg';
import geschprechImg from '../../assets/geschprech.png';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [h1FontSize, setH1FontSize] = React.useState(window.innerWidth <= 900 ? '2.8em' : '4em');
    const [isImageVisible, setIsImageVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);
  const [showFull, setShowFull] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => {
      setH1FontSize(window.innerWidth <= 900 ? '2.8em' : '4em');
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'weekly-events-image') {
              setIsImageVisible(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const imageElement = document.getElementById('weekly-events-image');
    
    if (imageElement) {
      observer.observe(imageElement);
    }
    
    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);
  
  // Получаем текст для блока "Этот день в истории"
  const lang = i18n.language || 'en';
  const news20 = news.find(n => n.id === 20);
  const dayText = news20?.text?.[lang] || news20?.text?.en || '';
  const shortText = dayText.length > 220 ? (
    <>
      {dayText.slice(0, 220)}<span
        style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 700 }}
        onClick={() => setShowFull(true)}
      >...</span>
    </>
  ) : dayText;
  const isVeryMobile = typeof window !== 'undefined' ? window.innerWidth < 520 : false;
  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)',
      maxWidth: '100vw',
      textAlign: 'center',
      height: 'auto',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <style>{`
        @media (max-width: 1400px) {
          .main-title-hero {
            padding-left: 50px !important;
            padding-right: 50px !important;
          }
        }
      `}</style>
      <Hero />
      <h1
        className="main-title-hero"
        style={{
          color: '#1565c0',
          fontSize: h1FontSize,
          marginTop: 0,
          marginBottom: '1.5vw',
          letterSpacing: '0.02em',
          fontWeight: 900,
        }}
      >
        {t('welcome')}
      </h1>
      <MainModulesContainer>
        {/* <Hero /> */}
        <NewsBlock />
        <div style={{
          fontWeight: 900,
          fontSize: '2em',
          color: '#1565c0',
          margin: '2vw 0 1vw 0',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}>{t('this_day_in_history')}</div>
        {isVeryMobile ? (
          <div style={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
            maxWidth: 400,
            width: '95%',
            margin: '0 auto 1vw auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img src={fieldImg} alt="Ukrainian State Flag Day" style={{ maxWidth: 220, width: '100%', height: 'auto', borderRadius: 12, margin: '0 auto 16px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                🇺🇦 23 серпня — День Державного Прапора України
              </div>
              {isMobile && !showFull ? shortText : (
                <>
                  {dayText}
                  {isMobile && (
                    <span
                      style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 700, marginLeft: 8 }}
                      onClick={() => setShowFull(false)}
                    >
                      {t('hide_text') || 'Скрыть'}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2vw',
            margin: '0 0 1vw 0',
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
            maxWidth: 1200,
            width: '85%',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
            flexWrap: 'wrap',
          }}>
                          <img src={fieldImg} alt="Ukrainian State Flag Day" style={{ maxWidth: 220, width: '100%', height: 'auto', borderRadius: 12, marginRight: 24, flex: '0 0 220px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                🇺🇦 23 серпня — День Державного Прапора України
              </div>
              {isMobile && !showFull ? shortText : (
                <>
                  {dayText}
                  {isMobile && (
                    <span
                      style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 700, marginLeft: 8 }}
                      onClick={() => setShowFull(false)}
                    >
                      {t('hide_text') || 'Скрыть'}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
                 )}
         
         {/* Події тижня */}
         <div style={{
           fontWeight: 900,
           fontSize: '2em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>{t('weekly_events')}</div>
         
         {/* Блок "События недели" с новостью о встрече Трампа и Путина */}
         {(() => {
           const news19 = news.find(n => n.id === 19);
           console.log('News 19 found:', news19);
           console.log('Current language:', lang);
           console.log('News 19 title:', news19?.title?.[lang]);
           console.log('News 19 text:', news19?.text?.[lang]);
           
           return (
             <div 
               id="weekly-events-image"
               style={{
                 background: 'rgba(255,255,255,0.85)',
                 borderRadius: 16,
                 boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                 padding: '2vw',
                 maxWidth: 800,
                 width: '90%',
                 margin: '0 auto 2vw auto',
                 textAlign: 'center',
               }}
             >
               <div style={{
                 fontSize: '20px',
                 fontWeight: 700,
                 color: '#1565c0',
                 marginBottom: '16px',
                 textAlign: 'center'
               }}>
                 {news19?.title?.[lang] || news19?.title?.en || 'News title not found'}
               </div>
               <img 
                 src={geschprechImg} 
                 alt="Historical meeting: Trump and Putin in Alaska" 
                 style={{ 
                   maxWidth: '100%', 
                   height: 'auto', 
                   borderRadius: 12,
                   boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                   marginBottom: '16px'
                 }} 
               />
               <div style={{
                 fontSize: '16px',
                 lineHeight: '1.6',
                 color: '#234',
                 textAlign: 'left',
                 padding: '0 8px',
                 whiteSpace: 'pre-line'
               }}>
                 {news19?.text?.[lang] || news19?.text?.en || 'News not found'}
               </div>
             </div>
           );
         })()}
         
         {/* Календарь */}
         <div style={{
           fontWeight: 900,
           fontSize: '2em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>{t('calendar_of_events')}</div>
         
         <div style={{
           margin: '0 auto 2vw auto',
           width: '100%',
         }}>
           <Calendar />
         </div>
         
         {/* Административный календарь - скрыт от отображения */}
         {/* 
         <div style={{
           fontWeight: 900,
           fontSize: '2em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>Административный календарь</div>
         
         <div style={{
           margin: '0 auto 2vw auto',
           width: '100%',
         }}>
           <AdminCalendar />
         </div>
         */}
         
         <ImportantInfo />
       </MainModulesContainer>
    </div>
  );
};

export default Home; 