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
import declImg from '../../assets/IMG-Decloration_16-07-1990.jpg';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [h1FontSize, setH1FontSize] = React.useState(window.innerWidth <= 900 ? '2.8em' : '4em');
  React.useEffect(() => {
    const handleResize = () => setH1FontSize(window.innerWidth <= 900 ? '2.8em' : '4em');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Получаем текст для блока "Этот день в истории"
  const lang = i18n.language || 'en';
  const news5 = news.find(n => n.id === 5);
  const dayText = news5?.text?.[lang] || news5?.text?.en || '';
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);
  const [showFull, setShowFull] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
            <img src={declImg} alt="Declaration 16.07.1990" style={{ maxWidth: 220, width: '100%', height: 'auto', borderRadius: 12, margin: '0 auto 16px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%' }}>
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
            <img src={declImg} alt="Declaration 16.07.1990" style={{ maxWidth: 220, width: '100%', height: 'auto', borderRadius: 12, marginRight: 24, flex: '0 0 220px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', flex: 1 }}>
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