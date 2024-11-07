import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioProps {
  src?: string,
  description?: string,
  caseScreen?: any
}

const PortfolioElem: React.FC<PortfolioProps> = ({ src, description, caseScreen }) => {

  const getCursorType = (description?: string): string => {
    if (description === 'Подробнее') return 'pointer';
    if (description === 'Еще заполняем') return 'wait';
    if (description === 'NDA') return 'context-menu';
    return 'default';
  };

  return (
    <div
      className="portfolioElemContainer"
    >
      <div className="portfolioElemImgAnim">
        <Link style={{ textDecoration: 'none' }} to={caseScreen}>
          <span  style={{ cursor: getCursorType(description) }} className="portfolioElemImgAnimText">{description}</span>
        </Link>
      </div>
      <img className="portfolioElemImg" src={src} alt="" />
    </div>
  );
};

export default PortfolioElem;
