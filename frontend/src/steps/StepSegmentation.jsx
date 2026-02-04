import React from 'react';
import {
  Layers,
  ClipboardList,
  Calendar,
  Building2,
  Users,
  MapPin,
  Info,
  Check,
} from 'lucide-react';
import { CheckboxGroup, Dropdown, RadioGroup, Tooltip } from '../components';

const statusOptions = [
  'Propuestas',
  'Publicados',
  'En proceso',
  'Terminados',
  'Cancelados',
];

const timeRanges = [
  { value: 'last30', label: 'Últimos 30 días' },
  { value: 'last90', label: 'Últimos 90 días' },
  { value: 'last180', label: 'Últimos 180 días' },
  { value: 'custom', label: 'Personalizado' },
];

const industries = [
  'Aerospace',
  'Automotive',
  'Semiconductors',
  'Circuit Boards Assembly',
  'Medical Devices',
  'Industrial Automation',
  'Logistics, freight and transport',
  'Agriculture industry',
  'Food & Beverages',
  'Health Services',
  'Pharmacy',
  'Beauty and personal care',
  'Mining & Extraction',
  'Metallurgy',
  'Metal mechanic',
  'E-commerce',
  'Digital marketing & branding',
  'ClimateTech & Sustainability',
  'Construction & Infrastructure',
  'Entrepreneurship & Innovation',
  'Retail',
  'Politics & Public Policy',
  'Education & STEM',
  'Safety, Security & Defense',
  'TI',
  'Software and Tech Development',
  'Artificial Intelligence and Big Data',
  'Process automation',
  'Tourism and hospitality',
  'Cultural Heritage Preservation',
  'Creative Industry & arts',
  'Livestock & fishing',
  'Oil and gas',
  'Toys and Entertainment',
  'Textile',
  'Plastics and Polymers',
  'Banking and Financial Services',
  'Insurance and Reinsurance',
  'Non-Profit Organizations (NGOs)',
  'Biotechnology and Life Sciences',
];

const companySizes = [
  {
    id: 'micro',
    label: 'Microempresa',
    description: 'Hasta 4 millones MXN y 10 empleados',
  },
  {
    id: 'small',
    label: 'Pequeña Empresa',
    description: 'Hasta 100 millones MXN y 50 empleados',
  },
  {
    id: 'medium',
    label: 'Empresa Mediana',
    description: 'Hasta 250 millones MXN y 250 empleados',
  },
  {
    id: 'large',
    label: 'Empresa Grande',
    description: 'Más de 250 millones MXN y más de 250 empleados',
  },
];

const states = [
  'Aguascalientes',
  'Baja California',
  'Chihuahua',
  'CDMX',
  'Jalisco',
  'Nuevo León',
  'Querétaro',
  'Estado de México',
];

const StepSegmentation = ({ wizardData, updateData }) => {
  const showStatus = wizardData.datasetOrigin === 'projects';

  return (
    <div className="modal-content">
      <div className="modal-header">
        <div className="header-icon">
          <Layers size={28} />
        </div>
        <div>
          <h2>Segmentación</h2>
          <p>Define los filtros y dimensiones para tu análisis</p>
        </div>
      </div>

      <div className="segmentation-full">
        <div className="segment-row">
          {showStatus && (
            <div className="segment-card">
              <div className="segment-header">
                <ClipboardList size={18} />
                <h4>Estatus del proyecto</h4>
              </div>
              <CheckboxGroup
                options={statusOptions}
                values={wizardData.status}
                onChange={(val) => updateData('status', val)}
              />
            </div>
          )}

          <div className="segment-card">
            <div className="section-header-toggle">
              <div className="segment-header" style={{ marginBottom: 0 }}>
                <Calendar size={18} />
                <h4>Rango temporal</h4>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={wizardData.useTimeRange}
                  onChange={(e) =>
                    updateData('useTimeRange', e.target.checked)
                  }
                />
                <span className="toggle-slider"></span>
                <span className="toggle-label">
                  {wizardData.useTimeRange ? 'Activado' : 'Desactivado'}
                </span>
              </label>
            </div>

            {wizardData.useTimeRange && (
              <>
                <RadioGroup
                  options={timeRanges}
                  value={wizardData.timeRange}
                  onChange={(val) => updateData('timeRange', val)}
                  name="timeRange"
                />
                {wizardData.timeRange === 'custom' && (
                  <div className="date-picker-row">
                    <div className="date-input">
                      <label>Desde</label>
                      <input
                        type="date"
                        value={wizardData.customDateStart || ''}
                        onChange={(e) =>
                          updateData('customDateStart', e.target.value)
                        }
                      />
                    </div>
                    <div className="date-input">
                      <label>Hasta</label>
                      <input
                        type="date"
                        value={wizardData.customDateEnd || ''}
                        onChange={(e) =>
                          updateData('customDateEnd', e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}
              </>
            )}
            {!wizardData.useTimeRange && (
              <p className="section-disabled-note">
                Se analizarán todos los registros sin filtro de tiempo
              </p>
            )}
          </div>
        </div>

        <div className="segment-row">
          <div className="segment-card">
            <div className="segment-header">
              <Building2 size={18} />
              <h4>Industria</h4>
              <Tooltip text="Selecciona hasta 3 industrias para filtrar">
                <Info size={14} />
              </Tooltip>
            </div>
            <Dropdown
              options={industries}
              value={wizardData.industries}
              onChange={(val) => updateData('industries', val)}
              placeholder="Seleccionar industrias..."
              multi={true}
              maxSelections={3}
            />
          </div>

          <div className="segment-card">
            <div className="segment-header">
              <Users size={18} />
              <h4>Tamaño de empresa</h4>
            </div>
            <div className="company-size-list">
              {companySizes.map((size, idx) => (
                <button
                  key={idx}
                  className={`company-size-item ${wizardData.companySize.includes(size.id) ? 'active' : ''}`}
                  onClick={() => {
                    const current = wizardData.companySize;
                    if (current.includes(size.id)) {
                      updateData(
                        'companySize',
                        current.filter((s) => s !== size.id)
                      );
                    } else {
                      updateData('companySize', [...current, size.id]);
                    }
                  }}
                >
                  <span className="size-checkbox">
                    {wizardData.companySize.includes(size.id) && (
                      <Check size={12} />
                    )}
                  </span>
                  <div className="size-info">
                    <span className="size-label">{size.label}</span>
                    <span className="size-description">{size.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="segment-row single">
          <div className="segment-card">
            <div className="segment-header">
              <MapPin size={18} />
              <h4>Región</h4>
            </div>
            <div className="region-dropdowns">
              <Dropdown
                label="Estado"
                options={states}
                value={wizardData.region.state}
                onChange={(val) =>
                  updateData('region', {
                    ...wizardData.region,
                    state: val,
                  })
                }
                placeholder="Seleccionar estado..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSegmentation;
