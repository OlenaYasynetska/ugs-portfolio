import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';

const ContactForm = ({ onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    console.log('Отправка письма с параметрами:', templateParams);
    console.log('Service ID:', 'service_xapqo9x');
    console.log('Template ID:', 'template_gka9359');
    console.log('User ID:', '6GTgM1iT4JuZOh4G_');

    emailjs.send(
      'service_xapqo9x',
      'template_gka9359',
      templateParams,
      '6GTgM1iT4JuZOh4G_'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          onClose();
        }, 2000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        console.log('Ошибка детали:', err.text || err.message || err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
             <div style={{
         background: '#f5f5dc',
         borderRadius: 16,
         padding: '24px',
         maxWidth: '400px',
         width: '100%',
         maxHeight: '70vh',
         overflow: 'auto',
         boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
       }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '1.5rem',
            color: '#333'
          }}>
            {t('contact_us')}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#666',
              padding: '4px'
            }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              1. {t('name')}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              2. E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              3. {t('message')}
            </label>
                         <textarea
               name="message"
               value={formData.message}
               onChange={handleChange}
               required
               rows="2"
               style={{
                 width: '100%',
                 padding: '12px',
                 border: '1px solid #ddd',
                 borderRadius: '8px',
                 fontSize: '1rem',
                 resize: 'vertical',
                 minHeight: '60px',
                 boxSizing: 'border-box',
                 fontFamily: 'inherit'
               }}
               placeholder={t('message_placeholder')}
             />
          </div>

                     {submitStatus === 'success' && (
             <div style={{
               padding: '12px',
               backgroundColor: '#d4edda',
               color: '#155724',
               borderRadius: '8px',
               marginBottom: '16px',
               textAlign: 'center'
             }}>
               {t('message_sent_success')}
             </div>
           )}
           
           {submitStatus === 'error' && (
             <div style={{
               padding: '12px',
               backgroundColor: '#f8d7da',
               color: '#721c24',
               borderRadius: '8px',
               marginBottom: '16px',
               textAlign: 'center'
             }}>
               {t('message_sent_error')}
             </div>
           )}

           <button
             type="submit"
             disabled={isSubmitting}
             style={{
               width: '100%',
               padding: '12px 24px',
               backgroundColor: isSubmitting ? '#ccc' : '#e8c205',
               color: '#333',
               border: 'none',
               borderRadius: '8px',
               fontSize: '1rem',
               fontWeight: 'bold',
               cursor: isSubmitting ? 'not-allowed' : 'pointer',
               transition: 'background-color 0.2s'
             }}
             onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#d4b204')}
             onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#e8c205')}
           >
             {isSubmitting ? t('sending') : t('send_message')}
           </button>
        </form>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ContactForm; 