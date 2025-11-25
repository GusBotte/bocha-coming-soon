import React from 'react';
// We use 'any' here to allow for flexibility with optional fields without strict type checks for this view,
// as requested in the definitive code snippet.
// import { Project } from '../types';

interface ProjectDetailProps {
  project: any; 
  onBack: () => void;
  language: 'en' | 'es'; 
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, language }) => {
  const getTitle = () => typeof project.title === 'string' ? project.title : project.title[language];
  const getShortDesc = () => typeof project.shortDescription === 'string' ? project.shortDescription : project.shortDescription[language];
  const getFullDesc = () => typeof project.fullDescription === 'string' ? project.fullDescription : project.fullDescription[language];

  return (
    <div className="min-h-screen bg-black text-white pt-32 md:pt-40 pb-20 px-4 md:px-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* BOTÓN VOLVER */}
      <button 
        onClick={onBack} 
        className="group mb-12 flex items-center gap-3 text-white/40 hover:text-bocha-pink transition-colors uppercase tracking-[0.2em] text-xs font-bold"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
        Back to Work
      </button>

      {/* ENCABEZADO DEL PROYECTO */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-6">
            <span className="inline-block border border-white/20 text-white/60 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {project.category}
            </span>
            <span className="text-white/40 text-[10px] font-bold tracking-widest">
                {project.date}
            </span>
        </div>
        
        {/* TÍTULO CORREGIDO: Sin tracking negativo para que Anton respire */}
        <h1 className="text-5xl md:text-8xl font-sans font-black uppercase mb-8 tracking-normal leading-[0.9]">
            {getTitle()}
        </h1>
        
        {/* Bajada corta */}
        <p className="text-xl md:text-2xl text-bocha-pink font-sans max-w-3xl leading-tight">
            {getShortDesc()}
        </p>
      </div>

      {/* VIDEOS */}
      <div className="max-w-6xl mx-auto space-y-20 mb-24">
        {project.videos && project.videos.length > 0 ? (
          project.videos.map((video: any, index: number) => (
            <div key={index} className="w-full">
                {video.title && video.title !== 'Main Video' && (
                    <h3 className="text-sm font-bold mb-4 text-white/50 uppercase tracking-widest border-l-2 border-bocha-pink pl-3">
                        {video.title}
                    </h3>
                )}
                <div className="w-full aspect-video rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#111]">
                    <iframe 
                        src={video.src} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                        title={video.title || 'Video'}
                    ></iframe>
                </div>
            </div>
          ))
        ) : (
          <div className="w-full aspect-video rounded-sm overflow-hidden shadow-2xl">
            <img src={project.image} alt={getTitle()} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* DESCRIPCIÓN Y CRÉDITOS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 md:gap-24 border-t border-white/10 pt-16">
        
        {/* COLUMNA IZQ: Texto Editorial */}
        <div className="md:col-span-8">
            <div 
                className="text-base md:text-lg leading-loose text-gray-300 whitespace-pre-line"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
                {getFullDesc()}
            </div>
        </div>

        {/* COLUMNA DER: Ficha Técnica */}
        <div className="md:col-span-4 space-y-10">
          <div>
            <h4 className="text-[10px] font-bold text-bocha-pink uppercase tracking-widest mb-3">Client</h4>
            <p className="text-lg">{project.client}</p>
          </div>
          
          {project.services && (
            <div>
              <h4 className="text-[10px] font-bold text-bocha-pink uppercase tracking-widest mb-3">Services</h4>
              <div className="flex flex-wrap gap-2">
                  {project.services.map((s: string) => (
                      <span key={s} className="text-xs border border-white/20 px-2 py-1 rounded-md text-white/80 hover:border-white/60 transition-colors cursor-default">
                          {s}
                      </span>
                  ))}
              </div>
            </div>
          )}
          
          {project.tools && (
            <div>
              <h4 className="text-[10px] font-bold text-bocha-pink uppercase tracking-widest mb-3">AI Tools</h4>
              <div className="flex flex-wrap gap-2">
                  {project.tools.map((t: string) => (
                      <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded-md text-white/60">
                          {t}
                      </span>
                  ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;