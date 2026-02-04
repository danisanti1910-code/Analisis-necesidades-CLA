import React from 'react';

const RadioGroup = ({ options, value, onChange, name }) => (
  <div className="radio-group">
    {options.map((option, idx) => (
      <label
        key={idx}
        className={`radio-item ${value === option.value ? 'checked' : ''}`}
      >
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
        />
        <span className="radio-dot" />
        <span className="radio-label">{option.label}</span>
      </label>
    ))}
  </div>
);

export default RadioGroup;
