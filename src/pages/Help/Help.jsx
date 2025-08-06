import React from 'react';
import { useTranslation } from 'react-i18next';
import Main from '../../components/Main/Main';

const Help = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ color: '#0057b8', textAlign: 'center', marginBottom: '40px' }}>
          {t('help_title', 'Допомога українцям в Штайєрі')}
        </h1>

        <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* Юридическая помощь */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '15px' }}>
              ⚖️ {t('legal_help', 'Юридична допомога')}
            </h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>{t('legal_help_1', 'Консультації з питань тимчасового захисту')}</li>
              <li>{t('legal_help_2', 'Допомога з документами та реєстрацією')}</li>
              <li>{t('legal_help_3', 'Підтримка при отриманні робочого дозволу')}</li>
              <li>{t('legal_help_4', 'Консультації з сімейного права')}</li>
            </ul>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              📞 {t('contact_for_legal', 'Зв\'яжіться з нами для отримання юридичної допомоги')}
            </p>
          </div>

          {/* Психологическая поддержка */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '15px' }}>
              🧠 {t('psychological_support', 'Психологічна підтримка')}
            </h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>{t('psych_support_1', 'Індивідуальні консультації')}</li>
              <li>{t('psych_support_2', 'Групові терапевтичні сесії')}</li>
              <li>{t('psych_support_3', 'Підтримка дітей та підлітків')}</li>
              <li>{t('psych_support_4', 'Допомога з посттравматичним стресовим розладом')}</li>
            </ul>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              💙 {t('free_support', 'Всі послуги надаються безкоштовно')}
            </p>
          </div>

          {/* Языковые курсы */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '15px' }}>
              📚 {t('language_courses', 'Мовні курси')}
            </h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>{t('lang_courses_1', 'Німецька мова для початківців')}</li>
              <li>{t('lang_courses_2', 'Інтенсивні курси для швидкого вивчення')}</li>
              <li>{t('lang_courses_3', 'Підготовка до мовних іспитів')}</li>
              <li>{t('lang_courses_4', 'Бізнес-німецька для працевлаштування')}</li>
            </ul>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              🎓 {t('certified_courses', 'Сертифіковані курси з визнанням в Австрії')}
            </p>
          </div>

          {/* Помощь с жильем */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '15px' }}>
              🏠 {t('housing_help', 'Допомога з житлом')}
            </h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>{t('housing_help_1', 'Пошук доступного житла')}</li>
              <li>{t('housing_help_2', 'Допомога з договорами оренди')}</li>
              <li>{t('housing_help_3', 'Підтримка при реєстрації')}</li>
              <li>{t('housing_help_4', 'Консультації з житлових питань')}</li>
            </ul>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              🔑 {t('housing_support', 'Підтримка в пошуку та облаштуванні житла')}
            </p>
          </div>

          {/* Трудоустройство */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '15px' }}>
              💼 {t('employment_help', 'Допомога з працевлаштуванням')}
            </h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>{t('employment_help_1', 'Підготовка резюме та CV')}</li>
              <li>{t('employment_help_2', 'Тренінги з проходження співбесід')}</li>
              <li>{t('employment_help_3', 'Пошук вакансій у Штайєрі')}</li>
              <li>{t('employment_help_4', 'Допомога з визнанням дипломів')}</li>
            </ul>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              🎯 {t('career_support', 'Підтримка кар\'єрного розвитку')}
            </p>
          </div>

          {/* Образование */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '15px' }}>
              🎓 {t('education_help', 'Освіта та навчання')}
            </h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>{t('education_help_1', 'Допомога з записом дітей до школи')}</li>
              <li>{t('education_help_2', 'Підготовка до вступу до університету')}</li>
              <li>{t('education_help_3', 'Курси професійної перепідготовки')}</li>
              <li>{t('education_help_4', 'Підтримка студентів')}</li>
            </ul>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              📖 {t('education_support', 'Підтримка освітнього процесу')}
            </p>
          </div>

        </div>

        {/* Контактная информация */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0057b8, #ffd700)', 
          color: 'white', 
          padding: '30px', 
          borderRadius: '12px', 
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>
            📞 {t('contact_us_for_help', 'Зв\'яжіться з нами для отримання допомоги')}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '15px' }}>
            {t('help_available', 'Наша команда готова допомогти вам з будь-якими питаннями')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div>
              <strong>📧 Email:</strong><br />
              contact@ugs-info.at
            </div>
            <div>
              <strong>🌐 Веб-сайт:</strong><br />
              ugs-info.at
            </div>
            <div>
              <strong>📍 Адреса:</strong><br />
              {t('steyr_austria', 'Штайєр, Австрія')}
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div style={{ marginTop: '40px', padding: '25px', background: '#fff3cd', borderRadius: '12px', border: '1px solid #ffeaa7' }}>
          <h3 style={{ color: '#856404', marginBottom: '15px' }}>
            ℹ️ {t('important_info', 'Важлива інформація')}
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#856404' }}>
            <li>{t('help_info_1', 'Всі послуги надаються безкоштовно для українців з тимчасовим захистом')}</li>
            <li>{t('help_info_2', 'Консультації проводяться українською, німецькою та англійською мовами')}</li>
            <li>{t('help_info_3', 'Запис на консультації здійснюється за попереднім записом')}</li>
            <li>{t('help_info_4', 'Ми працюємо з понеділка по п\'ятницю з 9:00 до 17:00')}</li>
          </ul>
        </div>

      </div>
    </Main>
  );
};

export default Help; 