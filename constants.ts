
import { Project, WorkflowItem } from './types';

export const projects: Project[] = [
  // HOT SALE MX
  {
    id: 'hot-sale-mx',
    title: { en: "HOT SALE MX", es: "HOT SALE MX" },
    category: 'AI AD',
    image: 'https://i.postimg.cc/BvbZxQx3/4.jpg',
    date: '2024.05.20',
    shortDescription: { en: "It's a go or no go", es: "Sale o no sale" },
    fullDescription: {
      en: "For this piece it was fundamental to maintain a high standard of craft, achieving consistency of both the character and the product throughout the entire visual journey, with aesthetic coherence, continuity, and credibility in each transition.\n\nThrough a hybrid pipeline of generation, direction, and vibe-editing, we built a visual rhythm designed so the viewer enters the fantasy alongside the protagonist.\n\nFurthermore, both the voiceovers and the soundtrack were developed with AI, treating the piece as a unified whole where image, voice, music, and timing coexist in balance.",
      es: "Para esta pieza era fundamental sostener un estándar alto de craft, logrando consistencia tanto del personaje como del producto a lo largo de todo el recorrido visual, con coherencia estética, continuidad y credibilidad en cada transición.\n\nA través de un pipeline híbrido de generación, dirección y vibe-editing, construimos un ritmo visual pensado para que el espectador entre en la fantasía junto al protagonista.\n\nAdemás, tanto las locuciones como la locución y banda sonora fueron desarrolladas con IA, trabajando la pieza como una unidad donde imagen, voz, música y timing conviven en equilibrio."
    },
    videos: [
      { title: "Main Video", src: "https://player.vimeo.com/video/1192325442?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "Hot Sale MX",
    services: ["Creativity", "AI", "Production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // LA NACIÓN
  {
    id: 'la-nacion',
    title: { en: "LA NACIÓN", es: "LA NACIÓN" },
    category: 'AI AD',
    image: 'https://i.postimg.cc/8kXcrbFv/thumb.png',
    date: '2025.12.01',
    shortDescription: {
      en: "A journey through the first 30 years of lanacion.com",
      es: "Un viaje a través de los primeros 30 años de lanacion.com"
    },
    fullDescription: {
      en: "A project that allowed us to combine AI agent training with meticulous attention to the details of each era: from layouts and devices to the fashion and visual mood of every moment.\n\nAll of this came together in an edit designed to let the story flow with rhythm and continuity, traversing time without losing identity.",
      es: "Un proyecto que nos permitió combinar entrenamiento de agentes IA con mucho cuidado por los detalles de cada época: desde los layouts y los dispositivos hasta las modas y el clima visual de cada momento.\n\nTodo esto se unió en una edición pensada para que la historia fluya con ritmo y continuidad, recorriendo el tiempo sin perder identidad."
    },
    videos: [
      { title: "Main Video", src: "https://player.vimeo.com/video/1148951348?badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "La Nación",
    services: ["AI generated videos", "Editing", "Sound Design", "Music"],
    tools: ["Gemini", "Nano Banana", "Veo 3.1", "Kling", "Suno", "Photoshop", "Premiere", "After Effects", "DaVinci Resolve"]
  },

  // QUINI 6
  {
    id: 'quini-6',
    title: { en: "QUINI 6", es: "QUINI 6" },
    category: 'AI CAMPAIGN',
    image: 'https://i.postimg.cc/Zn8JT9hP/3.jpg',
    date: '2024.05.20',
    shortDescription: { en: "Fantasy comes into play.", es: "La fantasía entra en juego." },
    fullDescription: {
      en: "The production challenge was to build a coherent visual universe across the pieces, maintaining the same cinematic treatment, editing rhythm, and camera language, even while working on completely different worlds and characters.\n\nTo achieve this, we developed a hybrid pipeline of generation, direction, and vibe-editing that allowed us to control aesthetic continuity, narrative consistency, and visual sensitivity frame by frame.\n\nAdditionally, each story featured original music generated specifically for its emotional universe, while the voices were crafted through a hybrid system of human voiceover + AI processing to retain naturalness, identity, and closeness.",
      es: "El desafío de producción fue construir un universo visual coherente entre las piezas, manteniendo un mismo tratamiento cinematográfico, ritmo de edición y lenguaje de cámara, aun trabajando sobre mundos y personajes completamente distintos.\n\nPara lograrlo desarrollamos un pipeline híbrido de generación, dirección y vibe-editing que nos permitió controlar continuidad estética, consistencia narrativa y sensibilidad visual cuadro a cuadro.\n\nAdemás, cada historia contó con música original generada específicamente para su universo emocional, mientras que las voces se trabajaron a través de un sistema híbrido de locución humana + procesamiento con IA para conservar naturalidad, identidad y cercanía."
    },
    videos: [
      { title: "Story 1", src: "https://player.vimeo.com/video/1194042031?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479", isVertical: true },
      { title: "Story 2", src: "https://player.vimeo.com/video/1194042133?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479", isVertical: true },
      { title: "Story 3", src: "https://player.vimeo.com/video/1194043040?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479", isVertical: true },
      { title: "Main Horizontal", src: "https://player.vimeo.com/video/1193780685?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479", isVertical: false }
    ],
    client: "Quini 6",
    services: ["Creativity", "AI", "Production", "Music", "Voiceover"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // MANI KING
  {
    id: 'mani-king',
    title: { en: "MANI KING", es: "MANI KING" },
    category: 'AI AD',
    image: 'https://i.postimg.cc/Kj9x0hyx/thumbnail-1788391797149.jpg',
    date: '2024.06.01',
    shortDescription: { en: "Everything is better when you're natural", es: "Todo es mejor cuando sos natural" },
    fullDescription: {
      en: "This piece presented a very interesting challenge: to create a credible, hyper-realistic character capable of speaking with total naturalness, maintaining precise lipsync throughout the scene.\n\nBut that wasn't the only challenge. The character had to interact with a giant pack of Maniking, whose label we had to update to incorporate a redesign that had not yet hit the market. And there was another fundamental element: the peanut butter had to look indulgent, tempting, and absolutely real.\n\nWe started by building the visual universe and defining the protagonist: a character who had to feel human and natural in their acting, but deliberately a bit forced in their look and wardrobe, as the script requested.\n\nAfter testing different workflows and AI tools, we arrived at a combination that allowed us to control each of these elements and build the piece we needed: we open with a very indulgent product shot, develop credible and natural acting, and close with a dynamic demo that provides rhythm and completes the story.",
      es: "Esta pieza nos planteaba un desafío muy interesante: crear un personaje creíble, hiperrealista y capaz de hablar con total naturalidad, manteniendo un lipsync preciso durante toda la escena.\n\nPero no era el único reto. El personaje debía interactuar con un pack gigante de Maniking, cuya etiqueta tuvimos que actualizar para incorporar un rediseño que todavía no había salido al mercado. Y había otro elemento fundamental: la pasta de maní tenía que verse indulgente, tentadora y absolutamente real.\n\nComenzamos construyendo el universo visual y definiendo al protagonista: un personaje que debía sentirse humano y natural en su acting, pero deliberadamente un poco forzado en su look y vestuario, tal como pedía el guion.\n\nDespués de probar diferentes workflows y herramientas de IA, llegamos a una combinación que nos permitió controlar cada uno de estos elementos y construir la pieza que necesitábamos: abrimos con un plano de producto bien indulgente, desarrollamos un acting creíble y natural, y cerramos con una demo dinámica que aporta ritmo y completa el relato."
    },
    videos: [
      { title: "Main Video", src: "https://www.youtube.com/embed/NEkbSFQ4Dxw" }
    ],
    client: "Mani King",
    services: ["Creativity", "AI", "Production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // PUMA ENERGY
  {
    id: 'puma-energy',
    title: { en: "PUMA ENERGY", es: "PUMA ENERGY" },
    category: 'AI AD',
    image: 'https://i.postimg.cc/8kLyMmmX/thumbnail-1788392609579.jpg',
    date: '2024.06.01',
    shortDescription: { en: "1 promo, 4 markets and a workflow that optimizes production energy.", es: "1 promo, 4 mercados y un workflow que optimice la energía de producción." },
    fullDescription: {
      en: "The challenge of this project was to create a piece that could be adapted to four markets in Latin America: Honduras, Nicaragua, Guatemala, and El Salvador, modifying the car models and the final shot of each version.\n\nThat is why, from the beginning, we planned the production so that the AI-generated images would integrate into a post-production process that gave us greater control over timing, acting synchronization, and vehicle replacement.\n\nWe worked on the characters' acting separately, built the base scenario of the main scene, and generated each of the cars, taking care of every last detail so they were faithful to the real models.\n\nFor the closing, we created the scene of the character leaving in one of the vehicles and, from there, developed the mirrored versions needed to maintain exactly the same acting, framing, and timing, changing only the car corresponding to each market.\n\nThanks to this hybrid workflow, combining AI generation and post-production, we were able to produce four consistent commercials in record time, adapted to the needs of each country.\n\nProject carried out together with paradise.la",
      es: "El desafío de este proyecto era crear una pieza que pudiera adaptarse a cuatro mercados de Latinoamérica: Honduras, Nicaragua, Guatemala y El Salvador, modificando los modelos de autos y la toma final de cada versión.\n\nPor eso, desde el comienzo pensamos la producción para que las imágenes generadas con IA se integraran a un proceso de postproducción que nos diera mayor control sobre los tiempos, la sincronización de los actings y el reemplazo de los vehículos.\n\nTrabajamos por separado el acting de los personajes, construimos el escenario base de la escena principal y generamos cada uno de los autos, cuidando hasta el último detalle para que fueran fieles a los modelos reales.\n\nPara el cierre, creamos la escena del personaje yéndose en uno de los vehículos y, a partir de ella, desarrollamos las versiones espejadas necesarias para mantener exactamente el mismo acting, encuadre y timing, cambiando únicamente el auto correspondiente a cada mercado.\n\nGracias a este workflow híbrido, combinando generación con IA y postproducción, pudimos producir en tiempo récord cuatro comerciales consistentes entre sí y adaptados a las necesidades de cada país.\n\nProyecto realizado junto a paradise.la"
    },
    videos: [
      { title: "01 PUMA PRIS HONDURAS", src: "https://www.youtube.com/embed/EysgeecwNIc" },
      { title: "PUMA PRIS x4", src: "https://www.youtube.com/embed/Py6DoJbJ6Bs" }
    ],
    client: "Puma Energy",
    services: ["Creativity", "AI", "Production", "Post-production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // KFC
  /*
  {
    id: 'kfc',
    title: { en: "KFC", es: "KFC" },
    category: 'AI CAMPAIGN',
    image: 'https://i.postimg.cc/XYN3TJv5/thumbnail-1788393670061.png',
    date: '2024.06.01',
    shortDescription: { en: "Everything is better with sauce.", es: "Todo es mejor con salsa." },
    fullDescription: {
      en: "The objective of this campaign was clear: to create pieces that felt real and could naturally coexist in the TikTok or Instagram scroll.\n\nBut behind that naturalness, there were several challenges. The products had to look exactly like the real ones, we had to update the logos of those that did not yet have mockups, and above all, ensure that the drop and behavior of the sauce felt truly natural.\n\nTo achieve this, we developed a workflow that allowed us to optimize the prompts and first define the characteristics of the sauce and the fidelity of each product. With those variables controlled, we then moved on to the generation of characters, situations, and scenes.\n\nAnd there was an additional challenge: each piece had to work in different markets in the region. That is why we also developed their mirrored versions, keeping everything exactly the same, except for the characters.",
      es: "El objetivo de esta campaña era claro: crear piezas que se sintieran reales y pudieran convivir de manera natural en el scroll de TikTok o Instagram.\n\nPero detrás de esa naturalidad había varios desafíos. Los productos debían verse exactamente como los reales, teníamos que actualizar los logos de aquellos que todavía no contaban con mockups y, sobre todo, lograr que la caída y el comportamiento de la salsa se sintieran verdaderamente naturales.\n\nPara conseguirlo, desarrollamos un workflow que nos permitió optimizar los prompts y definir primero las características de la salsa y la fidelidad de cada producto. Con esas variables controladas, avanzamos luego sobre la generación de personajes, situaciones y escenas.\n\nY había un desafío adicional: cada pieza debía funcionar en diferentes mercados de la región. Por eso, desarrollamos también sus versiones espejadas, manteniendo todo exactamente igual, salvo los personajes."
    },
    videos: [
      { title: "KFC DUNKED", src: "https://www.youtube.com/embed/jblzXrBfveI", isVertical: true }
    ],
    client: "KFC",
    services: ["Creativity", "AI", "Production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },
  */

  // LA REPOSERA GAMER
  {
    id: 'reposera-gamer',
    title: { en: "LA REPOSERA GAMER", es: "LA REPOSERA GAMER" },
    category: 'AI CONCEPT',
    image: 'https://i.postimg.cc/R0GCdHw5/thumb-2.png',
    date: '2025.01.10',
    shortDescription: {
      en: "The beach chair every teenager needs.",
      es: "La reposera que todo adolescente necesita."
    },
    fullDescription: {
      en: "A project where we designed a device from scratch, integrating 3D design, product logic, and acting into a single narrative universe.\n\nThrough vibe editing, prompt generation to minimize iterations, and fine control of digital acting, we achieved a piece that blends humor, design, and technology without losing coherence or identity.",
      es: "Un proyecto donde diseñamos un dispositivo desde cero, integrando diseño 3D, lógica de producto y actuación en un mismo universo narrativo.\n\nA través de vibe editing, generación de prompts para minimizar iteraciones y control fino del acting digital, llegamos a una pieza que cruza humor, diseño y tecnología sin perder coherencia ni identidad."
    },
    videos: [
      { title: "Main Video", src: "https://player.vimeo.com/video/1162330057?badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "Bocha",
    services: ["Creativity", "Production", "AI"],
    tools: ["Nano Banana", "Imagen 4", "Photoshop", "Veo 3", "Premiere", "DaVinci Resolve", "Suno", "Eleven Labs"]
  },

  // DIAGNÓSTICO MAIPÚ
  {
    id: 'diagnostico-maipu',
    title: { en: "DIAGNÓSTICO MAIPÚ", es: "DIAGNÓSTICO MAIPÚ" },
    category: 'AI AD',
    image: 'https://i.postimg.cc/FKYmYC47/thumb2.jpg',
    date: '2024.05.20',
    shortDescription: { en: "Lifescan: See today what matters tomorrow.", es: "Lifescan: Ver hoy lo que importa mañana." },
    fullDescription: {
      en: "The challenge was to construct scenes within practically impossible environments to film traditionally, due to the technical and security limitations of highly complex MRI and CT scanners.\n\nThrough a hybrid pipeline of AI, direction, and vibe-editing, we managed to recreate situations, camera movements, and points of view that allowed the viewer to get closer to the real experience of the study, without losing naturalness or sensitivity.",
      es: "El desafío fue construir escenas dentro de entornos prácticamente imposibles de filmar de manera tradicional, debido a las limitaciones técnicas y de seguridad de resonadores y tomógrafos de alta complejidad.\n\nA través de un pipeline híbrido de IA, dirección y vibe-editing, logramos recrear situaciones, movimientos de cámara y puntos de vista que permitieran acercar al espectador a la experiencia real del estudio, sin perder naturalidad ni sensibilidad."
    },
    videos: [
      { title: "Main Video", src: "https://www.youtube.com/embed/DKu5pDoDvik" }
    ],
    client: "Diagnóstico Maipú",
    services: ["Creativity", "AI", "Production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // BANCO NACIÓN / MASTERCARD
  {
    id: 'banco-nacion',
    title: { en: "BANCO NACIÓN / MASTERCARD", es: "BANCO NACIÓN / MASTERCARD" },
    category: 'AI AD',
    image: 'https://i.postimg.cc/tTTrFKDc/thumbnail-1788392239972.jpg',
    date: '2024.06.01',
    shortDescription: { en: "The bank that supports the passion of Argentines", es: "El banco que banca la pasión de los argentinos" },
    fullDescription: {
      en: "Football is, for Argentines, an unparalleled passion. And the challenge of this piece was to transmit it with hyper-realistic craft, starting from a single real element: a GIF of Messi with the ball.\n\nFrom that material, we built the entire universe of the piece around it: we generated the fans, the situations, details of their legs in action, and the different scenarios, onto which the credit cards were later integrated in post-production.\n\nFrom a small fragment of a real image, a complete piece was born, built with AI and post-production to amplify one of the greatest passions of Argentines.\n\nProject carried out together with paradise.la",
      es: "El fútbol es, para los argentinos, una pasión inigualable. Y el desafío de esta pieza fue transmitirla con un craft hiperrealista, partiendo de un único elemento real: un GIF de Messi con la pelota.\n\nA partir de ese material construimos alrededor todo el universo de la pieza: generamos los hinchas, las situaciones, detalles de sus piernas en acción y los diferentes escenarios, sobre los que luego se integraron en postproducción las tarjetas de crédito.\n\nDe un pequeño fragmento de imagen real nació así una pieza completa, construida con IA y postproducción para amplificar una de las pasiones más grandes de los argentinos.\n\nProyecto realizado junto a paradise.la"
    },
    videos: [
      { title: "Main Video", src: "https://www.youtube.com/embed/Zxftf0eRTDY" }
    ],
    client: "Banco Nación",
    services: ["Creativity", "AI", "Production", "Post-production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // QUINI 6 (Shit Happens)
  {
    id: 'quini-6-shit-happens',
    title: { en: "QUINI 6", es: "QUINI 6" },
    category: 'AI CAMPAIGN',
    image: 'https://i.postimg.cc/25Mshwvj/thumbnail-1788469778029.png',
    date: '2024.06.01',
    shortDescription: { en: "Shit Happens", es: "Shit Happens" },
    fullDescription: {
      en: "For this campaign we needed to portray everyday accidents with humor.\n\nWe created hyper-realistic and relatable characters capable of making each situation feel recognizable, and we developed a common narrative structure for all pieces: small accidents where technology always ends up taking the worst part.\n\nTo enhance the humor, we built each story pushing the tension to its peak and, right there, we break the scene with the unexpected appearance of a jingle-style band, energetic and exaggerated, transforming the accident into the punchline of each piece.",
      es: "Para esta campaña necesitábamos retratar accidentes cotidianos desde el humor.\n\nCreamos personajes hiperrealistas y cercanos, capaces de hacer que cada situación se sintiera reconocible, y desarrollamos una estructura narrativa común para todas las piezas: pequeños accidentes en los que la tecnología siempre termina llevándose la peor parte.\n\nPara potenciar el humor, construimos cada historia llevando la tensión hasta su punto máximo y, justo ahí, quebramos la escena con la aparición inesperada de una banda estilo jingle, enérgica y exagerada, que transforma el accidente en el remate de cada pieza."
    },
    videos: [
      { title: "Quini 6 Gato", src: "https://www.youtube.com/embed/hMpufIK99ow", isVertical: true },
      { title: "QUINI 6 PELOTA", src: "https://www.youtube.com/embed/kajFsH0AsIc", isVertical: true }
    ],
    client: "Quini 6",
    services: ["Creativity", "AI", "Production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // COMPENSATIONLY
  {
    id: 'compensationly',
    title: { en: "COMPENSATIONLY", es: "COMPENSATIONLY" },
    category: 'AI AD',
    image: 'https://i.postimg.cc/DfPVw3X6/thumb4.png',
    date: '2024.05.20',
    shortDescription: { en: "Based on a true story.", es: "Basado en una historia real." },
    fullDescription: {
      en: "The challenge in this piece was finding a delicate balance: building a cinematic narrative with tension and intrigue, inspired by real cases, without losing humanity and empathy for the characters.\n\nThrough a hybrid pipeline of AI, direction, and vibe-editing, we developed a piece with uniform visual treatment, cinematic staging, and an emotional atmosphere that allowed us to sustain the suspense while still feeling close and human.",
      es: "El desafío en esta pieza estuvo en encontrar un equilibrio delicado: construir una narrativa cinematográfica con tensión e intriga, inspirada en casos reales, sin perder humanidad ni empatía hacia los personajes.\n\nA través de un pipeline híbrido de IA, dirección y vibe-editing, desarrollamos una pieza con tratamiento visual uniforme, puesta cinematográfica y una atmósfera emocional que permitiera sostener el suspenso sin dejar de sentirse cercana y humana."
    },
    videos: [
      { title: "Main Video", src: "https://www.youtube.com/embed/Q6uCwX2EXjI" }
    ],
    client: "Compensationly",
    services: ["Creativity", "AI", "Production"],
    tools: ["Generative AI", "Vibe-Editing"]
  },

  // ME VOY A FUMAR
  {
    id: 'voy-a-fumar',
    title: { en: "ME VOY A FUMAR", es: "ME VOY A FUMAR" },
    category: 'MUSIC VIDEO',
    image: 'https://i.postimg.cc/zfZcxPTk/mvaf-00000.jpg',
    date: '2024.03.20',
    shortDescription: { en: "From Luciano Mellera’s live show", es: "Del show en vivo de Luciano Mellera" },
    fullDescription: {
      en: "“Me voy a Fumar” is an entertainment piece produced entirely with artificial intelligence.\n\nCreated by @gusbotteok, co-founder of Bocha, it blends humor, realism, and everyday Argentine life with a cinematic aesthetic and consistent characters throughout the story.\n\nEach scene was generated with visual continuity, natural expressions, and a costumbrista tone that makes everything feel real — even though it was all created by AI.\n\nThe song itself was composed and produced using AI as well, carefully crafted to capture the spirit and rhythm of reggae.\n\nThe piece is part of a series of videos projected before each of Luciano Mellera’s live shows during his international tour, showcasing how artificial intelligence can be used as a creative tool in live entertainment.",
      es: "“Me voy a Fumar” es una pieza de entretenimiento producida enteramente con inteligencia artificial.\n\nCreada por @gusbotteok, cofundador de Bocha, mezcla humor, realismo y costumbrismo argentino con una estética cinematográfica y personajes consistentes a lo largo de la historia.\n\nCada escena fue generada con continuidad visual, expresiones naturales y un tono costumbrista que hace que todo se sienta real, aunque todo fue creado por IA.\n\nLa canción también fue compuesta y producida con IA, cuidadosamente diseñada para capturar el espíritu y el ritmo del reggae.\n\nLa pieza es parte de una serie de videos proyectados antes de cada show en vivo de Luciano Mellera durante su gira internacional, mostrando cómo la inteligencia artificial puede usarse como una herramienta creativa en el entretenimiento en vivo."
    },
    videos: [
      { title: "Main Video", src: "https://player.vimeo.com/video/1140166613?badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "Quiero Stand Up",
    services: ["Creativity", "AI"],
    tools: ["Nano Banana", "Imagen 4", "Photoshop", "Veo 3", "Premiere", "DaVinci Resolve", "Suno", "Eleven Labs"]
  },

  // ESBUENISIMO LABS (CÓNDOR)
  {
    id: 'esbuenisimo-labs',
    title: { en: "EsBuenisimo Labs", es: "EsBuenisimo Labs" },
    category: 'BRAND VIDEO',
    image: 'https://i.postimg.cc/CL3MjMnq/thumb-condor.png',
    date: '2023.12.02',
    shortDescription: { en: "STRATEGY + CREATIVITY + AI.", es: "ESTRATEGIA + CREATIVIDAD + IA." },
    fullDescription: {
      en: "Our DNA allows us to be a creative hub that gets involved from moment zero of the brief, structuring and directing every stage of the process.\n\nThat is exactly what we did alongside the Chilean SEO Agency ESBUENISIMO LABS, taking a very interesting fact as a starting point: The Andean Condor is the animal that flies the highest and can sustain its flight for the longest time, taking advantage of currents to reduce effort.\n\nFrom an SEO perspective, we reinterpreted this as Esbuenísimo Labs' central mission: helping brands leverage their own currents—optimization, strategic content, intelligent link building—to scale positions with the least economic effort and maximum performance.\n\nBased on that strategy, we developed a technical and careful execution, based on a hybrid AI + creative direction pipeline. We worked with:\n\n- Cross-shot consistency: ensuring visual continuity between shots generated by different models and seeds.\n- Directed motion: designing animation curves and movements that accompany the idea of ascent, stability, and altitude.\n- Unified aesthetic: through color control, style persistence, lookup tables, and prompts trained by custom agents to maintain visual identity.",
      
      es: "Nuestro ADN nos permite ser un hub creativo que se involucra desde el momento 0 del brief, estructurando y dirigiendo cada etapa del proceso.\n\nEso mismo hicimos junto a Agencia SEO en Chile ESBUENISIMO LABS, tomando como punto de partida un dato muy interesante: El Cóndor Andino es el animal que vuela más alto y que puede sostener su vuelo durante más tiempo, aprovechando las corrientes para reducir el esfuerzo.\n\nDesde una mirada SEO, lo reinterpretamos como la misión central de Esbuenísimo Labs: ayudar a que las marcas aprovechen sus propias corrientes —optimización, contenido estratégico, link building inteligente— para escalar posiciones con el menor esfuerzo económico y el máximo rendimiento.\n\nA partir de esa estrategia desarrollamos una ejecución técnica y cuidada, basada en un pipeline híbrido IA + dirección creativa. Trabajamos con:\n\n- Consistencia cross-shot: garantizando continuidad visual entre planos generados por distintos modelos y seeds.\n- Motion direccionado: diseñando curvas de animación y movimientos que acompañen la idea de ascenso, estabilidad y altura.\n- Estética unificada: mediante control de color, persistencia de estilo, lookup tables y prompts entrenados por agentes propios, para mantener identidad visual."
    },
    videos: [
      { title: "Main Video", src: "https://player.vimeo.com/video/1140113744?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "EsBuenisimo Labs",
    services: ["Strategy", "Creativity", "AI"],
    tools: ["Nano Banana", "Imagen 4", "Photoshop", "Veo 3", "Premiere", "DaVinci Resolve", "Suno", "Eleven Labs"]
  },

  // MILKSHAKE IPA (DOS VIDEOS)
  {
    id: 'milkshake-ipa',
    title: { en: "CERVEZA LIEFELD", es: "CERVEZA LIEFELD" },
    category: 'AI CAMPAIGN',
    image: 'https://i.postimg.cc/1twv25k0/thumb-Milk-2.png',
    date: '2023.11.15',
    shortDescription: { en: "Step into the Argentine summer of the '80s recreated with AI.", es: "Un viaje al verano argentino de los 80s recreado con IA." },
    fullDescription: {
      en: "While most IPAs are associated with colder moments, Milk Shake IPA broke the mold with an unexpected twist: a bold yet refreshing beer infused with passion fruit, maracuya, mango, vanilla, and banana.\n\nBased on that strategy, we developed a fully AI-crafted conceptual and visual campaign, inspired by the iconic Argentine beer commercials of the 1980s — warm light, exaggerated smiles, unforgettable jingles, voice-overs with the era’s signature tone, and a perfectly consistent aesthetic.\n\nEvery piece was designed to reposition the IPA within the summer mindset, blending nostalgia, innovation, and top-level creative and technical execution.",
      es: "Mientras que la mayoría de las IPAs se asocian con momentos más fríos, Milk Shake IPA rompió el molde con un giro inesperado: una cerveza audaz pero refrescante infusionada con maracuyá, mango, vainilla y banana.\n\nBasados en esa estrategia, desarrollamos una campaña conceptual y visual totalmente creada con IA, inspirada en los icónicos comerciales de cerveza argentinos de los años 80: luz cálida, sonrisas exageradas, jingles inolvidables, locuciones con el tono característico de la época y una estética perfectamente consistente.\n\nCada pieza fue diseñada para reposicionar la IPA dentro de la mentalidad veraniega, mezclando nostalgia, innovación y una ejecución creativa y técnica de alto nivel."
    },
    videos: [
      { title: "Team Verano", src: "https://player.vimeo.com/video/1140113315?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
      { title: "Instagrameable", src: "https://player.vimeo.com/video/1140108634?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" }
    ],
    client: "Leefield",
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
