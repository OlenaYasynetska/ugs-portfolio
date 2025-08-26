import React from 'react';

/**
 * Хук для анимации карточек и постов с настраиваемыми параметрами
 * @param {number} count - Количество карточек для анимации
 * @param {Object} options - Опции анимации
 * @param {number} options.baseDelay - Базовая задержка в миллисекундах (по умолчанию 100)
 * @param {number} options.delayIncrement - Приращение задержки для каждой следующей карточки (по умолчанию 200)
 * @param {string} options.animationType - Тип анимации: 'slideInUp', 'fadeIn', 'scaleIn', 'slideInLeft', 'slideInRight' (по умолчанию 'slideInUp')
 * @param {number} options.duration - Длительность анимации в секундах (по умолчанию 0.8)
 * @param {string} options.easing - Функция плавности (по умолчанию 'ease-out')
 * @returns {Object} - Объект с CSS анимациями и стилями
 */
const useCardAnimation = (count, options = {}) => {
  const {
    baseDelay = 100,
    delayIncrement = 200,
    animationType = 'slideInUp',
    duration = 0.8,
    easing = 'ease-out'
  } = options;

  const [animations, setAnimations] = React.useState({});

  React.useEffect(() => {
    // Генерируем CSS анимации для каждой карточки
    const cardAnimations = {};
    
    for (let i = 1; i <= count; i++) {
      const delay = baseDelay + (i - 1) * delayIncrement;
      cardAnimations[`.card-${i}`] = {
        animation: `${animationType} ${duration}s ${easing} ${delay}ms both`
      };
    }

    setAnimations(cardAnimations);
  }, [count, baseDelay, delayIncrement, animationType, duration, easing]);

  // Генерируем CSS keyframes для разных типов анимаций
  const getKeyframes = () => {
    const keyframes = {
      fadeInDown: `
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
      slideInUp: `
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
      fadeIn: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `,
      scaleIn: `
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `,
      slideInLeft: `
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `,
      slideInRight: `
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `,
      bounceIn: `
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `,
      flipIn: `
        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: perspective(400px) rotateY(90deg);
          }
          40% {
            transform: perspective(400px) rotateY(-20deg);
          }
          60% {
            transform: perspective(400px) rotateY(10deg);
          }
          80% {
            transform: perspective(400px) rotateY(-5deg);
          }
          100% {
            opacity: 1;
            transform: perspective(400px) rotateY(0deg);
          }
        }
      `
    };

    return keyframes[animationType] || keyframes.slideInUp;
  };

  // Генерируем CSS для hover эффектов
  const getHoverStyles = () => `
    .animated-card {
      transition: all 0.3s ease;
    }
    
    .animated-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    
    .animated-card.zoom:hover {
      transform: scale(1.02);
    }
    
    .animated-card.lift:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.2);
    }
    
    .animated-card.rotate:hover {
      transform: rotate(1deg) scale(1.02);
    }
  `;

  // Генерируем CSS для элементов списка внутри карточек
  const getListAnimationStyles = () => `
    .list-item {
      animation: slideInUp 0.6s ease-out both;
      opacity: 0;
    }
    
    /* Элементы списка становятся видимыми после анимации */
    .list-item.animated {
      opacity: 1;
    }
    
    .card-1 .list-item:nth-child(1) { animation-delay: ${baseDelay + 100}ms; }
    .card-1 .list-item:nth-child(2) { animation-delay: ${baseDelay + 200}ms; }
    .card-1 .list-item:nth-child(3) { animation-delay: ${baseDelay + 300}ms; }
    .card-1 .list-item:nth-child(4) { animation-delay: ${baseDelay + 400}ms; }
    
    .card-2 .list-item:nth-child(1) { animation-delay: ${baseDelay + delayIncrement + 100}ms; }
    .card-2 .list-item:nth-child(2) { animation-delay: ${baseDelay + delayIncrement + 200}ms; }
    .card-2 .list-item:nth-child(3) { animation-delay: ${baseDelay + delayIncrement + 300}ms; }
    .card-2 .list-item:nth-child(4) { animation-delay: ${baseDelay + delayIncrement + 400}ms; }
    
    .card-3 .list-item:nth-child(1) { animation-delay: ${baseDelay + delayIncrement * 2 + 100}ms; }
    .card-3 .list-item:nth-child(2) { animation-delay: ${baseDelay + delayIncrement * 2 + 200}ms; }
    .card-3 .list-item:nth-child(3) { animation-delay: ${baseDelay + delayIncrement * 2 + 300}ms; }
    .card-3 .list-item:nth-child(4) { animation-delay: ${baseDelay + delayIncrement * 2 + 400}ms; }
    
    .card-4 .list-item:nth-child(1) { animation-delay: ${baseDelay + delayIncrement * 3 + 100}ms; }
    .card-4 .list-item:nth-child(2) { animation-delay: ${baseDelay + delayIncrement * 3 + 200}ms; }
    .card-4 .list-item:nth-child(3) { animation-delay: ${baseDelay + delayIncrement * 3 + 300}ms; }
    .card-4 .list-item:nth-child(4) { animation-delay: ${baseDelay + delayIncrement * 3 + 400}ms; }
    
    .card-5 .list-item:nth-child(1) { animation-delay: ${baseDelay + delayIncrement * 4 + 100}ms; }
    .card-5 .list-item:nth-child(2) { animation-delay: ${baseDelay + delayIncrement * 4 + 200}ms; }
    .card-5 .list-item:nth-child(3) { animation-delay: ${baseDelay + delayIncrement * 4 + 300}ms; }
    .card-5 .list-item:nth-child(4) { animation-delay: ${baseDelay + delayIncrement * 4 + 400}ms; }
    
    .card-6 .list-item:nth-child(1) { animation-delay: ${baseDelay + delayIncrement * 5 + 100}ms; }
    .card-6 .list-item:nth-child(2) { animation-delay: ${baseDelay + delayIncrement * 5 + 200}ms; }
    .card-6 .list-item:nth-child(3) { animation-delay: ${baseDelay + delayIncrement * 5 + 300}ms; }
    .card-6 .list-item:nth-child(4) { animation-delay: ${baseDelay + delayIncrement * 5 + 400}ms; }
  `;

  // Полный CSS для компонента
  const getFullCSS = () => `
    ${getKeyframes()}
    ${getHoverStyles()}
    ${getListAnimationStyles()}
    
    /* Анимации для карточек */
    .animated-card {
      opacity: 0;
      transform: translateY(30px);
      will-change: opacity, transform;
    }
    
    /* Fallback - если анимация не сработает, карточки будут видимы */
    .animated-card.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* После завершения анимации карточки остаются видимыми */
    .animated-card.card-1,
    .animated-card.card-2,
    .animated-card.card-3,
    .animated-card.card-4,
    .animated-card.card-5,
    .animated-card.card-6 {
      animation-fill-mode: both;
    }
    
    .animated-card.card-1 { 
      animation: ${animationType} ${duration}s ${easing} ${baseDelay}ms both; 
    }
    .animated-card.card-2 { 
      animation: ${animationType} ${duration}s ${easing} ${baseDelay + delayIncrement}ms both; 
    }
    .animated-card.card-3 { 
      animation: ${animationType} ${duration}s ${easing} ${baseDelay + delayIncrement * 2}ms both; 
    }
    .animated-card.card-4 { 
      animation: ${animationType} ${duration}s ${easing} ${baseDelay + delayIncrement * 3}ms both; 
    }
    .animated-card.card-5 { 
      animation: ${animationType} ${duration}s ${easing} ${baseDelay + delayIncrement * 4}ms both; 
    }
    .animated-card.card-6 { 
      animation: ${animationType} ${duration}s ${easing} ${baseDelay + delayIncrement * 5}ms both; 
    }
    
    /* Первая карточка должна быть видимой */
    .animated-card.card-1 {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Заголовки всех карточек всегда видимы */
    .animated-card h2 {
      opacity: 1;
    }
    
    /* Медиа-запросы для мобильных устройств */
    @media (max-width: 768px) {
      .animated-card {
        margin: 10px 0;
        padding: 20px;
      }
      
      .animated-card h2 {
        font-size: 1.3em !important;
      }
      
      .list-item {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
    
    @media (max-width: 480px) {
      .animated-card {
        padding: 15px;
        margin: 8px 0;
      }
      
      .animated-card h2 {
        font-size: 1.2em !important;
      }
      
      .list-item {
        font-size: 14px;
        line-height: 1.5;
      }
    }
  `;

  return {
    animations,
    getFullCSS,
    getKeyframes,
    getHoverStyles,
    getListAnimationStyles
  };
};

export default useCardAnimation;
