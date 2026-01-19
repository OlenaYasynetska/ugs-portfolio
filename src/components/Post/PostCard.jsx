import React from 'react';
import { HOME_STYLES } from '../../constants/homeStyles';

export default function PostCard({ 
  children, 
  customStyles = {},
  isSmallScreen = false 
}) {
  const innerStyles = {
    ...HOME_STYLES.postCard,
    ...customStyles,
    maxWidth: isSmallScreen ? 400 : 1200,
    width: isSmallScreen ? '95%' : '85%',
    border: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  // Внешняя декоративная рамка (акантовка)
  const frameStyles = {
    padding: '12px', // Толстый внутренний слой светло-коричневого цвета
    background: 'rgb(226, 197, 144)', // Светло-коричневая рамка
    border: '3px solid rgb(100, 75, 35)', // Тонкая темно-коричневая внешняя граница
    borderRadius: '20px', // Закругленные углы
    boxShadow: '0 4px 16px rgba(0,0,0,0.3)', // Тень для эффекта поднятия
    maxWidth: isSmallScreen ? 400 : 1200,
    width: isSmallScreen ? '95%' : '85%',
    margin: '0 auto 1vw auto',
    boxSizing: 'border-box',
  };
  
  return (
    <div style={frameStyles}>
      <div style={innerStyles}>
        {children}
      </div>
    </div>
  );
}
