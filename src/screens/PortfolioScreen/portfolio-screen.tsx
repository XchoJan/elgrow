import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/header';
import PortfolioElem from '../../components/portfolio-elem';
import Form from '../../components/form';

const PortfolioScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const images = [
    { uri: require('../../assets/images/portfolio1.png'), description: 'Подробнее', screen: '/vtb-detail' },
    { uri: require('../../assets/images/portfolio6.jpg'), description: 'Подробнее', screen: '/cowberry-detail' },
    { uri: require('../../assets/images/portfolio2.png'), description: 'Подробнее', screen: '/utg-detail' },
    { uri: require('../../assets/images/portfolio3.png'), description: 'Подробнее' },
    // { uri: require('../../assets/images/portfolio4.png'), description: 'Еще заполняем' },
    // { uri: require('../../assets/images/portfolio5.png'), description: 'Еще заполняем' },
    // { uri: require('../../assets/images/portfolio7.png'), description: 'Еще заполняем' },
    // { uri: require('../../assets/images/portfolio8.png'), description: 'Еще заполняем' },
    // { uri: require('../../assets/images/portfolio9.png'), description: 'NDA' },
    // { uri: require('../../assets/images/portfolio10.png'), description: 'Еще заполняем' },
    // { uri: require('../../assets/images/portfolio11.png'), description: 'Еще заполняем' },
  ];

  return (
    <div style={{ height: '100%', }}>
      <div className="portfolioHeader">
        {/*style={isVisible ? { position: 'relative' } : { position: 'sticky' }}*/}
        <Header onPressContactUs={()=> setIsVisibleForm(true)}  minHeight={true}/>
      </div>
      <div className="portfolioHeaderWhite"/>

      <div className="portfolioImgWrapper">
        {images.map((el, index)=> (
          <PortfolioElem caseScreen={el.screen} key={index} description={el.description} src={el.uri}/>
        ))}
      </div>
      <Form
        onClickClose={() => setIsVisibleForm(false)}
        isVisible={isVisibleForm}
      />
    </div>
  );
};

export default PortfolioScreen;
