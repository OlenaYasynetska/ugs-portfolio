import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import contactsBg from '../../assets/contacts.png';
import tabletBg from '../../assets/Tablet_1.png';
import tabletBg2 from '../../assets/Tablet_2.png';
import hendyBg from '../../assets/Hendy_1.png';
import PropTypes from 'prop-types';

const basePosts = [
  { label: 'Посольство України', top: '18%', left: '15%' },
  { label: 'в Австрії', top: '21%', left: '15%' },
  { label: '📍Адрес: 1180 Wien', top: '25%', left: '15%' },
  { label: 'Naaffgasse 23', top: '28%', left: '15%' },
  { label: '☎️ Тел:+43 14797172', top: '32%', left: '15%' },
  { label: '🌐https://', top: '37%', left: '15%' },
  { label: 'austria.mfa.gov.ua/', top: '41%', left: '15%' },

  { label: 'ÖIF', top: '18%', left: '38%' },
  { label: '📍Адрес: 4020 Linz', top: '24%', left: '38%' },
  { label: 'Stockhofstraße 36', top: '27%', left: '38%' },
  { label: '☎️ Тел:', top: '32%', left: '38%' },
  { label: '🌐 https://www.', top: '37%', left: '38%' },
  { label: 'integrationsfonds.at/', top: '41%', left: '38%' },

  { label: 'Rechtsberatung', top: '18%', left: '60%' },
  { label: '📍Адрес: 4020 Linz', top: '24%', left: '60%' },
  { label: 'Derfflingerstraße 1/3.', top: '27%', left: '62%' },
  { label: '☎️Тел:+43 126768709416', top: '32%', left: '62%' },
  { label: '🌐 https://www.', top: '37%', left: '60%' },
  { label: 'rechtsberatung.', top: '40%', left: '61%' },
  { label: 'linz@bbu.gv.at', top: '43%', left: '61%' },

  { label: 'пост 4', top: '18%', left: '85%' },


  { label: 'Magistrat Steyr', top: '60%', left: '15%' },
  { label: '📍 Адрес: 4400 Steyr', top: '66%', left: '15%' },
  { label: 'Stadtplatz 27', top: '69%', left: '15%' }, 
  { label: '🌐https://www.steyr.at/', top: '75%', left: '15%' }, 


  { label: 'AMS Steyr ', top: '60%', left: '38%' },
  { label: '📍 Адрес: 4400 Steyr ', top: '66%', left: '38%' },
  { label: 'Blumauergasse 17', top: '69%', left: '39%' },
  { label: '☎️ Тел:+43 50904470', top: '75%', left: '38%' },
  { label: '🌐https://www.ams.at/', top: '80%', left: '38%' },

  { label: 'Caritas Steyr', top: '60%', left: '61%' },
  { label: '📍 Адрес: 4400 Steyr', top: '65%', left: '61%' },
  { label: 'Leopold-Werndl-Straße', top: '69%', left: '62%' },
  { label: '13', top: '73%', left: '61%' },
  { label: '🌐https://', top: '78%', left: '61%' },
  { label: 'www.caritas-linz.at/', top: '82%', left: '61%' },

  { label: 'пост 8', top: '60%', left: '85%' },
];

const posts1600 = [
  // координаты для ширины <= 1600px (пример, скорректируйте под вашу сетку)
  { label: 'Посольство України', top: '15%', left: '15%' },
  { label: 'в Австрії', top: '18%', left: '15%' },
  { label: '📍Адрес: 1180 Wien', top: '22%', left: '15%' },
  { label: 'Naaffgasse 23', top: '25%', left: '15%' },
  { label: '☎️ Тел:+43 14797172', top: '29%', left: '15%' },
  { label: '🌐https://', top: '34%', left: '15%' },
  { label: 'austria.mfa.gov.ua/', top: '37%', left: '15%' },

  { label: 'ÖIF', top: '15%', left: '38%' },
  { label: '📍Адрес: 4020 Linz', top: '21%', left: '38%' },
  { label: 'Stockhofstraße 36', top: '24%', left: '38%' },
  { label: '☎️ Тел:', top: '29%', left: '38%' },
  { label: '🌐 https://www.', top: '34%', left: '38%' },
  { label: 'integrationsfonds.at/', top: '37%', left: '38%' },

  { label: 'Rechtsberatung', top: '15%', left: '60%' },
  { label: '📍Адрес: 4020 Linz', top: '21%', left: '60%' },
  { label: 'Derfflingerstraße 1/3.', top: '24%', left: '62%' },
  { label: '☎️Тел:+43 126768709416', top: '29%', left: '62%' },
  { label: '🌐 https://www.', top: '34%', left: '60%' },
  { label: 'rechtsberatung.', top: '37%', left: '61%' },
  { label: 'linz@bbu.gv.at', top: '40%', left: '61%' },

  { label: 'пост 4', top: '15%', left: '85%' },

  { label: 'Magistrat Steyr', top: '59%', left: '15%' },
  { label: '📍 Адрес: 4400 Steyr', top: '63%', left: '15%' },
  { label: 'Stadtplatz 27', top: '66%', left: '15%' }, 
  { label: '🌐https://www.steyr.at/', top: '74%', left: '15%' }, 

  { label: 'AMS Steyr ', top: '59%', left: '38%' },
  { label: '📍 Адрес: 4400 Steyr ', top: '63%', left: '38%' },
  { label: 'Blumauergasse 17', top: '66%', left: '39%' },
  { label: '☎️ Тел:+43 50904470', top: '72%', left: '37%' },
  { label: '🌐https://www.ams.at/', top: '76%', left: '38%' },

  { label: 'Caritas Steyr', top: '59%', left: '61%' },
  { label: '📍 Адрес: 4400 Steyr', top: '63%', left: '61%' },
  { label: 'Leopold-Werndl-Straße', top: '66%', left: '62%' },
  { label: '13', top: '69%', left: '61%' },
  { label: '🌐https://', top: '73%', left: '61%' },
  { label: 'www.caritas-linz.at/', top: '76%', left: '61%' },

  { label: 'пост 8', top: '50%', left: '85%' },
];

const posts1400 = [
  // координаты для ширины <= 1400px (пример, скорректируйте под вашу сетку)
  { label: 'Посольство України', top: '15%', left: '15%' },
  { label: 'в Австрії', top: '18%', left: '15%' },
  { label: '📍Адрес: 1180 Wien', top: '23%', left: '15%' },
  { label: 'Naaffgasse 23', top: '27%', left: '15%' },
  { label: '☎️ Тел:+43 14797172', top: '32%', left: '15%' },
  { label: '🌐https://', top: '36%', left: '15%' },
  { label: 'austria.mfa.gov.ua/', top: '39%', left: '15%' },

  { label: 'ÖIF', top: '15%', left: '38%' },
  { label: '📍Адрес: 4020 Linz', top: '22%', left: '38%' },
  { label: 'Stockhofstraße 36', top: '25%', left: '38%' },
  { label: '☎️ Тел:', top: '32%', left: '38%' },
  { label: '🌐 https://www.', top: '37%', left: '38%' },
  { label: 'integrationsfonds.at/', top: '40%', left: '38%' },

  { label: 'Rechtsberatung', top: '15%', left: '60%' },
  { label: '📍Адрес: 4020 Linz', top: '21%', left: '60%' },
  { label: 'Derfflingerstraße', top: '24%', left: '62%' },
  { label: ' 1/3', top: '27%', left: '62%' },
  { label: '☎️+43126768709416', top: '31%', left: '62%' },
  { label: '🌐 https://www.', top: '34%', left: '60%' },
  { label: 'rechtsberatung.', top: '37%', left: '61%' },
  { label: 'linz@bbu.gv.at', top: '40%', left: '61%' },

  { label: 'пост 4', top: '12%', left: '85%' },

  { label: 'Magistrat Steyr', top: '59%', left: '15%' },
  { label: '📍 Адрес: 4400 Steyr', top: '65%', left: '15%' },
  { label: 'Stadtplatz 27', top: '69%', left: '15%' }, 
  { label: '🌐https://', top: '75%', left: '15%' }, 
  { label: 'www.steyr.at/', top: '79%', left: '15%' },

  { label: 'AMS Steyr ', top: '59%', left: '38%' },
  { label: '📍 Адрес: 4400 Steyr ', top: '65%', left: '38%' },
  { label: 'Blumauergasse 17', top: '69%', left: '39%' },
  { label: '☎️ Тел:+43 50904470', top: '75%', left: '38%' },
  { label: '🌐https://www.ams.at/', top: '79%', left: '38%' },

  { label: 'Caritas Steyr', top: '59%', left: '61%' },
  { label: '📍 Адрес: 4400 Steyr', top: '65%', left: '61%' },
  { label: 'Leopold-Werndl-Straße', top: '69%', left: '62%' },
  { label: '13', top: '73%', left: '61%' },
  { label: '🌐https://', top: '77%', left: '61%' },
  { label: 'www.caritas-linz.at/', top: '80%', left: '61%' },
  
  { label: 'пост 8', top: '40%', left: '85%' },
];

const posts1200 = [
  
   // координаты для ширины <= 1400px (пример, скорректируйте под вашу сетку)
   // 1 ряд
   { label: 'Посольство України', top: '13%', left: '18%' },
   { label: 'в Австрії', top: '15%', left: '18%' },
   { label: '📍Адрес: 1180 Wien', top: '19%', left: '18%' },
   { label: 'Naaffgasse 23', top: '21%', left: '18%' },
   { label: '☎️ Тел:+43 14797172', top: '24%', left: '18%' },
   { label: '🌐https://', top: '27%', left: '18%' },
   { label: 'austria.mfa.gov.ua/', top: '30%', left: '18%' },

   { label: 'ÖIF', top: '13%', left: '50%' },
   { label: '📍Адрес: 4020 Linz', top: '19%', left: '50%' },
   { label: 'Stockhofstraße 36', top: '21%', left: '50%' },
   { label: '☎️ Тел:', top: '24%', left: '50%' },
   { label: '🌐 https://www.', top: '27%', left: '50%' },
   { label: 'integrationsfonds.at/', top: '30%', left: '50%' },

   { label: 'Rechtsberatung', top: '13%', left: '80%' },
   { label: '📍Адрес: 4020 Linz', top: '18%', left: '80%' },
   { label: 'Derfflingerstraße', top: '20%', left: '82%' },
   { label: ' 1/3', top: '22%', left: '82%' },
   { label: '☎️+43126768709416', top: '25%', left: '80%' },
   { label: '🌐www.rechtsberatung.', top: '28%', left: '80%' },
  //  { label: 'rechtsberatung.', top: '30%', left: '81%' },
   { label: 'rechtsberatung.linz@bbu.gv.at', top: '31%', left: '81%' },

  // 2 ряд
  // { label: 'пост 4', top: '10%', left: '87%' },
  
  { label: 'Magistrat Steyr', top: '43%', left: '18%' },
  { label: '📍 Адрес: 4400 Steyr', top: '47%', left: '18%' },
  { label: 'Stadtplatz 27', top: '49%', left: '18%' }, 
  { label: '🌐https://', top: '53%', left: '18%' }, 
  { label: 'www.steyr.at/', top: '56%', left: '18%' },

  { label: 'AMS Steyr ', top: '43%', left: '49%' },
  { label: '📍 Адрес: 4400 Steyr ', top: '46%', left: '49%' },
  { label: 'Blumauergasse 17', top: '49%', left: '49%' },
  { label: '☎️ Тел:+43 50904470', top: '53%', left: '48%' },
  { label: '🌐https://www.ams.at/', top: '56%', left: '48%' },

  // 3 ряд
  { label: 'Caritas Steyr', top: '72%', left: '18%' },
  { label: '📍 Адрес: 4400 Steyr', top: '75%', left: '18%' },
  { label: 'Leopold-Werndl-Straße', top: '78%', left: '18%' },
  { label: '13', top: '81%', left: '18%' },
  { label: '🌐https://', top: '85%', left: '18%' },
  { label: 'www.caritas-linz.at/', top: '88%', left: '18%' },
  // { label: 'пост 8', top: '60%', left: '87%' },
];

const posts900 = [
  // Пример координат для Tablet_2.png, можно скорректировать позже
  // 1 ряд
  { label: 'Посольство України', top: '10%', left: '32%' },
  { label: 'в Австрії', top: '12%', left: '32%' },
  { label: '📍Адрес: 1180 Wien', top: '15%', left: '32%' },
  { label: 'Naaffgasse 23', top: '17%', left: '32%' },
  { label: '☎️ Тел:+43 14797172', top: '20%', left: '32%' },
  { label: '🌐https://', top: '23%', left: '32%' },
  { label: 'austria.mfa.gov.ua/', top: '26%', left: '32%' },

  // { label: 'ÖIF', top: '10%', left: '68%' },
  // { label: '📍Адрес: 4020 Linz', top: '14%', left: '68%' },
  // { label: 'Stockhofstraße 36', top: '16%', left: '68%' },
  // { label: '☎️ Тел:', top: '20%', left: '68%' },
  // { label: '🌐 https://www.', top: '23%', left: '68%' },
  // { label: 'integrationsfonds.at/', top: '26%', left: '68%' },

  { label: 'Magistrat Steyr', top: '10%', left: '68%' },
  { label: '📍 Адрес: 4400 Steyr', top: '15%', left: '68%' },
  { label: 'Stadtplatz 27', top: '18%', left: '68%' },
  { label: '🌐https://', top: '21%', left: '68%' },
  { label: 'www.steyr.at/', top: '24%', left: '68%' },
  // 2 ряд
  { label: 'Rechtsberatung', top: '35%', left: '32%' },
  { label: '📍Адрес: 4020 Linz', top: '38%', left: '32%' },
  { label: 'Derfflingerstraße', top: '40%', left: '32%' },
  { label: ' 1/3', top: '42%', left: '32%' },
  { label: '☎️+43126768709416', top: '44%', left: '32%' },
  { label: '🌐www.rechtsberatung.', top: '47%', left: '32%' },
  { label: 'rechtsberatung.', top: '49%', left: '32%' },
  { label: 'linz@bbu.gv.at', top: '51%', left: '32%' },

  { label: 'ÖIF', top: '35%', left: '68%' },
  { label: '📍Адрес: 4020 Linz', top: '38%', left: '68%' },
  { label: 'Stockhofstraße 36', top: '40%', left: '68%' },
  { label: '☎️ Тел:', top: '42%', left: '68%' },
  { label: '🌐 https://www.', top: '48%', left: '68%' },
  { label: 'integrationsfonds.at/', top: '50%', left: '68%' },
 // 3 ряд
  // { label: 'Magistrat Steyr', top: '73%', left: '50%' },
  // { label: '📍 Адрес: 4400 Steyr', top: '76%', left: '50%' },
  // { label: 'Stadtplatz 27', top: '79%', left: '50%' },
  // { label: '🌐https://', top: '82%', left: '50%' },
  // { label: 'www.steyr.at/', top: '85%', left: '50%' },
  { label: 'AMS Steyr ', top: '59%', left: '32%' },
  { label: '📍 Адрес: 4400 Steyr ', top: '63%', left: '32%' },
  { label: 'Blumauergasse 17', top: '65%', left: '32%' },
  { label: '☎️ Тел:+43 50904470', top: '68%', left: '32%' },
  { label: '🌐https://www.ams.at/', top: '72%', left: '32%' },

  { label: 'Caritas Steyr', top: '59%', left: '68%' },
  { label: '📍 Адрес: 4400 Steyr', top: '63%', left: '68%' },
  { label: 'Leopold-Werndl-Straße', top: '65%', left: '68%' },
  { label: '13', top: '68%', left: '68%' },
  { label: '🌐https://', top: '71%', left: '68%' },
  { label: 'www.caritas-linz.at/', top: '73%', left: '68%' },
];
const posts700 = [
  // Пример координат для Hendy.png, можно скорректировать позже
  { label: 'Посольство України', top: '7%', left: '50%' },
  { label: 'в Австрії', top: '9%', left: '50%' },
  { label: '📍Адрес: 1180 Wien', top: '12%', left: '50%' },
  { label: 'Naaffgasse 23', top: '14%', left: '50%' },
  { label: '☎️ Тел:+43 14797172', top: '16%', left: '50%' },
  { label: '🌐https://', top: '18%', left: '50%' },
  { label: 'austria.mfa.gov.ua/', top: '20%', left: '50%' },

  { label: 'ÖIF', top: '29%', left: '50%' },
  { label: '📍Адрес: 4020 Linz', top: '32%', left: '50%' },
  { label: 'Stockhofstraße 36', top: '34%', left: '50%' },
  { label: '☎️ Тел:', top: '37%', left: '50%' },
  { label: '🌐 https://www.', top: '39%', left: '50%' },
  { label: 'integrationsfonds.at/', top: '41%', left: '50%' },

  { label: 'Rechtsberatung', top: '51%', left: '50%' },
  { label: '📍Адрес: 4020 Linz', top: '54%', left: '50%' },
  { label: 'Derfflingerstraße', top: '56%', left: '50%' },
  { label: ' 1/3', top: '58%', left: '50%' },
  { label: '☎️+43126768709416', top: '61%', left: '50%' },
  { label: '🌐www.rechtsberatung.', top: '63%', left: '50%' },
  { label: 'rechtsberatung.linz@bbu.gv.at', top: '65%', left: '50%' },

  { label: 'Magistrat Steyr', top: '73%', left: '50%' },
  { label: '📍 Адрес: 4400 Steyr', top: '76%', left: '50%' },
  { label: 'Stadtplatz 27', top: '79%', left: '50%' },
  { label: '🌐https://', top: '82%', left: '50%' },
  { label: 'www.steyr.at/', top: '85%', left: '50%' },

  // { label: 'AMS Steyr ', top: '89%', left: '50%' },
  // { label: '📍 Адрес: 4400 Steyr ', top: '92%', left: '50%' },
  // { label: 'Blumauergasse 17', top: '95%', left: '50%' },
  // { label: '☎️ Тел:+43 50904470', top: '98%', left: '50%' },
  // { label: '🌐https://www.ams.at/', top: '101%', left: '50%' },
  
  // { label: 'Caritas Steyr', top: '105%', left: '50%' },
  // { label: '📍 Адрес: 4400 Steyr', top: '108%', left: '50%' },
  // { label: 'Leopold-Werndl-Straße', top: '111%', left: '50%' },
  // { label: '13', top: '114%', left: '50%' },
  // { label: '🌐https://', top: '117%', left: '50%' },
  // { label: 'www.caritas-linz.at/', top: '120%', left: '50%' },
];
const Contacts = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState(basePosts);
  const [fontSize, setFontSize] = useState('1.5em');
  const [bg, setBg] = useState(contactsBg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setBg(hendyBg);
        setPosts(posts700);
        setFontSize('0.8em');
      } else if (window.innerWidth <= 900) {
        setBg(tabletBg2);
        setPosts(posts900);
        setFontSize('0.9em');
      } else if (window.innerWidth <= 1200) {
        setBg(tabletBg);
        setPosts(posts1200);
        setFontSize('1em');
      } else if (window.innerWidth <= 1400) {
        setBg(contactsBg);
        setPosts(posts1400);
        setFontSize('1.1em');
      } else if (window.innerWidth <= 1600) {
        setBg(contactsBg);
        setPosts(posts1600);
        setFontSize('1.3em');
      } else {
        setBg(contactsBg);
        setPosts(basePosts);
        setFontSize('1.5em');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = prev; };
  }, []);

  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)',
      width: '100%',
      textAlign: 'center',
      height: 'auto',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <img
        src={bg}
        alt="Contacts background"
        style={{
          maxHeight: '90vh',
          maxWidth: '100vw',
          width: '100%',
          margin: '0 auto',
          display: 'block',
        }}
      />
      {posts.map((post, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: post.top,
            left: post.left,
            transform: 'translate(-50%, -50%)',
            fontSize: fontSize,
            fontWeight: 700,
            color: '#7a5a1e',
            textShadow: '1px 1px 6px #fff, 0 0 2px #000',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {post.label}
        </div>
      ))}
    </div>
  );
};

Contacts.propTypes = {};

export default Contacts; 