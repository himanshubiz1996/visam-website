import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/client';
import { Fingerprint, Code2, Palette, TrendingUp, ShoppingBag, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = { Fingerprint, Code2, Palette, TrendingUp, ShoppingBag, Lightbulb };

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await supabase.from('services').select('*').order('id', { ascending: true });
      if (data) setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 bg-white">
      <div className="container mx-auto">
        <h1 className="text-7xl font-heading font-black mb-20 italic">Our <span className="text-purple-600">Expertise.</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => {
            const Icon = iconMap[s.icon_name] || Lightbulb;
            return (
              <Link key={s.id} to={`/services/${s.id}`} className="group p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl ${s.color_class} flex items-center justify-center mb-8`}>
                  <Icon size={30} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{s.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;