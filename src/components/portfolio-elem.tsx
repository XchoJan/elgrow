import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioProps {
  src?: string,
  description?: string,
  caseScreen?: any,
  color?: string,
  title?: string
}

const PortfolioElem: React.FC<PortfolioProps> = ({
  src,
  description,
  caseScreen,
  color,
  title
}) => {

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
          <span  style={{ cursor: getCursorType(description) }} className="portfolioElemImgAnimText">
            {description}
          </span>
        </Link>
      </div>
      <img className="portfolioElemImg" src={src} alt="" />
      <p style={{ color: color }} className="portfolioElemTitle H2">{title}</p>
    </div>
  );
};

export default PortfolioElem;
