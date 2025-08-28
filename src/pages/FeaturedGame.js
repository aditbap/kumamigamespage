import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import featuredGames from "../data/featuredGamesImagesData";

export default function FeaturedGame() {
	const [visibleRows, setVisibleRows] = useState(2); // default 2 baris
	const [showFilter, setShowFilter] = useState(false);
	const maxRows = Math.ceil(featuredGames.length / 5);
	const navigate = useNavigate();
	return (
		<div className="min-h-screen font-sans overflow-x-hidden overflow-y-auto" style={{background: 'linear-gradient(135deg, #3A7A7A 0%, #102425 100%)'}}>
			<div className="max-w-7xl mx-auto px-6 md:px-12 pb-2">
				{/* Header */}
				<div className="flex justify-between items-center pt-8">
					<div>
						<div className="flex items-center gap-2 text-xs text-white/80 mb-2">
							<span className="cursor-pointer hover:text-[#96EDD6] transition" onClick={() => navigate('/games')}>Games Page</span>
							<span className="mx-1">&gt;</span>
							<span className="text-[#96EDD6]">Featured Games</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Featured Games</h1>
						<p className="text-white/80 text-base mb-2">Discover Something New to Play</p>
					</div>
					<div className="flex items-center gap-2" style={{position: 'relative'}}>
                        <div className="flex items-center bg-[#306464] rounded-full px-4 py-2 w-64">
                            <span className="flex items-center mr-2">
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2" />
                                    <line x1="15.5" y1="15.5" x2="19" y2="19" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                            <input type="text" placeholder="Find Games" className="bg-transparent w-full text-white placeholder:text-white outline-none text-base" />
                        </div>
                        {/* Tombol filter icon sama seperti di GamesPage */}
                        <button 
                            className="ml-2 p-2 rounded-full bg-transparent hover:bg-white/10 transition"
                            onClick={() => setShowFilter(prev => !prev)}
                            id="filterBtn"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <line x1="4" y1="21" x2="4" y2="14"/>
                                <line x1="4" y1="10" x2="4" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="12"/>
                                <line x1="12" y1="8" x2="12" y2="3"/>
                                <line x1="20" y1="21" x2="20" y2="16"/>
                                <line x1="20" y1="12" x2="20" y2="3"/>
                            </svg>
                        </button>
                        {/* Filter overlay/modal tepat di bawah tombol filter */}
						{showFilter && (
							<div className="absolute" style={{right: 0, top: 'calc(100% + 8px)', zIndex: 9999}}>
								<div style={{background: '#3A7573', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', padding: 12, width: 200, color: '#fff', fontFamily: 'inherit'}}>
									<div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Platform Type</div>
									<div style={{ marginBottom: 6 }}>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Web 2
										</label>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Web 3
										</label>
									</div>
									<hr style={{ borderColor: 'rgba(255,255,255,0.4)', margin: '10px 0' }} />
									<div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Device</div>
									<div style={{ marginBottom: 6 }}>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> PC Game
										</label>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Mobile
										</label>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Web Game
										</label>
									</div>
									<hr style={{ borderColor: 'rgba(255,255,255,0.4)', margin: '10px 0' }} />
									<div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Network</div>
									{/* NetworkFilter is declared below and used here */}
									{/* NetworkFilter is declared below and used here */}
									<NetworkFilter />
									<hr style={{ borderColor: 'rgba(255,255,255,0.4)', margin: '10px 0' }} />
									<div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Genre</div>
									<GenreFilter />
									{/* Other filter sections can follow here */}
								</div>
							</div>
						)}
                    </div>
				</div>

				{/* Featured Images */}
				<div className="flex w-full items-center mt-10 mb-4" style={{height: '500px', maxWidth: '100vw'}}>
					{/* Left preview - mentok kiri, lebih rounded */}
					<div className="h-full flex items-center bg-white/30 rounded-[48px]" style={{width: '700px', height: '360px', marginRight: '32px', marginLeft: '-450px'}}>
						{/* Preview kiri */}
					</div>
					{/* Main image - lebih rounded */}
					<div className="bg-white/80 flex items-center justify-center overflow-hidden z-10 rounded-[48px]" style={{width: '900px', height: '460px'}}>
						{/* Main image area */}
					</div>
					{/* Right preview - mentok kanan, lebih rounded */}
					<div className="h-full flex items-center bg-white/30 rounded-[48px]" style={{width: '700px', height: '360px', marginLeft: '32px', marginRight: '-450px'}}>
						{/* Preview kanan */}
					</div>
				</div>
				{/* Gap bawah main image sebelum indicator */}
				<div style={{marginBottom: '10px'}}></div>
				{/* Title & Tags */}
				<div className="flex flex-col items-center mb-8">
					{/* Indicator di atas game title */}
					<div className="flex justify-center items-center gap-2 mb-6">
						{[...Array(7)].map((_, idx) => (
							<div
								key={idx}
								className={
									`h-2 w-10 rounded-full transition-all duration-200 ` +
									(idx === 0 ? 'bg-[#96EDD6]' : 'bg-white/70')
								}
							></div>
						))}
					</div>
				</div>

				{/* Game Grid */}
				<div className="grid grid-cols-5 gap-8 mb-8">
					{featuredGames.slice(0, visibleRows * 5).map((game, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center group"
						>
							<div className="relative w-[215px] h-[290px] mb-2 rounded-2xl overflow-hidden">
								<img src={game.mainImg} alt={game.title} className="w-full h-full object-cover" />
								<div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition duration-200" />
							</div>
							<span className="text-white font-bold text-sm mb-1">{game.title}</span>
							<div className="flex gap-1 flex-wrap justify-center">
								{game.tags.map((tag, i) => (
									<span key={i} className="bg-[#163232] text-[#96EDD6] rounded-full px-2 py-0.5 text-xs font-semibold">{tag}</span>
								))}
							</div>
						</div>
					))}
				</div>
				{/* More/Minimize Button */}
				<div className="flex justify-center mb-8">
					<button
						className="text-[#96EDD6] border-b border-[#96EDD6] px-6 py-2 bg-transparent"
						onClick={() => {
							if (visibleRows < maxRows) {
								setVisibleRows(visibleRows + 2);
							} else if (visibleRows > 2) {
								setVisibleRows(visibleRows - 2);
							}
						}}
					>
						{visibleRows > 2 ? 'Minimize' : 'More'}
					</button>
				</div>
			</div>
		</div>
	);
}

// NetworkFilter component for modal
function NetworkFilter() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ marginBottom: 6 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
        <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Ethereum
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
        <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Solana
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
        <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> BSC
      </label>
      {showMore && (
        <>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Arbitrum
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Polygon
          </label>
        </>
      )}
      <div
        style={{ fontSize: 12, fontStyle: 'italic', marginTop: 2, cursor: 'pointer', color: '#fff', opacity: 0.8 }}
        onClick={() => setShowMore(m => !m)}
      >
        {showMore ? 'Minimize' : 'More'}
      </div>
    </div>
  );
}

// GenreFilter component for modal
function GenreFilter() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ marginBottom: 6 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
        <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Action
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
        <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Adventure
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
        <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Arcade
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
        <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Battle Royale
      </label>
      {showMore && (
        <>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Card
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Casual
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Fighting
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> FPS 
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Horror
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Metaverse
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> MOBA
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> MMORPG
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> RPG
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Strategy
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
            <input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Word Game
          </label>
        </>
      )}
      <div
        style={{ fontSize: 12, fontStyle: 'italic', marginTop: 2, cursor: 'pointer', color: '#fff', opacity: 0.8 }}
        onClick={() => setShowMore(m => !m)}
      >
        {showMore ? 'Minimize' : 'More'}
      </div>
    </div>
  );
}
