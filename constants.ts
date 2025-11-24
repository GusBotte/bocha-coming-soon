
import { Project, WorkflowItem } from './types';

export const projects: Project[] = [
  // 1. VOY A FUMAR
  {
    id: 'voy-a-fumar',
    title: { en: "VOY A FUMAR", es: "VOY A FUMAR" },
    category: 'MOTION',
    image: 'https://i.postimg.cc/zfZcxPTk/mvaf-00000.jpg',
    date: '2024.03.20',
    shortDescription: { en: "From Luciano Mellera’s live tour", es: "De la gira en vivo de Luciano Mellera" },
    fullDescription: {
      en: "“Voy a Fumar” is an entertainment piece produced entirely with artificial intelligence. Created by @gusbotteok, co-founder of Bocha, it blends humor, realism, and everyday Argentine life with a cinematic aesthetic.",
      es: "“Voy a Fumar” es una pieza de entretenimiento producida enteramente con inteligencia artificial. Creada por @gusbotteok, mezcla humor y realismo con una estética cinematográfica."
    },
    // LINK VIMEO NATIVO
    videos: [
      { title: "Main Video", src: "https://player.vimeo.com/video/1140166613?badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "Quiero Stand Up",
    services: ["Creativity", "AI"],
    tools: ["Nano Banana", "Imagen 4", "Photoshop", "Veo 3", "Premiere", "DaVinci Resolve", "Suno", "Eleven Labs"]
  },

  // 2. ESBUENISIMO LABS (CÓNDOR)
  {
    id: 'esbuenisimo-labs',
    title: { en: "EsBuenisimo Labs", es: "EsBuenisimo Labs" },
    category: 'MOTION',
    image: 'https://i.postimg.cc/CL3MjMnq/thumb-condor.png',
    date: '2023.12.02',
    shortDescription: { en: "Condor sarass a sarasa sarasa sarasa.", es: "Condor sarass a sarasa sarasa sarasa." },
    fullDescription: {
      en: "STRATEGY + CREATIVITY + AI. Our DNA allows us to be a creative hub that gets involved from moment zero. Executed alongside @esbuenisimolabs with a hybrid AI + creative direction pipeline.",
      es: "ESTRATEGIA + CREATIVIDAD + IA. Nuestro ADN nos permite ser un hub creativo que se involucra desde el momento cero. Ejecutado junto a @esbuenisimolabs con un pipeline híbrido de IA + dirección creativa."
    },
    // LINK VIMEO NATIVO
    videos: [
      { title: "Main Video", src: "https://player.vimeo.com/video/1140113744?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "EsBuenisimo Labs",
    services: ["Strategy", "Creativity", "AI"],
    tools: ["Nano Banana", "Imagen 4", "Photoshop", "Veo 3", "Premiere", "DaVinci Resolve", "Suno", "Eleven Labs"]
  },

  // 3. MILKSHAKE IPA (DOS VIDEOS)
  {
    id: 'milkshake-ipa',
    title: { en: "MILKSHAKE IPA", es: "MILKSHAKE IPA" },
    category: 'BRAND',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
    date: '2023.11.15',
    shortDescription: { en: "Step into the Argentine summer of the '80s recreated with AI.", es: "Un viaje al verano argentino de los 80s recreado con IA." },
    fullDescription: {
      en: "A conceptual branding and visual identity project recreating the nostalgia of 1980s Argentine summers using generative AI imagery.",
      es: "Un proyecto conceptual de branding e identidad visual recreando la nostalgia de los veranos argentinos de los 80 usando imágenes generativas."
    },
    // LINKS VIMEO NATIVOS (DOS VIDEOS)
    videos: [
      { title: "Team Verano", src: "https://player.vimeo.com/video/1140113315?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
      { title: "Instagrameable", src: "https://player.vimeo.com/video/1140108634?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "Bango",
    services: ["AI Branding", "Visual Identity"],
    tools: ["Midjourney", "Photoshop"]
  }
];

export const INITIAL_WORKFLOWS: WorkflowItem[] = [
  {
    id: '01',
    title: {
      en: "Welcome to 'Vibe-Editing'",
      es: "Bienvenido al 'Vibe-Editing'"
    },
    content: {
      en: "Vibe editing is that elusive technical leap where the screen finally moves as fast as the mind. It is the death of the 'rough cut' and the birth of effortless creative flow.",
      es: "El Vibe editing es ese salto técnico elusivo donde la pantalla finalmente se mueve tan rápido como la mente. Es la muerte del 'primer corte' y el nacimiento del flujo creativo sin esfuerzo."
    },
    fullContent: {
      en: "In the history of editing, 'waiting' has been the dominant verb. Waiting for tapes to rewind, waiting for renders, waiting for the footage to match the vision in your head.\n\nI come from the era of dual VCRs and linear tape editors. It was a tactile, brutal school of discipline where every cut was a commitment. Over the years, technology shaved off the physical labor, but the mental friction remained: you still needed to meticulously plan a linear timeline to prove an idea worked.\n\nEnter Vibe Editing.\n\nThis isn’t just a rebrand of digital editing; it is a fundamental workflow transformation driven by generative video tools like Veo. Here is the shift: traditionally, building a scene took days of gathering assets. Now, we start with nothing but a rough animatic or a raw audio track.\n\nWithin 20 minutes, we aren't just planning shots; we are seeing them.\n\nBy controlling prompts and refining how the AI interprets the 'vibe,' we enter a rapid iteration loop. It feels less like construction and more like conversation. If a scene feels stagnant, we don't scour stock libraries; we re-roll the imagination. We experiment with impossible angles and voyeuristic perspectives instantly.\n\nFor the first time, the tool isn't slowing us down. Vibe editing is that elusive technical leap where the screen finally moves as fast as the mind. It is the death of the 'rough cut' and the birth of effortless creative flow.",
      es: "En la historia de la edición, 'esperar' ha sido el verbo dominante. Esperar a que las cintas se rebobinen, esperar renders, esperar a que el material coincida con la visión en tu cabeza.\n\nVengo de la era de las videocaseteras duales y editores lineales. Era una escuela de disciplina táctil y brutal donde cada corte era un compromiso. Con los años, la tecnología eliminó el trabajo físico, pero la fricción mental permaneció: aún necesitabas planificar meticulosamente un timeline lineal para probar que una idea funcionaba.\n\nEntra el Vibe Editing.\n\nEsto no es solo un rebrand de la edición digital; es una transformación fundamental del flujo de trabajo impulsada por herramientas de video generativo como Veo. Aquí está el cambio: tradicionalmente, construir una escena tomaba días recolectando recursos. Ahora, comenzamos con nada más que un animatic crudo o una pista de audio.\n\nEn 20 minutos, no solo estamos planeando tomas; las estamos viendo.\n\nAl controlar los prompts y refinar cómo la IA interpreta la 'vibra', entramos en un bucle de iteración rápida. Se siente menos como construcción y más como conversación. Si una escena se siente estancada, no buscamos en librerías de stock; 're-rolleamos' la imaginación. Experimentamos con ángulos imposibles y perspectivas voyeuristas al instante.\n\nPor primera vez, la herramienta no nos frena. El Vibe editing es ese salto técnico elusivo donde la pantalla finalmente se mueve tan rápido como la mente. Es la muerte del 'primer corte' y el nacimiento del flujo creativo sin esfuerzo."
    },
    quote: {
      en: "Vibe Editing turns the tedious process of finding footage into a creative conversation. It allows us to iterate on a mood in minutes, finally closing the gap between the idea and the screen.",
      es: "El Vibe Editing convierte el tedioso proceso de buscar material en una conversación creativa. Nos permite iterar sobre un estado de ánimo en minutos, cerrando finalmente la brecha entre la idea y la pantalla."
    },
    keyTakeaway: {
      en: "From Vibe Coding to Vibe Editing, the gap between beginner and pro is vanishing. We are entering the era of 'Vibe Everything' a time when the only limit to what you can build is how clearly you can imagine it.",
      es: "Desde el Vibe Coding hasta el Vibe Editing, la brecha entre principiante y profesional se está desvaneciendo. Estamos entrando en la era del 'Vibe Everything', un momento en el que el único límite para lo que puedes construir es cuán claramente puedes imaginarlo."
    },
    tags: ['AI Workflow', 'Generative Video', 'Vibe-Editing', 'Future of Edit'],
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: {
      en: 'Efficient File Structure',
      es: 'Estructura de Archivos Eficiente'
    },
    content: {
      en: 'Our studio standard for naming files: YYMMDD_Client_Project_AssetType_Version.',
      es: 'Nuestro estándar de estudio para nombrar archivos: YYMMDD_Cliente_Proyecto_Tipo_Version.'
    },
    fullContent: {
      en: `A disorganized folder structure is the death of creativity. When you spend 20 minutes looking for a file, you lose your flow state. \n\nOur standard is simple but rigid: \n1. YYMMDD prefix ensures chronological sorting. \n2. Client Name keeps work segmented. \n3. Project Name defines the specific job. \n4. Asset Type (e.g., PRJ, AEP, PSD) tells you what it is before you open it.`,
      es: `Una estructura de carpetas desorganizada es la muerte de la creatividad. Cuando pasas 20 minutos buscando un archivo, pierdes tu estado de flujo. \n\nNuestro estándar es simple pero rígido: \n1. El prefijo YYMMDD asegura el orden cronológico. \n2. Nombre del Cliente mantiene el trabajo segmentado. \n3. Nombre del Proyecto define el trabajo específico. \n4. Tipo de Activo (ej. PRJ, AEP, PSD) te dice qué es antes de abrirlo.`
    },
    quote: {
      en: "A disorganized folder structure is the death of creativity. When you spend 20 minutes looking for a file, you lose your flow state.",
      es: "Una estructura de carpetas desorganizada es la muerte de la creatividad. Cuando pierdes 20 minutos buscando un archivo, pierdes tu estado de flujo."
    },
    keyTakeaway: {
      en: "Organization is the invisible foundation of speed. Name your files correctly, or lose them forever.",
      es: "La organización es el cimiento invisible de la velocidad. Nombra tus archivos correctamente o piérdelos para siempre."
    },
    tags: ['Productivity', 'Organization']
  },
  {
    id: '3',
    title: {
      en: 'Prompt Engineering for Concept Art',
      es: 'Ingeniería de Prompts para Concept Art'
    },
    content: {
      en: 'Using Gemini to generate quick mood boards before starting the actual design phase.',
      es: 'Usando Gemini para generar mood boards rápidos antes de comenzar la fase de diseño real.'
    },
    fullContent: {
      en: `Generative AI has revolutionized our pre-production phase. Instead of spending days scouring Pinterest, we can now visualize specific lighting conditions and compositions in minutes. \n\nThe key is in the adjectives. We don't just say "neon city"; we say "cyberpunk metropolis, volumetric fog, neon pink lighting, octane render, 8k, hyper-realistic". This gives the model enough context to produce usable references.`,
      es: `La IA generativa ha revolucionado nuestra fase de preproducción. En lugar de pasar días buscando en Pinterest, ahora podemos visualizar condiciones de iluminación y composiciones específicas en minutos. \n\nLa clave está en los adjetivos. No decimos solo "ciudad de neón"; decimos "metrópolis cyberpunk, niebla volumétrica, iluminación rosa neón, render octane, 8k, hiperrealista". Esto le da al modelo suficiente contexto para producir referencias utilizables.`
    },
    quote: {
      en: "We don't just say 'neon city'; we say 'cyberpunk metropolis, volumetric fog, neon pink lighting'. Adjectives are the new brushstrokes.",
      es: "No decimos simplemente 'ciudad de neón'; decimos 'metrópolis cyberpunk, niebla volumétrica, luz rosa neón'. Los adjetivos son las nuevas pinceladas."
    },
    keyTakeaway: {
      en: "The quality of the output is directly correlated to the specificity of the input. Learn to speak the machine's language.",
      es: "La calidad del resultado está directamente correlacionada con la especificidad de la entrada. Aprende a hablar el idioma de la máquina."
    },
    tags: ['AI', 'Concept', 'Gemini'],
    imageUrl: 'https://picsum.photos/seed/aiart/600/400'
  }
];

export const UI_TRANSLATIONS = {
  en: {
    viewProjects: 'View Projects',
  },
  es: {
    viewProjects: 'Ver Proyectos',
  }
};
