import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 bg-white relative overflow-hidden">
      {/* ✨ Background Blobs for Swarg Vibe */}
      <div className="fixed top-0 left-0 w-[30rem] h-[30rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-heading font-extrabold text-slate-900 mb-8 tracking-tighter italic leading-none"
          >
            Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Hello.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium italic">Aapke dimaag mein koi idea hai? Chalo chai peete hain aur discuss karte hain!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-sm">
            <h2 className="text-4xl font-bold mb-10 italic">Drop a <span className="text-purple-600">Message.</span></h2>
            <form className="space-y-6">
              <input type="text" placeholder="Aapka Naam" className="w-full p-6 bg-white rounded-3xl border-none shadow-sm focus:ring-2 focus:ring-purple-600 transition-all font-bold" />
              <input type="email" placeholder="Email Address" className="w-full p-6 bg-white rounded-3xl border-none shadow-sm focus:ring-2 focus:ring-purple-600 transition-all font-bold" />
              <textarea placeholder="Aapka Idea..." rows="5" className="w-full p-6 bg-white rounded-3xl border-none shadow-sm focus:ring-2 focus:ring-purple-600 transition-all font-bold"></textarea>
              <button className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-bold text-xl flex items-center justify-center gap-3 hover:bg-purple-600 transition-all shadow-xl">
                Send Magic <Send size={24} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-12 py-10">
            <div className="flex gap-8 group">
              <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Us</p>
                <p className="text-3xl font-bold text-slate-900 italic">hello@visamsolutions.com</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-20 h-20 bg-pink-50 rounded-3xl flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-sm">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Call the Squad</p>
                <p className="text-3xl font-bold text-slate-900 italic">+91 70737 85326</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-20 h-20 bg-yellow-50 rounded-3xl flex items-center justify-center text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all shadow-sm">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Find Us At</p>
                <p className="text-xl font-bold text-slate-900 leading-tight">IStart Nest, Vikramaditya Nagar, Surya Colony, Jodhpur, Rajasthan 342011</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🗺️ Full Width Map Footer Section */}
      <section className="w-full h-[500px] relative mt-20 grayscale hover:grayscale-0 transition-all duration-1000 border-t border-slate-100">
        <iframe 
          title="Visam Solutions Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.85!2d73.0232!3d26.2601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418bd193971b87%3A0x4bebb66d50ffdfd1!2sVisam%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000" 
          className="w-full h-full border-0"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Floating Address Card */}
        <div className="absolute bottom-10 left-10 hidden md:block bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 z-10 max-w-sm">
           <h4 className="text-2xl font-bold mb-4 italic text-purple-600">Visam Solutions</h4>
           <p className="text-slate-500 font-medium text-sm leading-relaxed">
             Aiye humse milne hamare office mein! Chai aur digital strategy ka combo ekdum mast hai.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;