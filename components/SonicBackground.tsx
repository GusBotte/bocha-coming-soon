import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as Tone from 'tone';

export interface SonicBackgroundHandle {
  triggerIntro: () => Promise<void>;
}

const SonicBackground = forwardRef<SonicBackgroundHandle, {}>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const isAudioInitRef = useRef(false);
  const hasIntroPlayedRef = useRef(false);

  // Configuration
  const PARTICLE_COUNT = 50;
  // Ethereal Pentatonic Scale
  const NOTES = ['C4', 'E4', 'G4', 'B4', 'C5', 'E5'];

  // --- AUDIO SETUP (Ambient Drone) ---
  const initAudio = () => {
    if (isAudioInitRef.current && synthRef.current) return synthRef.current;

    try {
      // 1. Master Reverb (Huge Space)
      const reverb = new Tone.Reverb({ decay: 15, wet: 0.7 }).toDestination();

      // 2. Chorus (Liquid Movement / Stereo Widening)
      const chorus = new Tone.Chorus({ 
        frequency: 0.5, 
        delayTime: 3.5, 
        depth: 0.8,
        spread: 180 
      }).connect(reverb);
      chorus.start();

      // 3. Synth (AMSynth for metallic/glassy drone textures)
      const synth = new Tone.PolySynth(Tone.AMSynth, {
        harmonicity: 2.5, // Multiplier for modulation
        oscillator: { type: "sine" },
        envelope: {
          attack: 2,    // Slow fade in (Drone style)
          decay: 1,
          sustain: 1,
          release: 5    // Long tail
        },
        modulation: {
          type: "sine",
        },
        modulationEnvelope: {
          attack: 1,
          decay: 0,
          sustain: 1,
          release: 2
        }
      }).connect(chorus);
      
      // 4. Volume (Subtle background)
      synth.volume.value = -25;

      synthRef.current = synth;
      isAudioInitRef.current = true;
      return synth;
    } catch (err) {
      console.warn("Tone.js init failed:", err);
      return null;
    }
  };

  // --- EXPOSE METHODS TO PARENT ---
  useImperativeHandle(ref, () => ({
    triggerIntro: async () => {
      if (hasIntroPlayedRef.current) return;
      
      try {
        await Tone.start();
        const synth = initAudio();
        
        if (synth) {
          console.log("Playing Ambient Intro...");
          const now = Tone.now();
          
          // Close Encounters Motif - Slowed down for Ambient Texture
          // Because attack is 2s, we overlap them significantly to create a wash
          synth.triggerAttackRelease("D4", "8n", now);
          synth.triggerAttackRelease("E4", "8n", now + 0.5);
          synth.triggerAttackRelease("C4", "8n", now + 1.0);
          synth.triggerAttackRelease("C3", "8n", now + 1.5);
          synth.triggerAttackRelease("G3", "4n", now + 2.0); 

          hasIntroPlayedRef.current = true;
        }
      } catch (e) {
        console.error("Error playing intro", e);
      }
    }
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    // Particle System
    const particles: any[] = [];
    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2, // Very slow drift
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 3 + 1,   // Tiny bokeh dots (1-4px)
      color: Math.random() > 0.5 ? '#00F0FF' : '#FF2E93',
      note: NOTES[Math.floor(Math.random() * NOTES.length)],
      opacity: Math.random() * 0.3 + 0.1, // Base subtle opacity
      pulseSpeed: Math.random() * 0.02 + 0.005,
      pulseOffset: Math.random() * Math.PI * 2
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      // Clear with transparency to allow trails if desired, 
      // but for bokeh we usually clear fully.
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Enable Additive Blending (Lights add up)
      ctx.globalCompositeOperation = 'lighter';

      particles.forEach(p => {
        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen (Endless float)
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing Opacity
        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset);
        const currentOpacity = p.opacity + (pulse * 0.1); // Subtle glimmer

        // Draw Bokeh Particle
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, currentOpacity);
        
        // Glow Effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow for performance if needed, but here we want everything to glow
        ctx.shadowBlur = 0; 
      });

      // Reset composition for other elements if we were drawing them
      ctx.globalCompositeOperation = 'source-over';
      
      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      if (synthRef.current) {
        try {
          synthRef.current.dispose();
        } catch (e) {}
      }
    };
  }, []);

  const handleInteraction = async () => {
    // Initialize if needed
    if (!hasIntroPlayedRef.current && !isAudioInitRef.current) {
      try {
        await Tone.start();
        initAudio();
      } catch(e) {}
    }

    // Play ambient note on hover/click
    if (synthRef.current) {
       // Low probability of triggering to keep it sparse/ambient
       if (Math.random() > 0.7) {
          const note = NOTES[Math.floor(Math.random() * NOTES.length)];
          // Very long release for overlapping textures
          synthRef.current.triggerAttackRelease(note, "4n");
       }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleInteraction}
      onMouseMove={handleInteraction}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'all',
        cursor: 'pointer'
      }}
    />
  );
});

export default SonicBackground;