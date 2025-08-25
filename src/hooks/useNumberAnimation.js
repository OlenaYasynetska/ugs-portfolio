import React from 'react';

/**
 * Хук для анимации цифр с задержками
 * @param {number} count - Количество цифр для анимации
 * @param {number} baseDelay - Базовая задержка в миллисекундах (по умолчанию 0)
 * @param {number} delayIncrement - Приращение задержки для каждой следующей цифры (по умолчанию 400)
 * @param {string} animationName - Название анимации (по умолчанию 'dance')
 * @param {number} animationDuration - Длительность анимации в секундах (по умолчанию 2)
 * @returns {Array} - Массив объектов с настройками анимации для каждой цифры
 */
const useNumberAnimation = (count, baseDelay = 0, delayIncrement = 400, animationName = 'dance', animationDuration = 2) => {
  const [animations, setAnimations] = React.useState([]);

  React.useEffect(() => {
    const newAnimations = Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      delay: baseDelay + (index * delayIncrement),
      animation: `${animationName} ${animationDuration}s ease-in-out infinite ${(index * delayIncrement / 1000).toFixed(1)}s`
    }));
    
    setAnimations(newAnimations);
  }, [count, baseDelay, delayIncrement, animationName, animationDuration]);

  return animations;
};

export default useNumberAnimation;
