import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client';
import { Quote, Star, Loader2 } from 'lucide-react';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error('Error:', error);
      else setReviews(data);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  if (loading) return <div className="py-20 text-center"><Loader2 className="animate-spin mx-auto text-purple-600" /></div>;

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
            Happy <span className="text-slate-400">Clients.</span>
          </h2>
          <p className="text-slate-500 font-medium">Log hamare baare mein kya keh rahe hain?</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div key={item.id} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <Quote className="text-purple-200 mb-6 group-hover:text-purple-600 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8 italic">
                "{item.review_text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={item.client_photo} 
                  alt={item.client_name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-100" 
                />
                <div>
                  <h4 className="font-bold text-slate-900">{item.client_name}</h4>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;