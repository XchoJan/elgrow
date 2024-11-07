import React, { useEffect, useState, useRef } from 'react';

import Header from '../../components/header';
import CaseTitleDescription from '../../components/case-title-description';
import StackItem from '../../components/stack-item';
import ReactJSIcon from '../../assets/servicesIcons/reactJs.svg';
import PortfolioElem from '../../components/portfolio-elem';
import AnimatedCases from '../../components/animated-cases';
import Form from '../../components/form';
import PostgreSQLIcon from '../../assets/servicesIcons/postgreSQL.svg';
import MongoDBIcon from '../../assets/servicesIcons/mongoDb.svg';
import NestJSIcon from '../../assets/servicesIcons/nestJs.svg';
import PythonIcon from '../../assets/servicesIcons/python.svg';
import JavaSpringIcon from '../../assets/servicesIcons/javaSpring.svg';
import PostGisIcon from '../../assets/servicesIcons/postGis.svg';

const CowberryDetailScreen: React.FC = () => {
  const scrollRef = useRef<any>();
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const stack = [
    { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
    { name: 'Python', logoPath: PythonIcon },
    { name: 'NestJS', logoPath: NestJSIcon },
    { name: 'Java Spring', logoPath: JavaSpringIcon },
    { name: 'PostGIS', logoPath: PostGisIcon },
    { id: 'onlyIcon', logoPath: MongoDBIcon },
  ];
  const stack2 = [
    { name: 'ReactJS', logoPath: ReactJSIcon },
  ];


  useEffect(() => {
    if (!scrollRef.current) return;

    scrollRef.current.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [scrollRef]);

  return (
    <div ref={scrollRef}>
      <div className="portfolioHeader">
        <Header onPressContactUs={()=> setIsVisibleForm(true)}  minHeight={true}/>
      </div>

      <div className="utg-container">
        <h2 className="utg-title">Брусника</h2>
        <div className="utg-case-info-box">
          <CaseTitleDescription title={'Аутстаффинг'} description={'Тип работ'}/>
          <div style={{ width: '100px' }}/>
          <CaseTitleDescription title={'2024'} description={'Год'}/>
        </div>

        <div>
          <img className="utg-img" src={require('../../assets/images/cowberryImg.png')}/>

          <p className="H20B">
            Аутстаффинг разработчиков
          </p>

          <div className="details-stack-box">
            <div style={{ height: '250px' }}>
              <span style={{ color: '#BDBDBD' }} className="T20">Бэкенд</span>
              <div className="cowberryStackItemsBox">
                {stack.map((el, index: any)=> (
                  <StackItem key={index} icon={el.logoPath} description={el.name}/>
                ))}
              </div>
            </div>

            <div style={{ height: '100px' }}>
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
          caseScreen={'/vtb-detail'}
          description={'Смотреть кейс'}
          src={require('../../assets/images/portfolio1.png')}
        />
        <PortfolioElem
          caseScreen={''}
          description={'Еще заполняем'}
          src={require('../../assets/images/portfolio3.png')}
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

export default CowberryDetailScreen;
