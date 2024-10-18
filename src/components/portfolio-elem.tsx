import React from 'react';

interface PortfolioProps {
  src?: string,
  description?: string
}
const PortfolioElem: React.FC<PortfolioProps> = ({ src, description }) => (
  <div className="portfolioElemContainer">
    <div className="portfolioElemImgAnim">
      <span className="portfolioElemImgAnimText">{description}</span>
    </div>
    <img className="portfolioElemImg" src={src} alt="" />
  </div>
);

export default PortfolioElem;
