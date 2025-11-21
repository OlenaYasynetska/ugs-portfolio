import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About.tsx';
import Contacts from '../../pages/Contacts/Contacts';
import ContactFormPage from '../../pages/ContactFormPage/ContactFormPage';
import LanguageCourses from '../../pages/LanguageCourses/LanguageCourses';
import Culture from '../../pages/Culture/Culture';
import InfoCenter from '../../pages/InfoCenter/InfoCenter';
import NotFound from '../../pages/NotFound/NotFound';
import Feed from '../../pages/Feed/Feed.tsx';
import Profile from '../../pages/Profile/Profile.tsx';
import Search from '../../pages/Search/Search.tsx';
import Notifications from '../../pages/Notifications/Notifications.tsx';
import Messages from '../../pages/Messages/Messages.tsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.tsx';
import Navbar from '../SnapVerse/Navbar.tsx';
// import Help from '../../pages/Help/Help';
// import Blog from '../../pages/Blog/Blog';

function AppContent() {
  const location = useLocation();
  let scrollable = true;
  if (location.pathname === '/about' || location.pathname === '/contact' || location.pathname.includes('404')) scrollable = false;
  
  // Определяем, нужно ли показывать SnapVerse навигацию
  const isSnapVersePage = ['/feed', '/profile', '/search', '/notifications', '/messages'].some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <>
      {/* Показываем либо обычную Nav, либо SnapVerse Navbar */}
      {isSnapVersePage ? <Navbar /> : <Nav />}
      
      <Main scrollable={scrollable}>
        <Routes>
          {/* Публичные маршруты */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/language-courses" element={<LanguageCourses />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/infocenter" element={<InfoCenter />} />
          <Route path="/contact" element={<ContactFormPage />} />
          {/* <Route path="/help" element={<Help />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          
          {/* Защищенные маршруты SnapVerse */}
          <Route 
            path="/feed" 
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile/:username" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/search" 
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/notifications" 
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/messages" 
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      
      {/* Footer показываем только на публичных страницах */}
      {!isSnapVersePage && <Footer />}
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
