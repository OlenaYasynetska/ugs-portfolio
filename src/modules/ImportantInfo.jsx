import React from 'react';
import { useTranslation } from 'react-i18next';
import PharmacyDutyBlock from './PharmacyDutyBlock';
import EmergencyCallsBlock from './EmergencyCallsBlock';

export default function ImportantInfo() {
  const { t } = useTranslation();
  return (
    <>
      <h2 style={{
        color: '#1565c0',
        fontSize: '2.2em',
        margin: '0 0 2vw 0',
        textAlign: 'center',
        maxWidth: '90vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        letterSpacing: '0.02em',
        fontWeight: 900,
      }}>{t('important_info')}</h2>
      <style>{`
        .info-block-inner {
          height: 220px;
        }
        @media (max-width: 900px) {
          .info-flex-row {
            flex-direction: column !important;
          }
          .info-flex-col {
            max-width: 100% !important;
            min-width: 0 !important;
            height: auto !important;
          }
          .info-block-inner {
            height: auto;
            min-height: 160px;
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
        <div className="info-flex-col" style={{ flex: '1 1 50px', minWidth: '280px', maxWidth: 600, boxSizing: 'border-box', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <PharmacyDutyBlock />
        </div>
        <div className="info-flex-col" style={{ flex: '1 1 50px', minWidth: '220px', maxWidth: 600, boxSizing: 'border-box', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <EmergencyCallsBlock />
        </div>
      </div>
    </>
  );
} 