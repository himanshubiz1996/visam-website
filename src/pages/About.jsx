import React from 'react';
import { Heart, Coffee, Zap, Users } from 'lucide-react';
import CTABanner from '../components/sections/CTABanner';

const About = () => {
  const team = [
    { name: "Aman V.", role: "Founder & Visionary", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" },
    { name: "Sarah K.", role: "Design Wizard", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=400" },
    { name: "Raj M.", role: "Code Ninja", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400" },
    { name: "Lisa T.", role: "Growth Hacker", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=400&h=400" }
  ];

  return (
    <div className="pt-32 pb-20">
      
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm bg-purple-50 px-3 py-1 rounded-full">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mt-6 text-slate-900 mb-6">
            We are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Crazy Ones.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Visam wasn't built in a boardroom. It was built on caffeine, late nights, and a stubborn refusal to make "boring" websites.
          </p>
        </div>

        {/* Stats / Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {[
            { label: "Happy Clients", val: "150+", icon: Heart },
            { label: "Projects Shipped", val: "300+", icon: Zap },
            { label: "Team Members", val: "12", icon: Users },
            { label: "Cups of Coffee", val: "∞", icon: Coffee },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-600" />
              <div className="text-4xl font-extrabold text-slate-900 mb-2">{stat.val}</div>
              <div className="text-slate-500 font-bold text-sm uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <h2 className="text-4xl font-heading font-bold text-center mb-16">Meet the <span className="text-purple-600">Squad.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[3/4]">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-300 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <CTABanner />
    </div>
  );
};

export default About;