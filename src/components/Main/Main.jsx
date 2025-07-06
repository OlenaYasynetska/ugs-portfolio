import React from 'react';
import styles from './Main.module.css';
import background from '../../assets/background.png';

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
    {children}
  </main>
);

export default Main; 