import React from 'react';
import styles from './Main.module.css';
import background from '../../assets/background.png';
import hero from '../../assets/hero_logo.svg';
import philosoph from '../../assets/philosoph.png';

const Main = ({ children }) => (
  <main
    className={styles.main}
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      minHeight: 'calc(100vh - 120px)'
    }}
  >
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 324,
      marginTop: 24,
      marginBottom: 32
    }}>
      <img
        src={hero}
        alt="Hero"
        style={{
          height: 500,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
      <img
        src={philosoph}
        alt="Philosoph"
        style={{
          height: 500,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
    {children}
  </main>
);

export default Main; 