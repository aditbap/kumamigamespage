import React, { useState, useEffect } from 'react';

const GameCard = ({ game }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasAnimatedIn(true), 100);
  }, []);

  const truncateDescription = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&crop=center';
  };

  return (
    <div
      className={`bg-[#2a2a2a]/35 rounded-xl overflow-hidden transition-all duration-700 ease-out group flex flex-col md:flex-row items-stretch w-full max-w-6xl mx-auto py-0 mb-4 h-auto md:h-[400px] hover:-translate-y-1 ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      data-testid="game-card"
      role="article"
      aria-label={`Game: ${game.Title}`}
    >
      {/* Left: Image */}
      <div className="md:w-[400px] w-full relative aspect-square md:aspect-square md:h-full flex-shrink-0 flex items-stretch overflow-hidden">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse" />
        )}
        <img
          src={game.Title === 'Chaspa' ? '/chaspalogo.png' : game.imageUrl}
          alt={game.Title}
          className={`w-full h-full object-cover transition-all duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} rounded-none group-hover:scale-105 group-hover:-translate-y-1`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        {/* Hapus overlay gradient di atas gambar */}
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-between h-full py-8 px-10 flex-1 min-w-0 bg-transparent gap-4">
        <div className="flex flex-col gap-4 flex-1 justify-between">
          {/* Top Row: Date & Genre */}
          <div>
            <div className="flex flex-row items-center justify-between mb-2">
              <span className="text-xs text-gray-400 font-medium tracking-wide bg-[#2a2a2a]/50 px-3 py-1 rounded-full">
                {game.Date || 'JUL 03, 2025'}
              </span>
              <div className="flex flex-wrap gap-2">
                {game.Genre.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 hover:bg-teal-500/30 transition-colors duration-200"
                    aria-label={`Genre: ${genre}`}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4">
              {game.Title}
            </h3>
            {/* Description */}
            <div className="mb-6">
              <p className="text-white/80 text-lg leading-relaxed">
                {showFullDescription ? game.Description : truncateDescription(game.Description, 180)}
              </p>
              {game.Description.length > 180 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-teal-400 text-base font-medium hover:text-teal-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400/50 rounded mt-2"
                  aria-expanded={showFullDescription}
                  aria-controls="game-description"
                >
                  {showFullDescription ? 'Show less' : 'Read more'}
                </button>
              )}
              {/* Social Icons */}
              <div className="flex flex-row gap-5 mt-6">
                <a href={game.twitter || '#'} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-teal-400 text-gray-200 text-2xl">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.548 1.67 4.905a4.48 4.48 0 0 0-.607 2.26c0 1.56.795 2.94 2.006 3.75a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.6 4.42a4.48 4.48 0 0 1-2.03.077c.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.7z"/></svg>
                </a>
                <a href={game.discord || '#'} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-teal-400 text-gray-200 text-2xl">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg>
                </a>
                <a href={game.telegram || '#'} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-teal-400 text-gray-200 text-2xl">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M9.04 16.62l-.39 3.67c.56 0 .8-.24 1.09-.53l2.62-2.5 5.44 3.97c1 .55 1.72.26 1.98-.92l3.6-16.84c.33-1.53-.56-2.13-1.53-1.76L2.2 9.27c-1.5.6-1.48 1.45-.27 1.84l4.6 1.44 10.7-6.74c.5-.33.96-.15.58.21"/></svg>
                </a>
                <a href={game.website || '#'} target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:text-teal-400 text-gray-200 text-2xl">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Play Button */}
        { !showFullDescription && (
          <div className="flex flex-row items-center justify-end mt-2">
            <button
              className="px-6 py-2 bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-semibold rounded-lg hover:from-teal-500 hover:to-cyan-500 transform hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400/50 text-lg"
              aria-label={`Play ${game.Title}`}
            >
              Play Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
