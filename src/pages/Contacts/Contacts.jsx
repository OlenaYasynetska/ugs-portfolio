import React from 'react';
import { useTranslation } from 'react-i18next';
import contactsBg from '../../assets/contacts.png';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)', // Оставляем место для футера
      maxWidth: '100vw',
      textAlign: 'center',
      height: 'auto',
    }}>
      <img
        src={contactsBg}
        alt="Contacts background"
        style={{
          maxHeight: '90vh', // чтобы не перекрывать футер
          width: '100%',
          margin: '0 auto',
          display: 'block',
        }}
      />
      {/* <h1>{t('contactsText')}</h1> */}
    </div>
  );
};

export default Contacts; 