import React from 'react';
import { useTranslation } from 'react-i18next';
import { pharmacies, dutyCalendar } from '../data/pharmacyDuty';

export default function ImportantInfo() {
  const { t } = useTranslation();
  return (
    <>
      <h2 style={{ color: '#1565c0', fontSize: '2.2em', margin: '0 0 2vw 0', textAlign: 'center', maxWidth: '90vw', marginLeft: 'auto', marginRight: 'auto' }}>{t('important_info')}</h2>
      <style>{`
        @media (max-width: 900px) {
          .info-flex-row {
            flex-direction: column !important;
          }
          .info-flex-col {
            max-width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
      <div className="info-flex-row" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '2vw',
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto 4vw',
        boxSizing: 'border-box',
        padding: '0 2vw',
        height: '100%',
      }}>
        <div className="info-flex-col" style={{ flex: '1 1 350px', minWidth: '280px', maxWidth: 600, boxSizing: 'border-box', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', minHeight: 340 }}>
          <PharmacyDutyBlock />
        </div>
        <div className="info-flex-col" style={{ flex: '1 1 300px', minWidth: '220px', maxWidth: 600, boxSizing: 'border-box', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', minHeight: 340 }}>
          <EmergencyCallsBlock />
        </div>
      </div>
    </>
  );
}

function PharmacyDutyBlock() {
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
      <div style={{ margin: '2vw auto', width: '100%', background: 'rgba(255,255,255,0.85)', borderRadius: '1vw', padding: '2vw', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', boxSizing: 'border-box' }}>
        <b>Сегодня нет данных о дежурных аптеках.</b>
      </div>
    );
  }

  return (
    <div style={{ margin: '2vw auto', width: '100%', background: 'rgba(255,255,255,0.85)', borderRadius: '1vw', padding: '2vw', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', boxSizing: 'border-box', minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 style={{ color: '#1565c0', fontSize: '1.5em', fontWeight: 700, margin: '0 0 1vw 0' }}>{t('pharmacy_duty_today', {date: `${dd}.${mm}.${yyyy}`})}</h2>
      <ul style={{ marginTop: '1vw', marginBottom: 0, paddingLeft: '1.5vw' }}>
        {dutyPharmacies.map(ph => (
          <li key={ph.name} style={{ marginBottom: '0.7vw', display: 'flex', alignItems: 'center' }}>
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

function EmergencyCallsBlock() {
  const { t } = useTranslation();
  return (
    <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '1vw', padding: '2vw', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', minHeight: 260, width: '100%', boxSizing: 'border-box', margin: '2vw auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 style={{ color: '#c62828', fontSize: '1.5em', margin: '0 0 1vw 0' }}>{t('emergency_calls')}</h2>
      <table style={{ width: '100%', fontSize: '1.1em', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.5vw 1vw 0.5vw 0' }}>{t('fire_service')}</td>
            <td style={{ color: '#c62828', fontWeight: 700 }}>122</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.5vw 1vw 0.5vw 0' }}>{t('police')}</td>
            <td style={{ color: '#1565c0', fontWeight: 700 }}>133</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.5vw 1vw 0.5vw 0' }}>{t('ambulance')}</td>
            <td style={{ color: '#388e3c', fontWeight: 700 }}>144</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600, padding: '0.5vw 1vw 0.5vw 0' }}>{t('emergency_number')}</td>
            <td style={{ color: '#fbc02d', fontWeight: 700 }}>112</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 