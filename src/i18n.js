import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: 'Home',
        about: 'About Us',
        contacts: 'Contacts',
        welcome: 'Welcome to the Home page.',
        // aboutText: 'This is the About Us page.',
        // contactsText: 'This is the Contacts page.'
      }
    },
    de: {
      translation: {
        home: 'Startseite',
        about: 'Über uns',
        contacts: 'Kontakte',
        welcome: 'Willkommen auf der Startseite.',
        //aboutText: 'Dies ist die Über uns Seite.',
        // contactsText: 'Dies ist die Kontaktseite.'
      }
    },
    ua: {
      translation: {
        home: 'Головна',
        about: 'Про нас',
        contacts: 'Контакти',
        welcome: 'Ласкаво просимо на головну сторінку.',
        // aboutText: 'Це сторінка Про нас.',
        // contactsText: 'Це сторінка Контакти.'
      }
    }
  },
  lng: 'ua',
  fallbackLng: 'ua',
  interpolation: { escapeValue: false }
});

export default i18n; 