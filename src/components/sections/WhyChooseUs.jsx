import React from 'react';
import { Zap, ShieldCheck, HeartHandshake, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { 
      title: "Speed Freaks", 
      desc: "We hate slow websites. We optimize every line of code so your site loads faster than a blink.", 
      icon: Zap, 
      color: "bg-yellow-100 text-yellow-600" 
    },
    { 
      title: "Bulletproof Code", 
      desc: "No duct tape here. We build scalable systems that won't crash when you go viral.", 
      icon: ShieldCheck, 
      color: "bg-blue-100 text-blue-600" 
    },
    { 
      title: "No BS Partner", 
      desc: "We don't speak 'Agency Fluff'. We speak business, ROI, and deadlines.", 
      icon: HeartHandshake, 
      color: "bg-red-100 text-red-600" 
    },
    { 
      title: "Award Winning", 
      desc: "Okay, maybe not Oscars, but our designs definitely turn heads and open wallets.", 
      icon: Trophy, 
      color: "bg-purple-100 text-purple-600" 
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-pink-600 font-bold tracking-widest uppercase text-sm bg-pink-50 px-3 py-1 rounded-full">Why Us?</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-slate-900 leading-tight">
              We bridge the gap between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">"Looking Good"</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">"Working Well".</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">
            Most agencies give you one or the other. We give you both. Because we are greedy for perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div key={index} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                <item.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;