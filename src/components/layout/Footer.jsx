import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* ✨ Subtle Background Glow for that Premium Feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. BRAND & MISSION (SEO: Internal Branding) */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-heading font-black italic tracking-tighter mb-8 block">
              Visam <span className="text-purple-500">Solutions.</span>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Jodhpur ki best digital agency jo boring brands ko legendry banati hai. We build high-performance websites and digital strategies.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-purple-600 hover:-translate-y-1 transition-all border border-slate-800">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. SERVICES (SEO: Keyword Rich Links) */}
          <div>
            <h4 className="text-xl font-bold mb-8 italic">Expertise.</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><Link to="/services/web-engineering" className="hover:text-white transition-colors flex items-center justify-between group">Web Engineering <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100" /></Link></li>
              <li><Link to="/services/brand-identity" className="hover:text-white transition-colors flex items-center justify-between group">Brand Identity <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100" /></Link></li>
              <li><Link to="/services/ui-ux-design" className="hover:text-white transition-colors flex items-center justify-between group">UI/UX Design <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100" /></Link></li>
              <li><Link to="/services/growth-marketing" className="hover:text-white transition-colors flex items-center justify-between group">Growth Marketing <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100" /></Link></li>
            </ul>
          </div>

          {/* 3. QUICK LINKS (SEO: Navigation Depth) */}
          <div>
            <h4 className="text-xl font-bold mb-8 italic">Sitemap.</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Our Works</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">The Squad</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Join the Club</Link></li>
            </ul>
          </div>

          {/* 4. CONTACT (SEO: Local SEO Data) */}
          <div>
            <h4 className="text-xl font-bold mb-8 italic">Get in Touch.</h4>
            <div className="space-y-6">
              <a href="mailto:hello@visamsolutions.com" className="flex items-center gap-4 text-slate-400 hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:text-purple-500"><Mail size={18}/></div>
                <span className="font-bold">hello@visamsolutions.com</span>
              </a>
              <a href="tel:+917073785326" className="flex items-center gap-4 text-slate-400 hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:text-purple-500"><Phone size={18}/></div>
                <span className="font-bold">+91 70737 85326</span>
              </a>
              <div className="flex items-start gap-4 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0"><MapPin size={18}/></div>
                <span className="font-bold text-sm">IStart Nest, Vikramaditya Nagar, Surya Colony, Jodhpur, Rajasthan 342011</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
            © {currentYear} Visam Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-slate-500 font-bold text-xs uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;