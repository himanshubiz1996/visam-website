import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

// --- DUMMY DATA (Database ki jagah yahin se aayega) ---
const blogPosts = {
  1: {
    title: "How AI is changing Web Design in 2026",
    content: `Modern web design ab sirf sunder dikhne ke baare mein nahi hai, balki intelligence ke baare mein hai. AI tools ki madad se hum ab user behaviour ko pehle se zyada behtar samajh sakte hain.

    Visam Solutions mein hum AI ka use karke aisi websites banate hain jo na sirf fast hain balki conversion mein bhi king hain. Design trends badal rahe hain aur humein unke saath kadam se kadam milakar chalna hoga.`,
    author: "Himanshu Yadav",
    date: "Dec 30, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  2: {
    title: "Why Minimalist UI is still the King",
    content: `Zyada colours aur elements aksar user ko confuse kar dete hain. Minimalism ka matlab hai 'Less is More'. Ek saaf-suthri website hamesha trust build karti hai.`,
    author: "Visam Team",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  // Agar koi galat ID daal de toh
  if (!post) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-3xl font-bold">Arre bhai, ye article toh mila hi nahi! 😅</h2>
        <Link to="/blog" className="text-purple-600 underline mt-4 block">Wapas Blog par jao</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <article className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 font-bold mb-10 transition-colors">
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        {/* Metadata */}
        <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">
          <div className="flex items-center gap-2"><User size={16} /> {post.author}</div>
          <div className="flex items-center gap-2"><Calendar size={16} /> {post.date}</div>
          <div className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</div>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-10 leading-tight">
          {post.title}
        </h1>

        {/* Hero Image */}
        <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 h-[500px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Post Content */}
        <div className="prose prose-xl max-w-none text-slate-600 leading-relaxed mb-20 whitespace-pre-wrap font-medium">
          {post.content}
        </div>

        {/* Footer / Share */}
        <div className="border-t border-slate-100 pt-10 flex justify-between items-center">
          <div className="font-bold text-slate-900 text-xl">Visam Insights.</div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full font-bold hover:bg-slate-200 transition-all">
            <Share2 size={18} /> Share Article
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail; // ✅ Ye line syntax error theek kar degi