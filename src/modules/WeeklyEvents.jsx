import React from 'react';
import { useTranslation } from 'react-i18next';
import { calendarEvents, getEventsByDate } from '../data/calendarEvents';
import styles from './WeeklyEvents.module.css';

const WeeklyEvents = () => {
  const { t, i18n } = useTranslation();

  // Получаем события текущей недели
  const getWeeklyEvents = () => {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = воскресенье, 1 = понедельник, ...
    const monday = new Date(today);
    
    // Находим понедельник текущей недели
    const daysToMonday = currentDay === 0 ? 6 : currentDay - 1;
    monday.setDate(today.getDate() - daysToMonday);
    
    const weeklyEvents = [];
    
    // Проходим по всем дням недели (понедельник - воскресенье)
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(monday);
      currentDate.setDate(monday.getDate() + i);
      
      const events = getEventsByDate(currentDate);
      if (events.length > 0) {
        weeklyEvents.push({
          date: currentDate,
          events: events
        });
      }
    }
    
    return weeklyEvents;
  };

  const weeklyEvents = getWeeklyEvents();

  // Многоязычные дни недели
  const daysOfWeek = {
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    de: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя']
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}`;
  };

  const getDayName = (date) => {
    const dayIndex = date.getDay();
    const dayNames = daysOfWeek[i18n.language] || daysOfWeek.en;
    return dayNames[dayIndex === 0 ? 6 : dayIndex - 1]; // Преобразуем воскресенье в последний день
  };

  if (weeklyEvents.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{t('weekly_events')}</h2>
        <div className={styles.noEvents}>
          {t('no_events_this_week')}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('weekly_events')}</h2>
      <div className={styles.eventsList}>
        {weeklyEvents.map((dayData, index) => (
          <div key={index} className={styles.dayContainer}>
            <div className={styles.dayHeader}>
              <span className={styles.dayName}>
                {getDayName(dayData.date)}
              </span>
              <span className={styles.dayDate}>
                {formatDate(dayData.date)}
              </span>
            </div>
            <div className={styles.eventsContainer}>
              {dayData.events.map((event) => (
                <div 
                  key={event.id} 
                  className={styles.eventItem}
                  style={{ backgroundColor: event.color }}
                >
                  <span className={styles.eventTitle}>
                    {event.title[i18n.language] || event.title.en}
                  </span>
                  {event.time && (
                    <span className={styles.eventTime}>
                      {event.time}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyEvents; 