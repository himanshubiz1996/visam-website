import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Bg Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-8">
              Let's build something <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Legendary.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 font-medium">
              Got a project? A crazy idea? Or just want to say hi? <br/>
              We answer emails faster than we drink coffee.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-xl font-bold text-slate-900">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-purple-600"><Mail /></div>
                hello@visam.agency
              </div>
              <div className="flex items-center gap-4 text-xl font-bold text-slate-900">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-pink-600"><Phone /></div>
                +91 81071 21701
              </div>
              <div className="flex items-center gap-4 text-xl font-bold text-slate-900">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600"><MapPin /></div>
                Jodhpur, Rajasthan
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-10 rounded-[3rem] shadow-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-purple-500 transition-colors font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-purple-500 transition-colors font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows="4" placeholder="Tell us about your project..." className="w-full p-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-purple-500 transition-colors font-medium"></textarea>
              </div>
              <button className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;