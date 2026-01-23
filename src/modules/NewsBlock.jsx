import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { news } from '../data/db';
import kindsOchakovImg from '../assets/Kinds_Ochakov.png';
import sonnikImg from '../assets/Home/Sonnik.png';

const Article = ({ title, date, children, newsId, pdfLink, pdfUrl }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const intervalRef = useRef(null);
  const textContainerRef = useRef(null);
  const text = typeof children === 'string' ? children : (children?.props?.children || '');
  
  // Обработка HTML для замены внутренних ссылок
  const processHtmlLinks = (html) => {
    if (!html) return html;
    // Заменяем внутренние ссылки на элементы с data-атрибутами для обработки
    return html.replace(/<a\s+href="(\/[^"]+)"([^>]*)>/gi, (match, href, attrs) => {
      // Убираем target и другие атрибуты, которые могут мешать
      const cleanAttrs = attrs.replace(/target="[^"]*"/gi, '').replace(/rel="[^"]*"/gi, '');
      return `<a href="${href}" data-internal-link="true"${cleanAttrs}>`;
    });
  };

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
      }, 30);
    } else {
      setProgress(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => intervalRef.current && clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [open, text]);

  // Обработчик кликов по ссылкам внутри HTML контента
  useEffect(() => {
    if (open && textContainerRef.current) {
      const handleLinkClick = (e) => {
        // Проверяем, что клик произошел внутри нашего контейнера
        if (!textContainerRef.current?.contains(e.target)) {
          return;
        }
        
        const link = e.target.closest('a');
        if (link) {
          // Проверяем data-атрибут или href
          const isInternal = link.getAttribute('data-internal-link') === 'true';
          const href = link.getAttribute('href');
          
          if (href && (isInternal || href.startsWith('/'))) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            // Небольшая задержка для надежности на мобильных устройствах
            setTimeout(() => {
              navigate(href);
              // Если есть якорь, прокручиваем к нему после навигации
              if (href.includes('#')) {
                const hash = href.split('#')[1];
                setTimeout(() => {
                  const element = document.getElementById(hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }
            }, 0);
            return false;
          }
          
          // Если это полный URL того же домена
          if (href && !href.startsWith('/')) {
            try {
              const url = new URL(link.href);
              if (url.origin === window.location.origin) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                setTimeout(() => {
                  navigate(url.pathname);
                }, 0);
                return false;
              }
            } catch (err) {
              // Игнорируем ошибки парсинга URL
            }
          }
        }
      };
      
      // Используем capture фазу для перехвата события до того, как оно достигнет ссылки
      // Обрабатываем и click, и touchend для мобильных устройств
      const container = textContainerRef.current;
      container.addEventListener('click', handleLinkClick, true);
      container.addEventListener('touchend', handleLinkClick, true);
      
      return () => {
        if (container) {
          container.removeEventListener('click', handleLinkClick, true);
          container.removeEventListener('touchend', handleLinkClick, true);
        }
      };
    }
  }, [open, navigate, progress]);

  const handlePdfClick = (e) => {
    e.preventDefault();
    setShowPdfModal(true);
  };

  return (
    <>
      <div style={{ marginBottom: 24, padding: 24, border: '1px solid #e0e0e0', borderRadius: 12, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.5)', transition: 'all 0.3s' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', borderRadius: 8, padding: 8, userSelect: 'none', transition: 'background 0.2s' }}
          onClick={() => setOpen(!open)}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(!open)}
          tabIndex={0}
          role="button"
          aria-expanded={open}
        >
          <span style={{ fontSize: 22, marginRight: 12 }}>{open ? '▼' : '➤'}</span>
          <span className="news-title" style={{ fontWeight: 600, fontSize: 20 }}>{title}</span>
        </div>
        <div style={{
          maxHeight: open ? 800 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}>
          {open && (
            <div style={{ marginTop: 12, color: '#222', borderTop: '1px solid #e0e0e0', paddingTop: 12, fontSize: 16, whiteSpace: 'pre-line' }}>
              {date && <div style={{ color: '#1976d2', fontFamily: 'monospace', marginBottom: 8 }}>{date}</div>}
              {/* Display image for news ID 21 (children from Ochakiv) */}
              {newsId === 21 && (
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <img 
                    src={kindsOchakovImg} 
                    alt="Children from Ochakiv going to the Alps" 
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: 12,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      maxHeight: '300px'
                    }} 
                  />
                </div>
              )}
              {/* Display image for news ID 64 (Northern lights over Vienna) */}
              {newsId === 64 && (
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <img 
                    src={sonnikImg} 
                    alt="Nordlicht über Wien" 
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: 12,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      maxHeight: '300px'
                    }} 
                  />
                </div>
              )}
              <div 
                ref={textContainerRef}
                dangerouslySetInnerHTML={{ __html: processHtmlLinks(text.slice(0, progress)) }} 
              />
              
              {/* Display PDF link if available */}
              {pdfLink && pdfUrl && (
                <div style={{ 
                  marginTop: 16, 
                  padding: 16, 
                  background: '#f5f5f5', 
                  borderRadius: 8, 
                  border: '2px solid #1976d2',
                  textAlign: 'center'
                }}>
                  <button 
                    onClick={handlePdfClick}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '12px 24px',
                      background: '#1976d2',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: 8,
                      fontWeight: 600,
                      fontSize: 16,
                      transition: 'background 0.2s',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#1565c0'}
                    onMouseLeave={(e) => e.target.style.background = '#1976d2'}
                  >
                    📄 {pdfLink}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 12,
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              borderBottom: '1px solid #e0e0e0',
              background: '#f8f9fa'
            }}>
              <h3 style={{ margin: 0, color: '#1976d2', fontSize: '18px' }}>
                📄 {pdfLink}
              </h3>
              <button
                onClick={() => setShowPdfModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#666',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#e0e0e0'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div style={{
              padding: '24px',
              maxHeight: 'calc(90vh - 120px)',
              overflow: 'auto'
            }}>
              {/* File Preview */}
              <div style={{
                border: '2px dashed #ccc',
                borderRadius: 8,
                padding: '20px',
                textAlign: 'center',
                background: '#f9f9f9',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '18px', color: '#666', marginBottom: '16px' }}>
                  Файл інструкції: {pdfLink}
                </div>
                
                        {/* HTML File Viewer */}
                <iframe
                  src={pdfUrl}
                  style={{
                    width: '100%',
                    height: '500px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                  title="HTML Preview"
                />
                
                          <div style={{ fontSize: '14px', color: '#999', marginTop: '16px' }}>
            Формат: HTML • Розмір: ~8 KB
          </div>
              </div>

              {/* Download and View Options */}
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={() => {
                    // Try to download the file
                    const link = document.createElement('a');
                    link.href = pdfUrl;
                    link.download = pdfLink.split(': ')[1] + '.html';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 24px',
                    background: '#4caf50',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 16,
                    transition: 'background 0.2s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#45a049'}
                  onMouseLeave={(e) => e.target.style.background = '#4caf50'}
                >
                  💾 Завантажити інструкцію
                </button>
                
                <button
                  onClick={() => {
                    // Try to open in new tab
                    window.open(pdfUrl, '_blank');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 24px',
                    background: '#1976d2',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 16,
                    transition: 'background 0.2s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#1565c0'}
                  onMouseLeave={(e) => e.target.style.background = '#1976d2'}
                >
                  👁️ Відкрити в новій вкладці
                </button>
              </div>

              {/* File Info */}
              <div style={{
                marginTop: '20px',
                padding: '16px',
                background: '#f5f5f5',
                borderRadius: 8,
                fontSize: '14px',
                color: '#666'
              }}>
                <div style={{ marginBottom: '8px' }}>
                  <strong>📋 Опис файлу:</strong>
                </div>
                <div>Інструкція для онлайн-заявки на підтвердження пенсійного статусу українських громадян у Верхній Австрії. Містить детальну інформацію про процедуру подачі заявки та необхідні документи.</div>
              </div>

              {/* Information about PDF file */}
              <div style={{
                marginTop: '16px',
                padding: '12px',
                background: '#d1ecf1',
                border: '1px solid #bee5eb',
                borderRadius: 8,
                fontSize: '14px',
                color: '#0c5460'
              }}>
                <div style={{ marginBottom: '4px' }}>
                  <strong>ℹ️ Інформація:</strong>
                </div>
                <div>Це HTML файл з детальними інструкціями. Ви можете завантажити його та відкрити в будь-якому веб-браузері, або переглянути онлайн прямо тут. Файл містить всю необхідну інформацію про процедуру подачі заявки на підтвердження пенсійного статусу.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  children: PropTypes.node,
  newsId: PropTypes.number,
  pdfLink: PropTypes.string,
  pdfUrl: PropTypes.string,
};

export default function NewsBlock() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || 'en';
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(5);
  };

  return (
    <div style={{ 
      padding: '12px', // Толстый внутренний слой светло-коричневого цвета
      background: 'rgb(226, 197, 144)', // Светло-коричневая рамка
      border: '3px solid rgb(100, 75, 35)', // Тонкая темно-коричневая внешняя граница
      borderRadius: '20px', // Закругленные углы
      boxShadow: '0 4px 16px rgba(0,0,0,0.3)', // Тень для эффекта поднятия
      maxWidth: 1200,
      width: '90vw',
      minWidth: 320,
      margin: '32px auto 0',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: 1200, width: '100%', minWidth: 320, textAlign: 'left', background: 'rgba(255,255,255,0.85)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2vw', boxSizing: 'border-box' }}>
        <style>{`
          @media (max-width: 600px) {
            .news-article {
              font-size: 8px !important;
            }
            .news-title {
              font-size: 16px !important;
              font-weight: bold !important;
            }
          }
        `}</style>
      {/* <p style={{ marginBottom: 24, color: '#666', fontSize: 15 }}>
        ℹ️ Натисніть на заголовок, щоб прочитати новину
      </p> */}
      {news.slice(0, visibleCount).map(item => (
        <Article
          key={item.id}
          title={item.title[lang] || item.title.en}
          date={item.title[lang]?.match(/\d{2}\.\d{2}\.\d{4}/)?.[0] || ''}
          className="news-article"
          newsId={item.id}
          pdfLink={item.pdfLink ? item.pdfLink[lang] || item.pdfLink.en : null}
          pdfUrl={item.pdfUrl}
        >
          {item.text[lang] || item.text.en}
        </Article>
      ))}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        {visibleCount < news.length && (
          <button onClick={handleShowMore} style={{
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '8px 24px',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            margin: '0 8px',
            display: 'inline-block',
            transition: 'background 0.2s',
          }}>{t('more_ellipsis') || 'Далі'}</button>
        )}
                 {visibleCount > 5 && (
          <button onClick={handleShowLess} style={{
            background: '#e0e0e0',
            color: '#1976d2',
            border: 'none',
            borderRadius: 8,
            padding: '8px 24px',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            margin: '0 8px',
            display: 'inline-block',
            transition: 'background 0.2s',
          }}>{t('back') || 'Назад'}</button>
        )}
      </div>
      </div>
    </div>
  );
} 