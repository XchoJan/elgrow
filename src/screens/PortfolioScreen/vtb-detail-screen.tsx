import React, { useState } from 'react';

import Header from '../../components/header';
import Form from '../../components/form';
import CaseTitleDescription from '../../components/case-title-description';
import StackItem from '../../components/stack-item';
import CPlus from '../../assets/servicesIcons/cPlus.svg';
import ReactJSIcon from '../../assets/servicesIcons/reactJs.svg';
import PortfolioElem from '../../components/portfolio-elem';
import AnimatedCases from '../../components/animated-cases';

const VtbDetailScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const stack = [
    { name: 'C# .NET', logoPath:  CPlus },
  ];
  const stack2 = [
    { name: 'ReactJS', logoPath: ReactJSIcon },
  ];


  return (
    <div>
      <div className="portfolioHeader">
        <Header onPressContactUs={()=> setIsVisibleForm(true)}  minHeight={true}/>
      </div>

      <div className="utg-container">
        <h2 className="utg-title">ВТБ</h2>
        <div className="utg-case-info-box">
          <CaseTitleDescription title={'Аутстаффинг'} description={'Тип работ'}/>
          <div style={{ width: '100px' }}/>
          <CaseTitleDescription title={'2021-2023'} description={'Год'}/>
        </div>

        <div>
          <img className="utg-img" src={require('../../assets/images/vtbImage.png')}/>

          <p className="H20B">
            Аутстаффинг разработчиков
          </p>

          <div className="details-stack-box">
            <div style={{ height: 'auto' }}>
              <span style={{ color: '#BDBDBD' }} className="T20">Бэкенд</span>
              <div className="cowberryStackItemsBox">
                {stack.map((el, index: any)=> (
                  <StackItem key={index} icon={el.logoPath} description={el.name}/>
                ))}
              </div>
            </div>

            <div style={{ height: 'auto' }}>
              <span style={{ color: '#BDBDBD' }} className="T20">Фронтенд</span>
              <div className="cowberryStackItemsBox">
                {stack2.map((el, index: any)=> (
                  <StackItem key={index} icon={el.logoPath} description={el.name}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p style={{ marginLeft: 'clamp(1rem, 0.276rem + 2.89vw, 3.75rem)' }} className="H20B">
        Следующие кейсы
      </p>

      <div className="utg-next-cases-container">
        <PortfolioElem
          caseScreen={''}
          description={'Еще заполняем'}
          src={require('../../assets/images/portfolio4.png')}
        />
        <PortfolioElem
          caseScreen={'/cowberry-detail'}
          description={'Смотреть кейс'}
          src={require('../../assets/images/portfolio6.jpg')}
        />
      </div>

      <div className="utg-all-cases">
        <AnimatedCases link={'/portfolio'} title={'Все кейсы'}/>
      </div>

      <Form
        onClickClose={() => setIsVisibleForm(false)}
        isVisible={isVisibleForm}
      />
    </div>
  );
};

export default VtbDetailScreen;
