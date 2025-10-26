import React from 'react';
import { HOME_STYLES } from '../../constants/homeStyles';

export default function PostCard({ 
  children, 
  customStyles = {},
  isSmallScreen = false 
}) {
  const mergedStyles = {
    ...HOME_STYLES.postCard,
    ...customStyles,
    maxWidth: isSmallScreen ? 400 : 1200,
    width: isSmallScreen ? '95%' : '85%',
  };
  
  return (
    <div style={mergedStyles}>
      {children}
    </div>
  );
}
