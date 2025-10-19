import React from 'react';
import { useTranslation } from 'react-i18next';
import Main from '../../components/Main/Main';
import { useCardAnimation } from '../../hooks';
import parksImg from '../../assets/Parks.png';
import pensionImg from '../../assets/Pension.png';

const Culture = () => {
  const { t } = useTranslation();
  
  // Хук для анимации карточек
  const { getFullCSS } = useCardAnimation(8, {
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
        {/* Парки та зелені зони Відня */}
        <div 
          style={{ 
            background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
            padding: '25px', 
            borderRadius: '16px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '40px',
            maxWidth: '1200px',
            margin: '0 auto 40px auto'
          }}
        >
          <h2 style={{ 
            color: '#0057b8', 
            marginBottom: '20px',
            fontSize: '1.8em',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            🍃 {t('vienna_parks_title', 'Парки та зелені зони Відня')}
          </h2>

          <div style={{ 
            textAlign: 'center', 
            marginBottom: '25px' 
          }}>
            <img 
              src={parksImg} 
              alt="Парки та зелені зони Відня" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
              }} 
            />
          </div>
          
          <p style={{ 
            fontSize: '1.1em', 
            lineHeight: '1.6', 
            color: '#333',
            textAlign: 'center',
            marginBottom: '25px',
            fontStyle: 'italic'
          }}>
            {t('vienna_parks_intro', 'Осінь вже відчувається у повітрі, але сонце все ще дарує нам теплі промінці. Найкращий час, щоб прогулятися парками та зеленими зонами Відня - відчути затишок природи, насолодитися кольорами листя й упіймати останнє тепло.')}
          </p>

          <h3 style={{ 
            color: '#0057b8', 
            marginBottom: '15px',
            fontSize: '1.3em',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            🏛️ {t('vienna_parks_popular', 'Популярні місця:')}
          </h3>

          <ul style={{ 
            lineHeight: '1.8',
            fontSize: '1em',
            color: '#333'
          }}>
            <li className="list-item" style={{ marginBottom: '12px' }}>
              <strong>📍 Stadtpark</strong> - {t('vienna_parks_stadtpark', 'перший публічний парк Відня, де живе дух Йоганна Штрауса')}
            </li>
            <li className="list-item" style={{ marginBottom: '12px' }}>
              <strong>📍 Burggarten</strong> - {t('vienna_parks_burggarten', 'зелені галявини з видом на імператорську архітектуру')}
            </li>
            <li className="list-item" style={{ marginBottom: '12px' }}>
              <strong>📍 Volksgarten</strong> - {t('vienna_parks_volksgarten', 'чарівний сад троянд і храм Тесея')}
            </li>
            <li className="list-item" style={{ marginBottom: '12px' }}>
              <strong>📍 Augarten</strong> - {t('vienna_parks_augarten', 'старовинний бароковий парк для спорту та відпочинку')}
            </li>
            <li className="list-item" style={{ marginBottom: '12px' }}>
              <strong>📍 Prater</strong> - {t('vienna_parks_prater', 'зелена зона для людей і тварин')}
            </li>
            <li className="list-item" style={{ marginBottom: '12px' }}>
              <strong>📍 Сади Шенбрунн</strong> - {t('vienna_parks_schoenbrunn', 'барокові алеї та вид на Глорієтту')}
            </li>
          </ul>
        </div>

        {/* Картинка Pension */}
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          padding: '2vw',
          maxWidth: '1200px',
          width: '85%',
          margin: '0 auto 1vw auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <img 
            src={pensionImg} 
            alt="Pension" 
            style={{ 
              width: '100%',
              maxWidth: '100%',
              height: 'auto', 
              borderRadius: 12, 
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 8px' 
            }} 
          />
        </div>

        {/* Пост о лучших странах для пенсионеров */}
        <div 
          style={{ 
            background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', 
            padding: '25px', 
            borderRadius: '16px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '40px',
            maxWidth: '1200px',
            margin: '0 auto 40px auto'
          }}
        >
          <h2 style={{ 
            color: '#0057b8', 
            marginBottom: '20px',
            fontSize: '1.8em',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            🧓 {t('best_countries_pensioners_title', '5 найкращих країн для життя пенсіонерів')}
          </h2>
          
          <div style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#333',
            textAlign: 'left'
          }}>
            {t('best_countries_pensioners_text', 'Дослідження Global Citizen Solutions охопило 44 країни на різних континентах. Експерти оцінювали їх за якістю життя, доступністю медицини, рівнем безпеки, легкістю переїзду та податковими умовами.')}
            
            <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
              {t('best_countries_pensioners_quote', '"Все більше людей шукають не лише спокій, а й якість життя, стабільність та доступність" — докторка Лаура Мадрид')}
            </p>

            <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>🇦🇹 Австрія — 87,92 бала</strong> - {t('austria_pensioners', 'стабільна європейська держава з високими стандартами медицини, чистим довкіллям і надійною інфраструктурою')}
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>🇺🇾 Уругвай — 88,05 бала</strong> - {t('uruguay_pensioners', 'низька вартість життя, щедрі податкові пільги та можливість швидко отримати постійне місце проживання')}
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>🇪🇸 Іспанія — 88,52 бала</strong> - {t('spain_pensioners', 'чудова медицина, високий рівень безпеки та дружнє суспільство')}
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>🇲🇺 Маврикій — 89,7 бала</strong> - {t('mauritius_pensioners', 'чисті пляжі, м\'який клімат і можливість швидко отримати резидентство')}
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>🇵🇹 Португалія — 92,6 бала</strong> - {t('portugal_pensioners', 'висока якість життя, доступні ціни, теплий клімат та доброзичливе ставлення до іноземців')}
              </li>
            </ul>
          </div>
        </div>

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