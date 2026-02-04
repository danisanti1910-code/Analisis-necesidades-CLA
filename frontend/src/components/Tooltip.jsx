import React from 'react';

const Tooltip = ({ children, text }) => (
  <div className="tooltip-wrapper">
    {children}
    <div className="tooltip-content">{text}</div>
  </div>
);

export default Tooltip;
