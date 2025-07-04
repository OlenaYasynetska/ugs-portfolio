import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ style }) => (
  <footer className={styles.footer} style={style}>
    © 2025 Мой сайт
  </footer>
);

export default Footer; 