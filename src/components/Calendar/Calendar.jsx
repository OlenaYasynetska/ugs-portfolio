import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calendarEvents, getEventsByDate, eventTypes } from '../../data/calendarEvents';
import styles from './Calendar.module.css';

const Calendar = () => {
  const { t, i18n } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Функция для получения правильного названия языка
  const getLanguageName = (langCode) => {
    const languageNames = {
      'en': 'English',
      'de': 'Deutsch', 
      'ua': 'Українська'
    };
    return languageNames[langCode] || 'English';
  };

  // Отслеживаем изменение размера окна больше не нужно
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 480);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);


  // Многоязычные дни недели
  const daysOfWeek = {
    en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    ua: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']
  };

  // Многоязычные названия месяцев
  const months = {
    en: ['January', 'February', 'March', 'April', 'May', 'June',
         'July', 'August', 'September', 'October', 'November', 'December'],
    de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
         'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    ua: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
         'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
  };

  // Получаем первый день месяца и количество дней
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  
  // Получаем день недели первого дня (0 = воскресенье, 1 = понедельник, ...)
  let firstDayWeekday = firstDayOfMonth.getDay();
  if (firstDayWeekday === 0) firstDayWeekday = 7; // Преобразуем воскресенье в 7

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const dateEvents = getEventsForDate(day);
    if (dateEvents.length > 0) {
      setSelectedEvent(dateEvents[0]); // Показываем первое событие
      setShowViewModal(true);
    }
    // Убираем возможность добавления событий
  };

  const getEventsForDate = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return getEventsByDate(date);
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Отладочная информация - выводим сегодняшнюю дату в консоль
    const today = new Date();
    console.log('Сегодняшняя дата:', today.getDate(), today.getMonth() + 1, today.getFullYear());
    console.log('Текущий месяц календаря:', currentDate.getMonth() + 1, currentDate.getFullYear());
    
    // Добавляем пустые ячейки для дней до первого дня месяца
    for (let i = 1; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className={`${styles['calendar-day']} ${styles.empty}`}></div>);
    }
    
    // Добавляем дни месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const dateEvents = getEventsForDate(day);
      // Проверяем, является ли этот день сегодняшним
      const today = new Date();
      const isToday = day === today.getDate() && 
                     currentDate.getMonth() === today.getMonth() && 
                     currentDate.getFullYear() === today.getFullYear();
      
      days.push(
                 <div 
           key={day} 
           className={`${styles['calendar-day']} ${isToday ? styles.today : ''}`}
           onClick={() => handleDateClick(day)}
         >
          <div className={styles['day-number']}>{day}</div>
          {dateEvents.length > 0 && (
            <div className={styles['events-container']}>
              {dateEvents.slice(0, 2).map((event) => (
                <div
                  key={event.id}
                  className={`${styles['event-item']} ${styles[event.type] || ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);
                    setShowViewModal(true);
                  }}
                >
                  {/* Только цветные полоски, без текста */}
                </div>
              ))}
              {dateEvents.length > 2 && (
                <div className={styles['more-events']}>+{dateEvents.length - 2}</div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className={styles['calendar-container']}>
      <div className={styles['calendar-header']}>
        <button className={styles['nav-button']} onClick={handlePrevMonth}>
          ‹
        </button>
                 <h2 className={styles['month-title']}>
           {months[i18n.language]?.[currentDate.getMonth()] || months.en[currentDate.getMonth()]} {currentDate.getFullYear()}
         </h2>
        <button className={styles['nav-button']} onClick={handleNextMonth}>
          ›
        </button>
      </div>
      
      <div className={styles['calendar-grid']}>
                 <div className={styles.weekdays}>
           {(daysOfWeek[i18n.language] || daysOfWeek.en).map(day => (
             <div key={day} className={styles.weekday}>{day}</div>
           ))}
         </div>
        <div className={styles['days-grid']}>
          {renderCalendarDays()}
        </div>
      </div>
               {showViewModal && selectedEvent && (
          <div className={styles['modal-overlay']} onClick={() => setShowViewModal(false)}>
            <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ margin: 0 }}>{selectedEvent.title[i18n.language] || selectedEvent.title.en}</h3>
                <span style={{ 
                  fontSize: '12px', 
                  color: '#666', 
                  backgroundColor: '#f0f0f0', 
                  padding: '4px 8px', 
                  borderRadius: '12px' 
                }}>
                  {getLanguageName(i18n.language)}
                </span>
              </div>
              
              <div className={styles['event-display']}>
                {selectedEvent.image && (
                  <div className={styles['event-image']}>
                    <img 
                      src={selectedEvent.image} 
                      alt={selectedEvent.title[i18n.language] || selectedEvent.title.en}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.log('Ошибка загрузки изображения:', selectedEvent.image);
                      }}
                    />
                  </div>
                )}
                
                {!selectedEvent.image && (
                  <div className={styles['event-image']}>
                    <div style={{ 
                      width: '100%', 
                      height: '200px', 
                      backgroundColor: '#f0f0f0', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      borderRadius: '8px',
                      color: '#666'
                    }}>
                      📷 Изображение недоступно
                    </div>
                  </div>
                )}
                
                <div className={styles['event-info']}>
                  <strong>📅 Дата:</strong> {selectedEvent.weekday || selectedEvent.date}
                </div>
                
                {selectedEvent.time && (
                  <div className={styles['event-info']}>
                    <strong>🕒 Время:</strong> {selectedEvent.time}
                  </div>
                )}
                
                {selectedEvent.location && (
                  <div className={styles['event-info']}>
                    <strong>📍 Место:</strong> {selectedEvent.location}
                  </div>
                )}
                
                <div className={styles['event-info']}>
                  <strong>📝 Описание:</strong>
                  <p>{selectedEvent.description[i18n.language] || selectedEvent.description.en}</p>
                </div>
                
                <div className={styles['event-info']}>
                  <strong>🏷️ Тип:</strong> {eventTypes[selectedEvent.type]?.label[i18n.language] || eventTypes[selectedEvent.type]?.label.en}
                </div>
              </div>
              
              <button 
                onClick={() => setShowViewModal(false)} 
                className={styles['close-button']}
              >
                ×
              </button>
            </div>
          </div>
        )}
        
      </div>
    );
  };

export default Calendar; 