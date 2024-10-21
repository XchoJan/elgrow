import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/header';
import PortfolioElem from '../../components/portfolio-elem';

const PortfolioScreen: React.FC = () => {
  const images = [
    { uri: require('../../assets/images/portfolio1.png'), description: 'NDA' },
    { uri: require('../../assets/images/portfolio2.png'), description: 'Смотреть кейс' },
    { uri: require('../../assets/images/portfolio3.png'), description: 'Еще заполняем' },
    { uri: require('../../assets/images/portfolio4.png'), description: 'Еще заполняем' },
    { uri: require('../../assets/images/portfolio5.png'), description: 'Еще заполняем' },
    { uri: require('../../assets/images/portfolio6.jpg'), description: 'NDA' },
    { uri: require('../../assets/images/portfolio7.png'), description: 'Еще заполняем' },
    { uri: require('../../assets/images/portfolio8.png'), description: 'Еще заполняем' },
    { uri: require('../../assets/images/portfolio9.png'), description: 'NDA' },
    { uri: require('../../assets/images/portfolio10.png'), description: 'Еще заполняем' },
    { uri: require('../../assets/images/portfolio11.png'), description: 'Еще заполняем' },
  ];

  return (
    <div style={{ height: '100%', }}>
      <div className="portfolioHeader">
        {/*style={isVisible ? { position: 'relative' } : { position: 'sticky' }}*/}
        <Header minHeight={true}/>
      </div>
      <div className="portfolioHeaderWhite"/>

      <div className="portfolioImgWrapper">
        {images.map((el, index)=> (
          <PortfolioElem key={index} description={el.description} src={el.uri}/>
        ))}
      </div>
    </div>
  );
};

export default PortfolioScreen;
