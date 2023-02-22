import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { WhoAmI } from './pages/WhoAmI';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
