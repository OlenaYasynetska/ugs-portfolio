import React from 'react';
import PostCard from './PostCard';

export default function AustriaFactsPost({ 
  title,
  facts,
  image,
  isSmallScreen,
  imageVisible,
  numberAnimations
}) {
  return (
    <PostCard isSmallScreen={isSmallScreen}>
      {image && (
        <img 
          src={image} 
          alt="Austria Facts" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: 12, 
            marginBottom: '2vw', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transform: imageVisible ? 'scale(1)' : 'scale(0.3)',
            opacity: imageVisible ? 1 : 0,
            transition: 'all 0.8s ease-out',
            transformOrigin: 'center center'
          }} 
        />
      )}
      <div style={{ 
        fontSize: 18, 
        color: '#234', 
        whiteSpace: 'pre-line', 
        textAlign: 'left', 
        width: '100%' 
      }}>
        <div style={{ 
          fontSize: 20, 
          fontWeight: 700, 
          color: '#1565c0', 
          marginBottom: 16, 
          textAlign: 'center' 
        }}>
          {title}
        </div>
        <div style={{ marginBottom: 16 }}>
          {numberAnimations.map((anim, index) => (
            <React.Fragment key={anim.id}>
              <span style={{
                fontSize: 24,
                fontWeight: 900,
                color: '#1565c0',
                marginRight: 8,
                animation: anim.animation,
                display: 'inline-block'
              }}>
                {anim.id}.
              </span>
              {facts[index]}
              <br /><br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </PostCard>
  );
}
