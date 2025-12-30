import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/client'; //
import { motion } from 'framer-motion'; //
import { Calendar, User, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error('Error:', error);
      else setPosts(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-purple-600" size={50} /></div>;

  return (
    <div className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* ✨ Swarg Blobs Consistency */}
      <div className="fixed top-0 left-0 w-[30rem] h-[30rem] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[30rem] h-[30rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-heading font-extrabold text-slate-900 mb-8 tracking-tighter italic leading-none"
          >
            Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Insights.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium italic">Sangeet, Art, aur Code ka milan.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {posts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="rounded-[3.5rem] overflow-hidden aspect-video bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    src={post.cover_image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="mt-8 px-4">
                  <div className="flex gap-3 mb-4">
                    {post.tags?.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl font-bold mb-6 group-hover:text-purple-600 transition-colors leading-tight italic tracking-tight">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <div className="flex items-center gap-2"><User size={14} className="text-purple-600" /> {post.author}</div>
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-purple-600" /> {new Date(post.created_at).toLocaleDateString('en-IN')}</div>
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

export default BlogPage;