# Хуки анимации

В этой папке находятся кастомные React хуки для создания красивых анимаций на сайте.

## useImageDrawAnimation

Хук для анимации появления изображений с использованием Intersection Observer API.

### Параметры:
- `imageId` (string) - ID элемента изображения в DOM
- `delay` (number, опционально) - Задержка анимации в миллисекундах (по умолчанию 0)

### Возвращает:
- `boolean` - Состояние видимости изображения

### Пример использования:
```jsx
const isImageVisible = useImageDrawAnimation('my-image', 200);

<img 
  src={imageSrc} 
  id="my-image"
  style={{
    transform: isImageVisible ? 'scale(1)' : 'scale(0.3)',
    opacity: isImageVisible ? 1 : 0,
    transition: 'all 0.8s ease-out'
  }} 
/>
```

## useImageAnimation

Универсальный хук для анимации изображений с различными типами анимации.

### Параметры:
- `imageId` (string) - ID элемента изображения в DOM
- `options` (object, опционально) - Опции анимации:
  - `delay` (number) - Задержка анимации в миллисекундах (по умолчанию 0)
  - `animationType` (string) - Тип анимации: 'scale', 'fade', 'slide' (по умолчанию 'scale')
  - `duration` (number) - Длительность анимации в миллисекундах (по умолчанию 800)

### Возвращает:
- `object` - Объект с состоянием и стилями:
  - `isVisible` (boolean) - Состояние видимости
  - `animationStyles` (object) - Готовые стили для применения

### Пример использования:
```jsx
const { isVisible, animationStyles } = useImageAnimation('my-image', {
  delay: 300,
  animationType: 'slide',
  duration: 1000
});

<img 
  src={imageSrc} 
  id="my-image"
  style={animationStyles} 
/>
```

## useNumberAnimation

Хук для создания анимированных цифр с задержками.

### Параметры:
- `count` (number) - Количество цифр для анимации
- `baseDelay` (number, опционально) - Базовая задержка в миллисекундах (по умолчанию 0)
- `delayIncrement` (number, опционально) - Приращение задержки для каждой следующей цифры (по умолчанию 400)
- `animationName` (string, опционально) - Название анимации (по умолчанию 'dance')
- `animationDuration` (number, опционально) - Длительность анимации в секундах (по умолчанию 2)

### Возвращает:
- `Array` - Массив объектов с настройками анимации для каждой цифры

### Пример использования:
```jsx
const numberAnimations = useNumberAnimation(5, 0, 400, 'dance', 2);

{numberAnimations.map((anim, index) => (
  <span key={anim.id} style={{ animation: anim.animation }}>
    {anim.id}.
  </span>
))}
```

## CSS анимации

### dance
Анимация для цифр, включающая:
- Движение по горизонтали (translateX)
- Поворот (rotate)
- Масштабирование (scale)

```css
@keyframes dance {
  0%, 100% { transform: translateX(0px) rotate(0deg) scale(1); }
  25% { transform: translateX(5px) rotate(2deg) scale(1.05); }
  50% { transform: translateX(-5px) rotate(-2deg) scale(0.95); }
  75% { transform: translateX(3px) rotate(1deg) scale(1.02); }
}
```

## Принципы использования

1. **Последовательность**: Изображения появляются одно за другим с задержками
2. **Разнообразие**: Разные посты могут использовать разные скорости анимации
3. **Производительность**: Используется Intersection Observer для оптимизации
4. **Гибкость**: Хуки легко настраиваются под разные потребности

## Советы по использованию

- Используйте разные задержки для создания волнового эффекта
- Настраивайте скорость анимации в зависимости от контента
- Комбинируйте разные типы анимации для разнообразия
- Тестируйте на разных устройствах для оптимальной производительности
