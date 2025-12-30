import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap, Target, ShieldCheck } from 'lucide-react';

// --- SERVICE DATA (Static Array) ---
const serviceData = {
  'web-design': {
    title: 'Web Design & Dev',
    tagline: 'Hum sirf websites nahi, Digital Empires banate hain.',
    desc: 'Visam Solutions mein hum modern UI/UX aur fast loading websites par focus karte hain. Hamari websites responsive hoti hain aur har device par makkhan ki tarah chalti hain.',
    features: ['Custom UI/UX Design', 'Full Responsive Layout', 'SEO Friendly Code', 'Super Fast Performance'],
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  'branding': {
    title: 'Brand Identity',
    tagline: 'Aapka business ek "Brand" ki tarah dikhna chahiye.',
    desc: 'Logo se lekar brand guidelines tak, hum aapke business ko ek unique pehchan dete hain jo logon ke dimaag mein chhap jati hai.',
    features: ['Unique Logo Design', 'Brand Voice & Tone', 'Color Palettes', 'Stationery Design'],
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  'seo': {
    title: 'SEO Mastery',
    tagline: 'Google ke pehle page par ana ab mushkil nahi.',
    desc: 'Hum advanced SEO techniques use karte hain taaki aapka business hamesha top par rahe aur organic traffic badhta rahe.',
    features: ['Keyword Research', 'On-Page Optimization', 'Backlink Strategy', 'Monthly Reports'],
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="pt-40 text-center h-screen">
        <h2 className="text-3xl font-bold">Ye service abhi under maintenance hai! 🛠️</h2>
        <Link to="/services" className="text-purple-600 underline mt-4 block">Wapas Services dekho</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Navigation */}
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 font-bold mb-12 transition-colors">
          <ArrowLeft size={20} /> Our All Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div>
            <span className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest ${service.bg} ${service.color} mb-6 inline-block`}>
              Premium Service
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-2xl font-bold text-slate-800 mb-8 italic">
              "{service.tagline}"
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {service.desc}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-12">
              {service.features.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="text-green-500" size={24} />
                  <span className="font-bold text-slate-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Element */}
          <div className={`${service.bg} rounded-[4rem] p-12 aspect-square flex flex-col justify-center items-center text-center`}>
            <Zap size={80} className={`${service.color} mb-8 animate-bounce`} />
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Ready to Grow?</h3>
            <p className="text-slate-600 mb-8 font-medium">Hamari team ready hai aapke vision ko reality mein badalne ke liye.</p>
            <Link to="/contact" className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl">
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; // ✅ Syntax error theek ho gaya!