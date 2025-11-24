
import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GalleryProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Gallery: React.FC<GalleryProps> = ({ projects, onProjectClick }) => {
  const { language } = useLanguage();
  
  const getLocalizedContent = (content: string | { en: string; es: string } | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return language === 'en' ? content.en : content.es;
  };
  
  return (
    <section className="min-h-screen pt-40 pb-12 md:pt-40 md:pb-20 bg-[#050505]">
      {/* Updated Container Max Width and Padding to match Header */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Header - Left Aligned */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 animate-fade-in relative z-10 text-left">
          <div className="w-full md:w-auto">
            <h2 className="font-logo text-5xl md:text-7xl lg:text-8xl text-white mb-2 drop-shadow-lg uppercase tracking-wide text-left">
              Selected <span className="text-bocha-pink">Works</span>
            </h2>
            <div className="h-1.5 md:h-2 w-16 md:w-24 bg-gradient-to-r from-bocha-pink to-bocha-pink/50 rounded-full"></div>
          </div>
          
          {/* Scrollable Categories on Mobile */}
          <div className="w-full md:w-auto mt-8 md:mt-0 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <div className="flex gap-3 md:gap-3 min-w-max">
              {['ALL', 'AI AD', 'Brand', 'Video', 'Motion'].map((cat, idx) => (
                <button 
                  key={cat} 
                  className={`px-5 py-2 rounded-full border text-xs md:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 whitespace-nowrap ${
                    idx === 0 
                    ? 'bg-white text-black border-white' 
                    : 'border-white/20 text-gray-400 hover:border-bocha-pink hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-First Immersive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-0">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => onProjectClick(project)}
              className="group relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 hover:border-transparent transition-all duration-500 animate-slide-up cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms` 
              }}
            >
              {/* Mobile: Taller aspect ratio for immersion. Desktop: Standard 4/3 */}
              <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden relative z-0">
                {/* Optimized Image Loading */}
                <img 
                  src={project.image} 
                  loading="lazy"
                  alt={getLocalizedContent(project.title)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Gradient Overlay: Stronger on mobile for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Floating Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Desktop: Hover Icon / Mobile: Always visible but subtle */}
                <div className="absolute top-4 right-4 md:inset-0 md:flex md:items-center md:justify-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                   <div className="w-10 h-10 md:w-16 md:h-16 bg-bocha-pink rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,158,181,0.5)] md:transform md:scale-50 md:group-hover:scale-100 transition-transform">
                      <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 text-black" />
                   </div>
                </div>
                
                {/* Content overlaid on image for mobile immersion */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
                   <h3 className="font-logo text-3xl md:text-4xl text-white group-hover:text-bocha-pink transition-colors drop-shadow-md uppercase tracking-wide">
                      {getLocalizedContent(project.title)}
                   </h3>
                </div>
              </div>
              
              {/* Neon Border Glow on Hover (Desktop Only mainly) */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-bocha-pink via-white to-bocha-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] md:rounded-[2rem] -z-10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
