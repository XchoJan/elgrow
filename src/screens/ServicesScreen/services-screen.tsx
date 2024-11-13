import React, { useState } from 'react';

import Header from '../../components/header';
import NodeJsIcon from '../../assets/servicesIcons/nodeJs.svg';
import PostgreSQLIcon from '../../assets/servicesIcons/postgreSQL.svg';
import MongoDBIcon from '../../assets/servicesIcons/mongoDb.svg';
import ReactJSIcon from '../../assets/servicesIcons/reactJs.svg';
import NestJSIcon from '../../assets/servicesIcons/nestJs.svg';
import VueJSIcon from '../../assets/servicesIcons/vueJs.svg';
import KotlinIcon from '../../assets/servicesIcons/kotlin.svg';
import CPlus from '../../assets/servicesIcons/cPlus.svg';
import PythonIcon from '../../assets/servicesIcons/python.svg';
import JavaSpringIcon from '../../assets/servicesIcons/javaSpring.svg';
import PostGisIcon from '../../assets/servicesIcons/postGis.svg';
import MariaDbIcon from '../../assets/servicesIcons/mariaDb.svg';
import ArrowRight from '../../assets/svg/arrow-right.svg';
import OraclieIcon from '../../assets/servicesIcons/oracle.svg';
import EPayIcon from '../../assets/servicesIcons/epay.svg';
import BitrixIcon from '../../assets/servicesIcons/bitrix.svg';
import CIcon from '../../assets/servicesIcons/1c.svg';
import AmoCrm from '../../assets/servicesIcons/amo.svg';
import Form from '../../components/form';
import AnimatedCases from '../../components/animated-cases';


const ServicesScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const filters = [
    {
      name: 'Digital',
      description:
        'Комплексная интеграция \n информационных систем \n на основе веб и мобильных \n технологий',
      stack: [
        { name: 'NodeJs', logoPath: NodeJsIcon },
        { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
        { id: 'onlyIcon', logoPath: MongoDBIcon },
        { name: 'ReactJS', logoPath: ReactJSIcon },
        { name: 'NestJS', logoPath: NestJSIcon },
        { name: 'VueJS', logoPath: VueJSIcon },
      ]
    },

    {
      name: 'Intranet',
      description: 'Корпоративные порталы \n и внутренние системы \n предприятий',
      stack: [
        { name: 'MariaDB', logoPath: MariaDbIcon },
        { name: 'C# .NET', logoPath:  CPlus },
        { name: 'Python', logoPath: PythonIcon },
        { name: 'Java Spring', logoPath: JavaSpringIcon },
        { name: 'PostGIS', logoPath: PostGisIcon },
        { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
        { id: 'onlyIcon', logoPath: MongoDBIcon },
      ]
    },
    {
      name: 'Mobile',
      description:
        'Разработка нативных \n и кросс-платформенных \n мобильных приложений',
      stack: [
        { name: 'React Native', logoPath: ReactJSIcon },
        { name: 'Kotlin', logoPath: KotlinIcon },

      ]
    },
    { name: 'SLA',
      description: 'Техническая поддержка \n ваших проектов 24/7' },
    {
      name: 'E-commerce',
      description: 'Разработка крупных \n интернет-магазинов',
      stack: [
        { id: 'onlyIcon', logoPath: OraclieIcon },
        { name: 'СБЕР Pay', logoPath:  EPayIcon },
        { id: 'onlyIcon', logoPath: AmoCrm },
        { id: 'onlyIcon', logoPath: BitrixIcon },
        { name: '1C', logoPath:  CIcon },
        { name: 'Другое' }
      ]
    },
    {
      name: 'Аутстаффинг',
      description: 'Только штатные сотрудники \n уровня middle +',
      stack: [
        { name: 'MariaDB', logoPath: MariaDbIcon },
        { name: 'Python', logoPath: PythonIcon },
        { name: 'Java Spring', logoPath: JavaSpringIcon },
        { name: 'PostGIS', logoPath: PostGisIcon },
        { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
        { logoPath: MongoDBIcon, id: 'onlyIcon' },
        { name: 'React Native', logoPath: ReactJSIcon },
        { name: 'Kotlin', logoPath: KotlinIcon },
        { name: 'C# .NET', logoPath:  CPlus },
        { name: 'NodeJs', logoPath: NodeJsIcon },
        { name: 'NestJS', logoPath: NestJSIcon },
        { name: 'VueJS', logoPath: VueJSIcon },
        { name: 'ReactJS', logoPath: ReactJSIcon },

      ]
    },
  ];

  const [activeFilter, setActiveFilter] = useState<any>({
    name: 'Digital',
    description:
      'Комплексная интеграция \n информационных систем \n на основе веб и мобильных \n технологий',
    stack: [
      { name: 'NodeJs', logoPath: NodeJsIcon },
      { name: 'PostgreSQL', logoPath: PostgreSQLIcon },
      { id: 'onlyIcon', logoPath: MongoDBIcon },
      { name: 'ReactJS', logoPath: ReactJSIcon },
      { name: 'NestJS', logoPath: NestJSIcon },
      { name: 'VueJS', logoPath: VueJSIcon },
    ]
  });

  return (
    <div style={{ overflowY: 'auto', height: '100vh', overflowX: 'hidden', scrollbarWidth: 'none' }}>
      <div className="portfolioHeader">
        <Header  onPressContactUs={()=> setIsVisibleForm(true)} minHeight={true} />
      </div>

      <div className="servicesBox">
        <div style={{ position: 'relative', marginRight: '15%' }}>
          <div className="servicesFilters">
            {filters.map((item, index: any) => (
              <span
                key={index}
                className={`servicesFiltersElem ${activeFilter.name === item.name ? 'servicesActiveFiltersElem' : ''}`}
                onClick={() => setActiveFilter(item)}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="servicesArrowRight">
            <img src={ArrowRight} alt="" />
          </div>
        </div>

        <div className="servicesDescriptionBox">
          <p className="servicesActiveFiltersDescription t1">
            {activeFilter.description}
          </p>


          {/*{activeFilter?.stack?.length > 0 && (*/}
          {/*  <p className="tecnology-title">Технологии</p>*/}
          {/*)}*/}
          <div style={activeFilter?.stack?.length === 6 ? { maxWidth: '560px' } : {}} className="servicesCasesBox">
            {activeFilter?.stack?.map((el: any, index: any) => (
              <div className="tecnology-elem-container" key={index}>
                {el.logoPath &&
                  <img
                    style={
                      el.id === 'onlyIcon'
                        ? { width: '88px', height: '24px' }
                        : {}
                    }
                    className="tecnology-logo"
                    src={el.logoPath}
                    alt=""
                  />
                }
                <p>{el?.name}</p>
              </div>
            ))}


            {/*<AnimatedCases title={'Технологии'}/>*/}
            {/*<div style={{ marginRight: '80px' }}/>*/}
            {/*<AnimatedCases link={'/portfolio'} title={'Кейсы'}/>*/}
          </div>
          <div className="animatedCaseFromServices">
            <AnimatedCases onClick={()=> setIsVisibleForm(true)} title={'Стать клиентом'}/>
          </div>
        </div>
      </div>
      <Form
        onClickClose={() => setIsVisibleForm(false)}
        isVisible={isVisibleForm}
      />
    </div>
  );
};

export default ServicesScreen;
