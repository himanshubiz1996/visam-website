import React from 'react';
import { ArrowRight, Fingerprint, Code2, Palette, TrendingUp, ShoppingBag, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    { title: "Brand Identity", desc: "Logo, colors, & vibes. We define who you are.", icon: Fingerprint, color: "bg-orange-100 text-orange-600", border: "group-hover:border-orange-200" },
    { title: "Web Engineering", desc: "React & Next.js sites that fly like a jet.", icon: Code2, color: "bg-blue-100 text-blue-600", border: "group-hover:border-blue-200" },
    { title: "UI/UX Design", desc: "Interfaces so smooth, users won't leave.", icon: Palette, color: "bg-purple-100 text-purple-600", border: "group-hover:border-purple-200" },
    { title: "Growth Marketing", desc: "We turn random clicks into loyal fans.", icon: TrendingUp, color: "bg-green-100 text-green-600", border: "group-hover:border-green-200" },
    { title: "E-Commerce", desc: "Stores that sell while you sleep.", icon: ShoppingBag, color: "bg-pink-100 text-pink-600", border: "group-hover:border-pink-200" },
    { title: "Consulting", desc: "Brainstorming sessions that solve headaches.", icon: Lightbulb, color: "bg-yellow-100 text-yellow-600", border: "group-hover:border-yellow-200" },
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm bg-purple-50 px-3 py-1 rounded-full">The Menu</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mt-4 text-slate-900">
            Everything you need. <br />Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className={`group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}>
              
              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent ${s.border} rounded-[2.5rem] transition-all duration-300`}></div>

              <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                <s.icon size={32} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;