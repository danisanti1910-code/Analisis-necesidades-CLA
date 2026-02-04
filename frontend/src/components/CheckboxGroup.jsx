import React from 'react';
import { Check } from 'lucide-react';

const CheckboxGroup = ({
  options,
  values,
  onChange,
  maxSelections = null,
}) => {
  const handleToggle = (option) => {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else if (!maxSelections || values.length < maxSelections) {
      onChange([...values, option]);
    }
  };

  return (
    <div className="checkbox-group">
      {maxSelections && (
        <div className="selection-counter">
          <span>{values.length}</span> / {maxSelections} seleccionados
        </div>
      )}
      {options.map((option, idx) => (
        <label
          key={idx}
          className={`checkbox-item ${values.includes(option) ? 'checked' : ''} ${maxSelections && values.length >= maxSelections && !values.includes(option) ? 'disabled' : ''}`}
        >
          <input
            type="checkbox"
            checked={values.includes(option)}
            onChange={() => handleToggle(option)}
            disabled={
              maxSelections &&
              values.length >= maxSelections &&
              !values.includes(option)
            }
          />
          <span className="checkbox-box">
            {values.includes(option) && <Check size={12} />}
          </span>
          <span className="checkbox-label">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
