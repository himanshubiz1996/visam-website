import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { id: 1, title: "Neon Bank", category: "Fintech App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
  { id: 2, title: "Zen Yoga", category: "Wellness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" },
  { id: 3, title: "Hyper Shoes", category: "E-Commerce", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" }
];

const PortfolioPage = () => {
  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-extrabold mb-12 uppercase">Our <span className="text-purple-600">Work</span></h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <Link key={p.id} to={`/portfolio/${p.id}`} className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl block">
              <img src={p.img} alt={p.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-8 flex justify-between items-center">
                <div>
                  <p className="text-purple-600 font-bold uppercase text-xs">{p.category}</p>
                  <h3 className="text-3xl font-bold">{p.title}</h3>
                </div>
                <ArrowUpRight className="text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;