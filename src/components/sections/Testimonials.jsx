import React from 'react';
import { Sparkles } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          Don't just take <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-orange-400">our word.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Sparkles key={star} size={16} className="text-yellow-400 fill-current"/>)}
              </div>
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">"Visam didn't just build a website, they built a lead-generation machine. Absolutely mental ROI."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Rahul M.</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold">CEO, FinTech</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;