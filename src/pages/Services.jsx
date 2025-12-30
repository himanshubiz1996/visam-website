import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Rocket, Globe, BarChart, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'web-design',
    title: 'Web Design & Dev',
    icon: <Globe size={40} />,
    desc: 'Hum sirf website nahi, digital experience banate hain.',
    color: 'bg-blue-500'
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    icon: <Layout size={40} />,
    desc: 'Aapke business ko ek "Brand" ki pehchan dena hamari zimmedari.',
    color: 'bg-purple-500'
  },
  {
    id: 'seo',
    title: 'SEO Mastery',
    icon: <Rocket size={40} />,
    desc: 'Google ke pehle page par ana hai? Hum hai na!',
    color: 'bg-orange-500'
  }
];

const Services = () => {
  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-slate-900 mb-16 tracking-tighter">
          What We <span className="text-purple-600">Do.</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.id} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className={`${s.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 text-lg mb-8">{s.desc}</p>
              <Link to={`/services/${s.id}`} className="inline-flex items-center gap-2 font-bold text-purple-600 hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;