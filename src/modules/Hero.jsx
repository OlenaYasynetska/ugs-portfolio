import React from 'react';
import logo from '../assets/logo.svg';
import photo1 from '../assets/IMG_2131.jpg';
import photo2 from '../assets/IMG_2411.jpg';

const oldFrameStyle = {
  display: 'inline-block',
  padding: '2vw',
  background: '#e2c590',
  border: '0.6vw solid #a67c38',
  borderRadius: '2vw',
  boxShadow: '0 8px 32px rgba(80,60,20,0.25), 0 0 0 1.2vw #e2c590 inset',
  position: 'relative',
  marginLeft: '6vw',
  maxWidth: '90vw',
};
const oldImgStyle = {
  display: 'block',
  borderRadius: '1vw',
  boxShadow: '0 2px 12px rgba(80,60,20,0.18)',
  width: 'clamp(220px, 40vw, 720px)',
  height: 'auto',
  filter: 'sepia(0.18) contrast(1.08) brightness(0.98)',
  transition: 'opacity 0.5s',
  maxWidth: '80vw',
};
const logoStyle = {
  height: 'clamp(100px, 20vw, 300px)',
  width: 'auto',
  marginRight: 0,
  marginLeft: 0,
  display: 'block',
  maxWidth: '40vw',
};

const photos = [photo1, photo2];

const Hero = () => {
  const [photoIdx, setPhotoIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhotoIdx(idx => (idx + 1) % photos.length);
        setFade(true);
      }, 100);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .hero-flex {
            flex-direction: column !important;
            gap: 4vw !important;
            align-items: center !important;
          }
          .hero-logo {
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: 80vw !important;
            height: clamp(80px, 30vw, 180px) !important;
          }
          .hero-frame {
            margin-left: 0 !important;
            max-width: 90vw !important;
            padding: 4vw !important;
          }
        }
      `}</style>
      <div className="hero-flex" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2vw',
        marginTop: '3vw',
        marginBottom: '4vw',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <img
          src={logo}
          alt="Logo"
          className="hero-logo"
          style={logoStyle}
        />
        <span className="hero-frame" style={oldFrameStyle}>
          <img
            src={photos[photoIdx]}
            alt="Старинное фото"
            style={{ ...oldImgStyle, opacity: fade ? 1 : 0 }}
          />
        </span>
      </div>
    </>
  );
};

export default Hero; 