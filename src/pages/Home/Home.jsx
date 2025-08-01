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
import zakonImg from '../../assets/zakon.jpg';
import riverImg1 from '../../assets/1754053971684.jpg';
import riverImg2 from '../../assets/1754053971689.jpg';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [h1FontSize, setH1FontSize] = React.useState(window.innerWidth <= 900 ? '2.8em' : '4em');
    const [isImageVisible, setIsImageVisible] = React.useState(false);
  const [isImage2Visible, setIsImage2Visible] = React.useState(false);
  const [isImage3Visible, setIsImage3Visible] = React.useState(false);
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
            } else if (entry.target.id === 'weekly-events-image-2') {
              setIsImage2Visible(true);
            } else if (entry.target.id === 'weekly-events-image-3') {
              setIsImage3Visible(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const imageElement = document.getElementById('weekly-events-image');
    const imageElement2 = document.getElementById('weekly-events-image-2');
    const imageElement3 = document.getElementById('weekly-events-image-3');
    
    if (imageElement) {
      observer.observe(imageElement);
    }
    if (imageElement2) {
      observer.observe(imageElement2);
    }
    if (imageElement3) {
      observer.observe(imageElement3);
    }
    
    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
      if (imageElement2) {
        observer.unobserve(imageElement2);
      }
      if (imageElement3) {
        observer.unobserve(imageElement3);
      }
    };
  }, []);
  
  // Получаем текст для блока "Этот день в истории"
  const lang = i18n.language || 'en';
  const news5 = news.find(n => n.id === 5);
  const dayText = news5?.text?.[lang] || news5?.text?.en || '';
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
         
         {/* Події тижня */}
         <div style={{
           fontWeight: 900,
           fontSize: '2em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>{t('weekly_events')}</div>
         
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
             transform: isImageVisible 
               ? 'translateX(0) scale(1)' 
               : isMobile 
                 ? 'translateX(0) scale(0)' 
                 : 'translateX(-100%) scale(1)',
             opacity: isImageVisible ? 1 : 0,
             transition: isMobile 
               ? 'transform 0.8s ease-out, opacity 0.8s ease-out' 
               : 'transform 0.8s ease-out, opacity 0.8s ease-out',
             transformOrigin: isMobile ? 'center' : 'left center',
           }}
         >
           <img 
             src={zakonImg} 
             alt="Weekly Events" 
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
             padding: '0 8px'
           }}>
             {i18n.language === 'ua' && (
               '31.08.2025 Верховна Рада прийняла закон, що відновлює повноваження НАБУ. Це важливий крок до посилення антикорупційної інфраструктури та виконання зобов\'язань перед міжнародними партнерами. Незалежність та ефективність НАБУ — ключ до справедливості та довіри суспільства.'
             )}
             {i18n.language === 'de' && (
               '31.08.2025 Die Werchowna Rada hat ein Gesetz verabschiedet, das die Befugnisse der NABU wiederherstellt. Dies ist ein wichtiger Schritt zur Stärkung der Anti-Korruptions-Infrastruktur und zur Erfüllung der Verpflichtungen gegenüber internationalen Partnern. Die Unabhängigkeit und Effizienz der NABU sind der Schlüssel zu Gerechtigkeit und Vertrauen der Gesellschaft.'
             )}
             {i18n.language === 'en' && (
               '31.08.2025 The Verkhovna Rada passed a law restoring NABU powers. This is an important step towards strengthening the anti-corruption infrastructure and fulfilling obligations to international partners. The independence and efficiency of NABU are the key to justice and public trust.'
             )}
           </div>
         </div>
         
         {/* Второе изображение с датой 29.07.2025 */}
         <div 
           id="weekly-events-image-2"
           style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 800,
             width: '90%',
             margin: '2vw auto 2vw auto',
             textAlign: 'center',
             transform: isImage2Visible 
               ? 'translateX(0) scale(1)' 
               : isMobile 
                 ? 'translateX(0) scale(0)' 
                 : 'translateX(100%) scale(1)',
             opacity: isImage2Visible ? 1 : 0,
             transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
             transformOrigin: isMobile ? 'center' : 'right center',
           }}
         >
           <img 
             src={riverImg1} 
             alt="River Street View 1" 
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
             padding: '0 8px'
           }}>
             {i18n.language === 'ua' && (
               '29.07.2025 Вода в річці Enns піднялася після рясних дощів'
             )}
             {i18n.language === 'de' && (
               '29.07.2025 Das Wasser im Fluss Enns ist nach starken Regenfällen gestiegen'
             )}
             {i18n.language === 'en' && (
               '29.07.2025 Water in the Enns river rose after heavy rains'
             )}
           </div>
         </div>
         
         {/* Третье изображение */}
         <div 
           id="weekly-events-image-3"
           style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 800,
             width: '90%',
             margin: '2vw auto 2vw auto',
             textAlign: 'center',
             transform: isImage3Visible 
               ? 'translateX(0) scale(1)' 
               : isMobile 
                 ? 'translateX(0) scale(0)' 
                 : 'translateX(100%) scale(1)',
             opacity: isImage3Visible ? 1 : 0,
             transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
             transformOrigin: isMobile ? 'center' : 'right center',
           }}
         >
           <img 
             src={riverImg2} 
             alt="River Street View 2" 
             style={{ 
               maxWidth: '100%', 
               height: 'auto', 
               borderRadius: 12,
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
             }} 
           />
         </div>
         
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