import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 🔮 The Living Blobs (Background Magic) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-bold text-slate-600 tracking-wide">Accepting projects for 2026</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-heading font-extrabold leading-[1.1] mb-8 text-slate-900 tracking-tight">
          We craft digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400">
            experiences that sell.
          </span>
        </h1>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Stop looking like everyone else. We blend <span className="text-slate-900 font-bold underline decoration-purple-400 decoration-2">psychology</span>, <span className="text-slate-900 font-bold underline decoration-pink-400 decoration-2">design</span>, and <span className="text-slate-900 font-bold underline decoration-orange-400 decoration-2">code</span> to build brands that print money.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="group px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-full shadow-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center gap-2">
            Start Your Project 
            <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform text-yellow-300"/>
          </Link>
          
          <Link to="/portfolio" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 text-lg font-bold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all">
            See Our Work
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;