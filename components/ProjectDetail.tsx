import React from 'react';
import { Project } from '../types';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ReactPlayer from 'react-player';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const { language } = useLanguage();

  const getLocalizedContent = (content: string | { en: string; es: string } | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return language === 'en' ? content.en : content.es;
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 animate-fade-in">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-bocha-muted hover:text-bocha-cyan transition-colors mb-8 md:mb-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Works
        </button>

        {/* Main Video Player - Only rendered if videoUrl exists */}
        {project.videoUrl && (
          <div className="relative w-full aspect-video bg-black border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-10 md:mb-14">
            <ReactPlayer
              url={project.videoUrl}
              width="100%"
              height="100%"
              controls={true}
              config={{
                vimeo: {
                  playerOptions: { title: 0, byline: 0, portrait: 0, color: 'FF9EB5' }
                }
              }}
            />
          </div>
        )}

        {/* Header Info */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-bocha-pink/10 text-bocha-pink border border-bocha-pink/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-bocha-muted text-xs font-mono">
              {project.date}
            </span>
          </div>
          <h1 className="font-logo text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wide mb-4 leading-[0.9]">
            {getLocalizedContent(project.title)}
          </h1>
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2">
            
            {/* EXTRA VIDEOS SECTION - MOVED TO TOP */}
            {project.videos && project.videos.length > 0 && (
              <div className="space-y-12 mb-16">
                {project.videos.map((video, index) => (
                  <div key={index}>
                    {/* Updated to lighter font as requested */}
                    <h3 className="text-2xl text-white mb-4 font-sans font-light uppercase tracking-wide">{video.title}</h3>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
                      <ReactPlayer
                        url={video.url}
                        width="100%"
                        height="100%"
                        controls={true}
                        config={{ vimeo: { playerOptions: { title: 0, byline: 0, portrait: 0, color: 'FF9EB5' } } }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SEPARATOR if videos exist */}
            {project.videos && project.videos.length > 0 && (
                <div className="w-full h-px bg-white/10 mb-12"></div>
            )}

            {/* DESCRIPTION TEXT - MOVED TO BOTTOM */}
            <h3 className="font-logo text-4xl text-white mb-6 uppercase tracking-wide">About the Project</h3>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-12">
              {getLocalizedContent(project.longDescription || project.description)}
            </p>

          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xs font-bold uppercase text-bocha-muted mb-4">Client</h4>
              <p className="text-white font-medium">{project.client || 'Confidential Studio Partner'}</p>
            </div>
            
            {project.services && project.services.length > 0 && (
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-xs font-bold uppercase text-bocha-muted mb-4">Services</h4>
                <ul className="text-white font-medium space-y-1">
                  {project.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-bocha-pink mt-2 shrink-0"></span>
                       {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.tools && project.tools.length > 0 && (
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-xs font-bold uppercase text-bocha-muted mb-4">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;