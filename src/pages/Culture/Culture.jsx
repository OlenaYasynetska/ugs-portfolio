import React from 'react';
import { useTranslation } from 'react-i18next';
import Main from '../../components/Main/Main';

const Culture = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ color: '#0057b8', textAlign: 'center', marginBottom: '40px' }}>
          🎭 {t('culture_title', 'Українська культура в Штайєрі')}
        </h1>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', color: '#666' }}>
            {t('culture_intro', 'Відкрийте для себе багату українську культуру через різноманітні події, фестивалі та культурні заходи в Штайєрі. Наша громада організовує регулярні заходи для збереження та популяризації української культури в Австрії.')}
          </p>
        </div>

        <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          
          {/* Регулярные события */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '20px' }}>
              📅 {t('regular_events', 'Регулярні події')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>{t('ukrainian_language_club', 'Український мовний клуб')}</strong> - {t('lang_club_desc', 'Щотижневі зустрічі для практики української мови')}</li>
              <li><strong>{t('folk_dance_group', 'Група народного танцю')}</strong> - {t('dance_group_desc', 'Танцювальні заняття українськими народними танцями')}</li>
              <li><strong>{t('choir', 'Український хор')}</strong> - {t('choir_desc', 'Спів українських народних та сучасних пісень')}</li>
              <li><strong>{t('art_workshops', 'Мистецькі майстерні')}</strong> - {t('art_desc', 'Заняття з українського декоративно-прикладного мистецтва')}</li>
            </ul>
          </div>

          {/* Фестивали и праздники */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '20px' }}>
              🎉 {t('festivals_holidays', 'Фестивалі та свята')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>{t('independence_day', 'День Незалежності України')}</strong> - {t('independence_desc', 'Святкування 24 серпня з концертами та виступами')}</li>
              <li><strong>{t('christmas_celebration', 'Різдвяні святкування')}</strong> - {t('christmas_desc', 'Традиційні українські різдвяні обряди та колядки')}</li>
              <li><strong>{t('easter_festival', 'Великодній фестиваль')}</strong> - {t('easter_desc', 'Святкування Великодня з писанками та традиціями')}</li>
              <li><strong>{t('cultural_festival', 'Культурний фестиваль')}</strong> - {t('cultural_fest_desc', 'Щорічний фестиваль української культури')}</li>
            </ul>
          </div>

          {/* Кулинарные события */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '20px' }}>
              🍽️ {t('culinary_events', 'Кулінарні події')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>{t('cooking_masterclass', 'Кулінарні майстер-класи')}</strong> - {t('cooking_desc', 'Навчання приготування українських страв')}</li>
              <li><strong>{t('food_festival', 'Фестиваль української кухні')}</strong> - {t('food_fest_desc', 'Дегустація традиційних українських страв')}</li>
              <li><strong>{t('borsch_day', 'День борщу')}</strong> - {t('borsch_desc', 'Святкування найпопулярнішої української страви')}</li>
              <li><strong>{t('vareniki_workshop', 'Майстер-клас з вареників')}</strong> - {t('vareniki_desc', 'Навчання ліплення українських вареників')}</li>
            </ul>
          </div>

          {/* Музыкальные события */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '20px' }}>
              🎵 {t('music_events', 'Музичні події')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>{t('folk_music_concert', 'Концерти народної музики')}</strong> - {t('folk_music_desc', 'Виступи з українською народною музикою')}</li>
              <li><strong>{t('bandura_lessons', 'Уроки бандури')}</strong> - {t('bandura_desc', 'Навчання гри на традиційному українському інструменті')}</li>
              <li><strong>{t('modern_ukrainian_music', 'Сучасна українська музика')}</strong> - {t('modern_music_desc', 'Концерти сучасних українських виконавців')}</li>
              <li><strong>{t('karaoke_evening', 'Караоке-вечори')}</strong> - {t('karaoke_desc', 'Спів українських пісень у дружній атмосфері')}</li>
            </ul>
          </div>

          {/* Образовательные события */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '20px' }}>
              📚 {t('educational_events', 'Освітні події')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>{t('history_lectures', 'Лекції з історії України')}</strong> - {t('history_desc', 'Пізнавальні лекції про історію та культуру України')}</li>
              <li><strong>{t('literature_club', 'Літературний клуб')}</strong> - {t('literature_desc', 'Обговорення української літератури та поезії')}</li>
              <li><strong>{t('film_screenings', 'Кінопокази')}</strong> - {t('film_desc', 'Перегляд українських фільмів та документальних стрічок')}</li>
              <li><strong>{t('art_exhibitions', 'Художні виставки')}</strong> - {t('art_exhibit_desc', 'Виставки українських художників та фотографів')}</li>
            </ul>
          </div>

          {/* Детские события */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <h2 style={{ color: '#0057b8', marginBottom: '20px' }}>
              👶 {t('children_events', 'Події для дітей')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>{t('ukrainian_school', 'Українська школа')}</strong> - {t('school_desc', 'Заняття українською мовою та культурою для дітей')}</li>
              <li><strong>{t('creative_workshops', 'Творчі майстерні')}</strong> - {t('creative_desc', 'Малювання, ліплення та інші творчі заняття')}</li>
              <li><strong>{t('storytelling', 'Читання казок')}</strong> - {t('stories_desc', 'Читання українських народних казок та легенд')}</li>
              <li><strong>{t('children_concerts', 'Дитячі концерти')}</strong> - {t('children_concerts_desc', 'Музичні виступи дітей та для дітей')}</li>
            </ul>
          </div>

        </div>

        {/* Календарь событий */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ffd700, #0057b8)', 
          color: 'white', 
          padding: '30px', 
          borderRadius: '12px', 
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>
            📅 {t('events_calendar', 'Календар подій')}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            {t('calendar_info', 'Слідкуйте за нашим календарем подій, щоб не пропустити жодного важливого заходу')}
          </p>
          <button style={{
            background: 'white',
            color: '#0057b8',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            {t('view_calendar', 'Переглянути календар')}
          </button>
        </div>

        {/* Присоединиться к сообществу */}
        <div style={{ marginTop: '40px', padding: '25px', background: '#e3f2fd', borderRadius: '12px', border: '1px solid #bbdefb' }}>
          <h3 style={{ color: '#1565c0', marginBottom: '15px', textAlign: 'center' }}>
            🤝 {t('join_community', 'Приєднуйтесь до нашої культурної спільноти')}
          </h3>
          <p style={{ lineHeight: '1.6', color: '#1565c0', textAlign: 'center' }}>
            {t('join_desc', 'Ми завжди раді новим учасникам! Незалежно від того, чи ви хочете виступати, організовувати події або просто відвідувати заходи - наша громада відкрита для всіх.')}
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={{
              background: '#0057b8',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginRight: '10px'
            }}>
              {t('become_volunteer', 'Стати волонтером')}
            </button>
            <button style={{
              background: '#ffd700',
              color: '#333',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              {t('contact_us', 'Зв\'язатися з нами')}
            </button>
          </div>
        </div>

      </div>
    </Main>
  );
};

export default Culture; 