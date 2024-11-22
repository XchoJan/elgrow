import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AppLogo from '../assets/svg/logo.svg';
import { setMenuVisibility } from '../store/features/exampleSlice';
import CloseIcon from '../assets/svg/close.svg';

import Form from './form';


interface MenuModalProps {
  isVisible: boolean;
}

const MenuModal: React.FC<MenuModalProps> = ({ isVisible }: MenuModalProps) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const dispatch = useDispatch();

  const openTelegram = () => {
    const telegramUrl = 'https://web.telegram.org/k/#@DChuchulin';
    window.open(telegramUrl, '_blank');
  };


  return (
    <div className={`menuContainer ${isVisible && 'menuContainerVisible'}`}>
      <div className="menuHeader">
        <img className="headerAppLogoFromMenu" src={AppLogo} alt="App Logo" />
        <p
          onClick={() => dispatch(setMenuVisibility(false))}
          style={{

          }}
          className="mainTabletBtn"
        >
          <img src={CloseIcon}/>
        </p>
      </div>

      <div className="newMenuBox">
        <div>
          <Link
            onClick={() => dispatch(setMenuVisibility(false))}
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/'}
          >
            <span className="servicesTitles H1">Главная</span>
          </Link>
          <Link
            onClick={() => dispatch(setMenuVisibility(false))}
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/services'}
          >
            <span className="servicesTitles H1">Услуги</span>
          </Link>
          <Link
            onClick={() => dispatch(setMenuVisibility(false))}
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/portfolio'}
          >
            <span className="servicesTitles H1">Клиенты</span>
          </Link>
          <Link
            onClick={() => dispatch(setMenuVisibility(false))}
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/contacts'}
          >
            <span className="servicesTitles H1">Контакты</span>
          </Link>
          <div style={{ height: '40%' }}/>
        </div>

      </div>
      <div className="menuCases">
        <p onClick={openTelegram} className="menuBottomTitles btnDesc">Telegram</p>
        <p onClick={()=> setIsVisibleForm(true)} className="menuBottomTitles btnDesc">Связаться</p>
      </div>

      <Form
        onClickClose={() => setIsVisibleForm(false)}
        isVisible={isVisibleForm}
      />

    </div>
  );
};

export default MenuModal;
