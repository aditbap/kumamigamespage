import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const newsData = [
    {
      id: 1,
      image: "/trendingnews.png",
      title: "Trump Set to Unlock Retirement Savings for Cryptocurrency Investments",
      description: "Donald Trump is reportedly preparing to sign an executive order this week that would significantly expand...",
      alt: "Trump Crypto Illustration"
    },
    {
      id: 2,
      image: "/trendingnews.png",
      title: "Bitcoin Reaches New All-Time High as Institutional Adoption Surges",
      description: "Major financial institutions continue to embrace cryptocurrency as Bitcoin breaks through previous resistance levels...",
      alt: "Bitcoin Price Chart"
    },
    {
      id: 3,
      image: "/trendingnews.png",
      title: "DeFi Revolution: How Decentralized Finance is Reshaping Banking",
      description: "Traditional banking faces unprecedented challenges as DeFi protocols gain mainstream acceptance and adoption...",
      alt: "DeFi Technology Illustration"
    },
    {
      id: 4,
      image: "/trendingnews.png",
      title: "NFT Market Evolution: From Art to Utility-Driven Applications",
      description: "The NFT landscape transforms beyond digital art into practical applications across gaming, real estate, and identity...",
      alt: "NFT Applications Overview"
    }
  ];

  const handleDotClick = (index) => {
    if (index !== currentNewsIndex && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentNewsIndex(index);
        setIsTransitioning(false);
        setIsEntering(true);
        setTimeout(() => setIsEntering(false), 300);
      }, 150);
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentNewsIndex === 0 ? newsData.length - 1 : currentNewsIndex - 1;
    handleDotClick(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currentNewsIndex === newsData.length - 1 ? 0 : currentNewsIndex + 1;
    handleDotClick(nextIndex);
  };
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* CSS Animations */}
      <style>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOut {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50px);
          }
        }
        
        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        
        .dot-active {
          animation: dotPulse 0.3s ease-in-out;
        }
        
        .news-content {
          transition: all 0.3s ease-in-out;
        }
        
        .news-content.transitioning {
          animation: slideOut 0.15s ease-in-out forwards;
        }
        
        .news-content.entering {
          animation: slideIn 0.3s ease-out forwards;
        }
        
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(150, 237, 214, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 10;
          color: #102425;
          font-size: 20px;
          font-weight: bold;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .nav-button:hover {
          background: rgba(150, 237, 214, 0.7);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        
        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .nav-button.left {
          left: 10px;
        }
        
        .nav-button.right {
          right: 10px;
        }
        
        .slide-container:hover .nav-button {
          opacity: 1;
        }
      `}</style>
      
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: "url('/bg1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh + 800px)'
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-12 lg:px-20 xl:px-32 pt-12 pt-32 lg:pt-40 pb-0">
        
        {/* Main Content Container */}
        <div className="max-w-7xl w-full mt-16 lg:mt-24">
          
          {/* Left Content */}
          <div className="max-w-sm ml-8 lg:ml-16 xl:ml-24">
            <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-white mb-2 leading-tight">
              Kumami World
            </h1>
            <h2 className="text-sm lg:text-base text-white mb-3 font-medium">
              Everything You Need. All in One App.
            </h2>
            <p className="text-white/90 text-xs lg:text-sm leading-snug">
              Discover the latest in Web 3, AI research, gaming industry, 
              cryptocurrency outlook & global market news, right at your 
              fingertips. Stay informed with curated content, real-time news 
              updates, and expert insights, all in one seamless platform.
            </p>
          </div>
        </div>

        {/* Ecosystem Section */}
        <div className="w-full max-w-6xl mx-auto mt-48 lg:mt-72">
          <h2 className="text-5xl font-bold text-white text-center mb-12">
            Kumami World Ecosystem
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {/* Education Platform */}
            <div className="flex flex-col items-center group cursor-pointer" onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'brightness(0) saturate(100%) invert(13%) sepia(17%) saturate(1827%) hue-rotate(120deg) brightness(98%) contrast(95%)';
            }} onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'none';
            }}>
              <div className="w-28 h-28 rounded-3xl border-2 border-[#96EDD6] flex items-center justify-center mb-3 group-hover:bg-[#96EDD6] transition-all duration-300">
                <img src="/ecosystem/education.png" alt="Education" className="w-14 h-14 object-contain" style={{filter: 'none'}} />
              </div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#96EDD6] transition-colors duration-300">Education</h3>
              <h4 className="text-white font-bold text-base mb-1 group-hover:text-[#96EDD6] transition-colors duration-300">Platform</h4>
              <p className="text-white text-xs text-center group-hover:text-[#96EDD6] transition-colors duration-300">Learn & Grow</p>
            </div>

            {/* Games */}
            <div className="flex flex-col items-center group cursor-pointer" onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'brightness(0) saturate(100%) invert(13%) sepia(17%) saturate(1827%) hue-rotate(120deg) brightness(98%) contrast(95%)';
            }} onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'none';
            }}>
              <div className="w-28 h-28 rounded-3xl border-2 border-[#96EDD6] flex items-center justify-center mb-3 group-hover:bg-[#96EDD6] transition-all duration-300">
                <img src="/ecosystem/game.png" alt="Games" className="w-14 h-14 object-contain" style={{filter: 'none'}} />
              </div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#96EDD6] transition-colors duration-300">Games</h3>
              <p className="text-white text-xs text-center group-hover:text-[#96EDD6] transition-colors duration-300">Play & Earn</p>
            </div>

            {/* News Portal */}
            <div className="flex flex-col items-center group cursor-pointer" onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'brightness(0) saturate(100%) invert(13%) sepia(17%) saturate(1827%) hue-rotate(120deg) brightness(98%) contrast(95%)';
            }} onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'none';
            }}>
              <div className="w-28 h-28 rounded-3xl border-2 border-[#96EDD6] flex items-center justify-center mb-3 group-hover:bg-[#96EDD6] transition-all duration-300">
                <img src="/ecosystem/news.png" alt="News Portal" className="w-14 h-14 object-contain" style={{filter: 'none'}} />
              </div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#96EDD6] transition-colors duration-300">News Portal</h3>
              <p className="text-white text-xs text-center group-hover:text-[#96EDD6] transition-colors duration-300">Stay Informed</p>
            </div>

            {/* AI Labs */}
            <div className="flex flex-col items-center group cursor-pointer" onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'brightness(0) saturate(100%) invert(13%) sepia(17%) saturate(1827%) hue-rotate(120deg) brightness(98%) contrast(95%)';
            }} onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'none';
            }}>
              <div className="w-28 h-28 rounded-3xl border-2 border-[#96EDD6] flex items-center justify-center mb-3 group-hover:bg-[#96EDD6] transition-all duration-300">
                <img src="/ecosystem/ai.png" alt="AI Labs" className="w-14 h-14 object-contain" style={{filter: 'none'}} />
              </div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#96EDD6] transition-colors duration-300">AI Labs</h3>
              <p className="text-white text-xs text-center group-hover:text-[#96EDD6] transition-colors duration-300">Innovate & Create</p>
            </div>

            {/* Staking */}
            <div className="flex flex-col items-center group cursor-pointer" onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'brightness(0) saturate(100%) invert(13%) sepia(17%) saturate(1827%) hue-rotate(120deg) brightness(98%) contrast(95%)';
            }} onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'none';
            }}>
              <div className="w-28 h-28 rounded-3xl border-2 border-[#96EDD6] flex items-center justify-center mb-3 group-hover:bg-[#96EDD6] transition-all duration-300">
                <img src="/ecosystem/stake.png" alt="Staking" className="w-14 h-14 object-contain" style={{filter: 'none'}} />
              </div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#96EDD6] transition-colors duration-300">Staking</h3>
              <p className="text-white text-xs text-center group-hover:text-[#96EDD6] transition-colors duration-300">Earn Rewards</p>
            </div>

            {/* Gaming Guild */}
            <div className="flex flex-col items-center group cursor-pointer" onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'brightness(0) saturate(100%) invert(13%) sepia(17%) saturate(1827%) hue-rotate(120deg) brightness(98%) contrast(95%)';
            }} onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.filter = 'none';
            }}>
              <div className="w-28 h-28 rounded-3xl border-2 border-[#96EDD6] flex items-center justify-center mb-3 group-hover:bg-[#96EDD6] transition-all duration-300">
                <img src="/ecosystem/gameguild.png" alt="Gaming Guild" className="w-14 h-14 object-contain" style={{filter: 'none'}} />
              </div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#96EDD6] transition-colors duration-300">Gaming Guild</h3>
              <p className="text-white text-xs text-center group-hover:text-[#96EDD6] transition-colors duration-300">Join & Compete</p>
            </div>
          </div>
        </div>

        {/* Running Text Section */}
        <div className="w-screen overflow-hidden mt-16 lg:mt-24 bg-[#96EDD6] py-4 -mx-12 lg:-mx-20 xl:-mx-32">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-black text-base lg:text-lg font-bold mx-8">Welcome — Where Everything Connects</span>
            <span className="text-black text-base lg:text-lg font-bold mx-8">Everything You Need, All in One Place</span>
            <span className="text-black text-base lg:text-lg font-bold mx-8">Welcome — Where Everything Connects</span>
            <span className="text-black text-base lg:text-lg font-bold mx-8">Everything You Need, All in One Place</span>
            <span className="text-black text-base lg:text-lg font-bold mx-8">Welcome — Where Everything Connects</span>
            <span className="text-black text-base lg:text-lg font-bold mx-8">Everything You Need, All in One Place</span>
            <span className="text-black text-base lg:text-lg font-bold mx-8">Welcome — Where Everything Connects</span>
            <span className="text-black text-base lg:text-lg font-bold mx-8">Everything You Need, All in One Place</span>
          </div>
        </div>

        {/* Trending News Section */}
        <div className="w-screen py-16 px-8 lg:px-20 -mx-12 lg:-mx-20 xl:-mx-32" style={{backgroundColor: '#102425'}}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
              Trending News
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main News Card - Takes 3 columns */}
              <div className="lg:col-span-3 rounded-[2rem] overflow-hidden border-2 border-white slide-container relative">
                {/* Navigation Buttons */}
                <button 
                  onClick={handlePrevious}
                  className="nav-button left"
                  disabled={isTransitioning}
                >
                  ❮
                </button>
                
                <button 
                  onClick={handleNext}
                  className="nav-button right"
                  disabled={isTransitioning}
                >
                  ❯
                </button>

                {/* News Content Container */}
                <div className={`news-content ${isTransitioning ? 'transitioning' : ''} ${isEntering ? 'entering' : ''}`}>
                  {/* Full width image at top - edge to edge */}
                  <div className="w-full h-96 relative">
                    <img 
                      key={`img-${currentNewsIndex}`}
                      src={newsData[currentNewsIndex].image} 
                      alt={newsData[currentNewsIndex].alt} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  {/* Content below image */}
                  <div className="p-6">
                    <h3 
                      key={`title-${currentNewsIndex}`}
                      className="text-3xl font-bold text-white mb-2 leading-tight"
                    >
                      {newsData[currentNewsIndex].title}
                    </h3>
                    
                    {/* Description and button in flex layout */}
                    <div className="flex items-end justify-between gap-6">
                      <p 
                        key={`desc-${currentNewsIndex}`}
                        className="text-gray-300 text-sm leading-relaxed flex-1"
                      >
                        {newsData[currentNewsIndex].description}
                      </p>
                      
                      <button 
                        className="bg-transparent border border-[#96EDD6] text-[#96EDD6] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#96EDD6] hover:text-black transition-all duration-300 flex-shrink-0 transform hover:scale-105"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Card - More compact */}
              <div className="rounded-[2rem] p-8 border border-[#96EDD6] relative h-fit flex flex-col justify-center mt-20">
                <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">From</div>
                <div className="text-3xl font-bold text-[#96EDD6] mb-1">$19.99</div>
                <div className="text-gray-400 text-xs mb-6">/month</div>
                
                <ul className="space-y-2 mb-6">
                  <li className="text-white text-xs flex items-start">
                    <span className="text-[#96EDD6] mr-2">•</span>
                    Guided Access to Bloomberg Terminal
                  </li>
                  <li className="text-white text-xs flex items-start">
                    <span className="text-[#96EDD6] mr-2">•</span>
                    Alerts on Major Market Moves
                  </li>
                  <li className="text-white text-xs flex items-start">
                    <span className="text-[#96EDD6] mr-2">•</span>
                    AI Portfolio Manager
                  </li>
                  <li className="text-white text-xs flex items-start">
                    <span className="text-[#96EDD6] mr-2">•</span>
                    Deep Market Analysis
                  </li>
                  <li className="text-white text-xs flex items-start">
                    <span className="text-[#96EDD6] mr-2">•</span>
                    On-Chain Wallet Monitor
                  </li>
                </ul>
                
                <button className="w-full bg-[#96EDD6] text-black py-2 rounded-full text-xs font-bold hover:bg-[#7dd3bd] transition-colors">
                  Get Unlimited News
                </button>
              </div>

              {/* Pagination Dots - Positioned within news card area */}
              <div className="lg:col-span-3 flex justify-center mt-6 space-x-2">
                {newsData.map((_, index) => (
                  <div 
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                      currentNewsIndex === index 
                        ? 'bg-[#96EDD6] dot-active shadow-lg shadow-[#96EDD6]/50' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* As Seen On Section */}
        <div className="w-screen py-16 px-8 lg:px-20 -mx-12 lg:-mx-20 xl:-mx-32" style={{backgroundColor: '#102425'}}>
          <div className="max-w-7xl mx-auto">
            <h3 className="text-white text-xl lg:text-2xl font-bold text-center mb-12">
              As Seen On
            </h3>
            <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
              <div className="flex justify-center items-center p-3">
                <img src="/ps.png" alt="PlayStation" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center items-center p-3">
                <img src="/nvidia.png" alt="NVIDIA" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center items-center p-3">
                <img src="/ps.png" alt="PlayStation" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center items-center p-3">
                <img src="/nvidia.png" alt="NVIDIA" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center items-center p-3">
                <img src="/ps.png" alt="PlayStation" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center items-center p-3">
                <img src="/nvidia.png" alt="NVIDIA" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Unified Section: Our Partners, Join Our Community, Let's Connect */}
        <div 
          className="w-screen -mx-12 lg:-mx-20 xl:-mx-32 relative overflow-hidden"
          style={{
            backgroundImage: "url('/bgbg.png')",
            backgroundSize: '100% auto',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)'
          }}
        >
          <div className="pt-32" style={{ paddingLeft: 'max(2rem, calc(50vw - 50%))', paddingRight: 'max(2rem, calc(50vw - 50%))' }}>
          <div className="max-w-7xl mx-auto">
            
            {/* Our Partners Section */}
            <div className="mb-32 mt-8">
              <h3 className="text-white text-3xl lg:text-4xl font-bold text-center mb-12">
                Our Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {/* Row 1 */}
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/pumpkin white logo.png" alt="Pumpkin" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/logo_dark.png" alt="Logo Dark" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/kokomo games.png" alt="Kokomo Games" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/Chain Quadrant white.png" alt="Chain Quadrant" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                
                {/* Row 2 */}
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/bomb pixel.png" alt="Bomb Pixel" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/top-fv-logo.png" alt="Top FV" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/skynitty.png" alt="Sky Nitty" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/ESPL.png" alt="ESPL" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                
                {/* Row 3 */}
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/ERAGON.png" alt="Eragon" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/grand gangsta city LOGO.png" alt="Grand Gangsta City" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/Dragapark.png" alt="Dragapark" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
                <div className="flex justify-center items-center py-4">
                  <img src="/partners/DP.png" alt="DP" className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110" />
                </div>
              </div>
            </div>

            {/* Join Our Community Section */}
            <div className="mb-24 flex items-center justify-center mt-16">
              <div className="relative w-full max-w-3xl">
                {/* Rounded Border Container - Rectangle Shape */}
                <div className="relative bg-transparent border-4 border-[#96EDD6] rounded-[2rem] py-6 px-3 lg:py-8 lg:px-6">
                  {/* Grid Pattern Background */}
                  <div 
                    className="absolute inset-0 rounded-[3rem] opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(150, 237, 214, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(150, 237, 214, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                      Join Our Community
                    </h2>
                    <p className="text-lg text-white mb-4">
                      Take part in the conversation!
                    </p>
                    <p className="text-base text-white/90 mb-12">
                      Stay in the know and be the first to hear about any new updates
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 max-w-md mx-auto">
                      {/* Twitter/X Icon */}
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102425]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                        </svg>
                      </div>
                      
                      {/* Second Twitter/X Icon */}
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102425]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                        </svg>
                      </div>
                      
                      {/* Telegram Icon */}
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102425]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </div>
                      
                      {/* Medium Icon */}
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102425]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                      </div>
                      
                      {/* Discord Icon */}
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#102425]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Connect Section */}
            <div className="max-w-4xl mx-auto mt-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* Left Content */}
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    At Kumami, we believe stories are better when you're part of them. 
                    Whether you're here to catch up on the latest news, dive into research, level 
                    up with Web3 education, stake your assets, or just have fun playing games — 
                    Kumami brings it all together in one powerful platform.
                  </p>
                  <p className="text-white/90 text-xs leading-relaxed">
                    If you want to collaborate, learn more, or apply for developer grants, use the 
                    contact form. Connect, learn, and explore. <span className="font-bold text-white">Your Web3 journey begins now.</span>
                  </p>
                </div>

                {/* Right Content - Contact Form */}
                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Name"
                      className="w-full bg-transparent border-2 border-[#96EDD6] rounded-full px-5 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full bg-transparent border-2 border-[#96EDD6] rounded-full px-5 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>
                  
                  <div className="relative">
                    <select className="w-full bg-transparent border-2 border-[#96EDD6] rounded-full px-5 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none text-sm">
                      <option value="" disabled selected className="text-gray-400">Please choose an option</option>
                      <option value="collaboration" className="text-gray-800">Collaboration</option>
                      <option value="developer-grants" className="text-gray-800">Developer Grants</option>
                      <option value="general-inquiry" className="text-gray-800">General Inquiry</option>
                      <option value="partnership" className="text-gray-800">Partnership</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <textarea 
                      placeholder="Message"
                      rows="4"
                      className="w-full bg-transparent border-2 border-[#96EDD6] rounded-2xl px-5 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none text-sm"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-[#96EDD6] text-[#102425] px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors transform hover:scale-105">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
