import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contacts from '../../pages/Contacts/Contacts';
import ContactFormPage from '../../pages/ContactFormPage/ContactFormPage';
import Culture from '../../pages/Culture/Culture';
// import Help from '../../pages/Help/Help';
// import Blog from '../../pages/Blog/Blog';

function AppContent() {
  const location = useLocation();
  let scrollable = true;
  if (location.pathname === '/about' || location.pathname === '/contact') scrollable = false;
  return (
    <>
      <Nav />
      <Main scrollable={scrollable}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/culture" element={<Culture />} />
          {/* <Route path="/help" element={<Help />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/contact" element={<Contacts />} /> */}
          <Route path="*" element={<ContactFormPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Router>
          <AppContent />
        </Router>
      </div>
    </div>
  );
}

export default App;
