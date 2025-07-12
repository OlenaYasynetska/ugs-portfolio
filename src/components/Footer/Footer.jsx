import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const footerPhrases = {
  ua: 'Цей вебсайт є некомерційним проєктом і створений виключно з інформаційною метою.',
  de: 'Diese Website ist ein gemeinnütziges Projekt und dient ausschließlich zu Informationszwecken.',
  en: 'This website is a non-commercial project and serves informational purposes only.'
};

const weatherIcons = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Drizzle: '🌦️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  Mist: '🌫️',
  Fog: '🌫️',
  Haze: '🌫️',
  Smoke: '🌫️',
  Dust: '🌫️',
  Sand: '🌫️',
  Ash: '🌫️',
  Squall: '🌫️',
  Tornado: '🌪️',
};

const WeatherBlock = () => {
  const [weather, setWeather] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Замените на ваш город и API-ключ
        const city = 'Steyr, AT';
        const apiKey = '263f8532f4360c224e81f3b4d2bca082';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (e) {
        setError('Ошибка загрузки погоды');
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) return <div style={{ minWidth: 90, textAlign: 'right' }}>...</div>;
  if (error || !weather) return <div style={{ minWidth: 90, textAlign: 'right', color: 'red' }}>{error || 'Нет данных'}</div>;
  const icon = weatherIcons[weather.weather[0].main] || '🌡️';
  const temp = Math.round(weather.main.temp);
  const desc = weather.weather[0].description;
  return (
    <div style={{ minWidth: 90, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: '#fff', opacity: 0.8, marginBottom: 2 }}>Steyr</span>
      <span style={{ fontSize: 28, lineHeight: 1 }}>{icon}</span>
      <span style={{ fontSize: 18, fontWeight: 600 }}>{temp}&deg;C</span>
      <span style={{ fontSize: 12, opacity: 0.7 }}>{desc}</span>
      <a href="https://openweathermap.org/city/2766824" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: '#fff', opacity: 0.7, textDecoration: 'underline', marginTop: 2 }}>Погода: OpenWeather</a>
    </div>
  );
};

const Footer = ({ style }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const phrase = footerPhrases[lang] || footerPhrases.en;
  return (
    <footer className={styles.footer} style={{
      position: 'fixed',
      left: 0,
      right: 50,
      bottom: 0,
      width: '100%',
      zIndex: 1000,
      ...style
    }}>
      <style>{`
        @media (max-width: 900px) {
          .footer-inner {
            padding-left: 90px !important;
            padding-right: 90px !important;
          }
        }
      `}</style>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '100%',
        maxWidth: 1800,
        margin: '0 auto',
        padding: '0 180px',
        fontSize: 14
      }} className="footer-inner">
        <span style={{
          textAlign: 'left',
          opacity: 0.85,
          width: 300,
          overflow: 'hidden',
          display: 'inline-block',
        }}>
          {phrase}
          <div style={{ fontSize: 13, marginTop: 4, opacity: 0.7 }}>© 2025 Steyr</div>
        </span>
        <WeatherBlock />
      </div>
    </footer>
  );
};

export default Footer; 