import React from 'react';
import { Link } from 'react-router-dom';
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
import image2201 from '../../assets/Home/22_01.png';
import kolschitzkyImg from '../../assets/Kolschitzky.png';
import turismImg from '../../assets/Turism.png';
import marketImg from '../../assets/market.png';
import gregoryCalendarImg from '../../assets/Gregory_calendar.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useImageDrawAnimation, useNumberAnimation, useCardAnimation, useResponsiveStyles, usePostState, usePostTexts } from '../../hooks';
import { HOME_STYLES } from '../../constants/homeStyles';
import busImg from '../../assets/bus_sonne.png';
import regenbogenImg from '../../assets/regenbogen.jpg';
import christmasImg from '../../assets/Christmas.png';
import spracheImg from '../../assets/Home/spache.png';
import krutImg from '../../assets/Home/krut.png';
import zeitungImg from '../../assets/Home/Zeitung.png';
import plaztImg from '../../assets/Home/Plazt.png';
import steyrFeb1934Img from '../../assets/Home/12.2.png';
import maslenitsaImg from '../../assets/Home/Maslenitsa.png';
import krigImg from '../../assets/Home/Krig.png';
import integrationImg from '../../assets/Home/Integration.png';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  // Используем созданные хуки
  const postState = usePostState();
  const texts = usePostTexts(lang);
  const styles = useResponsiveStyles();
  
  // Получаем тексты из хуков
  const getKolschitzkyText = () => texts.getKolschitzkyText(postState.showFullKolschitzkyText);
  
  // Функция для получения текста про Австрию
  const getAustriaNationalDayText = () => {
    const fullText = t('austria_national_day_description');
    if (postState.showFullAustriaNationalDay) {
      return fullText;
    }
    // Берем первые 2 абзаца
    const paragraphs = fullText.split('\n\n');
    if (paragraphs.length >= 2) {
      return paragraphs[0] + '\n\n' + paragraphs[1];
    }
    return fullText;
  };
  
  // Функция для получения текста про григорианский календарь
  const getGregoryCalendarText = () => {
    const fullText = lang === 'ua' ? 
      '1582 рік — Папа Римський Григорій XIII запровадив григоріанський календар (звідси й назва).\nЙого одразу прийняли католицькі країни: Італія, Іспанія, Португалія, Польща.\nПісля 4 жовтня 1582 року одразу настав 15 жовтня 1582 року — пропущено 10 днів.\n\nПротестантські країни (Німеччина, Великобританія та ін.) перейшли пізніше — у XVII–XVIII століттях.\nНаприклад, Великобританія та її колонії — у 1752 році, пропустивши 11 днів.\n\nРосія (і, відповідно, Україна, Білорусь, Грузія та ін. у складі Російської імперії) —\nперейшла лише після Жовтневої революції, за декретом Ради народних комісарів від 24 січня 1918 року.\nПісля 31 січня 1918 року одразу настав 14 лютого 1918 року — пропущено 13 днів.\n\n🇺🇦 Україна:\n\nУкраїна перейшла на григоріанський календар разом із Радянською Росією —\n📅 у лютому 1918 року.\nДо цього на території України (у складі Російської імперії) діяв юліанський календар.\n\n⛪ Церковне використання:\n\nПравославна церква в Україні довго залишалася на юліанському календарі (старому стилі).\n\nПерехід ПЦУ (Православної Церкви України) на новоюліанський календар (сумісний з григоріанським до 2800 року) відбувся 1 вересня 2023 року.\nТепер більшість церковних свят відзначається за новим стилем, але Великдень все ще обчислюється за старим (юліанським) календарем.' :
      lang === 'de' ?
        '1582 — Papst Gregor XIII. führte den Gregorianischen Kalender ein (daher der Name).\nKatholische Länder nahmen ihn sofort an: Italien, Spanien, Portugal, Polen.\nNach dem 4. Oktober 1582 folgte sofort der 15. Oktober 1582 — 10 Tage wurden übersprungen.\n\nProtestantische Länder (Deutschland, Großbritannien usw.) wechselten später — im 17.–18. Jahrhundert.\nZum Beispiel Großbritannien und seine Kolonien — 1752, wobei 11 Tage übersprungen wurden.\n\nRussland (und entsprechend die Ukraine, Belarus, Georgien usw. als Teil des Russischen Reiches) —\nwechselte erst nach der Oktoberrevolution, durch Dekret des Rates der Volkskommissare vom 24. Januar 1918.\nNach dem 31. Januar 1918 folgte sofort der 14. Februar 1918 — 13 Tage wurden übersprungen.\n\n🇺🇦 Ukraine:\n\nDie Ukraine wechselte zusammen mit Sowjetrussland zum Gregorianischen Kalender —\n📅 im Februar 1918.\nDavor galt auf dem Gebiet der Ukraine (als Teil des Russischen Reiches) der Julianische Kalender.\n\n⛪ Kirchliche Nutzung:\n\nDie Orthodoxe Kirche in der Ukraine blieb lange beim Julianischen Kalender (alten Stil).\n\nDer Übergang der OKU (Orthodoxen Kirche der Ukraine) zum Neujulianischen Kalender (kompatibel mit dem Gregorianischen bis 2800) erfolgte am 1. September 2023.\nJetzt werden die meisten Kirchenfeiertage nach dem neuen Stil gefeiert, aber Ostern wird immer noch nach dem alten (Julianischen) Kalender berechnet.' :
        '1582 — Pope Gregory XIII introduced the Gregorian calendar (hence the name).\nCatholic countries adopted it immediately: Italy, Spain, Portugal, Poland.\nAfter October 4, 1582, October 15, 1582 came immediately — 10 days were skipped.\n\nProtestant countries (Germany, Great Britain, etc.) switched later — in the 17th–18th centuries.\nFor example, Great Britain and its colonies — in 1752, skipping 11 days.\n\nRussia (and accordingly Ukraine, Belarus, Georgia, etc. as part of the Russian Empire) —\nswitched only after the October Revolution, by decree of the Council of People\'s Commissars of January 24, 1918.\nAfter January 31, 1918, February 14, 1918 came immediately — 13 days were skipped.\n\n🇺🇦 Ukraine:\n\nUkraine switched to the Gregorian calendar together with Soviet Russia —\n📅 in February 1918.\nBefore that, the Julian calendar was in effect on the territory of Ukraine (as part of the Russian Empire).\n\n⛪ Church use:\n\nThe Orthodox Church in Ukraine remained on the Julian calendar (old style) for a long time.\n\nThe transition of the OCU (Orthodox Church of Ukraine) to the New Julian calendar (compatible with the Gregorian until 2800) took place on September 1, 2023.\nNow most church holidays are celebrated according to the new style, but Easter is still calculated according to the old (Julian) calendar.';
    
    if (postState.showFullGregoryCalendar) {
      return fullText;
    }
    
    // Берем первые 2 абзаца
    const paragraphs = fullText.split('\n\n');
    if (paragraphs.length >= 2) {
      return paragraphs[0] + '\n\n' + paragraphs[1];
    }
    return fullText;
  };
  
  // Функция для получения текста про украинский язык
  const getUkrainianLanguageText = () => {
    if (postState.showFullUkrainianLanguage) {
      return {
        asymmetric: t('ukrainian_language_asymmetric'),
        lexical: t('ukrainian_language_lexical'),
        origin: t('ukrainian_language_origin'),
        barriers: t('ukrainian_language_barriers'),
        psychological: t('ukrainian_language_psychological'),
        conclusion: t('ukrainian_language_conclusion')
      };
    }
    // Показываем только первые 2 абзаца
    return {
      asymmetric: t('ukrainian_language_asymmetric'),
      lexical: t('ukrainian_language_lexical'),
      origin: null,
      barriers: null,
      psychological: null,
      conclusion: null
    };
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
  
  
  // Все размеры экрана и стили теперь из хука useResponsiveStyles
  const isMobile = styles.isMobile;
  const isVeryMobile = styles.isVeryMobile;
  const isSmallScreen = styles.isSmallScreen;
  const h1FontSize = styles.h1FontSize;
  const christmasMarketTitle = t('christmas_market_card_title', { defaultValue: '🎄 CNN назвав найкрасивіший різдвяний ярмарок' });
  const christmasMarketImageAlt = t('christmas_market_card_image_alt', { defaultValue: 'Vienna Christmas Market at Rathausplatz' });
  const christmasMarketDefaults = {
    ua: {
      label: t('christmas_market_card_ua_label', { defaultValue: 'Українською' }),
      text: t('christmas_market_card_text_ua', {
        defaultValue: `CNN назвав різдвяний ярмарок на Ратушній площі у Відні найкрасивішим у рейтингу 2025 року за атмосферу, традиції та святковий шарм. Серед родзинок — дитяча ковзанка, міні-залізниця з "оленями", колесо огляду та аромат глінтвейну біля знаменитого Baum der Herzen, що сяє сотнями червоних вогників. Повний рейтинг: https://www.cnn.com/travel/best-christmas-markets-world

Що варто знати:
• У Відні 2025 року заплановано 14 офіційних ярмарків і 911 палаток, 180 з них — з їжею та напоями.
• На Rathausplatz працюватимуть 96 палаток — це найбільший ярмарок міста.
• Маркс-Халле стане найбільшим ринком із 186 палатками.

У топі рейтингу також Базель (Швейцарія) та Страсбург (Франція). Першу п'ятірку доповнюють Брюссель, Прага й Барселона.`
      })
    },
    de: {
      label: t('christmas_market_card_de_label', { defaultValue: 'Deutsch' }),
      text: t('christmas_market_card_text_de', {
        defaultValue: `CNN kürte den Wiener Rathausplatz (Christkindlmarkt am Rathausplatz) zum schönsten Weihnachtsmarkt im Ranking 2025 für Atmosphäre, Traditionen und festlichen Charme. Zu den Highlights zählen eine Eislaufbahn für Kinder, eine Mini-Eisenbahn mit "Rentieren", ein Riesenrad und der Duft von Glühwein rund um den berühmten Baum der Herzen mit Hunderten roten Lichtern. Mehr dazu bei CNN: https://www.cnn.com/travel/best-christmas-markets-world

Zahlen, die man kennen sollte:
• Wien zählt 2025 vierzehn offizielle Märkte und 911 Stände, davon 180 mit Speisen und Getränken.
• Am Rathausplatz stehen 96 Stände und damit die meisten in der Stadt.
• Die Marx Halle wird mit 186 Ständen der größte Markt.

Weitere Spitzenplätze im Ranking gehen an Basel (Schweiz) und Straßburg (Frankreich). Brüssel, Prag und Barcelona komplettieren die Top 5.`
      })
    },
    en: {
      label: t('christmas_market_card_en_label', { defaultValue: 'English' }),
      text: t('christmas_market_card_text_en', {
        defaultValue: `CNN named Vienna's Rathausplatz (the Christkindlmarkt on Rathausplatz) the most beautiful Christmas market in its 2025 ranking thanks to its atmosphere, traditions, and festive charm. Highlights include a children's ice rink, a mini railway with "reindeer", a Ferris wheel, and the aroma of mulled wine around the famous Baum der Herzen glowing with hundreds of red lights. Read more on CNN: https://www.cnn.com/travel/best-christmas-markets-world

Need-to-know figures:
• Vienna counts fourteen official markets and 911 stalls in 2025, including 180 serving food and drinks.
• Rathausplatz hosts 96 stalls, keeping the top spot.
• Marx Halle is set to become the largest market with 186 stalls.

Basel (Switzerland) and Strasbourg (France) also feature near the top of the ranking, with Brussels, Prague, and Barcelona completing the top five.`
      })
    }
  };
  const christmasMarketSection = christmasMarketDefaults[lang] || christmasMarketDefaults.ua;
  const shouldShowChristmasMarketLabel = lang !== 'ua';
  const transportMarqueePhrases = [
    'Перевезення меблів — деталі',
    'Möbeltransport — Details',
    'Furniture Transport — Details',
  ];
  const transportMarqueeHref = '/infocenter#transport-service';
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

          @keyframes snowFall {
            0% {
              background-position: 0 -200px, 50% -250px, 100% -180px;
            }
            100% {
              background-position: 0 220px, 50% 280px, 100% 260px;
            }
          }

          @keyframes snowDrift {
            0% {
              background-position: 0 -220px, 50% -180px;
            }
            50% {
              background-position: 30px 40px, 20px 120px;
            }
            100% {
              background-position: -30px 260px, -20px 320px;
            }
          }

          .market-steyr-frame {
            position: relative;
            overflow: hidden;
          }

          .market-steyr-snow,
          .market-steyr-snow::after {
            content: '';
            position: absolute;
            inset: -20% 0 -10%;
            pointer-events: none;
            background-repeat: repeat;
            mix-blend-mode: screen;
          }

          .market-steyr-snow {
            background-image:
              radial-gradient(rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 2px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.75) 0, rgba(255,255,255,0.75) 1.5px, transparent 2.5px),
              radial-gradient(rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1.2px, transparent 2.4px);
            background-size: 12% 160px, 18% 200px, 25% 240px;
            animation: snowFall 18s linear infinite;
            opacity: 0.85;
          }

          .market-steyr-snow::after {
            background-image:
              radial-gradient(rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.55) 0, rgba(255,255,255,0.55) 1px, transparent 2.2px);
            background-size: 20% 180px, 28% 260px;
            animation: snowDrift 26s linear infinite;
          }

          .transport-marquee {
            position: relative;
            overflow: hidden;
            background: rgba(21,101,192,0.08);
            border-radius: 12px;
            border: 1px solid rgba(21,101,192,0.18);
            width: min(90%, 1200px);
            margin: clamp(16px, 3vw, 32px) auto 0;
            padding: clamp(8px, 1.4vw, 14px) 0;
          }

          .transport-marquee-track {
            display: flex;
            align-items: center;
            white-space: nowrap;
            gap: clamp(32px, 6vw, 80px);
            animation: transportMarquee 18s linear infinite;
          }

          .transport-marquee-track > * {
            flex-shrink: 0;
          }

          .transport-marquee:hover .transport-marquee-track {
            animation-play-state: paused;
          }

          .transport-marquee-link {
            color: #1565c0;
            font-weight: 700;
            text-decoration: none;
            font-size: clamp(18px, 2.6vw, 28px);
            letter-spacing: 0.02em;
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0 clamp(12px, 2.4vw, 32px);
          }

          .transport-marquee-link::before {
            content: '🚛';
            font-size: 1.2em;
          }

          .transport-marquee-link:focus-visible {
            outline: 2px solid rgba(21,101,192,0.35);
            outline-offset: 4px;
            border-radius: 999px;
          }

          @keyframes transportMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .transport-marquee {
            position: relative;
            overflow: hidden;
            background: rgba(255,255,255,0.85);
            border-radius: 16px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.35);
            border: 1px solid rgba(21,101,192,0.18);
            width: min(90%, 1200px);
            margin: clamp(24px, 4vw, 48px) auto clamp(16px, 3vw, 32px);
            padding: clamp(10px, 1.5vw, 16px) 0;
          }

          .transport-marquee-track {
            display: flex;
            align-items: center;
            white-space: nowrap;
            gap: clamp(32px, 6vw, 80px);
            animation: transportMarquee 16s linear infinite;
          }

          .transport-marquee-track > * {
            flex-shrink: 0;
          }

          .transport-marquee:hover .transport-marquee-track {
            animation-play-state: paused;
          }

          .transport-marquee-link {
            color: #1565c0;
            font-weight: 700;
            text-decoration: none;
            font-size: clamp(18px, 2.6vw, 28px);
            letter-spacing: 0.02em;
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0 clamp(12px, 2.4vw, 32px);
          }

          .transport-marquee-link::before {
            content: '🚛';
            font-size: 1.2em;
          }

          .transport-marquee-link:focus-visible {
            outline: 2px solid rgba(21,101,192,0.35);
            outline-offset: 4px;
            border-radius: 999px;
          }

          @keyframes starSparkle {
            0%, 100% {
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
            }
            50% {
              opacity: 0.45;
              filter: drop-shadow(0 0 5px rgba(255,255,255,0.75));
            }
          }

          @media (max-width: 700px) {
            .market-steyr-snow {
              background-image:
                radial-gradient(circle at center, rgba(230,230,230,0.82) 0, rgba(230,230,230,0.82) 30%, transparent 55%),
                radial-gradient(circle at center, rgba(210,210,210,0.65) 0, rgba(210,210,210,0.65) 26%, transparent 50%),
                radial-gradient(circle at center, rgba(255,255,255,0.78) 0, rgba(255,255,255,0.78) 22%, transparent 46%);
              background-size: 4% 150px, 3% 140px, 5% 150px;
              animation: snowFall 18s linear infinite, starSparkle 3.5s ease-in-out infinite;
            }

            .market-steyr-snow::after {
              background-image:
                radial-gradient(circle at center, rgba(200,200,200,0.7) 0, rgba(200,200,200,0.7) 24%, transparent 50%),
                radial-gradient(circle at center, rgba(245,245,245,0.65) 0, rgba(245,245,245,0.65) 20%, transparent 46%);
              background-size: 3% 150px, 2.5% 140px;
              animation: snowDrift 26s linear infinite, starSparkle 4.2s ease-in-out infinite;
            }
          }

          @keyframes snowFall {
            0% {
              background-position: 0 -200px, 50% -250px, 100% -180px;
            }
            100% {
              background-position: 0 220px, 50% 280px, 100% 260px;
            }
          }

          @keyframes snowDrift {
            0% {
              background-position: 0 -220px, 50% -180px;
            }
            50% {
              background-position: 30px 40px, 20px 120px;
            }
            100% {
              background-position: -30px 260px, -20px 320px;
            }
          }

          .market-steyr-frame {
            position: relative;
            overflow: hidden;
          }

          .market-steyr-snow,
          .market-steyr-snow::after {
            content: '';
            position: absolute;
            inset: -20% 0 -10%;
            pointer-events: none;
            background-repeat: repeat;
            mix-blend-mode: screen;
          }

          .market-steyr-snow {
            background-image:
              radial-gradient(rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 2px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.75) 0, rgba(255,255,255,0.75) 1.5px, transparent 2.5px),
              radial-gradient(rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1.2px, transparent 2.4px);
            background-size: 12% 160px, 18% 200px, 25% 240px;
            animation: snowFall 18s linear infinite;
            opacity: 0.85;
          }

          .market-steyr-snow::after {
            background-image:
              radial-gradient(rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.55) 0, rgba(255,255,255,0.55) 1px, transparent 2.2px);
            background-size: 20% 180px, 28% 260px;
            animation: snowDrift 26s linear infinite;
          }

          @keyframes starSparkle {
            0%, 100% {
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
            }
            50% {
              opacity: 0.45;
              filter: drop-shadow(0 0 5px rgba(255,255,255,0.75));
            }
          }

          @media (max-width: 700px) {
            .market-steyr-snow {
              background-image:
                radial-gradient(circle at center, rgba(230,230,230,0.82) 0, rgba(230,230,230,0.82) 30%, transparent 55%),
                radial-gradient(circle at center, rgba(210,210,210,0.65) 0, rgba(210,210,210,0.65) 26%, transparent 50%),
                radial-gradient(circle at center, rgba(255,255,255,0.78) 0, rgba(255,255,255,0.78) 22%, transparent 46%);
              background-size: 4% 150px, 3% 140px, 5% 150px;
              animation: snowFall 18s linear infinite, starSparkle 3.5s ease-in-out infinite;
            }

            .market-steyr-snow::after {
              background-image:
                radial-gradient(circle at center, rgba(200,200,200,0.7) 0, rgba(200,200,200,0.7) 24%, transparent 50%),
                radial-gradient(circle at center, rgba(245,245,245,0.65) 0, rgba(245,245,245,0.65) 20%, transparent 46%);
              background-size: 3% 150px, 2.5% 140px;
              animation: snowDrift 26s linear infinite, starSparkle 4.2s ease-in-out infinite;
            }
          }

          @keyframes snowFall {
            0% {
              background-position: 0 -200px, 50% -250px, 100% -180px;
            }
            100% {
              background-position: 0 220px, 50% 280px, 100% 260px;
            }
          }

          @keyframes snowDrift {
            0% {
              background-position: 0 -220px, 50% -180px;
            }
            50% {
              background-position: 30px 40px, 20px 120px;
            }
            100% {
              background-position: -30px 260px, -20px 320px;
            }
          }

          .market-steyr-frame {
            position: relative;
            overflow: hidden;
          }

          .market-steyr-snow,
          .market-steyr-snow::after {
            content: '';
            position: absolute;
            inset: -20% 0 -10%;
            pointer-events: none;
            background-repeat: repeat;
            mix-blend-mode: screen;
          }

          .market-steyr-snow {
            background-image:
              radial-gradient(rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 2px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.75) 0, rgba(255,255,255,0.75) 1.5px, transparent 2.5px),
              radial-gradient(rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1.2px, transparent 2.4px);
            background-size: 12% 160px, 18% 200px, 25% 240px;
            animation: snowFall 18s linear infinite;
            opacity: 0.85;
          }

          .market-steyr-snow::after {
            background-image:
              radial-gradient(rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.55) 0, rgba(255,255,255,0.55) 1px, transparent 2.2px);
            background-size: 20% 180px, 28% 260px;
            animation: snowDrift 26s linear infinite;
          }

          @keyframes starSparkle {
            0%, 100% {
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
            }
            50% {
              opacity: 0.45;
              filter: drop-shadow(0 0 5px rgba(255,255,255,0.75));
            }
          }

          @media (max-width: 700px) {
            .market-steyr-snow {
              background-image:
                radial-gradient(circle at center, rgba(230,230,230,0.82) 0, rgba(230,230,230,0.82) 30%, transparent 55%),
                radial-gradient(circle at center, rgba(210,210,210,0.65) 0, rgba(210,210,210,0.65) 26%, transparent 50%),
                radial-gradient(circle at center, rgba(255,255,255,0.78) 0, rgba(255,255,255,0.78) 22%, transparent 46%);
              background-size: 4% 150px, 3% 140px, 5% 150px;
              animation: snowFall 18s linear infinite, starSparkle 3.5s ease-in-out infinite;
            }

            .market-steyr-snow::after {
              background-image:
                radial-gradient(circle at center, rgba(200,200,200,0.7) 0, rgba(200,200,200,0.7) 24%, transparent 50%),
                radial-gradient(circle at center, rgba(245,245,245,0.65) 0, rgba(245,245,245,0.65) 20%, transparent 46%);
              background-size: 3% 150px, 2.5% 140px;
              animation: snowDrift 26s linear infinite, starSparkle 4.2s ease-in-out infinite;
            }
          }

          @keyframes snowFall {
            0% {
              background-position: 0 -200px, 50% -250px, 100% -180px;
            }
            100% {
              background-position: 0 220px, 50% 280px, 100% 260px;
            }
          }

          @keyframes snowDrift {
            0% {
              background-position: 0 -220px, 50% -180px;
            }
            50% {
              background-position: 30px 40px, 20px 120px;
            }
            100% {
              background-position: -30px 260px, -20px 320px;
            }
          }

          .market-steyr-frame {
            position: relative;
            overflow: hidden;
          }

          .market-steyr-snow,
          .market-steyr-snow::after {
            content: '';
            position: absolute;
            inset: -20% 0 -10%;
            pointer-events: none;
            background-repeat: repeat;
            mix-blend-mode: screen;
          }

          .market-steyr-snow {
            background-image:
              radial-gradient(rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 2px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.75) 0, rgba(255,255,255,0.75) 1.5px, transparent 2.5px),
              radial-gradient(rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1.2px, transparent 2.4px);
            background-size: 12% 160px, 18% 200px, 25% 240px;
            animation: snowFall 18s linear infinite;
            opacity: 0.85;
          }

          .market-steyr-snow::after {
            background-image:
              radial-gradient(rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.55) 0, rgba(255,255,255,0.55) 1px, transparent 2.2px);
            background-size: 20% 180px, 28% 260px;
            animation: snowDrift 26s linear infinite;
          }

          @keyframes starSparkle {
            0%, 100% {
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
            }
            50% {
              opacity: 0.45;
              filter: drop-shadow(0 0 5px rgba(255,255,255,0.75));
            }
          }

          @media (max-width: 700px) {
            .market-steyr-snow {
              background-image:
                radial-gradient(circle at center, rgba(230,230,230,0.82) 0, rgba(230,230,230,0.82) 30%, transparent 55%),
                radial-gradient(circle at center, rgba(210,210,210,0.65) 0, rgba(210,210,210,0.65) 26%, transparent 50%),
                radial-gradient(circle at center, rgba(255,255,255,0.78) 0, rgba(255,255,255,0.78) 22%, transparent 46%);
              background-size: 4% 150px, 3% 140px, 5% 150px;
              animation: snowFall 18s linear infinite, starSparkle 3.5s ease-in-out infinite;
            }

            .market-steyr-snow::after {
              background-image:
                radial-gradient(circle at center, rgba(200,200,200,0.7) 0, rgba(200,200,200,0.7) 24%, transparent 50%),
                radial-gradient(circle at center, rgba(245,245,245,0.65) 0, rgba(245,245,245,0.65) 20%, transparent 46%);
              background-size: 3% 150px, 2.5% 140px;
              animation: snowDrift 26s linear infinite, starSparkle 4.2s ease-in-out infinite;
            }
          }

          @keyframes snowFall {
            0% {
              background-position: 0 -200px, 50% -250px, 100% -180px;
            }
            100% {
              background-position: 0 220px, 50% 280px, 100% 260px;
            }
          }

          @keyframes snowDrift {
            0% {
              background-position: 0 -220px, 50% -180px;
            }
            50% {
              background-position: 30px 40px, 20px 120px;
            }
            100% {
              background-position: -30px 260px, -20px 320px;
            }
          }

          .market-steyr-frame {
            position: relative;
            overflow: hidden;
          }

          .market-steyr-snow,
          .market-steyr-snow::after {
            content: '';
            position: absolute;
            inset: -20% 0 -10%;
            pointer-events: none;
            background-repeat: repeat;
            mix-blend-mode: screen;
          }

          .market-steyr-snow {
            background-image:
              radial-gradient(rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 2px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.75) 0, rgba(255,255,255,0.75) 1.5px, transparent 2.5px),
              radial-gradient(rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1.2px, transparent 2.4px);
            background-size: 12% 160px, 18% 200px, 25% 240px;
            animation: snowFall 18s linear infinite;
            opacity: 0.85;
          }

          .market-steyr-snow::after {
            background-image:
              radial-gradient(rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.55) 0, rgba(255,255,255,0.55) 1px, transparent 2.2px);
            background-size: 20% 180px, 28% 260px;
            animation: snowDrift 26s linear infinite;
          }

          @keyframes starSparkle {
            0%, 100% {
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
            }
            50% {
              opacity: 0.45;
              filter: drop-shadow(0 0 5px rgba(255,255,255,0.75));
            }
          }

          @media (max-width: 700px) {
            .market-steyr-snow {
              background-image:
                radial-gradient(circle at center, rgba(230,230,230,0.82) 0, rgba(230,230,230,0.82) 30%, transparent 55%),
                radial-gradient(circle at center, rgba(210,210,210,0.65) 0, rgba(210,210,210,0.65) 26%, transparent 50%),
                radial-gradient(circle at center, rgba(255,255,255,0.78) 0, rgba(255,255,255,0.78) 22%, transparent 46%);
              background-size: 4% 150px, 3% 140px, 5% 150px;
              animation: snowFall 18s linear infinite, starSparkle 3.5s ease-in-out infinite;
            }

            .market-steyr-snow::after {
              background-image:
                radial-gradient(circle at center, rgba(200,200,200,0.7) 0, rgba(200,200,200,0.7) 24%, transparent 50%),
                radial-gradient(circle at center, rgba(245,245,245,0.65) 0, rgba(245,245,245,0.65) 20%, transparent 46%);
              background-size: 3% 150px, 2.5% 140px;
              animation: snowDrift 26s linear infinite, starSparkle 4.2s ease-in-out infinite;
            }
          }

          @keyframes snowFall {
            0% {
              background-position: 0 -200px, 50% -250px, 100% -180px;
            }
            100% {
              background-position: 0 220px, 50% 280px, 100% 260px;
            }
          }

          @keyframes snowDrift {
            0% {
              background-position: 0 -220px, 50% -180px;
            }
            50% {
              background-position: 30px 40px, 20px 120px;
            }
            100% {
              background-position: -30px 260px, -20px 320px;
            }
          }

          .market-steyr-frame {
            position: relative;
            overflow: hidden;
          }

          .market-steyr-snow,
          .market-steyr-snow::after {
            content: '';
            position: absolute;
            inset: -20% 0 -10%;
            pointer-events: none;
            background-repeat: repeat;
            mix-blend-mode: screen;
          }

          .market-steyr-snow {
            background-image:
              radial-gradient(rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 2px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.75) 0, rgba(255,255,255,0.75) 1.5px, transparent 2.5px),
              radial-gradient(rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1.2px, transparent 2.4px);
            background-size: 12% 160px, 18% 200px, 25% 240px;
            animation: snowFall 18s linear infinite;
            opacity: 0.85;
          }

          .market-steyr-snow::after {
            background-image:
              radial-gradient(rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 3px),
              radial-gradient(rgba(255,255,255,0.55) 0, rgba(255,255,255,0.55) 1px, transparent 2.2px);
            background-size: 20% 180px, 28% 260px;
            animation: snowDrift 26s linear infinite;
          }

          @keyframes starSparkle {
            0%, 100% {
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
            }
            50% {
              opacity: 0.45;
              filter: drop-shadow(0 0 5px rgba(255,255,255,0.75));
            }
          }

          @media (max-width: 700px) {
            .market-steyr-snow {
              background-image:
                radial-gradient(circle at center, rgba(230,230,230,0.82) 0, rgba(230,230,230,0.82) 30%, transparent 55%),
                radial-gradient(circle at center, rgba(210,210,210,0.65) 0, rgba(210,210,210,0.65) 26%, transparent 50%),
                radial-gradient(circle at center, rgba(255,255,255,0.78) 0, rgba(255,255,255,0.78) 22%, transparent 46%);
              background-size: 4% 150px, 3% 140px, 5% 150px;
              animation: snowFall 18s linear infinite, starSparkle 3.5s ease-in-out infinite;
            }

            .market-steyr-snow::after {
              background-image:
                radial-gradient(circle at center, rgba(200,200,200,0.7) 0, rgba(200,200,200,0.7) 24%, transparent 50%),
                radial-gradient(circle at center, rgba(245,245,245,0.65) 0, rgba(245,245,245,0.65) 20%, transparent 46%);
              background-size: 3% 150px, 2.5% 140px;
              animation: snowDrift 26s linear infinite, starSparkle 4.2s ease-in-out infinite;
            }
          }

          .christmas-market-card {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            gap: 2rem;
          }

          .christmas-market-image {
            width: 40%;
            max-width: 40%;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          }

          .christmas-market-content {
            flex: 1;
            font-size: 18px;
            color: #234;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            text-align: left;
          }

          @media (max-width: 900px) {
            .christmas-market-card {
              flex-direction: column;
              align-items: center;
              gap: 1.5rem;
            }

            .christmas-market-image {
              width: 100%;
              max-width: 100%;
            }

            .christmas-market-content {
              width: 100%;
              font-size: 16px;
              text-align: center;
            }

            .christmas-market-content > div {
              text-align: center;
            }
          }

          @media (max-width: 768px) {
            .rainbow-post-card,
            .christmas-sweets-card {
              flex-direction: column;
              align-items: center;
            }

            .rainbow-post-image,
            .christmas-sweets-image {
              min-width: 0;
              max-width: 100%;
              margin-bottom: 18px;
            }

            .rainbow-post-text,
            .christmas-sweets-text {
              font-size: 1em;
            }
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

        {/* Пост TUKA — музично-поетичний вечір Леся Українка */}
        {/* Модуль "Цей день в історії" */}
        <div className="module-heading" style={{
          fontWeight: 900,
          fontSize: '3.8em',
          color: '#1565c0',
          margin: '3vw 0 1vw 0',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}>{t('this_day_in_history') || 'Цей день в історії'}</div>

        {/* Пост Krig.png */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          <div style={{
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '300px',
            maxWidth: isSmallScreen ? '100%' : '400px'
          }}>
            <img
              src={krigImg}
              alt="Krig"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          </div>
          <div style={{
            flex: '1 1 auto',
            fontSize: '1.1em',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'left'
          }}>
            {t('krig_title') && (
              <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
                {t('krig_title')}
              </p>
            )}
            {t('krig_text') && (
              <div style={{ whiteSpace: 'pre-line' }}>
                {t('krig_text')}
              </div>
            )}
          </div>
        </div>

        {/* Пост про Масляну */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          <div style={{
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '300px',
            maxWidth: isSmallScreen ? '100%' : '400px'
          }}>
            <img
              src={maslenitsaImg}
              alt={t('maslenitsa_title')}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          </div>
          <div style={{
            flex: '1 1 auto',
            fontSize: '1.1em',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('maslenitsa_title')}
            </p>
            <div style={{ whiteSpace: 'pre-line' }}>
              {t('maslenitsa_text')}
            </div>
          </div>
        </div>

        {/* Пост про 12 лютого 1934 — збройні зіткнення в Штайері (Лютневе повстання) */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          <div style={{
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '320px',
            maxWidth: isSmallScreen ? '100%' : '380px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <img
              src={zeitungImg}
              alt="Zeitung Steyr Februar 1934"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
            <img
              src={plaztImg}
              alt="Platz Steyr"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
            <img
              src={steyrFeb1934Img}
              alt="Steyr 12. Februar 1934"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          </div>
          <div style={{
            flex: '1 1 auto',
            fontSize: '1.1em',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('steyr_feb1934_title')}
            </p>
            <div style={{ whiteSpace: 'pre-line' }}>
              {t('steyr_feb1934_text')}
            </div>
          </div>
        </div>

        {/* Пост про День пам'яті героїв Крут */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          <div style={{
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '300px',
            maxWidth: isSmallScreen ? '100%' : '400px'
          }}>
            <img
              src={krutImg}
              alt={t('kruty_title')}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          </div>
          <div style={{
            flex: '1 1 auto',
            fontSize: '1.1em',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('kruty_title')}
            </p>
            <div style={{ whiteSpace: 'pre-line' }}>
              {t('kruty_text')}
            </div>
          </div>
        </div>
        
        {/* Пост про День Соборності України */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          {/* Картинка слева */}
          <div style={{ 
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '300px',
            maxWidth: isSmallScreen ? '100%' : '400px'
          }}>
            <img 
              src={image2201} 
              alt="22 January" 
              style={{ 
                width: '100%',
                height: 'auto', 
                borderRadius: 12, 
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
              }} 
            />
          </div>

          {/* Текст справа */}
          <div style={{ 
            flex: '1 1 auto',
            fontSize: '1.1em', 
            lineHeight: '1.8', 
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('unity_day_title')}
            </p>
            
            <div style={{ whiteSpace: 'pre-line' }}>
              {t('unity_day_text')}
            </div>
          </div>
        </div>
        
        {/* Пост про Национальный день Австрии */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          {/* Картинка слева */}
          <div style={{ 
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '300px',
            maxWidth: isSmallScreen ? '100%' : '400px'
          }}>
            <img 
              src={nationalTadImg} 
              alt="Austria National Day" 
              style={{ 
                width: '100%',
                height: 'auto', 
                borderRadius: 12, 
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
              }} 
            />
          </div>

          {/* Текст справа */}
          <div style={{ 
            flex: '1 1 auto',
            fontSize: '1.1em', 
            lineHeight: '1.8', 
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('austria_national_day_title')}
            </p>
            
            <div style={{ whiteSpace: 'pre-line' }}>
              {getAustriaNationalDayText()}
            </div>
            
            {!postState.showFullAustriaNationalDay ? (
              <button
                onClick={() => postState.setShowFullAustriaNationalDay(true)}
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
                onClick={() => postState.setShowFullAustriaNationalDay(false)}
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
                {t('hide_text') || 'Сховати'}
              </button>
            )}
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

        {/* Пост про інтеграцію українців в Австрії */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          <div style={{
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '300px',
            maxWidth: isSmallScreen ? '100%' : '400px'
          }}>
            <img
              src={integrationImg}
              alt={t('integration_ukrainians_title')}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          </div>
          <div style={{
            flex: '1 1 auto',
            fontSize: '1.1em',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('integration_ukrainians_title')}
            </p>
            <div style={{ whiteSpace: 'pre-line' }}>
              {(() => {
                const url = 'https://orf.at/stories/3420707/';
                const parts = t('integration_ukrainians_text').split(`(${url})`);
                return parts.map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < parts.length - 1 && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1565c0', textDecoration: 'underline' }}
                      >
                        ({url})
                      </a>
                    )}
                  </React.Fragment>
                ));
              })()}
            </div>
          </div>
        </div>

         
        {/* Модуль "Это интересно" */}
        <div className="module-heading" style={{
          fontWeight: 900,
          fontSize: '3.8em',
          color: '#1565c0',
          margin: '3vw 0 1vw 0',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}>{t('this_is_interesting') || 'Це цікаво'}</div>

         {/* Пост про українську мову */}
         <div className="ukrainian-language-post-card" style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          flexDirection: isSmallScreen ? 'column' : 'row',
          boxSizing: 'border-box'
        }}>
          {/* Картинка слева */}
          <div className="ukrainian-language-post-image" style={{ 
            flex: '0 0 auto',
            minWidth: isSmallScreen ? '100%' : '300px',
            maxWidth: isSmallScreen ? '100%' : '400px'
          }}>
            <img 
              src={spracheImg} 
              alt={t('ukrainian_language_image_alt')} 
              style={{ 
                width: '100%',
                height: 'auto', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
              }} 
            />
          </div>

          {/* Текст справа */}
          <div className="ukrainian-language-post-text" style={{ 
            flex: '1 1 auto',
            fontSize: '1.1em', 
            lineHeight: '1.8', 
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('ukrainian_language_title')}
            </p>
            
            {(() => {
              const textParts = getUkrainianLanguageText();
              return (
                <>
                  <p style={{ marginBottom: '20px' }}>
                    <strong>{textParts.asymmetric}</strong>
                  </p>

                  <p style={{ marginBottom: '20px', whiteSpace: 'pre-line' }}>
                    {textParts.lexical}
                  </p>

                  {textParts.origin && (
                    <p style={{ marginBottom: '20px', whiteSpace: 'pre-line' }}>
                      {textParts.origin}
                    </p>
                  )}

                  {textParts.barriers && (
                    <p style={{ marginBottom: '20px' }}>
                      <strong>{textParts.barriers}</strong>
                    </p>
                  )}

                  {textParts.psychological && (
                    <p style={{ marginBottom: '20px' }}>
                      <strong>{textParts.psychological}</strong>
                    </p>
                  )}

                  {textParts.conclusion && (
                    <p style={{ marginTop: '20px', fontWeight: '600', color: '#1565c0', whiteSpace: 'pre-line' }}>
                      {textParts.conclusion}
                    </p>
                  )}
                </>
              );
            })()}
            
            {!postState.showFullUkrainianLanguage ? (
              <button
                onClick={() => postState.setShowFullUkrainianLanguage(true)}
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
                onClick={() => postState.setShowFullUkrainianLanguage(false)}
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
                {t('hide_text') || 'Сховати'}
              </button>
            )}
          </div>
        </div>
        
        {/* Пост про радугу */}
        <div className="rainbow-post-card" style={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
            maxWidth: 1200,
            width: '90vw',
            minWidth: 320,
            margin: '0 auto 1vw auto',
            display: 'flex',
            gap: '25px',
            alignItems: 'flex-start',
            boxSizing: 'border-box'
            }}>
          {/* Картинка слева */}
          <div className="rainbow-post-image" style={{ 
            flex: '0 0 auto',
            minWidth: '300px',
            maxWidth: '400px'
          }}>
            <img 
              src={regenbogenImg} 
              alt={t('rainbow_post_image_alt')} 
              style={{ 
                width: '100%',
                height: 'auto', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
              }} 
            />
          </div>

          {/* Текст справа */}
          <div className="rainbow-post-text" style={{ 
            flex: '1 1 auto',
            fontSize: '1.1em', 
            lineHeight: '1.8', 
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('rainbow_post_title')}
            </p>
            
                <div style={{ whiteSpace: 'pre-line' }}>
              {t('rainbow_post_text')}
          </div>
              </div>
            </div>
         
        {/* Пост про різдвяні частування */}
        <div className="christmas-sweets-card" style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: 1200,
          width: '90vw',
          minWidth: 320,
          margin: '0 auto 1vw auto',
          display: 'flex',
          gap: '25px',
          alignItems: 'flex-start',
          boxSizing: 'border-box'
        }}>
          {/* Картинка слева */}
          <div className="christmas-sweets-image" style={{
            flex: '0 0 auto',
            minWidth: '300px',
            maxWidth: '400px'
          }}>
            <img
              src={christmasImg}
              alt={t('christmas_sweets_image_alt')}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
          </div>

          {/* Текст справа */}
          <div className="christmas-sweets-text" style={{
            flex: '1 1 auto',
            fontSize: '1.1em',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '15px', fontSize: '1.2em', fontWeight: '600', color: '#1565c0' }}>
              {t('christmas_sweets_title')}
            </p>

            <div style={{ whiteSpace: 'pre-line' }}>
              {t('christmas_sweets_text')}
            </div>
          </div>
        </div>
        {/* Пост про туристический рекорд Австрии */}
        {(() => {
          const news48 = news.find(n => n.id === 48);
          return (
            <div style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              padding: '2vw',
              maxWidth: 1200,
              width: '90vw',
              minWidth: 320,
              margin: '0 auto 1vw auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box'
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
        

        {/* Пост про Кульчицкого */}
         {isSmallScreen ? (
          <div 
            className="animated-card card-1"
            style={{
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 1200,
             width: '90vw',
             minWidth: 320,
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             gap: '1rem',
             boxSizing: 'border-box'
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
              {!postState.showFullKolschitzkyText && (
                <button
                  onClick={() => postState.setShowFullKolschitzkyText(true)}
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
             width: '90vw',
             minWidth: 320,
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'center',
             gap: '2rem',
             boxSizing: 'border-box'
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
              {!postState.showFullKolschitzkyText && (
                <button
                  onClick={() => postState.setShowFullKolschitzkyText(true)}
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
            maxWidth: 1200,
            width: '90vw',
            minWidth: 320,
            margin: '0 auto 1vw auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            boxSizing: 'border-box'
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
            {!postState.showFullKolschitzkyText && (
              <button
                onClick={() => postState.setShowFullKolschitzkyText(true)}
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
               maxWidth: 1200,
               width: '90vw',
               minWidth: 320,
               margin: '0 auto 1vw auto',
               textAlign: 'center',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               boxSizing: 'border-box'
             }}
           >
             <img src={EurovisionImg} alt="Eurovision 2026 Vienna" style={{ 
               width: '100%', 
               height: 'auto', 
               borderRadius: 12, 
               margin: '0 auto 16px auto', 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               display: 'block'
             }} id="eurovision-image" />
             <div style={{ fontSize: 18, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%' }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                 🎶 {t('eurovision_title') || 'Відень готується до грандіозного святкування 70-річчя Євробачення'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {(() => {
                   const fullText = t('eurovision_text') || 'Австрійська столиця перетвориться на головний центр пісенного шоу 2026 року. Ратушна площа (Rathausplatz) знову стане Eurovillage, де вболівальники зможуть безкоштовно дивитися півфінали й фінал конкурсу на великих екранах, а Євроклуб цього разу відкриють безпосередньо у стінах віденської ратуші. Головні концерти проходитимуть в Wiener Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році.\n\nМер міста підтвердив, що Відень виділить 22,6 млн євро на організацію, попри діючу програму економії. Для порівняння: Ліверпуль витрачав 16 млн €, Мальме — 18 млн €, Турин — 30 млн €, а Базель планував 33,5 млн €. Повернення конкурсу до Відня пояснюють не лише символікою ювілейного шоу, а й зручністю міста — сучасні аеропорти, залізничні сполучення та великий вибір готелів роблять його ідеальним місцем для фанів з усієї Європи.';
                   if (postState.showFullEurovision) {
                     return fullText;
                   }
                   // Короткая версия до "Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році."
                   const shortTextEnd = lang === 'ua' ? 'Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році.' :
                                        lang === 'de' ? 'Stadthalle — einer Arena mit 16.000 Plätzen, die bereits 2015 den Eurovision Song Contest ausgerichtet hat.' :
                                        'Stadthalle — a 16,000-seat arena that has already hosted Eurovision in 2015.';
                   const shortTextIndex = fullText.indexOf(shortTextEnd);
                   if (shortTextIndex !== -1) {
                     return fullText.substring(0, shortTextIndex + shortTextEnd.length);
                   }
                   return fullText;
                 })()}
                 {!postState.showFullEurovision && (
                   <button
                     onClick={() => postState.setShowFullEurovision(true)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw',
                       display: 'block',
                       margin: '1vw auto 0'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('more_ellipsis') || 'далі...'}
                   </button>
                 )}
                 {postState.showFullEurovision && (
                   <button
                     onClick={() => postState.setShowFullEurovision(false)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw',
                       display: 'block',
                       margin: '1vw auto 0'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('hide_text') || 'Сховати'}
                   </button>
                 )}
               </div>
             </div>
           </div>
         ) : (
           <div 
             className="animated-card card-1"
             style={{
               display: 'flex',
               flexDirection: 'row',
               alignItems: 'flex-start',
               gap: '2vw',
               margin: '0 auto 1vw auto',
               background: 'rgba(255,255,255,0.85)',
               borderRadius: 16,
               boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
               padding: '2vw',
               maxWidth: 1200,
               width: '90vw',
               minWidth: 320,
               textAlign: 'left',
               boxSizing: 'border-box'
             }}
           >
             <img src={EurovisionImg} alt="Eurovision 2026 Vienna" style={{ 
               width: '40%',
               maxWidth: '40%',
               height: 'auto', 
               borderRadius: 12, 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               flexShrink: 0
             }} id="eurovision-image" />
             <div style={{ 
               flex: 1,
               fontSize: 18, 
               color: '#234', 
               whiteSpace: 'pre-line' 
             }}>
               <div style={{ fontSize: 20, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                 🎶 {t('eurovision_title') || 'Відень готується до грандіозного святкування 70-річчя Євробачення'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {(() => {
                   const fullText = t('eurovision_text') || 'Австрійська столиця перетвориться на головний центр пісенного шоу 2026 року. Ратушна площа (Rathausplatz) знову стане Eurovillage, де вболівальники зможуть безкоштовно дивитися півфінали й фінал конкурсу на великих екранах, а Євроклуб цього разу відкриють безпосередньо у стінах віденської ратуші. Головні концерти проходитимуть в Wiener Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році.\n\nМер міста підтвердив, що Відень виділить 22,6 млн євро на організацію, попри діючу програму економії. Для порівняння: Ліверпуль витрачав 16 млн €, Мальме — 18 млн €, Турин — 30 млн €, а Базель планував 33,5 млн €. Повернення конкурсу до Відня пояснюють не лише символікою ювілейного шоу, а й зручністю міста — сучасні аеропорти, залізничні сполучення та великий вибір готелів роблять його ідеальним місцем для фанів з усієї Європи.';
                   if (postState.showFullEurovision) {
                     return fullText;
                   }
                   // Короткая версия до "Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році."
                   const shortTextEnd = lang === 'ua' ? 'Stadthalle — арені на 16 тисяч місць, яка вже приймала Євробачення у 2015 році.' :
                                        lang === 'de' ? 'Stadthalle — einer Arena mit 16.000 Plätzen, die bereits 2015 den Eurovision Song Contest ausgerichtet hat.' :
                                        'Stadthalle — a 16,000-seat arena that has already hosted Eurovision in 2015.';
                   const shortTextIndex = fullText.indexOf(shortTextEnd);
                   if (shortTextIndex !== -1) {
                     return fullText.substring(0, shortTextIndex + shortTextEnd.length);
                   }
                   return fullText;
                 })()}
                 {!postState.showFullEurovision && (
                   <button
                     onClick={() => postState.setShowFullEurovision(true)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('more_ellipsis') || 'далі...'}
                   </button>
                 )}
                 {postState.showFullEurovision && (
                   <button
                     onClick={() => postState.setShowFullEurovision(false)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('hide_text') || 'Сховати'}
                   </button>
                 )}
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
             maxWidth: 1200,
             width: '90vw',
             minWidth: 320,
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             boxSizing: 'border-box'
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
             <div style={{ fontSize: 14, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%', fontFamily: 'Inter, sans-serif' }}>
               <div style={{ fontSize: 16, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                 {lang === 'ua' ? '🇦🇹 5 фактів про Австрію, які вас здивують' :
                  lang === 'de' ? '🇦🇹 5 Fakten über Österreich, die Sie überraschen werden' :
                  '🇦🇹 5 facts about Austria that will surprise you'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {oldNumberAnimations.map((anim, index) => {
                   if (!postState.showFullAustriaFacts1 && index > 1) return null;
                   return (
                     <React.Fragment key={anim.id}>
                       <span style={{
                         fontSize: 18,
                         fontWeight: 900,
                         color: '#1565c0',
                         marginRight: 8,
                         animation: anim.animation,
                         display: 'inline-block'
                       }}>{anim.id}.</span>
                       {index === 0 && <>
                         <strong>{lang === 'ua' ? 'Тут народився ЦМОК (вальс)' :
                                  lang === 'de' ? 'Hier wurde der Walzer geboren' :
                                  'The Waltz was born here'}</strong><br /><br />
                         {lang === 'ua' ? 'Вальс як танець зародився у Відні у XVIII столітті. Віденський вальс досі вважається класикою світських балів, а віденський бал — мрія для всіх шанувальників елегантності.' :
                          lang === 'de' ? 'Der Walzer als Tanz entstand im 18. Jahrhundert in Wien. Der Wiener Walzer gilt noch heute als Klassiker der Gesellschaftsbälle, und ein Wiener Ball ist der Traum aller Liebhaber der Eleganz.' :
                          'The waltz as a dance originated in Vienna in the 18th century. The Viennese waltz is still considered a classic of social balls, and a Viennese ball is a dream for all lovers of elegance.'}
                       </>}
                       {index === 1 && <>
                         <strong>{lang === 'ua' ? 'Австрія — країна замків і палаців' :
                                  lang === 'de' ? 'Österreich ist ein Land der Schlösser und Paläste' :
                                  'Austria is a country of castles and palaces'}</strong><br /><br />
                         {lang === 'ua' ? 'Тут понад 2 000 замків і палаців! Шенбрунн і Гофбург у Відні, середньовічні фортеці в Зальцбурзі — справжній рай для любителів історії та архітектури.' :
                          lang === 'de' ? 'Hier gibt es über 2.000 Schlösser und Paläste! Schönbrunn und Hofburg in Wien, mittelalterliche Festungen in Salzburg — ein wahres Paradies für Geschichts- und Architekturliebhaber.' :
                          'There are over 2,000 castles and palaces! Schönbrunn and Hofburg in Vienna, medieval fortresses in Salzburg — a true paradise for history and architecture lovers.'}
                       </>}
                       {index === 2 && <>
                         <strong>{lang === 'ua' ? 'Тут народилися великі генії музики' :
                                  lang === 'de' ? 'Hier wurden große Musikgenies geboren' :
                                  'Great musical geniuses were born here'}</strong><br /><br />
                         {lang === 'ua' ? 'Моцарт, Гайдн, Шуберт і навіть Бетховен більшу частину життя творив у Відні. Не дарма Австрію називають «музичною столицею світу».' :
                          lang === 'de' ? 'Mozart, Haydn, Schubert und sogar Beethoven verbrachten den größten Teil ihres Lebens schaffend in Wien. Nicht umsonst wird Österreich die "musikalische Hauptstadt der Welt" genannt.' :
                          'Mozart, Haydn, Schubert, and even Beethoven spent most of their lives creating in Vienna. It\'s no wonder Austria is called the "musical capital of the world."'}
                       </>}
                       {index === 3 && <>
                         <strong>{lang === 'ua' ? 'Кава по-віденськи — це не міф' :
                                  lang === 'de' ? 'Wiener Kaffee ist kein Mythos' :
                                  'Viennese coffee is not a myth'}</strong><br /><br />
                         {lang === 'ua' ? 'Віденські кав\'ярні — це окрема культура. Кажуть, традиція пішла ще від турків у XVII столітті. Сьогодні кав\'ярні Відня внесені до списку нематеріальної спадщини ЮНЕСКО!' :
                          lang === 'de' ? 'Wiener Kaffeehäuser sind eine eigene Kultur. Man sagt, die Tradition geht auf die Türken im 17. Jahrhundert zurück. Heute sind Wiens Kaffeehäuser in die UNESCO-Liste des immateriellen Kulturerbes aufgenommen!' :
                          'Viennese coffee houses are a separate culture. They say the tradition originated from the Turks in the 17th century. Today, Vienna\'s coffee houses are included in the UNESCO Intangible Cultural Heritage list!'}
                       </>}
                       {index === 4 && <>
                         <strong>{lang === 'ua' ? 'Австрія — одна з найзеленіших країн Європи' :
                                  lang === 'de' ? 'Österreich ist eines der grünsten Länder Europas' :
                                  'Austria is one of the greenest countries in Europe'}</strong><br /><br />
                         {lang === 'ua' ? 'Майже 60% території займають гори (Альпи), а близько третини — ліси. Це рай для тих, хто любить гірськолижний спорт, хайкінг і чисте повітря.' :
                          lang === 'de' ? 'Fast 60% des Territoriums nehmen Berge (Alpen) ein, und etwa ein Drittel sind Wälder. Das ist ein Paradies für alle, die Skifahren, Wandern und saubere Luft lieben.' :
                          'Almost 60% of the territory is mountains (Alps), and about a third is forests. This is a paradise for those who love skiing, hiking, and clean air.'}
                       </>}
                       <br /><br />
                     </React.Fragment>
                   );
                 })}
                 {!postState.showFullAustriaFacts1 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts1(true)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw',
                       display: 'block',
                       margin: '1vw auto 0'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('more_ellipsis') || 'далі...'}
                   </button>
                 )}
                 {postState.showFullAustriaFacts1 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts1(false)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw',
                       display: 'block',
                       margin: '1vw auto 0'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('hide_text') || 'Сховати'}
                   </button>
                 )}
               </div>
             </div>
           </div>
         ) : (
           <div style={{
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'flex-start',
             gap: '2vw',
             margin: '0 auto 1vw auto',
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 1200,
             width: '90vw',
             minWidth: 320,
             textAlign: 'left',
             boxSizing: 'border-box'
           }}>
             <img src={WienImg} alt="Wien Austria" style={{ 
               width: '40%',
               maxWidth: '40%',
               height: 'auto', 
               borderRadius: 12, 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               flexShrink: 0,
               transform: isWienImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isWienImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="wien-image" />
             <div style={{ 
               flex: 1,
               fontSize: 14, 
               color: '#234', 
               whiteSpace: 'pre-line', 
               fontFamily: 'Inter, sans-serif' 
             }}>
               <div style={{ fontSize: 16, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                 {lang === 'ua' ? '🇦🇹 5 фактів про Австрію, які вас здивують' :
                  lang === 'de' ? '🇦🇹 5 Fakten über Österreich, die Sie überraschen werden' :
                  '🇦🇹 5 facts about Austria that will surprise you'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {oldNumberAnimations.map((anim, index) => {
                   if (!postState.showFullAustriaFacts1 && index > 1) return null;
                   return (
                     <React.Fragment key={anim.id}>
                       <span style={{
                         fontSize: 18,
                         fontWeight: 900,
                         color: '#1565c0',
                         marginRight: 8,
                         animation: anim.animation,
                         display: 'inline-block'
                       }}>{anim.id}.</span>
                       {index === 0 && <>
                         <strong>{lang === 'ua' ? 'Тут народився ЦМОК (вальс)' :
                                  lang === 'de' ? 'Hier wurde der Walzer geboren' :
                                  'The Waltz was born here'}</strong><br /><br />
                         {lang === 'ua' ? 'Вальс як танець зародився у Відні у XVIII столітті. Віденський вальс досі вважається класикою світських балів, а віденський бал — мрія для всіх шанувальників елегантності.' :
                          lang === 'de' ? 'Der Walzer als Tanz entstand im 18. Jahrhundert in Wien. Der Wiener Walzer gilt noch heute als Klassiker der Gesellschaftsbälle, und ein Wiener Ball ist der Traum aller Liebhaber der Eleganz.' :
                          'The waltz as a dance originated in Vienna in the 18th century. The Viennese waltz is still considered a classic of social balls, and a Viennese ball is a dream for all lovers of elegance.'}
                       </>}
                       {index === 1 && <>
                         <strong>{lang === 'ua' ? 'Австрія — країна замків і палаців' :
                                  lang === 'de' ? 'Österreich ist ein Land der Schlösser und Paläste' :
                                  'Austria is a country of castles and palaces'}</strong><br /><br />
                         {lang === 'ua' ? 'Тут понад 2 000 замків і палаців! Шенбрунн і Гофбург у Відні, середньовічні фортеці в Зальцбурзі — справжній рай для любителів історії та архітектури.' :
                          lang === 'de' ? 'Hier gibt es über 2.000 Schlösser und Paläste! Schönbrunn und Hofburg in Wien, mittelalterliche Festungen in Salzburg — ein wahres Paradies für Geschichts- und Architekturliebhaber.' :
                          'There are over 2,000 castles and palaces! Schönbrunn and Hofburg in Vienna, medieval fortresses in Salzburg — a true paradise for history and architecture lovers.'}
                       </>}
                       {index === 2 && <>
                         <strong>{lang === 'ua' ? 'Тут народилися великі генії музики' :
                                  lang === 'de' ? 'Hier wurden große Musikgenies geboren' :
                                  'Great musical geniuses were born here'}</strong><br /><br />
                         {lang === 'ua' ? 'Моцарт, Гайдн, Шуберт і навіть Бетховен більшу частину життя творив у Відні. Не дарма Австрію називають «музичною столицею світу».' :
                          lang === 'de' ? 'Mozart, Haydn, Schubert und sogar Beethoven verbrachten den größten Teil ihres Lebens schaffend in Wien. Nicht umsonst wird Österreich die "musikalische Hauptstadt der Welt" genannt.' :
                          'Mozart, Haydn, Schubert, and even Beethoven spent most of their lives creating in Vienna. It\'s no wonder Austria is called the "musical capital of the world."'}
                       </>}
                       {index === 3 && <>
                         <strong>{lang === 'ua' ? 'Кава по-віденськи — це не міф' :
                                  lang === 'de' ? 'Wiener Kaffee ist kein Mythos' :
                                  'Viennese coffee is not a myth'}</strong><br /><br />
                         {lang === 'ua' ? 'Віденські кав\'ярні — це окрема культура. Кажуть, традиція пішла ще від турків у XVII столітті. Сьогодні кав\'ярні Відня внесені до списку нематеріальної спадщини ЮНЕСКО!' :
                          lang === 'de' ? 'Wiener Kaffeehäuser sind eine eigene Kultur. Man sagt, die Tradition geht auf die Türken im 17. Jahrhundert zurück. Heute sind Wiens Kaffeehäuser in die UNESCO-Liste des immateriellen Kulturerbes aufgenommen!' :
                          'Viennese coffee houses are a separate culture. They say the tradition originated from the Turks in the 17th century. Today, Vienna\'s coffee houses are included in the UNESCO Intangible Cultural Heritage list!'}
                       </>}
                       {index === 4 && <>
                         <strong>{lang === 'ua' ? 'Австрія — одна з найзеленіших країн Європи' :
                                  lang === 'de' ? 'Österreich ist eines der grünsten Länder Europas' :
                                  'Austria is one of the greenest countries in Europe'}</strong><br /><br />
                         {lang === 'ua' ? 'Майже 60% території займають гори (Альпи), а близько третини — ліси. Це рай для тих, хто любить гірськолижний спорт, хайкінг і чисте повітря.' :
                          lang === 'de' ? 'Fast 60% des Territoriums nehmen Berge (Alpen) ein, und etwa ein Drittel sind Wälder. Das ist ein Paradies für alle, die Skifahren, Wandern und saubere Luft lieben.' :
                          'Almost 60% of the territory is mountains (Alps), and about a third is forests. This is a paradise for those who love skiing, hiking, and clean air.'}
                       </>}
                       <br /><br />
                     </React.Fragment>
                   );
                 })}
                 {!postState.showFullAustriaFacts1 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts1(true)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('more_ellipsis') || 'далі...'}
                   </button>
                 )}
                 {postState.showFullAustriaFacts1 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts1(false)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('hide_text') || 'Сховати'}
                   </button>
                 )}
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
             maxWidth: 1200,
             width: '90vw',
             minWidth: 320,
             margin: '0 auto 1vw auto',
             textAlign: 'center',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             boxSizing: 'border-box'
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
             <div style={{ fontSize: 14, color: '#234', whiteSpace: 'pre-line', textAlign: 'left', width: '100%', fontFamily: 'Inter, sans-serif' }}>
               <div style={{ fontSize: 16, fontWeight: 700, color: '#1565c0', marginBottom: 16, textAlign: 'center' }}>
                 {lang === 'ua' ? '🇦🇹 5 фактів про Австрію, які вас здивують (2 частина)' :
                  lang === 'de' ? '🇦🇹 5 Fakten über Österreich, die Sie überraschen werden (Teil 2)' :
                  '🇦🇹 5 facts about Austria that will surprise you (Part 2)'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {numberAnimations.map((anim, index) => {
                   if (!postState.showFullAustriaFacts2 && index > 1) return null;
                   return (
                     <React.Fragment key={anim.id}>
                       <span style={{
                         fontSize: 18,
                         fontWeight: 900,
                         color: '#1565c0',
                         marginRight: 8,
                         animation: anim.animation,
                         display: 'inline-block'
                       }}>{anim.id}.</span>
                       {index === 0 && <>
                         <strong>{lang === 'ua' ? 'Австрія має власний «морський» пейзаж' :
                                  lang === 'de' ? 'Österreich hat seine eigene "Meeres"-Landschaft' :
                                  'Austria has its own "sea" landscape'}</strong><br /><br />
                         {lang === 'ua' ? 'Попри те, що країна не має виходу до моря, тут є неймовірні озера — наприклад, Вольфгангзе та Вертерзе, де вода настільки прозора, що видно дно на кілька метрів.' :
                          lang === 'de' ? 'Obwohl das Land keinen Zugang zum Meer hat, gibt es hier unglaubliche Seen — zum Beispiel Wolfgangsee und Wörthersee, wo das Wasser so klar ist, dass man den Grund mehrere Meter tief sehen kann.' :
                          'Despite being landlocked, Austria has incredible lakes like Wolfgangsee and Wörthersee, where the water is so clear that the bottom is visible for several meters.'}
                       </>}
                       {index === 1 && <>
                         <strong>{lang === 'ua' ? 'Найстаріший зоопарк у світі' :
                                  lang === 'de' ? 'Der älteste Zoo der Welt' :
                                  'The oldest zoo in the world'}</strong><br /><br />
                         {lang === 'ua' ? 'Зоопарк Шенбрунн у Відні працює з 1752 року та є найстарішим діючим зоопарком на планеті. Тут мешкають рідкісні панди та інші екзотичні тварини.' :
                          lang === 'de' ? 'Der Tiergarten Schönbrunn in Wien arbeitet seit 1752 und ist der älteste kontinuierlich betriebene Zoo der Welt. Hier leben seltene Pandas und andere exotische Tiere.' :
                          'Schönbrunn Zoo in Vienna has been operating since 1752 and is the oldest continuously operating zoo on the planet. It is home to rare pandas and other exotic animals.'}
                       </>}
                       {index === 2 && <>
                         <strong>{lang === 'ua' ? 'Ліфти без дверей? Це реальність!' :
                                  lang === 'de' ? 'Aufzüge ohne Türen? Das ist Realität!' :
                                  'Lifts without doors? It\'s a reality!'}</strong><br /><br />
                         {lang === 'ua' ? 'У деяких старих віденських будівлях досі працюють ліфти типу «paternoster» — без дверей і з постійним рухом кабін. Унікальна знахідка для сміливців!' :
                          lang === 'de' ? 'In einigen alten Wiener Gebäuden funktionieren noch immer Aufzüge vom Typ "Paternoster" — ohne Türen und mit kontinuierlicher Kabinenbewegung. Ein einzigartiger Fund für Mutige!' :
                          'In some old Viennese buildings, "paternoster" type lifts are still in operation. These lifts have no doors and the cabins move continuously. It\'s a unique find for the brave!'}
                       </>}
                       {index === 3 && <>
                         <strong>{lang === 'ua' ? 'Тут виробляють один із найкращих шоколадів у світі' :
                                  lang === 'de' ? 'Hier wird eine der besten Schokoladen der Welt hergestellt' :
                                  'One of the best chocolates in the world is produced here'}</strong><br /><br />
                         {lang === 'ua' ? 'Шоколад «Mozartkugel» родом із Зальцбурга став гастрономічною легендою Австрії. Його досі роблять за традиційними рецептами понад 100 років.' :
                          lang === 'de' ? 'Die Schokolade "Mozartkugel" aus Salzburg ist zu einer gastronomischen Legende Österreichs geworden. Sie wird seit über 100 Jahren nach traditionellen Rezepten hergestellt.' :
                          '"Mozartkugel" chocolate, originating from Salzburg, has become a gastronomic legend of Austria. It has been made according to traditional recipes for over 100 years.'}
                       </>}
                       {index === 4 && <>
                         <strong>{lang === 'ua' ? 'Найбільший льодовик у Східних Альпах' :
                                  lang === 'de' ? 'Der größte Gletscher in den Ostalpen' :
                                  'The largest glacier in the Eastern Alps'}</strong><br /><br />
                         {lang === 'ua' ? 'Льодовик Пастерце біля гори Гросглокнер — це природне диво, яке щороку відвідують тисячі туристів. Його довжина понад 8 км!' :
                          lang === 'de' ? 'Der Pasterze-Gletscher am Großglockner ist ein Naturwunder, das jährlich von Tausenden von Touristen besucht wird. Seine Länge beträgt über 8 km!' :
                          'The Pasterze glacier near Grossglockner mountain is a natural wonder visited by thousands of tourists every year. Its length is over 8 km!'}
                       </>}
                       <br /><br />
                     </React.Fragment>
                   );
                 })}
                 {!postState.showFullAustriaFacts2 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts2(true)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw',
                       display: 'block',
                       margin: '1vw auto 0'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('more_ellipsis') || 'далі...'}
                   </button>
                 )}
                 {postState.showFullAustriaFacts2 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts2(false)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw',
                       display: 'block',
                       margin: '1vw auto 0'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('hide_text') || 'Сховати'}
                   </button>
                 )}
               </div>
             </div>
           </div>
         ) : (
           <div style={{
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'flex-start',
             gap: '2vw',
             margin: '0 auto 1vw auto',
             background: 'rgba(255,255,255,0.85)',
             borderRadius: 16,
             boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
             padding: '2vw',
             maxWidth: 1200,
             width: '90vw',
             minWidth: 320,
             textAlign: 'left',
             boxSizing: 'border-box'
           }}>
             <img src={bergImg} alt="Austria Facts" style={{ 
               width: '40%',
               maxWidth: '40%',
               height: 'auto', 
               borderRadius: 12, 
               boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
               flexShrink: 0,
               transform: isBergImageVisible ? 'scale(1)' : 'scale(0.3)',
               opacity: isBergImageVisible ? 1 : 0,
               transition: 'all 0.8s ease-out',
               transformOrigin: 'center center'
             }} id="berg-image" />
             <div style={{ 
               flex: 1,
               fontSize: 14, 
               color: '#234', 
               whiteSpace: 'pre-line', 
               fontFamily: 'Inter, sans-serif' 
             }}>
               <div style={{ fontSize: 16, fontWeight: 700, color: '#1565c0', marginBottom: 16 }}>
                 {t('austria_facts_title') || '🇦🇹 5 фактів про Австрію, які вас здивують (2 частина)'}
               </div>
               <div style={{ marginBottom: 16 }}>
                 {numberAnimations.map((anim, index) => {
                   if (!postState.showFullAustriaFacts2 && index > 1) return null;
                   return (
                     <React.Fragment key={anim.id}>
                       <span style={{
                         fontSize: 18,
                         fontWeight: 900,
                         color: '#1565c0',
                         marginRight: 8,
                         animation: anim.animation,
                         display: 'inline-block'
                       }}>{anim.id}.</span>
                       {index === 0 && <>
                         <strong>{lang === 'ua' ? 'Австрія має власний «морський» пейзаж' :
                                  lang === 'de' ? 'Österreich hat seine eigene "Meeres"-Landschaft' :
                                  'Austria has its own "sea" landscape'}</strong><br /><br />
                         {lang === 'ua' ? 'Попри те, що країна не має виходу до моря, тут є неймовірні озера — наприклад, Вольфгангзе та Вертерзе, де вода настільки прозора, що видно дно на кілька метрів.' :
                          lang === 'de' ? 'Obwohl das Land keinen Zugang zum Meer hat, gibt es hier unglaubliche Seen — zum Beispiel Wolfgangsee und Wörthersee, wo das Wasser so klar ist, dass man den Grund mehrere Meter tief sehen kann.' :
                          'Despite being landlocked, Austria has incredible lakes like Wolfgangsee and Wörthersee, where the water is so clear that the bottom is visible for several meters.'}
                       </>}
                       {index === 1 && <>
                         <strong>{lang === 'ua' ? 'Найстаріший зоопарк у світі' :
                                  lang === 'de' ? 'Der älteste Zoo der Welt' :
                                  'The oldest zoo in the world'}</strong><br /><br />
                         {lang === 'ua' ? 'Зоопарк Шенбрунн у Відні працює з 1752 року та є найстарішим діючим зоопарком на планеті. Тут мешкають рідкісні панди та інші екзотичні тварини.' :
                          lang === 'de' ? 'Der Tiergarten Schönbrunn in Wien arbeitet seit 1752 und ist der älteste kontinuierlich betriebene Zoo der Welt. Hier leben seltene Pandas und andere exotische Tiere.' :
                          'Schönbrunn Zoo in Vienna has been operating since 1752 and is the oldest continuously operating zoo on the planet. It is home to rare pandas and other exotic animals.'}
                       </>}
                       {index === 2 && <>
                         <strong>{lang === 'ua' ? 'Ліфти без дверей? Це реальність!' :
                                  lang === 'de' ? 'Aufzüge ohne Türen? Das ist Realität!' :
                                  'Lifts without doors? It\'s a reality!'}</strong><br /><br />
                         {lang === 'ua' ? 'У деяких старих віденських будівлях досі працюють ліфти типу «paternoster» — без дверей і з постійним рухом кабін. Унікальна знахідка для сміливців!' :
                          lang === 'de' ? 'In einigen alten Wiener Gebäuden funktionieren noch immer Aufzüge vom Typ "Paternoster" — ohne Türen und mit kontinuierlicher Kabinenbewegung. Ein einzigartiger Fund für Mutige!' :
                          'In some old Viennese buildings, "paternoster" type lifts are still in operation. These lifts have no doors and the cabins move continuously. It\'s a unique find for the brave!'}
                       </>}
                       {index === 3 && <>
                         <strong>{lang === 'ua' ? 'Тут виробляють один із найкращих шоколадів у світі' :
                                  lang === 'de' ? 'Hier wird eine der besten Schokoladen der Welt hergestellt' :
                                  'One of the best chocolates in the world is produced here'}</strong><br /><br />
                         {lang === 'ua' ? 'Шоколад «Mozartkugel» родом із Зальцбурга став гастрономічною легендою Австрії. Його досі роблять за традиційними рецептами понад 100 років.' :
                          lang === 'de' ? 'Die Schokolade "Mozartkugel" aus Salzburg ist zu einer gastronomischen Legende Österreichs geworden. Sie wird seit über 100 Jahren nach traditionellen Rezepten hergestellt.' :
                          '"Mozartkugel" chocolate, originating from Salzburg, has become a gastronomic legend of Austria. It has been made according to traditional recipes for over 100 years.'}
                       </>}
                       {index === 4 && <>
                         <strong>{lang === 'ua' ? 'Найбільший льодовик у Східних Альпах' :
                                  lang === 'de' ? 'Der größte Gletscher in den Ostalpen' :
                                  'The largest glacier in the Eastern Alps'}</strong><br /><br />
                         {lang === 'ua' ? 'Льодовик Пастерце біля гори Гросглокнер — це природне диво, яке щороку відвідують тисячі туристів. Його довжина понад 8 км!' :
                          lang === 'de' ? 'Der Pasterze-Gletscher am Großglockner ist ein Naturwunder, das jährlich von Tausenden von Touristen besucht wird. Seine Länge beträgt über 8 km!' :
                          'The Pasterze glacier near Grossglockner mountain is a natural wonder visited by thousands of tourists every year. Its length is over 8 km!'}
                       </>}
                       <br /><br />
                     </React.Fragment>
                   );
                 })}
                 {!postState.showFullAustriaFacts2 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts2(true)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('more_ellipsis') || 'далі...'}
                   </button>
                 )}
                 {postState.showFullAustriaFacts2 && (
                   <button
                     onClick={() => postState.setShowFullAustriaFacts2(false)}
                     style={{
                       padding: '0.5vw 1.5vw',
                       fontSize: '1em',
                       fontWeight: 600,
                       color: '#fff',
                       background: '#1976d2',
                       border: 'none',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       marginTop: '1vw'
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.background = '#1565c0';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = '#1976d2';
                     }}
                   >
                     {t('hide_text') || 'Сховати'}
                   </button>
                 )}
               </div>
             </div>
           </div>
         )}
         
         {/* Пост про григорианский календарь */}
         <div style={{
           background: 'rgba(255,255,255,0.85)',
           borderRadius: 16,
           boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
           padding: '2vw',
           maxWidth: 1200,
           width: '90vw',
           minWidth: 320,
           margin: '0 auto 1vw auto',
           textAlign: 'left',
           boxSizing: 'border-box'
         }}>
           <div style={{
             display: 'flex',
             flexDirection: isSmallScreen ? 'column' : 'row',
             alignItems: 'flex-start',
             gap: '2vw'
           }}>
             {/* Изображение григорианского календаря */}
             <div style={{
               flex: isSmallScreen ? 'none' : '0 0 300px',
               textAlign: 'center'
             }}>
               <img 
                 src={gregoryCalendarImg} 
                 alt="Gregorian Calendar" 
                 style={{ 
                   width: isSmallScreen ? '100%' : '300px',
                  //  maxWidth: '300px',

                   height: 'auto', 
                   borderRadius: 12, 
                   boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 8px' 
                 }} 
               />
             </div>
             
             {/* Текст поста */}
             <div style={{ 
               flex: '1',
               fontSize: isSmallScreen ? 18 : 20, 
               color: '#234', 
               whiteSpace: 'pre-line', 
               textAlign: 'left'
             }}>
             <div style={{ 
               fontSize: '1.2em',
               fontWeight: 'bold',
               color: '#1565c0',
               marginBottom: '1rem'
             }}>
               🌍 {lang === 'ua' ? 'В мире:' : lang === 'de' ? 'In der Welt:' : 'In the world:'}
             </div>
             <div style={{ 
               fontSize: '1em',
               lineHeight: '1.4',
               textAlign: 'left'
             }}>
               {getGregoryCalendarText()}
             </div>
             
             {!postState.showFullGregoryCalendar ? (
               <button
                 onClick={() => postState.setShowFullGregoryCalendar(true)}
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
                 onClick={() => postState.setShowFullGregoryCalendar(false)}
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
                 {t('hide_text') || 'Сховати'}
               </button>
             )}
           </div>
         </div>
         </div>
         
         {/* Бегущая строка про перевозку мебели */}
         <div className="transport-marquee">
           <div className="transport-marquee-track">
             {transportMarqueePhrases.concat(transportMarqueePhrases).map((phrase, index) => {
               const isClone = index >= transportMarqueePhrases.length;
               return (
                 <Link
                   key={`transport-marquee-${index}`}
                   className="transport-marquee-link"
                   to={transportMarqueeHref}
                   aria-hidden={isClone}
                   tabIndex={isClone ? -1 : undefined}
                 >
                   {phrase}
                 </Link>
               );
             })}
           </div>
         </div>
         
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
