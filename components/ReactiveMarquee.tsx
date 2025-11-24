import React, { useEffect, useRef } from 'react';

interface ReactiveMarqueeProps {
  className?: string;
}

const ReactiveMarquee: React.FC<ReactiveMarqueeProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth } = window;
      const centerX = innerWidth / 2;
      const mouseX = e.clientX;
      const dist = Math.abs(mouseX - centerX);
      const maxDist = innerWidth / 2;
      
      // Calculate speed: closer to edge = faster (lower duration)
      // Base duration (center) = 40s
      // Min duration (edge) = 5s
      const percentage = dist / maxDist; // 0 at center, 1 at edge
      
      // Calculate duration: 40s at center, decreasing to 5s at edges
      const duration = 40 - (percentage * 35);
      
      containerRef.current.style.setProperty('--marquee-duration', `${Math.max(5, duration)}s`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`overflow-hidden relative ${className || 'w-full h-[140px] my-8 md:my-12'}`}
      ref={containerRef}
      style={{ 
        '--marquee-duration': '40s',
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
      } as React.CSSProperties}
    >
      {/* Track - Contains duplicated images for seamless loop */}
      <div 
        className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused] h-full" 
        style={{ animationDuration: 'var(--marquee-duration)' }}
      >
         {/* Image 1 */}
         <img 
            src="https://i.postimg.cc/qMyHHsg8/bocha-largo-00000.jpg" 
            alt="Creative Stream" 
            className="h-full w-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-80" 
         />
         {/* Image 2 (Duplicate) */}
         <img 
            src="https://i.postimg.cc/qMyHHsg8/bocha-largo-00000.jpg" 
            alt="Creative Stream" 
            className="h-full w-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-80" 
         />
         {/* Image 3 (Safety buffer for wide screens) */}
         <img 
            src="https://i.postimg.cc/qMyHHsg8/bocha-largo-00000.jpg" 
            alt="Creative Stream" 
            className="h-full w-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-80" 
         />
      </div>
    </div>
  );
};

export default ReactiveMarquee;