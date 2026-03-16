// Keywords y hashtags para San Fernando S.A. - Consumo masivo / Proteina animal Peru
// Configuracion completa para busquedas y monitoreo social

// ============================================================================
// KEYWORDS POR CATEGORIA — Google Trends & Search
// ============================================================================
export const KEYWORDS = {
  brand: [
    'San Fernando',
    'San Fernando pollo',
    'San Fernando embutidos',
    'delivery San Fernando',
    'San Fernando nuggets',
    'San Fernando hot dog',
    'La Buena Familia',
    'sanfernando.pe',
    'delivery.sanfernando.pe',
  ],

  // CONGELADOS
  congelados: [
    'nuggets de pollo',
    'nuggets pechuga pollo',
    'hamburguesas de pollo',
    'hamburguesas congeladas Peru',
    'nuggets con chia',
    'hot dog pavita',
    'choriburguer',
    'productos congelados Peru',
    'congelados para ninos',
    'milanesa de pollo congelada',
  ],

  // EMBUTIDOS
  embutidos: [
    'hot dog pollo Peru',
    'salchicha de pollo',
    'jamonada Peru',
    'chorizo parrillero Peru',
    'jamon sandwich Peru',
    'Frankfurt Peru',
    'embutidos de pollo',
    'salchicha para lonchera',
    'embutidos sin octogonos',
  ],

  // CARNICOS
  carnicos: [
    'pollo fresco Lima',
    'pollo para el brasa Lima',
    'pechuga de pollo precio',
    'delivery pollo Lima',
    'pollo entero Lima',
    'pavita peruana',
    'medallon pavita',
    'cerdo fresco Lima',
    'chuleta de cerdo',
    'pechuga marinada',
  ],

  // HUEVOS
  huevos: [
    'huevos frescos Lima',
    'huevos San Fernando',
    'huevos por mayor Lima',
    'precio huevos Peru 2025',
    'huevos nutritivos',
  ],

  // ECOMMERCE
  ecommerce: [
    'delivery pollo Lima',
    'comprar pollo online Lima',
    'delivery San Fernando',
    'pedir pollo a domicilio',
    'delivery carnes Lima',
    'delivery express carnes',
  ],

  // RECETAS / CONTENT (oportunidad de SEO y TikTok)
  recetas: [
    'recetas con pollo faciles',
    'receta nuggets caseros',
    'receta hamburguesa pollo',
    'recetas con pavita',
    'recetas peruanas con pollo',
    'como preparar hot dog',
    'lonchera ninos Peru',
    'recetas rapidas Peru',
  ],

  // COMPETIDORES (monitoreo)
  competitors: [
    'Redondos pollo',
    'Otto Kunz embutidos',
    'Braedt embutidos',
    'La Segoviana',
    'Rico Pollo Arequipa',
    'Razzeto embutidos',
    'La Calera huevos',
    'Santa Elena pollo',
  ],
};

// ============================================================================
// HASHTAGS POR PLATAFORMA
// ============================================================================
export const HASHTAGS = {
  // INSTAGRAM - San Fernando branded
  instagram_branded: [
    '#SanFernando',
    '#LaBuenaFamilia',
    '#SanFernandoPeru',
    '#AlimentarMejor',
    '#PolloSanFernando',
    '#EmbutidosSanFernando',
    '#NuggetsSanFernando',
    '#PunchangLaVida',
  ],

  // INSTAGRAM - Categoria / sector
  instagram_category: [
    '#RecetasPeruanas',
    '#ComiendoRicoPeru',
    '#GastronomiaPeru',
    '#FoodPeru',
    '#RecetasFaciles',
    '#ComidasPeruanas',
    '#PolloFresco',
    '#LonchesPeruanos',
    '#DesayunoPeruano',
    '#CenaFamiliarPeru',
    '#ProteinaSana',
    '#ComidaCasera',
  ],

  // INSTAGRAM - Volumen alto (amplificacion)
  instagram_volume: [
    '#Peru',
    '#Lima',
    '#Food',
    '#Foodie',
    '#Familia',
    '#RecetaDelDia',
    '#CocinandoEnCasa',
    '#PlatosPeruanos',
    '#CocinaPeruana',
  ],

  // TIKTOK - Principal
  tiktok_main: [
    '#SanFernando',
    '#PolloSanFernando',
    '#RecetasTikTok',
    '#FoodTikTok',
    '#RecetaFacil',
    '#CocinandoContigo',
    '#LaBuenaFamilia',
    '#NuggetsDePechuga',
    '#DeliciosaFamilia',
  ],

  // TIKTOK - Tendencia Peru (volumen + relevancia)
  tiktok_peru_trending: [
    '#PeruFood',
    '#LimaFood',
    '#ComidasPeruanas',
    '#RecetasPeruanas',
    '#FamiliaPeruana',
    '#MamaPeruana',
    '#CocinaPeru',
    '#fyp',
    '#parati',
    '#viral',
    '#Peru',
  ],

  // TIKTOK - Nichos de contenido
  tiktok_niches: [
    '#ComidaRapida',
    '#CenaRica',
    '#LoncheFamiliar',
    '#HotDogReceta',
    '#HamburguesaPollo',
    '#NuggetsReceta',
    '#EmbRecipe',
    '#PolloConTodo',
    '#CocinaFacilPeru',
  ],

  // AUDIENCIAS PERSONALIZADAS META — Intereses para targeting
  meta_interest_audiences: [
    'Gastronomia peruana',
    'Cocina en casa',
    'Nutricion infantil',
    'Recetas rapidas',
    'Supermercados en Peru',
    'Compras online Peru',
    'Yape',
    'Rappi',
    'PedidosYa',
    'Familia peruana',
    'Ama de casa',
    'Lonchera escolar',
  ],

  // AUDIENCIAS DE COMPORTAMIENTO META
  meta_behavior_audiences: [
    'Compradores frecuentes online (Peru)',
    'Usuarios de apps de delivery',
    'Engaged shoppers',
    'Padres con hijos 3-12 anos',
    'Visitantes de sanfernando.pe (remarketing)',
    'Anadieron al carrito sin comprar (remarketing)',
    'Compradores similares (Lookalike 2%)',
  ],
};

// Combinar todos los hashtags principales
export const ALL_HASHTAGS = [
  ...HASHTAGS.instagram_branded,
  ...HASHTAGS.instagram_category,
  ...HASHTAGS.tiktok_main,
  ...HASHTAGS.tiktok_peru_trending,
];

// Combinar keywords para Google Trends
export const ALL_KEYWORDS = [
  ...KEYWORDS.brand,
  ...KEYWORDS.congelados,
  ...KEYWORDS.embutidos,
  ...KEYWORDS.carnicos,
  ...KEYWORDS.ecommerce,
];

// Keywords de alta intencion (conversion ecommerce)
export const HIGH_INTENT_KEYWORDS = [
  ...KEYWORDS.ecommerce,
  'delivery pollo Lima',
  'comprar nuggets online',
  'pedir San Fernando delivery',
  'delivery carnes a domicilio',
  'comprar embutidos online Lima',
  'delivery express alimentos Lima',
];

// Configuracion para Google Trends
export const GOOGLE_TRENDS_CONFIG = {
  keywords: ALL_KEYWORDS.slice(0, 15),
  region: 'PE',
  geo: {
    lima: 'PE-LIM',
    arequipa: 'PE-ARE',
    trujillo: 'PE-LAL',
  },
  category: 71, // Food & Drink
  timeframe: 'now 7-d',
  refreshInterval: 3600000,
};

// Configuracion para TikTok
export const TIKTOK_CONFIG = {
  hashtags: [
    ...HASHTAGS.tiktok_main,
    ...HASHTAGS.tiktok_peru_trending.slice(0, 5),
    ...HASHTAGS.tiktok_niches.slice(0, 3),
  ],
  region: 'PE',
  metrics: ['views', 'likes', 'shares', 'comments'],
  trending_threshold: 10000,
  content_types: [
    { name: 'Recetas rapidas 30-60s', category: 'Recipe tutorial' },
    { name: 'Cocina casera peruana', category: 'Home cooking' },
    { name: 'Lonchera creativa', category: 'Kids lunch' },
    { name: 'Parrillada en casa', category: 'BBQ content' },
    { name: 'Unboxing delivery', category: 'Delivery experience' },
  ],
};

// Configuracion para Meta (Facebook/Instagram)
export const META_CONFIG = {
  hashtags: [
    ...HASHTAGS.instagram_branded,
    ...HASHTAGS.instagram_category,
    ...HASHTAGS.instagram_volume,
  ],
  pages: [
    'SanFernandoOficial',
    'RedondosPeru',
    'OttoKunzPeru',
    'BraedtPeru',
  ],
  interests: [
    'Gastronomia peruana',
    'Cocina en casa',
    'Nutricion infantil',
    'Recetas rapidas',
    'Compras online Peru',
    'Familia peruana',
  ],
};

// Fuentes de informacion consumo masivo Peru
export const INDUSTRY_SOURCES = [
  {
    name: 'Kantar Worldpanel',
    url: 'https://www.kantar.com/campaigns/brand-footprint',
    type: 'market_research',
    scraping: false,
  },
  {
    name: 'NielsenIQ Peru',
    url: 'https://nielseniq.com',
    type: 'market_research',
    scraping: false,
  },
  {
    name: 'El Comercio - Economia',
    url: 'https://elcomercio.pe/economia',
    type: 'news',
    scraping: true,
  },
  {
    name: 'Gestion - Empresas',
    url: 'https://gestion.pe/economia/empresas',
    type: 'business',
    scraping: true,
  },
  {
    name: 'CAPECE Peru',
    url: 'https://capece.org.pe',
    type: 'ecommerce_association',
    scraping: false,
  },
];

export default {
  KEYWORDS,
  HASHTAGS,
  ALL_HASHTAGS,
  ALL_KEYWORDS,
  HIGH_INTENT_KEYWORDS,
  GOOGLE_TRENDS_CONFIG,
  TIKTOK_CONFIG,
  META_CONFIG,
  INDUSTRY_SOURCES,
};
