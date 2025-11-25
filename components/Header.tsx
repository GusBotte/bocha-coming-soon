import React, { useState } from 'react';
import { ViewState } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const handleNav = (view: ViewState) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: 'HOME', view: ViewState.HOME },
    { label: 'WORK', view: ViewState.GALLERY },
    { label: 'WORKFLOW', view: ViewState.WORKFLOW },
    { label: 'ABOUT', view: ViewState.ABOUT },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      
      {/* BARRA SUPERIOR */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 h-24 md:h-20 flex justify-between items-center pt-6 md:pt-0">
        
        {/* LOGO (Izquierda) */}
        <div className="flex-shrink-0 cursor-pointer z-50" onClick={() => handleNav(ViewState.HOME)}>
          <img 
            src="https://i.postimg.cc/RV8vQSyH/logobocha-2.png" 
            alt="Bocha Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </div>

        {/* MENÚ DESKTOP (Derecha) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNav(item.view)}
              className={`text-white font-sans text-sm tracking-[0.2em] hover:text-bocha-pink transition-colors duration-300 uppercase ${
                currentView === item.view ? 'text-bocha-pink border-b border-bocha-pink' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={toggleLanguage}
            className="border border-white/30 rounded-full w-8 h-8 flex items-center justify-center text-xs text-white hover:border-bocha-pink hover:text-bocha-pink transition-all uppercase"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <a href="#contact" className="border border-white rounded-full px-6 py-2 text-white text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            LET'S TALK
          </a>
        </nav>

        {/* HAMBURGUESA (Mobile) */}
        <button className="md:hidden text-white z-[70] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MENÚ MOBILE - Fullscreen Overlay */}
      {/* Z-Index 60 to cover header, centered content with mt adjustment for visual centering */}
      <div className={`fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Navigation Links - Shifted down by 720px (reduced slightly from 200px to fit smaller screens better) */}
        <div className="flex flex-col items-center gap-6 mb-8 mt-[720px]">
          {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => handleNav(item.view)} 
                className={`text-4xl font-logo tracking-wider uppercase transition-colors ${
                  currentView === item.view ? 'text-bocha-pink' : 'text-white hover:text-bocha-pink'
                }`}
              >
                {item.label}
              </button>
          ))}
        </div>

        {/* Mobile Footer Actions */}
        <div className="flex flex-col items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="text-white text-sm uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:border-bocha-pink hover:text-bocha-pink transition-all"
            >
              {language === 'en' ? 'Switch to Español' : 'Cambiar a English'}
            </button>
            
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-black font-bold uppercase tracking-widest px-10 py-3 rounded-full hover:bg-bocha-pink transition-colors shadow-lg shadow-white/10"
            >
              Let's Talk
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;