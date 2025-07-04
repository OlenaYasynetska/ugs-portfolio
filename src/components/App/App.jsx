import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contacts from '../../pages/Contacts/Contacts';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function NavWithPosition() {
  const location = useLocation();
  const isNotFound = location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/contact';
  return (
    <Nav style={isNotFound ? {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      width: '100%',
      zIndex: 2
    } : {}} />
  );
}

function FooterWithPosition() {
  const location = useLocation();
  const isNotFound = location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/contact';
  return (
    <Footer style={isNotFound ? {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      zIndex: 2
    } : {}} />
  );
}

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Router>
          <NavWithPosition />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Main>
          <FooterWithPosition />
        </Router>
      </div>
    </div>
  );
}

export default App;
