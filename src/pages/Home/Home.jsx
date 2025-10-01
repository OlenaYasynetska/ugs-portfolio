import React from 'react';
import background from '../../assets/background.png';
import Hero from '../../modules/Hero';
import NewsBlock from '../../modules/NewsBlock';
import ImportantInfo from '../../modules/ImportantInfo';
import MainModulesContainer from '../../modules/MainModulesContainer';
import Calendar from '../../components/Calendar/Calendar';
import AdminCalendar from '../../components/AdminCalendar/AdminCalendar';
import { useTranslation } from 'react-i18next';
import { news } from '../../data/db';
import independenceImg from '../../assets/INDEPENDENCE.png';
import EurovisionImg from '../../assets/Eurovision.png';
import WienImg from '../../assets/Wien.png';
import bergImg from '../../assets/berg.png';
import nationalTadImg from '../../assets/NationalTad.png';
import losImg from '../../assets/Los.png';
import kolschitzkyImg from '../../assets/Kolschitzky.png';
import diolomImg from '../../assets/diolom.png';
import museenImg from '../../assets/Museen.png';
import turismImg from '../../assets/Turism.png';
import defendersDayImg from '../../assets/Tags.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useImageDrawAnimation, useNumberAnimation, useCardAnimation } from '../../hooks';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [showFull, setShowFull] = useState(false);
  const [showFullKolschitzkyText, setShowFullKolschitzkyText] = useState(false);
  const [showFullDiplomaText, setShowFullDiplomaText] = useState(false);
  
  // Функция для получения сокращенного текста Кульчицкого
  const getKolschitzkyText = () => {
    const fullText = news.find(item => item.id === 42)?.text[lang] || 'У Відні є вулиця Kolschitzky-Gasse, названа на честь українця Юрія-Франца Кульчицького. Його сміливий вчинок не лише змінив хід воєнних подій, а й започаткував у столиці Австрії традицію кавової культури.\n\nПід час облоги Відня турками у 1683 році Кульчицький проявив неабияку відвагу. Коли місто потерпало від нестачі їжі та хвороб, він добровільно погодився пробратися через турецькі позиції, аби встановити контакт із герцогом Карлом V Лотаринзьким.\n\nЦе рішення стало переломним: міська рада Відня відмовилася від капітуляції, а вже 12 вересня війська під проводом Яна III Собеського зняли облогу.\n\n☕️На знак вдячності віденці дозволили Кульчицькому відкрити першу кав\'ярню в місті. Саме з цього моменту бере початок традиція кавової культури у Відні.';
    
    if (showFullKolschitzkyText) {
      return fullText;
    }
    
    // Показываем только первую часть до первого переноса строки
    const firstPart = fullText.split('\n\n')[0];
    return firstPart + '...';
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
  
  // Система анимации изображений:
  // - Eurovision: появляется сразу (delay: 0)
  // - Wien (старый пост): появляется через 200мс
  // - Berg (новый пост): появляется через 400мс
  const isEurovisionImageVisible = useImageDrawAnimation('eurovision-image', 0);
  const isWienImageVisible = useImageDrawAnimation('wien-image', 200);
  const isBergImageVisible = useImageDrawAnimation('berg-image', 400);
  
  // Система анимации цифр:
  // - Третий пост (Berg): стандартная скорость (2s)
  // - Второй пост (Wien): медленнее (2.5s) для разнообразия
  const numberAnimations = useNumberAnimation(5, 0, 400, 'dance', 2); // Третий пост
  const oldNumberAnimations = useNumberAnimation(5, 0, 400, 'dance', 2.5); // Второй пост (немного медленнее)
  
  // Пример использования нового хука useCardAnimation для постов
  const { getFullCSS: getPostAnimationsCSS } = useCardAnimation(3, {
    baseDelay: 0,
    delayIncrement: 300,
    animationType: 'slideInUp',
    duration: 0.6
  });
  
  // Анимации при скролле для панелей
  
  
  
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isVeryMobile = typeof window !== 'undefined' ? window.innerWidth < 520 : false;
  const isSmallScreen = typeof window !== 'undefined' ? window.innerWidth < 700 : false;
  const [h1FontSize, setH1FontSize] = useState(window.innerWidth <= 900 ? '2.8em' : '4em');
  const [isImageVisible, setIsImageVisible] = useState(false);
  
  
  useEffect(() => {
    const handleResize = () => {
      setH1FontSize(window.innerWidth <= 900 ? '2.8em' : '4em');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)',
      maxWidth: '100vw',
      textAlign: 'center',
      height: 'auto',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <style>
        {`
          @keyframes dance {
            0%, 100% { transform: translateX(0px) rotate(0deg) scale(1); }
            25% { transform: translateX(5px) rotate(2deg) scale(1.05); }
            50% { transform: translateX(-5px) rotate(-2deg) scale(0.95); }
            75% { transform: translateX(3px) rotate(1deg) scale(1.02); }
          }
          
          @media (max-width: 900px) {
            .module-heading {
              font-size: 2.4em !important;
            }
          }
        `}
      </style>
      <style>
        {getPostAnimationsCSS()}
      </style>
      <style>{`
        @media (max-width: 1400px) {
          .main-title-hero {
            padding-left: 50px !important;
            padding-right: 50px !important;
          }
        }
      `}</style>
      <Hero />
      <h1
        className="main-title-hero"
        style={{
          color: '#1565c0',
          fontSize: h1FontSize,
          marginTop: 0,
          marginBottom: '1.5vw',
          letterSpacing: '0.02em',
          fontWeight: 900,
        }}
      >
        {t('welcome')}
      </h1>
      <MainModulesContainer>
        {/* <Hero /> */}
        <NewsBlock />
        
        {/* Модуль "Цей день в історії" */}
        <div className="module-heading" style={{
          fontWeight: 900,
          fontSize: '3.8em',
          color: '#1565c0',
          margin: '3vw 0 1vw 0',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}>{t('this_day_in_history') || 'Цей день в історії'}</div>
        
        {/* Пост про День захисників і захисниць України */}
        {(() => {
          const news49 = news.find(n => n.id === 49);
          return (
            <div style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              padding: '2vw',
              maxWidth: isSmallScreen ? 350 : 1200,
              width: isSmallScreen ? '95%' : '85%',
              margin: '0 auto 1vw auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img 
                src={defendersDayImg} 
                alt="Defenders of Ukraine Day" 
                style={{ 
                  width: '80%', 
                  maxWidth: '80%',
                  height: 'auto', 
                  borderRadius: 12, 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
                }} 
              />
              <div style={{ 
                fontSize: isSmallScreen ? 18 : 20, 
                color: '#234', 
                whiteSpace: 'pre-line', 
                textAlign: 'center', 
                width: '100%' 
              }}>
                <div style={{ 
                  fontSize: isSmallScreen ? 20 : 24, 
                  fontWeight: 700, 
                  color: '#1565c0', 
                  marginBottom: 16, 
                  textAlign: 'center' 
                }}>
                  {news49?.title[lang] || '🇺🇦 З Днем захисників і захисниць України!'}
                </div>
                <div style={{
                  fontSize: isSmallScreen ? 16 : 18, 
                  lineHeight: 1.5, 
                  color: '#333',
                  textAlign: 'center',
                  padding: '0 10px'
                }}>
                  {news49?.text[lang] || 'Сьогодні ми вшановуємо мужність, відвагу та самопожертву всіх, хто захищає нашу державу.\nДякуємо кожному воїну, ветерану, волонтеру та всім, хто щодня боронить Україну на фронті та в тилу.\n\nЦей день символізує силу нашого народу, непереможний дух і любов до Батьківщини.\nБажаємо миру, міцного здоров\'я та перемоги! 💙💛\n\nСлава Україні! Героям слава!'}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Пост про Национальный день Австрии */}
          <div style={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
          maxWidth: isSmallScreen ? 350 : 1200,
          width: isSmallScreen ? '95%' : '85%',
          margin: isSmallScreen ? '0 auto 1vw auto' : '0 auto 1vw auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* Изображение на всю ширину */}
          <img 
            src={nationalTadImg} 
            alt="Austria National Day" 
            style={{ 
              width: '80%', 
              maxWidth: '80%',
              height: 'auto', 
              borderRadius: 12, 
              
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
            }} 
          />
          
          {/* Текст под изображением */}
          <div style={{ 
            fontSize: isSmallScreen ? 18 : 20, 
            color: '#234', 
            whiteSpace: 'pre-line', 
            textAlign: 'center', 
            width: '100%' 
          }}>
            <div style={{ 
              fontSize: isSmallScreen ? 20 : 24, 
              fontWeight: 700, 
              color: '#1565c0', 
              marginBottom: 16, 
              textAlign: 'center' 
            }}>
              {t('austria_national_day_title') || '🇦🇹 26 жовтня — Національний день Австрії'}
              </div>
          <div style={{
              fontSize: isSmallScreen ? 16 : 18, 
              lineHeight: 1.5, 
              color: '#333',
            textAlign: 'left',
              padding: '0 10px'
            }}>
              {t('austria_national_day_description') || 'Сьогодні Австрія відзначає один з найважливіших державних свят — Національний день.\n\n📖 Трохи історії:\nПісля закінчення Другої світової війни Австрія перебувала під окупацією союзних держав (СРСР, США, Великобританії та Франції). Лише в 1955 році було підписано Державний договір, який відновив незалежність країни.\n\nОднак однією з ключових умов стало зобов\'язання Австрії зберігати постійний нейтралітет. 26 жовтня 1955 року парламент прийняв закон, який закріпив цей статус. З тих пір Австрія не вступає до військових блоків і не розміщує на своїй території іноземні військові бази.\n\n🎉 Чому цей день важливий:\n\n• Символ незалежності та свободи країни.\n• Нагадування про цінність миру та нейтралітету.\n• День, коли по всій Австрії проходять військові паради, культурні заходи, екскурсії до державних установ.\n\n💡 Цікавий факт: хоча сам договір було підписано в травні 1955 року, саме 26 жовтня стало днем національного свята — адже саме тоді Австрія офіційно заявила світу: «Ми — нейтральна країна».'}
              </div>
            </div>
          </div>

        {/* Заголовок "Это полезно знать" */}
        <div className="module-heading" style={{
          fontWeight: 900,
          fontSize: '3.8em',
          color: '#1565c0',
          margin: '3vw 0 1vw 0',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}>{t('this_is_useful_to_know') || 'Это полезно знать'}</div>

        {/* Пост про дубликат диплома */}
        {(() => {
          const news45 = news.find(n => n.id === 45);
          return (
          <div style={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
            maxWidth: 1200,
            width: '85%',
              margin: '0 auto 1vw auto',
            textAlign: 'left'
            }}>
              <img
                src={diolomImg}
                alt="Diploma Duplicate"
                style={{
                  width: '85%', 
              height: 'auto', 
              borderRadius: 12, 
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  marginBottom: '1rem',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
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
                    {t('more_ellipsis') || 'далі…'}
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
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
            maxWidth: 1200,
            width: '85%',
              margin: '0 auto 1vw auto',
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
                  📌 {news25?.title[lang] || 'Як дізнатися свій податковий номер (TIN) в Австрії?'}
                </h2>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {news25?.text[lang] || 'Податковий ідентифікаційний номер (TIN) в Австрії є аналогом українського індивідуального податкового коду. Цей номер необхідний у багатьох випадках, зокрема при відкритті банківських рахунків у країнах ЄС.\n\nБагато хто помилково вважає, що TIN присвоюють лише працюючим особам, однак це не відповідає дійсності — отримати його може кожен резидент.\n\nЯк перевірити свій TIN?\n\nВаріант 1. Через FinanzOnline\n• Увійдіть до особистого кабінету FinanzOnline.\n• Оберіть пункт «Подати податкову декларацію» за 2024 рік (або інший доступний період).\n• У відображених персональних даних ви побачите свій TIN у форматі: 00 000/0000.\n\nℹ️ Цей спосіб доступний лише тим, у кого є FinanzOnline. Якщо ви ще не маєте Austria ID, варто подбати про реєстрацію заздалегідь.\n\nВаріант 2. Через Finanzamt\n• Податковий номер можна уточнити, звернувшись безпосередньо до податкового органу: телефоном або письмовим запитом у Finanzamt.'}
          </div>
              </div>
            </div>
          );
        })()}

         
        {/* Модуль "Это интересно" */}
        <div className="module-heading" style={{
          fontWeight: 900,
          fontSize: '3.8em',
          color: '#1565c0',
          margin: '3vw 0 1vw 0',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}>{t('this_is_interesting') || 'Це цікаво'}</div>
        
        {/* Пост про туристический рекорд Австрии */}
        {(() => {
          const news48 = news.find(n => n.id === 48);
          return (
            <div style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              padding: '2vw',
              maxWidth: isSmallScreen ? 400 : 1200,
              width: isSmallScreen ? '95%' : '85%',
              margin: '0 auto 1vw auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img 
                src={turismImg} 
                alt="Austria Tourism Record" 
                style={{ 
                  width: isSmallScreen ? '80%' : '60%', 
                  maxWidth: isSmallScreen ? '80%' : '60%',
                  height: 'auto', 
                  borderRadius: 12, 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
                }} 
              />
              <div style={{ 
                fontSize: isSmallScreen ? 18 : 20, 
                color: '#234', 
                whiteSpace: 'pre-line', 
                textAlign: 'center', 
                width: '100%' 
              }}>
                <div style={{ 
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                  color: '#1565c0',
                  marginBottom: '1rem'
                }}>
                  {news48?.title[lang] || '🇦🇹Австрія встановила туристичний рекорд, забронювавши 116 мільйонів ночівель'}
                </div>
                <div 
                  style={{ 
                    fontSize: '1em',
                    lineHeight: '1.4',
                    textAlign: 'left'
                  }}
                  dangerouslySetInnerHTML={{ __html: news48?.text[lang] || 'Зростання було зумовлене головним чином іноземними відвідувачами, на яких припадало 87 мільйонів ночівель. Внутрішній туризм забезпечив приблизно 29 мільйонів ночівель.\n\nУ серпні, традиційно найжвавішому місяці літнього сезону, було зафіксовано понад 21 мільйон ночівель, що на 0,7% більше, ніж минулого року.\n\n🗣️«Туризм в Австрії продовжує стрімко зростати», – сказала (<a href="https://famagusta-gazette.com/14381-2/" target="_blank" rel="noopener noreferrer" style="color: #1565c0; text-decoration: none;">https://famagusta-gazette.com/14381-2/</a>) генеральний директор Австрійської статистики Мануела Ленк, додавши, що іноземні гості становили майже три чверті всіх перебувань.' }}
                />
              </div>
            </div>
          );
        })()}
        
        {/* Пост про Довгу ніч музеїв */}
        {(() => {
          const news46 = news.find(n => n.id === 46);
          return (
            <div style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              padding: '2vw',
              maxWidth: isSmallScreen ? 400 : 1200,
              width: isSmallScreen ? '95%' : '85%',
              margin: '0 auto 1vw auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img 
                src={museenImg} 
                alt="Museen Langenacht" 
                style={{ 
                  width: isSmallScreen ? '80%' : '60%', 
                  maxWidth: isSmallScreen ? '80%' : '60%',
                  height: 'auto', 
                  borderRadius: 12, 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
                }} 
              />
              <div style={{ 
                fontSize: isSmallScreen ? 18 : 20, 
                color: '#234', 
                whiteSpace: 'pre-line', 
                textAlign: 'center', 
                width: '100%' 
              }}>
                <div style={{ 
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                  color: '#1565c0',
                  marginBottom: '1rem'
                }}>
                  {news46?.title[lang] || '✨ Довга ніч музеїв в Австрії'}
                </div>
                <div 
                  style={{ 
                    fontSize: '1em',
                    lineHeight: '1.4',
                    textAlign: 'left'
                  }}
                  dangerouslySetInnerHTML={{ __html: news46?.text[lang] || '📅 4 жовтня 2025 року\n🕕 18:00 – 00:00\n📍 Австрія, різні міста (Відень, Дорнбірн, Кремс та ін.)\n\nЗа один квиток можна відвідати близько 650 музеїв та культурних просторів по всій країні.\n\n🎟 Ціни:\n💶 19 € — звичайний квиток;\n💶 16 € — пільговий (студенти, пенсіонери, люди з інвалідністю, військові, члени клубу Ö1);\n💶 7 € — регіональний;\n🧒 Діти до 12 років — безкоштовно.\n\n📌 Що подивитися:\n▫️Шедеври Kunsthistorisches Museum Wien\n▫️Незвичні експонати у Музеї контрацепції та абортів\n▫️290 музеїв з особливими програмами для дітей\n▫️«Місця зустрічі музеїв» допоможуть спланувати маршрут і купити квитки\n\n🛜 Деталі та квитки: <a href="https://langenacht.orf.at" target="_blank" rel="noopener noreferrer" style="color: #1565c0; text-decoration: none;">langenacht.orf.at</a>' }}
                />
              </div>
            </div>
          );
        })()}

        {/* Пост про лося */}
        {isSmallScreen ? (
          <div 
            className="animated-card card-1"
            style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 400,
             width: '95%',
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
            }}
          >
            <img 
              src={losImg} 
              alt="Moose" 
              style={{ 
                width: '80%', 
                maxWidth: '80%',
                height: 'auto', 
                borderRadius: 12, 
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
              }} 
            />
            <div style={{ 
              fontSize: 18, 
              color: '#234', 
              whiteSpace: 'pre-line', 
              textAlign: 'center', 
              width: '100%' 
            }}>
              <div style={{ 
                fontSize: '1.2em',
                fontWeight: 'bold',
                color: '#1565c0',
                marginBottom: '1rem'
              }}>
                {news.find(item => item.id === 41)?.title[lang] || '🫎 Суперечки між владою та громадськістю спричинив лось'}
               </div>
              <div style={{ 
                fontSize: '1em',
                lineHeight: '1.4',
                textAlign: 'left'
              }} dangerouslySetInnerHTML={{
                __html: news.find(item => item.id === 41)?.text[lang] || 'Як пише <a href="https://www.derstandard.at/" target="_blank" rel="noopener noreferrer" style="color: #1565c0; text-decoration: underline;">Der Standard</a>, коли він наближався до кордонів Верхньої Австрії, місцева влада спершу планувала його тимчасово приспати і транспортувати до чеського кордону, аби він міг возз\'єднатись із місцевою популяцією лосів.\n\nПроте австрійська неурядова організація Tierschutz Austria, яка займається захистом тварин, розкритикувала ці плани й пригрозила судовим позовом.'
              }}>
              </div>
             </div>
           </div>
         ) : (
          <div 
            className="animated-card card-1"
            style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 1200,
             width: '85%',
              margin: '0 auto 1vw auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img 
              src={losImg} 
              alt="Moose" 
              style={{ 
                width: '60%', 
                maxWidth: '60%',
                height: 'auto', 
                borderRadius: 12, 
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
              }} 
            />
            <div style={{ 
              fontSize: 20, 
              color: '#234', 
              whiteSpace: 'pre-line', 
              textAlign: 'center', 
              width: '100%' 
            }}>
              <div style={{ 
                fontSize: '1.4em',
                fontWeight: 'bold',
                color: '#1565c0',
                marginBottom: '1rem'
              }}>
                {news.find(item => item.id === 41)?.title[lang] || '🫎 Суперечки між владою та громадськістю спричинив лось'}
               </div>
              <div style={{ 
                fontSize: '1.1em',
                lineHeight: '1.5',
                textAlign: 'left'
              }} dangerouslySetInnerHTML={{
                __html: news.find(item => item.id === 41)?.text[lang] || 'Як пише <a href="https://www.derstandard.at/" target="_blank" rel="noopener noreferrer" style="color: #1565c0; text-decoration: underline;">Der Standard</a>, коли він наближався до кордонів Верхньої Австрії, місцева влада спершу планувала його тимчасово приспати і транспортувати до чеського кордону, аби він міг возз\'єднатись із місцевою популяцією лосів.\n\nПроте австрійська неурядова організація Tierschutz Austria, яка займається захистом тварин, розкритикувала ці плани й пригрозила судовим позовом.'
              }}>
              </div>
             </div>
           </div>
         )}
         
        {/* Пост про Кульчицкого */}
         {isSmallScreen ? (
          <div 
            className="animated-card card-1"
            style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 400,
             width: '95%',
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
              gap: '1rem'
            }}
          >
            <img 
              src={kolschitzkyImg} 
              alt="Kolschitzky" 
              style={{ 
                width: '100%', 
                maxWidth: '100%',
                height: 'auto',
                borderRadius: 12, 
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
              }} 
            />
           <div style={{
              fontSize: 16, 
              color: '#234', 
              whiteSpace: 'pre-line', 
             textAlign: 'left',
              width: '100%',
              flex: 1
            }}>
              <div style={{ 
                fontSize: '1.1em',
                fontWeight: 'bold',
                color: '#1565c0',
                marginBottom: '0.5rem'
              }}>
                {news.find(item => item.id === 42)?.title[lang] || '🇺🇦В столиці Австрії є вулиця, що носить прізвище відомого українця'}
               </div>
              <div style={{ 
                fontSize: '0.9em',
                lineHeight: '1.3',
                textAlign: 'left'
              }}>
                {getKolschitzkyText()}
              </div>
              {!showFullKolschitzkyText && (
                <button
                  onClick={() => setShowFullKolschitzkyText(true)}
                  style={{ 
                    marginTop: '0.5rem',
                    background: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
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
               )}
             </div>
           </div>
        ) : window.innerWidth > 900 ? (
        <div 
          className="animated-card card-1"
          style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 1200,
             width: '85%',
              margin: '0 auto 1vw auto',
            textAlign: 'center',
            display: 'flex',
              flexDirection: 'row',
            alignItems: 'center',
              gap: '2rem'
          }}
        >
          <img 
              src={kolschitzkyImg} 
              alt="Kolschitzky" 
            style={{ 
                width: '45%', 
                maxWidth: '45%',
              height: 'auto', 
              borderRadius: 12, 
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
              }} 
            />
            <div style={{ 
              fontSize: 20, 
              color: '#234', 
              whiteSpace: 'pre-line', 
             textAlign: 'left',
              width: '55%',
              flex: 1
            }}>
              <div style={{ 
                fontSize: '1.4em',
            fontWeight: 'bold',
            color: '#1565c0',
                marginBottom: '1rem'
              }}>
                {news.find(item => item.id === 42)?.title[lang] || '🇺🇦В столиці Австрії є вулиця, що носить прізвище відомого українця'}
               </div>
          <div style={{
                fontSize: '1.1em',
                lineHeight: '1.5',
                textAlign: 'left'
              }}>
                {getKolschitzkyText()}
            </div>
              {!showFullKolschitzkyText && (
                <button
                  onClick={() => setShowFullKolschitzkyText(true)}
                  style={{ 
                    marginTop: '1rem',
                    background: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
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
               )}
             </div>
           </div>
        ) : (
        <div 
          className="animated-card card-1"
          style={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
            maxWidth: 800,
            width: '90%',
            margin: '0 auto 1vw auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          <img 
            src={kolschitzkyImg} 
            alt="Kolschitzky" 
            style={{ 
              width: '100%', 
              maxWidth: '100%',
              height: 'auto', 
              borderRadius: 12, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
            }} 
          />
          <div style={{ 
            fontSize: 18, 
            color: '#234', 
            whiteSpace: 'pre-line', 
            textAlign: 'left', 
            width: '100%',
            flex: 1
          }}>
            <div style={{ 
              fontSize: '1.3em',
            fontWeight: 'bold',
            color: '#1565c0',
              marginBottom: '1rem'
            }}>
              {news.find(item => item.id === 42)?.title[lang] || '🇺🇦В столиці Австрії є вулиця, що носить прізвище відомого українця'}
            </div>
            <div style={{
              fontSize: '1em',
              lineHeight: '1.4',
              textAlign: 'left'
            }}>
              {getKolschitzkyText()}
            </div>
            {!showFullKolschitzkyText && (
              <button
                onClick={() => setShowFullKolschitzkyText(true)}
                style={{ 
                  marginTop: '1rem',
                  background: '#1976d2',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
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
            )}
          </div>
        </div>
        )}
        
        {isSmallScreen ? (
           <div 
             className="animated-card card-1"
             style={{
               background: 'rgba(255,255,255,0.85)',
               borderRadius: 16,
               boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
               padding: '2vw',
               maxWidth: 400,
               width: '95%',
               margin: '0 auto 1vw auto',
               textAlign: 'center',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
             }}
           >
             <img src={EurovisionImg} alt="Eurovision 2026 Vienna" style={{ 
               width: '100%', 
               height: 'auto', 
               borderRadius: 12, 
               margin: '0 auto 16px auto', 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               transform: isEurovisionImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isEurovisionImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="eurovision-image" />
             <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%' }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                 🎶 {t('eurovision_title') || 'Відень готується до грандіозного святкування 70-річчя Євробачення'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {t('eurovision_text') || 'Австрійська столиця перетвориться на головний центр пісенного шоу 2026 року. Ратушна площа (Rathausplatz) знову стане Eurovillage, де вболівальники зможуть безкоштовно дивитися півфінали й фінал конкурсу на великих екранах, а Євроклуб цього разу відкриють безпосередньо у стінах віденської ратуші. Головні концерти проходитимуть в Wiener Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році.\n\nМер міста підтвердив, що Відень виділить 22,6 млн євро на організацію, попри діючу програму економії. Для порівняння: Ліверпуль витрачав 16 млн €, Мальме — 18 млн €, Турин — 30 млн €, а Базель планував 33,5 млн €. Повернення конкурсу до Відня пояснюють не лише символікою ювілейного шоу, а й зручністю міста — сучасні аеропорти, залізничні сполучення та великий вибір готелів роблять його ідеальним місцем для фанів з усієї Європи.'}
               </div>
             </div>
           </div>
         ) : (
           <div 
             className="animated-card card-1"
             style={{
               display: 'flex',
               flexDirection: 'column',
               margin: '0 0 1vw 0',
               background: 'rgba(255,255,255,0.85)',
               borderRadius: 16,
               boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
               padding: '2vw',
               maxWidth: 1200,
               width: '85%',
               marginLeft: 'auto',
               marginRight: 'auto',
               textAlign: 'left',
             }}
           >
             <img src={EurovisionImg} alt="Eurovision 2026 Vienna" style={{ 
               width: '100%', 
               height: 'auto', 
               borderRadius: 12, 
               marginBottom: '2vw', 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               transform: isEurovisionImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isEurovisionImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="eurovision-image" />
             <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line' }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                 🎶 {t('eurovision_title') || 'Відень готується до грандіозного святкування 70-річчя Євробачення'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {t('eurovision_text') || 'Австрійська столиця перетвориться на головний центр пісенного шоу 2026 року. Ратушна площа (Rathausplatz) знову стане Eurovillage, де вболівальники зможуть безкоштовно дивитися півфінали й фінал конкурсу на великих екранах, а Євроклуб цього разу відкриють безпосередньо у стінах віденської ратуші. Головні концерти проходитимуть в Wiener Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році.\n\nМер міста підтвердив, що Відень виділить 22,6 млн євро на організацію, попри діючу програму економії. Для порівняння: Ліверпуль витрачав 16 млн €, Мальме — 18 млн €, Турин — 30 млн €, а Базель планував 33,5 млн €. Повернення конкурсу до Відня пояснюють не лише символікою ювілейного шоу, а й зручністю міста — сучасні аеропорти, залізничні сполучення та великий вибір готелів роблять його ідеальним місцем для фанів з усієї Європи.'}
               </div>
             </div>
           </div>
         )}
         
         {/* Старый пост про Австрию (про вальс, замки, музыку) */}
         {isSmallScreen ? (
           <div style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 400,
             width: '95%',
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}>
             <img src={WienImg} alt="Wien Austria" style={{ 
               width: '100%', 
               height: 'auto', 
               borderRadius: 12, 
               margin: '0 auto 16px auto', 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               transform: isWienImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isWienImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="wien-image" />
             <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%', fontFamily: 'Inter, sans-serif' }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                 🇦🇹 5 фактів про Австрію, які вас здивують
               </div>
               <div style={{ marginBottom: 16 }}>
                 {oldNumberAnimations.map((anim, index) => (
                   <React.Fragment key={anim.id}>
                     <span style={{
                       fontSize: 24,
                       fontWeight: 900,
                       color: '#1565c0',
                       marginRight: 8,
                       animation: anim.animation,
                       display: 'inline-block'
                     }}>{anim.id}.</span>
                     {index === 0 && <><strong>Тут народився ЦМОК (вальс)</strong><br /><br />
                     Вальс як танець зародився у Відні у XVIII столітті. Віденський вальс досі вважається класикою світських балів, а віденський бал — мрія для всіх шанувальників елегантності.</>}
                     {index === 1 && <><strong>Австрія — країна замків і палаців</strong><br /><br />
                     Тут понад 2 000 замків і палаців! Шенбрунн і Гофбург у Відні, середньовічні фортеці в Зальцбурзі — справжній рай для любителів історії та архітектури.</>}
                     {index === 2 && <><strong>Тут народилися великі генії музики</strong><br /><br />
                     Моцарт, Гайдн, Шуберт і навіть Бетховен більшу частину життя творив у Відні. Не дарма Австрію називають «музичною столицею світу».</>}
                     {index === 3 && <><strong>Кава по-віденськи — це не міф</strong><br /><br />
                     Віденські кав'ярні — це окрема культура. Кажуть, традиція пішла ще від турків у XVII столітті. Сьогодні кав'ярні Відня внесені до списку нематеріальної спадщини ЮНЕСКО!</>}
                     {index === 4 && <><strong>Австрія — одна з найзеленіших країн Європи</strong><br /><br />
                     Майже 60% території займають гори (Альпи), а близько третини — ліси. Це рай для тих, хто любить гірськолижний спорт, хайкінг і чисте повітря.</>}
                     <br /><br />
                   </React.Fragment>
                 ))}
               </div>
             </div>
           </div>
         ) : (
           <div style={{
             display: 'flex',
             flexDirection: 'column',
             margin: '0 0 1vw 0',
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 1200,
             width: '85%',
             marginLeft: 'auto',
             marginRight: 'auto',
             textAlign: 'left',
           }}>
             <img src={WienImg} alt="Wien Austria" style={{ 
               width: '100%', 
               height: 'auto', 
               borderRadius: 12, 
               marginBottom: '2vw', 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               transform: isWienImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isWienImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="wien-image" />
             <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', fontFamily: 'Inter, sans-serif' }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                 🇦🇹 5 фактів про Австрію, які вас здивують
               </div>
               <div style={{ marginBottom: 16 }}>
                 {oldNumberAnimations.map((anim, index) => (
                   <React.Fragment key={anim.id}>
                     <span style={{
                       fontSize: 24,
                       fontWeight: 900,
                       color: '#1565c0',
                       marginRight: 8,
                       animation: anim.animation,
                       display: 'inline-block'
                     }}>{anim.id}.</span>
                     {index === 0 && <><strong>Тут народився ЦМОК (вальс)</strong><br /><br />
                     Вальс як танець зародився у Відні у XVIII столітті. Віденський вальс досі вважається класикою світських балів, а віденський бал — мрія для всіх шанувальників елегантності.</>}
                     {index === 1 && <><strong>Австрія — країна замків і палаців</strong><br /><br />
                     Тут понад 2 000 замків і палаців! Шенбрунн і Гофбург у Відні, середньовічні фортеці в Зальцбурзі — справжній рай для любителів історії та архітектури.</>}
                     {index === 2 && <><strong>Тут народилися великі генії музики</strong><br /><br />
                     Моцарт, Гайдн, Шуберт і навіть Бетховен більшу частину життя творив у Відні. Не дарма Австрію називають «музичною столицею світу».</>}
                     {index === 3 && <><strong>Кава по-віденськи — це не міф</strong><br /><br />
                     Віденські кав'ярні — це окрема культура. Кажуть, традиція пішла ще від турків у XVII столітті. Сьогодні кав'ярні Відня внесені до списку нематеріальної спадщини ЮНЕСКО!</>}
                     {index === 4 && <><strong>Австрія — одна з найзеленіших країн Європи</strong><br /><br />
                     Майже 60% території займають гори (Альпи), а близько третини — ліси. Це рай для тих, хто любить гірськолижний спорт, хайкінг і чисте повітря.</>}
                     <br /><br />
                   </React.Fragment>
                 ))}
               </div>
             </div>
           </div>
         )}
         
         {/* Пост про Австрию */}
         {isSmallScreen ? (
           <div style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 400,
             width: '95%',
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}>
             <img src={bergImg} alt="Austria Facts" style={{ 
               width: '100%', 
               height: 'auto', 
               borderRadius: 12, 
               margin: '0 auto 16px auto', 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               transform: isBergImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isBergImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="berg-image" />
             <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%', fontFamily: 'Inter, sans-serif' }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                 {t('austria_facts_title') || '🇦🇹 5 фактів про Австрію, які вас здивують (2 частина)'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {numberAnimations.map((anim, index) => (
                   <React.Fragment key={anim.id}>
                     <span style={{
                       fontSize: 24,
                       fontWeight: 900,
                       color: '#1565c0',
                       marginRight: 8,
                       animation: anim.animation,
                       display: 'inline-block'
                     }}>{anim.id}.</span>
                     {index === 0 && <><strong>Австрія має власний «морський» пейзаж</strong><br /><br />
                     Попри те, що країна не має виходу до моря, тут є неймовірні озера — наприклад, Вольфгангзе та Вертерзе, де вода настільки прозора, що видно дно на кілька метрів.</>}
                     {index === 1 && <><strong>Найстаріший зоопарк у світі</strong><br /><br />
                     Зоопарк Шенбрунн у Відні працює з 1752 року та є найстарішим діючим зоопарком на планеті. Тут мешкають рідкісні панди та інші екзотичні тварини.</>}
                     {index === 2 && <><strong>Ліфти без дверей? Це реальність!</strong><br /><br />
                     У деяких старих віденських будівлях досі працюють ліфти типу «paternoster» — без дверей і з постійним рухом кабін. Унікальна знахідка для сміливців!</>}
                     {index === 3 && <><strong>Тут виробляють один із найкращих шоколадів у світі</strong><br /><br />
                     Шоколад «Mozartkugel» родом із Зальцбурга став гастрономічною легендою Австрії. Його досі роблять за традиційними рецептами понад 100 років.</>}
                     {index === 4 && <><strong>Найбільший льодовик у Східних Альпах</strong><br /><br />
                     Льодовик Пастерце біля гори Гросглокнер — це природне диво, яке щороку відвідують тисячі туристів. Його довжина понад 8 км!</>}
                     <br /><br />
                   </React.Fragment>
                 ))}
               </div>
             </div>
           </div>
         ) : (
           <div style={{
             display: 'flex',
             flexDirection: 'column',
             margin: '0 0 1vw 0',
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 1200,
             width: '85%',
             marginLeft: 'auto',
             marginRight: 'auto',
             textAlign: 'left',
           }}>
             <img src={bergImg} alt="Austria Facts" style={{ 
               width: '100%', 
               height: 'auto', 
               borderRadius: 12, 
               marginBottom: '2vw', 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               transform: isBergImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isBergImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="berg-image" />
             <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', fontFamily: 'Inter, sans-serif' }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                 {t('austria_facts_title') || '🇦🇹 5 фактів про Австрію, які вас здивують (2 частина)'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {numberAnimations.map((anim, index) => (
                   <React.Fragment key={anim.id}>
                     <span style={{
                       fontSize: 24,
                       fontWeight: 900,
                       color: '#1565c0',
                       marginRight: 8,
                       animation: anim.animation,
                       display: 'inline-block'
                     }}>{anim.id}.</span>
                     {index === 0 && <><strong>Австрія має власний «морський» пейзаж</strong><br /><br />
                     Попри те, що країна не має виходу до моря, тут є неймовірні озера — наприклад, Вольфгангзе та Вертерзе, де вода настільки прозора, що видно дно на кілька метрів.</>}
                     {index === 1 && <><strong>Найстаріший зоопарк у світі</strong><br /><br />
                     Зоопарк Шенбрунн у Відні працює з 1752 року та є найстарішим діючим зоопарком на планеті. Тут мешкають рідкісні панди та інші екзотичні тварини.</>}
                     {index === 2 && <><strong>Ліфти без дверей? Це реальність!</strong><br /><br />
                     У деяких старих віденських будівлях досі працюють ліфти типу «paternoster» — без дверей і з постійним рухом кабін. Унікальна знахідка для сміливців!</>}
                     {index === 3 && <><strong>Тут виробляють один із найкращих шоколадів у світі</strong><br /><br />
                     Шоколад «Mozartkugel» родом із Зальцбурга став гастрономічною легендою Австрії. Його досі роблять за традиційними рецептами понад 100 років.</>}
                     {index === 4 && <><strong>Найбільший льодовик у Східних Альпах</strong><br /><br />
                     Льодовик Пастерце біля гори Гросглокнер — це природне диво, яке щороку відвідують тисячі туристів. Його довжина понад 8 км!</>}
                     <br /><br />
                   </React.Fragment>
                 ))}
               </div>
             </div>
           </div>
         )}
         
         {/* Модуль Klimaticket */}
         <div className="module-heading" style={{
           fontWeight: 900,
           fontSize: '3.8em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>{t('klimaticket_title')}</div>
         
         <div style={{
           display: 'flex',
           alignItems: 'flex-start',
           gap: '2vw',
           margin: '0 0 1vw 0',
           background: 'rgba(255,255,255,0.85)',
           borderRadius: 16,
           boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
           padding: '2vw',
           maxWidth: 1200,
           width: '85%',
           marginLeft: 'auto',
           marginRight: 'auto',
           textAlign: 'left',
           flexWrap: 'wrap',
         }}>
           <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', flex: 1 }}>
             <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
               {t('klimaticket_what')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_description')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_exception')}
             </div>
             
             <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, marginTop: 24 }}>
               {t('klimaticket_where')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_where_list')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_important')}
             </div>
             
             <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, marginTop: 24 }}>
               {t('klimaticket_discounts')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_discounts_list')}
             </div>
             
             <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, marginTop: 24 }}>
               {t('klimaticket_companies')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_companies_text')}
             </div>
             
             <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, marginTop: 24 }}>
               {t('klimaticket_regional')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_regional_text')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_regional_list')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_cost')}
             </div>
             
             <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, marginTop: 24 }}>
               {t('klimaticket_details')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_details_text')}
             </div>
             <div style={{ marginBottom: 16 }}>
               {t('klimaticket_more')}
             </div>
           </div>
         </div>
         
         {/* Модуль для поста ID 24 */}
         {(() => {
           const news24 = news.find(n => n.id === 24);
           return (
             <div style={{
               display: 'flex',
               alignItems: 'flex-start',
               gap: '2vw',
               margin: '0 0 1vw 0',
               background: 'rgba(255,255,255,0.85)',
               borderRadius: 16,
               boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
               padding: '2vw',
               maxWidth: 1200,
               width: '85%',
               marginLeft: 'auto',
               marginRight: 'auto',
               textAlign: 'left',
               flexWrap: 'wrap',
             }}>
               <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', flex: 1 }}>
                 <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                   {news24?.title?.[lang] || news24?.title?.en || 'Post title not found'}
                 </div>
                 <div style={{ marginBottom: 16 }}>
                   {news24?.text?.[lang] || news24?.text?.en || 'Post content not found'}
                 </div>
               </div>
             </div>
           );
         })()}
         
         {/* Події тижня */}
         <div className="module-heading" style={{
           fontWeight: 900,
           fontSize: '3.8em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>{t('calendar_of_events')}</div>
         
         {/* Пост про Осінній фестиваль на фермі */}
         {(() => {
           const news47 = news.find(n => n.id === 47);
           return (
             <div style={{
               background: 'rgba(255,255,255,0.85)',
               borderRadius: 16,
               boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
               padding: '2vw',
               maxWidth: isSmallScreen ? 400 : 1200,
               width: isSmallScreen ? '95%' : '85%',
               margin: '0 auto 1vw auto',
               textAlign: 'center',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
             }}>
               <div style={{ 
                 fontSize: isSmallScreen ? 18 : 20, 
                 color: '#234', 
                 whiteSpace: 'pre-line', 
                 textAlign: 'center', 
                 width: '100%' 
               }}>
                 <div style={{ 
                   fontSize: '1.2em',
                   fontWeight: 'bold',
                   color: '#1565c0',
                   marginBottom: '1rem'
                 }}>
                   {news47?.title[lang] || '🎃Осінній фестиваль на фермі Erdbeer- und Kürbishof Wunderlich у Stockerau'}
                 </div>
                 <div style={{ 
                   fontSize: '1em',
                   lineHeight: '1.4',
                   textAlign: 'left'
                 }}>
                   {news47?.text[lang] || '📅 До 2 листопада;\n🕘 Щодня 09:00–18:00;\n📍 Ahragartensiedlung bei Hausleiten, 2000 Stockerau.\n\n💶 Ціни на вхід:\n▫️Пн–Пт: Діти 4–14 років – 4 €, Від 14 років – 6 €;\n▫️Вихідні та свята: Діти – 5 €, Від 14 років – 10 €.\n\n🍲 Що смачного можна поїсти?:\n▫️Гарбузовий суп, гарбузово-овочева паста;\n▫️Хот-доги, гюляш, запечена картопля;\n▫️Десерти: Pumpkin Pie, мафіни, Donuts, Erdbeerkuchen, Pumpkin Spice Latte.\n\n❓Як дістатися:\n▫️Авто: A22 → B4, безкоштовна парковка;\n▫️Громадський транспорт: автобус 841 зі Stockerau.'}
                 </div>
               </div>
             </div>
           );
         })()}
         
         <div style={{
           margin: '0 auto 2vw auto',
           width: '100%',
         }}>
           <Calendar />
         </div>
         
         {/* Административный календарь - скрыт от отображения */}
         {/* 
         <div style={{
           fontWeight: 900,
           fontSize: '2em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>Административный календарь</div>
         
         <div style={{
           margin: '0 auto 2vw auto',
           width: '100%',
         }}>
           <AdminCalendar />
         </div>
         */}
         
         <ImportantInfo />
       </MainModulesContainer>
    </div>
  );
} 
