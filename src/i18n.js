import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: 'Home',
        about: 'About Us',
        contacts: 'Contacts',
        welcome: 'Top Stories – At the Heart of the News',
        // aboutText: 'This is the About Us page.',
        // contactsText: 'This is the Contacts page.'
      }
    },
    de: {
      translation: {
        home: 'Startseite',
        about: 'Über uns',
        contacts: 'Kontakte',
        welcome: 'Im Mittelpunkt des Geschehens.',
        //aboutText: 'Dies ist die Über uns Seite.',
        // contactsText: 'Dies ist die Kontaktseite.'
      }
    },
    ua: {
      translation: {
        home: 'Головна',
        about: 'Про нас',
        contacts: 'Контакти',
        welcome: 'У центрі подій.',
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