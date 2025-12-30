import React from 'react';

const Marquee = () => {
  const items = ["Strategy", "•", "Design", "•", "Development", "•", "Marketing", "•", "Branding", "•", "Motion", "•"];
  
  return (
    <div className="bg-white py-12 border-y border-slate-100 overflow-hidden relative">
      {/* Side Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex select-none">
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
          {[...items, ...items].map((item, index) => (
            <span key={index} className="text-7xl font-heading font-bold uppercase tracking-tighter text-slate-200 transition-colors duration-300 hover:text-slate-900 cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;