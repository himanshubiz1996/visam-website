import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ServicesPreview from '../components/sections/ServicesPreview'; // Existing component reuse
import CTABanner from '../components/sections/CTABanner';

const Services = () => {
  const pricing = [
    { name: "Starter", price: "$999", desc: "Perfect for startups testing the waters.", features: ["One Page Website", "Basic SEO", "Mobile Optimized", "1 Week Delivery"], color: "bg-blue-50 border-blue-100" },
    { name: "Growth", price: "$2,499", desc: "For brands ready to scale up.", features: ["5 Page Website", "CMS Integration", "Advanced SEO", "Copywriting Included", "Social Media Setup"], color: "bg-purple-50 border-purple-200 shadow-xl scale-105 z-10" },
    { name: "Empire", price: "Custom", desc: "Full-scale digital dominance.", features: ["Custom Web App", "E-Commerce", "AI Integration", "24/7 Support", "Dedicated Manager"], color: "bg-orange-50 border-orange-100" },
  ];

  return (
    <div className="pt-32 pb-20">
       <div className="fixed top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-6">
            The <span className="text-purple-600">Menu.</span>
          </h1>
          <p className="text-xl text-slate-500">Pick your weapon. We handle the rest.</p>
        </div>

        {/* Reuse Existing Services Grid */}
        <ServicesPreview />

        {/* Pricing Section */}
        <div className="mt-32">
           <h2 className="text-4xl font-heading font-bold text-center mb-16">Simple <span className="text-green-600">Pricing.</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
             {pricing.map((plan, i) => (
               <div key={i} className={`p-10 rounded-[2.5rem] border ${plan.color} transition-transform hover:-translate-y-2`}>
                 <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                 <div className="text-4xl font-extrabold mb-4">{plan.price}</div>
                 <p className="text-slate-500 mb-8 h-12">{plan.desc}</p>
                 <ul className="space-y-4 mb-8">
                   {plan.features.map((f, idx) => (
                     <li key={idx} className="flex items-center gap-3 font-medium text-slate-700">
                       <CheckCircle2 size={20} className="text-green-500" /> {f}
                     </li>
                   ))}
                 </ul>
                 <button className="w-full py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
                   Choose {plan.name}
                 </button>
               </div>
             ))}
           </div>
        </div>

      </div>
      <CTABanner />
    </div>
  );
};

export default Services;