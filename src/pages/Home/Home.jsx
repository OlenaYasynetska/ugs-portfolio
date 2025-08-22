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
import fieldImg from '../../assets/field.png';
import independenceImg from '../../assets/INDEPENDENCE.png';
import zakonImg from '../../assets/zakon.jpg';
import KindsOchakivImg from '../../assets/Kinds_Ochakov.png';
import EurovisionImg from '../../assets/Eurovision.png';
import WienImg from '../../assets/Wien.png';
import { useImageDrawAnimation } from '../../hooks';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [showFull, setShowFull] = React.useState(false);
  
  // Используем кастомный хук для каждой картинки
  const isEurovisionImageVisible = useImageDrawAnimation('eurovision-image');
  const isWienImageVisible = useImageDrawAnimation('wien-image');
  
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isVeryMobile = typeof window !== 'undefined' ? window.innerWidth < 520 : false;
  const [h1FontSize, setH1FontSize] = React.useState(window.innerWidth <= 900 ? '2.8em' : '4em');
  const [isImageVisible, setIsImageVisible] = React.useState(false);
  
  // Получаем текст для блока "Этот день в истории"
  const shortText = t('ukrainian_flag_day_description') || '🇺🇦 День Державного Прапора України — це національне свято України, яке відзначається щорічно 23 серпня. Цей день присвячений символу незалежності та суверенітету України — синьо-жовтому прапору.\n\nСиній колір символізує безхмарне небо, а жовтий — золоті пшеничні поля, що є традиційними символами України. Прапор є символом єдності народу, його свободи та незалежності.\n\nУ цей день українці в усьому світі вшановують національний прапор та відзначають важливість збереження української ідентичності та культури.';
  
  React.useEffect(() => {
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
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            25% { transform: translateX(5px) rotate(2deg); }
            50% { transform: translateX(-5px) rotate(-2deg); }
            75% { transform: translateX(3px) rotate(1deg); }
          }
          
          @media (max-width: 900px) {
            .module-heading {
              font-size: 2.4em !important;
            }
          }
        `}
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
        {/* Модуль "Этот день в истории" */}
        <div className="module-heading" style={{
          fontWeight: 900,
          fontSize: '3.8em',
          color: '#1565c0',
          margin: '2vw 0 1vw 0',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}>{t('this_day_in_history')}</div>
        
        {/* Пост про 24 серпня - День Незалежності */}
        {isVeryMobile ? (
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
            <img src={independenceImg} alt="Ukrainian Independence Day" style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: 12, 
              margin: '0 auto 16px auto', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
            }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                🇺🇦 {t('ukrainian_independence_day') || '24 серпня — День Незалежності України'}
              </div>
              <div style={{ marginBottom: 16 }}>
                {t('ukrainian_independence_day_description') || '📌 Загальний фон\n\nУ серпні 1991 року в Москві (СРСР) стався ГКЧП (спроба державного перевороту), коли частина керівництва СРСР намагалася відновити жорстку контроль.\n\nСпроба не вдалася, і в республіках СРСР зросла тенденція до незалежності.\n\nУ Києві 22 серпня вже були підняті масовими угрупуваннями синьо-жовті прапори — спочатку на будівлях, потім над Верховною Радою.\n\n📌 24 серпня 1991\n\nВерховна Рада Української ССР провела екстрене засідання.\n\nДепутати обговорювали ситуацію та загрозу повернення диктатури з Москви.\n\nБуло напружене, але серйозне напруження в залі: вони розуміли, що доля країни вирішувалася.\n\nЯк результат:\n\n346 з 450 депутатів проголосувало "за" (це переважна більшість).\n\nАкту про оголошення незалежності України було прийнято.\n\n📌 Що означало це документ\n\nУкраїна оголосила себе незалежною демократичною державою.\n\nСуверенітет українських законів був підтверджений.\n\nВстановлено, що всі органи державної влади підпорядковані тільки Верховній Раді України.\n\n📌 Чому саме 24 серпня\n\nЦе було наслідком невдачі ГКЧП (19-21 серпня).\n\nПопулярний тиск був величезний: тисячі люди прийшли під палату.\n\nДепутати розуміли, що пропустити момент означало залишитися в СРСР, де все могло повернутися до стану спочатку.\n\n📌 Після цього\n\n24 серпня було проголошено днем незалежності України.\n\nІ щоб підтвердити рішення, було заплановано референдум на 1 грудня 1991 року, де населення мало підтвердити або відхилити цей акт.\n\nУ референдумі 90,32% населення проголосувало за незалежність.\n\n⚡ Таким чином, 24 серпня 1991 року, Україна формально оголосила свою незалежність, а 1 грудня люди підтвердили це.'}
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
            <img src={independenceImg} alt="Ukrainian Independence Day" style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: 12, 
              marginBottom: '2vw', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
            }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                🇺🇦 {t('ukrainian_independence_day') || '24 серпня — День Незалежності України'}
              </div>
              <div style={{ marginBottom: 16 }}>
                {t('ukrainian_independence_day_description') || '📌 Загальний фон\n\nУ серпні 1991 року в Москві (СРСР) стався ГКЧП (спроба державного перевороту), коли частина керівництва СССР намагалася відновити жорстку контроль.\n\nСпроба не вдалася, і в республіках СССР зросла тенденція до незалежності.\n\nУ Києві 22 серпня вже були підняті масовими угрупуваннями синьо-жовті прапори — спочатку на будівлях, потім над Верховною Радою.\n\n📌 24 серпня 1991\n\nВерховна Рада Української ССР провела екстрене засідання.\n\nДепутати обговорювали ситуацію та загрозу повернення диктатури з Москви.\n\nБуло напружене, але серйозне напруження в залі: вони розуміли, що доля країни вирішувалася.\n\nЯк результат:\n\n346 з 450 депутатів проголосувало "за" (це переважна більшість).\n\nАкту про оголошення незалежності України було прийнято.\n\n📌 Що означало це документ\n\nУкраїна оголосила себе незалежною демократичною державою.\n\nСуверенітет українських законів був підтверджений.\n\nВстановлено, що всі органи державної влади підпорядковані тільки Верховній Раді України.\n\n📌 Чому саме 24 серпня\n\nЦе було наслідком невдачі ГКЧП (19-21 серпня).\n\nПопулярний тиск був величезний: тисячі люди прийшли під палату.\n\nДепутати розуміли, що пропустити момент означало залишитися в СРСР, де все могло повернутися до стану спочатку.\n\n📌 Після цього\n\n24 серпня було проголошено днем незалежності України.\n\nІ щоб підтвердити рішення, було заплановано референдум на 1 грудня 1991 року, де населення мало підтвердити або відхилити цей акт.\n\nУ референдумі 90,32% населення проголосувало за незалежність.\n\n⚡ Таким чином, 24 серпня 1991 року, Україна формально оголосила свою незалежність, а 1 грудня люди підтвердили це.'}
              </div>
            </div>
          </div>
        )}
        
        {/* Пост про 23 серпня - День Державного Прапора */}
        {isVeryMobile ? (
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
            <img src={fieldImg} alt="Ukrainian State Flag Day" style={{ maxWidth: 220, width: '100%', height: 'auto', borderRadius: 12, margin: '0 auto 16px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                🇺🇦 {t('ukrainian_flag_day') || '23 серпня — День Державного Прапора України'}
              </div>
              {isMobile && !showFull ? (
                <>
                  {shortText.slice(0, 220)}<span
                    style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 700 }}
                    onClick={() => setShowFull(true)}
                  >...</span>
                </>
              ) : (
                <>
                  {t('ukrainian_flag_day_description') || '🇺🇦 День Державного Прапора України — це національне свято України, яке відзначається щорічно 23 серпня. Цей день присвячений символу незалежності та суверенітету України — синьо-жовтому прапору.\n\nСиній колір символізує безхмарне небо, а жовтий — золоті пшеничні поля, що є традиційними символами України. Прапор є символом єдності народу, його свободи та незалежності.\n\nУ цей день українці в усьому світі вшановують національний прапор та відзначають важливість збереження української ідентичності та культури.'}
                  {isMobile && (
                    <span
                      style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 700, marginLeft: 8 }}
                      onClick={() => setShowFull(true)}
                    >
                      {t('hide_text') || 'Скрыть'}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
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
            <img src={fieldImg} alt="Ukrainian State Flag Day" style={{ maxWidth: 220, width: '100%', height: 'auto', borderRadius: 12, marginRight: 24, flex: '0 0 220px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                🇺🇦 {t('ukrainian_flag_day') || '23 серпня — День Державного Прапора України'}
              </div>
              {isMobile && !showFull ? (
                <>
                  {shortText.slice(0, 220)}<span
                    style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 700 }}
                    onClick={() => setShowFull(true)}
                  >...</span>
                </>
              ) : (
                <>
                  {t('ukrainian_flag_day_description') || '🇺🇦 День Державного Прапора України — це національне свято України, яке відзначається щорічно 23 серпня. Цей день присвячений символу незалежності та суверенітету України — синьо-жовтому прапору.\n\nСиній колір символізує безхмарне небо, а жовтий — золоті пшеничні поля, що є традиційними символами України. Прапор є символом єдності народу, його свободи та незалежності.\n\nУ цей день українці в усьому світі вшановують національний прапор та відзначають важливість збереження української ідентичності та культури.'}
                  {isMobile && (
                    <span
                      style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 700, marginLeft: 8 }}
                      onClick={() => setShowFull(true)}
                    >
                      {t('hide_text') || 'Скрыть'}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        )}
         
         {/* Модуль "Это интересно" */}
         <div className="module-heading" style={{
           fontWeight: 900,
           fontSize: '3.8em',
           color: '#1565c0',
           margin: '3vw 0 1vw 0',
           letterSpacing: '0.02em',
           textAlign: 'center',
         }}>{t('this_is_interesting') || 'Это интересно'}</div>
         
         {/* Пост про Eurovision */}
         {isVeryMobile ? (
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
         
         {/* Пост про Австрию */}
         {isVeryMobile ? (
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
                   <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite',
                    display: 'inline-block'
                  }}>1.</span> <strong>Тут народився ЦМОК (вальс)</strong><br /><br />
                  Вальс як танець зародився у Відні у XVIII столітті. Віденський вальс досі вважається класикою світських балів, а віденський бал — мрія для всіх шанувальників елегантності.<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 0.4s',
                    display: 'inline-block'
                  }}>2.</span> <strong>Австрія — країна замків і палаців</strong><br /><br />
                  Тут понад 2 000 замків і палаців! Шенбрунн і Гофбург у Відні, середньовічні фортеці в Зальцбурзі — справжній рай для любителів історії та архітектури.<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 0.8s',
                    display: 'inline-block'
                  }}>3.</span> <strong>Тут народилися великі генії музики</strong><br /><br />
                  Моцарт, Гайдн, Шуберт і навіть Бетховен більшу частину життя творив у Відні. Не дарма Австрію називають «музичною столицею світу».<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 1.2s',
                    display: 'inline-block'
                  }}>4.</span> <strong>Кава по-віденськи — це не міф</strong><br /><br />
                  Віденські кав'ярні — це окрема культура. Кажуть, традиція пішла ще від турків у XVII столітті. Сьогодні кав'ярні Відня внесені до списку нематеріальної спадщини ЮНЕСКО!<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 1.6s',
                    display: 'inline-block'
                  }}>5.</span> <strong>Австрія — одна з найзеленіших країн Європи</strong><br /><br />
                  Майже 60% території займають гори (Альпи), а близько третини — ліси. Це рай для тих, хто любить гірськолижний спорт, хайкінг і чисте повітря.
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
                   <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite',
                    display: 'inline-block'
                  }}>1.</span> <strong>Тут народився ЦМОК (вальс)</strong><br /><br />
                  Вальс як танець зародився у Відні у XVIII столітті. Віденський вальс досі вважається класикою світських балів, а віденський бал — мрія для всіх шанувальників елегантності.<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 0.4s',
                    display: 'inline-block'
                  }}>2.</span> <strong>Австрія — країна замків і палаців</strong><br /><br />
                  Тут понад 2 000 замків і палаців! Шенбрунн і Гофбург у Відні, середньовічні фортеці в Зальцбурзі — справжній рай для любителів історії та архітектури.<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 0.8s',
                    display: 'inline-block'
                  }}>3.</span> <strong>Тут народилися великі генії музики</strong><br /><br />
                  Моцарт, Гайдн, Шуберт і навіть Бетховен більшу частину життя творив у Відні. Не дарма Австрію називають «музичною столицею світу».<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 1.2s',
                    display: 'inline-block'
                  }}>4.</span> <strong>Кава по-віденськи — це не міф</strong><br /><br />
                  Віденські кав'ярні — це окрема культура. Кажуть, традиція пішла ще від турків у XVII столітті. Сьогодні кав'ярні Відня внесені до списку нематеріальної спадщини ЮНЕСКО!<br /><br />
                  
                  <span style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: '#1565c0', 
                    marginRight: 8,
                    animation: 'dance 2s ease-in-out infinite 1.6s',
                    display: 'inline-block'
                  }}>5.</span> <strong>Австрія — одна з найзеленіших країн Європи</strong><br /><br />
                  Майже 60% території займають гори (Альпи), а близько третини — ліси. Це рай для тих, хто любить гірськолижний спорт, хайкінг і чисте повітря.
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