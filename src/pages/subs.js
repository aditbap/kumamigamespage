import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CryptoPriceBar from '../components/CryptoPriceBar';
import Footer from '../components/Footer';
import LoginPopup from '../components/LoginPopup';
import PaymentPopup from '../components/PaymentPopup';
import SuccessPurchase from './SuccessPurchase';

const Subs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    if (!isLoggedIn) setShowPopup(true);
    else setShowPaymentPopup(true);
  };

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setShowPopup(false);
    setShowPaymentPopup(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSuccess(false);
    setShowPopup(false);
    setShowPaymentPopup(false);
    setSelectedPlan(null);
    setIsChecked(false);
  };

  if (isSuccess) return <SuccessPurchase onLogout={handleLogout} />;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(to bottom, #102425 0%, #3a7c7c 100%)' }}>
      <Navbar isLoggedIn={isLoggedIn} user={isLoggedIn ? { initials: 'CK' } : undefined} isPremium={isSuccess} onLogout={handleLogout} />
      <CryptoPriceBar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-12 pb-8">
        <h1 className="text-5xl font-bold text-white text-center mb-4 mt-8">Your Web3 Compass</h1>
        <p
          className="text-center mb-12 text-base max-w-3xl mx-auto"
          style={{
            color: '#96EDD6',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '110%',
            letterSpacing: '0%',
          }}
        >
          Navigate market shifts, decode crypto trends, and analyze what really moves the blockchain world all from one powerful research hub.
        </p>
        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-4xl mb-8">
          {/* Monthly */}
          <div className="flex-1 border border-[#96EDD6] rounded-xl p-8 flex flex-col items-center shadow-lg min-w-[280px] transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl" style={{width: 406, height: 420}}>
            <div className="text-lg text-white mb-2">Monthly</div>
            <div className="text-4xl font-bold text-[#96EDD6] mb-1">$9.99</div>
            <div className="text-white mb-4">1 month</div>
            <ul className="text-white text-sm mb-6 space-y-2 text-left w-full max-w-[220px]">
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Full access to premium articles</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>No Ads</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Early access to content</li>
            </ul>
            <button className="bg-[#96EDD6] text-[#163232] font-bold px-6 py-2 rounded-lg hover:bg-[#00c2c7] transition w-full max-w-[220px] mt-auto" onClick={() => handleSelectPlan('monthly')}>Select Plan</button>
          </div>
          {/* Yearly (Most Popular) */}
          <div className="flex-1 bg-white border border-[#96EDD6] rounded-xl p-8 flex flex-col items-center shadow-2xl relative min-w-[280px] transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl" style={{width: 406, height: 420}}>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#96EDD6] text-[#163232] text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
            <div className="text-lg text-[#102425] mb-2">Yearly</div>
            <div className="text-4xl font-bold text-[#3A7A7A] mb-1">$99.99</div>
            <div className="text-[#102425] mb-4">12 months</div>
            <ul className="text-[#102425] text-sm mb-6 space-y-2 text-left w-full max-w-[220px]">
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#3A7A7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Full access to premium articles</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#3A7A7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>No Ads</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#3A7A7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Early access to content</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#3A7A7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>2 months free</li>
            </ul>
            <button className="bg-[#3A7A7A] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#00c2c7] transition w-full max-w-[220px] mt-auto" onClick={() => handleSelectPlan('yearly')}>Select Plan</button>
          </div>
          {/* Lifetime */}
          <div className="flex-1 border border-[#96EDD6] rounded-xl p-8 flex flex-col items-center shadow-lg min-w-[280px] transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl" style={{width: 406, height: 420}}>
            <div className="text-lg text-white mb-2">Lifetime</div>
            <div className="text-4xl font-bold text-[#96EDD6] mb-1">$299.99</div>
            <div className="text-white mb-4">Forever</div>
            <ul className="text-white text-sm mb-6 space-y-2 text-left w-full max-w-[220px]">
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Full access to premium articles</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>No Ads</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Early access to content</li>
              <li className="flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>2 months free</li>
            </ul>
            <button className="bg-[#96EDD6] text-[#163232] font-bold px-6 py-2 rounded-lg hover:bg-[#00c2c7] transition w-full max-w-[220px] mt-auto" onClick={() => handleSelectPlan('lifetime')}>Select Plan</button>
          </div>
        </div>
        {/* Terms Checkbox */}
        <div className="flex items-center justify-center mb-2 mt-2">
          <label htmlFor="terms" className="flex items-center gap-4 max-w-2xl text-left mx-auto basis-auto" style={{fontSize: 12, color: '#fff'}}>
            <span className="relative inline-block w-5 h-5">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="opacity-0 absolute w-5 h-5 cursor-pointer z-10"
                style={{ accentColor: '#96EDD6', borderRadius: 8 }}
              />
              <span className="pointer-events-none absolute top-0 left-0 w-5 h-5 border-2 border-[#96EDD6] rounded-lg bg-transparent flex items-center justify-center">
                {isChecked && (
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            </span>
            <span>
              <div>
                By subscribing to Kumami Premium, you confirm you are 18 or over, and that you agree to our
                <a href="#" className="ml-1" style={{color: '#96EDD6', textDecoration: 'none'}}>Privacy Policy</a>,
              </div>
              <div>
                <a href="#" className="ml-0" style={{color: '#96EDD6', textDecoration: 'none'}}>License Terms</a>, and
                <a href="#" className="ml-1" style={{color: '#96EDD6', textDecoration: 'none'}}>User Terms</a>; including our
                <a href="#" className="ml-1" style={{color: '#96EDD6', textDecoration: 'none'}}>Fair Use Policy</a>.
              </div>
            </span>
          </label>
        </div>
        {/* As Seen On */}
        <div className="text-center mb-10 mt-32">
          <div className="font-bold text-white mb-4 text-2xl">As seen on</div>
          <div className="flex justify-center gap-10">
            <img src="/playstation.png" alt="PlayStation" className="h-16" />
            <img src="/nvidia.png" alt="Nvidia" className="h-16" />
            <img src="/playstation.png" alt="PlayStation" className="h-16" />
            <img src="/nvidia.png" alt="Nvidia" className="h-16" />
            <img src="/playstation.png" alt="PlayStation" className="h-16" />
            <img src="/nvidia.png" alt="Nvidia" className="h-16" />
          </div>
        </div>
      </main>
      <Footer />
      <LoginPopup open={showPopup} onClose={() => setShowPopup(false)} onLogin={handleLogin} plan={selectedPlan} />
      <PaymentPopup open={showPaymentPopup} onClose={() => setShowPaymentPopup(false)} onSuccess={() => setIsSuccess(true)} plan={selectedPlan} />
    </div>
  );
};

export default Subs; 