import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const Dropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  multi = false,
  maxSelections = null,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (option) => {
    if (multi) {
      const currentValues = value || [];
      if (currentValues.includes(option)) {
        onChange(currentValues.filter((v) => v !== option));
      } else if (!maxSelections || currentValues.length < maxSelections) {
        onChange([...currentValues, option]);
      }
    } else {
      onChange(option);
      setIsDropdownOpen(false);
    }
  };

  const displayValue = multi
    ? value?.length
      ? `${value.length} seleccionados`
      : placeholder
    : value || placeholder;

  return (
    <div className="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}
      <button
        className="dropdown-trigger"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>{displayValue}</span>
        <ChevronDown size={18} className={isDropdownOpen ? 'rotated' : ''} />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          {multi && maxSelections && (
            <div className="dropdown-counter">
              {value?.length || 0} / {maxSelections} seleccionados
            </div>
          )}
          {options.map((option, idx) => (
            <button
              key={idx}
              className={`dropdown-item ${multi ? (value?.includes(option) ? 'selected' : '') : value === option ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
              disabled={
                multi &&
                maxSelections &&
                value?.length >= maxSelections &&
                !value?.includes(option)
              }
            >
              {multi && (
                <span className="checkbox-indicator">
                  {value?.includes(option) && <Check size={12} />}
                </span>
              )}
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
