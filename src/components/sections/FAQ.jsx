import React, { useState } from 'react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  { q: "How long does a website take?", a: "Typically 2-4 weeks. If you want a spaceship, maybe 8 weeks. We move fast without breaking things." },
  { q: "Do you write the content?", a: "We can! We have copywriters who can sell ice to an Eskimo. Just let us know if you need that add-on." },
  { q: "Will my site work on mobile?", a: "Absolutely. In 2026, if your site doesn't work on mobile, it doesn't exist. We prioritize mobile-first." },
  { q: "What is the payment structure?", a: "50% deposit to start the engine, 50% before we hand over the keys (launch). Simple." },
  { q: "Do you offer support after launch?", a: "Yes! We won't ghost you. We offer monthly maintenance packages to keep everything secure and updated." }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 mb-4">
            <MessageCircleQuestion size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
            Common <span className="text-slate-400">Queries.</span>
          </h2>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${active === index ? 'bg-white border-purple-200 shadow-lg scale-[1.02]' : 'bg-white border-slate-100 hover:border-slate-300'}`}
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${active === index ? 'text-purple-600' : 'text-slate-900'}`}>
                  {item.q}
                </span>
                <div className={`p-2 rounded-full transition-colors ${active === index ? 'bg-purple-100 text-purple-600' : 'bg-slate-50 text-slate-400'}`}>
                  {active === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${active === index ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed font-medium">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;