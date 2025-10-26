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
      ua: '🇺🇦✈️ З Днем Повітряних Сил\nЗбройних Сил України! ✈️🇺🇦'
    },
    description: {
      en: 'Today we honor the courage, professionalism and dedication of the warriors who defend the sky of Ukraine! Pilots, engineers, technicians, air defense operators — you stand daily in defense of our freedom and independence. Thank you for your bravery, endurance and unbreakable faith in victory! May the sky over Ukraine always be peaceful, and the wings — strong! 💙💛 Glory to the Air Force! Glory to Ukraine! #AFU #AirForce #AirForceDay #GloryToUkraine #AFUforce #AirForceDay2025',
      de: 'Heute ehren wir den Mut, die Professionalität und Hingabe der Krieger, die den Himmel der Ukraine verteidigen! Piloten, Ingenieure, Techniker, Luftabwehr-Operatoren — ihr steht täglich in der Verteidigung unserer Freiheit und Unabhängigkeit. Danke für euren Mut, eure Ausdauer und euren unerschütterlichen Glauben an den Sieg! Möge der Himmel über der Ukraine immer friedlich sein und die Flügel — stark! 💙💛 Ruhm den Luftstreitkräften! Ruhm der Ukraine! #AFU #AirForce #AirForceDay #GloryToUkraine #AFUforce #AirForceDay2025',
      ua: '03.08.2025 ми вшановуємо мужність, професіоналізм і відданість воїнів, які боронять небо України! Пілоти, інженери, техніки, оператори ППО — ви щодня стоїте на захисті нашої свободи та незалежності. Дякуємо за вашу сміливість, витримку та незламну віру в перемогу! Хай небо над Україною завжди буде мирним, а крила — міцними! 💙💛 Слава Повітряним Силам! Слава Україні! #ЗСУ #ПовітряніСили #ДеньПС #СлаваУкраїні #ЗСУсила #ДеньПС2025'
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
  },
  {
    id: 6,
    date: '2025-08-24',
    title: {
      en: '🇺🇦 Ukrainian Independence Day in Steyr 🇺🇦',
      de: '🇺🇦 Unabhängigkeitstag der Ukraine in Steyr 🇺🇦',
      ua: '🇺🇦 День Незалежності України в Штайрі 🇺🇦'
    },
    description: {
      en: 'Celebration of Ukrainian Independence Day with prayer for Ukraine within the framework of the divine service of the Austrian community, short performance by children, and refreshments and conversations in the parish cafe.',
      de: 'Feier des ukrainischen Unabhängigkeitstags mit Gebet für die Ukraine im Rahmen des Gottesdienstes der österreichischen Gemeinde, kurzer Auftritt der Kinder und Bewirtung und Gespräche im Pfarrcafé.',
      ua: 'Святкування Дня Незалежності України з молитвою за Україну в рамках богослужіння австрійської громади, коротким виступом дітей та частуванням та бесідами в парафіяльному кафе.'
    },
    type: 'celebration',
    priority: 'high',
    color: '#ff5722',
    image: '/Stadtpfarrkirche.jpg',
    time: '11:00',
    location: 'Stadtpfarrkirche, Brucknerplatz 4, 4400 Steyr',
    weekday: 'Su, 24.08.2025'
  },
  // Праздники октября 2025
  {
    id: 7,
    date: '2025-10-01',
    title: {
      en: '🎵 International Music Day',
      de: '🎵 Internationaler Tag der Musik',
      ua: '🎵 Міжнародний день музики'
    },
    description: {
      en: 'A day dedicated to celebrating music as a universal language that brings people together across cultures and nations.',
      de: 'Ein Tag, der der Feier der Musik als universeller Sprache gewidmet ist, die Menschen über Kulturen und Nationen hinweg zusammenbringt.',
      ua: 'День, присвячений святкуванню музики як універсальної мови, яка об\'єднує людей різних культур і націй.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'We, 01.10.2025'
  },
  {
    id: 8,
    date: '2025-10-01',
    title: {
      en: '👴 International Day of Older Persons',
      de: '👴 Internationaler Tag der älteren Menschen',
      ua: '👴 Міжнародний день людей похилого віку'
    },
    description: {
      en: 'A day to recognize and celebrate the contributions of older persons to society and to raise awareness about aging issues.',
      de: 'Ein Tag zur Anerkennung und Feier der Beiträge älterer Menschen zur Gesellschaft und zur Sensibilisierung für Altersfragen.',
      ua: 'День визнання та святкування внеску людей похилого віку в суспільство та підвищення обізнаності про проблеми старіння.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'We, 01.10.2025'
  },
  {
    id: 9,
    date: '2025-10-04',
    title: {
      en: '🐾 World Animal Day',
      de: '🐾 Welttierschutztag',
      ua: '🐾 Всесвітній день тварин'
    },
    description: {
      en: 'A day to celebrate animal life in all its forms and to raise awareness about animal welfare and protection.',
      de: 'Ein Tag zur Feier des Tierlebens in all seinen Formen und zur Sensibilisierung für Tierschutz und -wohl.',
      ua: 'День святкування життя тварин у всіх його формах та підвищення обізнаності про добробут і захист тварин.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'Sa, 04.10.2025'
  },
  {
    id: 10,
    date: '2025-10-05',
    title: {
      en: '👩‍🏫 World Teachers\' Day',
      de: '👩‍🏫 Welttag der Lehrer',
      ua: '👩‍🏫 Всесвітній день учителя'
    },
    description: {
      en: 'A day to celebrate teachers and their vital role in education and society development.',
      de: 'Ein Tag zur Feier der Lehrer und ihrer wichtigen Rolle in der Bildung und gesellschaftlichen Entwicklung.',
      ua: 'День святкування вчителів та їхньої важливої ролі в освіті та розвитку суспільства.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'Su, 05.10.2025'
  },
  {
    id: 11,
    date: '2025-10-09',
    title: {
      en: '📮 World Post Day',
      de: '📮 Weltposttag',
      ua: '📮 Всесвітній день пошти'
    },
    description: {
      en: 'A day to celebrate the importance of postal services in connecting people and businesses worldwide.',
      de: 'Ein Tag zur Feier der Bedeutung der Postdienste bei der Verbindung von Menschen und Unternehmen weltweit.',
      ua: 'День святкування важливості поштових послуг у з\'єднанні людей та бізнесу по всьому світу.'
    },
    type: 'holiday',
    priority: 'low',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'Th, 09.10.2025'
  },
  {
    id: 12,
    date: '2025-10-14',
    title: {
      en: '⚔️ Day of Ukrainian Cossacks',
      de: '⚔️ Tag der ukrainischen Kosaken',
      ua: '⚔️ День українського козацтва'
    },
    description: {
      en: 'A traditional Ukrainian holiday celebrating the heritage and traditions of Ukrainian Cossacks, celebrated alongside Defenders\' Day.',
      de: 'Ein traditioneller ukrainischer Feiertag zur Feier des Erbes und der Traditionen der ukrainischen Kosaken, gefeiert neben dem Tag der Verteidiger.',
      ua: 'Традиційне українське свято, що святкує спадщину та традиції українського козацтва, відзначається поруч з Днем захисників.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Mo, 14.10.2025'
  },
  {
    id: 13,
    date: '2025-10-20',
    title: {
      en: '📊 World Statistics Day',
      de: '📊 Welttag der Statistik',
      ua: '📊 Всесвітній день статистики'
    },
    description: {
      en: 'A day to celebrate the importance of statistics in decision-making and development (celebrated once every 5 years).',
      de: 'Ein Tag zur Feier der Bedeutung der Statistik bei Entscheidungsfindung und Entwicklung (alle 5 Jahre gefeiert).',
      ua: 'День святкування важливості статистики в прийнятті рішень та розвитку (відзначається раз на 5 років).'
    },
    type: 'holiday',
    priority: 'low',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'Su, 20.10.2025'
  },
  {
    id: 14,
    date: '2025-10-24',
    title: {
      en: '🌍 United Nations Day',
      de: '🌍 Tag der Vereinten Nationen',
      ua: '🌍 День Організації Об\'єднаних Націй (День ООН)'
    },
    description: {
      en: 'A day to celebrate the founding of the United Nations and its mission to promote peace, security, and cooperation among nations.',
      de: 'Ein Tag zur Feier der Gründung der Vereinten Nationen und ihrer Mission zur Förderung von Frieden, Sicherheit und Zusammenarbeit zwischen Nationen.',
      ua: 'День святкування заснування Організації Об\'єднаних Націй та її місії сприяння миру, безпеці та співпраці між націями.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'Fr, 24.10.2025'
  },
  {
    id: 15,
    date: '2025-10-27',
    title: {
      en: '📝 Day of Ukrainian Language and Writing',
      de: '📝 Tag der ukrainischen Sprache und Schrift',
      ua: '📝 День української мови та писемності'
    },
    description: {
      en: 'A Ukrainian national holiday celebrating the Ukrainian language, its history, and cultural significance.',
      de: 'Ein ukrainischer Nationalfeiertag zur Feier der ukrainischen Sprache, ihrer Geschichte und kulturellen Bedeutung.',
      ua: 'Українське національне свято, що святкує українську мову, її історію та культурне значення.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Mo, 27.10.2025'
  },
  {
    id: 16,
    date: '2025-10-28',
    title: {
      en: '🏆 Day of Liberation of Ukraine from Fascist Invaders',
      de: '🏆 Tag der Befreiung der Ukraine von faschistischen Invasoren',
      ua: '🏆 День визволення України від фашистських загарбників'
    },
    description: {
      en: 'An important Ukrainian holiday commemorating the liberation of Ukraine from fascist occupation (not a public holiday).',
      de: 'Ein wichtiger ukrainischer Feiertag zur Erinnerung an die Befreiung der Ukraine von der faschistischen Besetzung (kein Feiertag).',
      ua: 'Важливе українське свято на честь визволення України від фашистської окупації (важливе, але не вихідний).'
    },
    type: 'holiday',
    priority: 'high',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Tu, 28.10.2025'
  },
  {
    id: 17,
    date: '2025-10-31',
    title: {
      en: '🎃 Halloween',
      de: '🎃 Halloween',
      ua: '🎃 Хелловін'
    },
    description: {
      en: 'An unofficial youth holiday celebrated with costumes, decorations, and festivities (unofficial, youth celebration).',
      de: 'Ein inoffizieller Jugendfeiertag mit Kostümen, Dekorationen und Festlichkeiten gefeiert (inoffiziell, Jugendfeier).',
      ua: 'Неофіційне молодіжне свято, що відзначається костюмами, прикрасами та святкуваннями (неофіційний, молодіжний).'
    },
    type: 'holiday',
    priority: 'low',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Worldwide',
    weekday: 'Fr, 31.10.2025'
  },
  {
    id: 25,
    date: '2025-11-01',
    title: {
      en: '🕯️ All Saints\' Day in Austria',
      de: '🕯️ Allerheiligen in Österreich',
      ua: '🕯️ День Всіх Святих в Австрії'
    },
    description: {
      en: 'November 1 in Austria is a public holiday and an important religious day. Many Austrians visit churches, remember the deceased, and honor traditions.\n\n📅 How it is celebrated:\n▫️November 1 — church visits, prayers for the saints.\n▫️November 2 — All Souls\' Day: trips to the cemetery, cleaning graves, lighting candles and lamps.\n\n🏘️ Local customs:\n▫️In some towns, pieces of bread are distributed to strangers.\n▫️On the shores, wreaths are floated for the drowned.\n▫️In Upper Austria, families gather to share traditional pastries and light candles in memory of their ancestors.',
      de: 'Der 1. November ist in Österreich ein gesetzlicher Feiertag und ein wichtiger religiöser Tag. Viele Österreicher besuchen Kirchen, gedenken der Verstorbenen und pflegen Traditionen.\n\n📅 Wie wird gefeiert:\n▫️1. November — Kirchenbesuche, Gebete für die Heiligen.\n▫️2. November — Allerseelen: Friedhofsbesuche, Gräberpflege, Anzünden von Kerzen und Lampen.\n\n🏘️ Lokale Bräuche:\n▫️In manchen Ortschaften werden Brotstücke an Fremde verteilt.\n▫️An Ufern werden Kränze für Ertrunkene ins Wasser gelegt.\n▫️In Oberösterreich versammeln sich Familien, um traditionelle Gebäck zu teilen und Kerzen zum Gedenken an ihre Vorfahren anzuzünden.',
      ua: '1 листопада в Австрії — держаний вихідний і важливий релігійний день. Багато австрійців відвідують церкви, пам\'ятають померлих і вшановують традиції.\n\n📅 Як відзначають:\n▫️1 листопада — відвідини храмів, молитви за святих.\n▫️2 листопада — День поминання мертвих: поїздки на кладовище, прибирання могил, запалювання свічок і лампадок.\n\n🏘️ Місцеві звичаї:\n▫️У деяких містечках роздають шматочки хліба незнайомцям.\n▫️На узбережжях пускають вінки за утоплених.\n▫️У Верхній Австрії сім\'ї збираються, щоб поділитися традиційними випічками та запалити свічки на згадку про предків.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Austria',
    weekday: 'Sa, 01.11.2025'
  },
  {
    id: 26,
    date: '2025-11-02',
    title: {
      en: '🕯️ All Souls\' Day',
      de: '🕯️ Allerseelen',
      ua: '🕯️ День поминання мертвих'
    },
    description: {
      en: 'All Souls\' Day is a day of remembrance for the deceased. People visit cemeteries, clean graves, light candles and lamps in memory of their loved ones.',
      de: 'Allerseelen ist ein Tag des Gedenkens an die Verstorbenen. Menschen besuchen Friedhöfe, pflegen Gräber, zünden Kerzen und Lampen zum Gedenken an ihre Liebsten an.',
      ua: 'День поминання мертвих — це день пам\'яті про померлих. Люди відвідують кладовища, прибирають могили, запалюють свічки і лампадки на згадку про близьких.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#e91e63',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Austria',
    weekday: 'Su, 02.11.2025'
  },
  {
    id: 28,
    date: '2025-11-03',
    title: {
      en: '🔧 Day of Engineer Troops of Ukraine',
      de: '🔧 Tag der Ingenieurtruppen der Ukraine',
      ua: '🔧 День інженерних військ України'
    },
    description: {
      en: 'Professional holiday honoring the engineer troops of the Armed Forces of Ukraine. These troops play a crucial role in military engineering, construction, and technical support.',
      de: 'Berufsfeiertag zu Ehren der Ingenieurtruppen der Streitkräfte der Ukraine. Diese Truppen spielen eine entscheidende Rolle bei militärischem Ingenieurwesen, Bau und technischer Unterstützung.',
      ua: 'Професійне свято на честь інженерних військ Збройних Сил України. Ці війська відіграють вирішальну роль у військово-інженерній справі, будівництві та технічній підтримці.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#1565c0',
    image: '/PCU.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Mo, 03.11.2025'
  },
  {
    id: 29,
    date: '2025-11-03',
    title: {
      en: '🚀 Day of Missile Forces and Artillery of Ukraine',
      de: '🚀 Tag der Raketentruppen und Artillerie der Ukraine',
      ua: '🚀 День ракетних військ і артилерії України'
    },
    description: {
      en: 'Professional holiday celebrating the missile forces and artillery units of the Armed Forces of Ukraine. These forces provide crucial firepower and strategic capabilities.',
      de: 'Berufsfeiertag zu Ehren der Raketentruppen und Artillerieeinheiten der Streitkräfte der Ukraine. Diese Kräfte bieten entscheidende Feuerkraft und strategische Fähigkeiten.',
      ua: 'Професійне свято на честь ракетних військ і артилерійських підрозділів Збройних Сил України. Ці сили забезпечують вирішальну вогневу міць і стратегічні можливості.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#1565c0',
    image: '/PCU.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Mo, 03.11.2025'
  },
  {
    id: 30,
    date: '2025-11-04',
    title: {
      en: '🚂 Day of Railway Worker of Ukraine',
      de: '🚂 Tag der Eisenbahnarbeiter der Ukraine',
      ua: '🚂 День залізничника України'
    },
    description: {
      en: 'Professional holiday honoring railway workers in Ukraine. This day recognizes the important role of railway transportation in the country\'s infrastructure and economy.',
      de: 'Berufsfeiertag zu Ehren der Eisenbahnarbeiter in der Ukraine. Dieser Tag würdigt die wichtige Rolle des Eisenbahnverkehrs in der Infrastruktur und Wirtschaft des Landes.',
      ua: 'Професійне свято на честь залізничників України. Цей день визнає важливу роль залізничного транспорту в інфраструктурі та економіці країни.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#4caf50',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Tu, 04.11.2025'
  },
  {
    id: 31,
    date: '2025-11-06',
    title: {
      en: '🏛️ Day of Liberation of Kyiv from Nazi Invaders',
      de: '🏛️ Tag der Befreiung Kiews von den Nazi-Invasoren',
      ua: '🏛️ День звільнення Києва від німецько-фашистських загарбників'
    },
    description: {
      en: 'Commemorative day marking the liberation of Kyiv from Nazi occupation during World War II. This day honors the courage and sacrifice of those who fought for freedom.',
      de: 'Gedenktag zur Befreiung Kiews von der Nazi-Besetzung während des Zweiten Weltkriegs. Dieser Tag ehrt den Mut und das Opfer derer, die für die Freiheit kämpften.',
      ua: 'Пам\'ятний день, що відзначає звільнення Києва від нацистської окупації під час Другої світової війни. Цей день вшановує мужність і жертву тих, хто боровся за свободу.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#1565c0',
    image: '/PCU.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Th, 06.11.2025'
  },
  {
    id: 32,
    date: '2025-11-09',
    title: {
      en: '🎭 All-Ukrainian Day of Culture Workers and Folk Art Masters',
      de: '🎭 Allukrainischer Tag der Kulturschaffenden und Volkskunstmeister',
      ua: '🎭 Всеукраїнський день працівників культури та майстрів народного мистецтва'
    },
    description: {
      en: 'Professional holiday celebrating culture workers and folk art masters in Ukraine. This day honors those who preserve and promote Ukrainian cultural heritage.',
      de: 'Berufsfeiertag zu Ehren der Kulturschaffenden und Volkskunstmeister in der Ukraine. Dieser Tag würdigt diejenigen, die das ukrainische Kulturerbe bewahren und fördern.',
      ua: 'Професійне свято на честь працівників культури та майстрів народного мистецтва в Україні. Цей день вшановує тих, хто зберігає та популяризує українську культурну спадщину.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#607d8b',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Su, 09.11.2025'
  },
  {
    id: 33,
    date: '2025-11-16',
    title: {
      en: '📻 Day of Radio, Television and Communication Workers of Ukraine',
      de: '📻 Tag der Radio-, Fernseh- und Kommunikationsarbeiter der Ukraine',
      ua: '📻 День працівників радіо, телебачення та зв\'язку України'
    },
    description: {
      en: 'Professional holiday honoring workers in radio, television, and communication sectors in Ukraine. This day recognizes their role in information dissemination and connectivity.',
      de: 'Berufsfeiertag zu Ehren der Arbeiter in den Bereichen Radio, Fernsehen und Kommunikation in der Ukraine. Dieser Tag würdigt ihre Rolle bei der Informationsverbreitung und Konnektivität.',
      ua: 'Професійне свято на честь працівників радіо, телебачення та зв\'язку в Україні. Цей день визнає їхню роль у поширенні інформації та забезпеченні зв\'язку.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#4caf50',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Su, 16.11.2025'
  },
  {
    id: 34,
    date: '2025-11-18',
    title: {
      en: '🎖️ Day of Sergeant of the Armed Forces of Ukraine',
      de: '🎖️ Tag der Sergeanten der Streitkräfte der Ukraine',
      ua: '🎖️ День сержанта Збройних Сил України'
    },
    description: {
      en: 'Professional holiday honoring sergeants of the Armed Forces of Ukraine. Sergeants play a crucial leadership role in military units and operations.',
      de: 'Berufsfeiertag zu Ehren der Sergeanten der Streitkräfte der Ukraine. Sergeanten spielen eine entscheidende Führungsrolle in militärischen Einheiten und Operationen.',
      ua: 'Професійне свято на честь сержантів Збройних Сил України. Сержанти відіграють вирішальну роль у керівництві військовими підрозділами та операціями.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#1565c0',
    image: '/PCU.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Tu, 18.11.2025'
  },
  {
    id: 35,
    date: '2025-11-21',
    title: {
      en: '🕊️ Day of Dignity and Freedom',
      de: '🕊️ Tag der Würde und Freiheit',
      ua: '🕊️ День гідності та свободи'
    },
    description: {
      en: 'National holiday commemorating the Euromaidan Revolution of 2013-2014. This day honors the courage and sacrifice of those who fought for dignity, freedom, and European values.',
      de: 'Nationalfeiertag zur Erinnerung an die Euromaidan-Revolution von 2013-2014. Dieser Tag ehrt den Mut und das Opfer derer, die für Würde, Freiheit und europäische Werte kämpften.',
      ua: 'Національне свято на згадку про Революцію гідності 2013-2014 років. Цей день вшановує мужність і жертву тих, хто боровся за гідність, свободу та європейські цінності.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#1565c0',
    image: '/PCU.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Fr, 21.11.2025'
  },
  {
    id: 36,
    date: '2025-11-23',
    title: {
      en: '🕯️ Day of Remembrance for Holodomor Victims',
      de: '🕯️ Tag des Gedenkens an die Opfer des Holodomor',
      ua: '🕯️ День пам\'яті жертв Голодомору'
    },
    description: {
      en: 'Memorial day honoring the victims of the Holodomor (Great Famine) of 1932-1933. This day commemorates one of the greatest tragedies in Ukrainian history.',
      de: 'Gedenktag zu Ehren der Opfer des Holodomor (Große Hungersnot) von 1932-1933. Dieser Tag gedenkt einer der größten Tragödien der ukrainischen Geschichte.',
      ua: 'День пам\'яті на честь жертв Голодомору 1932-1933 років. Цей день вшановує одну з найбільших трагедій в історії України.'
    },
    type: 'holiday',
    priority: 'high',
    color: '#e91e63',
    image: '/PCU.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Su, 23.11.2025'
  },
  {
    id: 37,
    date: '2025-11-27',
    title: {
      en: '🔬 Day of Foundation of the National Academy of Sciences of Ukraine',
      de: '🔬 Tag der Gründung der Nationalen Akademie der Wissenschaften der Ukraine',
      ua: '🔬 День заснування Національної академії наук України'
    },
    description: {
      en: 'Commemorative day marking the foundation of the National Academy of Sciences of Ukraine. This day honors the contributions of Ukrainian scientists to world knowledge.',
      de: 'Gedenktag zur Gründung der Nationalen Akademie der Wissenschaften der Ukraine. Dieser Tag würdigt die Beiträge ukrainischer Wissenschaftler zum Weltwissen.',
      ua: 'Пам\'ятний день заснування Національної академії наук України. Цей день вшановує внесок українських вчених у світові знання.'
    },
    type: 'holiday',
    priority: 'medium',
    color: '#4caf50',
    image: '/TagsKalendar.png',
    time: 'All day',
    location: 'Ukraine',
    weekday: 'Th, 27.11.2025'
  },
  {
    id: 38,
    date: '2025-10-30',
    title: {
      en: '🎭 The Addams Family - Das Musical',
      de: '🎭 The Addams Family - Das Musical',
      ua: '🎭 Сімʼя Аддамсів - Мюзикл'
    },
    description: {
      en: 'Join us for an unforgettable musical evening with "The Addams Family - Das Musical" at Altes Theater Steyr. A spectacular production featuring iconic characters: Morticia, Gomez, Wednesday, Pugsley, Uncle Fester, and Lurch. Book your tickets now through oeticket.',
      de: 'Erleben Sie einen unvergesslichen Musical-Abend mit "The Addams Family - Das Musical" im Alten Theater Steyr. Eine spektakuläre Produktion mit ikonischen Charakteren: Morticia, Gomez, Wednesday, Pugsley, Onkel Fester und Lurch. Buchen Sie jetzt Ihre Tickets über oeticket.',
      ua: 'Приєднуйтеся до незабутнього музичного вечора "Сімʼя Аддамсів - Мюзикл" у Старому театрі Штайєр. Вражаюча постановка з культовими персонажами: Мортісія, Гомес, Венздей, Пугслі, дядько Фестер і Лурч. Замовте квитки зараз через oeticket.'
    },
    type: 'cultural',
    priority: 'high',
    color: '#9c27b0',
    image: '/Addams_Family.png',
    time: '19:00',
    location: 'Altes Theater Steyr',
    weekday: 'Th, 30.10.2025'
  },
  {
    id: 39,
    date: '2025-10-31',
    title: {
      en: '🎭 The Addams Family - Das Musical',
      de: '🎭 The Addams Family - Das Musical',
      ua: '🎭 Сімʼя Аддамсів - Мюзикл'
    },
    description: {
      en: 'Join us for an unforgettable musical evening with "The Addams Family - Das Musical" at Altes Theater Steyr. A spectacular production featuring iconic characters: Morticia, Gomez, Wednesday, Pugsley, Uncle Fester, and Lurch. Book your tickets now through oeticket.',
      de: 'Erleben Sie einen unvergesslichen Musical-Abend mit "The Addams Family - Das Musical" im Alten Theater Steyr. Eine spektakuläre Produktion mit ikonischen Charakteren: Morticia, Gomez, Wednesday, Pugsley, Onkel Fester und Lurch. Buchen Sie jetzt Ihre Tickets über oeticket.',
      ua: 'Приєднуйтеся до незабутнього музичного вечора "Сімʼя Аддамсів - Мюзикл" у Старому театрі Штайєр. Вражаюча постановка з культовими персонажами: Мортісія, Гомес, Венздей, Пугслі, дядько Фестер і Лурч. Замовте квитки зараз через oeticket.'
    },
    type: 'cultural',
    priority: 'high',
    color: '#9c27b0',
    image: '/Addams_Family.png',
    time: '19:00',
    location: 'Altes Theater Steyr',
    weekday: 'Fr, 31.10.2025'
  },
  {
    id: 40,
    date: '2025-09-10',
    title: {
      en: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      de: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      ua: '🧘 Духовність: Залишитись у спокої та набратися сил'
    },
    description: {
      en: 'Meditation, Impulses, Silence with Heidi Staltner-Kix. An evening of meditation and spiritual impulses to find peace and recharge. Join us for a moment of silence and reflection.',
      de: 'Meditation, Impulse, Stille mit Heidi Staltner-Kix. Ein Abend der Meditation und spirituellen Impulse, um zur Ruhe zu kommen und aufzutanken. Kommen Sie zu einem Moment der Stille und Besinnung.',
      ua: 'Медитація, Імпульси, Тиша з Гайді Штальтнер-Кікс. Вечір медитації та духовних імпульсів для знаходження миру та наповнення енергією. Приєднуйтеся до моменту тиші та рефлексії.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#673ab7',
    image: '/Spiritualitat.png',
    time: '18:15 - 19:30',
    location: 'Marienkirche Sakristei',
    weekday: 'We, 10.09.2025'
  },
  {
    id: 41,
    date: '2025-10-08',
    title: {
      en: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      de: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      ua: '🧘 Духовність: Залишитись у спокої та набратися сил'
    },
    description: {
      en: 'Meditation, Impulses, Silence with Heidi Staltner-Kix. An evening of meditation and spiritual impulses to find peace and recharge. Join us for a moment of silence and reflection.',
      de: 'Meditation, Impulse, Stille mit Heidi Staltner-Kix. Ein Abend der Meditation und spirituellen Impulse, um zur Ruhe zu kommen und aufzutanken. Kommen Sie zu einem Moment der Stille und Besinnung.',
      ua: 'Медитація, Імпульси, Тиша з Гайді Штальтнер-Кікс. Вечір медитації та духовних імпульсів для знаходження миру та наповнення енергією. Приєднуйтеся до моменту тиші та рефлексії.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#673ab7',
    image: '/Spiritualitat.png',
    time: '18:15 - 19:30',
    location: 'Marienkirche Sakristei',
    weekday: 'We, 08.10.2025'
  },
  {
    id: 42,
    date: '2025-11-08',
    title: {
      en: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      de: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      ua: '🧘 Духовність: Залишитись у спокої та набратися сил'
    },
    description: {
      en: 'Meditation, Impulses, Silence with Heidi Staltner-Kix. An evening of meditation and spiritual impulses to find peace and recharge. Join us for a moment of silence and reflection.',
      de: 'Meditation, Impulse, Stille mit Heidi Staltner-Kix. Ein Abend der Meditation und spirituellen Impulse, um zur Ruhe zu kommen und aufzutanken. Kommen Sie zu einem Moment der Stille und Besinnung.',
      ua: 'Медитація, Імпульси, Тиша з Гайді Штальтнер-Кікс. Вечір медитації та духовних імпульсів для знаходження миру та наповнення енергією. Приєднуйтеся до моменту тиші та рефлексії.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#673ab7',
    image: '/Spiritualitat.png',
    time: '18:15 - 19:30',
    location: 'Marienkirche Sakristei',
    weekday: 'Sa, 08.11.2025'
  },
  {
    id: 43,
    date: '2026-02-11',
    title: {
      en: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      de: '🧘 Spiritualität: Zur Ruhe kommen & auftanken',
      ua: '🧘 Духовність: Залишитись у спокої та набратися сил'
    },
    description: {
      en: 'Meditation, Impulses, Silence with Heidi Staltner-Kix. An evening of meditation and spiritual impulses to find peace and recharge. Join us for a moment of silence and reflection.',
      de: 'Meditation, Impulse, Stille mit Heidi Staltner-Kix. Ein Abend der Meditation und spirituellen Impulse, um zur Ruhe zu kommen und aufzutanken. Kommen Sie zu einem Moment der Stille und Besinnung.',
      ua: 'Медитація, Імпульси, Тиша з Гайді Штальтнер-Кікс. Вечір медитації та духовних імпульсів для знаходження миру та наповнення енергією. Приєднуйтеся до моменту тиші та рефлексії.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#673ab7',
    image: '/Spiritualitat.png',
    time: '18:15 - 19:30',
    location: 'Marienkirche Sakristei',
    weekday: 'We, 11.02.2026'
  },
  {
    id: 44,
    date: '2025-10-09',
    title: {
      en: '🤝 MEHRsamkeit - Wir sind da - Gemeinschaftscafé',
      de: '🤝 MEHRsamkeit - Wir sind da - Gemeinschaftscafé',
      ua: '🤝 MEHRsamkeit - Ми тут - Кавʼярня спільноти'
    },
    description: {
      en: 'Joyful moments lurk everywhere, it is especially beautiful to experience community. Bring your friends or acquaintances or get to know new people in a relaxed get-together. Every Thursday from 9:30 - 11:00 AM. In cooperation with Caritas, BEZIEHUNGleben, Projekt EULE.',
      de: 'Beglückende Momente lauern überall, besonders schön ist es Gemeinschaft zu erleben. Nehmen Sie Freund*innen oder Ihre Bekannten mit oder lernen Sie neue Menschen kennen beim ungezwungenen Beisammensein. Jeden Donnerstag von 9:30 - 11:00 Uhr. Kooperation mit Caritas, BEZIEHUNGleben, Projekt EULE.',
      ua: 'Щасливі моменти чекають всюди, особливо прекрасно переживати спільноту. Візьміть з собою друзів або знайомих або познайомтесь з новими людьми в розслабленій атмосфері. Кожний четвер з 9:30 - 11:00. У співпраці з Caritas, BEZIEHUNGleben, Projekt EULE.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#ff9800',
    image: '/Lebensorierung.png',
    time: '9:30 - 11:00',
    location: 'Dominikanerhaus',
    weekday: 'Th, 09.10.2025'
  },
  {
    id: 45,
    date: '2025-11-06',
    title: {
      en: '🤝 MEHRsamkeit - Wir sind da - Gemeinschaftscafé',
      de: '🤝 MEHRsamkeit - Wir sind da - Gemeinschaftscafé',
      ua: '🤝 MEHRsamkeit - Ми тут - Кавʼярня спільноти'
    },
    description: {
      en: 'Joyful moments lurk everywhere, it is especially beautiful to experience community. Bring your friends or acquaintances or get to know new people in a relaxed get-together. Every Thursday from 9:30 - 11:00 AM. In cooperation with Caritas, BEZIEHUNGleben, Projekt EULE.',
      de: 'Beglückende Momente lauern überall, besonders schön ist es Gemeinschaft zu erleben. Nehmen Sie Freund*innen oder Ihre Bekannten mit oder lernen Sie neue Menschen kennen beim ungezwungenen Beisammensein. Jeden Donnerstag von 9:30 - 11:00 Uhr. Kooperation mit Caritas, BEZIEHUNGleben, Projekt EULE.',
      ua: 'Щасливі моменти чекають всюди, особливо прекрасно переживати спільноту. Візьміть з собою друзів або знайомих або познайомтесь з новими людьми в розслабленій атмосфері. Кожний четвер з 9:30 - 11:00. У співпраці з Caritas, BEZIEHUNGleben, Projekt EULE.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#ff9800',
    image: '/Lebensorierung.png',
    time: '9:30 - 11:00',
    location: 'Dominikanerhaus',
    weekday: 'Th, 06.11.2025'
  },
  {
    id: 46,
    date: '2025-12-04',
    title: {
      en: '🤝 MEHRsamkeit - Wir sind da - Gemeinschaftscafé',
      de: '🤝 MEHRsamkeit - Wir sind da - Gemeinschaftscafé',
      ua: '🤝 MEHRsamkeit - Ми тут - Кавʼярня спільноти'
    },
    description: {
      en: 'Joyful moments lurk everywhere, it is especially beautiful to experience community. Bring your friends or acquaintances or get to know new people in a relaxed get-together. Every Thursday from 9:30 - 11:00 AM. In cooperation with Caritas, BEZIEHUNGleben, Projekt EULE.',
      de: 'Beglückende Momente lauern überall, besonders schön ist es Gemeinschaft zu erleben. Nehmen Sie Freund*innen oder Ihre Bekannten mit oder lernen Sie neue Menschen kennen beim ungezwungenen Beisammensein. Jeden Donnerstag von 9:30 - 11:00 Uhr. Kooperation mit Caritas, BEZIEHUNGleben, Projekt EULE.',
      ua: 'Щасливі моменти чекають всюди, особливо прекрасно переживати спільноту. Візьміть з собою друзів або знайомих або познайомтесь з новими людьми в розслабленій атмосфері. Кожний четвер з 9:30 - 11:00. У співпраці з Caritas, BEZIEHUNGleben, Projekt EULE.'
    },
    type: 'cultural',
    priority: 'medium',
    color: '#ff9800',
    image: '/Lebensorierung.png',
    time: '9:30 - 11:00',
    location: 'Dominikanerhaus',
    weekday: 'Th, 04.12.2025'
  },
  {
    id: 47,
    date: '2025-11-06',
    title: {
      en: '🧵 Knitting against social coldness - A small contribution to joy',
      de: '🧵 Stricken gegen soziale Kälte - Ein kleiner Beitrag zur Freude',
      ua: '🧵 В`язання проти соціальної холодності - Невеликий внесок у радість'
    },
    description: {
      en: 'As in previous years, we will again knit together gloves, hats, scarves, socks, etc. for people in difficult life situations. Everyone who enjoys knitting and wants to bring joy to others is cordially invited. You can also bring knitted items or yarn. Free participation. All dates: 6.11; 20.11; 27.11; 4.12 - can be attended individually.',
      de: 'Wie in den vergangenen Jahren stricken wir wieder gemeinsam Handschuhe, Mützen, Schals, Socken usw. für Menschen in schwierigen Lebenssituationen. Alle, die gerne stricken und anderen Freude bereiten möchten, sind herzlich eingeladen. Gerne können Sie auch bereits Gestricktes oder Wolle mitbringen. Kostenlos.',
      ua: 'Як і в попередні роки, ми знову в`яжемо разом рукавички, шапки, шарфи, шкарпетки тощо для людей, які опинилися у складній життєвій ситуації. Всі, хто отримує задоволення від в`язання і хоче подарувати радість іншим, щиро запрошуються взяти участь. Можна також принести зв`язані речі або пряжу. Безкоштовно. Всі дати: 6.11; 20.11; 27.11; 4.12 — можна відвідувати окремо.'
    },
    type: 'hobby',
    priority: 'medium',
    color: '#ff6b6b',
    image: '/Stricken.png',
    time: '14:00 - 15:00',
    location: 'Dominikanerhaus',
    weekday: 'Th, 06.11.2025'
  },
  {
    id: 48,
    date: '2025-11-20',
    title: {
      en: '🧵 Knitting against social coldness - A small contribution to joy',
      de: '🧵 Stricken gegen soziale Kälte - Ein kleiner Beitrag zur Freude',
      ua: '🧵 В`язання проти соціальної холодності - Невеликий внесок у радість'
    },
    description: {
      en: 'As in previous years, we will again knit together gloves, hats, scarves, socks, etc. for people in difficult life situations. Everyone who enjoys knitting and wants to bring joy to others is cordially invited. You can also bring knitted items or yarn. Free participation.',
      de: 'Wie in den vergangenen Jahren stricken wir wieder gemeinsam Handschuhe, Mützen, Schals, Socken usw. für Menschen in schwierigen Lebenssituationen. Alle, die gerne stricken und anderen Freude bereiten möchten, sind herzlich eingeladen. Gerne können Sie auch bereits Gestricktes oder Wolle mitbringen. Kostenlos.',
      ua: 'Як і в попередні роки, ми знову в`яжемо разом рукавички, шапки, шарфи, шкарпетки тощо для людей, які опинилися у складній життєвій ситуації. Всі, хто отримує задоволення від в`язання і хоче подарувати радість іншим, щиро запрошуються взяти участь. Можна також принести зв`язані речі або пряжу. Безкоштовно.'
    },
    type: 'hobby',
    priority: 'medium',
    color: '#ff6b6b',
    image: '/Stricken.png',
    time: '14:00 - 15:00',
    location: 'Dominikanerhaus',
    weekday: 'Th, 20.11.2025'
  },
  {
    id: 49,
    date: '2025-11-27',
    title: {
      en: '🧵 Knitting against social coldness - A small contribution to joy',
      de: '🧵 Stricken gegen soziale Kälte - Ein kleiner Beitrag zur Freude',
      ua: '🧵 В`язання проти соціальної холодності - Невеликий внесок у радість'
    },
    description: {
      en: 'As in previous years, we will again knit together gloves, hats, scarves, socks, etc. for people in difficult life situations. Everyone who enjoys knitting and wants to bring joy to others is cordially invited. You can also bring knitted items or yarn. Free participation.',
      de: 'Wie in den vergangenen Jahren stricken wir wieder gemeinsam Handschuhe, Mützen, Schals, Socken usw. für Menschen in schwierigen Lebenssituationen. Alle, die gerne stricken und anderen Freude bereiten möchten, sind herzlich eingeladen. Gerne können Sie auch bereits Gestricktes oder Wolle mitbringen. Kostenlos.',
      ua: 'Як і в попередні роки, ми знову в`яжемо разом рукавички, шапки, шарфи, шкарпетки тощо для людей, які опинилися у складній життєвій ситуації. Всі, хто отримує задоволення від в`язання і хоче подарувати радість іншим, щиро запрошуються взяти участь. Можна також принести зв`язані речі або пряжу. Безкоштовно.'
    },
    type: 'hobby',
    priority: 'medium',
    color: '#ff6b6b',
    image: '/Stricken.png',
    time: '14:00 - 15:00',
    location: 'Dominikanerhaus',
    weekday: 'Th, 27.11.2025'
  },
  {
    id: 50,
    date: '2025-12-04',
    title: {
      en: '🧵 Knitting against social coldness - A small contribution to joy',
      de: '🧵 Stricken gegen soziale Kälte - Ein kleiner Beitrag zur Freude',
      ua: '🧵 В`язання проти соціальної холодності - Невеликий внесок у радість'
    },
    description: {
      en: 'As in previous years, we will again knit together gloves, hats, scarves, socks, etc. for people in difficult life situations. Everyone who enjoys knitting and wants to bring joy to others is cordially invited. You can also bring knitted items or yarn. Free participation.',
      de: 'Wie in den vergangenen Jahren stricken wir wieder gemeinsam Handschuhe, Mützen, Schals, Socken usw. für Menschen in schwierigen Lebenssituationen. Alle, die gerne stricken und anderen Freude bereiten möchten, sind herzlich eingeladen. Gerne können Sie auch bereits Gestricktes oder Wolle mitbringen. Kostenlos.',
      ua: 'Як і в попередні роки, ми знову в`яжемо разом рукавички, шапки, шарфи, шкарпетки тощо для людей, які опинилися у складній життєвій ситуації. Всі, хто отримує задоволення від в`язання і хоче подарувати радість іншим, щиро запрошуються взяти участь. Можна також принести зв`язані речі або пряжу. Безкоштовно.'
    },
    type: 'hobby',
    priority: 'medium',
    color: '#ff6b6b',
    image: '/Stricken.png',
    time: '14:00 - 15:00',
    location: 'Dominikanerhaus',
    weekday: 'Th, 04.12.2025'
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
  celebration: { label: { en: 'Celebration', de: 'Feier', ua: 'Святкування' }, color: '#ff5722' },
  holiday: { label: { en: 'Holiday', de: 'Feiertag', ua: 'Свято' }, color: '#e91e63' }
};

// Приоритеты событий
export const eventPriorities = {
  high: { label: { en: 'High', de: 'Hoch', ua: 'Високий' }, color: '#f44336' },
  medium: { label: { en: 'Medium', de: 'Mittel', ua: 'Середній' }, color: '#ff9800' },
  low: { label: { en: 'Low', de: 'Niedrig', ua: 'Низький' }, color: '#4caf50' }
}; 