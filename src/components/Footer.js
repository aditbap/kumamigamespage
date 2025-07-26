import React, { useState } from 'react';

const Footer = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesia' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setShowLanguageDropdown(false);
  };

  return (
    <footer
      className="bg-[#102425] text-[#f6fffa] border-t border-[#23413e] overflow-hidden w-full"
      style={{ minHeight: 400 }}
    >
      <div className="max-w-7xl mx-auto px-8" style={{ minHeight: 400 }}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 pt-10 pb-4" style={{ minHeight: 280 }}>
          {/* Kiri: Logo & Sosmed */}
          <div className="flex-[1.2] min-w-[260px] mb-6 md:mb-0 flex flex-col items-start">
            <img src="/kumamiwhite.png" alt="Kumami Logo" className="h-16 mb-5" />
            <div className="flex space-x-3 mb-5">
              <a href="#" aria-label="Facebook" className="bg-white rounded w-8 h-8 flex items-center justify-center text-[#102425] hover:bg-[#00c2c7] hover:text-white transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white rounded w-8 h-8 flex items-center justify-center text-[#102425] hover:bg-[#00c2c7] hover:text-white transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" aria-label="Telegram" className="bg-white rounded w-8 h-8 flex items-center justify-center text-[#102425] hover:bg-[#00c2c7] hover:text-white transition">
                <i className="fab fa-telegram-plane text-xl"></i>
              </a>
              <a href="#" aria-label="Discord" className="bg-white rounded w-8 h-8 flex items-center justify-center text-[#102425] hover:bg-[#00c2c7] hover:text-white transition">
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
            <div className="mb-2 font-semibold text-lg">Lorem Ipsum Dolor Sit Amet</div>
            <form className="flex items-center bg-transparent rounded-lg overflow-hidden mb-1 w-full max-w-xs border border-[#96EDD6]">
              <input
                type="text"
                placeholder="Lorem Ipsum Dolor Sit Amet"
                className="bg-transparent px-3 py-2 text-sm text-[#b2d8d8] flex-1 focus:outline-none placeholder-[#b2d8d8]"
              />
              <button type="submit" className="bg-transparent text-[#96EDD6] px-4 py-2 text-lg font-bold rounded-r-lg flex items-center justify-center hover:bg-[#00c2c7] hover:text-white transition">
                <i className="fab fa-telegram-plane"></i>
              </button>
            </form>
          </div>
          {/* Kolom Menu */}
          <div className="flex-[2.8] grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            {[1,2,3,4].map((col) => (
              <div key={col} className="">
                <div className="font-bold mb-3 text-lg">Lorem Ipsum</div>
                <ul className="space-y-3 text-base">
                  {Array(3).fill().map((_,i) => (
                    <li key={i} className="hover:text-[#00c2c7] cursor-pointer transition">Lorem Ipsum</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Garis pemisah */}
        <div className="border-t border-white my-6" />
        {/* Bawah: Ikon, menu, copyright, bahasa */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8" style={{ minHeight: 70 }}>
          <div className="flex items-center gap-4 min-w-[160px]">
            <span className="flex items-center justify-center w-10 h-10">
              <img src="/certified.png" alt="Certified" className="w-8 h-8" />
            </span>
            <div className="flex gap-8 text-base font-semibold">
              <span className="hover:text-[#00c2c7] cursor-pointer transition">Lorem Ipsum</span>
              <span className="hover:text-[#00c2c7] cursor-pointer transition">Lorem Ipsum</span>
              <span className="hover:text-[#00c2c7] cursor-pointer transition">Lorem Ipsum</span>
            </div>
          </div>
                      <div className="flex-1 flex flex-col md:items-end md:justify-end">
              <div className="text-xs text-[#b2d8d8] mb-1">© 2025 Kumami. All rights reserved.</div>
              <div className="relative">
                <button 
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center gap-2 text-base text-[#f6fffa] hover:text-[#96EDD6] transition cursor-pointer"
                >
                  {selectedLanguage} 
                  <span className={`text-xs transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`}>V</span>
                </button>
                {showLanguageDropdown && (
                  <div className="absolute bottom-full right-0 mb-2 bg-[#163232] border border-[#96EDD6] rounded-lg shadow-lg z-10 min-w-[150px]">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-[#96EDD6] hover:text-[#163232] transition ${
                          selectedLanguage === language.name ? 'bg-[#96EDD6] text-[#163232]' : 'text-[#f6fffa]'
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
