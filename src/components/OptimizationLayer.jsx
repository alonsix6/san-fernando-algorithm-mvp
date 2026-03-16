import { TrendingUp, BarChart3, RefreshCw, Award, Target, Users, Heart, Zap, AlertCircle, ShoppingCart, Bell, Globe, CheckCircle, Lightbulb, Activity, Eye, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { PERFORMANCE_KPIS, ALERTS, COMPETITOR_INSIGHTS } from '../data/mockData';
import { LAYER_CONFIG, CRM_CONFIG } from '../data/config';

export default function OptimizationLayer() {
  const getMonthlyPeriod = () => {
    const now = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `1-${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  };

  const monthlyPeriod = getMonthlyPeriod();

  // Performance ultimos 7 dias - San Fernando
  const performanceData = [
    { date: '10 Mar', ventas: 5200, reach: 340000, engagement: 11200, traffic: 12400 },
    { date: '11 Mar', ventas: 5800, reach: 385000, engagement: 12800, traffic: 13100 },
    { date: '12 Mar', ventas: 5400, reach: 360000, engagement: 11600, traffic: 12700 },
    { date: '13 Mar', ventas: 6500, reach: 410000, engagement: 13500, traffic: 14200 },
    { date: '14 Mar', ventas: 6100, reach: 395000, engagement: 12900, traffic: 13800 },
    { date: '15 Mar', ventas: 7200, reach: 445000, engagement: 14800, traffic: 15100 },
    { date: '16 Mar', ventas: 5600, reach: 375000, engagement: 11800, traffic: 12900 }
  ];

  // Channel performance distribution
  const channelData = [
    { name: 'Meta Ads', value: 40, revenue: 58000, color: '#1877F2' },
    { name: 'Google Ads', value: 30, revenue: 52000, color: '#34A853' },
    { name: 'TikTok Ads', value: 20, revenue: 18000, color: '#010101' },
    { name: 'Programatica', value: 10, revenue: 3000, color: '#FF6B35' }
  ];

  // Funnel de conversion San Fernando - Ecommerce
  const funnelSteps = [
    { stage: 'Alcance', value: 2380000, conversionRate: 3.7, IconComponent: Users, bgColor: 'bg-sf-red' },
    { stage: 'Visitas Web', value: 87400, conversionRate: 48.0, IconComponent: Globe, bgColor: 'bg-sf-darkRed' },
    { stage: 'Vistas Producto', value: 42000, conversionRate: 44.3, IconComponent: Eye, bgColor: 'bg-sf-blue' },
    { stage: 'Add to Cart', value: 18600, conversionRate: 66.7, IconComponent: ShoppingCart, bgColor: 'bg-sf-accent' },
    { stage: 'Compras', value: 9340, conversionRate: null, IconComponent: CheckCircle, bgColor: 'bg-sf-success' }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-red/20">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
              {LAYER_CONFIG.optimization.name}
            </h2>
            <p className="text-xs sm:text-sm text-sf-textGray">
              {LAYER_CONFIG.optimization.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-accent/20 text-sf-accent px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{monthlyPeriod}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 bg-sf-red text-white rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Auto-optimizacion activa</span>
              <span className="sm:hidden">Activa</span>
            </span>
          </div>
        </div>
      </div>

      {/* KPIs Principales - 5 metricas San Fernando */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Alcance */}
        <div className="bg-sf-blue text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sf-success text-sf-charcoal">
              +{(PERFORMANCE_KPIS.reach.vs_lastMonth * 100).toFixed(0)}%
            </span>
          </div>
          <h3 className="text-xs font-medium text-white/80 mb-0.5">Alcance</h3>
          <p className="text-xl sm:text-2xl font-bold">{(PERFORMANCE_KPIS.reach.value / 1000000).toFixed(1)}M</p>
          <div className="mt-2 pt-2 border-t border-white/20">
            <div className="flex justify-between text-xs">
              <span className="text-white/70">Pacing</span>
              <span className="font-bold">{(PERFORMANCE_KPIS.reach.pacing * 100).toFixed(0)}%</span>
            </div>
          </div>
        </div>

        {/* Impresiones + CPM */}
        <div className="bg-sf-red text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sf-success text-sf-charcoal">
              +{(PERFORMANCE_KPIS.impressions.vs_lastMonth * 100).toFixed(0)}%
            </span>
          </div>
          <h3 className="text-xs font-medium text-white/80 mb-0.5">Impresiones</h3>
          <p className="text-xl sm:text-2xl font-bold">{(PERFORMANCE_KPIS.impressions.value / 1000000).toFixed(1)}M</p>
          <div className="mt-2 pt-2 border-t border-white/20">
            <div className="flex justify-between text-xs">
              <span className="text-white/70">CPM</span>
              <span className="font-bold">S/ {PERFORMANCE_KPIS.impressions.cpm_actual} <span className="text-white/50">(vs {PERFORMANCE_KPIS.impressions.cpm_benchmark})</span></span>
            </div>
          </div>
        </div>

        {/* Interacciones */}
        <div className="bg-sf-accent text-sf-charcoal rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sf-charcoal text-sf-accent">
              +{(PERFORMANCE_KPIS.interactions.vs_lastMonth * 100).toFixed(0)}%
            </span>
          </div>
          <h3 className="text-xs font-medium text-sf-charcoal/80 mb-0.5">Interacciones</h3>
          <p className="text-xl sm:text-2xl font-bold">{(PERFORMANCE_KPIS.interactions.value / 1000).toFixed(1)}K</p>
          <div className="mt-2 pt-2 border-t border-sf-charcoal/20">
            <div className="flex justify-between text-xs">
              <span className="text-sf-charcoal/70">Eng. Rate</span>
              <span className="font-bold">{(PERFORMANCE_KPIS.interactions.engagement_rate * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Ventas */}
        <div className="bg-sf-success text-sf-charcoal rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sf-charcoal text-sf-success">
              ROAS {PERFORMANCE_KPIS.sales.roas}x
            </span>
          </div>
          <h3 className="text-xs font-medium text-sf-charcoal/80 mb-0.5">Ventas</h3>
          <p className="text-xl sm:text-2xl font-bold">S/ {(PERFORMANCE_KPIS.sales.value_soles / 1000).toFixed(0)}K</p>
          <div className="mt-2 pt-2 border-t border-sf-charcoal/20">
            <div className="flex justify-between text-xs">
              <span className="text-sf-charcoal/70">CPA</span>
              <span className="font-bold">S/ {PERFORMANCE_KPIS.sales.cpa_soles} <span className="text-sf-charcoal/50">(vs {PERFORMANCE_KPIS.sales.cpa_target})</span></span>
            </div>
          </div>
        </div>

        {/* Trafico Web */}
        <div className="bg-sf-dark text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-sf-blueLight/30">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-sf-blueLight" />
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sf-blueLight text-sf-charcoal">
              {(PERFORMANCE_KPIS.traffic.pacing * 100).toFixed(0)}%
            </span>
          </div>
          <h3 className="text-xs font-medium text-sf-textGray mb-0.5">Trafico Web</h3>
          <p className="text-xl sm:text-2xl font-bold text-sf-blueLight">{(PERFORMANCE_KPIS.traffic.sessions / 1000).toFixed(1)}K</p>
          <div className="mt-2 pt-2 border-t border-sf-blueLight/20">
            <div className="flex justify-between text-xs">
              <span className="text-sf-textGray">Bounce Rate</span>
              <span className="font-bold text-sf-blueLight">{(PERFORMANCE_KPIS.traffic.bounce_rate * 100).toFixed(0)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-red/20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Performance Ultimos 7 Dias</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Evolucion de metricas clave</p>
          </div>
          <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-sf-red"></div>
              <span className="text-sf-textGray">Ventas (S/)</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-sf-blueLight"></div>
              <span className="text-sf-textGray">Engagement</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: '10px' }} tick={{ fontSize: 10 }} />
              <YAxis yAxisId="left" stroke="#9CA3AF" style={{ fontSize: '10px' }} tick={{ fontSize: 10 }} width={40} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" style={{ fontSize: '10px' }} tick={{ fontSize: 10 }} width={40} />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213E', border: '1px solid #C8102E', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                labelStyle={{ fontWeight: 'bold', marginBottom: '8px', color: '#C8102E' }}
              />
              <Line yAxisId="left" type="monotone" dataKey="ventas" stroke="#C8102E" strokeWidth={2} dot={{ r: 3 }} />
              <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#0052CC" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Channel Distribution */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-sf-red/20">
        <h3 className="text-sm sm:text-base font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-center md:text-left">Distribucion de Revenue por Canal</h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12">
          <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px]">
            <ResponsiveContainer width="100%" aspect={1}>
              <PieChart>
                <Pie data={channelData} cx="50%" cy="50%" labelLine={false} label={false} outerRadius="80%" fill="#8884d8" dataKey="value">
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#16213E', border: '1px solid #C8102E', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="hidden lg:block w-px h-64 bg-sf-red/20"></div>

          <div className="flex-1 w-full max-w-md space-y-2 sm:space-y-3">
            {channelData.map((channel, idx) => (
              <div key={idx} className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-sf-charcoal rounded-lg hover:bg-sf-charcoal/80 transition-all duration-200 border border-sf-red/10 hover:border-sf-red/30">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: channel.color }}></div>
                  <span className="text-xs sm:text-sm font-medium text-white truncate">{channel.name}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2 sm:ml-4">
                  <span className="text-xs sm:text-sm font-bold text-white">S/ {(channel.revenue / 1000).toFixed(0)}K</span>
                  <span className="text-xs sm:text-sm font-bold text-sf-charcoal bg-sf-red px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md min-w-[40px] sm:min-w-[48px] text-center">
                    {channel.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Funnel de Conversion - Ecommerce */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-red/20">
        <h3 className="text-sm sm:text-base font-bold text-white mb-4 sm:mb-6">Funnel de Conversion Ecommerce</h3>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-3 lg:gap-3 overflow-x-auto pb-2 lg:pb-4">
          {funnelSteps.map((step, idx) => (
            <div key={idx} className="flex flex-row lg:flex-row items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className={`${step.bgColor} rounded-lg sm:rounded-xl p-3 sm:p-4 text-white shadow-md flex-1 lg:flex-initial lg:min-w-[120px] xl:min-w-[140px]`}>
                <div className="flex lg:flex-col items-center lg:text-center gap-3 lg:gap-0">
                  <div className="flex-shrink-0 lg:mb-2">
                    <step.IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <div className="flex-1 lg:flex-initial">
                    <p className="text-xs font-medium text-white/80 uppercase tracking-wide mb-0.5 sm:mb-1">{step.stage}</p>
                    <p className="text-base sm:text-lg font-bold">{step.value.toLocaleString()}</p>
                  </div>
                  {idx < funnelSteps.length - 1 && (
                    <div className="lg:hidden flex-shrink-0 text-right">
                      <span className="text-xs sm:text-sm font-bold bg-white/20 px-2 py-1 rounded">{step.conversionRate}%</span>
                    </div>
                  )}
                </div>
              </div>

              {idx < funnelSteps.length - 1 && (
                <div className="hidden lg:flex flex-col items-center justify-center min-w-[50px] xl:min-w-[60px]">
                  <div className="text-xs xl:text-sm font-bold text-sf-red mb-1">{step.conversionRate}%</div>
                  <svg className="w-6 h-6 xl:w-8 xl:h-8 text-sf-textGray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Funnel Summary */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-sf-red/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-sf-red/10 rounded-lg p-3 border border-sf-red/20">
              <p className="text-xs text-sf-textGray mb-0.5 sm:mb-1">Conversion Global</p>
              <p className="text-lg sm:text-xl font-bold text-sf-red">{(PERFORMANCE_KPIS.sales.conversion_rate * 100).toFixed(2)}%</p>
              <p className="text-xs text-sf-textGray">Web - Compra</p>
            </div>
            <div className="bg-sf-success/10 rounded-lg p-3 border border-sf-success/20">
              <p className="text-xs text-sf-textGray mb-0.5 sm:mb-1">ROAS Global</p>
              <p className="text-lg sm:text-xl font-bold text-sf-success">{PERFORMANCE_KPIS.sales.roas}x</p>
              <p className="text-xs text-sf-textGray">vs target {PERFORMANCE_KPIS.sales.roas_target}x</p>
            </div>
            <div className="bg-sf-blueLight/10 rounded-lg p-3 border border-sf-blueLight/20">
              <p className="text-xs text-sf-textGray mb-0.5 sm:mb-1">Ventas por Categoria</p>
              <p className="text-lg sm:text-xl font-bold text-sf-blueLight">{PERFORMANCE_KPIS.sales.orders.toLocaleString()}</p>
              <p className="text-xs text-sf-textGray">ordenes completadas</p>
            </div>
          </div>
        </div>
      </div>

      {/* CRM Monitoring - Ecommerce Alerts */}
      <div className="bg-sf-red text-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Bell className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold">Monitoreo Ecommerce — Umbrales de Alerta</h3>
              <p className="text-xs sm:text-sm text-white/90">Alertas automaticas de CPA, ROAS y CPM</p>
            </div>
          </div>
          <span className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs font-bold self-start sm:self-auto">
            MONITOREO
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <h4 className="font-bold text-sm mb-2">CPA Alerta</h4>
            <p className="text-xl font-bold">S/ {CRM_CONFIG.cpa_alert_threshold}</p>
            <p className="text-xs text-white/70">Pausa si CPA supera este valor</p>
          </div>
          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <h4 className="font-bold text-sm mb-2">ROAS Minimo</h4>
            <p className="text-xl font-bold">{CRM_CONFIG.roas_alert_threshold}x</p>
            <p className="text-xs text-white/70">Alerta si ROAS cae debajo</p>
          </div>
          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <h4 className="font-bold text-sm mb-2">CPM Alerta</h4>
            <p className="text-xl font-bold">S/ {CRM_CONFIG.cpm_alert_threshold}</p>
            <p className="text-xs text-white/70">Revisar si CPM supera</p>
          </div>
          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <h4 className="font-bold text-sm mb-2">Pacing Minimo</h4>
            <p className="text-xl font-bold">{(CRM_CONFIG.budget_pacing_alert * 100).toFixed(0)}%</p>
            <p className="text-xs text-white/70">Alerta si pacing cae debajo</p>
          </div>
        </div>

        <div className="p-2 sm:p-3 bg-white/20 rounded-lg">
          <p className="text-xs flex items-start sm:items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span><strong>Modelo:</strong> Ecommerce (CPA + ROAS + CPM). Moneda: {CRM_CONFIG.currency} ({CRM_CONFIG.currency_symbol}).</span>
          </p>
        </div>
      </div>

      {/* Alertas Automaticas */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-red/20">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-sf-red" />
          <h3 className="text-sm sm:text-base font-bold text-white">Alertas del Sistema</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {ALERTS.map((alert) => (
            <div key={alert.id} className={`p-3 sm:p-4 rounded-lg border-l-4 ${
              alert.type === 'WARNING' ? 'bg-yellow-500/10 border-yellow-500' :
              alert.type === 'OPPORTUNITY' ? 'bg-sf-success/10 border-sf-success' :
              alert.type === 'SUCCESS' ? 'bg-sf-blueLight/10 border-sf-blueLight' :
              'bg-red-500/10 border-red-500'
            }`}>
              <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                <h4 className="font-bold text-white text-xs sm:text-sm">{alert.title}</h4>
                <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold flex-shrink-0 ${
                  alert.priority === 'HIGH' ? 'bg-red-500/30 text-red-300' :
                  alert.priority === 'MEDIUM' ? 'bg-yellow-500/30 text-yellow-300' :
                  'bg-sf-blueLight/30 text-sf-blueLight'
                }`}>
                  {alert.priority}
                </span>
              </div>
              <p className="text-xs text-sf-textGray mb-1.5 sm:mb-2">{alert.message}</p>
              <p className="text-xs font-semibold text-sf-red">
                Accion: {alert.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-red/20">
        <h3 className="text-sm sm:text-base font-bold text-white mb-3 sm:mb-4">Analisis de Competencia</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {COMPETITOR_INSIGHTS.map((comp, idx) => (
            <div key={idx} className="p-3 sm:p-4 bg-sf-charcoal border-2 border-sf-dark rounded-lg hover:border-sf-red/50 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-sm sm:text-base truncate">{comp.competitor}</h4>
                </div>
                <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold flex-shrink-0 ${
                  comp.threat_level === 'HIGH' ? 'bg-red-500/30 text-red-300' :
                  comp.threat_level === 'MEDIUM' ? 'bg-yellow-500/30 text-yellow-300' :
                  'bg-green-500/30 text-green-300'
                }`}>
                  {comp.threat_level === 'HIGH' ? 'Alta' : comp.threat_level === 'MEDIUM' ? 'Media' : 'Baja'}
                </span>
              </div>

              <p className="text-xs text-sf-textGray mb-2 sm:mb-3 leading-relaxed line-clamp-2">{comp.description}</p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div>
                  <p className="text-xs text-sf-textGray">SOV</p>
                  <p className="text-sm sm:text-base font-bold text-white">{(comp.sov_estimate * 100).toFixed(0)}%</p>
                </div>
                <div>
                  <p className="text-xs text-sf-textGray">Actividad Digital</p>
                  <p className="text-sm sm:text-base font-bold text-sf-blueLight">{comp.digital_activity}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-sf-dark">
                <p className="text-xs text-sf-success font-medium">{comp.opportunity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
