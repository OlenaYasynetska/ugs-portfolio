import { useState, useEffect } from 'react';

export function useResponsiveStyles() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return {
    isMobile: windowWidth < 520,
    isVeryMobile: windowWidth < 520,
    isTablet: windowWidth < 768,
    isSmallScreen: windowWidth < 700,
    isMediumScreen: windowWidth < 900,
    h1FontSize: windowWidth <= 900 ? '2.8em' : '4em',
    windowWidth
  };
}
