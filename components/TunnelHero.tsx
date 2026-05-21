import React, { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX, ArrowDown } from 'lucide-react';
import { ViewState } from '../types';
import ReactiveMarquee from './ReactiveMarquee';
import NeuralBackground from './NeuralBackground';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_TRANSLATIONS } from '../constants';

interface TunnelHeroProps {
  onNavigate: (view: ViewState) => void;
}

const TunnelHero: React.FC<TunnelHeroProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // State
  const [progress, setProgress] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // --- SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the container
      const totalScrollable = height - windowHeight;
      const scrolled = -top;
      
      let p = scrolled / totalScrollable;
      p = Math.max(0, Math.min(1, p)); // Clamp between 0 and 1
      
      setProgress(p);

      // Audio Volume Mapping (Crescendo)
      if (audioRef.current && audioEnabled) {
        const targetVolume = 0.2 + (p * 0.8);
        audioRef.current.volume = Math.min(1, targetVolume);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [audioEnabled]);

  // --- AUDIO TOGGLE ---
  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/10/05/audio_68629e8c24.mp3');
      audioRef.current.loop = true;
    }
    
    if (!audioEnabled) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch(e => console.log("Audio blocked", e));
      setAudioEnabled(true);
    } else {
      audioRef.current.pause();
      setAudioEnabled(false);
    }
  };

  // Calculate Horizontal Translation
  // We want to move roughly 250vw to 300vw to show all content
  const horizontalMove = progress * 350; // Move 350vw to the left

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      
      {/* VIEWPORT: Fixed Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]"></div>
        <div className="absolute inset-0 z-0 opacity-30">
           <NeuralBackground scrollVelocity={progress * 100} />
        </div>

        {/* Audio Control */}
        <button 
          onClick={toggleAudio}
          className="absolute top-24 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-bocha-cyan hover:text-black transition-all backdrop-blur-md"
        >
          {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>

        {/* THE HORIZONTAL TRAIN */}
        <div 
          className="flex h-full items-center will-change-transform"
          style={{ transform: `translateX(-${horizontalMove}vw)` }}
        >
          
          {/* 1. THE TUNNEL (Filmstrip) */}
          {/* Width 120vw to ensure it covers screen before moving */}
          <div className="w-[120vw] h-screen shrink-0 relative z-10 flex items-center overflow-hidden border-r border-white/10">
             <ReactiveMarquee className="h-screen w-full scale-125 opacity-60 hover:opacity-100 transition-opacity duration-700" />
             
             {/* Intro Overlay */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center" style={{ opacity: Math.max(0, 1 - progress * 4) }}>
                   <img 
                    src="https://i.postimg.cc/RV8vQSyH/logobocha-2.png" 
                    alt="Bocha"
                    className="w-[60vw] max-w-[600px] mx-auto mb-8 animate-float drop-shadow-2xl"
                   />
                   <div className="animate-bounce text-white flex flex-col items-center gap-2">
                      <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                      <ArrowDown className="w-6 h-6" />
                   </div>
                </div>
             </div>
          </div>

          {/* 2. THE PASSING SIGN (Parallax Text) */}
          {/* Moves slightly faster than the train container for parallax effect */}
          <div 
            className="shrink-0 px-[20vw] z-20 flex items-center relative"
            style={{ transform: `translateX(-${progress * 20}vw)` }}
          >
             <h1 className="text-[15vh] md:text-[25vh] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white font-logo uppercase whitespace-nowrap leading-none tracking-tighter drop-shadow-2xl opacity-90">
               Where human <span className="text-stroke text-transparent">imagination</span> fuses with AI
             </h1>
          </div>

          {/* 3. THE LIGHT AT THE END (Reel) */}
          <div className="w-[100vw] h-screen shrink-0 flex flex-col items-center justify-center z-30 relative">
             {/* Glow behind */}
             <div className="absolute w-[50vw] h-[50vw] bg-bocha-cyan/10 rounded-full blur-[150px] animate-pulse-glow pointer-events-none"></div>

             <div className="relative z-10 scale-110">
                <button 
                 onClick={() => onNavigate(ViewState.WORKFLOW)}
                 className="group relative w-[70vw] max-w-[800px] aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/20 hover:border-bocha-cyan transition-all duration-500 hover:scale-[1.02] mb-12"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 filter brightness-[0.6] group-hover:brightness-100"
                    style={{ backgroundImage: "url('https://i.postimg.cc/6qNJ8qmR/REEL-BOCHA-3-00-00-17-08-Still001.png')" }}
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group-hover:bg-bocha-cyan group-hover:text-black transition-all duration-500 shadow-[0_0_50px_rgba(0,240,255,0.3)]">
                       <Play className="w-10 h-10 md:w-14 md:h-14 fill-current ml-2" />
                     </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                     <h2 className="font-logo text-4xl md:text-6xl text-white uppercase">Showreel 2024</h2>
                  </div>
               </button>

               <div className="text-center">
                 <button 
                   onClick={() => onNavigate(ViewState.GALLERY)}
                   className="px-16 py-6 bg-white text-black font-bold text-xl uppercase tracking-[0.2em] rounded-full hover:bg-bocha-pink hover:text-white hover:shadow-[0_0_50px_rgba(255,46,147,0.6)] transition-all duration-300 transform hover:-translate-y-2"
                 >
                   {t.viewProjects}
                 </button>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TunnelHero;