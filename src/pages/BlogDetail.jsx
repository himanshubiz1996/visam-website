import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase/client'; //
import { motion } from 'framer-motion'; //
import { ArrowLeft, User, Calendar, Share2, Loader2 } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
      if (!error) setPost(data);
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-purple-600" size={50} /></div>;
  if (!post) return <div className="pt-40 text-center font-bold">Blog not found! 🔍</div>;

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen relative overflow-hidden">
      {/* ✨ Swarg Blobs Consistency */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 font-bold mb-12 transition-all group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>
        </motion.div>

        <div className="mb-16 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading font-extrabold text-slate-900 mb-10 leading-[1] tracking-tighter italic"
          >
            {post.title}
          </motion.h1>
          
          <div className="flex flex-col md:flex-row items-center justify-between border-y border-slate-100 py-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg">
                {post.author[0]}
              </div>
              <div className="text-left">
                <p className="font-extrabold text-slate-900 text-lg">{post.author}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                  {new Date(post.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-2xl hover:bg-purple-50 hover:text-purple-600 transition-all font-bold text-slate-600">
              <Share2 size={18} /> Share Article
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[4rem] overflow-hidden shadow-2xl mb-20 aspect-video bg-slate-100"
        >
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content handling with line breaks */}
        <div className="text-slate-700 text-xl md:text-2xl leading-relaxed font-medium">
          {post.content.split('\n').map((line, index) => (
            <p key={index} className="mb-8 whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;