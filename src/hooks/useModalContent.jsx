import React from 'react';
import { modalContentData } from '../data/modalContent';

export const useModalContent = () => {
  const getModalContent = (item) => {
    const content = modalContentData[item.label];
    
    if (!content) {
      return {
        title: item.label,
        content: (
          <div>
            <p>{item.description}</p>
            <p>Детальна інформація буде доступна найближчим часом.</p>
          </div>
        )
      };
    }

    return {
      title: content.title,
      content: renderModalContent(content.sections)
    };
  };

  const renderModalContent = (sections) => (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          {section.type === 'steps' && renderSteps(section)}
          {section.type === 'documents' && renderDocuments(section)}
          {section.type === 'list' && renderList(section)}
          {section.type === 'info' && renderInfo(section)}
          {section.type === 'tip' && renderTip(section)}
          {section.type === 'warning' && renderWarning(section)}
          {section.type === 'resources' && renderResources(section)}
          {section.type === 'contacts' && renderContacts(section)}
          {section.type === 'security' && renderSecurity(section)}
          {section.type === 'emergency' && renderEmergency(section)}
        </div>
      ))}
    </div>
  );

  const renderSteps = (section) => (
    <div>
      <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem', fontWeight: 'bold' }}>
        {section.title}
      </h3>
      {section.items.map((step, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#1565c0' }}>
            Крок {step.step}: {step.title}
          </p>
          <p style={{ margin: '0', color: '#2c3e50', lineHeight: '1.5' }}>
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );

  const renderDocuments = (section) => (
    <div>
      <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem', fontWeight: 'bold' }}>
        {section.title}
      </h3>
      <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
        {section.items.map((item, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', color: '#2c3e50', lineHeight: '1.5' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderList = (section) => (
    <div>
      <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem', fontWeight: 'bold' }}>
        {section.title}
      </h3>
      <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
        {section.items.map((item, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', color: '#2c3e50', lineHeight: '1.5' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderInfo = (section) => (
    <div>
      <h3 style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem', fontWeight: 'bold' }}>
        {section.title}
      </h3>
      <p style={{ margin: '0', color: '#2c3e50', lineHeight: '1.5' }}>
        {section.content}
      </p>
    </div>
  );

  const renderTip = (section) => (
    <div style={{
      backgroundColor: section.style === 'success' ? '#d4edda' : '#e8f5e8',
      padding: '1rem',
      borderRadius: '8px',
      border: `1px solid ${section.style === 'success' ? '#c3e6cb' : '#d1e7dd'}`
    }}>
      <strong style={{ color: section.style === 'success' ? '#155724' : '#0f5132' }}>
        💡 {section.title}:
      </strong>
      <span style={{ marginLeft: '0.5rem', color: '#2c3e50' }}>
        {section.content}
      </span>
    </div>
  );

  const renderWarning = (section) => (
    <div style={{
      backgroundColor: '#fff3cd',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #ffeaa7'
    }}>
      <strong style={{ color: '#856404' }}>
        ⚠️ {section.title}:
      </strong>
      <span style={{ marginLeft: '0.5rem', color: '#2c3e50' }}>
        {section.content}
      </span>
    </div>
  );

  const renderResources = (section) => (
    <div style={{
      backgroundColor: '#d1ecf1',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #bee5eb'
    }}>
      <h3 style={{ fontSize: '1.1rem', color: '#0c5460', marginBottom: '1rem', fontWeight: 'bold' }}>
        📚 {section.title}:
      </h3>
      <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
        {section.items.map((item, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', color: '#2c3e50', lineHeight: '1.5' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderContacts = (section) => (
    <div style={{
      backgroundColor: '#e3f2fd',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #bbdefb'
    }}>
      <h3 style={{ fontSize: '1.1rem', color: '#1565c0', marginBottom: '1rem', fontWeight: 'bold' }}>
        📞 {section.title}:
      </h3>
      <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
        {section.items.map((item, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', color: '#2c3e50', lineHeight: '1.5' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSecurity = (section) => (
    <div style={{
      backgroundColor: '#f8d7da',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #f5c6cb'
    }}>
      <strong style={{ color: '#721c24' }}>
        🔒 {section.title}:
      </strong>
      <span style={{ marginLeft: '0.5rem', color: '#2c3e50' }}>
        {section.content}
      </span>
    </div>
  );

  const renderEmergency = (section) => (
    <div style={{
      backgroundColor: '#f8d7da',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #f5c6cb'
    }}>
      <h3 style={{ fontSize: '1.1rem', color: '#721c24', marginBottom: '1rem', fontWeight: 'bold' }}>
        🆘 {section.title}:
      </h3>
      <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
        {section.items.map((item, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', color: '#2c3e50', lineHeight: '1.5' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return { getModalContent };
};
