// Configuracion general de The Algorithm by Reset
// Textos, mensajes, secciones y configuracion de UI
// Cliente: San Fernando S.A. — Consumo masivo / Proteina animal

// ============================================================================
// BRAND CONFIGURATION - San Fernando S.A.
// ============================================================================
export const BRAND_CONFIG = {
  productName: 'The Algorithm',
  client: 'San Fernando S.A.',
  clientShort: 'San Fernando',
  agency: 'Reset',
  tagline: 'La Buena Familia — Inteligencia que alimenta decisiones',
  sector: 'Consumo masivo / Proteina animal',
  website: 'https://sanfernando.pe',
  ecommerce: 'https://delivery.sanfernando.pe',
  corporate: 'https://corporativo.sanfernando.pe',
  isTemplate: false,
  version: '2.0.0',

  // Colores de marca San Fernando
  // Color principal: Azul corporativo #024b98
  // Azul: confianza, fuerza, principal | Rojo: uso puntual | Blanco: limpieza, claridad
  colors: {
    primary: '#024b98',        // Azul San Fernando (color principal)
    primaryDark: '#013a75',    // Azul oscuro (hover / activo)
    secondary: '#C8102E',      // Rojo San Fernando (uso secundario/puntual)
    secondaryLight: '#0562c4', // Azul claro
    accent: '#F5A623',         // Ambar/dorado (acento calido - evoca pollo dorado)
    accentLight: '#FFC74F',    // Ambar claro
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
    darkGray: '#2D2D2D',
    success: '#22C55E',
    warning: '#F59E0B',
    danger: '#EF4444',
    // Gradiente corporativo
    gradient: 'linear-gradient(135deg, #024b98 0%, #013a75 50%, #F5A623 100%)',
  },
};

// ============================================================================
// LAYER TITLES - Titulos y descripciones de las 4 capas
// ============================================================================
export const LAYER_CONFIG = {
  data: {
    id: 'data',
    name: 'Capa de Datos',
    subtitle: 'Senales del ecosistema digital en tiempo real',
    description: 'Monitoreo de busquedas, tendencias de consumo, conversaciones en redes y comportamiento del shopper peruano',
    icon: 'Search',
    color: 'from-sf-blue to-sf-blueDark',
  },
  decision: {
    id: 'decision',
    name: 'Capa de Decision',
    subtitle: 'Inteligencia estrategica automatizada',
    description: 'Opportunity Score, audiencias objetivo y mensajes de activacion por categoria de producto',
    icon: 'Target',
    color: 'from-sf-blueDark to-sf-blueLight',
  },
  execution: {
    id: 'execution',
    name: 'Capa de Ejecucion',
    subtitle: 'Distribucion inteligente de inversion',
    description: 'Asignacion optima de presupuesto por canal, por categoria (Congelados, Embutidos, Huevos, Carnicos) y por momento del dia',
    icon: 'Zap',
    color: 'from-sf-blue to-sf-accent',
  },
  optimization: {
    id: 'optimization',
    name: 'Capa de Optimizacion',
    subtitle: 'Performance y ajustes en tiempo real',
    description: 'KPIs de Branding y Ecommerce: Alcance, Impresiones, CPM, Interacciones, Ventas, Trafico',
    icon: 'TrendingUp',
    color: 'from-sf-accent to-sf-blue',
  },
};

// ============================================================================
// KEY MESSAGES - Mensajes clave de comunicacion San Fernando
// ============================================================================
export const KEY_MESSAGES = [
  // CONGELADOS
  {
    id: 'msg_01',
    category: 'Congelados',
    message: 'Nuggets de pechuga de pollo San Fernando — mas proteina, menos tiempo. Pidelos ahora.',
    platform: ['Meta', 'TikTok', 'YouTube'],
    objective: 'Conversion Ecommerce',
    cta: 'Comprar en delivery.sanfernando.pe',
  },
  {
    id: 'msg_02',
    category: 'Congelados',
    message: 'Hamburguesas de pollo enriquecidas en hierro. El punche que tu familia necesita.',
    platform: ['Meta', 'Google Display'],
    objective: 'Branding + Conversion',
    cta: 'Descubrir',
  },
  // EMBUTIDOS
  {
    id: 'msg_03',
    category: 'Embutidos',
    message: 'Hot dog ahumado de pollo San Fernando — el favorito de los ninos en casa.',
    platform: ['Meta', 'TikTok'],
    objective: 'Branding',
    cta: 'Ver recetas',
  },
  {
    id: 'msg_04',
    category: 'Embutidos',
    message: 'Salchichas San Fernando: variedad para cada momento del dia. Desayuno, lonchera o cena.',
    platform: ['Meta', 'YouTube'],
    objective: 'Awareness',
    cta: 'Explorar',
  },
  // CARNICOS
  {
    id: 'msg_05',
    category: 'Carnicos',
    message: 'Pollo fresco San Fernando — entregado en 60 minutos, directo a tu mesa.',
    platform: ['Meta', 'Google Search'],
    objective: 'Conversion Ecommerce',
    cta: 'Pedir ahora',
  },
  {
    id: 'msg_06',
    category: 'Carnicos',
    message: 'Pechuga especial de pavita marinada: el corte premium para tu familia. San Fernando.',
    platform: ['Meta', 'YouTube', 'Display'],
    objective: 'Branding Premium',
    cta: 'Ver mas',
  },
  // HUEVOS
  {
    id: 'msg_07',
    category: 'Huevos',
    message: 'Huevos San Fernando — calidad que se nota desde la granja hasta tu mesa.',
    platform: ['Meta', 'Display'],
    objective: 'Branding',
    cta: 'Conocer',
  },
  // ECOMMERCE GENERICO
  {
    id: 'msg_08',
    category: 'Ecommerce',
    message: 'Delivery express San Fernando: mas de 30 productos en 60 minutos. Pide ahora!',
    platform: ['Google Search', 'Meta', 'TikTok'],
    objective: 'Trafico + Ventas',
    cta: 'Pedir delivery',
  },
];

// ============================================================================
// DATA SOURCES - Configuracion de fuentes de datos
// ============================================================================
export const DATA_SOURCES_CONFIG = {
  googleTrends: {
    enabled: true,
    name: 'Google Trends',
    description: 'Tendencias de busqueda de consumo masivo y proteina animal',
    icon: 'TrendingUp',
    color: 'text-sf-blue',
    bgColor: 'bg-sf-dark',
    region: 'PE',
    category: 'Food & Drink',
    interval: 'hourly',
    status: 'active',
    geo: ['Lima', 'Arequipa', 'Trujillo'],
  },
  tiktok: {
    enabled: true,
    name: 'TikTok',
    description: 'Contenido viral de recetas y hashtags trending gastronomia',
    icon: 'Video',
    color: 'text-sf-accent',
    bgColor: 'bg-sf-dark',
    scraping: 'public',
    status: 'active',
  },
  meta: {
    enabled: true,
    name: 'Meta Platforms',
    description: 'Facebook e Instagram insights consumo masivo Peru',
    icon: 'Share2',
    color: 'text-sf-blueLight',
    bgColor: 'bg-sf-dark',
    platforms: ['Facebook', 'Instagram'],
    status: 'active',
  },
  youtube: {
    enabled: true,
    name: 'YouTube',
    description: 'Videos de recetas, contenido gastronomico y reviews de productos',
    icon: 'Youtube',
    color: 'text-sf-blue',
    bgColor: 'bg-sf-dark',
    status: 'active',
  },
  ecommerce: {
    enabled: true,
    name: 'Ecommerce Delivery',
    description: 'Metricas de delivery.sanfernando.pe: ventas, ROAS, CPA',
    icon: 'ShoppingCart',
    color: 'text-sf-success',
    bgColor: 'bg-sf-dark',
    sources: ['delivery.sanfernando.pe'],
    status: 'active',
  },
  ga4: {
    enabled: true,
    name: 'Google Analytics 4',
    description: 'Trafico web y conversiones ecommerce',
    icon: 'BarChart3',
    color: 'text-sf-blueLight',
    bgColor: 'bg-sf-dark',
    mock_data: true,
    status: 'active',
  },
};

// ============================================================================
// CHANNELS - Canales de activacion
// ============================================================================
export const CHANNELS_CONFIG = {
  channels: [
    {
      id: 'meta',
      name: 'Meta Ads',
      platforms: ['Facebook', 'Instagram'],
      icon: 'Share2',
      color: 'text-sf-blueLight',
      bgColor: 'bg-sf-dark',
      // Fuente: CPM Peru ~ S/3.51 por mil (branding) — Paradero Digital PE 2025
      budgetShare: 0.40,
      primaryObjective: 'Branding + Conversion',
      formats: ['Video (Reels)', 'Carrusel productos', 'Stories', 'Catalogo dinamico'],
      kpis: ['Alcance', 'Impresiones', 'CPM', 'CTR', 'Ventas (ROAS)'],
      cpm_benchmark_soles: 3.51,
      cpc_benchmark_soles: 0.45,
      roas_target: 3.2,
    },
    {
      id: 'google',
      name: 'Google Ads',
      platforms: ['Search', 'YouTube', 'Display'],
      icon: 'Search',
      color: 'text-sf-success',
      bgColor: 'bg-sf-dark',
      budgetShare: 0.30,
      primaryObjective: 'Trafico + Ventas',
      formats: ['Search (intencion de compra)', 'YouTube TrueView', 'Display Remarketing'],
      kpis: ['Clics', 'CPC', 'Trafico al ecommerce', 'Conversiones', 'ROAS'],
      cpm_benchmark_soles: 2.80,
      cpc_benchmark_soles: 0.60,
      roas_target: 4.0,
    },
    {
      id: 'tiktok',
      name: 'TikTok Ads',
      platforms: ['TikTok'],
      icon: 'Video',
      color: 'text-sf-accent',
      bgColor: 'bg-sf-dark',
      budgetShare: 0.20,
      primaryObjective: 'Branding Jovenes + Viralizacion',
      formats: ['TopView', 'In-Feed Video', 'Branded Hashtag Challenge'],
      kpis: ['Visualizaciones', 'Engagement Rate', 'Alcance unico', 'Shares'],
      cpm_benchmark_soles: 2.20,
      cpc_benchmark_soles: 0.30,
      roas_target: 2.5,
    },
    {
      id: 'programmatic',
      name: 'Programatica / Display',
      platforms: ['Display Video 360', 'Trade Desk'],
      icon: 'Monitor',
      color: 'text-sf-blue',
      bgColor: 'bg-sf-dark',
      budgetShare: 0.10,
      primaryObjective: 'Alcance incremental / Remarketing',
      formats: ['Banner HTML5', 'Video preroll', 'Native ads'],
      kpis: ['Impresiones', 'CPM', 'Viewability', 'Frequency'],
      cpm_benchmark_soles: 1.80,
      roas_target: 2.0,
    },
  ],
};

// ============================================================================
// CATEGORIAS DE PRODUCTO - Reemplaza Sedes FitZone
// ============================================================================
export const CATEGORIAS_CONFIG = [
  { id: 1, nombre: 'Congelados', descripcion: 'Nuggets, hamburguesas, choriburguer', icon: 'Snowflake', color: '#024b98', budgetShare: 0.35 },
  { id: 2, nombre: 'Embutidos', descripcion: 'Hot dog, salchicha, chorizo, jamon, jamonada', icon: 'Package', color: '#0562c4', budgetShare: 0.30 },
  { id: 3, nombre: 'Carnicos', descripcion: 'Pollo, pavita, cerdo', icon: 'Beef', color: '#F5A623', budgetShare: 0.25 },
  { id: 4, nombre: 'Huevos', descripcion: 'Huevos frescos de granja', icon: 'Egg', color: '#22C55E', budgetShare: 0.10 },
];

// ============================================================================
// AUDIENCES - Audiencias objetivo
// ============================================================================
export const TARGET_AUDIENCES = [
  {
    id: 'ama_casa',
    name: 'Ama de Casa Digital',
    description: 'Decisora de compra del hogar, NSE B/C, Lima Metropolitana',
    age: '28-45',
    gender: 'F (60%) / M (40%)',
    nse: 'B / C',
    location: 'Lima Metropolitana (zonas 6, 7, 8 prioritarias)',
    platforms: ['Facebook', 'YouTube', 'WhatsApp'],
    behavior: ['Busca recetas', 'Compra online alimentos', 'Usa Yape/Plin', 'Compra en bodegas y supermercados'],
    interests: ['Gastronomia peruana', 'Familia', 'Nutricion infantil', 'Recetas rapidas', 'Ahorro'],
    audienceSize_meta: 3200000,
    cpa_target_ecommerce: 18.00,
    cpm_target: 3.80,
    priority: 'HIGH',
  },
  {
    id: 'joven_cocinero',
    name: 'Joven Cocinero / Millennial Foodie',
    description: '18-34 anos, urbano, influenciado por contenido gastronomico en TikTok/YouTube',
    age: '18-34',
    gender: 'F / M',
    nse: 'B / C',
    location: 'Lima, Arequipa, Trujillo',
    platforms: ['TikTok', 'Instagram', 'YouTube'],
    behavior: ['Consume videos de recetas', 'Usa delivery apps', 'Busca recetas faciles', 'Compra por impulso digital'],
    interests: ['Gastronomia', 'Healthy food', 'Quick meals', 'Nuggets', 'Hamburguesas artesanales'],
    audienceSize_meta: 4800000,
    cpa_target_ecommerce: 22.00,
    cpm_target: 4.20,
    priority: 'HIGH',
  },
  {
    id: 'comprador_ecommerce',
    name: 'Comprador Ecommerce Activo',
    description: 'Ya usa delivery de alimentos, NSE A/B, tiene historial de compra online',
    age: '25-50',
    gender: 'F / M',
    nse: 'A / B',
    location: 'Lima Metropolitana (Miraflores, San Isidro, San Borja, Surco, La Molina)',
    platforms: ['Instagram', 'Google', 'Meta'],
    behavior: ['Usa Rappi/PedidosYa regularmente', 'Compra en supermercados online', 'Alto ticket'],
    interests: ['Conveniencia', 'Calidad premium', 'Proteina saludable', 'Pavita', 'Congelados gourmet'],
    audienceSize_meta: 850000,
    cpa_target_ecommerce: 28.00,
    cpm_target: 5.50,
    priority: 'MEDIUM',
  },
  {
    id: 'empresas_vales',
    name: 'Empresas / RRHH (Vales de Pavo)',
    description: 'Responsables de RRHH en empresas medianas y grandes, compra de vales navidenos',
    age: '30-55',
    gender: 'F / M',
    nse: 'B',
    location: 'Lima',
    platforms: ['LinkedIn', 'Google Search', 'Meta'],
    behavior: ['Busca vales de pavo corporativos', 'Compra en temporada Q4'],
    interests: ['Beneficios laborales', 'Aguinaldos', 'Pavo San Fernando'],
    audienceSize_meta: 120000,
    cpa_target_ecommerce: 0,
    cpm_target: 6.00,
    priority: 'SEASONAL',
  },
];

// ============================================================================
// TIMING - Mejores momentos para pauta
// ============================================================================
export const OPTIMAL_TIMING = {
  dayparts: [
    { name: 'Manana', hours: '7:00 - 10:00', performance: 'medium', multiplier: 1.1, audience: 'Amas de casa' },
    { name: 'Almuerzo', hours: '12:00 - 14:00', performance: 'very_high', multiplier: 1.6, audience: 'Todos (decision de almuerzo)' },
    { name: 'Tarde', hours: '15:00 - 18:00', performance: 'medium', multiplier: 1.0, audience: 'Lonchera / merienda' },
    { name: 'Prime', hours: '19:00 - 22:00', performance: 'very_high', multiplier: 1.5, audience: 'Jovenes TikTok + cena familiar' },
  ],
  weekdays: [
    { name: 'Lunes', performance: 'medium', recommended: true, note: 'Planificacion semanal de compras' },
    { name: 'Martes', performance: 'high', recommended: true, note: 'Mejor dia para campanas de conversion' },
    { name: 'Miercoles', performance: 'high', recommended: true, note: 'Pico de busquedas de recetas' },
    { name: 'Jueves', performance: 'high', recommended: true, note: 'Pre-fin de semana, compras anticipadas' },
    { name: 'Viernes', performance: 'medium', recommended: true, note: 'Compras express para el fin de semana' },
    { name: 'Sabado', performance: 'high', recommended: true, note: 'Parrilladas y compras familiares' },
    { name: 'Domingo', performance: 'medium', recommended: false, note: 'Almuerzo familiar, bajo delivery' },
  ],
  seasonality: [
    { month: 'Enero', demand: 'medium', note: 'Post-fiestas, vuelta a la normalidad' },
    { month: 'Febrero-Marzo', demand: 'very_high', note: 'Inicio escolar: loncheras, embutidos, nuggets' },
    { month: 'Abril', demand: 'medium', note: 'Semana Santa: bajo consumo de carnes rojas' },
    { month: 'Mayo', demand: 'very_high', note: 'Dia de la Madre: pavita premium, cena especial' },
    { month: 'Junio', demand: 'medium', note: 'Dia del Padre, estabilizacion' },
    { month: 'Julio', demand: 'high', note: 'Fiestas Patrias: parrilladas, congelados para reuniones' },
    { month: 'Agosto-Sept', demand: 'medium', note: 'Vuelta a clases segundo semestre' },
    { month: 'Octubre-Nov', demand: 'high', note: 'Pre-navidad, vales corporativos de pavo' },
    { month: 'Diciembre', demand: 'very_high', note: 'Navidad: pavo entero, vales corporativos, pico maximo' },
  ],
};

// ============================================================================
// METRIC CARDS - Configuracion de tarjetas metricas principales (Capa 4)
// ============================================================================
export const METRIC_CARDS_CONFIG = [
  {
    id: 'kpi_reach',
    label: 'Alcance',
    sublabel: 'Personas unicas impactadas',
    icon: 'Users',
    unit: 'personas',
    format: 'number_compact',
    channel: 'all',
    objective: 'Branding',
    benchmark_mensual: 2400000,
    color: '#0562c4',
  },
  {
    id: 'kpi_impressions',
    label: 'Impresiones',
    sublabel: 'Total de exposiciones + CPM promedio',
    icon: 'Eye',
    unit: 'impresiones',
    format: 'number_compact',
    secondary_metric: 'CPM',
    secondary_unit: 'S/',
    secondary_format: 'decimal_2',
    channel: 'all',
    objective: 'Branding',
    benchmark_mensual: 12000000,
    cpm_benchmark_soles: 3.51,
    color: '#024b98',
  },
  {
    id: 'kpi_engagement',
    label: 'Interacciones',
    sublabel: 'Likes, comentarios, shares, guardados',
    icon: 'Heart',
    unit: 'interacciones',
    format: 'number_compact',
    engagement_rate_benchmark: 0.035,
    channel: 'Meta + TikTok',
    objective: 'Engagement / Branding',
    benchmark_mensual: 85000,
    color: '#F5A623',
  },
  {
    id: 'kpi_sales',
    label: 'Ventas',
    sublabel: 'Ordenes completadas en delivery.sanfernando.pe',
    icon: 'ShoppingCart',
    unit: 'S/ (soles)',
    format: 'currency_soles',
    secondary_metric: 'ROAS',
    secondary_unit: 'x',
    channel: 'Meta + Google',
    objective: 'Ecommerce',
    benchmark_mensual_soles: 185000,
    roas_target: 3.2,
    cpa_benchmark_soles: 18.00,
    color: '#22C55E',
  },
  {
    id: 'kpi_traffic',
    label: 'Trafico Web',
    sublabel: 'Visitas a sanfernando.pe + delivery.sanfernando.pe',
    icon: 'Globe',
    unit: 'sesiones',
    format: 'number_compact',
    secondary_metric: 'Tasa conversion',
    secondary_unit: '%',
    channel: 'Google + Meta + Organic',
    objective: 'Trafico',
    benchmark_mensual: 95000,
    conversion_rate_ecommerce: 0.008,
    color: '#0052CC',
  },
];

// ============================================================================
// CRM INTEGRATION - Configuracion de alertas ecommerce
// ============================================================================
export const CRM_CONFIG = {
  model: 'ecommerce',
  cpa_alert_threshold: 35.00,
  roas_alert_threshold: 2.0,
  cpm_alert_threshold: 7.00,
  frequency_alert: 4.5,
  budget_pacing_alert: 0.85,
  currency: 'PEN',
  currency_symbol: 'S/',
  alerts: {
    email: true,
    webhook: false,
    dashboard: true,
  },
};

// ============================================================================
// UI TEXT - Textos de interfaz
// ============================================================================
export const UI_TEXT = {
  loading: 'Cargando San Fernando Algorithm...',
  lastUpdate: 'Ultima actualizacion',
  systemActive: 'Sistema activo',
  noData: 'No hay datos disponibles',
  error: 'Error al cargar datos',
  retry: 'Reintentar',

  footer: {
    copyright: '2026 The Algorithm by Reset — San Fernando S.A.',
    version: 'v2.0.0',
  },

  buttons: {
    viewDetails: 'Ver detalles',
    export: 'Exportar',
    refresh: 'Actualizar',
    filter: 'Filtrar',
    expandAll: 'Mostrar todas las categorias',
    collapseAll: 'Mostrar solo top 4',
  },
};

// ============================================================================
// EXPORT ALL
// ============================================================================
export default {
  BRAND_CONFIG,
  LAYER_CONFIG,
  KEY_MESSAGES,
  DATA_SOURCES_CONFIG,
  CHANNELS_CONFIG,
  CATEGORIAS_CONFIG,
  TARGET_AUDIENCES,
  OPTIMAL_TIMING,
  METRIC_CARDS_CONFIG,
  CRM_CONFIG,
  UI_TEXT,
};
