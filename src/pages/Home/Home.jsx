import React from 'react';
import { useTranslation } from 'react-i18next';
import background from '../../assets/background.png';
import { news } from '../../data/db';
import logo from '../../assets/logo.svg';
import photo1 from '../../assets/IMG_2131.jpg';
import photo2 from '../../assets/IMG_2411.jpg';

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
  transition: 'opacity 0.5s',
};
const logoStyle = {
  height: 300,
  width: 'auto',
  marginRight: 0,
  marginLeft: 0,
  display: 'block',
};

const photos = [photo1, photo2];

function linkifyStadtbetriebe(text) {
  const url = 'www.stadtbetriebe.at';
  const fullUrl = 'https://www.stadtbetriebe.at';
  const parts = text.split(url);
  if (parts.length === 1) return text;
  return [
    parts[0],
    <a
      key="stadtbetriebe-link"
      href={fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#1565c0', textDecoration: 'underline', fontWeight: 500 }}
    >
      {url}
    </a>,
    parts[1]
  ];
}

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const [photoIdx, setPhotoIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);
  const [shownNews, setShownNews] = React.useState({}); // {id: text}
  const newsRefs = React.useRef({});
  const newsContainerRef = React.useRef(null);

  React.useEffect(() => {
    setShownNews({});
  }, [lang]);

  React.useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = '';
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhotoIdx(idx => (idx + 1) % photos.length);
        setFade(true);
      }, 100);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleShowNews = (id, fullText) => {
    if (shownNews[id]) return;
    let i = 0;
    let scrolled = false;
    const reveal = () => {
      setShownNews(prev => {
        const updated = { ...prev, [id]: fullText.slice(0, i) };
        // Прокручиваем контейнер новостей вниз, чтобы всегда была видна последняя строка
        if (newsContainerRef.current) {
          newsContainerRef.current.scrollTop = newsContainerRef.current.scrollHeight;
        }
        return updated;
      });
      if (i < fullText.length) {
        i++;
        setTimeout(reveal, 50);
      }
    };
    reveal();
  };

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
            src={photos[photoIdx]}
            alt="Старинное фото"
            style={{ ...oldImgStyle, opacity: fade ? 1 : 0 }}
          />
        </span>
      </div>
      <h1>{t('welcome')}</h1>
      <div
        ref={newsContainerRef}
        style={{
          maxWidth: 1200,
          margin: '32px auto 0',
          textAlign: 'left',
          maxHeight: '70vh',
          overflowY: 'auto',
          paddingRight: 8,
          marginBottom: 100
        }}
      >
        {news.map(item => {
          const fullText = item.text[lang] || item.text.en;
          return (
            <div
              key={item.id}
              ref={el => (newsRefs.current[item.id] = el)}
              style={{ marginBottom: 24, background: 'rgba(255,255,255,0.85)', borderRadius: 8, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <h2
                style={{ margin: '0 0 8px', cursor: 'pointer' }}
                onClick={() => handleShowNews(item.id, fullText)}
              >
                {item.title[lang] || item.title.en}
              </h2>
              <p style={{ margin: 0, minHeight: 24 }}>
                {shownNews[item.id] ? linkifyStadtbetriebe(shownNews[item.id]) : ''}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home; 