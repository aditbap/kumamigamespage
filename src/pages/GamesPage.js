import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CryptoPriceBar from '../components/CryptoPriceBar';
import GameCard from '../components/GameCard';
import games from '../data/games';

// Extract unique genres from games data
const genreSet = new Set();
games.forEach(game => {
  if (Array.isArray(game.Genre)) {
    game.Genre.forEach(g => genreSet.add(g));
  }
});
const categories = ['All', ...Array.from(genreSet)];

const GamesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    setTimeout(() => setHasAnimatedIn(true), 100);
  }, []);

  // Filter games berdasarkan search dan kategori
  const filteredGames = games.filter(game => {
    // Filter by category
    const matchCategory = selectedCategory === 'All' || (Array.isArray(game.Genre) && game.Genre.includes(selectedCategory));
    // Filter by search
    const matchSearch = game.Title.toLowerCase().includes(searchQuery.toLowerCase()) || (game.Description && game.Description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Sort games berdasarkan pilihan sort
  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.Title.localeCompare(b.Title);
      case 'genre':
        const genreA = Array.isArray(a.Genre) ? a.Genre[0] : '';
        const genreB = Array.isArray(b.Genre) ? b.Genre[0] : '';
        return genreA.localeCompare(genreB);
      case 'date':
        const dateA = new Date(a.Date || 'JUL 03, 2025');
        const dateB = new Date(b.Date || 'JUL 03, 2025');
        return dateB - dateA; // Newest first
      default:
        return 0; // Keep original order for 'default'
    }
  });

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#101010' }}>
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #2a2a2a 0 1px, transparent 1px 10px)`
          }}
        />
      </div>

      <Navbar />
      <CryptoPriceBar />
      
      {/* Header Section */}
      <header className="relative overflow-hidden z-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-4xl font-bold text-white tracking-wide transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0ms'}}>
              GAMES PORTAL
            </h1>
            
            {/* Search Bar */}
            <div className={`max-w-2xl mx-auto my-10 transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '100ms'}}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-[#757575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-base bg-[#2a2a2a] rounded-lg text-[#757575] placeholder-[#757575] focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '200ms'}}>
              {categories.slice(0, 10).map((cat) => (
                <button
                  key={cat}
                  className={`px-3 py-2 border border-[#2a2a2a] rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === cat
                      ? 'bg-[#00c2c7] text-white'
                      : 'bg-transparent text-[#7b7b7b] hover:bg-[#2a2a2a] hover:text-white'
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Games Grid Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className={`text-2xl font-bold text-kumami-text mb-2 transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '300ms'}}>
                Featured Games
              </h2>
              <p className={`text-kumami-textSecondary transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '350ms'}}>
                {sortedGames.length} games available
              </p>
            </div>
            
            {/* Filter/Sort Options */}
            <div className={`hidden sm:flex items-center space-x-4 transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '400ms'}}>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-kumami-card border border-gray-700 text-kumami-text rounded-lg px-5 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-colors appearance-none"
                  aria-label="Sort games"
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="genre">Genre</option>
                  <option value="date">Date (Newest)</option>
                </select>
                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </div>
          </div>

          {/* Games Grid */}
          <div 
            className="flex flex-col gap-y-8" 
            role="region" 
            aria-label="Games collection"
          >
            {sortedGames.map((game, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-kumami-card border border-gray-700 text-kumami-text rounded-lg hover:bg-gray-700 hover:border-teal-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400/50">
            Load More Games
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-[#0a1a1a]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-kumami-textSecondary">
            <p>&copy; 2025 Kumami. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom gray scrollbar styles for GamesPage only */}
      <style>{`
        /* Custom gray scrollbar for GamesPage */
        ::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          border-radius: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        /* For Firefox */
        html {
          scrollbar-color: #2a2a2a #101010;
          scrollbar-width: thin;
        }
      `}</style>
    </div>
  );
};

export default GamesPage;
