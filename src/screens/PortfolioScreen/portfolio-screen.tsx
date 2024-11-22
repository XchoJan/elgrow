import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import Header from '../../components/header';
import PortfolioElem from '../../components/portfolio-elem';
import Form from '../../components/form';

import VtbIcon from './icons/vtb-min.svg';
import CowberryIcon from './icons/cowberry-min.svg';
import UtgAviaIcon from './icons/utg-avia.svg';
import NesspressoIcon from './icons/nespresso.svg';
import TelekomIcon from './icons/telecom.svg';
import LuxyIcon from './icons/luxxy.svg';
import MamadoIcon from './icons/mamado.svg';
import SverlodIcon from './icons/sverlod.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const PortfolioScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [activeLogo, setActiveLogo] = useState<any>(null);
  const scrollContainerRef = useRef<any>(null);
  const [images, setImages] = useState([
    {
      uri: require('../../assets/images/portfolio1.png'),
      description: 'Подробнее',
      screen: '/vtb-detail',
      title: 'ВТБ',
      color: '#303030',
      icon: VtbIcon,
      size: { width: '56px', height: '20px' },
      id: 1
    },
    {
      uri: require('../../assets/images/portfolio6.png'),
      description: 'Подробнее',
      screen: '/cowberry-detail',
      title: 'Брусника',
      color: '#FFFFFF',
      icon: CowberryIcon,
      size: { width: '128px', height: '20px' },
      id: 2
    },
    {
      uri: require('../../assets/images/portfolio2.png'),
      description: 'Подробнее',
      screen: '/utg-detail',
      title: 'UTG Учебный центр',
      color: '#FFFFFF',
      icon: UtgAviaIcon,
      size: { width: '51px', height: '20px' },
      id: 3
    },
    {
      uri: require('../../assets/images/portfolio3.png'),
      description: 'Подробнее',
      screen: '/utg-support',
      title: 'UTG поддержка корпоративных сайтов\nи клиентских сервисов',
      color: '#FFFFFF',
      icon: SverlodIcon,
      size: { width: '81px', height: '20px' },
      id: 4
    },
  ]);

  const imageRefs = useRef<HTMLDivElement[]>([]);


  const data = [...images, ...images, ...images];

  const handleWheel = (e: any) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };


  const handleIconClick = (index: number) => {
    const element = imageRefs.current[index];
    const container = scrollContainerRef.current;
    if (!element || !container) return;

    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Проверяем, виден ли элемент полностью
    const isFullyVisible =
      elementRect.left >= containerRect.left && elementRect.right <= containerRect.right;

    if (!isFullyVisible) {
      // Скроллим элемент в центр
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  useEffect(() => {
    const element = imageRefs.current[1];
    if (element) {
      element.scrollIntoView({ block: 'center', inline: 'center' });
      document.body.scrollTo({ top: 0 });
    }
  }, []);

  const handleElementClick = (index: number) => {
    const element = imageRefs.current[index];
    const container = scrollContainerRef.current;
    if (!element || !container) return;

    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Проверяем, виден ли элемент полностью
    const isFullyVisible =
      elementRect.left >= containerRect.left &&
      elementRect.right <= containerRect.right;

    if (!isFullyVisible) {
      // Скроллим элемент в центр
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div style={{ height: '100%' }}>
        <div className="portfolio-screen-header">
          <Header
            onPressContactUs={() => setIsVisibleForm(true)}
            minHeight={true}
          />
        </div>
        <div style={{ overflowX: 'hidden' }}>
          <div className="portfolio-logo-container">
            {images.map((el, index) => (
              <img
                onMouseMove={() => setActiveLogo(index)}
                onMouseLeave={() => setActiveLogo(null)}
                key={index}
                style={{
                  ...el.size,
                  opacity:
                    activeLogo !== null && activeLogo !== index ? 0.6 : 1, // Устанавливаем opacity для всех, кроме активного
                }}
                src={el.icon}
                alt=""
                className="protfolio-logo"
                onClick={() => handleIconClick(index)}
              />
            ))}
          </div>

          <div
            className="portfolioImgWrapper"
            ref={scrollContainerRef}
            onWheel={handleWheel}
          >
            {images.map((el, index) => (
              <div
                key={index}
                ref={ref => (imageRefs.current[index] = ref!)} // Связываем реф с элементом
                className="portfolio-image-div"
                data-index={index} // Добавляем атрибут data-index
                onClick={() => handleElementClick(index)} // Добавляем обработчик клика
              >
                <div style={{ position: 'relative', marginBottom: '8px' }}>
                  <img src={el.uri} alt="" className="portfolio-image" />
                  <div className="portfolio-opacity">
                    <Link style={{ textDecoration: 'none' }} to={el.screen}>
                      <span className="portfolioElemImgAnimText">Подробнее</span>
                    </Link>
                  </div>
                </div>
                <p className="H2">{el.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Form
          onClickClose={() => setIsVisibleForm(false)}
          isVisible={isVisibleForm}
        />
      </div>
    </div>
  );
};

export default PortfolioScreen;
