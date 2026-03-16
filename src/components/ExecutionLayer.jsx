import { useState } from 'react';
import { DollarSign, TrendingUp, Target, Zap, Calendar, PlayCircle, AlertTriangle, ShoppingCart, ChevronDown, ChevronUp, Rocket, CheckCircle, ArrowRight, AlertCircle, Globe, Star, Lightbulb, CalendarDays } from 'lucide-react';
import { BUDGET_ALLOCATION, CATEGORIAS_PERFORMANCE } from '../data/mockData';
import { LAYER_CONFIG } from '../data/config';

export default function ExecutionLayer() {
  const getMonthlyPeriod = () => {
    const now = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `1-${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  };

  const monthlyPeriod = getMonthlyPeriod();
  const [showAllCategories, setShowAllCategories] = useState(false);

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sf-red/10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
              {LAYER_CONFIG.execution.name}
            </h2>
            <p className="text-xs sm:text-sm text-sf-textGray">
              {LAYER_CONFIG.execution.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-success/20 text-sf-success px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
              <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{monthlyPeriod}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 bg-sf-success text-sf-charcoal rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
              <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              Live
            </span>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="bg-sf-red text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold">Presupuesto Mensual San Fernando</h3>
              <p className="text-white/90 mt-0.5 sm:mt-1 text-xs sm:text-sm">Distribucion inteligente por canal digital</p>
            </div>
          </div>

          <div className="text-left sm:text-center lg:text-right">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-base sm:text-lg lg:text-xl text-white/80">S/</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">{(BUDGET_ALLOCATION.total_monthly_soles / 1000).toFixed(0)}K</span>
            </div>
            <p className="text-white/80 mt-1 sm:mt-2 text-xs sm:text-sm">Total presupuesto digital mensual</p>
          </div>
        </div>

        {/* Budget by Channel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {BUDGET_ALLOCATION.by_channel.map((ch, idx) => (
            <div key={idx} className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-medium">{ch.channel}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{(ch.share * 100).toFixed(0)}%</span>
              </div>
              <p className="text-lg sm:text-xl font-bold">S/ {(ch.budget / 1000).toFixed(0)}K</p>
              <div className="mt-2 w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: `${ch.share * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget by Category */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sf-red/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-blue rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Distribucion por Categoria de Producto</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Asignacion de presupuesto por linea de producto</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {BUDGET_ALLOCATION.by_category.map((cat, idx) => (
            <div key={idx} className="p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 border-sf-dark bg-sf-charcoal" style={{ borderLeftColor: cat.color, borderLeftWidth: '4px' }}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-white text-sm sm:text-base">{cat.category}</h4>
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: cat.color + '30', color: cat.color }}>
                  {(cat.share * 100).toFixed(0)}%
                </span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white mb-1">S/ {(cat.budget / 1000).toFixed(0)}K</p>
              <p className="text-xs text-sf-textGray">{cat.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Budget by Objective */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sf-red/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-accent rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Distribucion por Objetivo</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Branding, Ecommerce, Trafico y Remarketing</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {BUDGET_ALLOCATION.by_objective.map((obj, idx) => (
            <div key={idx} className="p-3 sm:p-4 rounded-lg bg-sf-charcoal border border-sf-dark">
              <p className="text-xs text-sf-textGray mb-1">{obj.objective}</p>
              <p className="text-lg sm:text-xl font-bold text-white">S/ {(obj.budget / 1000).toFixed(0)}K</p>
              <span className="text-xs font-bold text-sf-accent">{(obj.share * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Recommendations */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sf-red/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-warning rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Recomendaciones de Optimizacion</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Ajustes sugeridos basados en performance</p>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {BUDGET_ALLOCATION.recommendations.map((rec, idx) => (
            <div key={idx} className={`p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 ${
              rec.type === 'increase' ? 'bg-sf-success/10 border-sf-success/30' :
              rec.type === 'decrease' ? 'bg-red-500/10 border-red-500/30' :
              'bg-sf-blueLight/10 border-sf-blueLight/30'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                    rec.type === 'increase' ? 'bg-sf-success/30 text-sf-success' :
                    rec.type === 'decrease' ? 'bg-red-500/30 text-red-400' :
                    'bg-sf-blueLight/30 text-sf-blueLight'
                  }`}>
                    {rec.type === 'increase' ? 'AUMENTAR' :
                     rec.type === 'decrease' ? 'REDUCIR' : 'MANTENER'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white uppercase">
                    {rec.channel === 'tiktok_ads' ? 'TikTok Ads' :
                     rec.channel === 'meta_ads' ? 'Meta Ads' :
                     rec.channel === 'google_search' ? 'Google Search' : rec.channel}
                  </span>
                </div>
                {rec.from && rec.to && (
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] sm:text-xs text-sf-textGray">Cambio</span>
                    <p className="font-bold text-white text-sm sm:text-base">{rec.from}% → {rec.to}%</p>
                  </div>
                )}
              </div>

              <p className="text-white font-medium text-xs sm:text-sm lg:text-base mb-2">{rec.reason}</p>
              {rec.impact && (
                <p className="text-xs sm:text-sm text-sf-success font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  Impacto: {rec.impact}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Categories Performance */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-sf-red/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-red rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Performance por Categoria</h3>
              <p className="text-xs sm:text-sm text-sf-textGray">Rendimiento de campana por linea de producto</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {CATEGORIAS_PERFORMANCE.map((cat, idx) => (
            <div key={cat.id} className={`p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 ${
              idx < 2 ? 'bg-sf-red/5 border-sf-red/30' : 'bg-sf-charcoal border-sf-dark'
            }`}>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h4 className="font-bold text-white text-sm sm:text-base">{cat.nombre}</h4>
                {idx < 2 && (
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-sf-red/20 text-sf-red flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> TOP
                  </span>
                )}
              </div>

              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-sf-textGray">Revenue</span>
                  <span className="font-semibold text-white">S/ {(cat.revenue_soles / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-sf-textGray">Ordenes</span>
                  <span className="font-semibold text-sf-success">{cat.orders.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-sf-textGray">ROAS</span>
                  <span className="font-semibold text-sf-accent">{cat.roas}x</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-sf-textGray">CPA</span>
                  <span className="font-semibold text-sf-red">S/ {cat.cpa_soles}</span>
                </div>
              </div>

              <div className="pt-2 sm:pt-3 border-t border-sf-dark">
                <p className="text-[10px] sm:text-xs text-sf-textGray mb-1">Top productos:</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.top_products.map((prod, pIdx) => (
                    <span key={pIdx} className="px-1.5 sm:px-2 py-0.5 bg-sf-dark rounded text-xs text-sf-textGray">{prod}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timing Recommendations */}
      <div className="bg-sf-blue text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          <h3 className="text-base sm:text-lg font-bold">Timing Optimo de Campana</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
            <h4 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">Mejores horarios del dia</h4>
            <div className="space-y-2">
              {BUDGET_ALLOCATION.timing_optimal.best_hours.map((hour, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <span className="text-white/90 text-xs sm:text-sm">{hour}</span>
                  <span className="px-2 py-0.5 sm:py-1 bg-sf-success/30 rounded text-xs sm:text-sm font-bold w-fit">Pico</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-white/70 mt-2 sm:mt-3">{BUDGET_ALLOCATION.timing_optimal.note}</p>
          </div>

          <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
            <h4 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">Mejores dias de la semana</h4>
            <div className="space-y-2">
              {BUDGET_ALLOCATION.timing_optimal.best_days.map((day, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <span className="text-white/90 text-xs sm:text-sm">{day}</span>
                  <span className="px-2 py-0.5 sm:py-1 bg-sf-success/30 rounded text-xs sm:text-sm font-bold w-fit">Alta</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/20 rounded-lg sm:rounded-xl">
          <p className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" /> Estacionalidad San Fernando:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {BUDGET_ALLOCATION.timing_optimal.seasonal_peaks.map((peak, idx) => (
              <div key={idx} className="text-xs sm:text-sm flex items-center gap-2">
                <span className="text-sf-accent font-bold">{peak.boost}</span>
                <span>{peak.period} — {peak.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
