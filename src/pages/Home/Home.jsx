import React from 'react';
import background from '../../assets/background.png';
import Hero from '../../modules/Hero';
import NewsBlock from '../../modules/NewsBlock';
import ImportantInfo from '../../modules/ImportantInfo';
import MainModulesContainer from '../../modules/MainModulesContainer';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [h1FontSize, setH1FontSize] = React.useState(window.innerWidth <= 900 ? '2.8em' : '4em');
  React.useEffect(() => {
    const handleResize = () => setH1FontSize(window.innerWidth <= 900 ? '2.8em' : '4em');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)',
      maxWidth: '100vw',
      textAlign: 'center',
      height: 'auto',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <style>{`
        @media (max-width: 1400px) {
          .main-title-hero {
            padding-left: 50px !important;
            padding-right: 50px !important;
          }
        }
      `}</style>
      <Hero />
      <h1 className="main-title-hero" style={{ color: '#1565c0', fontSize: h1FontSize, marginTop: 0, marginBottom: '1.5vw' }}>{t('welcome')}</h1>
      <MainModulesContainer>
        {/* <Hero /> */}
        <NewsBlock />
        <ImportantInfo />
      </MainModulesContainer>
    </div>
  );
};

export default Home; 