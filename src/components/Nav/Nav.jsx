import React, { useState } from 'react';
import styles from './Nav.module.css';
import logo from '../../assets/logo.svg';
import globus from '../../assets/globus.svg';

const Nav = () => {
  const [lang, setLang] = useState('ru');

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <img src={globus} alt="Globus" className={styles.globusIcon} />
        <select
          className={styles.langSelect}
          value={lang}
          onChange={e => setLang(e.target.value)}
        >
          <option value="de">DE</option>
          <option value="ua">UA</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
};

export default Nav;