import React from 'react';
import { useTranslation } from 'react-i18next';
import background from '../../assets/background.png';
import { news } from '../../data/db';
import hero from '../../assets/hero_logo.svg';
import philosoph from '../../assets/philosoph.png';

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

  React.useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)', // Оставляем место для футера
      maxWidth: '100vw',
      textAlign: 'center',
      height: 'auto',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 224,
        marginTop: 24,
        marginBottom: 32
      }}>
        <img
          src={hero}
          alt="Hero"
          style={{
            height: 450,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
        <img
          src={philosoph}
          alt="Philosoph"
          style={{
            height: 450,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
      <h1>{t('welcome')}</h1>
      <div style={{ maxWidth: 700, margin: '32px auto 0', textAlign: 'left' }}>
        {news.map(item => (
          <div key={item.id} style={{ marginBottom: 24, background: 'rgba(255,255,255,0.85)', borderRadius: 8, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h2 style={{ margin: '0 0 8px' }}>{item.title[lang] || item.title.en}</h2>
            <p style={{ margin: 0 }}>{item.text[lang] || item.text.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 