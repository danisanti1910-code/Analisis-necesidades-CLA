import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, X, BarChart3, Layers } from 'lucide-react';
import { Stepper } from './components';
import {
  StepWhatToKnow,
  StepSegmentation,
  StepIntentNeeds,
  StepConfiguration,
  StepResults,
} from './steps';

const TOTAL_STEPS = 5;
const STEP_LABELS = [
  '¿Qué quieres saber?',
  'Segmentación',
  'Intención',
  'Configuración',
  'Análisis',
];

const initialWizardData = {
  datasetOrigin: null,
  analysisObjective: null,
  status: [],
  useTimeRange: false,
  timeRange: 'last90',
  customDateStart: null,
  customDateEnd: null,
  industries: [],
  companySize: [],
  region: { state: null, city: null },
  objectives: [],
  serviceCategories: [],
  helpType: null,
  investmentCapacity: null,
  groupBy: 'company',
  topResults: 10,
  metricType: 'count',
};

const CommunityLabWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [wizardData, setWizardData] = useState(initialWizardData);

  const updateData = (key, value) => {
    setWizardData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepWhatToKnow wizardData={wizardData} updateData={updateData} />
        );
      case 1:
        return (
          <StepSegmentation wizardData={wizardData} updateData={updateData} />
        );
      case 2:
        return (
          <StepIntentNeeds wizardData={wizardData} updateData={updateData} />
        );
      case 3:
        return (
          <StepConfiguration wizardData={wizardData} updateData={updateData} />
        );
      case 4:
        return <StepResults wizardData={wizardData} />;
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return (
          wizardData.datasetOrigin !== null &&
          wizardData.analysisObjective !== null
        );
      default:
        return true;
    }
  };

  if (!isOpen) {
    return (
      <div className="wizard-trigger-container">
        <button className="wizard-trigger" onClick={() => setIsOpen(true)}>
          <BarChart3 size={20} />
          Nuevo Análisis
        </button>
      </div>
    );
  }

  return (
    <div className="wizard-overlay">
      <div className="wizard-modal">
        <div className="wizard-top-bar">
          <div className="wizard-brand">
            <div className="brand-logo">
              <Layers size={20} />
            </div>
            <div className="brand-text">
              <h1>Community Lab Alliance</h1>
              <span>Análisis de Necesidades</span>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <Stepper
          stepLabels={STEP_LABELS}
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          onGoToStep={goToStep}
        />

        <div className="wizard-body">{renderStep()}</div>

        {currentStep < 4 && (
          <div className="wizard-footer">
            <div className="footer-left">
              <button
                className="footer-btn cancel"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
            </div>
            <div className="footer-right" style={{ display: 'flex', gap: '10px' }}>
              {currentStep > 0 && (
                <button className="footer-btn back" onClick={prevStep}>
                  <ChevronLeft size={16} />
                  Anterior
                </button>
              )}
              <button
                className="footer-btn next"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                {currentStep === 3 ? 'Ejecutar Análisis' : 'Siguiente'}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityLabWizard;
