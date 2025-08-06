import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Main from '../../components/Main/Main';
import notFoundBg from '../../assets/page_not_found.png';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useEffect, useState } from 'react';

const ContactFormPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [showContactForm, setShowContactForm] = useState(false);

  // Отключаем вертикальный скролл только на этой странице
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <Main style={{ overflow: 'hidden', minHeight: '100vh' }}>
      <div
        style={{
          minHeight: '80vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
                                            <img
           src={notFoundBg}
           alt="Contact form background"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100vh',
              display: 'block',
              borderRadius: 16,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              marginTop: '-60px',
            }}
          />
                 <div
           className="contact-message"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(232, 210, 162, 0.92)',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: 32,
            textAlign: 'center',
            minWidth: 220,
            maxWidth: '80%',
          }}
        >
                     <style>{`
             @media (max-width: 600px) {
               .contact-message {
                 font-size: 1.1rem !important;
                 padding: 10px 4vw !important;
                 min-width: 0 !important;
                 max-width: 95vw !important;
                 border-radius: 10px !important;
               }
               .contact-title {
                 font-size: 1.3rem !important;
               }
               .contact-btn {
                 font-size: 0.9rem !important;
                 padding: 6px 12px !important;
               }
             }
           `}</style>
                    <h1 className="contact-title" style={{ fontSize: '2rem', marginBottom: 24 }}>{t('notfound_message')}</h1>
                     <button
             className="contact-btn"
            onClick={() => setShowContactForm(true)}
            style={{
              padding: '8px 20px',
              fontSize: '1rem',
              borderRadius: 6,
              border: 'none',
              background: '#e8c205',
              color: '#333',
              cursor: 'pointer',
            }}
          >
            {t('contact_us')}
          </button>
        </div>
      </div>
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </Main>
  );
};

export default ContactFormPage;