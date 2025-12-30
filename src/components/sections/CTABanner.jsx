import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tight">
              Ready to break the <br /> internet?
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10 font-medium">
              Enough scrolling. Let's build something that makes your competitors jealous.
            </p>
            <Link to="/contact" className="inline-block px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-full hover:scale-105 hover:bg-gradient-to-r hover:from-purple-100 hover:to-orange-100 transition-all shadow-xl">
              Book a Strategy Call 📞
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;