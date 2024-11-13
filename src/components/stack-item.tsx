import React from 'react';

interface  StackProps {
  title?: string,
  description?: string,
  icon?: any
}
const StackItem: React.FC<StackProps> = ({ title, icon, description }) => (
  <div className="stackItem">
    <p className="stackTitle">{title}</p>
    <div style={{ display: 'flex' }}>
      <img src={icon}/>
      <p className="stackDescription t3">{description}</p>
    </div>
  </div>
);

export default StackItem;
