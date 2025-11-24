
import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  language: 'en' | 'es';
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, language }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Botón Volver */}
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-white/50 hover:text-bocha-pink transition-colors uppercase tracking-widest text-xs font-bold">
        <svg className="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        Back to Work
      </button>

      {/* Encabezado */}
      <div className="max-w-4xl mx-auto mb-12">
        <span className="inline-block bg-bocha-pink text-black text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">{project.category}</span>
        <h1 className="text-5xl md:text-7xl font-sans font-black uppercase mb-4 tracking-tighter">{typeof project.title === 'string' ? project.title : project.title[language]}</h1>
        <p className="text-xl text-white/70 font-sans max-w-2xl">{typeof project.shortDescription === 'string' ? project.shortDescription : project.shortDescription[language]}</p>
      </div>

      {/* VIDEOS (IFRAMES NATIVOS) */}
      <div className="max-w-5xl mx-auto space-y-12 mb-16">
        {project.videos && project.videos.length > 0 ? (
          project.videos.map((video: any, index: number) => (
            <div key={index} className="w-full">
                {video.title && <h3 className="text-lg font-bold mb-2 text-white/50 uppercase tracking-widest">{video.title}</h3>}
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <iframe src={video.src} width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title={video.title || 'Video'}></iframe>
                </div>
            </div>
          ))
        ) : (
          // Fallback a imagen si no hay videos
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={project.image} alt={typeof project.title === 'string' ? project.title : project.title[language]} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Texto descriptivo e info extra */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-lg leading-relaxed text-gray-300 whitespace-pre-line font-sans">
          {typeof project.fullDescription === 'string' ? project.fullDescription : project.fullDescription[language]}
        </div>
        <div className="space-y-8 border-l border-white/10 pl-8">
          <div><h4 className="text-xs font-bold text-bocha-pink uppercase tracking-widest mb-2">Client</h4><p>{project.client}</p></div>
          <div><h4 className="text-xs font-bold text-bocha-pink uppercase tracking-widest mb-2">Services</h4><div className="flex flex-wrap gap-2">{project.services.map(s => <span key={s} className="text-sm border border-white/20 px-2 py-1 rounded">{s}</span>)}</div></div>
          <div><h4 className="text-xs font-bold text-bocha-pink uppercase tracking-widest mb-2">Tools</h4><div className="flex flex-wrap gap-2">{project.tools.map(t => <span key={t} className="text-sm border border-white/20 px-2 py-1 rounded">{t}</span>)}</div></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
