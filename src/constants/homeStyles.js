// Константы стилей для страницы Home

export const HOME_STYLES = {
  container: {
    minHeight: 'calc(100vh - 120px)',
    background: 'url(/background.png) center/cover no-repeat fixed',
    padding: '2vw 0',
  },
  
  postCard: {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: 16,
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
    padding: '2vw',
    maxWidth: 1200,
    width: '85%',
    margin: '0 auto 1vw auto',
    textAlign: 'left',
  },
  
  moduleHeading: {
    fontWeight: 900,
    fontSize: '3.8em',
    color: '#1565c0',
    margin: '3vw 0 1vw 0',
    letterSpacing: '0.02em',
    textAlign: 'center',
  },
  
  buttonPrimary: {
    background: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease'
  },
  
  buttonHover: {
    background: '#1565c0'
  },
  
  imageStyle: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 12,
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 8px'
  },
  
  titleStyle: {
    fontSize: '1.8rem',
    color: '#1565c0',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  
  textStyle: {
    fontSize: '16px',
    color: '#2c3e50',
    lineHeight: '1.6',
    whiteSpace: 'pre-line'
  }
};

export const BREAKPOINTS = {
  mobile: 520,
  tablet: 768,
  smallScreen: 700,
  mediumScreen: 900
};
