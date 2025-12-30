import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`flex items-center gap-2 font-heading font-extrabold text-2xl tracking-tighter text-slate-900 ${className}`}>
      {/* --- THE ICON --- */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full hover:scale-110 hover:rotate-3 transition-transform duration-300 drop-shadow-lg"
      >
        {/* 1. Gradient Definition */}
        <defs>
          <linearGradient id="visamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />   {/* Violet */}
            <stop offset="50%" stopColor="#DB2777" />   {/* Pink */}
            <stop offset="100%" stopColor="#F97316" />  {/* Orange */}
          </linearGradient>
        </defs>

        {/* 2. The Squircle Base (Background) */}
        <rect
          x="5" y="5" width="90" height="90"
          rx="28" ry="28" // Super rounded corners
          fill="url(#visamGradient)"
        />

        {/* 3. The 'V' and 'S' Hybrid Shape (White) */}
        {/* Ye shape V se start hoti hai aur S ke curve mein badal jati hai */}
        <path
          d="M30 35 L45 70 L55 70 L70 35 M 45 70 C 45 70, 75 70, 75 50 C 75 30, 45 50, 60 35"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Optional: Ek chhota dot 'i' ya spark ke liye */}
        <circle cx="75" cy="25" r="6" fill="white" className="animate-pulse" />
      </svg>
      
      {/* --- THE TEXT --- */}
      <div className="flex flex-col leading-none select-none">
        <span>Visam<span className="text-purple-600">.</span></span>
        <span className="text-[10px] tracking-widest font-sans font-bold text-slate-400 uppercase opacity-80 pl-0.5">
          Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;