import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CryptoPriceBar from '../components/CryptoPriceBar';

const SuccessPurchase = ({ onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#102425] to-[#3a7c7c]">
      <Navbar isLoggedIn={true} isPremium={true} user={{ initials: 'CK' }} onLogout={onLogout} />
      <CryptoPriceBar />
      <main className="flex-1 flex flex-col items-center justify-start px-4 pt-12 pb-8">
        {/* Maskot Kumami */}
        <img src="/kumamimaskot.png" alt="Kumami Maskot" className="w-40 h-20 object-contain mx-auto mb-4 mt-4" style={{ width: 160, height: 80 }} />
        {/* Judul */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">Welcome to Kumami!</h1>
        {/* Subtitle */}
        <p className="text-center text-[#96EDD6] text-base md:text-lg max-w-2xl mx-auto mb-8" style={{lineHeight: '120%'}}>
          You've unlocked full access to curated crypto news, deep-dive research,<br className="hidden md:block" />
          and Web3 tools — all designed to keep you ahead of the chain.
        </p>
        {/* What's Next */}
        <div className="text-2xl font-bold text-white text-center mb-6 mt-2">What's Next?</div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch w-full max-w-5xl mb-12">
          {/* Card 1 */}
          <div className="flex-1 border border-white rounded-xl p-8 py-12 flex flex-col items-center bg-transparent min-w-[280px] max-w-sm min-h-[320px]">
            <img src="/News.png" alt="News" className="h-12 mb-3" />
            <div className="flex-1 flex flex-col w-full text-center">
              <div className="text-lg font-bold text-white mb-2 w-full">Explore Premium Content</div>
              <div className="text-[#b2d8d8] text-sm text-center mb-6 w-full">Dive into our exclusive premium articles and features</div>
            </div>
            <button className="w-full py-2 rounded-lg bg-[#3A7A7A]/70 text-[#96EDD6] font-bold text-base hover:bg-[#aafafc] transition mt-auto">Browse News</button>
          </div>
          {/* Card 2 */}
          <div className="flex-1 border border-white rounded-xl p-8 py-12 flex flex-col items-center bg-transparent min-w-[280px] max-w-sm min-h-[320px]">
            <img src="/people.png" alt="People" className="h-12 mb-3" />
            <div className="flex-1 flex flex-col w-full text-center">
              <div className="text-lg font-bold text-white mb-2 w-full">Refer Friends & Earn</div>
              <div className="text-[#b2d8d8] text-sm text-center mb-6 w-full">Share your referral link and earn rewards when friends subscribe</div>
            </div>
            <button className="w-full py-2 rounded-lg bg-[#3A7A7A]/70 text-[#96EDD6] font-bold text-base hover:bg-[#aafafc] transition mt-auto">Get Referral Link</button>
          </div>
          {/* Card 3 */}
          <div className="flex-1 border border-white rounded-xl p-8 py-12 flex flex-col items-center bg-transparent min-w-[280px] max-w-sm min-h-[320px]">
            <img src="/chain.png" alt="Chain" className="h-12 mb-3" />
            <div className="flex-1 flex flex-col w-full text-center">
              <div className="text-lg font-bold text-white mb-2 w-full">Update Profile</div>
              <div className="text-[#b2d8d8] text-sm text-center mb-6 w-full">Complete your profile to personalize your experience.</div>
            </div>
            <button className="w-full py-2 rounded-lg bg-[#3A7A7A]/70 text-[#96EDD6] font-bold text-base hover:bg-[#aafafc] transition mt-auto">Go to Profile</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPurchase; 