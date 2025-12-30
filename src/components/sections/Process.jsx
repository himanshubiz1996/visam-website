import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      id: "01", 
      title: "Discovery", 
      desc: "Coffee & Chaos. We dig deep into your brain to find the golden idea.", 
      icon: Search,
      color: "text-purple-600",
      bg: "bg-purple-50",
      gradient: "from-purple-600 to-indigo-600"
    },
    { 
      id: "02", 
      title: "Design", 
      desc: "We paint the future. High-fidelity prototypes that look like the real deal.", 
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-50",
      gradient: "from-pink-600 to-rose-600"
    },
    { 
      id: "03", 
      title: "Development", 
      desc: "Magic mode on. We write code that is clean, fast, and bug-free.", 
      icon: Code,
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-600 to-cyan-600"
    },
    { 
      id: "04", 
      title: "Launch", 
      desc: "3... 2... 1... Blastoff! We push it live and watch the traffic roll in.", 
      icon: Rocket,
      color: "text-orange-600",
      bg: "bg-orange-50",
      gradient: "from-orange-600 to-yellow-600"
    },
  ];

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">How it works</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-slate-900">
            From chaos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">clarity.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="group relative p-8 rounded-[2.5rem] bg-[#FAFAFA] hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              
              {/* Number Background */}
              <div className={`absolute top-6 right-8 text-6xl font-heading font-extrabold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${step.gradient} transition-all duration-500 select-none opacity-50 group-hover:opacity-20`}>
                {step.id}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <step.icon size={28} strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;