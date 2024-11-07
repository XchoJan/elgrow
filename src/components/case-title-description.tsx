import React from 'react';

interface CaseProps {
  title?: string,
  description?: string
}

const CaseTitleDescription: React.FC<CaseProps> = ({ title, description }) => (
  <div className="case-title-desc-item">
    <p  className="case-item-description">
      {description}
    </p>

    <p  className="case-item-title">
      {title}
    </p>
  </div>
);

export default CaseTitleDescription;
