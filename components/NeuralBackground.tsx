import React, { useEffect, useRef } from 'react';

interface NeuralBackgroundProps {
  scrollVelocity?: number; // Used to determine streak length/speed
}

const NeuralBackground: React.FC<NeuralBackgroundProps> = ({ scrollVelocity = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Configuration
    const particleCount = width < 768 ? 40 : 100;
    const particles: { x: number; y: number; size: number; color: string; speed: number }[] = [];

    const colors = [
      'rgba(0, 240, 255, 0.4)', // Cyan
      'rgba(255, 46, 147, 0.4)', // Pink
      'rgba(157, 0, 255, 0.4)'   // Purple
    ];

    // Initialize Particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 2 + 0.5 // Base passive speed
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Vertigo Factor: 
      // When scrolling down (positive velocity), we want particles to move UP (negative Y) faster.
      // We use a base movement + scroll influence.
      const scrollInfluence = Math.abs(scrollVelocity) * 2; 
      const warpFactor = 1 + scrollInfluence;

      for (let i = 0; i < particleCount; i++) {
        let p = particles[i];
        
        // Move Upwards
        p.y -= p.speed * warpFactor;

        // Reset if off screen top
        if (p.y < 0) {
          p.y = height + Math.random() * 100; // Respawn below screen
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        
        // Draw "Streaks" (Motion Blur) if moving fast
        if (warpFactor > 2) {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + (p.size * warpFactor * 2)); // Tail points down
          ctx.stroke();
        } else {
          // Simple Dot
          ctx.fillStyle = p.color;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [scrollVelocity]); 

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
    />
  );
};

export default NeuralBackground;