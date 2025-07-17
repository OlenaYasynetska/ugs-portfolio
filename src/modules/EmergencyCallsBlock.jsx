import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function EmergencyCallsBlock() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="info-block-inner" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '1vw', padding: '2vw', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.5)', minHeight: 160, width: '100%', boxSizing: 'border-box', margin: '2vw auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 style={{ color: '#c62828', fontSize: '1.5em', margin: '0 0 1vw 0' }}>{t('emergency_calls')}</h2>
      <table style={{ width: '100%', fontSize: '1.1em', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.5vw, 0' }}>{t('fire_service')}</td>
            <td style={{ color: '#c62828', fontWeight: 700 }}>122</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0' }}>{t('police')}</td>
            <td style={{ color: '#1565c0', fontWeight: 700 }}>133</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0' }}>{t('ambulance')}</td>
            <td style={{ color: '#388e3c', fontWeight: 700 }}>144</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0' }}>{t('emergency_number')}</td>
            <td style={{ color: '#fbc02d', fontWeight: 700 }}>112</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

EmergencyCallsBlock.propTypes = {}; 