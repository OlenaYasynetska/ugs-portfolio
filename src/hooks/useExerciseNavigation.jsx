import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const baseButtonStyles = {
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
};

const applyHoverStyles = (event, { background, scale, boxShadow }) => {
  event.target.style.background = background;
  event.target.style.transform = scale;
  event.target.style.boxShadow = boxShadow;
};

const useExerciseNavigation = ({
  prevPath,
  nextPath,
  onPrev,
  onNext,
  canProceed = true,
  disableMessage,
}) => {
  const navigate = useNavigate();

  const handlePrev = useCallback(() => {
    if (typeof onPrev === 'function') {
      onPrev();
    } else if (prevPath) {
      navigate(prevPath);
    }
  }, [navigate, onPrev, prevPath]);

  const handleNext = useCallback(() => {
    if (!canProceed) return;

    if (typeof onNext === 'function') {
      onNext();
    } else if (nextPath) {
      navigate(nextPath);
    }
  }, [canProceed, navigate, nextPath, onNext]);

  const navigationButtons = useMemo(
    () => (
      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Prev button */}
        <button
          type="button"
          onClick={handlePrev}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handlePrev();
            }
          }}
          onMouseEnter={(e) =>
            applyHoverStyles(e, {
              background: '#475569',
              scale: 'scale(1.1)',
              boxShadow: '0 6px 16px rgba(100, 116, 139, 0.5)',
            })
          }
          onMouseLeave={(e) =>
            applyHoverStyles(e, {
              background: '#64748b',
              scale: 'scale(1)',
              boxShadow: '0 4px 12px rgba(100, 116, 139, 0.4)',
            })
          }
          style={{
            ...baseButtonStyles,
            background: '#64748b',
            boxShadow: '0 4px 12px rgba(100, 116, 139, 0.4)',
          }}
          aria-label="Вернуться на предыдущую страницу"
        >
          ←
        </button>

        {/* Message */}
        <div style={{ flex: 1, textAlign: 'center', minHeight: '20px' }}>
          {!canProceed && disableMessage ? (
            <p
              style={{
                margin: 0,
                color: '#f97316',
                fontSize: '0.9em',
                fontStyle: 'italic',
              }}
            >
              {disableMessage}
            </p>
          ) : null}
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && canProceed) {
              e.preventDefault();
              handleNext();
            }
          }}
          onMouseEnter={(e) => {
            if (canProceed) {
              applyHoverStyles(e, {
                background: '#0284c7',
                scale: 'scale(1.1)',
                boxShadow: '0 6px 16px rgba(14, 165, 233, 0.5)',
              });
            }
          }}
          onMouseLeave={(e) => {
            applyHoverStyles(e, {
              background: canProceed ? '#0ea5e9' : '#cbd5e1',
              scale: 'scale(1)',
              boxShadow: canProceed
                ? '0 4px 12px rgba(14, 165, 233, 0.4)'
                : '0 2px 6px rgba(0, 0, 0, 0.1)',
            });
          }}
          style={{
            ...baseButtonStyles,
            background: canProceed ? '#0ea5e9' : '#cbd5e1',
            boxShadow: canProceed
              ? '0 4px 12px rgba(14, 165, 233, 0.4)'
              : '0 2px 6px rgba(0, 0, 0, 0.1)',
            opacity: canProceed ? 1 : 0.6,
            cursor: canProceed ? 'pointer' : 'not-allowed',
          }}
          aria-label={
            canProceed
              ? 'Перейти на следующую страницу'
              : 'Сначала выполните все упражнения правильно'
          }
        >
          →
        </button>
      </div>
    ),
    [canProceed, disableMessage, handleNext, handlePrev]
  );

  return { navigationButtons };
};

export default useExerciseNavigation;

