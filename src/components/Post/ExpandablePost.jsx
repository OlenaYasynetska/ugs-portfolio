import React from 'react';
import { HOME_STYLES } from '../../constants/homeStyles';

export default function ExpandablePost({ 
  title,
  text,
  lang,
  showFull,
  toggleShowFull,
  customStyles = {}
}) {
  const handleMouseEnter = (e) => {
    e.target.style.background = HOME_STYLES.buttonHover.background;
  };
  
  const handleMouseLeave = (e) => {
    e.target.style.background = HOME_STYLES.buttonPrimary.background;
  };
  
  return (
    <div style={{ ...HOME_STYLES.textStyle, ...customStyles }}>
      <h2 style={HOME_STYLES.titleStyle}>
        {title}
      </h2>
      <div style={{ whiteSpace: 'pre-line' }}>
        {text}
      </div>
      {!showFull && (
        <button
          onClick={toggleShowFull}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={HOME_STYLES.buttonPrimary}
        >
          More...
        </button>
      )}
      {showFull && (
        <button
          onClick={toggleShowFull}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={HOME_STYLES.buttonPrimary}
        >
          Back
        </button>
      )}
    </div>
  );
}
