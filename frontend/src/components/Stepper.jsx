import React from 'react';
import { Check } from 'lucide-react';

const Stepper = ({ stepLabels, currentStep, totalSteps, onGoToStep }) => (
  <div className="stepper">
    <div className="stepper-line">
      <div
        className="stepper-progress"
        style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
      />
    </div>
    <div className="stepper-dots">
      {stepLabels.map((label, index) => (
        <button
          key={index}
          className={`stepper-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
          onClick={() => onGoToStep(index)}
          disabled={index > currentStep}
        >
          <span className="dot-inner">
            {index < currentStep ? <Check size={12} /> : index + 1}
          </span>
          <span className="dot-label">{label}</span>
        </button>
      ))}
    </div>
  </div>
);

export default Stepper;
