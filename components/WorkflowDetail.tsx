import React from 'react';
import { WorkflowItem } from '../types';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface WorkflowDetailProps {
  item: WorkflowItem;
  onBack: () => void;
}

const WorkflowDetail: React.FC<WorkflowDetailProps> = ({ item, onBack }) => {
  const { language } = useLanguage();

  const getLocalizedContent = (content: string | { en: string; es: string } | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return language === 'en' ? content.en : content.es;
  };

  const fullText = getLocalizedContent(item.fullContent);
  const quoteText = getLocalizedContent(item.quote);
  const keyTakeawayText = getLocalizedContent(item.keyTakeaway);

  // Split by double newline to detect paragraphs
  const paragraphs = fullText ? fullText.split('\n\n') : [];

  return (
    <section className="min-h-screen pt-28 pb-20 bg-[#050505] relative">
      
      {/* Reading Progress Bar (Optional Visual Touch) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div className="h-full bg-bocha-cyan w-1/3"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 animate-slide-up">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-bocha-muted hover:text-bocha-pink transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Workflow' : 'Volver a Workflow'}
        </button>

        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center gap-3 mb-6 md:justify-start justify-center">
            {item.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-bocha-purple/10 text-bocha-purple border border-bocha-purple/20 px-3 py-1.5 rounded-full">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
          
          <h1 className="font-logo text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            {getLocalizedContent(item.title)}
          </h1>

          <div className="flex items-center gap-2 text-bocha-muted text-sm md:justify-start justify-center">
            <Calendar className="w-4 h-4" />
            <span>{language === 'en' ? 'Published recently' : 'Publicado recientemente'}</span>
          </div>
        </header>

        {/* Hero Image */}
        {item.imageUrl && (
          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden mb-12 border border-white/10 relative">
             <img 
               src={item.imageUrl} 
               alt={getLocalizedContent(item.title)} 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-20"></div>
          </div>
        )}

        {/* Article Body - Rendered Paragraph by Paragraph */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300 leading-relaxed">
          
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
               <p className="mb-6 font-light text-gray-300">
                  {paragraph}
               </p>
               
               {/* Dynamic Quote Injection: Place after 2nd paragraph if it exists */}
               {index === 1 && quoteText && (
                  <div className="my-12 pl-6 md:pl-8 border-l-4 border-bocha-pink animate-fade-in">
                     <p className="text-2xl md:text-3xl font-light text-white italic leading-tight">
                       "{quoteText}"
                     </p>
                  </div>
               )}
            </React.Fragment>
          ))}

          {paragraphs.length === 0 && (
             <p className="italic text-gray-500">
                {language === 'en' ? "Full workflow details coming soon..." : "Detalles completos pronto..."}
             </p>
          )}
          
          {/* Key Takeaway Footer */}
          {keyTakeawayText && (
            <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10">
               <h3 className="text-white font-bold text-lg mb-2">
                 {language === 'en' ? 'Key Takeaway' : 'Punto Clave'}
               </h3>
               <p className="text-sm text-gray-400">
                 {keyTakeawayText}
               </p>
            </div>
          )}
        </article>

      </div>
    </section>
  );
};

export default WorkflowDetail;