import React from 'react';

/**
 * Хук для анимации элементов при скролле
 * @param {string} elementId - ID элемента для наблюдения
 * @param {Object} options - Опции анимации
 * @param {number} options.delay - Задержка анимации в миллисекундах (по умолчанию 0)
 * @param {string} options.animationType - Тип анимации: 'slideInUp', 'slideInLeft', 'slideInRight', 'fadeIn', 'scaleIn', 'bounceIn' (по умолчанию 'slideInUp')
 * @param {number} options.duration - Длительность анимации в миллисекундах (по умолчанию 800)
 * @param {number} options.threshold - Порог видимости для срабатывания анимации (по умолчанию 0.1)
 * @param {string} options.easing - Функция плавности (по умолчанию 'ease-out')
 * @returns {Object} - Объект с состоянием и стилями для анимации
 */
const useScrollAnimation = (elementId, options = {}) => {
  const {
    delay = 0,
    animationType = 'slideInUp',
    duration = 800,
    threshold = 0.1,
    easing = 'ease-out'
  } = options;

  const [isVisible, setIsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    console.log(`Инициализация анимации для элемента: ${elementId}`);
    
    // Проверка видимости при скролле с учетом порядка элементов
    const checkElementVisibility = () => {
      const element = document.getElementById(elementId);
      if (!element || hasAnimated) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
      
      if (isVisible) {
        console.log(`Элемент ${elementId} стал видимым, запуск анимации`);
        
        // Проверяем, есть ли другие элементы выше, которые еще не анимированы
        const allPanels = document.querySelectorAll('.scroll-panel');
        let shouldAnimate = true;
        let currentIndex = -1;
        
        // Находим индекс текущего элемента
        allPanels.forEach((panel, index) => {
          if (panel.id === elementId) {
            currentIndex = index;
          }
        });
        
        // Проверяем, анимированы ли все предыдущие элементы
        for (let i = 0; i < currentIndex; i++) {
          const prevPanel = allPanels[i];
          if (prevPanel && !prevPanel.classList.contains('animated')) {
            shouldAnimate = false;
            console.log(`Элемент ${elementId} ждет анимации предыдущего элемента ${prevPanel.id}`);
            break;
          }
        }
        
        if (shouldAnimate) {
          console.log(`Анимация запущена для элемента: ${elementId}`);
          
          // Добавляем класс animated для запуска CSS анимации
          element.classList.add('animated');
          
          // Обновляем состояние React
          const animationDelay = delay > 0 ? delay : 100;
          setTimeout(() => {
            console.log(`Анимация завершена для элемента: ${elementId}`);
            setIsVisible(true);
            setHasAnimated(true);
            
            // После завершения анимации проверяем следующие элементы
            setTimeout(() => {
              const nextPanels = document.querySelectorAll('.scroll-panel');
              nextPanels.forEach((panel, index) => {
                if (index > currentIndex) {
                  const nextRect = panel.getBoundingClientRect();
                  const nextIsVisible = nextRect.top < window.innerHeight - 100 && nextRect.bottom > 100;
                  if (nextIsVisible && !panel.classList.contains('animated')) {
                    // Запускаем анимацию для следующего элемента
                    const nextElementId = panel.id;
                    console.log(`Автоматический запуск анимации для следующего элемента: ${nextElementId}`);
                    panel.classList.add('animated');
                  }
                }
              });
            }, 300); // Увеличиваем задержку для более плавной последовательности
          }, animationDelay);
        }
      }
    };

    // Запускаем проверку после небольшой задержки
    const timeoutId = setTimeout(() => {
      checkElementVisibility();
    }, 1000);

    // Добавляем обработчик скролла
    const scrollHandler = () => {
      if (!hasAnimated) {
        checkElementVisibility();
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [elementId, delay, hasAnimated]);

  // Генерируем стили в зависимости от типа анимации
  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms ${easing}`,
      willChange: 'opacity, transform'
    };

    switch (animationType) {
      case 'slideInUp':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
        };
      case 'slideInLeft':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
        };
      case 'slideInRight':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)'
        };
      case 'fadeIn':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: 'translateY(0)'
        };
      case 'scaleIn':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)'
        };
      case 'bounceIn':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.3)',
          animation: isVisible ? `bounceIn ${duration}ms ${easing}` : 'none'
        };
      case 'flipIn':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'perspective(400px) rotateY(0deg)' : 'perspective(400px) rotateY(90deg)',
          transformOrigin: 'center center'
        };
      default:
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
        };
    }
  };

  // Генерируем CSS keyframes для bounceIn анимации
  const getKeyframes = () => {
    if (animationType === 'bounceIn') {
      return `
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
      `;
    }
    return '';
  };

  return {
    isVisible,
    hasAnimated,
    animationStyles: getAnimationStyles(),
    keyframes: getKeyframes()
  };
};

export default useScrollAnimation;
