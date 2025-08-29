import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gamesSectionData from "../dataGamesPage/gamesSectionData";
import headerGamesData from '../dataGamesPage/headerGamesData';
import comingSoonGamesData from '../data/comingSoonGamesData';
import mostPlayedGamesData from '../data/mostPlayedGamesData';
import newReleasedGamesData from '../dataGamesPage/newReleasedGamesData';
import featuredGames from "../dataGamesPage/featuredGamesData";
import freeToPlaySectionData from '../dataGamesPage/freeToPlaySectionData';

const GamesPage = () => {
	const [showFilter, setShowFilter] = useState(false);
	const filterRef = React.useRef(null);
	const navigate = useNavigate();
	const images = headerGamesData.map(g => g.image);
	const [current, setCurrent] = useState(0);

	// Auto slide
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 3500);
		return () => clearInterval(timer);
	}, [images.length]);

	const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
	const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

	return (
		<div className="min-h-screen text-white font-sans" style={{background: 'linear-gradient(135deg, #3A7A7A 0%, #102425 100%)'}}>
			{/* Hero Section */}
			<div className="w-full flex flex-col md:flex-row pb-8" style={{minHeight: '400px'}}>
				<div className="flex-1 flex items-stretch relative overflow-hidden">
					{/* Carousel Slider */}
						<div className="group w-full h-[380px] md:h-[600px] flex items-center justify-center relative overflow-visible">
							{/* Coverflow Images */}
							{[ -1, 0, 1 ].map(offset => {
								const idx = (current + offset + images.length) % images.length;
								let style = {
									backgroundImage: `url(${images[idx]})`,
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									borderRadius: 24,
									width: offset === 0 ? '60%' : '38%',
									height: '90%',
									position: 'absolute',
									left: offset === 0 ? '20%' : offset === -1 ? '0%' : '60%',
									zIndex: offset === 0 ? 20 : 10,
									boxShadow: offset === 0 ? '0 8px 32px #0008' : '0 2px 8px #0006',
									transform: `scale(${offset === 0 ? 1 : 0.82}) rotateY(${offset * 18}deg) translateY(${offset === 0 ? 0 : 20}px)`,
									transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
									filter: offset === 0 ? 'brightness(1)' : 'brightness(0.7)',
									cursor: offset === 0 ? 'default' : 'pointer',
								};
								return (
									<div
										key={idx}
										style={style}
										onClick={() => offset !== 0 && setCurrent(idx)}
										aria-label={offset === 0 ? 'Current' : offset === -1 ? 'Previous' : 'Next'}
									/>
								);
							})}
							{/* Carousel Controls */}
							<button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center z-30 hover:bg-black/50 transition opacity-0 group-hover:opacity-100" aria-label="Previous">
								&#8592;
							</button>
							<button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center z-30 hover:bg-black/50 transition opacity-0 group-hover:opacity-100" aria-label="Next">
								&#8594;
							</button>
						</div>
				</div>
				<div className="relative w-full md:w-[400px] flex flex-col justify-between md:pl-12 mt-8 md:mt-0 px-8" style={{minHeight:'380px'}}>
					{/* Layer background hitam transparan di bawah konten */}
					<div className="absolute inset-0 rounded-lg" style={{background: 'rgba(0,0,0,0.40)', zIndex: 0}} />
					<div className="relative z-10 flex flex-col gap-2 mt-8 md:mt-16">
						<span className="text-lg md:text-base text-white/80 mb-2">{headerGamesData[current].tagline}</span>
						<h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4">{headerGamesData[current].title}</h1>
						<p className="text-lg md:text-m mb-4">{headerGamesData[current].description}</p>
					</div>
					<div className="relative z-10 flex flex-col gap-6 mb-4">
												<button
													className="border border-[#96EDD6] text-[#96EDD6] rounded-lg px-8 py-3 text-2xl font-normal w-fit transition-all duration-300 ease-in-out hover:bg-[#96EDD6] hover:text-[#102425]"
													onClick={() => navigate(headerGamesData[current].detailLink)}
												>
													Learn More
												</button>
						{/* Carousel Indicators di bawah tombol Learn More */}
						<div className="flex gap-2 items-center mt-4 justify-center md:justify-start md:pl-0">
							{images.map((_, idx) => (
								<span
									key={idx}
									className={
										`${current === idx
											? 'w-8 h-2 rounded-full bg-white/80'
											: 'w-2 h-2 rounded-full bg-white/30'} inline-block transition-all duration-300`
									}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Featured Games */}
			<div className="max-w-7xl mx-auto px-8 py-8">
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center justify-end w-full" style={{position: 'relative'}}>
						<div className="flex items-center rounded-full px-4 py-2 max-w-[320px] w-full" style={{background: 'rgba(46,97,98,0.6)'}}>
							<svg className="w-5 h-5 text-white/80 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
							<input type="text" placeholder="Find Games" className="bg-transparent text-white/90 placeholder:text-white/60 outline-none w-full text-base" />
						</div>
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
						{showFilter && (
							<div className="absolute" style={{right: 0, top: 'calc(100% + 8px)', zIndex: 9999}} ref={filterRef}>
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
									</div>
									<hr style={{ borderColor: 'rgba(255,255,255,0.4)', margin: '10px 0' }} />
									<div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Genre</div>
									<div style={{ marginBottom: 6 }}>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Action
										</label>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Adventure
										</label>
										<label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 400 }}>
											<input type="checkbox" style={{ accentColor: '#fff', width: 16, height: 16 }} /> Puzzle
										</label>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-lg font-medium">Featured Games</h2>
						<button className="border-2 border-[#96EDD6] text-[#96EDD6] rounded-lg px-6 py-2.5 text-sm transition-all duration-300 ease-in-out hover:bg-[#96EDD6] hover:text-[#102425]" onClick={() => navigate('/featured-games')}>view more</button>
					</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{featuredGames.map((game) => (
						<div
							key={game.id}
							className="h-[25.5rem] bg-gray-200/30 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-100 brightness-75 cursor-pointer"
						>
							<img src={game.image} alt={game.title} className="object-cover w-full h-full rounded-2xl" />
						</div>
					))}
				</div>
			</div>

			{/* Free to Play */}
			<div className="max-w-7xl mx-auto px-8 py-8">
				<div className="bg-[#102425] rounded-3xl p-14">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold">Free to Play</h2>
						<button className="border-2 border-[#96EDD6] text-[#96EDD6] rounded-lg px-6 py-2.5 text-sm transition-all duration-300 ease-in-out hover:bg-[#96EDD6] hover:text-[#102425]" onClick={() => navigate('/freetoplay')}>view more</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
						{freeToPlaySectionData.map((game, i) => (
							<div
								key={i}
								className="flex flex-col items-center w-11/12 mx-auto transition-all duration-300 ease-in-out"
							>
								<div
									className="relative h-48 bg-gray-200/30 rounded-lg mb-2 w-full overflow-hidden brightness-75 hover:brightness-100 transition-all duration-300 ease-in-out group"
								>
									<img src={game.mainImg} alt={game.title} className="object-cover w-full h-full rounded-lg" />
									<div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition duration-200" />
								</div>
								<div className="flex gap-1 flex-wrap justify-center mb-1">
									{game.tags && game.tags.map((tag, idx) => (
										<span key={idx} className="bg-[#163232] text-[#96EDD6] rounded-full px-2 py-0.5 text-xs font-semibold">{tag}</span>
									))}
								</div>
								<span className="text-white font-bold text-sm">{game.title}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* New Released */}
			<div className="max-w-7xl mx-auto px-8 py-8">
				   <div className="flex items-center justify-between mb-6">
					   <h2 className="text-2xl font-bold">New Released</h2>
					   <button 
						   className="border-2 border-[#96EDD6] text-[#96EDD6] rounded-lg px-6 py-2.5 text-sm transition-all duration-300 ease-in-out hover:bg-[#96EDD6] hover:text-[#102425]"
						   onClick={() => navigate('/newreleased')}
					   >
						   view more
					   </button>
				   </div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
					{newReleasedGamesData.map((game, idx) => (
						<div key={idx} className="flex flex-col justify-between rounded-2xl p-3 items-center transition-all duration-300 group" style={{background: '#1b3b3d'}} onMouseEnter={e => e.currentTarget.style.background = '#102425'} onMouseLeave={e => e.currentTarget.style.background = '#1b3b3d'}>
							<div className="w-full h-80 rounded-xl overflow-hidden mb-8 flex items-center justify-center bg-gray-200/30">
								<img src={game.mainImg} alt={game.title} className="object-cover w-full h-full rounded-xl" />
							</div>
							<div className="flex gap-1 flex-wrap justify-center mb-2">
								{game.tags && game.tags.map((tag, i) => (
									<span key={i} className="border border-[#96EDD6] text-[#96EDD6] rounded-full px-4 py-1 text-xs w-fit">{tag}</span>
								))}
							</div>
							<span className="font-bold text-base text-white">{game.title}</span>
						</div>
					))}
				</div>
			</div>

			{/* Most Popular, Most Played, Coming Soon */}
			<div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
				<div className="relative">
					<h3 className="font-bold text-2xl mb-4">Most Popular</h3>
					<div className="flex flex-col gap-4 items-center">
						{gamesSectionData.mostPopular.map((game) => (
							<div 
							key={game.id} 
							className="flex items-center gap-2 cursor-pointer rounded transition relative group w-full px-2 py-2"
							onClick={() => navigate('/mostpopular')}
							style={{ minHeight: '100px' }}
						>
							<span className="absolute inset-0 rounded bg-[#163232]/40 opacity-0 group-hover:opacity-100 transition-all duration-200 z-0" />
							<img src={game.image} alt={game.title} className="w-20 h-24 bg-gray-200/30 rounded-md object-cover z-10" />
							<div className="z-10">
								<span className="font-medium">{game.title}</span>
								<div className="text-xs text-gray-300">{game.desc}</div>
							</div>
						</div>
						))}
					</div>
					<div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-400/30" />
				</div>
				<div className="relative">
					<h3 className="font-bold text-2xl mb-4">Most Played</h3>
					<div className="flex flex-col gap-4 items-center">
						{mostPlayedGamesData.slice(0, 5).map((game, idx) => (
							<div
								key={idx}
								className="flex items-center gap-2 cursor-pointer rounded transition relative group w-full px-2 py-2"
								onClick={() => navigate('/mostplayed')}
								style={{ minHeight: '100px' }}
							>
								<span className="absolute inset-0 rounded bg-[#163232]/40 opacity-0 group-hover:opacity-100 transition-all duration-200 z-0" />
								<img src={game.mainImg} alt={game.title} className="w-20 h-24 bg-gray-200/30 rounded-md object-cover z-10" />
								<div className="z-10">
									<span className="font-medium">{game.title}</span>
									<div className="text-xs text-gray-300">{game.tags && game.tags.join(', ')}</div>
								</div>
							</div>
						))}
					</div>
					<div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-400/30" />
				</div>
				<div>
					<h3 className="font-bold text-2xl mb-4">Coming Soon</h3>
					<div className="flex flex-col gap-4 items-center">
						{comingSoonGamesData.slice(0, 5).map((game, idx) => (
							<div
								key={idx}
								className="flex items-center gap-2 cursor-pointer rounded transition relative group w-full px-2 py-2"
								onClick={() => navigate('/comingsoon')}
								style={{ minHeight: '100px' }}
							>
								<span className="absolute inset-0 rounded bg-[#163232]/40 opacity-0 group-hover:opacity-100 transition-all duration-200 z-0" />
								<img src={game.mainImg} alt={game.title} className="w-20 h-24 bg-gray-200/30 rounded-md object-cover z-10" />
								<div className="z-10">
									<span className="font-medium">{game.title}</span>
									<div className="text-xs text-gray-300">{game.tags && game.tags.join(', ')}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamesPage;
