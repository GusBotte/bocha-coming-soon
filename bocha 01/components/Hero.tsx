import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { ViewState } from '../types';
import ReactiveMarquee from './ReactiveMarquee';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col justify-start items-center pt-24 md:pt-32 pb-0">
      {/* FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 0% 50%, rgba(255, 0, 150, 0.15), transparent 50%), radial-gradient(circle at 100% 50%, rgba(0, 255, 255, 0.15), transparent 50%), #050505' }} />

      {/* LOGO HOME */}
      <div className="z-10 w-full flex justify-center mb-4 md:mb-8 -mt-6 md:mt-0 px-4">
        <img src="https://i.postimg.cc/RV8vQSyH/logobocha-2.png" alt="Bocha Main Logo" className="w-full max-w-[320px] md:max-w-[500px] h-auto object-contain" />
      </div>

      {/* REEL + BOTON (Stacked Vertically) */}
      <div className="z-20 flex flex-col items-center justify-center gap-6 w-full px-4 -mt-2">
        
        {/* REEL (Top) */}
        <div onClick={() => setShowVideo(true)} className="relative w-full max-w-[320px] md:max-w-[700px] aspect-video rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 hover:border-bocha-pink/50 transition-all hover:scale-105 group">
            <img src="https://i.postimg.cc/6qNJ8qmR/REEL-BOCHA-3-00-00-17-08-Still001.png" alt="Play Reel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 md:w-8 md:h-8 fill-white ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
        </div>

        {/* BUTTON (Bottom) */}
        <button onClick={() => onNavigate(ViewState.GALLERY)} className="bg-white text-black font-bold py-3 px-10 rounded-full hover:bg-bocha-pink transition-colors duration-300 uppercase tracking-wider text-sm md:text-base shadow-lg">
            View Projects
        </button>
      </div>

      {/* FILMSTRIP (Bottom) */}
      <div className="w-full mt-auto z-10">
        <ReactiveMarquee />
      </div>

      {/* MODAL */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button onClick={() => setShowVideo(false)} className="absolute top-6 right-6 text-white hover:text-bocha-pink transition-colors z-50">✕</button>
            <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-white/10">
                <ReactPlayer url="https://vimeo.com/1140136544" width="100%" height="100%" playing={true} controls={true} config={{ vimeo: { playerOptions: { title: 0, byline: 0, portrait: 0, color: 'FF9EB5' } } }} />
            </div>
        </div>
      )}
    </section>
  );
};
export default Hero;