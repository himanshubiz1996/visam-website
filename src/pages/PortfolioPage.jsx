import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CTABanner from '../components/sections/CTABanner';

const PortfolioPage = () => {
  const projects = [
    { title: "Neon Bank", cat: "Fintech App", img: "bg-gradient-to-br from-gray-900 to-slate-800" },
    { title: "Zen Yoga", cat: "Wellness Platform", img: "bg-gradient-to-br from-green-200 to-emerald-400" },
    { title: "Hyper Shoes", cat: "E-Commerce", img: "bg-gradient-to-br from-orange-300 to-red-500" },
    { title: "Orbit AI", cat: "SaaS Dashboard", img: "bg-gradient-to-br from-blue-400 to-indigo-600" },
    { title: "Luxe Estate", cat: "Real Estate", img: "bg-gradient-to-br from-stone-200 to-stone-400" },
    { title: "Pixel Game", cat: "Gaming UI", img: "bg-gradient-to-br from-purple-500 to-pink-500" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-6">
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Work.</span>
          </h1>
          <p className="text-xl text-slate-500">We don't just talk. We ship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`h-[500px] rounded-[2.5rem] ${p.img} relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0">
                  <ArrowUpRight size={32} className="text-slate-900" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/60 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-bold uppercase tracking-widest opacity-80 mb-2">{p.cat}</p>
                  <h3 className="text-4xl font-heading font-bold">{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTABanner />
    </div>
  );
};

export default PortfolioPage;