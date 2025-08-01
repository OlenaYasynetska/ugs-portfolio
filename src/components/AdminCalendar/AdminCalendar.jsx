import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from './AdminCalendar.module.css';

const AdminCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // В реальном приложении это должно проверяться через API
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    start: '',
    end: '',
    description: '',
    color: '#1565c0'
  });

  // Имитация проверки админа (в реальном приложении это должно быть через API)
  useEffect(() => {
    // Здесь должна быть проверка через API или токен
    const checkAdminStatus = () => {
      // Временно установим админа для демонстрации
      // В реальном приложении: const adminStatus = await api.checkAdminStatus();
      setIsAdmin(true); // Измените на false для тестирования режима пользователя
    };
    
    checkAdminStatus();
  }, []);

  // Загрузка событий (в реальном приложении из API)
  useEffect(() => {
    const loadEvents = () => {
      // Имитация загрузки событий из API
      const mockEvents = [
        {
          id: '1',
          title: 'Встреча с клиентом',
          start: '2024-01-15T10:00:00',
          end: '2024-01-15T11:00:00',
          description: 'Обсуждение проекта',
          color: '#1565c0'
        },
        {
          id: '2',
          title: 'Презентация',
          start: '2024-01-20T14:00:00',
          end: '2024-01-20T15:30:00',
          description: 'Презентация нового продукта',
          color: '#4caf50'
        }
      ];
      setEvents(mockEvents);
    };

    loadEvents();
  }, []);

  const handleDateSelect = (selectInfo) => {
    if (!isAdmin) return; // Только админ может создавать события
    
    setSelectedEvent(null);
    setEventForm({
      title: '',
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      description: '',
      color: '#1565c0'
    });
    setShowEventModal(true);
  };

  const handleEventClick = (clickInfo) => {
    if (!isAdmin) return; // Только админ может редактировать события
    
    setSelectedEvent(clickInfo.event);
    setEventForm({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      description: clickInfo.event.extendedProps.description || '',
      color: clickInfo.event.backgroundColor || '#1565c0'
    });
    setShowEventModal(true);
  };

  const handleEventDrop = (dropInfo) => {
    if (!isAdmin) return; // Только админ может перемещать события
    
    const updatedEvents = events.map(event => {
      if (event.id === dropInfo.event.id) {
        return {
          ...event,
          start: dropInfo.event.startStr,
          end: dropInfo.event.endStr
        };
      }
      return event;
    });
    setEvents(updatedEvents);
    
    // В реальном приложении здесь должен быть API вызов
    // await api.updateEvent(dropInfo.event.id, { start: dropInfo.event.startStr, end: dropInfo.event.endStr });
  };

  const handleEventResize = (resizeInfo) => {
    if (!isAdmin) return; // Только админ может изменять размер событий
    
    const updatedEvents = events.map(event => {
      if (event.id === resizeInfo.event.id) {
        return {
          ...event,
          start: resizeInfo.event.startStr,
          end: resizeInfo.event.endStr
        };
      }
      return event;
    });
    setEvents(updatedEvents);
    
    // В реальном приложении здесь должен быть API вызов
    // await api.updateEvent(resizeInfo.event.id, { start: resizeInfo.event.startStr, end: resizeInfo.event.endStr });
  };

  const handleSaveEvent = () => {
    if (!eventForm.title.trim()) return;

    if (selectedEvent) {
      // Обновление существующего события
      const updatedEvents = events.map(event => {
        if (event.id === selectedEvent.id) {
          return {
            ...event,
            title: eventForm.title,
            start: eventForm.start,
            end: eventForm.end,
            description: eventForm.description,
            color: eventForm.color
          };
        }
        return event;
      });
      setEvents(updatedEvents);
      
      // В реальном приложении: await api.updateEvent(selectedEvent.id, eventForm);
    } else {
      // Создание нового события
      const newEvent = {
        id: Date.now().toString(),
        title: eventForm.title,
        start: eventForm.start,
        end: eventForm.end,
        description: eventForm.description,
        color: eventForm.color
      };
      setEvents([...events, newEvent]);
      
      // В реальном приложении: await api.createEvent(eventForm);
    }

    setShowEventModal(false);
    setSelectedEvent(null);
    setEventForm({ title: '', start: '', end: '', description: '', color: '#1565c0' });
  };

  const handleDeleteEvent = () => {
    if (!selectedEvent) return;

    const updatedEvents = events.filter(event => event.id !== selectedEvent.id);
    setEvents(updatedEvents);
    
    // В реальном приложении: await api.deleteEvent(selectedEvent.id);
    
    setShowEventModal(false);
    setSelectedEvent(null);
    setEventForm({ title: '', start: '', end: '', description: '', color: '#1565c0' });
  };

  const eventContent = (arg) => {
    return (
      <div className={styles['event-content']}>
        <div className={styles['event-title']}>{arg.event.title}</div>
        {arg.event.extendedProps.description && (
          <div className={styles['event-description']}>{arg.event.extendedProps.description}</div>
        )}
      </div>
    );
  };

  return (
    <div className={styles['admin-calendar-container']}>
      <div className={styles['calendar-header']}>
        <h2>Административный календарь</h2>
        <div className={styles['admin-status']}>
          {isAdmin ? (
            <span className={styles['admin-badge']}>Режим администратора</span>
          ) : (
            <span className={styles['user-badge']}>Режим просмотра</span>
          )}
        </div>
      </div>

      <div className={styles['calendar-wrapper']}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={isAdmin}
          selectable={isAdmin}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          eventResize={handleEventResize}
          eventContent={eventContent}
          height="auto"
          locale="ru"
          buttonText={{
            today: 'Сегодня',
            month: 'Месяц',
            week: 'Неделя',
            day: 'День'
          }}
        />
      </div>

      {showEventModal && (
        <div className={styles['modal-overlay']} onClick={() => setShowEventModal(false)}>
          <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
            <h3>{selectedEvent ? 'Редактировать событие' : 'Создать событие'}</h3>
            
            <div className={styles['form-group']}>
              <label>Название:</label>
              <input
                type="text"
                value={eventForm.title}
                onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                placeholder="Введите название события"
              />
            </div>

            <div className={styles['form-group']}>
              <label>Начало:</label>
              <input
                type="datetime-local"
                value={eventForm.start}
                onChange={(e) => setEventForm({...eventForm, start: e.target.value})}
              />
            </div>

            <div className={styles['form-group']}>
              <label>Конец:</label>
              <input
                type="datetime-local"
                value={eventForm.end}
                onChange={(e) => setEventForm({...eventForm, end: e.target.value})}
              />
            </div>

            <div className={styles['form-group']}>
              <label>Описание:</label>
              <textarea
                value={eventForm.description}
                onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                placeholder="Введите описание события"
                rows="3"
              />
            </div>

            <div className={styles['form-group']}>
              <label>Цвет:</label>
              <input
                type="color"
                value={eventForm.color}
                onChange={(e) => setEventForm({...eventForm, color: e.target.value})}
              />
            </div>

            <div className={styles['modal-buttons']}>
              <button onClick={handleSaveEvent} className={styles['save-button']}>
                {selectedEvent ? 'Обновить' : 'Создать'}
              </button>
              {selectedEvent && (
                <button onClick={handleDeleteEvent} className={styles['delete-button']}>
                  Удалить
                </button>
              )}
              <button onClick={() => setShowEventModal(false)} className={styles['cancel-button']}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar; 