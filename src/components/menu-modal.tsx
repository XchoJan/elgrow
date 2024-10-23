import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AppLogo from '../assets/svg/logo.svg';
import img1 from '../assets/images/block.png';
import img2 from '../assets/images/block1.png';
import img3 from '../assets/images/block2.png';
import { setMenuVisibility } from '../store/features/exampleSlice';
import ElgrowLogo from '../assets/svg/elgrow.svg';

import AnimatedCases from './animated-cases';

interface MenuModalProps {
  isVisible: boolean
}
const MenuModal:React.FC<MenuModalProps> = ({ isVisible }: MenuModalProps) => {
  const dispatch = useDispatch();

  const [documentHeight, setDocumentHeight] = useState(0);

  const updateDocumentHeight = () => {
    const fullHeight = document.documentElement.scrollHeight; // Высота всей страницы
    setDocumentHeight(fullHeight);
  };

  useEffect(() => {
    updateDocumentHeight();

    // Обновляем высоту при изменении размера окна или содержимого
    window.addEventListener('resize', updateDocumentHeight);
    window.addEventListener('scroll', updateDocumentHeight);

    // Очищаем обработчики при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateDocumentHeight);
      window.removeEventListener('scroll', updateDocumentHeight);
    };
  }, []);


  return (
    <div
      className={`menuContainer ${isVisible && 'menuContainerVisible'}`}
    >
      <div className="menuHeader">
        <img className="headerAppLogo" src={AppLogo} alt="App Logo" />

        <p
          onClick={() => dispatch(setMenuVisibility(false))}
          style={{ cursor: 'pointer', fontWeight: '600' }}
        >
          на главную
        </p>
      </div>

      <div className="header ticker-wrapper">
        <div className="ticker-wrapper__first-half">
          <img
            src={img1}
            alt="BorisCooper"
            className="ticker-image"
          />
          <img
            src={img2}
            alt="BorisCooper"
            className="ticker-image"
          />
          <img
            src={img3}
            alt="BorisCooper"
            className="ticker-image"
          />
          <img
            src={img1}
            alt="BorisCooper"
            className="ticker-image"
          />
          <img
            src={img2}
            alt="BorisCooper"
            className="ticker-image"
          />
          <img
            src={img3}
            alt="BorisCooper"
            className="ticker-image"
          />
        </div>
      </div>

      <div>

        <Link onClick={()=> dispatch(setMenuVisibility(false))} style={{ textDecoration: 'none', color: 'black' }} to={'/services'}>
          <p className="servicesTitles">услуги</p>
        </Link>
        <Link onClick={()=> dispatch(setMenuVisibility(false))} style={{ textDecoration: 'none', color: 'black' }} to={'/portfolio'}>
          <p className="servicesTitles">портфолио</p>
        </Link>
        <Link onClick={()=> dispatch(setMenuVisibility(false))} style={{ textDecoration: 'none', color: 'black' }} to={'/contacts'}>
          <p className="servicesTitles">контакты</p>
        </Link>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '40px' }}>
          <img className="elgrowLogoMenu" src={ElgrowLogo} alt="Elgrow Logo" />
          <p className="elgrowDescriptionMenu">
            Разработка и интеграция IT-решений
            Автоматизация бизнеса
            Аутстаффинг специалистов
          </p>
        </div>

        <div className="menuCases">
          <AnimatedCases title={'Стать клиентом'}/>
          <div style={{ marginRight: '40px' }}/>
          <div style={{ marginBottom: '24px' }}/>
          <AnimatedCases title={'Telegram'}/>
        </div>
      </div>


      <div  style={{ height: `${documentHeight}px` }} className="menuLine"/>
    </div>
  );
};

export default MenuModal;
