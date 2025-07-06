import React from 'react';
import { useTranslation } from 'react-i18next';

const aboutMessages = {
  ua: {
    title: 'Сторінка в розробці',
    text: `Дякуємо за ваш інтерес до української громади в місті Штайр!
Наразі ця сторінка ще перебуває в розробці. Ми працюємо над тим, щоб незабаром розповісти більше про нашу діяльність, ініціативи та спільноту.

💬 Просимо вибачення за тимчасові незручності.
Завітайте трохи пізніше — буде цікаво!

З повагою,
Українська громада Штайра`,
  },
  de: {
    title: 'Diese Seite befindet sich im Aufbau',
    text: `Vielen Dank für Ihr Interesse an der ukrainischen Gemeinde in Steyr!
Diese Seite befindet sich derzeit noch im Aufbau. Wir arbeiten daran, bald mehr über unsere Aktivitäten, Initiativen und unsere Gemeinschaft mit Ihnen zu teilen.

💬 Wir entschuldigen uns für die vorübergehenden Unannehmlichkeiten.
Bitte schauen Sie bald wieder vorbei – es lohnt sich!

Mit freundlichen Grüßen,
Ukrainische Gemeinde Steyr`,
  },
  en: {
    title: 'This Page is Under Construction',
    text: `Thank you for your interest in the Ukrainian community in Steyr!
This page is currently under construction. We're working on sharing more about our activities, initiatives, and community very soon.

💬 We apologize for the temporary inconvenience.
Please check back again later — it'll be worth the wait!

Warm regards,
Ukrainian Community of Steyr`,
  },
};

const getResponsiveStyle = () => {
  const isMobile = window.innerWidth < 600;
  return {
    maxWidth: isMobile ? '95vw' : 700,
    background: 'rgba(245, 222, 179, 0.92)',
    borderRadius: 16,
    padding: isMobile ? 16 : 40,
    boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
    fontSize: isMobile ? 16 : 20,
    lineHeight: 1.6,
    textAlign: 'left',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  };
};

const About = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const msg = aboutMessages[lang] || aboutMessages.en;
  const [responsiveStyle, setResponsiveStyle] = React.useState(getResponsiveStyle());

  React.useEffect(() => {
    const handleResize = () => setResponsiveStyle(getResponsiveStyle());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)',
      maxWidth: '100vw',
      textAlign: 'center',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={responsiveStyle}>
        <h1 style={{ fontSize: responsiveStyle.fontSize + 12, marginBottom: 24, textAlign: 'center' }}>{msg.title}</h1>
        {msg.text.split('\n').map((line, idx) => (
          <p key={idx} style={{ margin: idx === 0 ? 0 : '12px 0 0 0', fontSize: responsiveStyle.fontSize }}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default About; 