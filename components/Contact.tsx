import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 w-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
      
      {/* Título Principal (Estilo Plano/Flat) */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-5xl md:text-7xl font-sans font-black text-white tracking-tighter leading-none uppercase mb-2">
          LET'S PROMPT
        </h2>
        <h2 className="text-5xl md:text-7xl font-sans font-black text-bocha-pink tracking-tighter leading-none uppercase">
          WHAT'S NEXT
        </h2>
      </div>

      {/* Contenedor del Formulario */}
      <div className="w-full max-w-md z-10 bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 shadow-2xl">
        <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-6">
          GET IN TOUCH
        </p>
        
        {/* Formulario conectado a Formspree */}
        <form 
          action="https://formspree.io/f/mjkdwekg" 
          method="POST" 
          className="flex flex-col gap-4"
        >
          {/* Input Email */}
          <div className="group">
            <input 
              type="email" 
              name="email" 
              placeholder="Tu email" 
              required
              className="w-full bg-[#111] text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-bocha-pink transition-colors font-sans placeholder:text-white/30"
            />
          </div>

          {/* Input Mensaje */}
          <div className="group">
            <textarea 
              name="message" 
              placeholder="Contanos tu idea..." 
              rows={4} 
              required
              className="w-full bg-[#111] text-white border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-bocha-pink transition-colors font-sans resize-none placeholder:text-white/30"
            />
          </div>

          {/* Botón Enviar */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#FF9EB5] to-[#6b6bff] text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all transform hover:scale-[1.02] uppercase tracking-wider flex items-center justify-center gap-2 mt-2 shadow-lg shadow-bocha-pink/20"
          >
            ENVIAR 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </div>

    </section>
  );
};

export default Contact;