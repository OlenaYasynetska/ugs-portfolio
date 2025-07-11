import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const footerPhrases = {
  ua: 'Цей вебсайт є некомерційним проєктом і створений виключно з інформаційною метою.',
  de: 'Diese Website ist ein gemeinnütziges Projekt und dient ausschließlich zu Informationszwecken.',
  en: 'This website is a non-commercial project and serves informational purposes only.'
};

const Footer = ({ style }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const phrase = footerPhrases[lang] || footerPhrases.en;
  return (
    <footer className={styles.footer} style={{
      position: 'fixed',
      left: 0,
      right: 50,
      bottom: 0,
      width: '100%',
      zIndex: 1000,
      ...style
    }}>
      <style>{`
        @media (max-width: 900px) {
          .footer-inner {
            padding-left: 90px !important;
            padding-right: 90px !important;
          }
        }
      `}</style>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '100%',
        maxWidth: 1800,
        margin: '0 auto',
        padding: '0 180px',
        fontSize: 14
      }} className="footer-inner">
        <span style={{
          textAlign: 'left',
          opacity: 0.85,
          width: 300,
          overflow: 'hidden',
          display: 'inline-block',
        }}>
          {phrase}
          <div style={{ fontSize: 13, marginTop: 4, opacity: 0.7 }}>© 2025 Steyr</div>
        </span>
        {/* <span style={{ textAlign: 'right' }}>© 2025 Steyr</span> */}
      </div>
    </footer>
  );
};

export default Footer; 