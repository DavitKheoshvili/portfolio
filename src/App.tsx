import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { WhoAmI } from './pages/WhoAmI';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div id='header-and-content'>
        <Header />
        <Routes>
          <Route path="/" element={<Home text='hey' />} />
          <Route path="/who-am-i" element={<WhoAmI />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
