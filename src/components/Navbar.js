import React from 'react';

const Navbar = ({ isLoggedIn, user, isPremium, onLogout }) => {
  return (
    <nav className="w-full bg-[#132728] py-4 px-6 flex items-center justify-between">
      {/* Logo & Menu */}
      <div className="flex items-center gap-10">
        <img src="/kumamiwhite.png" alt="Kumami Logo" className="h-10" />
        <div className="flex gap-8 text-white font-normal text-base">
          <span>Company</span>
          <span>News Portal</span>
          <span>Research</span>
          <span>Docs</span>
        </div>
      </div>
      {/* Right Side */}
      {isLoggedIn && isPremium ? (
        <div className="flex items-center gap-6">
          {/* Badge PREMIUM */}
          <span className="bg-gradient-to-r from-[#7B6CF6] to-[#48C6EF] text-white text-xs font-bold rounded-full px-4 py-1 shadow uppercase tracking-wider">PREMIUM</span>
          {/* Email dengan underline */}
          <span className="text-white underline text-base">username@mail.com</span>
          {/* Avatar hijau muda */}
          <span className="bg-[#96EDD6] text-[#163232] rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#163232"/><path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" fill="#163232"/></svg>
          </span>
          {/* Bell biru muda */}
          <span className="text-[#48C6EF] text-xl cursor-pointer">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 10-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z" fill="#48C6EF"/></svg>
          </span>
          {/* Log Out */}
          <span className="text-white text-base cursor-pointer hover:text-[#96EDD6] transition" onClick={onLogout}>Log Out</span>
        </div>
      ) : isLoggedIn ? (
        <div className="flex items-center gap-6">
          {/* Notif icon */}
          <span className="text-white text-xl cursor-pointer">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 10-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z" fill="#fff"/></svg>
          </span>
          {/* Subscription button */}
          <button className="bg-[#aafafc] text-[#102425] font-bold rounded-full px-6 py-2 text-base shadow hover:bg-[#96EDD6] transition">Get Unlimited News</button>
          {/* Avatar */}
          <span className="bg-white text-[#102425] font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">{user?.initials || 'CK'}</span>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button className="text-white">Login</button>
          <button className="bg-[#aafafc] text-[#102425] font-bold rounded-full px-6 py-2 text-base shadow hover:bg-[#96EDD6] transition">Get Unlimited News</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
