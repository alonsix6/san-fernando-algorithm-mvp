import { useState, useEffect } from 'react';
import { Search, TrendingUp, Video, Share2, ShoppingCart, RefreshCw, ChevronDown, ChevronUp, BarChart3, Info, Music, Target, DollarSign, Layers, Lightbulb, Users, Globe, MapPin, Eye, Clock, MousePointer, Smartphone, Monitor, ExternalLink, Calendar } from 'lucide-react';

export default function DataLayer() {
  // Helper function to get current week info
  const getWeekPeriod = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);

    // Get Monday of current week
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    // Get Sunday of current week
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const formatDate = (date) => date.getDate();
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return {
      weekNumber,
      range: `${formatDate(monday)}-${formatDate(sunday)} ${month} ${year}`
    };
  };

  const weekPeriod = getWeekPeriod();

  const [trendsData, setTrendsData] = useState(null);
  const [tiktokData, setTiktokData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [ga4Data, setGA4Data] = useState(null);
  const [mlData, setMLData] = useState(null);
  const [mlInsights, setMLInsights] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(null);

  const [expandedSections, setExpandedSections] = useState({
    trends: false,
    tiktok: false,
    meta: false,
    ga4: false
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsRefreshing(true);
    try {
      const basePath = `/data`;
      const [trends, tiktok, meta, ga4, mlPredictions, mlInsightsData] = await Promise.all([
        fetch(`${basePath}/trends/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/tiktok/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/meta/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/mock/ga4_data.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/ml/predictions.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/ml/insights.json`).then(r => r.json()).catch(() => null)
      ]);

      setTrendsData(trends);
      setTiktokData(tiktok);
      setMetaData(meta);
      setGA4Data(ga4);
      setMLData(mlPredictions);
      setMLInsights(mlInsightsData);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getInsightIcon = (type) => {
    const iconMap = {
      trend: TrendingUp,
      social: Users,
      tiktok: Video,
      intent: Target,
      budget: DollarSign,
      multi_source: Layers
    };
    return iconMap[type] || Lightbulb;
  };

  // Calculate scores for consumo masivo metrics
  const calculateScores = () => {
    if (mlData?.scores?.individual) {
      return {
        overall: mlData.scores.overall?.toFixed(1) || '8.2',
        search: mlData.scores.individual.search?.final?.toFixed(1) || '8.5',
        trend: mlData.scores.individual.trend?.final?.toFixed(1) || '7.8',
        social: mlData.scores.individual.social?.final?.toFixed(1) || '8.0',
        intent: mlData.scores.individual.intent?.final?.toFixed(1) || '8.8',
        isML: true,
        weights: mlData.scores.weights
      };
    }

    // Mock consumo masivo scores
    return {
      overall: '8.2',
      search: '8.5',
      trend: '7.8',
      social: '8.0',
      intent: '8.8',
      isML: false
    };
  };

  const scores = calculateScores();

  // Generate consumo masivo insights - exactly 4 sources: Google Trends, TikTok, Meta, GA4
  const generateInsights = () => {
    // Always return exactly 4 insights, one per source
    return [
      {
        source: 'Google Trends',
        IconComponent: Search,
        text: '"Nuggets San Fernando" lidera búsquedas con 88/100 de interés y +42% de crecimiento. 8 keywords de delivery y congelados en tendencia en los últimos 3 meses.',
      },
      {
        source: 'TikTok',
        IconComponent: Video,
        text: '#SanFernando alcanza 45M views. #LaBuenaFamilia crece +65% en Perú. Contenido de recetas rápidas tiene engagement 8.8/10.',
      },
      {
        source: 'Meta',
        IconComponent: Share2,
        text: 'Sentimiento social positivo (72%). "Recetas fáciles" genera 38K menciones. Delivery de pollo y lonchera saludable en crecimiento.',
      },
      {
        source: 'GA4',
        IconComponent: BarChart3,
        text: '87,400 sesiones generaron 9,340 compras (10.7% conversión). Página "/congelados" lidera con S/ 168K de revenue mensual.',
      },
    ];
  };

  // Multi-source insight (separate)
  const multiSourceInsight = {
    source: 'Análisis Multi-Fuente',
    IconComponent: Layers,
    text: 'Las 4 fuentes confirman alta demanda de delivery y congelados. La combinación de búsquedas crecientes (+42%), engagement social alto (8.2/10), contenido viral de recetas en TikTok y conversiones ecommerce en aumento indica momento óptimo para inversión en digital. Oportunidad de capturar share vs Redondos mediante posicionamiento "La Buena Familia".',
    recommendation: 'Recomendación: Incrementar presupuesto Meta Ads 20% y lanzar campaña de nuggets con influencers de cocina.'
  };

  const insights = generateInsights();

  // Expanded GA4 pages data
  const ga4Pages = [
    { page: '/congelados', title: 'Congelados San Fernando', views: 22400, sessions: 18500, avgTime: '3:45', bounceRate: 25, conversions: 2850, convRate: 15.4 },
    { page: '/delivery', title: 'Pide Ahora - Delivery', views: 19200, sessions: 16800, avgTime: '4:12', bounceRate: 18, conversions: 3420, convRate: 20.4 },
    { page: '/embutidos', title: 'Embutidos y Hot Dogs', views: 15600, sessions: 12800, avgTime: '2:58', bounceRate: 28, conversions: 1280, convRate: 10.0 },
    { page: '/promociones', title: 'Ofertas y Promociones', views: 14800, sessions: 12200, avgTime: '3:22', bounceRate: 22, conversions: 1520, convRate: 12.5 },
    { page: '/recetas', title: 'Recetas San Fernando', views: 11200, sessions: 9500, avgTime: '5:38', bounceRate: 32, conversions: 380, convRate: 4.0 },
    { page: '/carnicos', title: 'Cárnicos Frescos', views: 9800, sessions: 8200, avgTime: '3:15', bounceRate: 30, conversions: 920, convRate: 11.2 },
    { page: '/huevos', title: 'Huevos La Calera', views: 7200, sessions: 5800, avgTime: '2:05', bounceRate: 35, conversions: 580, convRate: 10.0 },
    { page: '/blog/recetas', title: 'Blog: Recetas Fáciles', views: 5400, sessions: 4200, avgTime: '6:25', bounceRate: 28, conversions: 210, convRate: 5.0 },
    { page: '/nosotros', title: 'Nuestra Historia', views: 4800, sessions: 4100, avgTime: '4:32', bounceRate: 42, conversions: 95, convRate: 2.3 },
    { page: '/puntos-venta', title: 'Puntos de Venta', views: 3200, sessions: 2800, avgTime: '2:45', bounceRate: 38, conversions: 85, convRate: 3.0 },
  ];

  // Expanded TikTok hashtags data
  const tiktokHashtags = [
    { hashtag: '#SanFernando', views: '45M', posts: '120K', growth: '+65%', region: 'Perú', engagement: 8.8 },
    { hashtag: '#LaBuenaFamilia', views: '28M', posts: '85K', growth: '+120%', region: 'Perú', engagement: 9.2 },
    { hashtag: '#recetasfaciles', views: '1.8B', posts: '5.2M', growth: '+42%', region: 'Global', engagement: 8.5 },
    { hashtag: '#nuggets', views: '890M', posts: '2.1M', growth: '+38%', region: 'Global', engagement: 8.0 },
    { hashtag: '#cocinaperuana', views: '320M', posts: '680K', growth: '+52%', region: 'LATAM', engagement: 9.0 },
    { hashtag: '#deliverylima', views: '58M', posts: '142K', growth: '+85%', region: 'Perú', engagement: 7.8 },
    { hashtag: '#loncherasaludable', views: '95M', posts: '210K', growth: '+95%', region: 'LATAM', engagement: 8.3 },
    { hashtag: '#polloalabrasa', views: '125M', posts: '280K', growth: '+35%', region: 'Perú', engagement: 7.5 },
  ];

  // Content types for TikTok
  const tiktokSounds = [
    { name: 'Receta rápida 60s', type: 'Tutorial', usage: '3.2M', trend: '+85%' },
    { name: 'Lonchera de la semana', type: 'Meal Prep', usage: '1.8M', trend: '+120%' },
    { name: 'Nuggets challenge', type: 'Challenge', usage: '2.1M', trend: '+95%' },
    { name: 'De la bolsa al plato', type: 'Unboxing', usage: '980K', trend: '+72%' },
    { name: 'Parrilla familiar', type: 'Lifestyle', usage: '1.5M', trend: '+45%' },
    { name: 'Cena en 15 minutos', type: 'Quick Recipe', usage: '420K', trend: '+65%' },
  ];

  // Expanded Meta topics data
  const metaTopics = [
    { topic: 'Recetas Fáciles', mentions: 38000, engagement: 8.5, sentiment: 78, growth: '+32%', brands: 'San Fernando, Redondos' },
    { topic: 'Lonchera Saludable', mentions: 28000, engagement: 8.8, sentiment: 85, growth: '+45%', brands: 'San Fernando, La Calera' },
    { topic: 'Delivery Comida Lima', mentions: 42000, engagement: 7.8, sentiment: 72, growth: '+28%', brands: 'PedidosYa, Rappi' },
    { topic: 'Proteína Familiar', mentions: 18000, engagement: 8.0, sentiment: 82, growth: '+22%', brands: 'San Fernando, Otto Kunz' },
    { topic: 'Parrilla y BBQ', mentions: 25000, engagement: 9.2, sentiment: 92, growth: '+55%', brands: 'San Fernando, Santa Elena' },
    { topic: 'Alimentación Saludable', mentions: 15000, engagement: 7.5, sentiment: 75, growth: '+18%', brands: 'Varias' },
  ];

  // Meta ad performance
  const metaAdPerformance = [
    { campaign: 'Nuggets La Buena Familia', platform: 'Instagram', reach: 1200000, clicks: 18500, ctr: 1.54, cpl: 8.20, status: 'Activo' },
    { campaign: 'Delivery Congelados', platform: 'Facebook', reach: 680000, clicks: 9200, ctr: 1.35, cpl: 12.50, status: 'Activo' },
    { campaign: 'Recetas Rápidas - Embutidos', platform: 'Instagram', reach: 950000, clicks: 22400, ctr: 2.36, cpl: 6.80, status: 'Activo' },
    { campaign: 'Parrilla Familiar', platform: 'Facebook', reach: 420000, clicks: 5800, ctr: 1.38, cpl: 15.40, status: 'Pausado' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header & Score Summary */}
      <div className="bg-sf-charcoal rounded-2xl shadow-sf-lg p-4 sm:p-6 lg:p-8 text-white border border-sf-red/20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-sf-red rounded-xl flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-xl font-bold mb-1">
                  Capa de Data - Captura de Señales
                </h2>
                <p className="text-sf-textGray text-xs sm:text-base">
                  Monitoreo en tiempo real del ecosistema digital consumo masivo en Lima
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-sf-blueLight/20 text-sf-blueLight px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Sem {weekPeriod.weekNumber}</span>
              <span className="text-[10px] sm:text-xs opacity-80 hidden xs:inline">| {weekPeriod.range}</span>
            </div>
            <div className="text-right">
              <p className="text-sf-textGray text-[10px] sm:text-xs uppercase font-semibold mb-0.5 sm:mb-1">Score Global</p>
              <p className="text-2xl sm:text-3xl font-bold text-sf-red">{scores.overall}</p>
              <p className="text-[10px] sm:text-xs text-sf-textGray">de 10.0</p>
            </div>
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-sf-red/20 text-sf-red rounded-lg hover:bg-sf-red/30 transition disabled:opacity-50 text-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Actualizar</span>
            </button>
          </div>
        </div>

        {/* Data Sources Status */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-dark rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sf-success rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sf-textGray">Trends</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-dark rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sf-success rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sf-textGray">TikTok</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-dark rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sf-success rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sf-textGray">Meta</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-dark rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sf-success rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-sf-textGray">GA4</span>
          </div>
          {lastRefresh && (
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-dark rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 ml-auto">
              <span className="text-[10px] sm:text-xs text-sf-textGray">
                {lastRefresh.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Insights Clave del Mercado */}
      <div className="bg-sf-dark rounded-2xl shadow-sf-lg p-4 sm:p-6 lg:p-8 border border-sf-red/10">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-red rounded-xl flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm sm:text-lg font-bold text-white">Insights Clave del Mercado Alimentario</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Análisis automático multi-fuente</p>
          </div>
        </div>

        {/* Individual Source Insights - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {insights.map((insight, idx) => {
            const colorScheme =
              insight.source === 'Google Trends' ? { bg: 'bg-sf-blueLight/10', text: 'text-sf-blueLight', icon: 'bg-sf-blueLight', badge: 'bg-sf-blueLight/20 text-sf-blueLight' } :
              insight.source === 'TikTok' ? { bg: 'bg-sf-success/10', text: 'text-sf-success', icon: 'bg-sf-success', badge: 'bg-sf-success/20 text-sf-charcoal' } :
              insight.source === 'Meta' ? { bg: 'bg-sf-red/10', text: 'text-sf-accent', icon: 'bg-sf-red', badge: 'bg-sf-red/20 text-sf-accent' } :
              insight.source === 'GA4' ? { bg: 'bg-sf-warning/10', text: 'text-sf-warning', icon: 'bg-sf-warning', badge: 'bg-sf-warning/20 text-sf-warning' } :
              { bg: 'bg-sf-blueLight/10', text: 'text-sf-blueLight', icon: 'bg-sf-blueLight', badge: 'bg-sf-blueLight/20 text-sf-blueLight' };

            const sourceScore =
              insight.source === 'Google Trends' ? scores.search :
              insight.source === 'TikTok' ? scores.trend :
              insight.source === 'Meta' ? scores.social :
              insight.source === 'GA4' ? scores.intent : null;

            const InsightIcon = insight.IconComponent || Lightbulb;

            return (
              <div key={idx} className={`relative ${colorScheme.bg} rounded-xl p-3 sm:p-5 border border-sf-dark hover:border-sf-red/30 transition-all duration-300`}>
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 ${colorScheme.icon} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <InsightIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <p className={`text-[10px] sm:text-xs font-bold ${colorScheme.text} uppercase tracking-wider`}>{insight.source}</p>
                      {sourceScore && (
                        <span className={`${colorScheme.badge} px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold`}>
                          {sourceScore}/10
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-sf-lightGray leading-relaxed font-medium">{insight.text}</p>
                  </div>
                </div>
                <div className={`absolute top-0 left-0 w-1 h-full ${colorScheme.icon} rounded-l-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Multi-Source Analysis - Full Width at Bottom */}
        <div className="relative bg-gradient-to-r from-sf-red/20 to-sf-blueLight/20 rounded-xl p-3 sm:p-6 border border-sf-red/30">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-sf-red to-sf-blueLight rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm font-bold text-sf-accent uppercase tracking-wider">{multiSourceInsight.source}</p>
                <span className="bg-sf-red/30 text-sf-accent px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                  Consolidado
                </span>
              </div>
              <p className="text-xs sm:text-sm text-sf-lightGray leading-relaxed mb-2 sm:mb-3">{multiSourceInsight.text}</p>
              <div className="bg-sf-charcoal/50 rounded-lg p-2 sm:p-3 border border-sf-red/20">
                <p className="text-xs sm:text-sm text-sf-success font-semibold flex items-start sm:items-center gap-1.5 sm:gap-2">
                  <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>{multiSourceInsight.recommendation}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-sf-red to-sf-blueLight rounded-l-xl"></div>
        </div>
      </div>

      {/* Google Trends Section */}
      <div className="bg-sf-dark rounded-xl shadow-lg overflow-hidden border border-sf-red/10">
        <button
          onClick={() => toggleSection('trends')}
          className="w-full bg-sf-blueLight text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Google Trends</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Keywords consumo masivo - Score: {scores.search}/10</p>
            </div>
          </div>
          {expandedSections.trends ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.trends && (
          <div className="p-3 sm:p-6 space-y-3 sm:space-y-4 bg-sf-charcoal">
            <div className="bg-sf-blueLight/10 border border-sf-blueLight/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-sf-blueLight flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-sf-lightGray">
                <p className="font-semibold mb-1 text-sf-blueLight">Cómo se calcula el score:</p>
                <p>Promedio del "interés de búsqueda" (0-100) de keywords consumo masivo monitoreadas en Perú.</p>
                <p className="mt-2 text-[10px] sm:text-xs text-sf-textGray hidden sm:block">
                  <strong>Fuente:</strong> Google Trends API (Perú) - <strong>Actualización:</strong> Semanal
                </p>
              </div>
            </div>

            <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
              <table className="w-full min-w-[400px]">
                <thead className="bg-sf-dark border-b border-sf-red/20">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Keyword</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Interés</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Crec.</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sf-dark">
                  {[
                    { keyword: 'gimnasio lima', interest: 82, growth: '+18%', trend: 'rising' },
                    { keyword: 'gym cerca de mí', interest: 78, growth: '+25%', trend: 'rising' },
                    { keyword: 'membresía gimnasio', interest: 65, growth: '+32%', trend: 'rising' },
                    { keyword: 'gimnasio miraflores', interest: 58, growth: '+12%', trend: 'stable' },
                    { keyword: 'crossfit lima', interest: 52, growth: '+8%', trend: 'stable' },
                    { keyword: 'personal trainer lima', interest: 45, growth: '+15%', trend: 'rising' },
                    { keyword: 'gimnasio surco', interest: 42, growth: '+22%', trend: 'rising' },
                    { keyword: 'clases de spinning', interest: 38, growth: '+10%', trend: 'stable' },
                  ].map((kw, idx) => (
                    <tr key={idx} className="hover:bg-sf-dark/50 transition">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{kw.keyword}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className="text-xs sm:text-sm font-bold text-sf-blueLight">{kw.interest}/100</span>
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className="text-xs sm:text-sm font-bold text-sf-success">{kw.growth}</span>
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                          kw.trend === 'rising' ? 'bg-sf-success/20 text-sf-success' : 'bg-sf-dark text-sf-textGray'
                        }`}>
                          {kw.trend === 'rising' ? '↑' : '—'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* TikTok Section */}
      <div className="bg-sf-dark rounded-xl shadow-lg overflow-hidden border border-sf-red/10">
        <button
          onClick={() => toggleSection('tiktok')}
          className="w-full bg-sf-success text-sf-charcoal p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Video className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">TikTok Creative Center</h3>
              <p className="text-[10px] sm:text-xs text-sf-charcoal/80">Hashtags virales - Score: {scores.trend}/10</p>
            </div>
          </div>
          {expandedSections.tiktok ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.tiktok && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-sf-charcoal">
            <div className="bg-sf-success/10 border border-sf-success/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-sf-success flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-sf-lightGray">
                <p className="font-semibold mb-1 text-sf-success">Cómo se calcula el score:</p>
                <p>Promedio del "relevance score" (0-100) de hashtags consumo masivo virales.</p>
              </div>
            </div>

            {/* Hashtags Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-success" />
                Hashtags Trending Alimentación
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[450px]">
                  <thead className="bg-sf-dark border-b border-sf-red/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Hashtag</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Views</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase hidden sm:table-cell">Posts</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Crec.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Región</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sf-dark">
                    {tiktokHashtags.map((tag, idx) => (
                      <tr key={idx} className="hover:bg-sf-dark/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{tag.hashtag}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sf-success">{tag.views}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-sf-textGray">{tag.posts}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sf-success">{tag.growth}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            tag.region === 'Perú' ? 'bg-sf-success/20 text-sf-success' :
                            tag.region === 'LATAM' ? 'bg-sf-red/20 text-sf-accent' :
                            'bg-sf-dark text-sf-textGray'
                          }`}>
                            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden sm:inline">{tag.region}</span>
                            <span className="sm:hidden">{tag.region === 'Global' ? 'GL' : tag.region === 'LATAM' ? 'LA' : 'PE'}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Trending Sounds */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-success" />
                Sonidos Trending para Gym Content
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {tiktokSounds.map((sound, idx) => (
                  <div key={idx} className="bg-sf-dark rounded-xl p-3 sm:p-4 border border-sf-success/20 hover:border-sf-success/40 transition">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sf-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music className="w-4 h-4 sm:w-5 sm:h-5 text-sf-charcoal" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs sm:text-sm font-semibold text-white truncate">{sound.name}</h5>
                        <p className="text-[10px] sm:text-xs text-sf-textGray">{sound.type}</p>
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                          <span className="text-[10px] sm:text-xs font-medium text-sf-success">{sound.usage}</span>
                          <span className="text-[10px] sm:text-xs text-sf-red">{sound.trend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Meta Section */}
      <div className="bg-sf-dark rounded-xl shadow-lg overflow-hidden border border-sf-red/10">
        <button
          onClick={() => toggleSection('meta')}
          className="w-full bg-sf-red text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Meta/Facebook Trends</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Redes sociales - Score: {scores.social}/10</p>
            </div>
          </div>
          {expandedSections.meta ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.meta && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-sf-charcoal">
            <div className="bg-sf-red/10 border border-sf-red/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-sf-accent flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-sf-lightGray">
                <p className="font-semibold mb-1 text-sf-accent">Cómo se calcula el score:</p>
                <p>Promedio del "engagement score" (0-10) de temas consumo masivo en Facebook e Instagram.</p>
              </div>
            </div>

            {/* Topics Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-accent" />
                Temas Trending en Redes Sociales
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-sf-dark border-b border-sf-red/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Tema</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Menc.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Eng.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Sent.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Crec.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase hidden lg:table-cell">Marcas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sf-dark">
                    {metaTopics.map((topic, idx) => (
                      <tr key={idx} className="hover:bg-sf-dark/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{topic.topic}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sf-accent">{(topic.mentions / 1000).toFixed(0)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">{topic.engagement}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            topic.sentiment >= 80 ? 'bg-sf-success/20 text-sf-success' :
                            topic.sentiment >= 60 ? 'bg-sf-warning/20 text-sf-warning' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {topic.sentiment}%
                          </span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sf-success">{topic.growth}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-sf-textGray hidden lg:table-cell">{topic.brands}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ad Performance */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-accent" />
                Rendimiento de Campañas Meta Ads
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-sf-dark border-b border-sf-red/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Campaña</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase hidden sm:table-cell">Platf.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Alcance</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase hidden sm:table-cell">Clicks</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">CTR</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">CPA</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sf-dark">
                    {metaAdPerformance.map((ad, idx) => (
                      <tr key={idx} className="hover:bg-sf-dark/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{ad.campaign}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm text-sf-textGray hidden sm:table-cell">{ad.platform}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm text-white">{(ad.reach / 1000).toFixed(0)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-white">{ad.clicks.toLocaleString()}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${ad.ctr >= 1.5 ? 'text-sf-success' : 'text-sf-warning'}`}>{ad.ctr}%</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${ad.cpl <= 10 ? 'text-sf-success' : ad.cpl <= 15 ? 'text-sf-warning' : 'text-red-400'}`}>S/{ad.cpl}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            ad.status === 'Activo' ? 'bg-sf-success/20 text-sf-success' : 'bg-sf-dark text-sf-textGray'
                          }`}>
                            {ad.status === 'Activo' ? '●' : '○'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* GA4 Section */}
      <div className="bg-sf-dark rounded-xl shadow-lg overflow-hidden border border-sf-red/10">
        <button
          onClick={() => toggleSection('ga4')}
          className="w-full bg-sf-warning text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Google Analytics 4</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Conversión - Score: {scores.intent}/10</p>
            </div>
          </div>
          {expandedSections.ga4 ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.ga4 && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-sf-charcoal">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-sf-dark rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-textGray" />
                  <p className="text-[10px] sm:text-xs text-sf-textGray">Sesiones</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-white">87.4K</p>
                <p className="text-[10px] sm:text-xs text-sf-success">+32%</p>
              </div>
              <div className="bg-sf-dark rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-textGray" />
                  <p className="text-[10px] sm:text-xs text-sf-textGray">Vistas Producto</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-white">45.2K</p>
                <p className="text-[10px] sm:text-xs text-sf-success">+28%</p>
              </div>
              <div className="bg-sf-dark rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-textGray" />
                  <p className="text-[10px] sm:text-xs text-sf-textGray">Compras</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-sf-red">9,340</p>
                <p className="text-[10px] sm:text-xs text-sf-success">+45%</p>
              </div>
              <div className="bg-sf-dark rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-textGray" />
                  <p className="text-[10px] sm:text-xs text-sf-textGray">Conv.</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-sf-success">S/ 168K</p>
                <p className="text-[10px] sm:text-xs text-sf-textGray">Revenue</p>
              </div>
            </div>

            {/* Device & Traffic Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-sf-dark rounded-lg p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-warning" />
                  Dispositivos
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Mobile</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-sf-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-sf-red rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white w-8 text-right">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Desktop</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-sf-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-sf-blueLight rounded-full" style={{ width: '18%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white w-8 text-right">18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Tablet</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-sf-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-sf-success rounded-full" style={{ width: '4%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white w-8 text-right">4%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sf-dark rounded-lg p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-warning" />
                  Fuentes de Tráfico
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Social Media</span>
                    <span className="text-xs sm:text-sm font-bold text-sf-red">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Orgánico</span>
                    <span className="text-xs sm:text-sm font-bold text-white">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Paid</span>
                    <span className="text-xs sm:text-sm font-bold text-white">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Directo</span>
                    <span className="text-xs sm:text-sm font-bold text-white">8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-sf-textGray">Referencia</span>
                    <span className="text-xs sm:text-sm font-bold text-white">4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sf-warning" />
                Páginas del Sitio Web San Fernando
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[550px]">
                  <thead className="bg-sf-dark border-b border-sf-red/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Página</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Vistas</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase hidden sm:table-cell">Tiempo</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase hidden lg:table-cell">Rebote</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Conv.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-sf-textGray uppercase">Tasa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sf-dark">
                    {ga4Pages.slice(0, 6).map((page, idx) => (
                      <tr key={idx} className="hover:bg-sf-dark/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-white truncate max-w-[120px] sm:max-w-none">{page.title}</p>
                            <p className="text-[10px] sm:text-xs text-sf-textGray hidden sm:block">{page.page}</p>
                          </div>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm text-white">{(page.views / 1000).toFixed(1)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-white">{page.avgTime}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden lg:table-cell">
                          <span className={`text-xs sm:text-sm ${page.bounceRate <= 30 ? 'text-sf-success' : page.bounceRate <= 40 ? 'text-sf-warning' : 'text-red-400'}`}>{page.bounceRate}%</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-sf-red">{page.conversions}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${page.convRate >= 2.5 ? 'text-sf-success' : 'text-white'}`}>{page.convRate}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Keywords Reference */}
      <div className="bg-sf-red rounded-xl p-4 sm:p-6 text-white">
        <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          Keywords Monitoreadas - San Fernando Perú
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Marca:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">San Fernando</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">La Buena Familia</span>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Categorías:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Nuggets delivery</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Hot dog San Fernando</span>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Competencia:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Redondos</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Otto Kunz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
