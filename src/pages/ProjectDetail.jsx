import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams(); // URL se ID nikalne ke liye
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      let { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
      if (error) console.log(error);
      else setProject(data);
      setLoading(false);
    };
    fetchProject();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  if (!project) return <div className="pt-40 text-center text-2xl font-bold">Project Not Found! 🚫</div>;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 font-bold mb-10 transition-colors">
          <ArrowLeft size={20} /> Back to Work
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Project Image */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={project.image_url} alt={project.title} className="w-full h-auto" />
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-center">
            <span className="text-purple-600 font-extrabold uppercase tracking-widest mb-4">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-8">{project.title}</h1>
            
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed mb-10">
              <p>{project.description || "Humne is project ko naye zamane ki technology aur behtareen design ke saath deliver kiya hai. Client ki har requirement ko priority di gayi hai."}</p>
            </div>

            {project.link && (
              <a 
                href={project.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-purple-600 transition-all w-fit"
              >
                Visit Live Website <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;