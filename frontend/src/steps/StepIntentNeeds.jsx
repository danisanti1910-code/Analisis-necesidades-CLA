import React from 'react';
import { Zap } from 'lucide-react';
import { Dropdown } from '../components';

const objectives = [
  'Quiero incrementar mis ventas',
  'Quiero automatizar mis procesos',
  'Quiero mejorar y bajar el costo de mi operación',
  'Quiero mejorar la satisfacción de mis clientes',
  'Quiero expandir mis operaciones',
  'Quiero implementar nuevas tecnologías',
  'Quiero desarrollar un producto o un servicio',
  'Quiero generar información de mi negocio/proyecto',
  'Quiero capacitarme',
];

const serviceCategories = [
  'Desarrollo de Software',
  'Investigación, Data e Inteligencia',
  'UX/UI',
  'Digitalización de procesos',
  'Optimización de procesos',
  'Capacitación y formación',
  'Consultoría Legal',
  'Consultoría Financiera y Contable',
  'Consultoría de Ventas',
  'Consultoría Científica',
  'Marketing Digital',
  'Branding y Diseño',
  'Diseño y desarrollo de maquinaria',
  'Automatización Industrial',
  'Prototipado y diseño de producto',
  'Desarrollo de producto',
];

const helpTypes = [
  'Taller / Capacitación',
  'Mentoría / Consultoría',
  'Implementación / Automatización',
];

const investmentOptions = [
  { value: 'none', label: 'No estoy dispuesto a invertir' },
  {
    value: 'unknown',
    label: 'Estamos abiertos a invertir pero no sabemos cuánto',
  },
  { value: '1-2', label: 'Sí, entre el 1% y 2% de mis utilidades' },
  { value: '2-4', label: 'Sí, entre el 2% y 4% de mis utilidades' },
  { value: '5+', label: 'Sí, más del 5% de mis utilidades' },
];

const StepIntentNeeds = ({ wizardData, updateData }) => (
  <div className="modal-content">
    <div className="modal-header">
      <div className="header-icon">
        <Zap size={28} />
      </div>
      <div>
        <h2>Intención y Necesidades</h2>
        <p>
          Define los objetivos, tipos de servicio e inversión a analizar
        </p>
      </div>
    </div>

    <div className="intent-sections">
      <div className="intent-row">
        <div className="intent-section-half">
          <h3>
            Objetivos principales <span className="max-badge">máx. 3</span>
          </h3>
          <Dropdown
            options={objectives}
            value={wizardData.objectives}
            onChange={(val) => updateData('objectives', val)}
            placeholder="Seleccionar objetivos..."
            multi={true}
            maxSelections={3}
          />
        </div>

        <div className="intent-section-half">
          <h3>Categorías de servicios</h3>
          <Dropdown
            options={serviceCategories}
            value={wizardData.serviceCategories}
            onChange={(val) => updateData('serviceCategories', val)}
            placeholder="Seleccionar categorías..."
            multi={true}
          />
        </div>
      </div>

      <div className="intent-row">
        <div className="intent-section-half">
          <h3>Tipo de ayuda buscada</h3>
          <Dropdown
            options={helpTypes}
            value={wizardData.helpType}
            onChange={(val) => updateData('helpType', val)}
            placeholder="Seleccionar tipo de ayuda..."
          />
        </div>

        <div className="intent-section-half">
          <h3>Capacidad de inversión</h3>
          <Dropdown
            options={investmentOptions.map((opt) => opt.label)}
            value={
              investmentOptions.find(
                (opt) => opt.value === wizardData.investmentCapacity
              )?.label || null
            }
            onChange={(val) => {
              const selected = investmentOptions.find((opt) => opt.label === val);
              updateData('investmentCapacity', selected?.value || null);
            }}
            placeholder="Seleccionar capacidad..."
          />
        </div>
      </div>
    </div>
  </div>
);

export default StepIntentNeeds;
