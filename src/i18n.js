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
        important_info: 'Important Information',
        pharmacy_duty_today: 'Pharmacies on duty today ({{date}}):',
        emergency_calls: 'Emergency Calls',
        fire_service: 'Fire Service',
        police: 'Police',
        ambulance: 'Ambulance',
        emergency_number: 'Emergency Number (Europe)',
        no_pharmacy_data: 'No data on duty pharmacies today.',
        in_the_center: 'In the center of events',
        this_day_in_history: 'This day in history',
        more_ellipsis: 'more…',
        hide_text: 'Hide',
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
        important_info: 'Wichtige Information',
        pharmacy_duty_today: 'Diensthabende Apotheken heute ({{date}}):',
        emergency_calls: 'Notrufe',
        fire_service: 'Feuerwehr',
        police: 'Polizei',
        ambulance: 'Rettung',
        emergency_number: 'Euronotruf',
        no_pharmacy_data: 'Heute keine Daten zu Bereitschaftsapotheken.',
        in_the_center: 'Im Mittelpunkt des Geschehens',
        this_day_in_history: 'Dieser Tag in der Geschichte',
        more_ellipsis: 'mehr…',
        hide_text: 'Verbergen',
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
        important_info: 'Важлива інформація',
        pharmacy_duty_today: 'Дежурні аптеки на сьогодні ({{date}}):',
        emergency_calls: 'Екстрені виклики',
        fire_service: 'Пожежна служба',
        police: 'Поліція',
        ambulance: 'Швидка допомога',
        emergency_number: 'Єдиний номер (Європа)',
        no_pharmacy_data: 'Сьогодні немає даних про чергові аптеки.',
        in_the_center: 'У центрі подій',
        this_day_in_history: 'Цей день в історії',
        more_ellipsis: 'далі…',
        hide_text: 'Сховати',
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