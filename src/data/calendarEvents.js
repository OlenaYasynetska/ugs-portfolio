// База данных календарных событий
export const calendarEvents = [
  // {
  //   id: 11,
  //   date: '2025-08-01',
  //   title: {
  //     en: 'SCHLOSSKONZERTE 2025',
  //     de: 'SCHLOSSKONZERTE 2025',
  //     ua: 'SCHLOSSKONZERTE 2025'
  //   },
  //   description: {
  //     en: 'Basic computer skills training for adults',
  //     de: 'Grundlegende Computerkenntnisse-Schulung für Erwachsene',
  //     ua: 'Навчання базових комп\'ютерних навичок для дорослих'
  //   },
  //   type: 'education',
  //   priority: 'medium',
  //   color: '#607d8b'
  // },
  // {
  //   id: 10,
  //   date: '2025-01-15',
  //   title: {
  //     en: 'Meeting with Community Representatives',
  //     de: 'Treffen mit Gemeindevertretern',
  //     ua: 'Зустріч з представниками громади'
  //   },
  //   description: {
  //     en: 'Discussion of community development plans and upcoming events',
  //     de: 'Diskussion über Gemeindeentwicklungspläne und bevorstehende Veranstaltungen',
  //     ua: 'Обговорення планів розвитку громади та майбутніх заходів'
  //   },
  //   type: 'meeting',
  //   priority: 'high',
  //   color: '#1565c0'
  // },
  // {
  //   id: 9,
  //   date: '2025-01-20',
  //   title: {
  //     en: 'Ukrainian Language Course',
  //     de: 'Ukrainisch-Sprachkurs',
  //     ua: 'Курс української мови'
  //   },
  //   description: {
  //     en: 'Weekly Ukrainian language course for beginners',
  //     de: 'Wöchentlicher Ukrainisch-Sprachkurs für Anfänger',
  //     ua: 'Щотижневий курс української мови для початківців'
  //   },
  //   type: 'education',
  //   priority: 'medium',
  //   color: '#4caf50'
  // },
  // {
  //   id: 8,
  //   date: '2025-01-25',
  //   title: {
  //     en: 'Cultural Evening',
  //     de: 'Kulturabend',
  //     ua: 'Культурний вечір'
  //   },
  //   description: {
  //     en: 'Traditional Ukrainian music and dance performance',
  //     de: 'Traditionelle ukrainische Musik- und Tanzaufführung',
  //     ua: 'Виступ традиційної української музики та танців'
  //   },
  //   type: 'cultural',
  //   priority: 'medium',
  //   color: '#ff9800'
  // },
  // {
  //   id: 7,
  //   date: '2025-02-01',
  //   title: {
  //     en: 'Legal Consultation',
  //     de: 'Rechtsberatung',
  //     ua: 'Юридична консультація'
  //   },
  //   description: {
  //     en: 'Free legal consultation for Ukrainian citizens',
  //     de: 'Kostenlose Rechtsberatung für ukrainische Staatsbürger',
  //     ua: 'Безкоштовна юридична консультація для громадян України'
  //   },
  //   type: 'legal',
  //   priority: 'high',
  //   color: '#f44336'
  // },
  // {
  //   id: 6,
  //   date: '2025-02-08',
  //   title: {
  //     en: 'Children\'s Workshop',
  //     de: 'Kinderworkshop',
  //     ua: 'Дитячий майстер-клас'
  //   },
  //   description: {
  //     en: 'Creative workshop for children - Ukrainian crafts',
  //     de: 'Kreativer Workshop für Kinder - ukrainisches Handwerk',
  //     ua: 'Творчий майстер-клас для дітей - українські ремесла'
  //   },
  //   type: 'children',
  //   priority: 'low',
  //   color: '#9c27b0'
  // },
  // {
  //   id: 5,
  //   date: '2025-02-15',
  //   title: {
  //     en: 'Health Information Session',
  //     de: 'Gesundheitsinformationsveranstaltung',
  //     ua: 'Інформаційна сесія про здоров\'я'
  //   },
  //   description: {
  //     en: 'Information about healthcare services and insurance',
  //     de: 'Informationen über Gesundheitsdienste und Versicherung',
  //     ua: 'Інформація про медичні послуги та страхування'
  //   },
  //   type: 'health',
  //   priority: 'high',
  //   color: '#00bcd4'
  // },
  // {
  //   id: 4,
  //   date: '2025-02-22',
  //   title: {
  //     en: 'Job Fair',
  //     de: 'Jobmesse',
  //     ua: 'Ярмарок вакансій'
  //   },
  //   description: {
  //     en: 'Employment opportunities and career guidance',
  //     de: 'Beschäftigungsmöglichkeiten und Karriereberatung',
  //     ua: 'Можливості працевлаштування та кар\'єрне консультування'
  //   },
  //   type: 'employment',
  //   priority: 'high',
  //   color: '#795548'
  // },
           {
      id: 4,
      date: '2025-08-01',
             title: {
         en: 'AM.PM ЖИВАЯ МУЗЫКА ВСЕГДА',
         de: 'AM.PM ЖИВАЯ МУЗЫКА ВСЕГДА',
         ua: 'AM.PM ЖИВАЯ МУЗЫКА ВСЕГДА'
       },
      description: {
        en: 'Cover band performing live music',
        de: 'Cover-Band spielt Live-Musik',
        ua: 'Кавер-група виконує живу музику'
      },
      type: 'cultural',
      priority: 'high',
      color: '#8f1a80',
      image: '/src/assets/baner_ampm-music.jpg',
      time: '18:00 - 22:00',
      location: 'Stadtplatz',
      weekday: 'Fr, 01.08.2025'
    },
  {
    id: 3,
    date: '2025-08-22',
    title: {
      en: 'SCHLOSSKONZERTE 2025',
      de: 'SCHLOSSKONZERTE 2025',
      ua: 'SCHLOSSKONZERTE 2025'
    },
    description: {
      en: 'Classical music concert in the beautiful courtyard of Lamberg Castle',
      de: 'Klassisches Musik-Konzert im wunderschönen Hof von Schloss Lamberg',
      ua: 'Класичний музичний концерт у прекрасному дворі замку Ламберг'
    },
    type: 'cultural',
    priority: 'high',
    color: '#607d8b',
    image: '/src/assets/Schlospark.jpg',
    time: '18:30 - 20:00',
    location: 'Hof Schloss Lamberg',
    weekday: 'Fr, 22.08.2025'
  },
  {
    id: 2,
    date: '2025-08-08',
    title: {
      en: 'SCHLOSSKONZERTE 2025',
      de: 'SCHLOSSKONZERTE 2025',
      ua: 'SCHLOSSKONZERTE 2025'
    },
    description: {
      en: 'Classical music concert in the beautiful courtyard of Lamberg Castle',
      de: 'Klassisches Musik-Konzert im wunderschönen Hof von Schloss Lamberg',
      ua: 'Класичний музичний концерт у прекрасному дворі замку Ламберг'
    },
    type: 'cultural',
    priority: 'high',
    color: '#607d8b',
    image: '/src/assets/Schlospark.jpg',
    time: '18:30 - 20:00',
    location: 'Hof Schloss Lamberg',
    weekday: 'Fr, 08.08.2025'
  },
  {
    id: 1,
    date: '2025-08-01',
    title: {
      en: 'SCHLOSSKONZERTE 2025',
      de: 'SCHLOSSKONZERTE 2025',
      ua: 'SCHLOSSKONZERTE 2025'
    },
    description: {
      en: 'Classical music concert in the beautiful courtyard of Lamberg Castle',
      de: 'Klassisches Musik-Konzert im wunderschönen Hof von Schloss Lamberg',
      ua: 'Класичний музичний концерт у прекрасному дворі замку Ламберг'
    },
    type: 'cultural',
    priority: 'high',
    color: '#607d8b',
    image: '/src/assets/Schlospark.jpg',
    time: '18:30 - 20:00',
    location: 'Hof Schloss Lamberg',
    weekday: 'Fr, 01.08.2025'
  }
];

// Функция для получения событий по дате
export function getEventsByDate(date) {
  // Правильное форматирование даты без учета часового пояса
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;
  return calendarEvents.filter(event => event.date === dateString);
}

// Функция для получения событий по месяцу
export function getEventsByMonth(year, month) {
  const monthString = `${year}-${String(month + 1).padStart(2, '0')}`;
  return calendarEvents.filter(event => event.date.startsWith(monthString));
}

// Функция для добавления нового события
export function addEvent(newEvent) {
  const maxId = calendarEvents.length > 0 ? Math.max(...calendarEvents.map(e => e.id)) : 0;
  const event = {
    id: maxId + 1,
    ...newEvent
  };
  calendarEvents.push(event);
  return event;
}

// Функция для удаления события
export function removeEvent(eventId) {
  const index = calendarEvents.findIndex(event => event.id === eventId);
  if (index !== -1) {
    calendarEvents.splice(index, 1);
    return true;
  }
  return false;
}

// Функция для обновления события
export function updateEvent(eventId, updatedEvent) {
  const index = calendarEvents.findIndex(event => event.id === eventId);
  if (index !== -1) {
    calendarEvents[index] = { ...calendarEvents[index], ...updatedEvent };
    return calendarEvents[index];
  }
  return null;
}

// Типы событий
export const eventTypes = {
  meeting: { label: { en: 'Meeting', de: 'Treffen', ua: 'Зустріч' }, color: '#1565c0' },
  education: { label: { en: 'Education', de: 'Bildung', ua: 'Освіта' }, color: '#4caf50' },
  cultural: { label: { en: 'Cultural', de: 'Kultur', ua: 'Культура' }, color: '#607d8b' },
  legal: { label: { en: 'Legal', de: 'Recht', ua: 'Юридичне' }, color: '#f44336' },
  children: { label: { en: 'Children', de: 'Kinder', ua: 'Дитяче' }, color: '#9c27b0' },
  health: { label: { en: 'Health', de: 'Gesundheit', ua: 'Здоров\'я' }, color: '#00bcd4' },
  employment: { label: { en: 'Employment', de: 'Beschäftigung', ua: 'Працевлаштування' }, color: '#795548' },
  celebration: { label: { en: 'Celebration', de: 'Feier', ua: 'Святкування' }, color: '#ff5722' }
};

// Приоритеты событий
export const eventPriorities = {
  high: { label: { en: 'High', de: 'Hoch', ua: 'Високий' }, color: '#f44336' },
  medium: { label: { en: 'Medium', de: 'Mittel', ua: 'Середній' }, color: '#ff9800' },
  low: { label: { en: 'Low', de: 'Niedrig', ua: 'Низький' }, color: '#4caf50' }
}; 