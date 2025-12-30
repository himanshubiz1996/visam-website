import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo'; // ✅ Humara Naya Logo Import kiya

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Current page pata karne ke liye

  // Scroll effect: Thoda scroll karne par background change hoga
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jab bhi Page change ho, Mobile menu band kar do
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Links ki list
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      
      {/* Floating Pill Container */}
      <div className={`
        relative w-[92%] md:w-[90%] max-w-6xl 
        flex items-center justify-between 
        px-4 md:px-6 py-3 rounded-full 
        transition-all duration-300
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/40' 
          : 'bg-white/60 backdrop-blur-md border border-white/20'}
      `}>
        
        {/* 1. Logo Section */}
        <Link to="/" className="z-50 hover:opacity-80 transition-opacity">
          <Logo /> 
        </Link>

        {/* 2. Desktop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-1 bg-white/40 p-1.5 rounded-full border border-white/50 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`
                  px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                  ${isActive 
                    ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* 3. CTA Button */}
        <div className="hidden md:block z-50">
          <Link 
            to="/contact" 
            className="group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all active:scale-95"
          >
            Let's Talk 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>

        {/* 4. Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden z-50 p-2 text-slate-900 hover:bg-white/50 rounded-full transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div className={`
        fixed inset-0 bg-[#FAFAFA]/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-8
        transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}
      `}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`text-4xl font-heading font-extrabold transition-colors ${location.pathname === link.path ? 'text-purple-600' : 'text-slate-900 hover:text-purple-500'}`}
          >
            {link.name}
          </Link>
        ))}
        
        <Link 
          to="/contact" 
          className="mt-8 px-10 py-5 bg-slate-900 text-white text-xl font-bold rounded-full shadow-2xl active:scale-95 transition-transform"
        >
          Start a Project
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;