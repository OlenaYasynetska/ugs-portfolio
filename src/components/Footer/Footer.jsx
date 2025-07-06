import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ style }) => (
  <footer className={styles.footer} style={{
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    zIndex: 1000,
    ...style
  }}>
    © 2025 Мой сайт
  </footer>
);

export default Footer; 