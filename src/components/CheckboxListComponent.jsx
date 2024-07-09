// src/components/CheckboxListComponent.jsx
import React from 'react';
import './CheckboxListComponent.css';

const CheckboxListComponent = () => {
  return (
    <div className="checkbox-list">
      <input type="checkbox" className="custom-checkbox" />
      <input type="checkbox" className="custom-checkbox" defaultChecked />
      <input type="checkbox" className="custom-checkbox" defaultChecked style={{ backgroundColor: 'blue' }} />
      <input type="checkbox" className="custom-checkbox" defaultChecked style={{ backgroundColor: 'blue' }} />
      <input type="checkbox" className="custom-checkbox" defaultChecked style={{ backgroundColor: 'blue' }} />
      <input type="checkbox" className="custom-checkbox" />
      <input type="checkbox" className="custom-checkbox" />
      <input type="checkbox" className="custom-checkbox" />
    </div>
  );
};

export default CheckboxListComponent;
