import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../../assets/logo.svg';
import globus from '../../assets/globus.svg';

const Nav = ({ style }) => {
  const [lang, setLang] = useState('ru');

  return (
    <header className={styles.header} style={style}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contacts</a></li>
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