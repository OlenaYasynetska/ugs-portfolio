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
    <div className="info-block-inner" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '1vw', padding: '2vw', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.5)', minHeight: 280, width: '100%', boxSizing: 'border-box', margin: '2vw auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 style={{ color: '#c62828', fontSize: '1.6em', margin: '0 0 1vw 0' }}>{t('emergency_calls')}</h2>
      <table style={{ width: '100%', fontSize: '1.0em', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.1vw 0' }}>{t('fire_service')}</td>
            <td style={{ color: '#c62828', fontWeight: 700, padding: '0.1vw 0' }}>122</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.1vw 0' }}>{t('police')}</td>
            <td style={{ color: '#1565c0', fontWeight: 700, padding: '0.1vw 0' }}>133</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.1vw 0' }}>{t('ambulance')}</td>
            <td style={{ color: '#388e3c', fontWeight: 700, padding: '0.1vw 0' }}>144</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.1vw 0' }}>{t('emergency_number')}</td>
            <td style={{ color: '#fbc02d', fontWeight: 700, padding: '0.1vw 0' }}>112</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.1vw 0' }}>
              {t('medical_emergency_service')}
              <div style={{ fontSize: '0.9em', color: '#666', fontWeight: 600, marginTop: '0.1em' }}>
                {t('medical_emergency_service_desc')}
              </div>
            </td>
            <td style={{ color: '#7b1fa2', fontWeight: 700, padding: '0.1vw 0', verticalAlign: 'top' }}>141</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.1vw 0' }}>{t('gas_emergency')}</td>
            <td style={{ color: '#ff6f00', fontWeight: 700, padding: '0.1vw 0' }}>128</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

EmergencyCallsBlock.propTypes = {}; 