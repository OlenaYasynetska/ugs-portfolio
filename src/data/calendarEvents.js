// База данных календарных событий
export const calendarEvents = [
  {
    id: 4,
    date: '2025-08-23',
    title: {
      en: 'Ukrainian State Flag Day - Ceremony in Vienna',
      de: 'Tag der ukrainischen Staatsflagge - Zeremonie in Wien',
      ua: 'День Державного Прапора України - Церемонія у Відні'
    },
    description: {
      en: 'The Embassy of Ukraine in Austria invites the Ukrainian community to participate in the solemn ceremony of raising the State Flag of Ukraine. The event will take place at 09:00 on the territory of the diplomatic mission in Vienna. Mandatory pre-registration required.',
      de: 'Die Botschaft der Ukraine in Österreich lädt die ukrainische Gemeinschaft zur Teilnahme an der feierlichen Zeremonie des Hissens der Staatsflagge der Ukraine ein. Die Veranstaltung findet um 09:00 Uhr auf dem Gelände der diplomatischen Mission in Wien statt. Obligatorische Voranmeldung erforderlich.',
      ua: 'Посольство України в Австрії запрошує українську громаду взяти участь у урочистій церемонії підняття Державного Прапора України. Захід відбудеться о 09:00 на території дипломатичного представництва у Відні. Необхідна обов\'язкова попередня реєстрація.'
    },
    type: 'meeting',
    priority: 'high',
    color: '#1565c0',
    image: '/ukrainian-flag.svg',
    time: '09:00',
    location: 'Naaffgasse 23, 1180 Wien',
    weekday: 'Sa, 23.08.2025'
  },
  {
    id: 5,
    date: '2025-08-03',
    title: {
      en: '🇺🇦✈️ Happy Air Force Day\nof the Armed Forces of Ukraine! ✈️🇺🇦',
      de: '🇺🇦✈️ Alles Gute zum Tag der Luftstreitkräfte\nder Streitkräfte der Ukraine! ✈️🇺🇦',
      ua: '🇺🇦✈️ З Днем Повітряних Сил\nЗбройних Сил України! ✈️🇺🇦',
      ru: '🇺🇦✈️ С Днем Воздушных Сил\nВооруженных Сил Украины! ✈️🇺🇦'
    },
    description: {
      en: 'Today we honor the courage, professionalism and dedication of the warriors who defend the sky of Ukraine! Pilots, engineers, technicians, air defense operators — you stand daily in defense of our freedom and independence. Thank you for your bravery, endurance and unbreakable faith in victory! May the sky over Ukraine always be peaceful, and the wings — strong! 💙💛 Glory to the Air Force! Glory to Ukraine! #AFU #AirForce #AirForceDay #GloryToUkraine #AFUforce #AirForceDay2025',
      de: 'Heute ehren wir den Mut, die Professionalität und Hingabe der Krieger, die den Himmel der Ukraine verteidigen! Piloten, Ingenieure, Techniker, Luftabwehr-Operatoren — ihr steht täglich in der Verteidigung unserer Freiheit und Unabhängigkeit. Danke für euren Mut, eure Ausdauer und euren unerschütterlichen Glauben an den Sieg! Möge der Himmel über der Ukraine immer friedlich sein und die Flügel — stark! 💙💛 Ruhm den Luftstreitkräften! Ruhm der Ukraine! #AFU #AirForce #AirForceDay #GloryToUkraine #AFUforce #AirForceDay2025',
      ua: '03.08.2025 ми вшановуємо мужність, професіоналізм і відданість воїнів, які боронять небо України! Пілоти, інженери, техніки, оператори ППО — ви щодня стоїте на захисті нашої свободи та незалежності. Дякуємо за вашу сміливість, витримку та незламну віру в перемогу! Хай небо над Україною завжди буде мирним, а крила — міцними! 💙💛 Слава Повітряним Силам! Слава Україні! #ЗСУ #ПовітряніСили #ДеньПС #СлаваУкраїні #ЗСУсила #ДеньПС2025',
      ru: 'Сегодня мы чтим мужество, профессионализм и преданность воинов, защищающих небо Украины! Летчики, инженеры, техники, операторы ПВО — вы ежедневно стоите на защите нашей свободы и независимости. Спасибо за вашу смелость, выносливость и непоколебимую веру в победу! Пусть небо над Украиной всегда будет мирным, а крылья — крепкими! 💙💛 Слава Воздушным Силам! Слава Украине! #ВСУ #ВоздушныеСилы #ДеньВС #СлаваУкраине #ВСУсила #ДеньВС2025'
    },
    type: 'children',
    priority: 'high',
    color: '#9c27b0',
    image: '/PCU.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Su, 03.08.2025'
  },
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
      type: 'celebration',
      priority: 'high',
      color: '#8f1a80',
      image: '/baner_ampm-music.jpg',
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
    image: '/Schlospark.jpg',
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
    image: '/Schlospark.jpg',
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
    type: 'education',
    priority: 'high',
    color: '#4caf50',
    image: '/Schlospark.jpg',
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
  meeting: { label: { en: 'Meeting', de: 'Treffen', ua: 'Зустріч', ru: 'Встреча' }, color: '#1565c0' },
  education: { label: { en: 'Education', de: 'Bildung', ua: 'Освіта', ru: 'Образование' }, color: '#4caf50' },
  cultural: { label: { en: 'Cultural', de: 'Kultur', ua: 'Культура', ru: 'Культура' }, color: '#607d8b' },
  legal: { label: { en: 'Legal', de: 'Recht', ua: 'Юридичне', ru: 'Юридическое' }, color: '#f44336' },
  children: { label: { en: 'Children', de: 'Kinder', ua: 'Дитяче', ru: 'Детское' }, color: '#9c27b0' },
  health: { label: { en: 'Health', de: 'Gesundheit', ua: 'Здоров\'я', ru: 'Здоровье' }, color: '#00bcd4' },
  employment: { label: { en: 'Employment', de: 'Beschäftigung', ua: 'Працевлаштування', ru: 'Трудоустройство' }, color: '#795548' },
  celebration: { label: { en: 'Celebration', de: 'Feier', ua: 'Святкування', ru: 'Празднование' }, color: '#ff5722' }
};

// Приоритеты событий
export const eventPriorities = {
  high: { label: { en: 'High', de: 'Hoch', ua: 'Високий', ru: 'Высокий' }, color: '#f44336' },
  medium: { label: { en: 'Medium', de: 'Mittel', ua: 'Середній', ru: 'Средний' }, color: '#ff9800' },
  low: { label: { en: 'Low', de: 'Niedrig', ua: 'Низький', ru: 'Низкий' }, color: '#4caf50' }
}; 