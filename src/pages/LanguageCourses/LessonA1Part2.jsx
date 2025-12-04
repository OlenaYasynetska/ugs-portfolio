import React, { useEffect, useState } from 'react';
import Main from '../../components/Main/Main';
import useExerciseNavigation from '../../hooks/useExerciseNavigation.jsx';

const LESSON_TITLE = 'Personalpronomen - Übung 2';
const LESSON_SUBTITLE = 'Weitere Übungen';

const PRONOUN_EXERCISES = [
  {
    id: 1,
    sentence: '___ gehen ins Kino.',
    options: ['Wir', 'Du', 'Er'],
    answer: 'Wir'
  },
  {
    id: 2,
    sentence: 'Kommst ___ mit?',
    options: ['du', 'sie', 'ihr'],
    answer: 'du'
  },
  {
    id: 3,
    sentence: '___ spielt Fußball.',
    options: ['Sie', 'Er', 'Wir'],
    answer: 'Er'
  },
  {
    id: 4,
    sentence: 'Haben ___ Hunger?',
    options: ['ihr', 'du', 'sie'],
    answer: 'ihr'
  }
];

const LessonA1Part2 = () => {
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

  const { navigationButtons } = useExerciseNavigation({
    prevPath: '/language-courses/a1',
    nextPath: '/language-courses',
    canProceed: true,
  });

  return (
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
            A1 • Lektion 1 • Übung 2
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
              2. Ergänzen Sie die Pronomen.
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
            <p style={{ marginTop: '20px', color: '#475569', fontSize: '0.95em' }}>
              Sehr gut! Weiter so!
            </p>
            {navigationButtons}
          </div>
        </div>
      </article>
    </Main>
  );
};

export default LessonA1Part2;

