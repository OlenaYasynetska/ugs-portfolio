import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { news } from '../data/db';

const Article = ({ title, date, children }) => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const text = typeof children === 'string' ? children : (children?.props?.children || '');

  useEffect(() => {
    if (open) {
      setProgress(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            clearInterval(intervalRef.current);
            return prev;
          }
        });
      }, 60);
    } else {
      setProgress(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => intervalRef.current && clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [open, text]);

  return (
    <div style={{ marginBottom: 24, padding: 24, border: '1px solid #e0e0e0', borderRadius: 12, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.3s' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', borderRadius: 8, padding: 8, userSelect: 'none', transition: 'background 0.2s' }}
        onClick={() => setOpen(!open)}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(!open)}
        tabIndex={0}
        role="button"
        aria-expanded={open}
      >
        <span style={{ fontSize: 22, marginRight: 12 }}>{open ? '▼' : '➤'}</span>
        <span style={{ fontWeight: 600, fontSize: 20 }}>{title}</span>
      </div>
      <div style={{
        maxHeight: open ? 500 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.3s',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
      }}>
        {open && (
          <div style={{ marginTop: 12, color: '#222', borderTop: '1px solid #e0e0e0', paddingTop: 12, fontSize: 16, whiteSpace: 'pre-line' }}>
            {date && <div style={{ color: '#1976d2', fontFamily: 'monospace', marginBottom: 8 }}>{date}</div>}
            {text.slice(0, progress)}
          </div>
        )}
      </div>
    </div>
  );
};

export default function NewsBlock() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';

  return (
    <div style={{ maxWidth: 1200, width: '90vw', minWidth: 320, margin: '32px auto 0', textAlign: 'left', background: 'rgba(255,255,255,0.85)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2vw', boxSizing: 'border-box' }}>
      {/* <p style={{ marginBottom: 24, color: '#666', fontSize: 15 }}>
        ℹ️ Натисніть на заголовок, щоб прочитати новину
      </p> */}
      {news.map(item => (
        <Article
          key={item.id}
          title={item.title[lang] || item.title.en}
          date={item.title[lang]?.match(/\d{2}\.\d{2}\.\d{4}/)?.[0] || ''}
        >
          {item.text[lang] || item.text.en}
        </Article>
      ))}
    </div>
  );
} 