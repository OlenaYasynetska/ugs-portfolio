import React from 'react';

/**
 * Универсальный хук для анимации изображений
 * @param {string} imageId - ID элемента изображения в DOM
 * @param {Object} options - Опции анимации
 * @param {number} options.delay - Задержка анимации в миллисекундах (по умолчанию 0)
 * @param {string} options.animationType - Тип анимации: 'scale', 'fade', 'slide' (по умолчанию 'scale')
 * @param {number} options.duration - Длительность анимации в миллисекундах (по умолчанию 800)
 * @returns {Object} - Объект с состоянием и стилями для анимации
 */
const useImageAnimation = (imageId, options = {}) => {
  const {
    delay = 0,
    animationType = 'scale',
    duration = 800
  } = options;

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

  // Генерируем стили в зависимости от типа анимации
  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms ease-out`,
      transformOrigin: 'center center'
    };

    switch (animationType) {
      case 'fade':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: 'scale(1)'
        };
      case 'slide':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
        };
      case 'scale':
      default:
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.3)'
        };
    }
  };

  return {
    isVisible,
    animationStyles: getAnimationStyles()
  };
};

export default useImageAnimation;
