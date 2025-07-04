import React from 'react';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Nav />
        <Main>
          <h2>Добро пожаловать!</h2>
          <p>Это стартовая страница вашего сайта. Здесь вы можете разместить любую информацию.</p>
        </Main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
