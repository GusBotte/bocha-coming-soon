import React, { useRef } from 'react';
import { Send } from 'lucide-react';
import SonicBackground, { SonicBackgroundHandle } from './SonicBackground';

const Contact: React.FC = () => {
  const sonicRef = useRef<SonicBackgroundHandle>(null);

  // Unlock Audio Context on any interaction with this section
  const handleUnlockAudio = () => {
    // Trigger the Intro Sequence via the child component
    if (sonicRef.current) {
      sonicRef.current.triggerIntro();
    }
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-[600px] py-20 md:py-32 px-4 bg-[#0a0a0a] border-t border-white/5 overflow-hidden flex flex-col justify-center"
      onClick={handleUnlockAudio}
      onKeyDown={handleUnlockAudio}
    >
      
      {/* --- LAYER 0: SONIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <SonicBackground ref={sonicRef} />
      </div>

      {/* --- LAYER 1: CONTENT --- */}
      {/* pointer-events-none allows clicks to pass through empty spaces to the canvas */}
      <div className="max-w-4xl mx-auto text-center relative z-10 pointer-events-none w-full">
        
        {/* Title */}
        <h2 className="font-logo text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] mb-12">
          Let's prompt<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bocha-cyan to-bocha-pink">what's next</span>
        </h2>

        {/* Form Container - Enable pointer events here so inputs work */}
        <div className="glass-card p-8 md:p-12 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-sm max-w-2xl mx-auto shadow-2xl pointer-events-auto">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Input */}
            <div className="group text-left">
              <label className="text-xs font-bold uppercase text-bocha-muted ml-2 mb-2 block">Get in touch</label>
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-bocha-cyan focus:bg-white/10 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="group text-left">
              <textarea 
                rows={4} 
                placeholder="Contanos tu idea..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-bocha-cyan focus:bg-white/10 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full py-5 mt-2 bg-gradient-to-r from-bocha-pink to-bocha-purple hover:from-bocha-cyan hover:to-blue-600 rounded-xl text-white font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,46,147,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group">
              Enviar <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;