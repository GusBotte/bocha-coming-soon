import React, { useState } from 'react';
// Importamos el Marquee. Si no existe este archivo, avísame para crearlo también.
import ReactiveMarquee from './ReactiveMarquee'; 

const Hero = ({ onNavigate }: any) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate('gallery');
    } else {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col justify-start items-center pt-48 md:pt-72 pb-10">
      
      {/* FONDO DEGRADADO */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
            background: 'radial-gradient(circle at 0% 50%, rgba(255, 0, 150, 0.15), transparent 50%), radial-gradient(circle at 100% 50%, rgba(0, 255, 255, 0.15), transparent 50%), #050505'
        }}
      />

      {/* 1. LOGO GIGANTE (Arriba) */}
      <div className="z-10 w-full flex justify-center mb-8 md:mb-12 px-4">
        <img 
          src="https://i.postimg.cc/RV8vQSyH/logobocha-2.png" 
          alt="Bocha Main Logo" 
          className="w-full max-w-[350px] md:max-w-[500px] h-auto object-contain"
        />
      </div>

      {/* 2. REEL + BOTÓN (Centro) */}
      <div className="z-20 flex flex-col items-center justify-center gap-8 w-full px-4 mb-12">
        
        {/* Thumbnail Video */}
        <div 
            onClick={() => setShowVideo(true)}
            className="relative w-full max-w-[320px] md:max-w-[700px] aspect-video rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 hover:border-bocha-pink/50 transition-all hover:scale-105 group"
        >
            <img 
                src="https://i.postimg.cc/6qNJ8qmR/REEL-BOCHA-3-00-00-17-08-Still001.png" 
                alt="Play Reel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 md:w-8 md:h-8 fill-white ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
        </div>

        {/* Botón */}
        <button 
            onClick={handleNavigate}
            className="bg-white text-black font-bold py-3 px-10 rounded-full hover:bg-bocha-pink transition-colors duration-300 uppercase tracking-wider text-sm md:text-base shadow-lg hover:shadow-bocha-pink/50"
        >
            View Projects
        </button>

      </div>

      {/* 3. FILMSTRIP (Abajo) */}
      <div className="w-full z-10 mt-auto mb-0">
        <ReactiveMarquee />
      </div>

      {/* MODAL VIMEO - IFRAME PURO (ESTO ES LO QUE ARREGLA EL VIDEO GRIS) */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button onClick={() => setShowVideo(false)} className="absolute top-6 right-6 text-white hover:text-bocha-pink transition-colors z-50">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-white/10 relative">
                <iframe 
                    src="https://player.vimeo.com/video/1140136544?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                    title="REEL BOCHA"
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
        </div>
      )}
    </section>
  );
};

export default Hero;