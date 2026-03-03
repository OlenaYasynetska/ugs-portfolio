import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import freeFlagsImg from '../../assets/free_flags.png';
import diolomImg from '../../assets/diolom.png';
import busImg from '../../assets/bus_sonne.png';
import etiasImg from '../../assets/Home/ETIAS.png';
import hmtImg from '../../assets/Info_Center/HMT.png';
import { useModalContent } from '../../hooks';
import { news } from '../../data/db';

const InfoCenter = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showFullDiplomaText, setShowFullDiplomaText] = useState(false);
  const [showFullEuText, setShowFullEuText] = useState(false);
  const { getModalContent } = useModalContent();

  // Определяем размер экрана
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Функция для получения сокращенного текста EU поста
  const getEuText = () => {
    const fullText = t('eu_protection_description') || 'Рада Європейського Союзу схвалила рекомендацію щодо поетапного виходу з режиму тимчасового захисту, який нині діє для українців, переміщених війною, та продовжений до 4 березня 2027 року.\n\nРекомендації включають:\n• Надання національних дозволів на проживання тим, хто працює, навчається, перебуває в сім\'ї або відповідає іншим встановленим умовам.\n• Можливість переходу до статусів за законами ЄС, особливо для висококваліфікованих фахівців.\n• Організацію добровільного повернення до України, коли це дозволяє ситуація, з підтримкою та скоординованими умовами між державами-членами.\n• Зобов\'язання інформувати переміщених осіб про їх поточні права, як зміняться пільги та що відбудеться після виходу з тимчасового захисту.\n\nУ комюніке ЄС підкреслюється, що ця ініціатива не спрямована на прискорення припинення захисту, а скоріше на підготовку інфраструктури та правової бази для забезпечення нормативно правильного, справедливого та поступового переходу від тимчасового захисту до більш постійних умов.';
    
    if (showFullEuText) {
      return fullText;
    }
    
    // Показываем только первые 300 символов
    return fullText.substring(0, 300) + '...';
  };

  // Функция для получения сокращенного текста диплома
  const getDiplomaText = () => {
    const fullText = news.find(item => item.id === 45)?.text[lang] || 'Щоб отримати дублікат диплому в Україні, необхідно подати письмову заяву до закладу вищої освіти, що видав документ, або його правонаступника, вказавши причину втрати та особисті дані. Якщо виш реорганізовано чи ліквідовано, звертатися слід до його правонаступника. У разі відсутності правонаступника, або якщо заклад не здійснює діяльність, заяву подають до МОН. Також існує можливість отримати електронну копію диплома через портал Єдиної державної електронної бази з питань освіти (ЄДЕБО).\n\nВажливі кроки для отримання дубліката документу про освіту:\n\n1. Зверніться до закладу вищої освіти:\nПодайте письмову заяву до університету, який видав вам диплом.\n\n2. Перевірте правонаступника:\nЯкщо ваш виш реорганізували, дізнайтеся про його правонаступника та зверніться до нього.\n\n3. Подайте заяву:\nУ заяві вкажіть свої ПІБ, дату народження, місце проживання, контактний телефон, назву ЗВО, дату закінчення, назву документа, дублікат якого замовляєте, причину замовлення, а також надайте згоду на обробку персональних даних.\n\n4. Отримайте архівну довідку (за потреби):\nЯкщо виш не має даних у ЄДЕБО, зверніться до архіву університету.\n\n5. Зверніться до МОН (за потреби):\nЯкщо немає правонаступника, або якщо інформація про диплом відсутня в ЄДЕБО, зверніться до Міністерства освіти і науки України.\n\nОтримання електронної копії через портал ЄДЕБО:\n\n1. Зайдіть на портал ЄДЕБО:\nВідкрийте сторінку ЄДИНА ДЕРЖАВНА ЕЛЕКТРОННА БАЗА з питань ОСВІТИ.\n\n2. Оберіть сервіс підпису:\nВиберіть функцію "Загальний доступ до персональних даних" або відповідний розділ, якщо він існує.\n\n3. Пройдіть ідентифікацію:\nАвторизуйтеся через "Дія.Підпис" або іншу систему ідентифікації.\n\n4. Отримайте документ:\nНакладіть електронний підпис на електронну копію документа та отримайте її.\n\nКорисні поради щодо отримання документу про освіту:\n\n• Документи, видані до 2000 року:\nЯкщо диплом виданий до 2000 року, інформація про нього може бути відсутня в ЄДЕБО. У такому разі вам знадобиться звернутися до архіву вишу або подати заяву до суду.\n\n• Плата за послугу:\nВартість виготовлення дубліката встановлюється відповідним навчальним закладом або Міністерством освіти і науки України.\n\nЩоб отримати дублікат документа про вищу освіту та/або додатка до нього, треба подати письмову заяву до вишу, який видав документ. Це можна зробити особисто або через уповноваженого представника. Відповідне роз\'яснення надає МОН у зв\'язку з численними зверненнями громадян про те, як отримати дублікат диплома.\n\nЯкщо заклад, де Ви навчалися, реорганізували, то звернутися треба до його правонаступника. Йдеться про випадки приєднання, злиття чи ліквідації ЗВО.\n\nЯкщо немає правонаступника або ЗВО не здійснює освітню діяльність (анульовано ліцензію, не було переміщено з непідконтрольної території), то заяву треба подавати до МОН. Міністерство визначить заклад, який видасть дублікат.\n\nУ заяві прохання зазначити:\n• ПІБ, дату народження;\n• серію та номер документа, що посвідчує особу і громадянство;\n• місце проживання, телефон;\n• найменування ЗВО та дату його закінчення;\n• назву документа, дублікат якого замовляється;\n• причину замовлення дубліката;\n• інші відомості, які вважаєте важливими;\n• згоду на обробку персональних даних.\n\nЗаяви до МОН подаються на адресу 01135, м. Київ, пр. Перемоги, 10 або на скриньку ez@mon.gov.ua\n\nІнформація в дублікаті відтворюється на основі тих даних, що містяться в Єдиній державній електронній базі з питань освіти (ЄДЕБО). Інформація про документи почала вноситися ЗВО в базу з 2000 року.\n\nЯкщо інформації про факт видачі диплома немає в ЄДЕБО, то виш може використати для підтвердження цього копії документа, а також архівну довідку про навчання та виписку з журналу видачі документів про вищу освіту чи акт знищення первинного документа про вищу освіту.\n\nЯкщо інформації про факт видачі диплома немає в ЄДЕБО, а також недоступні архіви ЗВО, то можна:\n• звернутися до суду – він має встановити юридичний факт здобуття відповідного ступеня чи рівня вищої освіти;\n• підтвердити отримання диплома офіційним листом відповідного компетентного органу, у якому підтверджено факт проставлення штампа «Apostille» МОН України або вчинення консульської легалізації.\n\nВідтак необхідно подати заяву до МОН для визначення закладу, який видасть дублікат. До заяви треба додати копію рішення суду чи офіційного листа щодо підтвердження апостилю.\n\nВАЖЛИВО! Якщо необхідно відновити диплом, отриманий на тимчасово окупованій ворогом та непідконтрольній Україні території АР Крим чи Донецької/Луганської областей до 2000 року, то процедура є такою ж, як описано вище. Якщо ж йдеться про виготовлення дубліката документа, виданого з 2000-го до 2014 року і внесеного в ЄДЕБО, то:\n• здобувачам з Криму – треба звернутися з письмовою заявою до МОН для визначення закладу, що видасть дублікат;\n• здобувачам з Донбасу – треба звернутися з письмовою заявою до правонаступника або ЗВО, переміщеного з непідконтрольної території. В іншому разі – подати письмову заяву до МОН для визначення закладу, що видасть дублікат.\n\nДо заяви необхідно додати копію первинного документа (диплом та додаток до нього).\n\nДокладну інформацію про процедуру виготовлення дублікатів також можна дізнатися у відповідному порядку.\n\nНагадуємо, що раніше на сайті МОН були розміщені відповіді на поширені запитання про вищу освіту. Переглянути їх можна за посиланням.';
    
    if (showFullDiplomaText) {
      return fullText;
    }
    
    // Показываем только первые 500 символов
    return fullText.substring(0, 500) + '...';
  };

  const getNmtTitle = () => {
    if (lang.startsWith('de')) {
      return 'NMT‑2026: Prüfungszentren im Ausland';
    }
    if (lang.startsWith('en')) {
      return 'NMT‑2026: Examination centres abroad';
    }
    return 'НМТ‑2026: екзаменаційні центри за кордоном';
  };

  const getNmtText = () => {
    if (lang.startsWith('de')) {
      return (
        'NMT‑2026: Prüfungszentren im Ausland\n\n' +
        'Das Ukrainische Zentrum für Bildungsqualitätsbewertung (УЦОЯО) hat die Liste der Länder veröffentlicht, in denen im Jahr 2026 temporäre Prüfungszentren für den Nationalen Multigegenstandstest (NMT) eingerichtet werden. Insgesamt haben bereits 30 Staaten zugestimmt, die Hauptsession des Tests durchzuführen – so können ukrainische Abiturientinnen und Abiturienten den NMT auch außerhalb der Ukraine ablegen.\n\n' +
        'Damit junge Ukrainerinnen und Ukrainer, die sich derzeit im Ausland aufhalten, ihr Recht auf ein Studium an ukrainischen Hochschulen wahrnehmen können, wird der Nationale Multigegenstandstest im Jahr 2026 nicht nur in der Ukraine, sondern ebenfalls in ausgewählten Prüfungszentren im Ausland organisiert.\n\n' +
        'Wichtige Termine für den NMT‑2026:\n' +
        '• Hauptsession: 20. Mai – 25. Juni\n' +
        '• Zusätzliche Session: 17. – 24. Juli\n' +
        '• Registrierung: 5. März – 2. April bzw. 11. – 16. Mai'
      );
    }
    if (lang.startsWith('en')) {
      return (
        'NMT‑2026: Examination centres abroad\n\n' +
        'The Ukrainian Center for Educational Quality Assessment (UCEQA) has published the list of countries where temporary examination centres for the National Multi‑Subject Test (NMT) will operate in 2026. In total, 30 countries have already agreed to host the main NMT session, giving Ukrainian applicants abroad the chance to take the test without travelling back to Ukraine.\n\n' +
        'To ensure that Ukrainian young people living outside the country can still apply to Ukrainian universities, the NMT‑2026 will be held not only in Ukraine but also in a network of examination centres abroad.\n\n' +
        'Key dates for NMT‑2026:\n' +
        '• Main session: 20 May – 25 June\n' +
        '• Additional session: 17 – 24 July\n' +
        '• Registration periods: 5 March – 2 April and 11 – 16 May'
      );
    }
    return (
      'НМТ‑2026: екзаменаційні центри за кордоном\n\n' +
      'Український центр оцінювання якості освіти (УЦОЯО) оприлюднив перелік країн, де у 2026 році працюватимуть тимчасові екзаменаційні центри національного мультипредметного тесту (НМТ). Уже 30 держав підтвердили готовність прийняти основну сесію, тож абітурієнти, які перебувають за кордоном, зможуть скласти НМТ без повернення в Україну.\n\n' +
      'Щоб українська молодь, яка нині живе поза межами України, могла реально скористатися правом вступу до українських університетів, НМТ‑2026 проводитиметься не лише в Україні, а й у закордонних екзаменаційних центрах.\n\n' +
      'Важливі дати НМТ‑2026:\n' +
      '• Основна сесія: 20 травня – 25 червня\n' +
      '• Додаткова сесія: 17 – 24 липня\n' +
      '• Реєстрація: 5 березня – 2 квітня та 11 – 16 травня'
    );
  };


  const infoSections = [
    {
      id: 'basic-info',
      title: t('info_basic_title') || 'Основна інформація',
      icon: '📋',
      items: [
        { label: t('info_basic_1') || 'Реєстрація в Австрії', description: t('info_basic_1_desc') || 'Як зареєструватися в Австрії та отримати необхідні документи' },
        { label: t('info_basic_2') || 'Медичне страхування', description: t('info_basic_2_desc') || 'Система охорони здоров\'я та медичне страхування в Австрії' },
        { label: t('info_basic_3') || 'Робота та освіта', description: t('info_basic_3_desc') || 'Можливості працевлаштування та освіти для українців' },
        { label: t('info_basic_4') || 'Банківські послуги', description: t('info_basic_4_desc') || 'Як відкрити рахунок та користуватися банківськими послугами' }
      ]
    },
    {
      id: 'documents',
      title: t('info_documents_title') || 'Документи та посвідчення',
      icon: '📄',
      items: [
        { label: t('info_documents_1') || 'Тимчасовий захист', description: t('info_documents_1_desc') || 'Як отримати та продовжити статус тимчасового захисту' },
        { label: t('info_documents_2') || 'Документи для роботи', description: t('info_documents_2_desc') || 'Необхідні документи для працевлаштування' },
        { label: t('info_documents_3') || 'Водійські права', description: t('info_documents_3_desc') || 'Обмін та використання водійських прав' },
        { label: t('info_documents_4') || 'Свідоцтва про освіту', description: t('info_documents_4_desc') || 'Визнання українських свідоцтв про освіту' }
      ]
    },
    {
      id: 'social-services',
      title: t('info_social_title') || 'Соціальні послуги',
      icon: '🤝',
      items: [
        { label: t('info_social_1') || 'Соціальна допомога', description: t('info_social_1_desc') || 'Види соціальної підтримки та як їх отримати' },
        { label: t('info_social_2') || 'Житло', description: t('info_social_2_desc') || 'Пошук житла та житлові програми' },
        { label: t('info_social_3') || 'Мовні курси', description: t('info_social_3_desc') || 'Безкоштовні курси німецької мови' },
        { label: t('info_social_4') || 'Психологічна допомога', description: t('info_social_4_desc') || 'Підтримка для тих, хто потребує психологічної допомоги' }
      ]
    }
  ];

  return (
    <div
      ref={(el) => {
        if (el && window.location.hash === '#transport-service') {
          el
            .querySelector('#transport-service')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '2rem 1rem',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Заголовок страницы */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            🏛️ {t('info_center_title') || 'Інфоцентр'}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#7f8c8d',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t('info_center_subtitle') || 'Вся необхідна інформація для українців в Австрії'}
          </p>
        </div>

        {/* Пост про ЕС и защиту украинцев */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: isMobile ? 'center' : 'flex-start',
          gap: '2rem',
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <img 
            src={freeFlagsImg} 
            alt="EU Protection Status" 
            style={{ 
              maxWidth: 300, 
              width: '100%', 
              height: 'auto', 
              borderRadius: 12, 
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              flex: isMobile ? 'none' : '0 0 300px',
              alignSelf: isMobile ? 'center' : 'auto'
            }} 
          />
          <div style={{ 
            flex: 1, 
            minWidth: '300px',
            fontSize: '16px', 
            color: '#2c3e50', 
            lineHeight: '1.6' 
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1565c0',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              🇪🇺 {t('eu_protection_title')}
            </h2>
                   <div style={{ whiteSpace: 'pre-line' }}>
                     {getEuText()}
                   </div>
                   {!showFullEuText ? (
                     <button
                       onClick={() => setShowFullEuText(true)}
                       style={{
                         background: '#1976d2',
                         color: '#fff',
                         border: 'none',
                         borderRadius: '8px',
                         padding: '8px 16px',
                         fontSize: '14px',
                         fontWeight: '600',
                         cursor: 'pointer',
                         marginTop: '1rem',
                         boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                         transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.background = '#1565c0';
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.background = '#1976d2';
                       }}
                     >
                       {t('more_ellipsis')}
                     </button>
                   ) : (
                     <button
                       onClick={() => setShowFullEuText(false)}
                       style={{
                         background: '#1976d2',
                         color: '#fff',
                         border: 'none',
                         borderRadius: '8px',
                         padding: '8px 16px',
                         fontSize: '14px',
                         fontWeight: '600',
                         cursor: 'pointer',
                         marginTop: '1rem',
                         boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                         transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.background = '#1565c0';
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.background = '#1976d2';
                       }}
                     >
                       {t('back') || 'Назад'}
                     </button>
                   )}
          </div>
        </div>

        {/* Пост про НМТ‑2026 за кордоном */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: isMobile ? 'center' : 'flex-start',
          gap: '2rem',
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <img
            src={hmtImg}
            alt="NMT‑2026 abroad"
            style={{
              maxWidth: 300,
              width: '100%',
              height: 'auto',
              borderRadius: 12,
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              flex: isMobile ? 'none' : '0 0 300px',
              alignSelf: isMobile ? 'center' : 'auto'
            }}
          />
          <div style={{
            flex: 1,
            minWidth: '300px',
            fontSize: '16px',
            color: '#2c3e50',
            lineHeight: '1.6',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1565c0',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              🎓 {getNmtTitle()}
            </h2>
            <div style={{ whiteSpace: 'pre-line' }}>
              {getNmtText()}
            </div>
            <div>
              <a
                href="https://testportal.gov.ua/nmt-2026-de-bude-stvoreno-tymchasovi-ekzamenatsijni-tsentry-za-kordonom/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '999px',
                  background: '#1976d2',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  transition: 'background 0.2s ease, transform 0.1s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#1565c0';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#1976d2';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Mehr Informationen
              </a>
            </div>
          </div>
        </div>

        {/* Пост ETIAS — нове правило для поїздок у Європу */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: isMobile ? 'center' : 'flex-start',
          gap: '2rem',
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <img
            src={etiasImg}
            alt={t('etias_title')}
            style={{
              maxWidth: 400,
              width: '100%',
              height: 'auto',
              borderRadius: 12,
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              flex: isMobile ? 'none' : '0 0 300px',
              alignSelf: isMobile ? 'center' : 'auto'
            }}
          />
          <div style={{
            flex: 1,
            minWidth: '300px',
            fontSize: '16px',
            color: '#2c3e50',
            lineHeight: '1.6'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1565c0',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              🇪🇺 {t('etias_title')}
            </h2>
            <div style={{ whiteSpace: 'pre-line' }}>
              {t('etias_text')}
            </div>
          </div>
        </div>

        {/* Пост про дубликат диплома */}
        {(() => {
          const news45 = news.find(n => n.id === 45);
          return (
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: '2rem',
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <img
                src={diolomImg}
                alt="Diploma Duplicate"
                style={{
                  maxWidth: 300,
                  width: '100%',
                  height: 'auto',
                  borderRadius: 12,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  flex: isMobile ? 'none' : '0 0 300px',
                  alignSelf: isMobile ? 'center' : 'auto'
                }}
              />
              <div style={{
                flex: 1,
                minWidth: '300px',
                fontSize: '16px',
                color: '#2c3e50',
                lineHeight: '1.6'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#1565c0',
                  marginBottom: '1rem',
                  fontWeight: 'bold'
                }}>
                  🎓 {news45?.title[lang] || 'Як отримати дублікат диплому в Україні: покрокова інструкція'}
                </h2>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {getDiplomaText()}
                </div>
                {!showFullDiplomaText ? (
                  <button
                    onClick={() => setShowFullDiplomaText(true)}
                    style={{
                      background: '#1976d2',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginTop: '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#1565c0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#1976d2';
                    }}
                  >
                    {t('more_ellipsis')}
                  </button>
                ) : (
                  <button
                    onClick={() => setShowFullDiplomaText(false)}
                    style={{
                      background: '#1976d2',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginTop: '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#1565c0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#1976d2';
                    }}
                  >
                    {t('back') || 'Назад'}
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* Пост про TIN */}
        {(() => {
          const news25 = news.find(n => n.id === 25);
          return (
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              marginBottom: '3rem',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '16px',
                color: '#2c3e50',
                lineHeight: '1.6'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#1565c0',
                  marginBottom: '1rem',
                  fontWeight: 'bold'
                }}>
                  {news25?.title[lang] || '📌 Як дізнатися свій податковий номер (TIN) в Австрії?'}
                </h2>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {news25?.text[lang] || 'Податковий ідентифікаційний номер (TIN) в Австрії є аналогом українського індивідуального податкового коду. Цей номер необхідний у багатьох випадках, зокрема при відкритті банківських рахунків у країнах ЄС.\n\nБагато хто помилково вважає, що TIN присвоюють лише працюючим особам, однак це не відповідає дійсності — отримати його може кожен резидент.\n\nЯк перевірити свій TIN?\n\nВаріант 1. Через FinanzOnline\n• Увійдіть до особистого кабінету FinanzOnline.\n• Оберіть пункт «Подати податкову декларацію» за 2024 рік (або інший доступний період).\n• У відображених персональних даних ви побачите свій TIN у форматі: 00 000/0000.\n\nℹ️ Цей спосіб доступний лише тим, у кого є FinanzOnline. Якщо ви ще не маєте Austria ID, варто подбати про реєстрацію заздалегідь.\n\nВаріант 2. Через Finanzamt\n• Податковий номер можна уточнити, звернувшись безпосередньо до податкового органу: телефоном або письмовим запитом у Finanzamt.'}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Jaroslav Pupovych Transport */}
        <div
          id="transport-service"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: isMobile ? 'center' : 'stretch',
            gap: '2rem',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          <img
            src={busImg}
            alt={t('transport_service_image_alt', { defaultValue: 'Jaroslav Pupovych Transport' })}
            style={{
              width: '100%',
              maxWidth: 650,
              height: 'auto',
              borderRadius: 12,
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}
          />
          <div
            style={{
              flex: 1,
              minWidth: '300px',
              fontSize: '16px',
              color: '#2c3e50',
              lineHeight: '1.6',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <h2
              style={{
                fontSize: '1.8rem',
                color: '#1565c0',
                margin: 0,
                fontWeight: 'bold'
              }}
            >
              {t('transport_service_title', { defaultValue: 'Переїзд? Перевезення меблів? Немає проблем! 🚛' })}
            </h2>
            <div
              style={{ lineHeight: '1.6' }}
              dangerouslySetInnerHTML={{
                __html: t('transport_service_text', {
                  defaultValue: `Jaroslav Pupovych Transport – ваш партнер для перевезень до 3,5 т<br/>4400 Штайр<br/><br/>Наші послуги:<br/>- Побутові переїзди<br/>- Перевезення меблів<br/>- Гнучкий підбір часу ⏰<br/>- Допомога з завантаженням та розвантаженням за бажанням 📦<br/>- Чесні ціни та швидке виконання<br/><br/>Зв’яжіться з нами зараз і сплануйте свій переїзд без стресу!<br/>Тел.:<br/>+4368181799539<br/>E-mail:<br/>popovych.transport@gmail.com`
                })
              }}
            />
          </div>
        </div>

        {/* Секции информации */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {infoSections.map((section) => (
            <div
              key={section.id}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: isMobile ? 'center' : 'flex-start',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  marginRight: '1rem'
                }}>
                  {section.icon}
                </span>
                <h2 style={{
                  fontSize: '1.5rem',
                  color: '#2c3e50',
                  margin: 0,
                  fontWeight: 'bold'
                }}>
                  {section.title}
                </h2>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {section.items.map((item, index) => {
                  const content = (
                    <>
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: '#2c3e50',
                        margin: '0 0 0.5rem 0',
                        fontWeight: '600'
                      }}>
                        {item.label}
                      </h3>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#7f8c8d',
                        margin: 0,
                        lineHeight: '1.5'
                      }}>
                        {item.description}
                      </p>
                    </>
                  );

                  return (
                    <div
                      key={index}
                      onClick={() => openModal(item)}
                      style={{
                        textDecoration: 'none',
                        display: 'block',
                        padding: '1rem',
                        background: 'rgba(173, 216, 230, 0.3)',
                        borderRadius: '8px',
                        border: '1px solid rgba(52, 152, 219, 0.2)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Контактная информация */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            📞 {t('info_contact_title') || 'Контакти для допомоги'}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(46, 204, 113, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(46, 204, 113, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#27ae60',
                margin: '0 0 1rem 0',
                fontWeight: 'bold'
              }}>
                🇺🇦 Посольство України
              </h3>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>📍 Адреса:</strong> Naaffgasse 23, 1180 Wien
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>☎️ Телефон:</strong> +43 1 479 71 72
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>🌐 Сайт:</strong> austria.mfa.gov.ua
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(52, 152, 219, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(52, 152, 219, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#3498db',
                margin: '0 0 1rem 0',
                fontWeight: 'bold'
              }}>
                🏛️ ÖIF (Інтеграційний фонд)
              </h3>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>📍 Адреса:</strong> Stockhofstraße 36, 4020 Linz
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>☎️ Телефон:</strong> +43 732 17 61 00
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>🌐 Сайт:</strong> integrationsfonds.at
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(155, 89, 182, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(155, 89, 182, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#9b59b6',
                margin: '0 0 1rem 0',
                fontWeight: 'bold'
              }}>
                ⚖️ Правова допомога
              </h3>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>📍 Адреса:</strong> Derfflingerstraße 1/3, 4020 Linz
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>☎️ Телефон:</strong> +43 732 67 68 70
              </p>
              <p style={{ margin: '0.5rem 0', color: '#2c3e50' }}>
                <strong>🌐 Сайт:</strong> rechtsberatung.at
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && modalContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'flex-start',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                padding: '0.5rem',
                borderRadius: '50%',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: isMobile ? 'center' : 'flex-start',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>

            <h2 style={{
              fontSize: '1.8rem',
              color: '#1565c0',
              marginBottom: '1.5rem',
              fontWeight: 'bold',
              marginTop: '0'
            }}>
              {getModalContent(modalContent).title}
            </h2>

            {/* Содержимое модального окна */}
            <div style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#333'
            }}>
              {getModalContent(modalContent).content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCenter;
