import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client'; //
import { ArrowRight, Fingerprint, Code2, Palette, TrendingUp, ShoppingBag, Lightbulb, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = { Fingerprint, Code2, Palette, TrendingUp, ShoppingBag, Lightbulb };

const ServicesPreview = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      // Supabase se data mangwa rahe hain
      const { data, error } = await supabase.from('services').select('*').order('id', { ascending: true });
      if (!error) setServices(data);
      setLoading(false);
    };
    fetchServices();
  }, []);

  if (loading) return <div className="py-20 flex justify-center"><Loader2 className="animate-spin text-purple-600" size={40} /></div>;

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        {/* Section Heading & Subheading (The Pera) */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm bg-purple-50 px-3 py-1 rounded-full">The Menu</span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mt-4 text-slate-900">
            Everything you need. <br />Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon_name] || Lightbulb;
            return (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute inset-0 border-2 border-transparent ${s.border_class} rounded-[2.5rem] transition-all duration-300`}></div>

                <div className={`w-16 h-16 rounded-2xl ${s.color_class} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* 🏷️ Ye raha Name (Title) */}
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">{s.title}</h3>
                
                {/* 📝 Ye raha Pera (Description) */}
                <p className="text-slate-500 leading-relaxed font-medium">{s.description}</p>

                <Link to={`/services/${s.id}`} className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;