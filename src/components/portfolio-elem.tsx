import React from 'react';

interface PortfolioProps {
  src?: string,
  description?: string
}

const PortfolioElem: React.FC<PortfolioProps> = ({ src, description }) => {

  const getCursorType = (description?: string): string => {
    if (description === 'Смотреть кейс') return 'pointer';
    if (description === 'Еще заполняем') return 'wait';
    if (description === 'NDA') return 'context-menu';
    return 'default';
  };

  return (
    <div
      className="portfolioElemContainer"
    >
      <div className="portfolioElemImgAnim">
        <span  style={{ cursor: getCursorType(description) }} className="portfolioElemImgAnimText">{description}</span>
      </div>
      <img className="portfolioElemImg" src={src} alt="" />
    </div>
  );
};

export default PortfolioElem;
