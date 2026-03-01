import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import background from '../../assets/background.png';

const Main = ({ children, scrollable = true, compact = false }) => (
  <main
    className={styles.main}
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      minHeight: scrollable ? 'calc(100vh - 120px)' : '100vh',
      ...(compact ? { padding: 0 } : {}),
      ...(scrollable ? { overflowY: 'auto' } : { overflow: 'hidden' }),
    }}
  >
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
  scrollable: PropTypes.bool,
  compact: PropTypes.bool,
};

export default Main; 