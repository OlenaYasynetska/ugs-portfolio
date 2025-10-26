import React from 'react';
import { HOME_STYLES } from '../../constants/homeStyles';
import PostCard from './PostCard';

export default function SimplePost({ 
  title,
  text,
  lang,
  newsId,
  isSmallScreen
}) {
  return (
    <PostCard isSmallScreen={isSmallScreen}>
      <div style={HOME_STYLES.textStyle}>
        <h2 style={HOME_STYLES.titleStyle}>
          {title}
        </h2>
        <div style={{ whiteSpace: 'pre-line' }}>
          {text}
        </div>
      </div>
    </PostCard>
  );
}
