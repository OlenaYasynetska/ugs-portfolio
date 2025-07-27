import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { pharmacies, dutyCalendar } from '../data/pharmacyDuty';

export default function PharmacyDutyBlock() {
  const { t } = useTranslation();
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;
  const todayColors = dutyCalendar[todayStr] || [];
  const dutyPharmacies = pharmacies.filter(ph => todayColors.includes(ph.color));

  if (todayColors.length === 0) {
    return (
      <div style={{ margin: '2vw auto', width: '100%', background: 'rgba(255,255,255,0.85)', borderRadius: '1vw', padding: '2vw', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.5)', boxSizing: 'border-box' }}>
        <b>{t('no_pharmacy_data')}</b>
      </div>
    );
  }

  return (
    <div className="info-block-inner" style={{ margin: '2vw auto', width: '100%', background: 'rgba(255,255,255,0.85)', borderRadius: '1vw', padding: '2vw', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.5)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 style={{ 
        color: '#1565c0', 
        fontSize: '1.5em', 
        fontWeight: 700, 
        margin: window.innerWidth > 1400 ? '0' : '0 0 1vw 0' 
      }}>{t('pharmacy_duty_today', {date: `${dd}.${mm}.${yyyy}`})}</h2>
      <ul style={{ 
        marginTop: window.innerWidth > 1400 ? '0' : '1vw', 
        marginBottom: 0, 
        paddingLeft: window.innerWidth > 1400 ? '0' : (dutyPharmacies.length === 2 && window.innerWidth <= 1400 ? '0' : '1.5vw')
      }}>
                 {dutyPharmacies.map(ph => (
           <li key={ph.name} style={{ 
             marginBottom: window.innerWidth > 1400 ? '0' : '0.7vw', 
             display: 'flex', 
             alignItems: 'center' 
           }}>
            <span style={{
              display: 'inline-block',
              width: '1.2em',
              height: '1.2em',
              borderRadius: '50%',
              background: ph.color,
              marginRight: '0.7em',
              border: '1px solid #888'
            }} />
            <span style={{ fontWeight: 600, fontSize: '1.1em', padding: '0.5vw 1vw 0.5vw 0' }}>{ph.name.replace(/^['“”']+|['“”']+$/g, '')}</span>
            <span style={{ color: '#555', fontSize: '1.1em' }}>{ph.address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

PharmacyDutyBlock.propTypes = {}; 