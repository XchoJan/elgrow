import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../components/header';
import CaseTitleDescription from '../../components/case-title-description';
import StackItem from '../../components/stack-item';
import NodeJs from '../../assets/servicesIcons/nodeJs.svg';
import ReactJSIcon from '../../assets/servicesIcons/reactJs.svg';
import Bitrix from '../../assets/servicesIcons/bitrix1c.svg';
import PortfolioElem from '../../components/portfolio-elem';
import AnimatedCases from '../../components/animated-cases';
import Form from '../../components/form';
import SliderLeft from '../../assets/svg/sliderLeft.svg';
import SliderRight from '../../assets/svg/slider-right.svg';


const UtgSupportScreen:React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Функция для обновления ширины экрана
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Устанавливаем слушатель для обновления ширины экрана
    window.addEventListener('resize', updateScreenWidth);

    // Удаляем слушатель при размонтировании компонента
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);


  // console.log(screenWidth, 'screenWidth');

  const images1 = [
    require('./utg-assets/g-luper.png'),
    require('./utg-assets/utg-avia1.png'),
    require('./utg-assets/geosys.png'),
    require('./utg-assets/aerokit.png'),
    require('./utg-assets/RB-Solution.png'),
  ];

  const images2 = [
    require('./utg-assets/g-luper2.png'),
    require('./utg-assets/utg-avia2.png'),
    require('./utg-assets/geosys2.png'),
    require('./utg-assets/aerokit2.png'),
    require('./utg-assets/RB-Solution2.png'),
  ];


  const images3 = [
    require('./utg-assets/g-luper3.png'),
    require('./utg-assets/utg-avia3.png'),
    require('./utg-assets/geosys3.png'),
    require('./utg-assets/aerokit3.png'),
    require('./utg-assets/RB-Solution3.png'),
  ];

  const getImagesForScreen = () => {
    if (screenWidth <= 430) {
      return images3;
    } else if (screenWidth <= 768) {
      return images2;
    } else {
      return images1;
    }
  };
  const images = getImagesForScreen();


  return (
    <div>
      <div className="portfolioHeader">
        <Header onPressContactUs={()=> setIsVisibleForm(true)}  minHeight={true}/>
      </div>

      <div className="utg-container">
        <h2 className="H1" >UTG поддержка корпоративных сайтов и клиентских сервисов</h2>
        <div style={{ marginBottom: '34px' }}  className="utg-case-info-box">
          <CaseTitleDescription title={'UTG Group'} description={'Клиент'}/>
          <div style={{ width: '40px' }}/>
          <CaseTitleDescription title={'2022-2024'} description={'Год'}/>
        </div>

        <div>
          <p className="H2">
            Введение
          </p>
          <p className="t3">
            На протяжении двух лет мы занимаемся поддержкой и развитием сайтов для бизнеса авиации и группы компаний UTG. Наши проекты включают:
          </p>

          <ul>
            <li className="utg-li">UTG Private Aviation</li>
            <li className="utg-li">UTG Group</li>
            <li className="utg-li">G-Luper</li>
            <li className="utg-li">Aero-Smart</li>
            <li className="utg-li">UTG University</li>
            <li className="utg-li">UTG Integration</li>
          </ul>

          <p className="t3" style={{ marginBottom: '56px' }}>
            Изначально нас привлекли для наведения порядка на сайтах, оставленных без присмотра предыдущим подрядчиком на платформе “1С Битрикс”. Мы добавили в команду специалиста
            и начали активную работу.
          </p>

          <p className="H2">
            О компании
          </p>
          <p className="t3" style={{ marginBottom: '56px' }}>
            Группа компаний UTG основана в 1998 году и является крупнейшим независимым оператором наземного авиационного обслуживания полного цикла. Подразделения компании находятся в аэропортах Внуково, Домодедово и Пулково. Центр деловой авиации UTG Private Aviation в аэропорту Домодедово предоставляет полный комплекс услуг по обслуживанию пассажиров деловой авиации и регулярных рейсов.
          </p>

          <p className="H2">
            Работы, выполненные нашей командой
          </p>
          <p className="t3">
            1. Разработка нового и внутреннего функционала<br/>
            2. Регулярная поддержка и техническое обслуживание сайтов компании<br/>
            3. В 2023 году начата разработка нового сайта для UTG Private Aviation
          </p>
          <div
            onMouseMove={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
            className="box"  style={{ marginBottom: '56px', position: 'relative', marginTop: '44px' }}
          >
            <Carousel
              showIndicators={false}
              useKeyboardArrows={true}
              showThumbs={false}
              showStatus={false}
              showArrows={isHovered || screenWidth <= 768}
              renderArrowNext={(clickHandler, hasNext) => (
                hasNext && (
                  <div className="sliderRight" onClick={clickHandler}>
                    <img className="sliderArrowsStyle" src={SliderRight}/>
                  </div>
                )
              )}

              renderArrowPrev={(clickHandler, hasNext) => (
                hasNext && (
                  <div className="sliderLeft" onClick={clickHandler}>
                    <img className="sliderArrowsStyle" src={SliderLeft}/>
                  </div>
                )
              )}
            >
              {images.map((URL, index) => (
                <div key={index} className="slide">
                  <img alt="sample_file" src={URL} key={index} />
                </div>
              ))}
            </Carousel>
          </div>
          <p className="H2">Технологический стек</p>
          <div className="stackItemsBox">
            <div>
              <span className="stackTitle">Бэкенд</span>
              <StackItem icon={NodeJs} description={'C# .NET'}/>
            </div>
            <div>
              <span className="stackTitle">Фронтенд</span>
              <StackItem icon={ReactJSIcon} description={'React'}/>
            </div>

            <div>
              <span className="stackTitle">CMS</span>
              <StackItem icon={Bitrix} description={'1C Битрикс'}/>
            </div>
          </div>

        </div>
      </div>
      <p style={{ marginLeft: 'clamp(1rem, 0.276rem + 2.89vw, 3.75rem)' }} className="H2">
        Следующие кейсы
      </p>

      <div className="utg-next-cases-container">
        <PortfolioElem
          caseScreen={'/utg-detail'}
          description={'Подробнее'}
          src={require('../../assets/images/portfolio2.png')}
          title="UTG Учебный центр"
          color="#fff"
        />
        <PortfolioElem
          caseScreen={'/cowberry-detail'}
          description={'Подробнее'}
          src={require('../../assets/images/portfolio6.png')}
          title="Брусника"
          color="#fff"
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

export default UtgSupportScreen;
