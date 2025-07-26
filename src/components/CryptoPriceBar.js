import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const COINS = [
	{ symbol: "BTC", id: "bitcoin" },
	{ symbol: "ETH", id: "ethereum" },
	{ symbol: "XRP", id: "ripple" },
	{ symbol: "USDT", id: "tether" },
	{ symbol: "BNB", id: "binancecoin" },
	{ symbol: "SOL", id: "solana" },
	{ symbol: "USDC", id: "usd-coin" },
	{ symbol: "DOGE", id: "dogecoin" },
];

// Get logo from Parqet
const getCoinLogoUrl = (symbol) =>
  `https://assets.parqet.com/logos/crypto/${symbol}?format=png&size=32`;

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=" +
  COINS.map((c) => c.id).join(",") +
  "&vs_currencies=usd&include_24hr_change=true";

const CryptoPriceBar = () => {
  const [prices, setPrices] = useState({});
  const [changes, setChanges] = useState({});
  const [loading, setLoading] = useState(true);
  const [flash, setFlash] = useState({}); // { symbol: 'up' | 'down' | null }
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const prevPricesRef = useRef({});

  useEffect(() => {
    setTimeout(() => setHasAnimatedIn(true), 100);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const res = await axios.get(COINGECKO_URL); // No headers needed
        const data = res.data;
        console.log('CoinGecko API response:', data); // Debug log
        const newPrices = {};
        const newChanges = {};
        const newFlash = {};
        COINS.forEach((coin) => {
          const info = data[coin.id];
          console.log(`API info for ${coin.symbol}:`, info); // Debug log
          if (!info || info.usd === undefined) {
            newPrices[coin.symbol] = null;
            newChanges[coin.symbol] = null;
            newFlash[coin.symbol] = null;
            return;
          }
          newPrices[coin.symbol] = info.usd;
          newChanges[coin.symbol] = info.usd_24h_change ?? null;
          // Flash logic
          if (prevPricesRef.current[coin.symbol] !== undefined && prevPricesRef.current[coin.symbol] !== null) {
            if (info.usd > prevPricesRef.current[coin.symbol]) newFlash[coin.symbol] = 'up';
            else if (info.usd < prevPricesRef.current[coin.symbol]) newFlash[coin.symbol] = 'down';
            else newFlash[coin.symbol] = null;
          } else {
            newFlash[coin.symbol] = null;
          }
        });
        console.log('Mapped prices:', newPrices); // Debug log
        console.log('Mapped changes:', newChanges); // Debug log
        if (isMounted) {
          setPrices(newPrices);
          setChanges(newChanges);
          setFlash(newFlash);
          setLoading(false);
          // Update previous prices ref for next comparison
          prevPricesRef.current = newPrices;
          // Remove flash after 1s
          setTimeout(() => {
            if (isMounted) setFlash({});
          }, 1000);
        }
      } catch (e) {
        console.error('CoinGecko error:', e); // Debug log
        if (isMounted) {
          setPrices({});
          setChanges({});
          setLoading(false);
        }
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // refresh every 60s (1 minute)
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []); // Only run once on mount

  // Infinite scroll logic: duplicate coins to create a seamless loop
  const infiniteCoins = [...COINS, ...COINS]; // 2x for seamless infinite

  return (
    <div
      className={`hide-scrollbar w-full border-b border-gray-800/50 overflow-x-hidden transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
      style={{ minHeight: "56px", position: "relative", background: "#101010", paddingTop: "10px", paddingBottom: "10px" }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .ticker-track {
          display: flex;
          flex-direction: row;
          align-items: center;
          white-space: nowrap;
          animation: ticker 15s linear infinite;
          animation-play-state: running;
          animation-fill-mode: forwards;
        }
        .ticker-item {
          margin-right: 2rem;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .ticker-item {
            margin-right: 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .ticker-item {
            margin-right: 1.2rem;
          }
        }
        @media (max-width: 480px) {
          .ticker-item {
            margin-right: 1rem;
          }
        }
        @media (max-width: 400px) {
          .ticker-item {
            margin-right: 0.8rem;
          }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="ticker-track">
        {/* Render ticker items twice for seamless infinite scroll */}
        {[...infiniteCoins, ...infiniteCoins].map((coin, idx) => {
          const price = prices[coin.symbol];
          const change = changes[coin.symbol];
          const changeColor =
            change > 0
              ? "text-green-400"
              : change < 0
              ? "text-red-400"
              : "text-gray-300";
          const flashType = flash[coin.symbol];
          const priceClass =
            flashType === 'up'
              ? 'bg-green-900 text-green-300 transition-colors duration-500'
              : flashType === 'down'
              ? 'bg-red-900 text-red-300 transition-colors duration-500'
              : '';
          // Custom gap logic - responsive margins
          let extraStyle = {};
          if (coin.symbol === 'USDC') {
            extraStyle.marginRight = window.innerWidth <= 640 ? '1.5rem' : '2.5rem';
          }
          if (coin.symbol === 'DOGE') {
            extraStyle.marginRight = window.innerWidth <= 640 ? '1.2rem' : '2rem';
          }
          if (coin.symbol === 'BTC' && idx > 0 && infiniteCoins[(idx - 1) % infiniteCoins.length].symbol === 'DOGE') {
            extraStyle.marginLeft = window.innerWidth <= 640 ? '1.2rem' : '2rem';
          }
          // Show placeholders if loading or error
          const showPlaceholder = loading || Object.values(prices).every((v) => v === null);
          return (
            <div key={coin.symbol + idx} className="ticker-item flex items-center min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[160px] py-1 px-1 sm:px-2 rounded-lg bg-black/20" style={extraStyle}>
              <img
                src={getCoinLogoUrl(coin.symbol)}
                alt={coin.symbol + ' logo'}
                className="w-6 h-6 mr-1 inline-block align-middle"
                loading="lazy"
              />
              <span className="text-white font-semibold text-xs sm:text-sm md:text-base">{coin.symbol}</span>
              <span className={`text-gray-300 text-xs sm:text-sm px-1 rounded ${priceClass}`}> 
                {showPlaceholder
                  ? "--"
                  : price
                  ? `$${price.toLocaleString(undefined, {
                      maximumFractionDigits: window.innerWidth <= 480 ? 2 : 6,
                    })}`
                  : "--"}
                {flashType === 'up' && !showPlaceholder && <span className="ml-1">▲</span>}
                {flashType === 'down' && !showPlaceholder && <span className="ml-1">▼</span>}
              </span>
              <span className={`text-xs font-semibold ${changeColor}`}> 
                {showPlaceholder
                  ? "--"
                  : change > 0 ? "+" : ""}
                {showPlaceholder
                  ? "--"
                  : change?.toFixed(window.innerWidth <= 480 ? 1 : 2)}%
              </span>
            </div>
          );
        })}
      </div>
      {/* Attribution for Parqet Logo API */}
      {/* Loading/Error message below bar for accessibility */}
      {loading && (
        <div className="w-full text-center text-gray-400 text-xs sm:text-base md:text-lg font-medium tracking-wide" style={{ letterSpacing: "0.02em" }}>
          Loading price data...
        </div>
      )}
      {!loading && Object.values(prices).every((v) => v === null) && (
        <div className="w-full text-center text-red-400 text-xs sm:text-base md:text-lg font-medium tracking-wide" style={{ letterSpacing: "0.02em" }}>
          Error: No price data received. Check API response and network.
        </div>
      )}
    </div>
  );
};

export default CryptoPriceBar;
