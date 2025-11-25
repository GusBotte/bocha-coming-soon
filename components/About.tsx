import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type Founder = 'gustavo' | 'alvaro' | null;

const About: React.FC = () => {
  const { language } = useLanguage();
  const [activeBio, setActiveBio] = useState<Founder>(null);

  return (
    <section className="min-h-screen bg-bocha-black text-white pt-48 pb-20 md:pt-72 px-4 md:px-6 flex flex-col items-center">
      
      {/* Title */}
      <h1 className="font-logo text-5xl md:text-7xl lg:text-8xl text-bocha-pink uppercase tracking-wide mb-8 md:mb-12 text-center drop-shadow-[0_0_15px_rgba(255,158,181,0.3)] animate-fade-in">
        WHO WE ARE
      </h1>

      {/* Intro Paragraph */}
      <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
          {language === 'en' 
            ? "Bocha is a creative studio born from the synergy of a senior advertising creative with nearly 20 years of experience and a visual director/filmmaker. Together we design, prompt, and produce AI-driven audiovisual, artistic, and advertising content. We merge production and creative strategy to deliver bold, innovative pieces that stand out in today’s media landscape."
            : "Bocha es un estudio creativo nacido de la sinergia entre un creativo publicitario senior con casi 20 años de experiencia y un director visual/cineasta. Juntos diseñamos, 'prompteamos' y producimos contenido audiovisual, artístico y publicitario impulsado por IA. Fusionamos producción y estrategia creativa para entregar piezas audaces e innovadoras que se destacan en el panorama mediático actual."
          }
        </p>
      </div>

      {/* Interactive Founders Image */}
      <div 
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-bocha-pink/50 hover:shadow-[0_0_30px_rgba(255,158,181,0.1)] animate-slide-up"
        style={{ animationDelay: '0.2s' }}
        onMouseLeave={() => setActiveBio(null)}
      >
        <img 
          src="https://i.postimg.cc/NFq1HvYv/Foto-bocha.png" 
          alt="Gustavo & Alvaro" 
          className="w-full h-auto object-cover"
        />

        {/* Interactive Overlays */}
        <div className="absolute inset-0 flex">
           
           {/* Left Half (Gustavo) */}
           <div 
             className={`w-1/2 h-full cursor-pointer transition-all duration-500 flex items-end justify-center pb-8 group relative ${activeBio === 'gustavo' ? 'bg-bocha-pink/60' : 'hover:bg-bocha-pink/10'}`}
             onMouseEnter={() => setActiveBio('gustavo')}
           >
              <span className={`text-white font-logo text-3xl uppercase tracking-widest transition-all duration-300 drop-shadow-md transform ${activeBio === 'gustavo' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Gustavo
              </span>
           </div>

           {/* Right Half (Alvaro) */}
           <div 
             className={`w-1/2 h-full cursor-pointer transition-all duration-500 flex items-end justify-center pb-8 group relative ${activeBio === 'alvaro' ? 'bg-bocha-pink/60' : 'hover:bg-bocha-pink/10'}`}
             onMouseEnter={() => setActiveBio('alvaro')}
           >
              <span className={`text-white font-logo text-3xl uppercase tracking-widest transition-all duration-300 drop-shadow-md transform ${activeBio === 'alvaro' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Álvaro
              </span>
           </div>

        </div>
      </div>

      {/* Bio Containers */}
      <div className={`w-full max-w-4xl mt-12 min-h-[300px] transition-opacity duration-500 ${activeBio ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Gustavo Bio */}
        {activeBio === 'gustavo' && (
          <div className="animate-fade-in flex flex-col md:flex-row gap-8 items-start bg-white/5 p-8 rounded-2xl border-l-4 border-bocha-pink">
             <div className="shrink-0">
                <h2 className="font-logo text-4xl md:text-5xl text-white uppercase leading-none">Gustavo<br/>Botte</h2>
                <span className="block mt-2 font-logo text-xl md:text-2xl text-bocha-pink uppercase">Co-Founder</span>
             </div>
             <div className="prose prose-invert">
               <p className="text-gray-300 font-light leading-relaxed whitespace-pre-line">
                 {language === 'en' 
                   ? "Gustavo Botte is an Argentine creative director with nearly two decades shaping stories, strategies, and content for some of the region's most relevant brands. He has worked at agencies such as Leo Burnett, Grey, Isla, Y&R, Don, and Digitas, leading comprehensive projects and multidisciplinary teams. Throughout his career, he has worked for Samsung, P&G, Danone, Coca-Cola, Cencosud, InBev, Movistar, Pepsico, Mondelez, Grupo Clarín, Fiat, Puma, Volkswagen, Kappa, and many others. His ideas have been recognized at Cannes Lions, Clio, D&AD, FIAP, Diente, +Digital, and El Ojo de Iberoamérica. Today, he is the co-founder of Bocha, a creative artificial intelligence hub focused on storytelling. From there, he drives projects that combine ideas, narrative, and AI tools for brands, artists, and production companies across different countries, always with the same goal: making good stories travel further."
                   : "Gustavo Botte es un director creativo argentino con casi dos décadas dando forma a historias, estrategias y contenido para algunas de las marcas más relevantes de la región. Ha trabajado en agencias como Leo Burnett, Grey, Isla, Y&R, Don y Digitas, liderando proyectos integrales y equipos multidisciplinarios. A lo largo de su carrera, ha trabajado para Samsung, P&G, Danone, Coca-Cola, Cencosud, InBev, Movistar, Pepsico, Mondelez, Grupo Clarín, Fiat, Puma, Volkswagen, Kappa y muchas otras. Sus ideas han sido reconocidas en Cannes Lions, Clio, D&AD, FIAP, Diente, +Digital y El Ojo de Iberoamérica. Hoy es cofundador de Bocha, un hub de inteligencia artificial creativa enfocado en el storytelling. Desde allí, impulsa proyectos que combinan ideas, narrativa y herramientas de IA para marcas, artistas y productoras en diferentes países, siempre con el mismo objetivo: hacer que las buenas historias lleguen más lejos."
                 }
               </p>
             </div>
          </div>
        )}

        {/* Alvaro Bio */}
        {activeBio === 'alvaro' && (
          <div className="animate-fade-in flex flex-col md:flex-row-reverse gap-8 items-start bg-white/5 p-8 rounded-2xl border-r-4 border-bocha-pink text-right md:text-left">
             <div className="shrink-0 md:text-right">
                <h2 className="font-logo text-4xl md:text-5xl text-white uppercase leading-none">Álvaro<br/>Vázquez</h2>
                <span className="block mt-2 font-logo text-xl md:text-2xl text-bocha-pink uppercase">Co-Founder</span>
             </div>
             <div className="prose prose-invert">
               <p className="text-gray-300 font-light leading-relaxed whitespace-pre-line md:text-right">
                 {language === 'en' 
                   ? "Álvaro Vázquez is a director and audiovisual filmmaker with over two decades exploring new ways to tell stories. His experience combines direction, editing, post-production, cinematography, and narrative design applied to multiple screens, alternative media, and immersive formats. In 2009, he began experimenting with video mapping, a path that led him to direct the Argentina Bicentennial mapping in 2010, a large-scale production that marked a turning point in his career. Since then, his work has been characterized by integrating tools with narrative: he incorporated Unreal Engine into his processes and developed projects in virtual reality, augmented reality, and interactive environments. Among his recent works stands out the direction of 'Dinopops', a series for Peacock (NBCUniversal) where he combined virtual production techniques with innovative storytelling. Today, he is the co-founder of Bocha, a creative artificial intelligence hub focused on storytelling. Desde allí, impulsa proyectos que mezclan arte, tecnología e ideas para marcas, productoras y artistas en diferentes países."
                   : "Álvaro Vázquez es director y realizador audiovisual con más de dos décadas explorando nuevas formas de contar historias. Su experiencia combina dirección, edición, postproducción, dirección de fotografía y diseño narrativo aplicado a múltiples pantallas, medios alternativos y formatos inmersivos. En 2009 comenzó a experimentar con video mapping, camino que lo llevó a dirigir el mapping del Bicentenario Argentino en 2010, una producción a gran escala que marcó un punto de inflexión en su carrera. Desde entonces, su trabajo se ha caracterizado por integrar herramientas con narrativa: incorporó Unreal Engine a sus procesos y desarrolló proyectos en realidad virtual, realidad aumentada y entornos interactivos. Entre sus trabajos recientes destaca la dirección de 'Dinopops', una serie para Peacock (NBCUniversal) donde combinó técnicas de producción virtual con storytelling innovador. Hoy es cofundador de Bocha, un hub de inteligencia artificial creativa enfocado en el storytelling. Desde allí, impulsa proyectos que mezclan arte, tecnología e ideas para marcas, productoras y artistas en diferentes países."
                 }
               </p>
             </div>
          </div>
        )} 

        {/* Hint text removed as interaction is now clearer with hover effects */}
      </div>

    </section>
  );
};

export default About;