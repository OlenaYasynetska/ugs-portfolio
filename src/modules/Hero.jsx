import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import photo1 from '../assets/IMG_2131.jpg';
import photo2 from '../assets/IMG_2411.jpg';
import photo3 from '../assets/IMG_2124.jpg';
// import photo4 from '../assets/IMG_2135.jpg';
import photo4 from '../assets/IMG_2145.jpg';
import photo5 from '../assets/IMG_2147.jpg';
import photo6 from '../assets/IMG_2150.jpg';
// import photo8 from '../assets/IMG_2156.jpg';
import photo7 from '../assets/IMG_2158.jpg';
import photo8 from '../assets/IMG_2160.jpg';
import photo9 from '../assets/IMG_2162.jpg';


const oldFrameStyle = {
  display: 'inline-block',
  padding: '2vw',
  background: 'rgb(226, 197, 144)',
  border: '0.6vw solid rgb(100, 75, 35)',
  borderRadius: '2vw',
  boxShadow: 'rgba(80, 60, 20, 0.25) 0px 8px 32px, rgb(226, 197, 144) 0px 0px 0px 1.2vw inset',
  position: 'relative',
  maxWidth: 800,
  width: '50vw',
  boxSizing: 'border-box',
};
const oldImgStyle = {
  display: 'block',
  borderRadius: '1.4vw',
  boxShadow: '0 2px 12px rgba(80,60,20,0.18)',
  width: '100%',
  height: 'auto',
  filter: 'sepia(0.18) contrast(1.08) brightness(0.98)',
  transition: 'opacity 0.5s',
};
const logoStyle = {
  height: 'clamp(100px, 20vw, 300px)',
  width: 'auto',
  marginRight: 0,
  marginLeft: 0,
  display: 'block',
  maxWidth: '40vw',
};

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

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
    }, 5000); // Уменьшил с 60000 (60 сек) до 10000 (10 сек)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .hero-logo {
            display: none !important;
          }
        }
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
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 1200px !important;
            width: 90vw !important;
            padding: 3vw !important;
            box-sizing: border-box !important;
          }
          .hero-transport-banner {
            margin-top: 3vw !important;
          }
        }
      `}</style>
      <div className="hero-flex" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4vw',
        marginTop: '50px',
        marginBottom: '4vw',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <img 
          src={logo} 
          alt="UGS Logo" 
          className="hero-logo"
          style={logoStyle}
        />
        <div className="hero-frame" style={oldFrameStyle}>
          <img
            src={photos[photoIdx]}
            alt="Старинное фото"
            style={{ ...oldImgStyle, opacity: fade ? 1 : 0 }}
          />
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {};

export default Hero; 