import React from 'react';
import background from '../../assets/background.png';
import Hero from '../../modules/Hero';
import NewsBlock from '../../modules/NewsBlock';
import ImportantInfo from '../../modules/ImportantInfo';

const Home = () => {
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
      <Hero />
      <h1 style={{ color: '#1565c0', fontSize: '4em' }}>{/* t('welcome') */}У центрі подій.</h1>
      <NewsBlock />
      <ImportantInfo />
    </div>
  );
};

export default Home; 