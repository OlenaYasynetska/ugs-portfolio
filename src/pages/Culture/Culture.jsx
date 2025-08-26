import React from 'react';
import { useTranslation } from 'react-i18next';
import Main from '../../components/Main/Main';
import { useCardAnimation } from '../../hooks';

const Culture = () => {
  const { t } = useTranslation();
  
  // Хук для анимации карточек
  const { getFullCSS } = useCardAnimation(6, {
    baseDelay: 100,
    delayIncrement: 200,
    animationType: 'slideInUp',
    duration: 0.8
  });

  return (
    <Main>
      <style>
        {getFullCSS()}
      </style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ 
          color: '#0057b8', 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: 'clamp(1.8em, 5vw, 2.5em)',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          animation: 'fadeInDown 1s ease-out'
        }}>
          {t('austrian_life_features_title')}
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gap: '30px', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          padding: '0 10px'
        }}>
          
          {/* Work-Life Balance */}
          <div 
            className="animated-card card-1"
            style={{ 
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold'
            }}>
              {t('work_life_balance_title')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li className="list-item"><strong>{t('work_life_balance_point1', 'Баланс роботи та особистого життя')}</strong> - {t('work_life_balance_desc1', 'Тут дотримуються балансу між роботою та особистим життям')}</li>
              <li className="list-item"><strong>{t('work_life_balance_point2', 'Гнучкий графік роботи')}</strong> - {t('work_life_balance_desc2', 'Ключовим питанням для австрійців є гнучкий графік роботи. Місцеві у всьому дотримуються балансу')}</li>
              <li className="list-item"><strong>{t('work_life_balance_point3', 'Ефективність протягом дня')}</strong> - {t('work_life_balance_desc3', 'Тут прийнято встигати виконувати завдання протягом дня, щоб увечері бути вільним для сім\'ї')}</li>
              <li className="list-item"><strong>{t('work_life_balance_point4', 'Робочий графік')}</strong> - {t('work_life_balance_desc4', 'Зазвичай робочий день триває з 8:00 до 17:00, а по п\'ятницях – до 15:00. У вихідні робота – це табу')}</li>
            </ul>
          </div>

          {/* Фестивали и праздники */}
          <div 
            className="animated-card card-2"
            style={{ 
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold'
            }}>
              {t('austrian_language_title')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li className="list-item"><strong>{t('austrian_language_point1', 'Складності з мовою')}</strong> - {t('austrian_language_desc1', 'Іноземців очікують складності з мовою')}</li>
              <li className="list-item"><strong>{t('austrian_language_point2', 'Офіційна мова')}</strong> - {t('austrian_language_desc2', 'Офіційна мова – німецька, але ніхто на ній не говорить')}</li>
              <li className="list-item"><strong>{t('austrian_language_point3', 'Регіональні діалекти')}</strong> - {t('austrian_language_desc3', 'До офіційної мови додається діалект, і в кожному регіоні він свій')}</li>
              <li className="list-item"><strong>{t('austrian_language_point4', 'Навчання на досвіді')}</strong> - {t('austrian_language_desc4', 'Приїжджим доводиться вчити мову, яку використовують тільки в робочому листуванні. Немає курсу чи підручника – тільки досвід')}</li>
            </ul>
          </div>

          {/* Кулинарные события */}
          <div 
            className="animated-card card-3"
            style={{ 
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold'
            }}>
              {t('austrian_relationships_title')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li className="list-item"><strong>{t('austrian_relationships_point1', 'Перевірка почуттів')}</strong> - {t('austrian_relationships_desc1', 'Австрійці довго перевіряють почуття, перш ніж оформити стосунки')}</li>
              <li className="list-item"><strong>{t('austrian_relationships_point2', 'Знайомство')}</strong> - {t('austrian_relationships_desc2', 'В основному стосунки зав\'язуються через друзів або через інтернет')}</li>
              <li className="list-item"><strong>{t('austrian_relationships_point3', 'Шлюб та діти')}</strong> - {t('austrian_relationships_desc3', 'Багато одружуються, коли обом у парі вже за 30. А дітей заводять ще пізніше')}</li>
              <li className="list-item"><strong>{t('austrian_relationships_point4', 'Романтика')}</strong> - {t('austrian_relationships_desc4', 'Найпопулярніші варіанти для зустрічей – похід у гори або в ліс, катаня на лижах, біг у парку')}</li>
            </ul>
          </div>

          {/* Музыкальные события */}
          <div 
            className="animated-card card-4"
            style={{ 
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold'
            }}>
              {t('austrian_architecture_title')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li className="list-item"><strong>{t('austrian_architecture_point1', 'Сірі будівлі Відня')}</strong> - {t('austrian_architecture_desc1', 'Більшість віденських будівель – сірого кольору. Але якось раз це вирішили змінити')}</li>
              <li className="list-item"><strong>{t('austrian_architecture_point2', 'Художник Хундертвассер')}</strong> - {t('austrian_architecture_desc2', 'Серед австрійців знайшлася людина, яку благородний сірий колір чомусь почав дратувати. Ним виявився художник Фріденсрайх Хундертвассер')}</li>
              <li className="list-item"><strong>{t('austrian_architecture_point3', 'Унікальні квартири')}</strong> - {t('austrian_architecture_desc3', 'Він вважав, що людина не може бути щасливою в штучному середовищі будинків, що складаються з однакових повторюваних комірок')}</li>
              <li className="list-item"><strong>{t('austrian_architecture_point4', 'Архітектура та природа')}</strong> - {t('austrian_architecture_desc4', 'Крім того, він вважав, що архітектура повинна становити єдине ціле з навколишньою її природою')}</li>
            </ul>
          </div>

          {/* Образовательные события */}
          <div 
            className="animated-card card-5"
            style={{ 
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold'
            }}>
              {t('austrian_healthcare_title')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li className="list-item"><strong>{t('austrian_healthcare_point1', 'Потужна система охорони здоров\'я')}</strong> - {t('austrian_healthcare_desc1', 'Тут потужна система охорони здоров\'я. Середня тривалість життя в Австрії – 81 рік, і даний факт говорить сам за себе')}</li>
              <li className="list-item"><strong>{t('austrian_healthcare_point2', 'Страхова політика')}</strong> - {t('austrian_healthcare_desc2', 'У кожного громадянина є недешева страховка, яку повністю або частково оплачує роботодавець')}</li>
              <li className="list-item"><strong>{t('austrian_healthcare_point3', 'Екстрена допомога')}</strong> - {t('austrian_healthcare_desc3', 'В екстрених випадках страхова компанія оплатить машину швидкої допомоги і навіть гелікоптер')}</li>
              <li className="list-item"><strong>{t('austrian_healthcare_point4', 'Якість медичної допомоги')}</strong> - {t('austrian_healthcare_desc4', 'Медична допомога – одне з головних переваг життя тут. Якщо ви працюєте, то 100% обслуговування і лікування включено в вашу страховку')}</li>
            </ul>
          </div>

          {/* Детские события */}
          <div 
            className="animated-card card-6"
            style={{ 
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ 
              color: '#0057b8', 
              marginBottom: '20px',
              fontSize: '1.5em',
              fontWeight: 'bold'
            }}>
              {t('austrian_friendship_title')}
            </h2>
            <ul style={{ lineHeight: '1.8' }}>
              <li className="list-item"><strong>{t('austrian_friendship_point1', 'Складність у заведенні друзів')}</strong> - {t('austrian_friendship_desc1', 'Австрійцям потрібно багато часу для того, щоб відкритися, почати дружити')}</li>
              <li className="list-item"><strong>{t('austrian_friendship_point2', 'Комфорт у тиші')}</strong> - {t('austrian_friendship_desc2', 'Наприклад, вони роками можуть обідати з колегами в тиші: їм так комфортно')}</li>
              <li className="list-item"><strong>{t('austrian_friendship_point3', 'Легкість розмови')}</strong> - {t('austrian_friendship_desc3', 'Але самі австрійці запевняють, що з ними легко зав\'язати розмову')}</li>
              <li className="list-item"><strong>{t('austrian_friendship_point4', 'Секрет спілкування')}</strong> - {t('austrian_friendship_desc4', '«Ми скаржимося на все. Ви не знаєте, про що поговорити? Просто почніть скаржитися на щось. У 99% випадків австрієць погодиться з вами»')}</li>
            </ul>
          </div>

        </div>
      </div>
    </Main>
  );
};

export default Culture; 