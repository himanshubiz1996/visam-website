import React from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const works = [
    { title: "Fintech Dashboard", cat: "Product Design", gradient: "bg-gradient-to-br from-gray-900 to-gray-700" },
    { title: "Neon Marketplace", cat: "Web Development", gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" },
    { title: "Luxe Fashion", cat: "Branding", gradient: "bg-gradient-to-br from-orange-400 to-red-500" },
    { title: "AI Startup", cat: "Growth", gradient: "bg-gradient-to-br from-blue-400 to-cyan-300" },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Selected <span className="text-slate-400">Works.</span></h2>
          <button className="hidden md:flex items-center gap-2 font-bold hover:text-purple-600 transition-colors">See all projects <ArrowRight size={20}/></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((w, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`h-[450px] rounded-[2.5rem] ${w.gradient} mb-6 relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                {/* Floating details on hover */}
                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">{w.cat}</p>
                  <h3 className="text-2xl font-heading font-bold">{w.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;