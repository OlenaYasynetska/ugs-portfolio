import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import contactsBg from '../../assets/contacts.png';

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

const Contacts = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState(basePosts);
  const [fontSize, setFontSize] = useState('1.5em');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1400) {
        setPosts(posts1400);
        setFontSize('1.1em');
      } else if (window.innerWidth <= 1600) {
        setPosts(posts1600);
        setFontSize('1.3em');
      } else {
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
        src={contactsBg}
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
      {/* <h1>{t('contactsText')}</h1> */}
    </div>
  );
};

export default Contacts; 