
import React, { useState, useEffect } from "react";



// TrendingNewsCarousel Component

function TrendingNewsCarousel() {
	const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isEntering, setIsEntering] = useState(false);

	const newsData = [
		{
			id: 1,
			image: process.env.PUBLIC_URL + "/trendingnews.png",
			title: "Trump Set to Unlock Retirement Savings for Cryptocurrency Investments",
			description: "Donald Trump is reportedly preparing to sign an executive order this week that would significantly expand...",
			alt: "Trump Crypto Illustration"
		},
		{
			id: 2,
			image: process.env.PUBLIC_URL + "/trendingnews.png",
			title: "Bitcoin Reaches New All-Time High as Institutional Adoption Surges",
			description: "Major financial institutions continue to embrace cryptocurrency as Bitcoin breaks through previous resistance levels...",
			alt: "Bitcoin Price Chart"
		},
		{
			id: 3,
			image: process.env.PUBLIC_URL + "/trendingnews.png",
			title: "DeFi Revolution: How Decentralized Finance is Reshaping Banking",
			description: "Traditional banking faces unprecedented challenges as DeFi protocols gain mainstream acceptance and adoption...",
			alt: "DeFi Technology Illustration"
		},
		{
			id: 4,
			image: process.env.PUBLIC_URL + "/trendingnews.png",
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
			<style>{`
				@keyframes slideIn {
					0% { opacity: 0; transform: translateX(50px); }
					100% { opacity: 1; transform: translateX(0); }
				}
				@keyframes slideOut {
					0% { opacity: 1; transform: translateX(0); }
					100% { opacity: 0; transform: translateX(-50px); }
				}
				@keyframes dotPulse {
					0%, 100% { transform: scale(1); }
					50% { transform: scale(1.2); }
				}
				.dot-active { animation: dotPulse 0.3s ease-in-out; }
				.news-content { transition: all 0.3s ease-in-out; }
				.news-content.transitioning { animation: slideOut 0.15s ease-in-out forwards; }
				.news-content.entering { animation: slideIn 0.3s ease-out forwards; }
				.nav-button { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(150, 237, 214, 0.4); border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; transition: all 0.3s ease; z-index: 10; color: #102425; font-size: 20px; font-weight: bold; backdrop-filter: blur(10px); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
				.nav-button:hover { background: rgba(150, 237, 214, 0.7); border-color: rgba(255, 255, 255, 0.4); transform: translateY(-50%) scale(1.1); box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); }
				.nav-button:disabled { opacity: 0.5; cursor: not-allowed; }
				.nav-button.left { left: 10px; }
				.nav-button.right { right: 10px; }
				.slide-container:hover .nav-button { opacity: 1; }
			`}</style>
			<div className="lg:col-span-3 rounded-[2rem] overflow-hidden border-2 border-white slide-container relative">
				<button onClick={handlePrevious} className="nav-button left" disabled={isTransitioning}>❮</button>
				<button onClick={handleNext} className="nav-button right" disabled={isTransitioning}>❯</button>
				<div className={`news-content ${isTransitioning ? 'transitioning' : ''} ${isEntering ? 'entering' : ''}`}>
					<div className="w-full" style={{height: 'px', marginBottom: '0px'}}>
						<img key={`img-${currentNewsIndex}`} src={newsData[currentNewsIndex].image} alt={newsData[currentNewsIndex].alt} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" style={{marginBottom: '0px'}} />
					</div>
					<div className="p-6">
						<h3 key={`title-${currentNewsIndex}`} className="text-3xl font-bold text-white mb-2 leading-tight">{newsData[currentNewsIndex].title}</h3>
						<div className="flex items-end justify-between gap-6">
							<p key={`desc-${currentNewsIndex}`} className="text-gray-300 text-sm leading-relaxed flex-1">{newsData[currentNewsIndex].description}</p>
							<button className="bg-transparent border border-[#96EDD6] text-[#96EDD6] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#96EDD6] hover:text-black transition-all duration-300 flex-shrink-0 transform hover:scale-105">Read More</button>
						</div>
					</div>
				</div>
			</div>
			{/* Dots navigation */}
			<div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '18px' }}>
				{newsData.map((_, idx) => (
					<span
						key={idx}
						className={idx === currentNewsIndex ? 'dot-active' : ''}
						style={{ width: '12px', height: '12px', borderRadius: '50%', background: idx === currentNewsIndex ? '#96EDD6' : '#fff', opacity: idx === currentNewsIndex ? 1 : 0.5, display: 'inline-block', cursor: 'pointer' }}
						onClick={() => handleDotClick(idx)}
					></span>
				))}
			</div>
		</div>
	);
}
const mainBg = {
	minHeight: "100vh",
	width: "100vw",
	backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	fontFamily: "Poppins, sans-serif",
	color: "#fff",
	padding: "0",
};

const gridBg = {
	background: "#102425",
	borderRadius: "100px",
	padding: "32px 48px 40px 48px",
	margin: "40px auto",
	maxWidth: "1200px",
	minWidth: "900px",
	display: "flex",
	gap: "32px",
	boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
};

const leftMenu = {
	minWidth: "260px",
	display: "flex",
	flexDirection: "column",
	gap: "18px",
};

const menuItem = {
	background: "#96EDD6",
	color: "#102425",
	borderRadius: "18px",
	padding: "18px 16px",
	fontWeight: "600",
	fontSize: "1.15rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
	 minWidth: "170px",
	 minHeight: "130px",
};

const menuItemInactive = {
	background: "rgba(21,50,51,0.08)",
	color: "#fff",
	borderRadius: "18px",
	padding: "18px 16px",
	fontWeight: "500",
	fontSize: "1.15rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	border: "1.5px solid #baf7f0",
	 minWidth: "170px",
	 minHeight: "130px",
};

const rightContent = {
	flex: 1,
	minWidth: "600px",
	display: "flex",
	flexDirection: "column",
	gap: "24px",
};

const card = {
	background: "#153233",
	borderRadius: "28px",
	padding: "28px 24px 32px 24px",
	color: "#fff",
	boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
	marginBottom: "18px",
};

const priceCard = {
	border: "2px solid #96EDD6",
	borderRadius: "32px",
	padding: "18px 40px",
	color: "#baf7f0",
	fontWeight: "600",
	fontSize: "1.3rem",
	marginTop: "0px",
	marginBottom: "18px",
	background: "rgba(20,40,40,0.0)",
	width: "340px",
	minHeight: "320px",
};

const trendingCard = {
	background: "#153233",
	borderRadius: "18px",
	color: "#fff",
	boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
	marginBottom: "12px",
	display: "flex",
	flexDirection: "column",
	gap: "8px",
};

const trendingImg = {
	width: "100%",
	borderRadius: "12px",
	marginBottom: "8px",
};

function AboutUs() {
		const [selectedProduct, setSelectedProduct] = useState('News Portal');
		// Prevent horizontal scroll globally
		useEffect(() => {
			document.body.style.overflowX = 'hidden';
			return () => {
				document.body.style.overflowX = '';
			};
		}, []);

		const productContent = {
			'News Portal': {
				title: 'News Portal',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				price: {
					label: "From",
					value: "$19.99",
					unit: "/month",
					features: [
						"Guided Access to Bloomberg Terminal",
						"Alerts on Major Market Moves",
						"AI Portfolio Manager",
						"Deep Market Analysis",
						"On-Chain Wallet Monitor"
					],
					button: "Get Unlimited News"
				},
				trendingNews: {
					title: "RETIREMENT SAVINGS FOR CRYPTOCURRENCY INVESTMENTS",
					subtitle: "Trump Set to Unlock Retirement Savings for Cryptocurrency Investments",
					description: "Donald Trump is reportedly preparing to sign an executive order this week that would significantly ...",
					button: "Read More"
				}
			},
			'Education': {
				title: 'Education',
				description: 'Kumami Education is a comprehensive platform designed to empower users of all backgrounds to master cryptocurrency, blockchain, and Web3 technologies. Our interactive courses, expert-led webinars, and vibrant discussion forums provide a supportive environment for learning, sharing insights, and earning industry-recognized certificates. Whether you are a beginner or an advanced enthusiast, Kumami Education helps you stay ahead in the rapidly evolving digital economy.',
				price: {
					label: "Start Learning",
					value: "$9.99",
					unit: "/course",
					features: [
						"Access to All Crypto Courses",
						"Live Webinars with Experts",
						"Certification upon Completion",
						"Community Discussion Forums",
						"Personalized Learning Path"
					],
					button: "Join Education"
				},
				trendingNews: {
					title: "WEB3 EDUCATION TRENDS",
					subtitle: "Kumami Launches New Blockchain Curriculum",
					description: "Kumami introduces a new series of blockchain and crypto courses for all levels, featuring interactive ...",
					button: "Explore Courses"
				}
			},
			'Games': {
				title: 'Games',
				description: 'Dive into Kumami Games, where blockchain and Web3 gaming come alive. Experience a wide variety of play-to-earn games, weekly tournaments, and exclusive NFT rewards. Our platform connects gamers worldwide, offering seamless integration with digital wallets and on-chain assets. Join the Kumami gaming revolution and unlock new opportunities to earn, compete, and collect rare digital items.',
				price: {
					label: "Play Now",
					value: "Free",
					unit: "",
					features: [
						"Access to All Web3 Games",
						"Weekly Tournaments",
						"Exclusive NFT Rewards",
						"Global Leaderboards",
						"Wallet Integration"
					],
					button: "Start Playing"
				},
				trendingNews: {
					title: "NFT GAME LAUNCH",
					subtitle: "Kumami Releases New Play-to-Earn Title",
					description: "The latest Kumami game lets players earn unique NFTs and compete for top prizes in weekly events ...",
					button: "Play Now"
				}
			},
			'Gaming Guild': {
				title: 'Gaming Guild',
				description: 'The Kumami Gaming Guild is a thriving community for Web3 gamers, offering access to exclusive tournaments, collaborative events, and member-only rewards. Connect with fellow enthusiasts, participate in strategy sessions, and gain entry to special gaming leagues. Our guild fosters teamwork, innovation, and growth, making it the ultimate hub for anyone passionate about blockchain gaming and digital competition.',
				price: {
					label: "Membership",
					value: "$4.99",
					unit: "/month",
					features: [
						"Exclusive Guild Tournaments",
						"Strategy Sessions",
						"Member-Only Rewards",
						"Access to Special Leagues",
						"Community Events"
					],
					button: "Join Guild"
				},
				trendingNews: {
					title: "GUILD CHAMPIONSHIP",
					subtitle: "Kumami Guild Hosts First Annual Tournament",
					description: "Hundreds of gamers join Kumami Guild's first championship, competing for prizes and recognition ...",
					button: "View Event"
				}
			},
			'AI Labs': {
				title: 'AI Labs',
				description: 'Kumami AI Labs is dedicated to advancing research in artificial intelligence and blockchain integration. Explore cutting-edge projects, collaborate with leading technologists, and contribute to the development of next-generation solutions. Our labs provide resources for experimentation, innovation, and knowledge sharing, empowering users to shape the future of AI and decentralized technologies.',
				price: {
					label: "Research Access",
					value: "$29.99",
					unit: "/month",
					features: [
						"Access to AI Research Papers",
						"Collaboration Opportunities",
						"Blockchain Integration Projects",
						"Innovation Labs Membership",
						"Knowledge Sharing Sessions"
					],
					button: "Explore Labs"
				},
				trendingNews: {
					title: "AI & BLOCKCHAIN INNOVATION",
					subtitle: "Kumami Labs Unveils New AI Project",
					description: "Kumami AI Labs announces a breakthrough in blockchain-AI integration, opening new possibilities ...",
					button: "Read More"
				}
			},
			'Staking': {
				title: 'Staking',
				description: 'Maximize your crypto earnings with Kumami Staking. Our platform offers secure token staking, real-time on-chain monitoring, and automated portfolio analysis. Benefit from competitive rewards, transparent performance tracking, and expert insights to optimize your investment strategy. Kumami Staking is designed for both novice and experienced users seeking to grow their assets in the dynamic world of decentralized finance.',
				price: {
					label: "Stake Now",
					value: "Variable",
					unit: "APR",
					features: [
						"Secure Token Staking",
						"Real-Time Monitoring",
						"Automated Portfolio Analysis",
						"Expert Insights",
						"Transparent Performance"
					],	
					button: "Start Staking"
				},
				trendingNews: {
					title: "STAKING REWARDS UPDATE",
					subtitle: "Kumami Increases APR for Top Tokens",
					description: "Kumami announces higher staking rewards for select tokens, boosting returns for all users ...",
					button: "See Details"
				}
			},
		};

		return (
			<div style={{...mainBg, marginBottom: '80px'}}>
				<style>{`
					@media (max-width: 900px) {
						.about-container { max-width: 100vw !important; padding: 12px !important; }
						.about-flex { flex-direction: column !important; gap: 12px !important; }
						.about-left { min-width: 0 !important; width: 100% !important; }
						.about-grid { border-radius: 1rem !important; padding: 10px !important; min-width: 0 !important; max-width: 100vw !important; }
						.about-right { min-width: 0 !important; width: 100% !important; gap: 8px !important; }
						.about-title { font-size: 1.3rem !important; margin-bottom: 18px !important; }
						.about-product-title { font-size: 1rem !important; margin-bottom: 8px !important; }
						.about-price-card { width: 100% !important; min-width: 0 !important; padding: 8px !important; font-size: 0.9rem !important; }
						.about-left .about-product-title { margin-left: 0 !important; }
						.about-left > div { gap: 8px !important; }
						.about-left > div > div { padding: 10px 8px !important; font-size: 0.95rem !important; minHeight: 80px !important; minWidth: 100px !important; }
						.about-left > div > div img { width: 28px !important; height: 28px !important; margin-left: 8px !important; margin-right: 8px !important; }
						.about-right h2 { font-size: 1.1rem !important; margin-bottom: 18px !important; }
						.about-right p { font-size: 0.9rem !important; }
						.about-right ul { font-size: 0.9rem !important; }
						.about-right button { font-size: 0.85rem !important; padding: 6px 12px !important; }
					}
				`}</style>
				<div className="about-container" style={{ maxWidth: "1160px", margin: "0 auto", paddingTop: "56px", marginBottom: "100px" }}>
					<h1 className="about-title" style={{ fontSize: "2.6rem", fontWeight: "bold", textAlign: "center", marginBottom: "16px" }}>About Us</h1>
					<p style={{ textAlign: "center", fontSize: "13px", color: "#FFFFF", marginBottom: "32px", lineHeight: "1.7" }}>
						Founded in 2025, Kumami emerged from a vision to revolutionize cryptocurrency education, gaming ecosystem, AI research, and real time-news portal in one seamless platform.<br />
						At Kumami, we're dedicated to creating an ecosystem where everyone can learn and dive more in the Web 3 ecosystem. Our platform empowers users to explore and earn while being part of a vibrant community.
					</p>
				</div>
				<div className="about-flex" style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", gap: "32px" }}>
					<div className="about-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
						<h2 className="about-product-title" style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff", marginBottom: "18px", marginLeft: "8px" }}>Our Products</h2>
						<div style={leftMenu}>
							{Object.keys(productContent).map((product) => (
								<div
									key={product}
									style={selectedProduct === product ? menuItem : menuItemInactive}
									onClick={() => setSelectedProduct(product)}
								>
									<span style={{fontWeight:700, fontSize:'1.25rem', marginLeft:24, marginRight:24}}>{productContent[product].menu ? productContent[product].menu : product}</span>
									<img
										src={process.env.PUBLIC_URL + `/iconsection/${product.replace(/\s/g, '')}.png`}
										alt={product}
										style={{ width: 44, height: 44, objectFit: "contain", marginLeft: 24, marginRight: 24, filter: selectedProduct === product ? "brightness(0) saturate(100%) invert(18%) sepia(16%) saturate(1200%) hue-rotate(130deg)" : "none" }}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="about-grid" style={{...gridBg, marginBottom: '24px', maxWidth: '1px', minWidth: '900px', padding: '32px 48px 40px 48px'}}>
						<div className="about-right" style={{...rightContent, maxWidth: '700px', margin: '0 auto', width: '100%'}}>
							<div>
								{!(selectedProduct === 'Games' || selectedProduct === 'AI Labs' || selectedProduct === 'Staking') && (
									<h2 className="about-title" style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "30px", textAlign: "center", color: "#fff" }}>{selectedProduct === 'Education' ? 'Learn Together with KUMAMI' : productContent[selectedProduct].title}</h2>
								)}
								<div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
									{selectedProduct === 'News Portal' ? (
										<>
											<div style={{ flex: 1, minWidth: "220px" }}>
												<p style={{ fontSize: "15px", color: "#FFFFFF", marginBottom: "12px", lineHeight: "1.3" }}>
													{productContent[selectedProduct].description}
												</p>
											</div>
											<div className="about-price-card" style={priceCard}>
												<span style={{ fontSize: "15px", color: "#FFFFFF", fontWeight: "400", lineHeight: "1.3", marginBottom: "2px" }}>{productContent[selectedProduct].price.label}</span>
												<div style={{ display: "flex", alignItems: "baseline", gap: "0px", marginBottom: "8px", justifyContent: "flex-start" }}>
													<span style={{ fontSize: "2.1rem", color: "#96EDD6", fontWeight: "bold", fontSize: "45px" }}>{productContent[selectedProduct].price.value}</span>
													{productContent[selectedProduct].price.unit && <span style={{ fontSize: "1.15rem", color: "#e0f7fa", fontWeight: "500", marginLeft: "4px" }}>{productContent[selectedProduct].price.unit}</span>}
												</div>
												<ul style={{ fontSize: "15px", color: "#FFFFFF", margin: "0 0 12px 0", padding: 0, listStyle: "none", marginBottom: "30px", lineHeight: "1.3", fontWeight: "400" }}>
													{productContent[selectedProduct].price.features.map((feature, idx) => (
														<li key={idx} style={{ marginBottom: "8px" }}>{feature}</li>
													))}
												</ul>
												<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
													<button
														style={{ background: "#96EDD6", color: "#153233", border: "none", borderRadius: "20px", padding: "8px 18px", fontWeight: "700", cursor: "pointer", fontSize: "0.95rem" }}
														onClick={() => {
															if (productContent[selectedProduct].price.button === "Get Unlimited News") {
																window.location.href = "/Trending";
															}
														}}
													>
														{productContent[selectedProduct].price.button}
													</button>
												</div>
											</div>
										</>
									) : selectedProduct === 'Education' ? (
										<div style={{ width: '100%' }}>
											<p style={{ color: '#fffff', textAlign: 'center', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto' }}>
												At Kumami.World, we offer a friendly and accessible learning environment where everyone can easily unlock the world of Web3.
											</p>
											{/* Steps */}
											<div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginBottom: '32px' }}>
												{/* Step 1 */}
												<div style={{ display: 'flex', alignItems: 'center', gap: '60px', borderRadius: '16px', padding: '24px' }}>
													<div style={{ flex: 1 }}>
														<div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '8px', color: '#fff' }}>1. What is Crypto Wallet?</div>
														<div style={{ fontSize: '1rem', color: '#FFFFF', textAlign: 'justify' }}>
															Cryptocurrency is a digital form of money that uses blockchain technology for secure, decentralized transactions without the need for banks.
														</div>
													</div>
													<img src={process.env.PUBLIC_URL + '/edu/step1.png'} alt="Step 1" style={{ width: '320px', height: '220px', borderRadius: '0px', objectFit: 'contain', background: 'transparent' }} />
												</div>
												{/* Step 2 */}
												<div style={{ display: 'flex', alignItems: 'center', gap: '60px', borderRadius: '16px', padding: '24px' }}>
													<div style={{ flex: 1 }}>
														<div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '8px', color: '#fff' }}>2. How to download Crypto Wallet</div>
														<div style={{ fontSize: '1rem', color: '#fffff', textAlign: 'justify' }}>
															Download a crypto wallet by choosing a trusted app (like MetaMask or Trust Wallet), installing it from your official app store, and setting up a secure password & recovery phrase.
														</div>
													</div>
													<img src={process.env.PUBLIC_URL + '/edu/step2.png'} alt="Step 2" style={{ width: '320px', height: '220px', borderRadius: '0px', objectFit: 'contain', background: 'transparent' }} />
												</div>
												{/* Step 3 */}
												<div style={{ display: 'flex', alignItems: 'center', gap: '60px', borderRadius: '16px', padding: '24px' }}>
													<div style={{ flex: 1 }}>
														<div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '8px', color: '#fff' }}>3. Send your Cryptocurrency to other wallet</div>
														<div style={{ fontSize: '1rem', color: '#fff', textAlign: 'justify' }}>
															Open Wallet → Select Token → Enter Address → Set Amount → Confirm & Send.
														</div>
													</div>
													<img src={process.env.PUBLIC_URL + '/edu/step3.png'} alt="Step 3" style={{ width: '320px', height: '220px', borderRadius: '0px', objectFit: 'contain', background: 'transparent' }} />
												</div>
											</div>
											{/* Certificate Note */}
											<div style={{ color: '#fff', fontSize: '1rem', textAlign: 'center', marginBottom: '35px' }}>
												<em style={{ display: 'inline-block', maxWidth: '560px', width: '100%', wordBreak: 'break-word', lineHeight: '1.4' }}>
													"Learning in Web3 is not just about knowledge— it's about empowerment, ownership, and participation."
												</em>
												<div style={{ marginTop: '30px', color: '#fff', fontWeight: 700 }}>
													Learn with us and get On-chain certificate <span role="img" aria-label="handshake">🤝</span>
												</div>
											</div>
										</div>
									) : selectedProduct === 'Gaming Guild' ? (
										<div style={{ width: '100%' }}>
											<h3 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: '#96EDD6', marginBottom: '2px' }}>Play, Earn, Connect</h3>
											<h4 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: '#96EDD6', marginBottom: '45px' }}>The Power of Web3 Gaming Guilds Guild</h4>
											<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
												<img src={process.env.PUBLIC_URL + '/gamingguild/header.png'} alt="Gaming Guild" style={{ width: '500px', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} />
											</div>
											<p style={{ textAlign: 'justify', color: '#fff', fontSize: '1rem', marginBottom: '32px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
												Joining a Web3 gaming guild lets you unlock new earning opportunities through play-to-earn games while connecting with a global community of gamers. It’s more than gaming—it’s a chance to learn blockchain, share resources, and grow your digital assets together.
											</p>
											<hr style={{ border: 'none', borderTop: '1px solid #fff', margin: '32px 0' }} />
											{/* Chaspa Gaming Guild Section */}
											<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', marginBottom: '48px' }}>
												<div style={{ flex: 1 }}>
													<h3 style={{ color: '#96EDD6', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '18px' }}>Chaspa Gaming Guild</h3>
													<p style={{ color: '#fff', fontSize: '1rem', lineHeight: '1.5', textAlign: 'justify', marginBottom: '24px' }}>
														Chaspa is a dynamic gaming guild bridging Web2 & Web3 worlds—connecting gamers across traditional and blockchain gaming landscapes.
													</p>
													<div style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>
														Details here : <a href="#" style={{ color: '#96EDD6', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1rem' }}>link</a>
													</div>
												</div>
												<img src={process.env.PUBLIC_URL + '/gamingguild/chaspa.jpg'} alt="Chaspa" style={{ width: '340px', borderRadius: '8px', objectFit: 'cover' }} />
											</div>
											{/* RememberUS Community Section */}
											<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', marginBottom: '24px' }}>
												<img src={process.env.PUBLIC_URL + '/gamingguild/rememberus.jpg'} alt="RememberUS" style={{ width: '340px', borderRadius: '8px', objectFit: 'cover' }} />
												<div style={{ flex: 1 }}>
													<h3 style={{ color: '#96EDD6', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '18px' }}>RememberUS Community</h3>
													<p style={{ color: '#fff', fontSize: '1rem', lineHeight: '1.5', textAlign: 'justify', marginBottom: '24px' }}>
														RememberUs is a community-powered initiative focused on uniting Web3 builders, creators, and communities through meaningful experiences across gaming, NFTs, and crypto culture.
													</p>
													<div style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>
														Details here : <a href="#" style={{ color: '#96EDD6', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1rem' }}>Link</a>
													</div>
												</div>
											</div>
										</div>
									) : selectedProduct === 'Games' ? (
										<div style={{ width: '100vw', height: '90vh', minHeight: '0', position: 'relative', overflow: 'visible', display: 'flex', padding: 0, margin: 0 }}>
											<img src={process.env.PUBLIC_URL + '/comingsoon.png'} alt="Coming Soon" style={{ position: 'absolute', top: 'var(--img-top, 0px)', left: 0, right: 0, bottom: 'var(--img-bottom, 0px)', width: '120vw', height: '90vh', objectFit: 'cover', margin: 0, padding: 0, borderRadius: '48px', display: 'block' }} />
										</div>
									) : selectedProduct === 'AI Labs' ? (
										<div style={{ width: '100vw', height: '90vh', minHeight: '0', position: 'relative', overflow: 'visible', display: 'flex', padding: 0, margin: 0 }}>
											<img src={process.env.PUBLIC_URL + '/comingsoon.png'} alt="Coming Soon" style={{ position: 'absolute', top: 'var(--img-top, 0px)', left: 0, right: 0, bottom: 'var(--img-bottom, 0px)', width: '120vw', height: '90vh', objectFit: 'cover', margin: 0, padding: 0, borderRadius: '48px', display: 'block' }} />
										</div>
									) : selectedProduct === 'Staking' ? (
										<div style={{ width: '100vw', height: '90vh', minHeight: '0', position: 'relative', overflow: 'visible', display: 'flex', padding: 0, margin: 0 }}>
											<img src={process.env.PUBLIC_URL + '/comingsoon.png'} alt="Coming Soon" style={{ position: 'absolute', top: 'var(--img-top, 0px)', left: 0, right: 0, bottom: 'var(--img-bottom, 0px)', width: '120vw', height: '90vh', objectFit: 'cover', margin: 0, padding: 0, borderRadius: '48px', display: 'block' }} />
										</div>
									) : (
										<div style={{ flex: 1, minWidth: "220px" }}></div>
									)}
								</div>
							</div>
							{selectedProduct === 'News Portal' && (
								<div style={{ marginBottom: '0px' }}>
									<h3 style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "10px" }}>Trending News</h3>
									{/* Trending News Carousel */}
									<TrendingNewsCarousel />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
	);
}

export default AboutUs;
