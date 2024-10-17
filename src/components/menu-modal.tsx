import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AppLogo from '../assets/svg/logo.svg';
import img1 from '../assets/images/block.png';
import img2 from '../assets/images/block1.png';
import img3 from '../assets/images/block2.png';
import { setMenuVisibility } from '../store/features/exampleSlice';

interface MenuModalProps {
  isVisible: boolean
}
const MenuModal:React.FC<MenuModalProps> = ({ isVisible }: MenuModalProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`menuContainer ${isVisible && 'menuContainerVisible'}`}
    >
      <div className="menuHeader">
        <img className="headerAppLogo" src={AppLogo} alt="App Logo" />
        <p
          onClick={() => dispatch(setMenuVisibility(false))}
          style={{ cursor: 'pointer' }}
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

        <Link onClick={()=> dispatch(setMenuVisibility(false))} style={{ textDecoration: 'none' }} to={'/services'}>
          <p className="servicesTitles">услуги</p>
        </Link>
        <Link onClick={()=> dispatch(setMenuVisibility(false))} style={{ textDecoration: 'none' }} to={'/portfolio'}>
          <p className="servicesTitles">портфолио</p>
        </Link>
        <p className="servicesTitles">контакты</p>
      </div>


    </div>
  );
};

export default MenuModal;
