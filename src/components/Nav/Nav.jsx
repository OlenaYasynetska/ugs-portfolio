import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Nav.module.css';
import logo from '../../assets/logo.svg';
import globus from '../../assets/globus.svg';

const Nav = ({ style }) => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  const handleLangChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className={styles.header} style={style}>
      <div className={styles.headerLeft}>
        <NavLink to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeNavLink : undefined} end>{t('home')}</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeNavLink : undefined}>{t('about')}</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeNavLink : undefined}>{t('contacts')}</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <img src={globus} alt="Globus" className={styles.globusIcon} />
        <select
          className={styles.langSelect}
          value={lang}
          onChange={handleLangChange}
        >
          <option value="de">DE</option>
          <option value="en">EN</option>
          <option value="ua">UA</option>
        </select>
      </div>
    </header>
  );
};

export default Nav;