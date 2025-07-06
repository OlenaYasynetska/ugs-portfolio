import React from 'react';
import { useTranslation } from 'react-i18next';
import background from '../../assets/background.png';
import { news } from '../../data/db';
import logo from '../../assets/logo.svg';
import photo from '../../assets/IMG_2131.jpg';
import philosoph from '../../assets/philosoph.png';

const oldFrameStyle = {
  display: 'inline-block',
  padding: 18,
  background: '#e2c590',
  border: '8px solid #a67c38',
  borderRadius: 24,
  boxShadow: '0 8px 32px rgba(80,60,20,0.25), 0 0 0 12px #e2c590 inset',
  position: 'relative',
  marginLeft: 112,
};
const oldImgStyle = {
  display: 'block',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(80,60,20,0.18)',
  width: 720,
  height: 'auto',
  filter: 'sepia(0.18) contrast(1.08) brightness(0.98)',
};
const logoStyle = {
  height: 300,
  width: 'auto',
  
  marginRight: 0,
  marginLeft: 0,
  display: 'block',
};

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
        alignItems: 'center',
        gap: 4,
        marginTop: 24,
        marginBottom: 32
      }}>
        <img
          src={logo}
          alt="Logo"
          style={logoStyle}
        />
        <span style={oldFrameStyle}>
          <img
            src={photo}
            alt="Старинное фото"
            style={oldImgStyle}
          />
        </span>
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