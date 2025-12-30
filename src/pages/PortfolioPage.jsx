import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/client'; //
import { motion } from 'framer-motion'; //
import { ArrowRight, Loader2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (!error) setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-purple-600" size={50} /></div>;

  return (
    <div className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* ✨ Swarg Blobs (Consistency) */}
      <div className="fixed top-0 left-0 w-[30rem] h-[30rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[30rem] h-[30rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-heading font-extrabold text-slate-900 mb-8 tracking-tighter italic leading-none"
          >
            Selected <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Works.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium italic">Hamare pixels ki kahani, hamari zubani.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <Link to={`/portfolio/${project.id}`}>
                <div className="rounded-[3.5rem] overflow-hidden aspect-video bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="mt-8 flex justify-between items-start px-4">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 italic tracking-tight group-hover:text-purple-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-2">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;