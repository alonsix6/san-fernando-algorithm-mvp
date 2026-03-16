import { Target, Users, MessageSquare, TrendingUp, Lightbulb, Zap, AlertCircle, ShoppingCart, Flame, BarChart3, CheckCircle, FlaskConical, Calendar } from 'lucide-react';
import { OPPORTUNITY_SCORE, CONTENT_PILLARS } from '../data/mockData';
import { LAYER_CONFIG, KEY_MESSAGES, TARGET_AUDIENCES } from '../data/config';

export default function DecisionLayer() {
  const getMonthlyPeriod = () => {
    const now = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `1-${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  };

  const monthlyPeriod = getMonthlyPeriod();

  const recommendations = [
    {
      priority: 'high',
      category: 'TikTok Ads',
      action: 'Activar contenido #NuggetsReceta viral (+340% views esta semana). Boost S/ 1,500 en primeras 24h.',
      impact: '+35% alcance en audiencia joven 18-34',
      confidence: 94
    },
    {
      priority: 'high',
      category: 'Ecommerce',
      action: 'Campana remarketing carritos abandonados — 33% caida entre Add to Cart y Checkout. Urgente.',
      impact: '+S/ 15,000 en ventas recuperadas estimadas',
      confidence: 92
    },
    {
      priority: 'medium',
      category: 'Meta Ads',
      action: 'Ampliar segmento Ama de Casa Digital 35-50 anos para reducir CPM (actualmente S/ 3.86 vs benchmark S/ 3.51)',
      impact: 'Reduccion CPM -8% estimada',
      confidence: 88
    },
    {
      priority: 'medium',
      category: 'Congelados',
      action: 'Incrementar presupuesto Congelados 15% — ROAS 4.1x esta semana vs meta 3.2x',
      impact: '+S/ 8,000 reasignados a mejor performance',
      confidence: 85
    },
    {
      priority: 'low',
      category: 'Google Search',
      action: 'Ampliar keywords de delivery en Google Search — ROAS 4.1x, mejor canal de conversion',
      impact: '+12% en conversiones ecommerce',
      confidence: 78
    }
  ];

  const audiences = TARGET_AUDIENCES.map(aud => ({
    name: aud.name,
    size: aud.audienceSize_meta ? `${(aud.audienceSize_meta / 1000000).toFixed(1)}M` : 'N/A',
    cpa_target: aud.cpa_target_ecommerce,
    cpm_target: aud.cpm_target,
    status: 'active',
    description: aud.description,
    interests: aud.interests,
    platforms: aud.platforms,
    priority: aud.priority
  }));

  const getScoreGrade = (score) => {
    if (score >= 85) return 'A+';
    if (score >= 75) return 'A';
    if (score >= 65) return 'B+';
    if (score >= 55) return 'B';
    return 'C';
  };

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-blue/10">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
              {LAYER_CONFIG.decision.name}
            </h2>
            <p className="text-sm sm:text-base text-sf-textGray">
              {LAYER_CONFIG.decision.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-sf-blue/20 text-sf-accent px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{monthlyPeriod}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 bg-sf-blue text-white rounded-full text-xs sm:text-sm font-medium">
              IA Activa
            </span>
          </div>
        </div>
      </div>

      {/* Opportunity Score */}
      <div className="bg-sf-blue text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">San Fernando Opportunity Score</h3>
              <p className="text-white/90 mt-0.5 sm:mt-1 text-xs sm:text-sm">Indice de oportunidad para inversion en branding y ecommerce</p>
            </div>
          </div>

          <div className="text-left sm:text-center lg:text-right w-full sm:w-auto">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{OPPORTUNITY_SCORE.overall}</span>
              <span className="text-base sm:text-lg lg:text-xl text-white/80">/100</span>
            </div>
            <div className="flex flex-wrap items-center justify-start sm:justify-center lg:justify-end gap-2 sm:gap-3 mt-2">
              <span className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-lg text-sm sm:text-base font-bold ${
                OPPORTUNITY_SCORE.overall >= 75 ? 'bg-sf-success text-sf-charcoal' :
                OPPORTUNITY_SCORE.overall >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                Grado {getScoreGrade(OPPORTUNITY_SCORE.overall)}
              </span>
              <span className="text-sf-success font-semibold text-xs sm:text-sm">
                {OPPORTUNITY_SCORE.label}
              </span>
            </div>
          </div>
        </div>

        {/* Score Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {OPPORTUNITY_SCORE.components.map((component, idx) => (
            <div key={idx} className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h4 className="font-semibold text-xs sm:text-sm text-white/80">
                  {component.name}
                </h4>
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{component.score}</div>
              <div className="text-xs text-white/60 mb-1">{component.trend}</div>
              <div className="text-xs text-white/70">
                {component.description}
              </div>
            </div>
          ))}
        </div>

        {/* Main Recommendation */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 lg:p-5 bg-white/20 rounded-lg sm:rounded-xl border-2 border-white/30">
          <div className="flex items-start gap-2 sm:gap-3">
            <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div className="min-w-0">
              <p className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">Recomendacion automatica:</p>
              <p className="text-sm sm:text-base">{OPPORTUNITY_SCORE.recommendation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-blue/10">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-blue rounded-lg sm:rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Recomendaciones Estrategicas</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Acciones prioritarias basadas en senales del mercado</p>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {recommendations.map((rec, idx) => (
            <div key={idx} className={`p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border-2 ${
              rec.priority === 'high'
                ? 'bg-sf-blue/10 border-sf-blue/30'
                : rec.priority === 'medium'
                ? 'bg-yellow-500/10 border-yellow-500/30'
                : 'bg-sf-blueLight/10 border-sf-blueLight/30'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    rec.priority === 'high'
                      ? 'bg-sf-blue/30 text-sf-blue'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-500/30 text-yellow-400'
                      : 'bg-sf-blueLight/30 text-sf-blueLight'
                  }`}>
                    {rec.priority === 'high' ? <><Flame className="w-3 h-3" /> ALTA</> :
                     rec.priority === 'medium' ? <><Zap className="w-3 h-3" /> MEDIA</> : <><BarChart3 className="w-3 h-3" /> BAJA</>}
                  </span>
                  <span className="text-xs font-semibold text-sf-textGray uppercase">{rec.category}</span>
                </div>
                <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                  <p className="text-xs text-sf-textGray">Confianza</p>
                  <p className="text-sm sm:text-base font-bold text-white">{rec.confidence}%</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white font-medium mb-1 sm:mb-2">{rec.action}</p>
              <p className="text-xs sm:text-sm text-sf-success font-semibold flex items-center gap-1">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {rec.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audiences */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-blue/10">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-blue rounded-lg sm:rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Audiencias Objetivo San Fernando</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Segmentacion inteligente para branding y ecommerce</p>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {audiences.map((aud, idx) => (
            <div key={idx} className="p-3 sm:p-4 lg:p-5 bg-sf-charcoal rounded-lg sm:rounded-xl border border-sf-dark hover:border-sf-blue/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <h4 className="font-bold text-white text-sm sm:text-base">{aud.name}</h4>
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                      aud.priority === 'HIGH' ? 'bg-sf-success/20 text-sf-success' :
                      aud.priority === 'SEASONAL' ? 'bg-sf-accent/20 text-sf-accent' :
                      'bg-sf-blueLight/20 text-sf-blueLight'
                    }`}>
                      {aud.priority === 'HIGH' ? <><CheckCircle className="w-3 h-3" /> ALTA</> :
                       aud.priority === 'SEASONAL' ? <><Calendar className="w-3 h-3" /> ESTACIONAL</> :
                       <><Target className="w-3 h-3" /> MEDIA</>}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-sf-textGray">{aud.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mt-3 sm:mt-4 pb-3 sm:pb-4 border-b border-sf-dark">
                <div>
                  <p className="text-xs text-sf-textGray">Tamano Meta</p>
                  <p className="text-lg sm:text-xl font-bold text-white">{aud.size}</p>
                </div>
                {aud.cpa_target > 0 && (
                  <div>
                    <p className="text-xs text-sf-textGray">CPA Target</p>
                    <p className="text-lg sm:text-xl font-bold text-sf-success">S/ {aud.cpa_target}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-sf-textGray">CPM Target</p>
                  <p className="text-lg sm:text-xl font-bold text-sf-blue">S/ {aud.cpm_target}</p>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                {aud.platforms.map((platform, pIdx) => (
                  <span key={pIdx} className="px-2 py-0.5 bg-sf-dark rounded text-xs text-sf-textGray">{platform}</span>
                ))}
                {aud.interests.slice(0, 3).map((interest, iIdx) => (
                  <span key={iIdx} className="px-2 py-0.5 bg-sf-blue/10 rounded text-xs text-sf-accent">{interest}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Pillars */}
      <div className="bg-sf-charcoal text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-sf-blue/20">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sf-blue" />
          <h3 className="text-base sm:text-lg font-bold">Pilares de Contenido San Fernando</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {CONTENT_PILLARS.map((pillar, idx) => (
            <div key={pillar.id} className={`bg-sf-dark rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-sf-blue/20 ${idx === CONTENT_PILLARS.length - 1 && CONTENT_PILLARS.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pillar.color }}></div>
                <p className="text-sf-textGray text-xs sm:text-sm font-semibold">{pillar.name}</p>
                <span className="ml-auto text-xs font-bold text-sf-accent">{pillar.performance_score}/100</span>
              </div>
              <p className="text-sm sm:text-base font-bold mb-1 sm:mb-2">{pillar.description}</p>
              <p className="text-sf-textGray text-xs sm:text-sm mb-2 sm:mb-3">
                Engagement: {(pillar.engagement_rate * 100).toFixed(1)}% | {pillar.best_format}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {pillar.examples.map((example, eIdx) => (
                  <span key={eIdx} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sf-blue/10 rounded text-xs">{example}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Messages Preview */}
      <div className="bg-sf-dark rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 border border-sf-blue/10">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sf-accent rounded-lg sm:rounded-xl flex items-center justify-center">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Mensajes de Activacion por Categoria</h3>
            <p className="text-xs sm:text-sm text-sf-textGray">Mensajes clave listos para cada canal y objetivo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {KEY_MESSAGES.slice(0, 4).map((msg) => (
            <div key={msg.id} className="p-3 sm:p-4 bg-sf-charcoal rounded-lg border border-sf-dark">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-sf-blue/20 rounded text-xs font-bold text-sf-blue">{msg.category}</span>
                <span className="px-2 py-0.5 bg-sf-blue/20 rounded text-xs text-sf-blueLight">{msg.objective}</span>
              </div>
              <p className="text-sm font-medium text-white mb-2">{msg.message}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-sf-textGray">CTA:</span>
                <span className="text-xs font-bold text-sf-accent">{msg.cta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
