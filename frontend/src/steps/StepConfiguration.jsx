import React from 'react';
import { Settings } from 'lucide-react';

const groupByOptions = [
  { value: 'company', label: 'Empresa' },
  { value: 'project', label: 'Proyecto' },
  { value: 'need', label: 'Necesidad' },
];

const topOptions = [
  { value: 5, label: 'Top 5' },
  { value: 10, label: 'Top 10' },
  { value: 20, label: 'Top 20' },
];

const metricOptions = [
  { value: 'count', label: 'Conteo', icon: '#' },
  { value: 'percentage', label: 'Porcentaje', icon: '%' },
  { value: 'average', label: 'Promedio', icon: 'x̄' },
];

const StepConfiguration = ({ wizardData, updateData }) => (
  <div className="modal-content">
    <div className="modal-header">
      <div className="header-icon">
        <Settings size={28} />
      </div>
      <div>
        <h2>Configuración del Resultado</h2>
        <p>Personaliza cómo se presentarán los datos</p>
      </div>
      <span className="optional-badge">Opcional</span>
    </div>

    <div className="config-grid">
      <div className="config-card">
        <h4>Agrupar por</h4>
        <div className="config-options">
          {groupByOptions.map((opt, idx) => (
            <button
              key={idx}
              className={`config-btn ${wizardData.groupBy === opt.value ? 'active' : ''}`}
              onClick={() => updateData('groupBy', opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="config-card">
        <h4>Top resultados</h4>
        <div className="config-options">
          {topOptions.map((opt, idx) => (
            <button
              key={idx}
              className={`config-btn ${wizardData.topResults === opt.value ? 'active' : ''}`}
              onClick={() => updateData('topResults', opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="config-card full-width">
        <h4>Tipo de métrica</h4>
        <div className="metric-options">
          {metricOptions.map((opt, idx) => (
            <button
              key={idx}
              className={`metric-btn ${wizardData.metricType === opt.value ? 'active' : ''}`}
              onClick={() => updateData('metricType', opt.value)}
            >
              <span className="metric-icon">{opt.icon}</span>
              <span className="metric-label">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default StepConfiguration;
