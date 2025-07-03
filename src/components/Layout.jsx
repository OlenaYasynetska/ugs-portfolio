import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1>Мой сайт</h1>
    </header>
    <nav className={styles.nav}>
      <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/about">О нас</a></li>
        <li><a href="/contact">Контакты</a></li>
      </ul>
    </nav>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      © 2024 Мой сайт
    </footer>
  </div>
);

export default Layout; 