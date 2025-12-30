import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase/client';
import { ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('id', id)
        .single();

      if (!error) setService(data);
      setLoading(false);
    };
    fetchServiceDetails();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-purple-600" size={50} /></div>;
  if (!service) return <div className="text-center py-20">Service not found!</div>;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 font-bold mb-10 hover:text-purple-600 transition-colors">
          <ArrowLeft size={20} /> Back to all services
        </Link>

        <div className={`inline-flex p-4 rounded-3xl ${service.color_class} mb-8`}>
            {/* Icon logic yahan bhi laga sakte ho */}
            <CheckCircle2 size={40} />
        </div>

        <h1 className="text-6xl md:text-8xl font-heading font-black mb-8 italic tracking-tighter text-slate-900">
          {service.title}
        </h1>
        
        <p className="text-2xl text-slate-500 font-medium mb-12 leading-relaxed">
          {service.description}
        </p>

        {/* Features list agar text format mein hai toh split karke dikhao */}
        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
          <h3 className="text-2xl font-bold mb-8 italic">What's included:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features?.split(',').map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                <CheckCircle2 className="text-green-500" size={24} /> {f.trim()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;