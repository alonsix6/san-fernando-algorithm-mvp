// Mock Data para San Fernando S.A. - Dashboard Demo Comercial
// Datos simulados realistas para consumo masivo / proteina animal en Peru

// ============================================================================
// MOCK GA4 DATA - Google Analytics 4 simulado
// ============================================================================
export const MOCK_GA4_DATA = {
  sessions: {
    total: 87400,
    users: 68200,
    new_users: 51800,
    returning: 16400,
    avg_session_duration: '2:14',
    pages_per_session: 3.1,
    bounce_rate: 48,
  },

  top_pages: [
    { page: '/categorias/congelados', title: 'Congelados', views: 18400, bounce_rate: 42, avg_time: '2:35' },
    { page: '/categorias/embutidos', title: 'Embutidos', views: 14800, bounce_rate: 45, avg_time: '2:18' },
    { page: '/categorias/pollo', title: 'Pollo Fresco', views: 12600, bounce_rate: 50, avg_time: '1:55' },
    { page: '/categorias/todo', title: 'Todos los Productos', views: 11200, bounce_rate: 38, avg_time: '3:02' },
    { page: '/categorias/pavita', title: 'Pavita', views: 8400, bounce_rate: 44, avg_time: '2:12' },
    { page: '/blog', title: 'Blog / Recetas', views: 7200, bounce_rate: 55, avg_time: '3:45' },
  ],

  conversions: {
    ecommerce_purchases: 9340,
    revenue_soles: 168000,
    avg_ticket_soles: 18.0,
    add_to_cart: 18600,
    checkout_started: 12400,
    conversion_rate: 0.0075,
  },

  traffic_sources: {
    paid_social: { percentage: 35.5, sessions: 31000, revenue_soles: 58000, roas: 2.9, label: 'Meta Ads' },
    paid_search: { percentage: 25.2, sessions: 22000, revenue_soles: 52000, roas: 4.1, label: 'Google Ads' },
    organic_search: { percentage: 21.2, sessions: 18500, revenue_soles: 28000, label: 'Busqueda Organica' },
    tiktok_ads: { percentage: 10.5, sessions: 9200, revenue_soles: 18000, roas: 2.4, label: 'TikTok Ads' },
    direct: { percentage: 5.5, sessions: 4800, revenue_soles: 9000, label: 'Directo' },
    referral: { percentage: 2.2, sessions: 1900, revenue_soles: 3000, label: 'Referral / Otros' },
  },

  devices: {
    mobile: { percentage: 76, sessions: 66424, conversion_rate: 0.0068, label: 'Mobile' },
    desktop: { percentage: 19, sessions: 16606, conversion_rate: 0.0094, label: 'Desktop' },
    tablet: { percentage: 5, sessions: 4370, conversion_rate: 0.0071, label: 'Tablet' },
  },

  funnel: {
    reach_impressions: 11650000,
    reach_unique: 2380000,
    website_visits: 87400,
    product_views: 42000,
    add_to_cart: 18600,
    checkout_started: 12400,
    purchases: 9340,
    notes: 'Caida critica entre Add to Cart y Checkout (33%). Optimizar UX mobile.',
  },
};

// ============================================================================
// PERFORMANCE KPIs - Metricas principales del dashboard (Marzo 2026)
// ============================================================================
export const PERFORMANCE_KPIS = {
  period: 'Marzo 2026',

  // BRANDING
  reach: {
    value: 2380000,
    target: 2400000,
    pacing: 0.99,
    vs_lastMonth: 0.08,
    unit: 'personas unicas',
    label: 'Alcance',
    description: 'Personas unicas impactadas en todos los canales',
  },

  impressions: {
    value: 11650000,
    target: 12000000,
    pacing: 0.97,
    cpm_actual: 3.86,
    cpm_benchmark: 3.51,
    vs_lastMonth: 0.05,
    unit: 'impresiones',
    label: 'Impresiones',
    description: 'Total de exposiciones publicitarias',
  },

  // ENGAGEMENT
  interactions: {
    value: 78400,
    target: 85000,
    engagement_rate: 0.033,
    breakdown: {
      likes: 52000,
      comments: 8200,
      shares: 11400,
      saves: 6800,
    },
    top_content: 'Video receta Nuggets de Pechuga + Ensalada (TikTok) — 380K views',
    vs_lastMonth: 0.12,
    label: 'Interacciones',
    description: 'Likes, comentarios, shares y guardados',
  },

  // VENTAS (ECOMMERCE)
  sales: {
    value_soles: 168000,
    target_soles: 185000,
    pacing: 0.91,
    orders: 9340,
    avg_ticket_soles: 18.0,
    roas: 2.9,
    roas_target: 3.2,
    cpa_soles: 19.3,
    cpa_target: 18.0,
    conversion_rate: 0.0075,
    by_category: [
      { category: 'Congelados', revenue: 72000, orders: 3800, share: 0.43 },
      { category: 'Embutidos', revenue: 42000, orders: 2600, share: 0.25 },
      { category: 'Carnicos', revenue: 46000, orders: 2400, share: 0.27 },
      { category: 'Huevos', revenue: 8000, orders: 540, share: 0.05 },
    ],
    label: 'Ventas Ecommerce',
    description: 'Ordenes completadas en delivery.sanfernando.pe',
    currency: 'S/',
  },

  // TRAFICO WEB
  traffic: {
    sessions: 87400,
    target: 95000,
    pacing: 0.92,
    by_source: [
      { source: 'Paid Social (Meta)', sessions: 31000, share: 0.355 },
      { source: 'Paid Search (Google)', sessions: 22000, share: 0.252 },
      { source: 'Organic Search', sessions: 18500, share: 0.212 },
      { source: 'TikTok Ads', sessions: 9200, share: 0.105 },
      { source: 'Direct', sessions: 4800, share: 0.055 },
      { source: 'Referral / Otros', sessions: 1900, share: 0.022 },
    ],
    bounce_rate: 0.48,
    avg_session_duration: '2:14 min',
    label: 'Trafico Web',
    description: 'Visitas a sanfernando.pe + delivery.sanfernando.pe',
  },
};

// ============================================================================
// OPPORTUNITY SCORE - Indice de oportunidad San Fernando
// ============================================================================
export const OPPORTUNITY_SCORE = {
  overall: 78,
  label: 'Oportunidad Alta',
  recommendation: 'Activar campana de Congelados en TikTok y Meta — demanda de nuggets y hamburguesas de pollo en crecimiento. Marzo-Abril: temporada de inicio escolar activa.',
  components: [
    {
      name: 'Tendencia de Busqueda',
      score: 82,
      trend: '+14%',
      description: 'Busquedas de "nuggets de pollo" y "delivery pollo Lima" en alza sostenida',
    },
    {
      name: 'Volumen en Redes',
      score: 74,
      trend: '+22%',
      description: 'Conversaciones en TikTok sobre recetas con pollo y embutidos en maximo de 6 meses',
    },
    {
      name: 'Presion Competidora',
      score: 61,
      trend: '-8%',
      description: 'Redondos redujo pauta digital en febrero. Ventana tactica disponible.',
    },
    {
      name: 'Senal Ecommerce',
      score: 85,
      trend: '+31%',
      description: 'Trafico a delivery.sanfernando.pe crecio 31% semana previa. Alta intencion de compra.',
    },
    {
      name: 'Estacionalidad',
      score: 79,
      trend: 'Creciente',
      description: 'Inicio escolar (Marzo): alta demanda de loncheras. Embutidos y nuggets en pico estacional.',
    },
  ],
};

// ============================================================================
// CATEGORIAS PERFORMANCE - Rendimiento por categoria de producto
// ============================================================================
export const CATEGORIAS_PERFORMANCE = [
  {
    id: 1,
    nombre: 'Congelados',
    demanda: 'Alta',
    revenue_soles: 72000,
    orders: 3800,
    share: 0.43,
    cpa_soles: 16.50,
    roas: 4.1,
    trend: '+18%',
    top_products: ['Nuggets de Pechuga', 'Hamburguesa de Pollo', 'Choriburguer'],
    note: 'Mayor margen y potencial ecommerce. Nuggets + Hamburguesas.',
  },
  {
    id: 2,
    nombre: 'Embutidos',
    demanda: 'Alta',
    revenue_soles: 42000,
    orders: 2600,
    share: 0.25,
    cpa_soles: 21.00,
    roas: 2.8,
    trend: '+12%',
    top_products: ['Hot Dog Ahumado', 'Salchicha de Pollo', 'Chorizo Parrillero'],
    note: 'Mayor volumen. Hot dog, Salchicha, Chorizo. Defensa vs Sigma.',
  },
  {
    id: 3,
    nombre: 'Carnicos',
    demanda: 'Alta',
    revenue_soles: 46000,
    orders: 2400,
    share: 0.27,
    cpa_soles: 18.50,
    roas: 3.4,
    trend: '+8%',
    top_products: ['Pollo Entero', 'Pechuga de Pollo', 'Pavita Marinada'],
    note: 'Pollo fresco + Pavita. Ecommerce express 60min.',
  },
  {
    id: 4,
    nombre: 'Huevos',
    demanda: 'Media',
    revenue_soles: 8000,
    orders: 540,
    share: 0.05,
    cpa_soles: 24.00,
    roas: 1.8,
    trend: '+3%',
    top_products: ['Huevos x 15', 'Huevos x 30'],
    note: 'Construccion de marca en categoria commodity. Oportunidad baja explotada.',
  },
];

// ============================================================================
// BUDGET ALLOCATION - Distribucion de presupuesto mensual (soles)
// ============================================================================
export const BUDGET_ALLOCATION = {
  total_monthly_soles: 450000,
  currency: 'PEN',
  currency_symbol: 'S/',
  period: 'monthly',

  by_channel: [
    { channel: 'Meta Ads', budget: 180000, share: 0.40, color: '#1877F2' },
    { channel: 'Google Ads', budget: 135000, share: 0.30, color: '#34A853' },
    { channel: 'TikTok Ads', budget: 90000, share: 0.20, color: '#010101' },
    { channel: 'Programatica', budget: 45000, share: 0.10, color: '#FF6B35' },
  ],

  by_category: [
    { category: 'Congelados', budget: 157500, share: 0.35, color: '#024b98',
      note: 'Mayor margen y potencial ecommerce. Nuggets + Hamburguesas.' },
    { category: 'Embutidos', budget: 135000, share: 0.30, color: '#0562c4',
      note: 'Mayor volumen. Hot dog, Salchicha, Chorizo. Defensa vs Sigma.' },
    { category: 'Carnicos', budget: 112500, share: 0.25, color: '#F5A623',
      note: 'Pollo fresco + Pavita. Ecommerce express 60min.' },
    { category: 'Huevos', budget: 45000, share: 0.10, color: '#22C55E',
      note: 'Construccion de marca en categoria commodity. Oportunidad baja explotada.' },
  ],

  by_objective: [
    { objective: 'Branding / Alcance', budget: 180000, share: 0.40 },
    { objective: 'Ecommerce / Ventas', budget: 157500, share: 0.35 },
    { objective: 'Trafico / Consideracion', budget: 67500, share: 0.15 },
    { objective: 'Remarketing', budget: 45000, share: 0.10 },
  ],

  timing_optimal: {
    best_days: ['Martes', 'Miercoles', 'Jueves'],
    best_hours: ['12:00-14:00', '19:00-22:00'],
    note: 'Amas de casa: pico de uso de FB/IG post-almuerzo. Jovenes: prime TikTok 20-22h.',
    seasonal_peaks: [
      { period: 'Inicio escolar (Feb-Mar)', boost: '+25%', category: 'Embutidos / Congelados' },
      { period: 'Dia de la Madre (Mayo)', boost: '+40%', category: 'Carnicos / Pavita' },
      { period: 'Fiestas Patrias (Jul)', boost: '+30%', category: 'Congelados / Parrilla' },
      { period: 'Navidad (Dic)', boost: '+80%', category: 'Pavo / Vales' },
    ],
  },

  recommendations: [
    {
      type: 'increase',
      channel: 'tiktok_ads',
      from: 20,
      to: 25,
      reason: 'TikTok con CPM S/ 2.20 y alto engagement en recetas. #NuggetsReceta viral esta semana.',
      impact: '+35% alcance en audiencia joven 18-34',
    },
    {
      type: 'maintain',
      channel: 'meta_ads',
      reason: 'Meta con ROAS 2.9x estable. Catalogo dinamico y remarketing funcionando bien.',
      impact: 'Mantener volumen de ventas actual',
    },
    {
      type: 'increase',
      channel: 'google_search',
      from: 30,
      to: 32,
      reason: 'Google Search con ROAS 4.1x, mejor canal de conversion. Ampliar keywords de delivery.',
      impact: '+12% en conversiones ecommerce',
    },
  ],
};

// ============================================================================
// CONTENT PILLARS - Pilares de contenido San Fernando
// ============================================================================
export const CONTENT_PILLARS = [
  {
    id: 'pilar_familia',
    name: 'La Buena Familia',
    description: 'Momentos de union familiar alrededor de la mesa. Territorio emocional central.',
    icon: 'Users',
    color: '#024b98',
    performance_score: 87,
    engagement_rate: 0.042,
    best_format: 'Video 15-30s (Reels/TikTok)',
    examples: ['Cena familiar con nuggets', 'Lonchera perfecta con hot dog', 'Domingo de parrilla'],
    platforms: ['Meta', 'TikTok', 'YouTube'],
  },
  {
    id: 'pilar_recetas',
    name: 'Recetas Faciles',
    description: 'Contenido de recetas rapidas con productos San Fernando. Alto SEO y trafico organico.',
    icon: 'ChefHat',
    color: '#F5A623',
    performance_score: 91,
    engagement_rate: 0.058,
    best_format: 'Video tutorial 45-60s (TikTok/YouTube Shorts)',
    examples: ['Nuggets con salsa criolla', 'Hamburguesa pollo estilo San Fernando', 'Hot dog andino'],
    platforms: ['TikTok', 'YouTube', 'Instagram'],
  },
  {
    id: 'pilar_nutricion',
    name: 'Proteina con Proposito',
    description: 'Atributos nutricionales: hierro, proteina, sin octogonos en linea Punche.',
    icon: 'Shield',
    color: '#22C55E',
    performance_score: 72,
    engagement_rate: 0.028,
    best_format: 'Carrusel educativo (Instagram) + Infografia',
    examples: ['Hierro en hamburguesas San Fernando', 'Nuggets con chia y cereales', 'Proteina para crecer'],
    platforms: ['Meta', 'Instagram'],
  },
  {
    id: 'pilar_ecommerce',
    name: 'Pide Ahora',
    description: 'Activacion directa de ecommerce. Delivery express 60 min. Urgencia + conveniencia.',
    icon: 'ShoppingCart',
    color: '#0562c4',
    performance_score: 83,
    engagement_rate: 0.031,
    best_format: 'Video corto 6-10s con CTA + Stories con swipe-up',
    examples: ['Delivery en 60 minutos', 'Mas de 100 productos disponibles hoy', 'Promo de la semana'],
    platforms: ['Meta', 'Google Display', 'TikTok'],
  },
];

// ============================================================================
// ALERTS - Alertas automaticas del sistema
// ============================================================================
export const ALERTS = [
  {
    id: 'alert_001',
    type: 'WARNING',
    title: 'CPM por encima del benchmark',
    message: 'CPM en Meta alcanzo S/ 3.86 vs. benchmark S/ 3.51 (+10%). Revisar segmentacion de audiencia Ama de Casa Digital.',
    priority: 'MEDIUM',
    action: 'Ampliar segmento de edad 35-50 y reducir ciudades a Lima zonas 6-8',
    timestamp: '2026-03-16T09:15:00Z',
  },
  {
    id: 'alert_002',
    type: 'OPPORTUNITY',
    title: 'TikTok: Tendencia de nuggets en peak',
    message: '#NuggetsReceta crecio +340% en visualizaciones esta semana. Activar contenido organico + paid en las proximas 48h.',
    priority: 'HIGH',
    action: 'Publicar video receta Nuggets con chia en TikTok. Boost S/ 1,500 en primeras 24h.',
    timestamp: '2026-03-16T08:00:00Z',
  },
  {
    id: 'alert_003',
    type: 'SUCCESS',
    title: 'ROAS Congelados supera meta semanal',
    message: 'Categoria Congelados: ROAS = 4.1x esta semana vs. meta 3.2x. Incrementar presupuesto 15%.',
    priority: 'LOW',
    action: 'Reasignar S/ 8,000 adicionales a campanas de Congelados en Meta esta semana.',
    timestamp: '2026-03-16T07:30:00Z',
  },
  {
    id: 'alert_004',
    type: 'WARNING',
    title: 'Pacing de Ventas al 91%',
    message: 'Ventas ecommerce al 91% del target mensual con 50% del mes transcurrido. Riesgo de subejecucion.',
    priority: 'HIGH',
    action: 'Activar campana de remarketing para carritos abandonados y aumentar frecuencia en Google Search.',
    timestamp: '2026-03-16T10:00:00Z',
  },
];

// ============================================================================
// COMPETITOR INSIGHTS - Analisis de competencia
// ============================================================================
export const COMPETITOR_INSIGHTS = [
  {
    competitor: 'Redondos',
    description: 'Marca #1 en ventas de pollo en Lima Metropolitana (ANDA Peru 2023)',
    sov_estimate: 0.28,
    sentiment: 0.71,
    digital_activity: 'MEDIUM',
    recent_activity: 'Reduccion de pauta digital en Feb-Mar 2026. Foco en TV y OOH.',
    threat_level: 'HIGH',
    opportunity: 'Ventana para activar campanas de pollo fresco mientras Redondos esta abajo en digital',
    platforms: ['Facebook', 'Instagram', 'YouTube'],
  },
  {
    competitor: 'Otto Kunz / Braedt (Sigma Alimentos)',
    description: 'Fusion Braedt + Supemsa aprobada Mar 2025. ~33% participacion embutidos.',
    sov_estimate: 0.22,
    sentiment: 0.68,
    digital_activity: 'HIGH',
    recent_activity: 'Campana de relanzamiento post-fusion bajo nombre Otto Kunz Gourmet. Inversion en Meta elevada.',
    threat_level: 'HIGH',
    opportunity: 'San Fernando tiene ventaja en hot dog y salchicha de pollo (NSE B/C) donde Sigma no compite',
    platforms: ['Facebook', 'Instagram', 'YouTube'],
  },
  {
    competitor: 'Santa Elena / Avinka',
    description: 'Posicionamiento premium. Certified Humane. 19+ tiendas propias. E-commerce activo.',
    sov_estimate: 0.12,
    sentiment: 0.81,
    digital_activity: 'HIGH',
    recent_activity: 'Fuerte en Instagram con contenido wellness/premium. Audiencia NSE A/B.',
    threat_level: 'MEDIUM',
    opportunity: 'San Fernando puede competir en NSE A/B con linea Punche premium y pavita marinada',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
  },
  {
    competitor: 'La Calera (Huevos)',
    description: '98% de huevos en supermercados peruanos. Cannes Lions 2024.',
    sov_estimate: 0.08,
    sentiment: 0.87,
    digital_activity: 'MEDIUM',
    recent_activity: 'Fuerte RSE digital. Campana "Con Huevos al Cole". Contenido educativo.',
    threat_level: 'LOW',
    opportunity: 'San Fernando puede diferenciarse en huevos via cobertura canal tradicional (90% nacional)',
    platforms: ['Facebook', 'Instagram', 'LinkedIn'],
  },
];

// ============================================================================
// CLIENT CONTEXT - Contexto de negocio para ML Insights
// ============================================================================
export const CLIENT_CONTEXT = {
  company: 'San Fernando S.A.',
  founded: 1948,
  market_position: '#7 Brand Footprint 2024 (Kantar), #4 sector alimentos',
  tagline: 'La Buena Familia',
  investment_total_annual_soles: 6000000,
  investment_includes_fee: true,
  media_mix_always_on: ['Radio', 'OOH', 'Digital'],
  media_mix_campaigns: ['TV 360', 'Digital'],
  ecommerce_active: true,
  ecommerce_url: 'delivery.sanfernando.pe',
  ecommerce_skus: 100,
  delivery_express_minutes: 60,
  categories: ['Pollo', 'Pavo', 'Embutidos', 'Congelados', 'Cerdo', 'Huevo', 'Vales'],
  key_concept: 'Punche (linea Congelados + Embutidos innovados)',
  main_target: 'Ama de casa NSE B/C, 25-45 anos, Lima + provincias',
  competitive_pressure: [
    'Redondos (pollo Lima - #1 ventas)',
    'Sigma Alimentos / Otto Kunz (embutidos - 33% participacion fusion 2025)',
    'Santa Elena/Avinka (pollo premium)',
    'La Calera (huevos)',
  ],

  market_data: {
    digital_investment_peru_2024_usd_mm: 295,
    consumer_goods_digital_growth_2024_pct: 28,
    facebook_users_peru: 22540000,
    tiktok_users_peru: 19260000,
    instagram_users_peru: 10400000,
    youtube_users_peru: 17500000,
    internet_penetration_peru: 0.799,
    mobile_internet_pct: 0.90,
    ecommerce_food_delivery_usd_2025: 1942000000,
    cpm_meta_peru_soles_brand: 3.51,
    cpm_tiktok_peru_soles_est: 2.20,
    pollo_consumo_per_capita_kg_lima: 84,
    embutidos_growth_value_2023_pct: 16,
    congelados_market_usd_2024: 2250000000,
  },
};

// ============================================================================
// EXPORTS
// ============================================================================
export default {
  MOCK_GA4_DATA,
  PERFORMANCE_KPIS,
  OPPORTUNITY_SCORE,
  CATEGORIAS_PERFORMANCE,
  BUDGET_ALLOCATION,
  CONTENT_PILLARS,
  ALERTS,
  COMPETITOR_INSIGHTS,
  CLIENT_CONTEXT,
};
