import React from 'react';
import {
  Database,
  BarChart3,
  Target,
  Check,
  Briefcase,
  Users,
  Building2,
  ClipboardList,
  Search,
  PieChart,
  Layers,
  GitCompare,
  TrendingUp,
  Grid3X3,
} from 'lucide-react';

const datasets = [
  {
    id: 'projects',
    icon: Briefcase,
    title: 'Proyectos',
    description: 'Proyectos activos, completados y en desarrollo',
  },
  {
    id: 'providers',
    icon: Users,
    title: 'Proveedores',
    description: 'Red de proveedores y sus capacidades',
  },
  {
    id: 'clients',
    icon: Building2,
    title: 'Clientes',
    description: 'Base de clientes',
  },
  {
    id: 'prediagnostics',
    icon: ClipboardList,
    title: 'Pre-diagnósticos',
    description: 'Evaluaciones preliminares',
  },
  {
    id: 'advanced',
    icon: Search,
    title: 'Diagnóstico Avanzado',
    description: 'Datos enriquecidos',
  },
];

const objectives = [
  {
    id: 'ranking',
    icon: BarChart3,
    title: 'Ranking de necesidades',
    description: 'Identifica las necesidades más frecuentes',
    result: 'Gráfica de barras + Tabla',
  },
  {
    id: 'segments',
    icon: PieChart,
    title: 'Segmentos de necesidades',
    description: 'Agrupa necesidades similares en clusters',
    result: 'Gráfica circular + Clusters',
  },
  {
    id: 'gaps',
    icon: Layers,
    title: 'Brechas de servicios',
    description: 'Detecta demanda no cubierta',
    result: 'Mapa de calor + Tabla',
  },
  {
    id: 'comparison',
    icon: GitCompare,
    title: 'Comparación (A vs B)',
    description: 'Compara dos segmentos o periodos',
    result: 'Gráfica comparativa',
  },
  {
    id: 'trend',
    icon: TrendingUp,
    title: 'Tendencia',
    description: 'Analiza cambios en el tiempo',
    result: 'Gráfica de líneas',
  },
  {
    id: 'custom',
    icon: Grid3X3,
    title: 'Personalizado (X por Y)',
    description: 'Crea tu propia matriz de análisis',
    result: 'Matriz personalizada',
  },
];

const StepWhatToKnow = ({ wizardData, updateData }) => (
  <div className="modal-content">
    <div className="modal-header">
      <div className="header-icon">
        <Target size={28} />
      </div>
      <div>
        <h2>¿Qué quieres saber?</h2>
        <p>Selecciona el origen de datos y el tipo de análisis</p>
      </div>
    </div>

    <div className="what-to-know-sections">
      <div className="section-block">
        <h3>
          <Database size={18} />
          Origen del análisis
        </h3>
        <div className="origin-chips">
          {datasets.map((dataset) => (
            <button
              key={dataset.id}
              className={`origin-chip ${wizardData.datasetOrigin === dataset.id ? 'selected' : ''}`}
              onClick={() => updateData('datasetOrigin', dataset.id)}
            >
              <dataset.icon size={18} />
              <div className="chip-content">
                <span className="chip-title">{dataset.title}</span>
                <span className="chip-desc">{dataset.description}</span>
              </div>
              {wizardData.datasetOrigin === dataset.id && (
                <span className="chip-check">
                  <Check size={14} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h3>
          <BarChart3 size={18} />
          Objetivo del análisis
        </h3>
        <div className="objective-list">
          {objectives.map((obj) => (
            <button
              key={obj.id}
              className={`objective-item ${wizardData.analysisObjective === obj.id ? 'selected' : ''}`}
              onClick={() => updateData('analysisObjective', obj.id)}
            >
              <div className="objective-icon">
                <obj.icon size={20} />
              </div>
              <div className="objective-content">
                <h4>{obj.title}</h4>
                <p>{obj.description}</p>
              </div>
              <div className="objective-result">
                <span className="result-badge">{obj.result}</span>
              </div>
              {wizardData.analysisObjective === obj.id && (
                <div className="objective-check">
                  <Check size={14} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default StepWhatToKnow;
