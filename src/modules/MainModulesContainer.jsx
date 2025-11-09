import React from 'react';
import PropTypes from 'prop-types';

const MainModulesContainer = ({ children }) => (
  <div
    style={{
      maxWidth: 1300,
      width: '95vw',
      minWidth: 320,
      margin: '0 auto',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2vw',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

MainModulesContainer.propTypes = {
  children: PropTypes.node,
};

export default MainModulesContainer; 