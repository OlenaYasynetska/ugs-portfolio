import React from 'react';

/**
 * Кастомный хук для анимации появления изображения
 * @param {string} imageId - ID элемента изображения в DOM
 * @param {number} delay - Задержка анимации в миллисекундах (по умолчанию 0)
 * @returns {boolean} - Состояние видимости изображения
 */
const useImageDrawAnimation = (imageId, delay = 0) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === imageId) {
            // Добавляем задержку если она указана
            if (delay > 0) {
              setTimeout(() => setIsVisible(true), delay);
            } else {
              setIsVisible(true);
            }
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
  }, [imageId, delay]);

  return isVisible;
};

export default useImageDrawAnimation; 