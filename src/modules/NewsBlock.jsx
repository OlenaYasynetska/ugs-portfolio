import React from 'react';
import { useTranslation } from 'react-i18next';
import { news } from '../data/db';

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

function highlightDateInTitle(title) {
  const match = title.match(/^(\d{2}\.\d{2}\.\d{4}|\d{2}\.\d{2}\.\d{2})/);
  if (match) {
    return (
      <>
        <span style={{ color: '#1565c0', fontWeight: 600 }}>{match[0]}</span>
        {title.slice(match[0].length)}
      </>
    );
  }
  return title;
}

const NewsBlock = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const [shownNews, setShownNews] = React.useState({});
  const newsRefs = React.useRef({});
  const newsContainerRef = React.useRef(null);

  React.useEffect(() => {
    setShownNews({});
  }, [lang]);

  // Анимация печати для одной новости
  const startReveal = (id, text) => {
    let i = 0;
    const reveal = () => {
      setShownNews(prev => {
        const prevObj = prev[id] || {};
        return { ...prev, [id]: { revealed: true, progress: i } };
      });
      if (i < text.length) {
        i++;
        setTimeout(reveal, 50);
      }
      if (newsContainerRef.current) {
        newsContainerRef.current.scrollTop = newsContainerRef.current.scrollHeight;
      }
    };
    reveal();
  };

  // Клик по новости
  const handleShowNews = (id, text) => {
    if (shownNews[id]?.revealed) {
      setShownNews(prev => ({ ...prev, [id]: undefined }));
      return;
    }
    startReveal(id, text);
  };

  // При смене языка перезапускать анимацию для всех раскрытых новостей
  React.useEffect(() => {
    Object.keys(shownNews).forEach(id => {
      if (shownNews[id]?.revealed) {
        const text = news.find(n => n.id === Number(id))?.text[lang] || news.find(n => n.id === Number(id))?.text.en || '';
        startReveal(id, text);
      }
    });
    // eslint-disable-next-line
  }, [lang]);

  return (
    <div
      ref={newsContainerRef}
      style={{
        maxWidth: 1200,
        margin: '32px auto 0',
        textAlign: 'left',
        maxHeight: '70vh',
        overflowY: 'auto',
        paddingRight: 8,
        marginBottom: 100,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        padding: '2vw',
      }}
    >
      {news.map(item => {
        const fullText = item.text[lang] || item.text.en;
        const progress = shownNews[item.id]?.progress ?? 0;
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
              {highlightDateInTitle(item.title[lang] || item.title.en)}
            </h2>
            <p style={{ margin: 0, minHeight: 24 }}>
              {shownNews[item.id]?.revealed ? linkifyStadtbetriebe(fullText.slice(0, progress)) : ''}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsBlock; 