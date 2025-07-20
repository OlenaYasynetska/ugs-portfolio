import { useLocation, Link } from 'react-router-dom';
import Main from '../../components/Main/Main';
import notFoundBg from '../../assets/page_not_found.png';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const location = useLocation();

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
          alt="Page not found"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '100vh',
            display: 'block',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}
        />
        <div
          className="notfound-message"
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
              .notfound-message {
                font-size: 1.1rem !important;
                padding: 10px 4vw !important;
                min-width: 0 !important;
                max-width: 95vw !important;
                border-radius: 10px !important;
              }
              .notfound-title {
                font-size: 1.3rem !important;
              }
              .notfound-btn {
                font-size: 0.9rem !important;
                padding: 6px 12px !important;
              }
            }
          `}</style>
          <h1 className="notfound-title" style={{ fontSize: '2rem', marginBottom: 24 }}>page not found</h1>
          <Link to="/">
            <button
              className="notfound-btn"
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
              To home page
            </button>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default NotFoundPage;