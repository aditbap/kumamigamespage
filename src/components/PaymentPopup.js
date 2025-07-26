import React, { useState } from 'react';

const PLAN_DATA = {
  monthly: {
    features: [
      'Full access to premium articles',
      'No Ads',
      'Early access to content',
    ],
    billing: '$9.99/month',
    charged: '$9.99/month',
  },
  yearly: {
    features: [
      'Full access to premium articles',
      'No Ads',
      'Early access to content',
      '2 months free',
    ],
    billing: '$99.99/year',
    charged: '$110.00/year',
  },
  lifetime: {
    features: [
      'Full access to premium articles',
      'No Ads',
      'Early access to content',
      '2 months free',
    ],
    billing: '$299.99',
    charged: '$299.99',
  },
};

const PaymentPopup = ({ open, onClose, plan, onSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [billing, setBilling] = useState('yearly');
  const [showPromo, setShowPromo] = useState(false);
  const [promo, setPromo] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [open]);

  if (!open) return null;

  // Pilih data plan sesuai prop plan
  const planData = PLAN_DATA[plan] || PLAN_DATA['monthly'];

  // Hitung harga untuk monthly plan jika annual aktif
  let billingLabel = planData.billing;
  let chargedLabel = planData.charged;
  
  if (plan === 'monthly' && billing === 'annual') {
    const annualPrice = (9.99 * 12).toFixed(2);
    billingLabel = `$${annualPrice}/year`;
    chargedLabel = `$${annualPrice}/year`;
  } else {
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
        className={`relative bg-[#163232] rounded-xl shadow-2xl flex flex-row w-[1200px] max-w-full min-h-[520px] z-10 p-0 transition-all duration-300 ease-out transform ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-[#96EDD6] text-2xl font-bold bg-[#163232] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#23413e] transition">X</button>
        {/* Left: Payment Method & Billing Info */}
        <div className="flex-1 flex flex-col justify-center px-8 py-6">
          <h2 className="text-2xl font-bold text-white mb-5">Get Kumami Premium</h2>
          {/* Payment Method */}
          <div className="mb-5">
            <div className="font-bold text-white text-lg mb-2">Payment Method</div>
            <div className="flex gap-3 mb-2">
              <button
                className={`px-6 py-2 rounded-lg font-semibold text-base border-2 ${paymentMethod === 'credit' ? 'bg-[#96EDD6] text-[#163232] border-[#96EDD6]' : 'bg-transparent text-white border-[#96EDD6]'}`}
                onClick={() => setPaymentMethod('credit')}
              >
                Credit
              </button>
              <button
                className={`px-6 py-2 rounded-lg font-semibold text-base border-2 ${paymentMethod === 'ewallet' ? 'bg-[#96EDD6] text-[#163232] border-[#96EDD6]' : 'bg-transparent text-white border-[#96EDD6]'}`}
                onClick={() => setPaymentMethod('ewallet')}
              >
                E-Wallet
              </button>
            </div>
            <div className="text-[#b2d8d8] text-sm leading-snug">
              Lorem ipsum dolor sit amet <span className="text-[#96EDD6]">Lorem ipsum dolor</span> sit amet Lorem ipsum dolor sit amet <span className="text-[#96EDD6]">Lorem ipsum dolor</span> sit amet
            </div>
          </div>
          {/* Billing Information */}
          <div className="mb-5">
            <div className="font-bold text-white text-lg mb-2">Billing Information</div>
            <div className="mb-3">
              <label className="block text-white text-sm mb-1">Name</label>
              <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-[#96EDD6] bg-transparent text-white text-base focus:outline-none h-9" />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Country</label>
              <input type="text" placeholder="Your country" value={country} onChange={e => setCountry(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-[#96EDD6] bg-transparent text-white text-base focus:outline-none h-9" />
            </div>
          </div>
        </div>
        {/* Right: Information Plan */}
        <div className="flex-1 flex flex-col justify-center px-8 py-6">
          <h3 className="text-base font-bold text-white mb-3">Information Plan</h3>
          <div className="border-2 border-[#96EDD6] rounded-xl px-7 py-7 w-full">
            <ul className="mb-5 space-y-3">
              {planData.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-[#96EDD6] text-base font-normal">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M7 13.5L11 17.5L17 9.5" stroke="#96EDD6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>{f}
                </li>
              ))}
            </ul>
            {/* Billing */}
            <div className="border-t border-[#96EDD6] my-3" />
            <div className="font-bold text-white text-base mb-2">Billing</div>
            <div className="flex items-center gap-3 mb-2">
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
                  <input type="text" placeholder="" value={promo} onChange={e => setPromo(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#96EDD6] bg-transparent text-white text-base focus:outline-none h-9" />
                  <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-[#aafafc] text-[#163232] font-bold text-base hover:bg-[#96EDD6] transition h-9 min-w-[56px]">Apply</button>
                </div>
              </div>
            )}
            <div className="border-t border-[#96EDD6] my-3" />
            <div className="font-bold text-white text-base mb-2">Charged</div>
            <div className="text-white text-lg font-bold mb-2">{chargedLabel}</div>
            <div className="text-sm text-[#b2d8d8]">Taxes lorem ipsum dolor</div>
          </div>
          {/* Confirm and Pay Button */}
          <div className="mt-6">
            <button className="w-full py-3 rounded-lg bg-[#96EDD6] text-[#163232] font-bold text-lg hover:bg-[#aafafc] transition mb-3 disabled:opacity-50 disabled:cursor-not-allowed" onClick={onSuccess} disabled={!isChecked}>Confirm and Pay</button>
          </div>
          {/* Terms Checkbox */}
          <div className="flex items-center mb-1 mt-1">
            <label htmlFor="terms" className="flex items-center gap-4 max-w-2xl text-left mx-auto basis-auto text-xs" style={{fontSize: 10, color: '#fff'}}>
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="opacity-0 absolute w-4 h-4 cursor-pointer z-10"
                  style={{ accentColor: '#96EDD6', borderRadius: 7 }}
                />
                <span className="pointer-events-none absolute top-0 left-0 w-4 h-4 border-2 border-[#96EDD6] rounded bg-transparent flex items-center justify-center">
                  {isChecked && (
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10.5L9 14.5L15 7.5" stroke="#96EDD6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </span>
              <span>
                By subscribing to Kumami Premium, you confirm you are 18 or over, and that you agree to our
                <a href="#" className="ml-1" style={{color: '#96EDD6', textDecoration: 'none'}}>Privacy Policy</a>,
                <a href="#" className="ml-1" style={{color: '#96EDD6', textDecoration: 'none'}}>License Terms</a>,
                <a href="#" className="ml-1" style={{color: '#96EDD6', textDecoration: 'none'}}>User Terms</a>; including our
                <a href="#" className="ml-1" style={{color: '#96EDD6', textDecoration: 'none'}}>Fair Use Policy</a>.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup; 