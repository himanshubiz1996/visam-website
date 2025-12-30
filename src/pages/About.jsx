import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/client'; //
import { motion } from 'framer-motion';
import { Heart, Coffee, Zap, Users, Target, Eye, Linkedin, Instagram, Loader2, ArrowRight } from 'lucide-react';
import CTABanner from '../components/sections/CTABanner';

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🛰️ Supabase se Team ka data khinchne wala logic
  useEffect(() => {
    const fetchTeam = async () => {
      const { data, error } = await supabase
        .from('team')
        .select('*')
        .order('id', { ascending: true });
        
      if (error) {
        console.error('Error fetching team:', error);
      } else {
        setTeam(data);
      }
      setLoading(false);
    };
    fetchTeam();
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-20 relative overflow-hidden bg-white">
      
      {/* ✨ Swarg Waale Background Blobs (Fixed & Animated) */}
      <div className="fixed top-0 left-0 w-[30rem] h-[30rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[30rem] h-[30rem] bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000 -z-10"></div>

      <div className="container mx-auto px-6">
        
        {/* 1. HEADER: The Crazy Ones Style */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.span {...fadeIn} className="text-purple-600 font-bold tracking-widest uppercase text-xs bg-purple-50 px-4 py-2 rounded-full">
            Our Culture
          </motion.span>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-heading font-extrabold mt-8 text-slate-900 mb-8 tracking-tighter italic leading-none"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Crazy Squad.</span>
          </motion.h1>
          <motion.p {...fadeIn} className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
            Humein 'boring' se nafrat hai. Visam Solutions unhi logon ki toli hai jo caffeine aur passion ke dum par digital duniya badalne nikle hain.
          </motion.p>
        </div>

        {/* 2. STATS: Interactive Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-40">
          {[
            { label: "Happy Clients", val: "150+", icon: Heart },
            { label: "Projects Shipped", val: "300+", icon: Zap },
            { label: "Team Experts", val: "15+", icon: Users },
            { label: "Cups of Coffee", val: "∞", icon: Coffee },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-sm text-center transition-all"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-6 text-purple-600" />
              <div className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tighter">{stat.val}</div>
              <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 3. FOUNDER FOCUS (Mukul Yadav) */}
        <section className="mb-40">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 blur-[150px] opacity-20"></div>
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-4 border-purple-500 flex-shrink-0 z-10 shadow-xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" className="w-full h-full object-cover" alt="Mukul Yadav" />
             </div>
             <div className="z-10">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 italic tracking-tighter">Mukul Yadav.</h2>
                <p className="text-2xl text-slate-300 italic mb-8 font-medium">"Mera vision simple hai: Boring ko delete karo, Legendry ko create karo. Hum yahan sirf kaam karne nahi, history banane aaye hain."</p>
                <div className="flex gap-6">
                   <a href="#" className="hover:text-purple-400 font-bold transition-all flex items-center gap-2"><Linkedin size={20}/> LinkedIn</a>
                   <a href="#" className="hover:text-purple-400 font-bold transition-all flex items-center gap-2"><Instagram size={20}/> Instagram</a>
                </div>
             </div>
          </div>
        </section>

        {/* 4. TEAM GRID (Fetching from Supabase) */}
        <div className="mb-40">
           <h2 className="text-5xl font-heading font-bold text-center mb-20 italic tracking-tighter">Meet the <span className="text-purple-600">Squad.</span></h2>
           {loading ? (
             <div className="flex flex-col items-center justify-center py-20">
               <Loader2 className="animate-spin text-purple-600 mb-4" size={48} />
               <p className="text-slate-500 font-bold animate-pulse">Team is loading...</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
               {team.map((member, i) => (
                 <motion.div 
                   key={member.id} 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="group relative rounded-[3rem] overflow-hidden aspect-[3/4] bg-slate-100 shadow-sm border border-slate-50"
                 >
                   {/* Team Image with Grayscale to Color Effect */}
                   <img 
                    src={member.image_url} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                   />
                   
                   {/* Hover Overlay with Socials */}
                   <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 text-white">
                     <h3 className="text-2xl font-bold leading-tight">{member.name}</h3>
                     <p className="text-purple-200 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">{member.role}</p>
                     <div className="flex gap-3">
                        <a href={member.linkedin_url} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-purple-600 transition-all">
                           <Linkedin size={18} />
                        </a>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           )}
        </div>

      </div>

      {/* 5. FINAL CTA */}
      <CTABanner />
    </div>
  );
};

export default About;