import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mousewheel, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../../components/header';
import Form from '../../components/form';

import VtbIcon from './icons/vtb-min.svg';
import CowberryIcon from './icons/cowberry-min.svg';
import UtgAviaIcon from './icons/utg-avia.svg';
import NesspressoIcon from './icons/nespresso.svg';
import TelekomIcon from './icons/telecom.svg';
import LuxyIcon from './icons/luxxy.svg';
import MamadoIcon from './icons/mamado.svg';
import SverlodIcon from './icons/sverlod.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';


const PortfolioScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const swiperRef = useRef<any>(null);
  const [activeLogoId, setActiveLogoId] = useState<any>(null); // состояние для активного логотипа по id
  const [hoveredLogoId, setHoveredLogoId] = useState<any>(null);

  const images = [
    {
      uri: require('../../assets/images/utgServices.png'),
      description: 'Подробнее',
      screen: '',
      title: 'UTG Услуги',
      color: '#FFFFFF',
      size: { width: '81px', height: '20px' },
      id:5125
    },
    {
      uri: require('../../assets/images/portfolio2.png'),
      description: 'Подробнее',
      screen: '/utg-detail',
      title: 'UTG Учебный центр',
      color: '#FFFFFF',
      size: { width: '51px', height: '20px' },
      id: 3123
    },
    {
      uri: require('../../assets/images/portfolio3.png'),
      description: 'Подробнее',
      screen: '/utg-support',
      title: 'UTG поддержка корпоративных сайтов\nи клиентских сервисов',
      color: '#FFFFFF',
      size: { width: '81px', height: '20px' },
      id: 5
    },
    {
      uri: require('../../assets/images/portfolio1.png'),
      description: 'Подробнее',
      screen: '/vtb-detail',
      title: 'ВТБ',
      color: '#303030',
      icon: VtbIcon,
      size: { width: '56px', height: '20px' },
      id: 1,
      activeSize: { width: '79px', height: '28px' },

    },
    {
      uri: require('../../assets/images/portfolio6.png'),
      description: 'Подробнее',
      screen: '/cowberry-detail',
      title: 'Брусника',
      color: '#FFFFFF',
      icon: CowberryIcon,
      size: { width: '128px', height: '20px' },
      activeSize: { width: '180px', height: '28px' },
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
      activeSize: { width: '72px', height: '28px' },

      id: 3
    },
    {
      uri: require('../../assets/images/utgServices.png'),
      description: 'Подробнее',
      screen: '',
      title: 'UTG Услуги',
      color: '#FFFFFF',
      size: { width: '81px', height: '20px' },
      id: 4
    },
    {
      uri: require('../../assets/images/portfolio3.png'),
      description: 'Подробнее',
      screen: '/utg-support',
      title: 'UTG поддержка корпоративных сайтов\nи клиентских сервисов',
      color: '#FFFFFF',
      size: { width: '81px', height: '20px' },
      id: 5
    },
    {
      uri: require('../../assets/images/nespresso.png'),
      description: 'Подробнее',
      screen: '',
      title: 'Nespresso',
      color: '#FFFFFF',
      icon: NesspressoIcon,
      size: { width: '100px', height: '20px' },
      activeSize: { width: '170px', height: '28px' },
      id: 6
    },
    {
      uri: require('../../assets/images/tellekom.png'),
      description: 'Подробнее',
      screen: '',
      title: 'Таттелеком',
      color: '#FFFFFF',
      icon: TelekomIcon,
      size: { width: '101px', height: '20px' },
      activeSize: { width: '159px', height: '28px' },
      id: 7
    },
    // {
    //   uri: require('../../assets/images/luxxy.png'),
    //   description: 'Подробнее',
    //   screen: '',
    //   title: 'Luxxxy',
    //   color: '#FFFFFF',
    //   icon: LuxyIcon,
    //   size: { width: '72px', height: '18px' },
    //   id: 8
    // },
    // {
    //   uri: require('../../assets/images/mamado.png'),
    //   description: 'Подробнее',
    //   screen: '',
    //   title: 'Mamado',
    //   color: '#FFFFFF',
    //   icon: MamadoIcon,
    //   size: { width: '28px', height: '28px' },
    //   id: 9
    // },
    // {
    //   uri: require('../../assets/images/svarlodskaya.png'),
    //   description: 'Подробнее',
    //   screen: '',
    //   title: 'Свердловская киностудия',
    //   color: '#FFFFFF',
    //   icon: SverlodIcon,
    //   size: { width: '81px', height: '28px' },
    //   id: 10
    // }
  ];

  const images2 = [
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
      uri: require('../../assets/images/utgServices.png'),
      description: 'Подробнее',
      screen: '',
      title: 'UTG Услуги',
      color: '#FFFFFF',
      size: { width: '81px', height: '20px' },
      id: 4
    },
    {
      uri: require('../../assets/images/portfolio3.png'),
      description: 'Подробнее',
      screen: '/utg-support',
      title: 'UTG поддержка корпоративных сайтов\nи клиентских сервисов',
      color: '#FFFFFF',
      size: { width: '81px', height: '20px' },
      id: 5
    },
    {
      uri: require('../../assets/images/nespresso.png'),
      description: 'Подробнее',
      screen: '',
      title: 'Nespresso',
      color: '#FFFFFF',
      icon: NesspressoIcon,
      size: { width: '100px', height: '20px' },
      id: 6
    },
    {
      uri: require('../../assets/images/tellekom.png'),
      description: 'Подробнее',
      screen: '',
      title: 'Таттелеком',
      color: '#FFFFFF',
      icon: TelekomIcon,
      size: { width: '101px', height: '20px' },
      id: 7
    },
    // {
    //   uri: require('../../assets/images/luxxy.png'),
    //   description: 'Подробнее',
    //   screen: '',
    //   title: 'Luxxxy',
    //   color: '#FFFFFF',
    //   icon: LuxyIcon,
    //   size: { width: '72px', height: '18px' },
    //   id: 8
    // },
    // {
    //   uri: require('../../assets/images/mamado.png'),
    //   description: 'Подробнее',
    //   screen: '',
    //   title: 'Mamado',
    //   color: '#FFFFFF',
    //   icon: MamadoIcon,
    //   size: { width: '28px', height: '28px' },
    //   id: 9
    // },
    // {
    //   uri: require('../../assets/images/svarlodskaya.png'),
    //   description: 'Подробнее',
    //   screen: '',
    //   title: 'Свердловская киностудия',
    //   color: '#FFFFFF',
    //   icon: SverlodIcon,
    //   size: { width: '81px', height: '28px' },
    //   id: 10
    // }
  ];

  const imageRefs = useRef<HTMLDivElement[]>([]);

  const handleIconClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  useEffect(() => {
    const syncActiveIndex = () => {
      if (swiperRef.current) {
        // setActiveLogoId(swiperRef.current.realIndex);
      }
    };

    if (swiperRef.current) {
      swiperRef.current.on('slideChange', syncActiveIndex);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', syncActiveIndex);
      }
    };
  }, []);


  useEffect(()=>{
    handleIconClick(2);
  }, []);


  return (
    <div style={{ overflowX: 'hidden' }}>
      <div style={{ height: '100%' }}>
        <div className="portfolio-screen-header">
          <Header
            onPressContactUs={() => setIsVisibleForm(true)}
            minHeight={true}
          />
        </div>
        <div>
          <div className="portfolio-logo-container">
            {images.map((el, index) =>
              el.icon ? (
                <img
                  onMouseEnter={() => setHoveredLogoId(el.id)} // Увеличиваем при наведении
                  onMouseLeave={() => setHoveredLogoId(null)} // Сбрасываем размер при уходе мыши
                  key={index}
                  style={{
                    ...el.size,
                    transition: 'all 0.3s ease', // плавность при изменении
                    opacity: (activeLogoId === el.id || hoveredLogoId === el.id) ? 0.6 : 1, // добавляем opacity
                  }}
                  src={el.icon}
                  alt=""
                  className="protfolio-logo"
                  onClick={() => {
                    // При клике устанавливаем активный логотип
                    setActiveLogoId(el.id);
                    handleIconClick(index === 0 ? index : index - 1);
                  }}
                />
              ) : null
            )}
          </div>

          <div className="portfolio-big-container">


            <Swiper
              slidesPerView={2.2}
              freemode
              spaceBetween={30}
              loop={true}
              modules={[Mousewheel, FreeMode]}
              className="mySwiper"
              onSwiper={(swiper: any) => (swiperRef.current = swiper)}
              freeMode={true}
              freeModeMomentum={true}
              mousewheel={true}
            >
              {images.map((el, index) => (
                <SwiperSlide className="portfolio-image-div" key={index}>
                  <div
                    ref={ref => (imageRefs.current[index] = ref!)}
                    data-index={index}
                  >
                    <div style={{ position: 'relative' }}>
                      <img src={el.uri} alt="" className="portfolio-image" />
                      <div className="portfolio-opacity">
                        <Link style={{ textDecoration: 'none' }} to={el.screen}>
                          <span className="portfolioElemImgAnimText">
                            Подробнее
                          </span>
                        </Link>
                      </div>
                    </div>
                    <p style={{ marginTop: 0, fontWeight: 300 }} className="H3">
                      {el.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="portfolio-min-container">
            {images2.map((el, index) => (
              <Link
                to={el.screen}
                key={index}
                data-index={index}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={el.uri} alt="" className="portfolio-image" />
                </div>
                <p style={{ marginTop: 0 }} className="H3">
                  {el.title}
                </p>
                <div style={{ marginBottom: '40px' }}/>
              </Link>
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
