import React from 'react';
import CTABanner from '../components/sections/CTABanner';

const Blog = () => {
  const articles = [
    { title: "Why your website isn't converting (and how to fix it)", tag: "Strategy", date: "Oct 12, 2025" },
    { title: "The death of boring design: 2026 Trends", tag: "Design", date: "Nov 05, 2025" },
    { title: "React vs. The World: Why we choose speed", tag: "Tech", date: "Dec 10, 2025" },
    { title: "How AI is changing the agency model forever", tag: "Future", date: "Jan 02, 2026" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-6">
            Brain <span className="text-blue-500">Dump.</span>
          </h1>
          <p className="text-xl text-slate-500">Thoughts, rants, and valuable insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {articles.map((post, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-slate-100 px-4 py-1 rounded-full text-sm font-bold text-slate-600 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">{post.tag}</span>
                <span className="text-slate-400 text-sm font-medium">{post.date}</span>
              </div>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">{post.title}</h3>
              <p className="text-slate-500 font-medium">Read article -&gt;</p>
            </div>
          ))}
        </div>
      </div>
      <CTABanner />
    </div>
  );
};

export default Blog;