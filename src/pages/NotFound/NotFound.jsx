import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/background.png';
import styles from './NotFound.module.css';

export default function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate('/contact');
  };

  return (
    <div className={styles.container} style={{
      minHeight: '100vh',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        background: 'rgba(245, 222, 179, 0.92)',
        borderRadius: '20px',
        padding: '3rem',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        border: 'none',
        maxWidth: '600px',
        width: '100%',
        position: 'relative',
      }}>
        {/* 404 Number */}
        <div className={styles.errorNumber} style={{
          fontSize: '8rem',
          fontWeight: '900',
          color: '#1565c0',
          textShadow: '0 4px 8px rgba(21, 101, 192, 0.3)',
          marginBottom: '1rem',
          lineHeight: '1',
        }}>
          404
        </div>

        {/* Error Message */}
        <h1 className={styles.errorTitle} style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#333',
          marginBottom: '1rem',
          marginTop: '0',
        }}>
          {t('page_not_found_title') || 'Сторінка не знайдена'}
        </h1>

        <p className={styles.errorDescription} style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}>
          {t('page_not_found_description') || 'Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.'}
        </p>

        {/* Additional Help */}
        <div style={{
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: 'rgba(245, 222, 179, 0.92)',
          borderRadius: '16px',
          border: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          <p style={{
            margin: '0',
            fontSize: '0.9rem',
            color: '#333',
            fontWeight: '500',
            lineHeight: '1.6',
          }}>
            {t('page_not_found_help') || 'Якщо ви вважаєте, що це помилка, будь ласка, зв\'яжіться з нами.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className={styles.buttonContainer} style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={handleGoHome}
            className={styles.button}
            style={{
              padding: '12px 24px',
              backgroundColor: '#1565c0',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(21, 101, 192, 0.3)',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0d47a1';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(21, 101, 192, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#1565c0';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(21, 101, 192, 0.3)';
            }}
          >
            {t('go_home') || 'На головну'}
          </button>

          <button
            onClick={handleGoBack}
            className={styles.button}
            style={{
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: '#1565c0',
              border: '2px solid #1565c0',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#1565c0';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#1565c0';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {t('go_to_contacts') || 'Контакти'}
          </button>
        </div>

        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #1565c0, #42a5f5)',
          borderRadius: '50%',
          opacity: '0.1',
          zIndex: '-1',
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, #42a5f5, #90caf9)',
          borderRadius: '50%',
          opacity: '0.1',
          zIndex: '-1',
        }} />
      </div>
    </div>
  );
}
