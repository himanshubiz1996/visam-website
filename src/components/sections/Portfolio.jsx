import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client'; //
import { ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPreview = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      // Supabase se projects ka data (image_url ke sath) mangwa rahe hain
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true })
        .limit(4);

      if (!error) setWorks(data);
      setLoading(false);
    };
    fetchWorks();
  }, []);

  if (loading) return (
    <div className="py-20 flex justify-center italic font-bold text-slate-400 animate-pulse">
      Loading Masterpieces...
    </div>
  );

  return (
    <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
            Selected <span className="text-slate-400">Works.</span>
          </h2>
          <Link to="/portfolio" className="hidden md:flex items-center gap-2 font-bold hover:text-purple-600 transition-colors">
            See all projects <ArrowRight size={20}/>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((w, i) => (
            <Link key={i} to={`/portfolio/${w.id}`} className="group cursor-pointer block">
              
              {/* 🖼️ Ab Gradient ki jagah Image fetch hogi */}
              <div className="h-[450px] rounded-[2.5rem] mb-6 relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-slate-200">
                
                {/* Image Component */}
                <img 
                  src={w.image_url || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe'} 
                  alt={w.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
                
                {/* Floating details - Wahi design! */}
                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-90">{w.category}</p>
                  <h3 className="text-3xl font-heading font-bold tracking-tight">{w.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;