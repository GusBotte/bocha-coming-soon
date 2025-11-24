import { Project, WorkflowItem } from './types';

// NUCLEAR OVERWRITE OF PROJECTS ARRAY - RESTORING THE 3 CORE PROJECTS
export const INITIAL_PROJECTS: Project[] = [
  // 1. LUCIANO MELLERA
  {
    id: 'voy-a-fumar',
    title: {
      en: "VOY A FUMAR",
      es: "VOY A FUMAR"
    },
    category: 'Motion',
    imageUrl: 'https://i.postimg.cc/zfZcxPTk/mvaf-00000.jpg',
    videos: [
      { title: "Quiero Stand Up", url: "https://vimeo.com/1140166613" }
    ],
    date: '2024.03.20',
    description: {
      en: "From Luciano Mellera’s live tour",
      es: "De la gira en vivo de Luciano Mellera"
    },
    shortDescription: {
      en: "From Luciano Mellera’s live tour",
      es: "De la gira en vivo de Luciano Mellera"
    },
    longDescription: {
      en: "“Voy a Fumar” is an entertainment piece produced entirely with artificial intelligence.\n\nCreated by @gusbotteok, co-founder of Bocha, it blends humor, realism, and everyday Argentine life with a cinematic aesthetic and consistent characters throughout the story.\n\nEach scene was generated with visual continuity, natural expressions, and a costumbrista tone that makes everything feel real — even though it was all created by AI.\n\nThe song itself was composed and produced using AI as well, carefully crafted to capture the spirit and rhythm of reggae.\n\nThe piece is part of a series of videos projected before each of Luciano Mellera’s live shows during his international tour, showcasing how artificial intelligence can be used as a creative tool in live entertainment.",
      es: "“Voy a Fumar” es una pieza de entretenimiento producida enteramente con inteligencia artificial.\n\nCreada por @gusbotteok, cofundador de Bocha, mezcla humor, realismo y costumbrismo argentino con una estética cinematográfica.\n\nCada escena fue generada con continuidad visual, expresiones naturales y un tono que hace que todo se sienta real, aunque fue creado por IA.\n\nLa canción también fue compuesta y producida con IA, capturando el espíritu y ritmo del reggae.\n\nLa pieza es parte de una serie de videos proyectados antes de los shows de Luciano Mellera en su gira internacional."
    },
    client: "Quiero Stand Up",
    services: ["Creativity", "AI"],
    tools: ["Nano Banana", "Imagen 4", "Photoshop", "Veo 3", "Premiere", "DaVinci Resolve", "Suno", "Eleven Labs"]
  },

  // 2. ESBUENISIMO LABS (Condor)
  {
    id: 'esbuenisimo-labs',
    title: {
      en: "EsBuenisimo Labs",
      es: "EsBuenisimo Labs"
    },
    category: 'Motion',
    imageUrl: 'https://i.postimg.cc/CL3MjMnq/thumb-condor.png',
    videoUrl: 'https://vimeo.com/1140113744', 
    date: '2023.12.02',
    description: {
      en: "Strategy + Creativity + AI for a unified aesthetic.",
      es: "Estrategia + Creatividad + IA para una estética unificada."
    },
    shortDescription: {
      en: "Strategy + Creativity + AI for a unified aesthetic.",
      es: "Estrategia + Creatividad + IA para una estética unificada."
    },
    longDescription: {
      en: "STRATEGY + CREATIVITY + AI\n\nOur DNA allows us to be a creative hub that gets involved from moment zero of the brief, structuring and directing every stage of the process.\n\nThat is exactly what we did alongside @esbuenisimolabs, achieving an execution with cross-shot consistency, directed motion, and a unified aesthetic through a hybrid AI + creative direction pipeline.",
      es: "ESTRATEGIA + CREATIVIDAD + IA\n\nNuestro ADN nos permite ser un hub creativo que se involucra desde el momento cero del brief, estructurando y dirigiendo cada etapa del proceso.\n\nEso es exactamente lo que hicimos junto a @esbuenisimolabs, logrando una ejecución con consistencia entre tomas, movimiento dirigido y una estética unificada a través de un pipeline híbrido de IA + dirección creativa."
    },
    client: "EsBuenisimo Labs",
    services: ["Strategy", "Creativity", "AI"],
    tools: ["Nano Banana", "Imagen 4", "Photoshop", "Veo 3", "Premiere", "DaVinci Resolve", "Suno", "Eleven Labs"]
  },

  // 3. MILKSHAKE IPA
  {
    id: 'milkshake-ipa',
    title: {
      en: "MILKSHAKE IPA",
      es: "MILKSHAKE IPA"
    },
    category: 'Brand',
    imageUrl: 'https://i.postimg.cc/R0qP4mXB/thumb-Milk-2.png',
    // Video URL removed as requested
    videos: [
      { title: "Team Verano", url: "https://vimeo.com/1140113315" },
      { title: "Milkshake Ipa Instagrameable", url: "https://vimeo.com/1140108634" }
    ],
    date: '2023.11.15',
    description: {
      en: "Creative Direction + AI for a manifesto with visual and narrative coherence that boosts positioning.",
      es: "Dirección creativa + IA para un manifiesto con coherencia visual y narrativa que potencie el posicionamiento."
    },
    shortDescription: {
      en: "Creative Direction + AI for a manifesto with visual and narrative coherence that boosts positioning.",
      es: "Dirección creativa + IA para un manifiesto con coherencia visual y narrativa que potencie el posicionamiento."
    },
    longDescription: {
      en: "A conceptual branding and visual identity project recreating the nostalgia of 1980s Argentine summers using generative AI imagery.\n\nWhile most IPAs are associated with colder moments, Milk Shake IPA broke the mold with an unexpected twist: a bold yet refreshing beer infused with passion fruit, maracuya, mango, vanilla, and banana.\n\nBased on that strategy, we developed a fully AI-crafted conceptual and visual campaign, inspired by the iconic Argentine beer commercials of the 1980s — warm light, exaggerated smiles, unforgettable jingles, voice-overs with the era’s signature tone, and a perfectly consistent aesthetic.\n\nEvery piece was designed to reposition the IPA within the summer mindset, blending nostalgia, innovation, and top-level creative and technical execution.",
      es: "Un proyecto conceptual de branding e identidad visual recreando la nostalgia de los veranos argentinos de los 80 usando imágenes generativas.\n\nMientras que la mayoría de las IPAs se asocian con momentos más fríos, Milk Shake IPA rompió el molde con un giro inesperado: una cerveza audaz pero refrescante infusionada con maracuyá, mango, vainilla y banana.\n\nBasados en esa estrategia, desarrollamos una campaña visual y conceptual totalmente creada con IA, inspirada en los icónicos comerciales de cerveza argentinos de los años 80 — luz cálida, sonrisas exageradas, jingles inolvidables, locuciones con el tono característico de la época y una estética perfectamente consistente.\n\nCada pieza fue diseñada para reposicionar la IPA dentro de la mentalidad de verano, mezclando nostalgia, innovación y una ejecución creativa y técnica de primer nivel."
    },
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