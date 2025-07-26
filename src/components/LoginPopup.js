import React, { useState } from 'react';

const PLAN_DATA = {
  monthly: {
    title: 'Monthly',
    price: '$9.99',
    priceValue: 9.99,
    period: '1 month',
    features: [
      'Full access to premium articles',
      'No Ads',
      'Early access to content',
    ],
    billing: '$9.99/month',
    charged: '$9.99/month',
    promo: false,
  },
  yearly: {
    title: 'Yearly',
    price: '$99.99',
    priceValue: 99.99,
    period: '12 months',
    features: [
      'Full access to premium articles',
      'No Ads',
      'Early access to content',
      '2 months free',
    ],
    billing: '$99.99/year',
    charged: '$110.00/year',
    promo: true,
  },
  lifetime: {
    title: 'Lifetime',
    price: '$299.99',
    priceValue: 299.99,
    period: 'Forever',
    features: [
      'Full access to premium articles',
      'No Ads',
      'Early access to content',
      '2 months free',
    ],
    billing: '$299.99',
    charged: '$299.99',
    promo: false,
  },
};

const LoginPopup = ({ open, onClose, onLogin, plan }) => {
  const [email, setEmail] = useState('');
  const [billing, setBilling] = useState('yearly');
  const [promo, setPromo] = useState('');
  const [showPromo, setShowPromo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [open]);

  if (!open) return null;
  const planData = PLAN_DATA[plan] || PLAN_DATA['monthly'];

  // Hitung harga annual jika annual aktif dan plan monthly
  let billingLabel = planData.billing;
  let chargedLabel = planData.charged;
  if (plan === 'monthly' && billing === 'annual') {
    const annual = (planData.priceValue * 12).toFixed(2);
    billingLabel = `$${annual}/year`;
    chargedLabel = `$${annual}/year`;
  } else if (plan === 'yearly' && billing === 'annual') {
    billingLabel = planData.billing;
    chargedLabel = planData.charged;
  } else if (plan === 'lifetime') {
    billingLabel = planData.billing;
    chargedLabel = planData.charged;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isVisible ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-0'}`} 
        onClick={onClose}
      ></div>
      {/* Popup */}
      <div 
        className={`relative bg-[#163232] rounded-3xl shadow-2xl flex flex-row w-[1100px] max-w-full min-h-[600px] z-10 p-0 transition-all duration-300 ease-out transform ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-[#96EDD6] text-2xl font-bold bg-[#163232] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#23413e] transition">X</button>
        {/* Left: Login Form */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Get Kumami Premium</h2>
          <div className="mb-4 text-lg text-white text-center">Enter your email to subscribe</div>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-3 px-5 py-3 rounded-lg border-2 border-[#96EDD6] bg-transparent text-white focus:outline-none text-base"
          />
          <button
            className="w-full py-3 rounded-lg bg-[#aafafc] text-[#163232] font-bold text-base mb-4 shadow hover:bg-[#96EDD6] transition"
            onClick={() => { if (email) onLogin(email); }}
          >
            Continue
          </button>
          <div className="text-center text-[#b2d8d8] mb-4 text-base">or</div>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-[#96EDD6] bg-transparent text-white mb-4"
            onClick={() => onLogin('user@google.com')}
          >
            <span className="bg-[#96EDD6] text-[#163232] rounded-full w-9 h-9 flex items-center justify-center font-bold text-base">G</span>
            <span className="flex-1 text-left text-base leading-tight">Continue as User<br /><span className="text-xs text-[#96EDD6]">username@email.com</span></span>
            <img src="/google.png" alt="Google" className="w-6 h-6 ml-auto" />
          </button>
          <div className="text-xs text-[#b2d8d8] mt-2 text-center">
            Lorem ipsum dolor sit amet <span className="text-[#96EDD6]">Lorem ipsum dolor</span> sit amet
          </div>
        </div>
        {/* Right: Info Plan */}
        <div className="flex-1 flex flex-col justify-center px-8 py-8">
          <h3 className="text-2xl font-bold text-white mb-4">Information Plan</h3>
          <div className="border-2 border-[#96EDD6] rounded-2xl px-7 py-7 w-full">
            <ul className="mb-6 space-y-4">
              {planData.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-[#96EDD6] text-base font-normal">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M7 13.5L11 17.5L17 9.5" stroke="#96EDD6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>{f}
                </li>
              ))}
            </ul>
            {/* Billing */}
            <div className="border-t border-[#96EDD6] my-4" />
            <div className="mb-2">
              <div className="font-bold text-white text-base mb-1">Billing</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${billing === 'yearly' ? 'text-[#96EDD6]' : 'text-[#b2d8d8]'}`}>Yearly</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={billing === 'annual'} onChange={() => setBilling(billing === 'yearly' ? 'annual' : 'yearly')} className="sr-only peer" />
                    <div className="w-8 h-5 bg-[#23413e] peer-focus:outline-none rounded-full peer peer-checked:bg-[#96EDD6] transition-all duration-200"></div>
                    <div className={`absolute left-1 top-1 w-3 h-3 rounded-full bg-white shadow transition-all duration-200 ${billing === 'annual' ? 'translate-x-3' : ''}`}></div>
                  </label>
                  <span className={`text-sm font-semibold ${billing === 'annual' ? 'text-[#96EDD6]' : 'text-[#b2d8d8]'}`}>Annual</span>
                </div>
                <span className="ml-auto text-white text-base font-bold">{billingLabel}</span>
              </div>
            </div>
            {/* Promo Code Link & Drawdown */}
            <div className="border-t border-[#96EDD6] my-2" />
            <div className="mb-2">
              <button className="flex items-center gap-1 text-[#96EDD6] text-base font-medium cursor-pointer" style={{ textDecoration: 'none' }} onClick={() => setShowPromo(v => !v)}>
                Add Promo Code
                <span className={`text-xs transition-transform duration-200 ${showPromo ? 'rotate-180' : ''}`}>V</span>
              </button>
            </div>
            {showPromo && (
              <div className="mb-2 overflow-hidden">
                <div className="flex items-center gap-2 transform transition-all duration-300 ease-out animate-slide-down">
                  <input type="text" placeholder="" value={promo} onChange={e => setPromo(e.target.value)} className="w-full px-2 py-1 rounded-lg border border-[#96EDD6] bg-transparent text-white text-sm focus:outline-none h-8" />
                  <button className="flex items-center justify-center px-3 py-1 rounded-lg bg-[#aafafc] text-[#163232] font-bold text-sm hover:bg-[#96EDD6] transition h-8 min-w-[56px]">Apply</button>
                </div>
              </div>
            )}
            <div className="border-t border-[#96EDD6] my-4" />
            <div className="font-bold text-white text-base mb-1">Charged</div>
            <div className="text-white text-xl font-bold">{chargedLabel}</div>
            <div className="text-xs text-[#b2d8d8] mt-2">Taxes lorem ipsum dolor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup; 