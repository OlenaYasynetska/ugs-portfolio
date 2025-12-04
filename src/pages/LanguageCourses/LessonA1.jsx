import React, { useEffect, useState } from 'react';
import Main from '../../components/Main/Main';
import lessonImg from '../../assets/A1/Lessen_1.png';
import useExerciseNavigation from '../../hooks/useExerciseNavigation.jsx';

const LESSON_TITLE = 'Ich, du, er, sie, es, wir, ihr, sie und Sie';
const LESSON_SUBTITLE = 'Personalpronomen';

const PRONOUN_EXERCISES = [
  {
    id: 1,
    sentence: '___ sprechen Deutsch.',
    options: ['Wir', 'Sie', 'Er'],
    answer: 'Wir'
  },
  {
    id: 2,
    sentence: 'Haben ___ Zeit?',
    options: ['du', 'sie', 'Sie'],
    answer: 'Sie'
  },
  {
    id: 3,
    sentence: 'Hilfst ___ mir?',
    options: ['er', 'du', 'ihr'],
    answer: 'du'
  },
  {
    id: 4,
    sentence: '___ ist Programmierer.',
    options: ['Wir', 'Er', 'Sie'],
    answer: 'Er'
  }
];

const PERSON_PRONOUNS = [
  {
    id: 'singular',
    title: 'Singular',
    subtitle: 'единственное число',
    items: ['ich', 'du', 'er / sie / es', 'Sie (höfliche Form)'],
  },
  {
    id: 'plural',
    title: 'Plural',
    subtitle: 'множественное число',
    items: ['wir', 'ihr', 'sie', 'Sie (höfliche Form)'],
  },
];

const LessonA1 = () => {
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    document.title = `${LESSON_TITLE} | UGS Steyr`;
  }, []);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: prev[id] === value ? undefined : value
    }));
  };

  // Проверка: все ли упражнения выполнены правильно
  const allExercisesCorrect = PRONOUN_EXERCISES.every(
    (exercise) => answers[exercise.id] === exercise.answer
  );

  // Проверка: все ли упражнения отвечены
  const allExercisesAnswered = PRONOUN_EXERCISES.every(
    (exercise) => Boolean(answers[exercise.id])
  );

  // Можно перейти только если все упражнения отвечены и все правильные
  const canProceed = allExercisesAnswered && allExercisesCorrect;

  const disableMessage = !canProceed
    ? !allExercisesAnswered
      ? 'Bitte beantworten Sie alle Fragen.'
      : 'Bitte korrigieren Sie die Fehler.'
    : '';

  const { navigationButtons } = useExerciseNavigation({
    prevPath: '/language-courses',
    nextPath: '/language-courses/a1/part2',
    canProceed,
    disableMessage,
  });

  return (
    <>
      <Main>
        <article
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '30px 20px 60px',
          color: '#0f172a',
        }}
      >
        <header style={{ textAlign: 'left', marginBottom: '30px' }}>
          <p style={{
            fontSize: '1.1em',
            letterSpacing: '0.3em',
            color: '#0ea5e9',
            marginBottom: '15px',
            textTransform: 'uppercase',
            fontWeight: 600,
            background: '#f1f5f9',
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '999px'
          }}>
            A1 • Lektion 1
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", "Times New Roman", serif',
              fontSize: 'clamp(2.2em, 5vw, 3.4em)',
              marginBottom: '10px',
            }}
          >
            {LESSON_TITLE}
          </h1>
          <h2
            style={{
              fontFamily: '"Playfair Display", "Times New Roman", serif',
              fontSize: 'clamp(1.3em, 3vw, 2em)',
              color: '#475569',
              margin: 0,
            }}
          >
            {LESSON_SUBTITLE}
          </h2>
        </header>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '25px',
            alignItems: 'flex-start',
            maxWidth: '1400px',
            margin: '0 auto'
          }}
        >
          {/* Левая секция: Грамматическое объяснение */}
          <div
            style={{
              flex: '1 1 400px',
              background: '#fff',
              borderRadius: '20px',
              padding: '25px',
              boxShadow: '0 15px 35px rgba(15, 23, 42, 0.12)',
              fontFamily: '"Playfair Display", "Times New Roman", serif'
            }}
          >
            <h3
              style={{
                fontSize: '1.3em',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              💡 WICHTIG ZU WISSEN
            </h3>

            {/* Правила комбинирования */}
            <div style={{ marginBottom: '25px' }}>
              <div
                style={{
                  background: '#fef3c7',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  marginBottom: '15px',
                  fontSize: '0.95em',
                  lineHeight: '1.8'
                }}
              >
                <div><strong>ich + du = wir</strong></div>
                <div><strong>du + du = ihr</strong></div>
                <div><strong>Sie + Sie = Sie</strong></div>
                <div><strong>er + sie + es = sie</strong></div>
              </div>
            </div>

            {/* Pronomen für Personen */}
            <div style={{ marginBottom: '25px' }}>
              <h4
                style={{
                  fontSize: '1.1em',
                  fontWeight: '600',
                  color: '#0f172a',
                  marginBottom: '15px'
                }}
              >
                Pronomen für Personen
              </h4>

            {PERSON_PRONOUNS.map((group) => (
              <div
                key={group.id}
                style={{
                  background: '#f8fafc',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(15, 23, 42, 0.1)',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}
                >
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.05em' }}>
                    {group.title}
                  </span>
                  <span style={{ fontSize: '0.85em', color: '#94a3b8' }}>
                    {group.subtitle}
                  </span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#0f172a', lineHeight: 1.6 }}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <p
              style={{
                fontSize: '0.85em',
                color: '#475569',
                fontStyle: 'italic',
                marginTop: '-5px'
              }}
            >
              Вежливое «Sie» всегда пишем с заглавной буквы — как в единственном, так и во множественном числе.
            </p>
            </div>

            {/* Pronomen für Sachen */}
            <div>
              <h4
                style={{
                  fontSize: '1.1em',
                  fontWeight: '600',
                  color: '#0f172a',
                  marginBottom: '15px'
                }}
              >
                Pronomen für Sachen
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  fontSize: '0.9em'
                }}
              >
                <div style={{ color: '#475569' }}>
                  <strong>das Messer</strong> → es
                </div>
                <div style={{ color: '#475569' }}>
                  <strong>die Gabel</strong> → sie
                </div>
                <div style={{ color: '#475569' }}>
                  <strong>der Löffel</strong> → er
                </div>
                <div style={{ color: '#475569' }}>
                  <strong>die Tassen</strong> → sie
                </div>
              </div>
            </div>
          </div>

          {/* Правая секция: Упражнения */}
          <div
            style={{
              flex: '1 1 400px',
              background: '#fff',
              borderRadius: '20px',
              padding: '25px',
              boxShadow: '0 15px 35px rgba(15, 23, 42, 0.12)'
            }}
          >
            <div
              style={{
                background: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                padding: '20px 24px',
                fontFamily: '"Playfair Display", "Times New Roman", serif',
                fontSize: '1.1em',
                lineHeight: 1.6,
                color: '#0f172a'
              }}
            >
            <p
              style={{
                margin: '0 0 15px',
                fontWeight: 600,
                fontSize: '1.05em',
                letterSpacing: '0.02em',
                color: '#0f172a'
              }}
            >
              1. Ergänzen Sie die Pronomen.
            </p>
            <ol style={{ margin: 0, paddingLeft: '20px' }}>
              {PRONOUN_EXERCISES.map((item) => {
                const isAnswered = Boolean(answers[item.id]);
                const isCorrect = answers[item.id] === item.answer;

                const parts = item.sentence.split('___');
                const beforeBlank = parts[0];
                const afterBlank = parts[1] || '';

                return (
                  <li key={item.id} style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {beforeBlank && (
                        <span style={{ fontSize: '1em', color: '#0f172a' }}>
                          {beforeBlank}
                        </span>
                      )}
                      <select
                        id={`pronoun-${item.id}`}
                        value={answers[item.id] || ''}
                        onChange={(e) => handleChange(item.id, e.target.value)}
                        style={{
                          width: 'auto',
                          minWidth: '70px',
                          padding: '8px 12px',
                          borderRadius: '10px',
                          border: `2px solid ${
                            !isAnswered
                              ? 'rgba(15, 23, 42, 0.15)'
                              : isCorrect
                              ? '#10b981'
                              : '#f97316'
                          }`,
                          background: '#fff',
                          fontFamily: 'inherit',
                          fontSize: '1em',
                          color: '#0f172a',
                          appearance: 'none',
                          background: 'transparent',
                          boxShadow: 'none'
                        }}
                      >
                        <option value="">—</option>
                        {item.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {afterBlank && (
                        <span style={{ fontSize: '1em', color: '#0f172a' }}>
                          {afterBlank}
                        </span>
                      )}
                    </div>
                    {isAnswered && (
                      <p
                        style={{
                          marginTop: '8px',
                          fontSize: '0.9em',
                          color: isCorrect ? '#10b981' : '#f97316',
                          fontWeight: 500
                        }}
                      >
                        {isCorrect
                          ? 'Richtig! Gut gemacht.'
                          : `Nicht ganz. Korrekt: ${item.answer}.`}
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
              {canProceed && (
                <p style={{ marginTop: '20px', color: '#10b981', fontSize: '0.95em', fontWeight: 500 }}>
                  Super! Sie haben die Pronomen richtig ergänzt. Lass uns weitermachen!
                </p>
              )}
              
              {navigationButtons}
            </div>
          </div>
        </div>
        </article>
      </Main>
    </>
  );
};

export default LessonA1;

