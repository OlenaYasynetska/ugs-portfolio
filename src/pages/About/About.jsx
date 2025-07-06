import React from 'react';
import { useTranslation } from 'react-i18next';
import notFoundBg from '../../assets/page_not_found.png';

const About = () => {
  const { t } = useTranslation();

  // Убираем скролл для About
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
    }}>
      <img
        src={notFoundBg}
        alt="About background"
        style={{
          maxHeight: '90vh', // чтобы не перекрывать футер
          width: '100%',
          margin: '0 auto',
          display: 'block',
        }}
      />
      {/* <h1>{t('aboutText')}</h1> */}
    </div>
    
  );
};

export default About; 