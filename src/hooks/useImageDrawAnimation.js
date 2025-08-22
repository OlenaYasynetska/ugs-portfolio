import React from 'react';

/**
 * Кастомный хук для анимации рисования картинки из точки
 * @param {string} imageId - ID элемента картинки в DOM
 * @returns {boolean} - Состояние видимости картинки
 */
const useImageDrawAnimation = (imageId) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === imageId) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imageElement = document.getElementById(imageId);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, [imageId]);

  return isVisible;
};

export default useImageDrawAnimation; 