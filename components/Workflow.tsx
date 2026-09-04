
import React from 'react';
import { WorkflowItem } from '../types';
import { Hash, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface WorkflowProps {
  items: WorkflowItem[];
  onItemClick: (item: WorkflowItem) => void;
}

const Workflow: React.FC<WorkflowProps> = ({ items, onItemClick }) => {
  const { language } = useLanguage();

  const getLocalizedContent = (content: string | { en: string; es: string } | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return language === 'en' ? content.en : content.es;
  };

  return (
    <section className="min-h-screen pt-48 pb-16 md:pt-72 md:pb-20 px-4 md:px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-bocha-purple/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-bocha-pink/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24 animate-fade-in">
          <span className="text-bocha-cyan font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 md:mb-4 block">
            {language === 'en' ? 'Inside the Studio' : 'Dentro del Estudio'}
          </span>
          <h2 className="font-logo text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-lg leading-tight uppercase tracking-wide">
             {language === 'en' ? 'Our' : 'Nuestro'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-bocha-yellow to-bocha-pink">Workflow</span>
          </h2>
          <p className="text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base px-4">
            {language === 'en' 
              ? "We've never believed in keeping secrets. Creativity thrives in the open, so this space shows exactly how we work—clear, honest, and useful to everyone."
              : "Nunca creímos en guardar secretos. La creatividad prospera en lo abierto, así que este espacio muestra exactamente cómo trabajamos: claro, honesto y útil para todos."}
          </p>
        </div>

        <div className="space-y-8 md:space-y-16">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => onItemClick(item)}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bocha-pink via-bocha-purple to-bocha-cyan rounded-[1.5rem] md:rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              
              {/* Card Container */}
              <div className="relative bg-[#0f0f0f] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 border border-white/5 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  
                  {/* Desktop Number Line */}
                  <div className="hidden md:flex flex-col items-center gap-2 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-bocha-pink group-hover:text-black transition-all duration-300">
                      <span className="font-mono font-bold">0{index + 1}</span>
                    </div>
                    <div className="w-px h-full min-h-[5rem] bg-white/10 group-hover:bg-gradient-to-b from-bocha-pink to-transparent"></div>
                  </div>

                  <div className="flex-1 space-y-4 md:space-y-6">
                    <div className="flex items-center gap-4">
                      {/* Mobile Number Badge */}
                      <div className="md:hidden w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-xs font-mono text-bocha-cyan">0{index + 1}</div>
                      <h3 className="font-logo text-2xl md:text-3xl text-white group-hover:text-bocha-cyan transition-colors uppercase tracking-wide">
                        {getLocalizedContent(item.title)}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg group-hover:text-gray-300">
                      {getLocalizedContent(item.content)}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 text-bocha-muted border border-white/5 px-3 py-1.5 rounded-full hover:border-bocha-cyan hover:text-bocha-cyan transition-colors">
                          <Hash className="w-3 h-3" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {item.imageUrl && (
                    <div className="w-full md:w-[320px] shrink-0 mt-4 md:mt-0">
                      <div className="aspect-video md:aspect-[16/10] rounded-xl overflow-hidden bg-black relative group-hover:scale-105 transition-transform duration-500 ease-out shadow-lg">
                        <div className="absolute inset-0 bg-bocha-purple/20 mix-blend-overlay z-10"></div>
                        <img 
                          src={item.imageUrl} 
                          loading="lazy"
                          alt={getLocalizedContent(item.title)} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center pb-8">
           <button className="inline-flex items-center gap-2 text-bocha-cyan hover:text-white transition-colors font-bold uppercase tracking-widest border-b border-bocha-cyan pb-1 hover:border-white text-sm">
              {language === 'en' ? 'See all resources' : 'Ver todos los recursos'} <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
