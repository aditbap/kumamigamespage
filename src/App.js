import React from 'react';
import Navbar from './components/Navbar';
import CryptoPriceBar from './components/CryptoPriceBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <CryptoPriceBar />
      <div style={{ margin: 0, padding: 0 }}>
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
