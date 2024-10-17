import React from 'react';

import Header from '../../components/header';

const PortfolioScreen: React.FC = () => {
  const a = 1;

  return (
    <div>
      <div className="portfolioHeader">
        <Header/>
      </div>

      <div className="portfolioImgWrapper">
        <div className="imagesContainer">
          <img className="portfolioTopImg" src={require('../../assets/images/portfolio1.png')} alt=""/>
          <img className="portfolioTopImg" src={require('../../assets/images/portfolio2.png')} alt=""/>
        </div>
        <div className="imagesContainer">
          <img className="portfolioTopImg" src={require('../../assets/images/portfolio3.png')} alt=""/>
          <img className="portfolioTopImg" src={require('../../assets/images/portfolio4.png')} alt=""/>
        </div>

      </div>
    </div>
  );
};

export default PortfolioScreen;
