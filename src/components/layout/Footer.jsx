import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-2">Visam.</h2>
            <p className="text-slate-500 font-medium">Jodhpur based. Globally loved.</p>
          </div>
          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-slate-500 hover:text-purple-600 font-bold transition-colors">{social}</a>
            ))}
          </div>
        </div>
        <div className="text-center text-slate-400 text-sm font-medium">
          © 2026 Visam Solutions. Made with ⚡ and ☕.
        </div>
      </div>
    </footer>
  );
};

export default Footer;