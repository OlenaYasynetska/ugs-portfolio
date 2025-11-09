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
import kolschitzkyImg from '../../assets/Kolschitzky.png';
import diolomImg from '../../assets/diolom.png';
import turismImg from '../../assets/Turism.png';
import marketImg from '../../assets/market.png';
import marketSteyrImg from '../../assets/market_steyr.png';
import gregoryCalendarImg from '../../assets/Gregory_calendar.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useImageDrawAnimation, useNumberAnimation, useCardAnimation, useResponsiveStyles, usePostState, usePostTexts } from '../../hooks';
import { HOME_STYLES } from '../../constants/homeStyles';
import busImg from '../../assets/bus_sonne.png';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  // Используем созданные хуки
  const postState = usePostState();
  const texts = usePostTexts(lang);
  const styles = useResponsiveStyles();
  
  // Получаем тексты из хуков
  const getKolschitzkyText = () => texts.getKolschitzkyText(postState.showFullKolschitzkyText);
  const getDiplomaText = () => texts.getDiplomaText(postState.showFullDiplomaText);
  
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
  const adventProgramSections = [
    {
      id: 'advent-1',
      summary: {
        ua: '14 – 23 листопада',
        de: '14. – 23. November',
        en: '14 – 23 November'
      },
      description: {
        ua: '• Урочисте відкриття ярмарку з вечірнім запаленням вогнів\n• Чудовий ярмарок ремесел на головній площі міста\n• Майстер-класи з виготовлення адвентових вінків та свічок для родин',
        de: '• Feierliche Eröffnung mit Abend-Illumination\n• Kunsthandwerksmarkt am Stadtplatz\n• Workshops für Adventkränze und Kerzen für Familien',
        en: '• Festive opening with evening illumination\n• Artisan fair on the main square\n• Workshops on Advent wreaths and candles for families'
      }
    },
    {
      id: 'advent-2',
      summary: {
        ua: '26 – 30 листопада',
        de: '26. – 30. November',
        en: '26 – 30 November'
      },
      description: {
        ua: '• Щоденні концерти хорів у замковому дворі старого замка\n• Лекторії про різдвяні традиції Верхньої Австрії\n• Дегустації регіональних смаколиків та теплого пуншу',
        de: '• Tägliche Chorkonzerte im Schlosshof der Altstadt\n• Vorträge über Weihnachtsbräuche in Oberösterreich\n• Verkostungen regionaler Spezialitäten und Punsch',
        en: '• Daily choir concerts in the castle courtyard of the old town\n• Talks about Upper Austrian Christmas traditions\n• Tastings of regional delicacies and hot punch'
      }
    },
    {
      id: 'advent-3',
      summary: {
        ua: '2 – 14 грудня',
        de: '2. – 14. Dezember',
        en: '2 – 14 December'
      },
      description: {
        ua: '• Новорічні театральні вистави для дітей у міському театрі\n• Святкова хода з ліхтариками уздовж річки Штайр\n• Вечори камерної музики у парафіяльній церкві',
        de: '• Neujahrs-Theateraufführungen für Kinder im Stadttheater\n• Festlicher Laternenumzug entlang der Steyr\n• Abende mit Kammermusik in der Pfarrkirche',
        en: '• New Year-themed theatre shows for children at the city theatre\n• Lantern parade along the River Steyr\n• Evenings of chamber music in the parish church'
      }
    },
    {
      id: 'advent-4',
      summary: {
        ua: '16 – 31 грудня',
        de: '16. – 31. Dezember',
        en: '16 – 31 December'
      },
      description: {
        ua: '• Виступи мідних оркестрів та студентських ансамблів\n• Нічне катання на ковзанці біля собору Святого Михаїла\n• Новорічна віншлаґ-процесія та салют на центральній площі',
        de: '• Auftritte von Blasorchestern und Studierendenensembles\n• Nacht-Eislaufen beim Michaelerdom\n• Neujahrsprozession „Winterschlag" und Feuerwerk am Stadtplatz',
        en: '• Performances by brass bands and student ensembles\n• Night skating by St. Michaels Cathedral\n• New Year s Winterschlag procession and fireworks on the main square'
      }
    }
  ];
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

          .advent-program-card {
            background: rgba(255,255,255,0.92);
            border-radius: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.18);
            padding: clamp(20px, 3vw, 36px);
            width: min(1200px, 85vw);
            box-sizing: border-box;
            text-align: left;
          }

          .advent-program-card h2 {
            margin: 0 0 24px;
            font-weight: 800;
            font-size: clamp(28px, 3vw, 40px);
            color: #1565c0;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .advent-program-card h2 span {
            font-size: clamp(32px, 4vw, 46px);
          }

          @keyframes treeGlow {
            0%, 100% {
              transform: rotate(-3deg) scale(1);
              filter: drop-shadow(0 0 6px rgba(255,215,0,0.55));
            }
            50% {
              transform: rotate(3deg) scale(1.08);
              filter: drop-shadow(0 0 14px rgba(255,233,128,0.85));
            }
          }

          @keyframes fireworkBurst {
            0% {
              opacity: 0;
              transform: scale(0.2);
            }
            30% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(1.6);
            }
          }

          .advent-tree-wrapper {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .advent-tree {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            animation: treeGlow 2.8s ease-in-out infinite;
            z-index: 2;
          }

          .advent-tree-fireworks {
            position: absolute;
            inset: -12px;
            z-index: 1;
            pointer-events: none;
          }

          .advent-tree-fireworks::before,
          .advent-tree-fireworks::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background:
              radial-gradient(circle at 20% 80%, rgba(255, 223, 128, 0.95) 0, transparent 55%),
              radial-gradient(circle at 80% 20%, rgba(255, 105, 180, 0.5) 0, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(135, 206, 235, 0.65) 0, transparent 70%),
              radial-gradient(circle at 30% 30%, rgba(74, 217, 255, 0.55) 0, transparent 65%);
            opacity: 0;
            animation: fireworkBurst 2.4s ease-out infinite;
          }

          .advent-tree-fireworks::after {
            animation-delay: 1.2s;
            background:
              radial-gradient(circle at 75% 80%, rgba(255, 180, 80, 0.9) 0, transparent 60%),
              radial-gradient(circle at 25% 20%, rgba(186, 104, 200, 0.55) 0, transparent 65%),
              radial-gradient(circle at 45% 55%, rgba(84, 255, 138, 0.5) 0, transparent 75%);
          }

          .advent-program-card details {
            background: rgba(255,255,255,0.9);
            border-radius: 18px;
            margin-bottom: 18px;
            padding: clamp(14px, 1.8vw, 22px) clamp(18px, 2.4vw, 26px);
            border: 1px solid rgba(224,224,224,0.85);
            box-shadow: 0 2px 8px rgba(0,0,0,0.36);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }

          .advent-program-card details[open] {
            box-shadow: 0 4px 14px rgba(0,0,0,0.42);
            transform: translateY(-2px);
          }

          .advent-program-card summary {
            list-style: none;
            cursor: pointer;
            font-weight: 700;
            font-size: clamp(18px, 2.2vw, 22px);
            display: flex;
            align-items: center;
            color: #234;
            gap: clamp(12px, 1.6vw, 18px);
            transition: transform 0.25s ease;
          }

          .advent-program-card summary::marker,
          .advent-program-card summary::-webkit-details-marker {
            display: none;
          }

          .advent-arrow {
            font-size: clamp(18px, 2.5vw, 24px);
            margin-right: clamp(10px, 1.5vw, 16px);
            color: #0d47a1;
            text-shadow: 0 1px 2px rgba(0,0,0,0.25);
            line-height: 1;
            flex-shrink: 0;
          }

          .advent-arrow::before {
            content: '➤';
            transition: transform 0.25s ease;
            display: inline-block;
          }

          .advent-program-card details[open] .advent-arrow::before {
            content: '▼';
          }

          .advent-program-card summary .advent-summary-text {
            color: #1565c0;
            font-size: clamp(16px, 2vw, 20px);
            font-weight: 600;
            flex: 1;
          }

          .advent-program-card details p {
            margin: 16px 0 0;
            white-space: pre-line;
            font-size: clamp(15px, 1.9vw, 18px);
            color: #2c3e50;
          }

          @media (max-width: 768px) {
            .advent-program-card details summary {
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }

            .advent-arrow {
              margin-right: 0;
            }

            .advent-program-card h2 {
              font-size: clamp(22px, 3vw, 40px);
            }

            .advent-program-card h2 span {
              font-size: clamp(28px, 4vw, 42px);
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: isSmallScreen ? '4vw' : '2.5vw'
        }}
      >
        <div
          className="market-steyr-frame"
          style={{
            display: 'inline-block',
            padding: isSmallScreen ? '3vw' : '2vw',
            background: 'rgb(226, 197, 144)',
            border: '0.6vw solid rgb(166, 124, 56)',
            borderRadius: '2vw',
            boxShadow: 'rgba(80, 60, 20, 0.25) 0px 8px 32px, rgb(226, 197, 144) 0px 0px 0px 1.2vw inset',
            maxWidth: 1200,
            width: '85%',
            boxSizing: 'border-box'
          }}
        >
          <img
            src={marketSteyrImg}
            alt={t('central_market_image_alt') || 'Віденський різдвяний ярмарок у центрі подій'}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '1.4vw'
            }}
          />
          <div className="market-steyr-snow" aria-hidden="true" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: isSmallScreen ? '4vw' : '3.5vw'
        }}
      >
        <div className="advent-program-card">
          <h2>
            <span className="advent-tree-wrapper">
              <span className="advent-tree-fireworks" aria-hidden="true"></span>
              <span className="advent-tree" role="img" aria-hidden="true">🎄</span>
            </span>
            {t('advent_program_title', { defaultValue: 'Advent у Штаєрі: програма' })}
          </h2>
          {adventProgramSections.map(section => (
            <details key={section.id}>
              <summary>
                <span className="advent-arrow" aria-hidden="true"></span>
                <span className="advent-summary-text">{section.summary[lang] || section.summary.ua}</span>
              </summary>
              <p>{section.description[lang] || section.description.ua}</p>
            </details>
          ))}
          <div style={{ fontSize: 14, color: '#6d6d6d', marginTop: 12 }}>
            {t('advent_program_hint', { defaultValue: 'Розклад може змінюватися через погодні умови. Актуальні оновлення дивіться на офіційному сайті міста Штаєр.' })}
          </div>
        </div>
      </div>
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
                {!postState.showFullDiplomaText ? (
                  <button
                    onClick={() => postState.setShowFullDiplomaText(true)}
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
                    onClick={() => postState.setShowFullDiplomaText(false)}
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
        
        {/* Пост про лучший рождественский ярмарок */}
        <div
          className="christmas-market-card"
          style={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            padding: '2vw',
            maxWidth: 1200,
            width: '85%',
            margin: '0 auto 1vw auto'
          }}
        >
          <img
            className="christmas-market-image"
            src={marketImg}
            alt={christmasMarketImageAlt}
            style={{
              height: 'auto'
            }}
          />
          <div
            className="christmas-market-content"
          >
            <div
              style={{
                fontSize: isSmallScreen ? 20 : 24,
                fontWeight: 700,
                color: '#1565c0'
              }}
            >
              {christmasMarketTitle}
            </div>
            <div>
              {shouldShowChristmasMarketLabel && christmasMarketSection.label && (
                <div style={{ fontSize: isSmallScreen ? 18 : 20, fontWeight: 700, color: '#1565c0', marginBottom: '0.5rem' }}>
                  {christmasMarketSection.label}
                </div>
              )}
              <div style={{ whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                {christmasMarketSection.text}
              </div>
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
                 {lang === 'ua' ? '🇦🇹 5 фактів про Австрію, які вас здивують' :
                  lang === 'de' ? '🇦🇹 5 Fakten über Österreich, die Sie überraschen werden' :
                  '🇦🇹 5 facts about Austria that will surprise you'}
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
                 {lang === 'ua' ? '🇦🇹 5 фактів про Австрію, які вас здивують' :
                  lang === 'de' ? '🇦🇹 5 Fakten über Österreich, die Sie überraschen werden' :
                  '🇦🇹 5 facts about Austria that will surprise you'}
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
                 {lang === 'ua' ? '🇦🇹 5 фактів про Австрію, які вас здивують (2 частина)' :
                  lang === 'de' ? '🇦🇹 5 Fakten über Österreich, die Sie überraschen werden (Teil 2)' :
                  '🇦🇹 5 facts about Austria that will surprise you (Part 2)'}
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
                 ))}
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
           maxWidth: isSmallScreen ? 400 : 1200,
           width: isSmallScreen ? '95%' : '85%',
           margin: '0 auto 1vw auto',
           textAlign: 'left',
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
               {lang === 'ua' ? 
                 '1582 рік — Папа Римський Григорій XIII запровадив григоріанський календар (звідси й назва).\nЙого одразу прийняли католицькі країни: Італія, Іспанія, Португалія, Польща.\nПісля 4 жовтня 1582 року одразу настав 15 жовтня 1582 року — пропущено 10 днів.\n\nПротестантські країни (Німеччина, Великобританія та ін.) перейшли пізніше — у XVII–XVIII століттях.\nНаприклад, Великобританія та її колонії — у 1752 році, пропустивши 11 днів.\n\nРосія (і, відповідно, Україна, Білорусь, Грузія та ін. у складі Російської імперії) —\nперейшла лише після Жовтневої революції, за декретом Ради народних комісарів від 24 січня 1918 року.\nПісля 31 січня 1918 року одразу настав 14 лютого 1918 року — пропущено 13 днів.\n\n🇺🇦 Україна:\n\nУкраїна перейшла на григоріанський календар разом із Радянською Росією —\n📅 у лютому 1918 року.\nДо цього на території України (у складі Російської імперії) діяв юліанський календар.\n\n⛪ Церковне використання:\n\nПравославна церква в Україні довго залишалася на юліанському календарі (старому стилі).\n\nПерехід ПЦУ (Православної Церкви України) на новоюліанський календар (сумісний з григоріанським до 2800 року) відбувся 1 вересня 2023 року.\nТепер більшість церковних свят відзначається за новим стилем, але Великдень все ще обчислюється за старим (юліанським) календарем.' :
               lang === 'de' ?
                 '1582 — Papst Gregor XIII. führte den Gregorianischen Kalender ein (daher der Name).\nKatholische Länder nahmen ihn sofort an: Italien, Spanien, Portugal, Polen.\nNach dem 4. Oktober 1582 folgte sofort der 15. Oktober 1582 — 10 Tage wurden übersprungen.\n\nProtestantische Länder (Deutschland, Großbritannien usw.) wechselten später — im 17.–18. Jahrhundert.\nZum Beispiel Großbritannien und seine Kolonien — 1752, wobei 11 Tage übersprungen wurden.\n\nRussland (und entsprechend die Ukraine, Belarus, Georgien usw. als Teil des Russischen Reiches) —\nwechselte erst nach der Oktoberrevolution, durch Dekret des Rates der Volkskommissare vom 24. Januar 1918.\nNach dem 31. Januar 1918 folgte sofort der 14. Februar 1918 — 13 Tage wurden übersprungen.\n\n🇺🇦 Ukraine:\n\nDie Ukraine wechselte zusammen mit Sowjetrussland zum Gregorianischen Kalender —\n📅 im Februar 1918.\nDavor galt auf dem Gebiet der Ukraine (als Teil des Russischen Reiches) der Julianische Kalender.\n\n⛪ Kirchliche Nutzung:\n\nDie Orthodoxe Kirche in der Ukraine blieb lange beim Julianischen Kalender (alten Stil).\n\nDer Übergang der OKU (Orthodoxen Kirche der Ukraine) zum Neujulianischen Kalender (kompatibel mit dem Gregorianischen bis 2800) erfolgte am 1. September 2023.\nJetzt werden die meisten Kirchenfeiertage nach dem neuen Stil gefeiert, aber Ostern wird immer noch nach dem alten (Julianischen) Kalender berechnet.' :
                 '1582 — Pope Gregory XIII introduced the Gregorian calendar (hence the name).\nCatholic countries adopted it immediately: Italy, Spain, Portugal, Poland.\nAfter October 4, 1582, October 15, 1582 came immediately — 10 days were skipped.\n\nProtestant countries (Germany, Great Britain, etc.) switched later — in the 17th–18th centuries.\nFor example, Great Britain and its colonies — in 1752, skipping 11 days.\n\nRussia (and accordingly Ukraine, Belarus, Georgia, etc. as part of the Russian Empire) —\nswitched only after the October Revolution, by decree of the Council of People\'s Commissars of January 24, 1918.\nAfter January 31, 1918, February 14, 1918 came immediately — 13 days were skipped.\n\n🇺🇦 Ukraine:\n\nUkraine switched to the Gregorian calendar together with Soviet Russia —\n📅 in February 1918.\nBefore that, the Julian calendar was in effect on the territory of Ukraine (as part of the Russian Empire).\n\n⛪ Church use:\n\nThe Orthodox Church in Ukraine remained on the Julian calendar (old style) for a long time.\n\nThe transition of the OCU (Orthodox Church of Ukraine) to the New Julian calendar (compatible with the Gregorian until 2800) took place on September 1, 2023.\nNow most church holidays are celebrated according to the new style, but Easter is still calculated according to the old (Julian) calendar.'}
               </div>
           </div>
         </div>
         </div>
         
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
