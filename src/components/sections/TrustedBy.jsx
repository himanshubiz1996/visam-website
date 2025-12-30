import React from 'react';

const TrustedBy = () => {
  // Filhal text logos use kar rahe hain, baad mein images laga lena
  const brands = ["Stripe", "Spotify", "Slack", "Netflix", "Zoom", "Figma"];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
          Powering next-gen brands
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {brands.map((brand, index) => (
            <span 
              key={index} 
              className="text-3xl md:text-4xl font-heading font-extrabold text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;