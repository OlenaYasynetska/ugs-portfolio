import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Nav.module.css';
import logo from '../../assets/logo.svg';
import globus from '../../assets/globus.svg';

const Nav = ({ style }) => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLangChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  // Закрывать меню при переходе по ссылке
  const handleNavClick = () => setMobileMenuOpen(false);

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
            <NavLink to="/culture" className={({ isActive }) => isActive ? styles.activeNavLink : undefined}>{t('culture')}</NavLink>
          </li>
          <li>
            <NavLink to="/infocenter" className={({ isActive }) => isActive ? styles.activeNavLink : undefined}>{t('info_center_title')}</NavLink>
          </li>
          {/* <li>
            <NavLink to="/help" className={({ isActive }) => isActive ? styles.activeNavLink : undefined}>{t('help')}</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? styles.activeNavLink : undefined}>{t('blog')}</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeNavLink : undefined}>{t('contacts')}</NavLink>
          </li>
        </ul>
        {/* Бургер-меню для мобильных */}
        <button className={styles.burger} onClick={() => setMobileMenuOpen(v => !v)} aria-label="Открыть меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <NavLink to="/" onClick={handleNavClick} className={({ isActive }) => isActive ? styles.mobileMenuLinkActive + ' ' + styles.mobileMenuLink : styles.mobileMenuLink} end>{t('home')}</NavLink>
            <NavLink to="/about" onClick={handleNavClick} className={({ isActive }) => isActive ? styles.mobileMenuLinkActive + ' ' + styles.mobileMenuLink : styles.mobileMenuLink}>{t('about')}</NavLink>
            <NavLink to="/culture" onClick={handleNavClick} className={({ isActive }) => isActive ? styles.mobileMenuLinkActive + ' ' + styles.mobileMenuLink : styles.mobileMenuLink}>{t('culture')}</NavLink>
            <NavLink to="/infocenter" onClick={handleNavClick} className={({ isActive }) => isActive ? styles.mobileMenuLinkActive + ' ' + styles.mobileMenuLink : styles.mobileMenuLink}>{t('info_center_title')}</NavLink>
            {/* <NavLink to="/help" onClick={handleNavClick} className={({ isActive }) => isActive ? styles.mobileMenuLinkActive + ' ' + styles.mobileMenuLink : styles.mobileMenuLink}>{t('help')}</NavLink>
            <NavLink to="/blog" onClick={handleNavClick} className={({ isActive }) => isActive ? styles.mobileMenuLinkActive + ' ' + styles.mobileMenuLink : styles.mobileMenuLink}>{t('blog')}</NavLink> */}
            <NavLink to="/contact" onClick={handleNavClick} className={({ isActive }) => isActive ? styles.mobileMenuLinkActive + ' ' + styles.mobileMenuLink : styles.mobileMenuLink}>{t('contacts')}</NavLink>
          </div>
        )}
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

Nav.propTypes = {
  style: PropTypes.object,
};

export default Nav;