import React from 'react';
import {
  Sparkles,
  BarChart3,
  Table2,
  Save,
  Download,
  Layers,
  Zap,
  Users,
} from 'lucide-react';

const chartData = [
  { name: 'Automatización', value: 89 },
  { name: 'Desarrollo Software', value: 76 },
  { name: 'Consultoría', value: 64 },
  { name: 'Marketing Digital', value: 52 },
  { name: 'Capacitación', value: 41 },
];

const insights = [
  {
    icon: '📈',
    text: 'La automatización de procesos representa el 34% de las necesidades identificadas',
  },
  {
    icon: '🎯',
    text: 'El 67% de empresas medianas buscan soluciones de desarrollo de software',
  },
  {
    icon: '💡',
    text: 'Se detectó una brecha de 23% en servicios de consultoría científica',
  },
];

const tableData = [
  {
    rank: 1,
    need: 'Automatización Industrial',
    count: 245,
    percentage: '34%',
    trend: '+12%',
  },
  {
    rank: 2,
    need: 'Desarrollo de Software',
    count: 198,
    percentage: '27%',
    trend: '+8%',
  },
  {
    rank: 3,
    need: 'Consultoría Financiera',
    count: 156,
    percentage: '21%',
    trend: '+3%',
  },
  {
    rank: 4,
    need: 'Marketing Digital',
    count: 89,
    percentage: '12%',
    trend: '-2%',
  },
  {
    rank: 5,
    need: 'Capacitación Técnica',
    count: 42,
    percentage: '6%',
    trend: '+5%',
  },
];

const StepResults = ({ wizardData }) => {
  const maxValue = Math.max(...chartData.map((d) => d.value));
  const datasetLabel =
    wizardData.datasetOrigin === 'projects' ? 'Proyectos' : 'Dataset';
  const timeLabel = wizardData.useTimeRange
    ? 'Últimos 90 días'
    : 'Todos los registros';

  return (
    <div className="modal-content results-modal">
      <div className="modal-header">
        <div className="header-icon success">
          <Sparkles size={28} />
        </div>
        <div>
          <h2>Análisis</h2>
          <p>
            Ranking de necesidades • {datasetLabel} • {timeLabel}
          </p>
        </div>
      </div>

      <div className="results-grid">
        <div className="results-chart">
          <div className="chart-header">
            <h4>
              <BarChart3 size={16} /> Distribución de Necesidades
            </h4>
          </div>
          <div className="bar-chart">
            {chartData.map((item, idx) => (
              <div key={idx} className="bar-row">
                <span className="bar-label">{item.name}</span>
                <div className="bar-container">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${(item.value / maxValue) * 100}%`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  />
                </div>
                <span className="bar-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="results-insights">
          <div className="insights-header">
            <h4>
              <Sparkles size={16} /> Insights Automáticos
            </h4>
          </div>
          <div className="insights-list">
            {insights.map((insight, idx) => (
              <div key={idx} className="insight-item">
                <span className="insight-icon">{insight.icon}</span>
                <p>{insight.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="results-table">
          <div className="table-header">
            <h4>
              <Table2 size={16} /> Tabla Resumen
            </h4>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Necesidad</th>
                <th>Conteo</th>
                <th>%</th>
                <th>Tendencia</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td className="rank">{row.rank}</td>
                  <td>{row.need}</td>
                  <td>{row.count}</td>
                  <td>{row.percentage}</td>
                  <td
                    className={
                      row.trend.startsWith('+') ? 'positive' : 'negative'
                    }
                  >
                    {row.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="results-actions">
        <button className="action-btn primary">
          <Save size={16} />
          Guardar análisis
        </button>
        <button className="action-btn secondary">
          <Download size={16} />
          Exportar resultados
        </button>
        <button className="action-btn secondary">
          <Layers size={16} />
          Crear segmento
        </button>
        <button className="action-btn secondary">
          <Zap size={16} />
          Diagnóstico masivo
        </button>
        <button className="action-btn secondary">
          <Users size={16} />
          Solicitar proveedores
        </button>
      </div>
    </div>
  );
};

export default StepResults;
