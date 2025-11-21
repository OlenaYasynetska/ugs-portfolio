import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

type LocaleKey = 'ua' | 'de' | 'en';

interface AboutMessage {
  title: string;
  text: string;
}

const aboutMessages: Record<LocaleKey, AboutMessage> = {
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

const About: FC = () => {
  const { i18n } = useTranslation();
  const normalizedLanguage = (i18n.language?.split('-')[0] ?? 'en') as LocaleKey;
  const message = aboutMessages[normalizedLanguage] ?? aboutMessages.en;
  const paragraphs = message.text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <div 
      className="flex min-h-[calc(100vh-120px)] w-full items-center justify-center px-4 py-12"
      style={{
        backgroundImage: 'url(/src/assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <img 
        src="/src/assets/page_not_found.png" 
        alt="Decorative background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          maxHeight: '100vh',
          display: 'block',
          margin: '0 auto',
          padding: '0 8px',
          marginTop: '-60px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '600px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 
          style={{
            fontSize: '1.0em',
            fontWeight: 'bold',
            color: '#0057b8',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          {message.title}
        </h1>
        <div style={{ lineHeight: '1.8', color: '#333', fontSize: '0.75em' }}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '15px' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;