import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase/client'; //
import { motion } from 'framer-motion'; //
import { ArrowLeft, ExternalLink, Loader2, Zap } from 'lucide-react';

const PortfolioDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
      if (!error) setProject(data);
      setLoading(false);
    };
    fetchProject();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-purple-600" size={50} /></div>;
  if (!project) return <div className="pt-40 text-center">Project Not Found!</div>;

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen relative overflow-hidden">
      {/* ✨ Swarg Blobs Consistency */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 font-bold mb-12 transition-all group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-slate-900 mb-8 leading-[0.9] tracking-tighter italic">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <span className="px-6 py-2 bg-purple-600 text-white rounded-full font-bold text-sm uppercase tracking-widest">{project.category}</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[4rem] overflow-hidden shadow-2xl mb-20 aspect-video bg-slate-100">
          <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-8 italic">About the <span className="text-purple-600">Project.</span></h2>
            <p className="text-2xl text-slate-600 leading-relaxed font-medium italic">
              {project.description}
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 h-fit sticky top-32">
            <h3 className="text-2xl font-bold mb-6 italic">Project Info</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client</p>
                <p className="text-lg font-bold text-slate-900">{project.client || 'Visam Exclusive'}</p>
              </div>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-600 transition-all">
                Live Preview <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;