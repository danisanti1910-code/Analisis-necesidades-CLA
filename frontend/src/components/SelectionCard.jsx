import React from 'react';
import { Check } from 'lucide-react';

const SelectionCard = ({ icon: Icon, title, description, selected, onClick, disabled }) => (
  <button
    className={`selection-card ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    <div className="card-icon">
      <Icon size={24} />
    </div>
    <div className="card-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    {selected && (
      <div className="card-check">
        <Check size={16} />
      </div>
    )}
  </button>
);

export default SelectionCard;
