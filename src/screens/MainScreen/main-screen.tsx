import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppLogo from '../../assets/svg/logo.svg';
import ContactUsBtn from '../../components/contact-us-btn';
import Tab from '../../components/tab';
import ElgrowLogo from '../../assets/svg/elgrow.svg';
import MenuBtn from '../../components/menu-btn';
import { setMenuVisibility } from '../../store/features/exampleSlice';
import Form from '../../components/form';

const MainScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="mainContainer">
        <div className="mainLogoBox">
          <img className="headerAppLogo" src={AppLogo} alt="" />
        </div>

        <div className="mainRightContent">
          <div className="rightElem">
            <Link style={{ textDecoration: 'none' }} to={'/services'}>
              <div className="rightElemTitleContainer">
                <Tab title={'услуги'} />
              </div>
            </Link>

            <img
              style={{ paddingTop: '10%' }}
              className="mainImages"
              src={require('../../assets/images/main1.png')}
              alt="Main Service"
            />
          </div>

          <div className="rightElem">
            <Link style={{ textDecoration: 'none' }} to={'/portfolio'}>
              <div className="rightElemTitleContainer">
                <Tab title={'портфолио'} />
              </div>
            </Link>

            <img
              style={{ paddingTop: '94%' }}
              className="mainImages"
              src={require('../../assets/images/main2.png')}
              alt="Main Portfolio"
            />
          </div>

          <div className="rightElem">
            <div className="rightElemTitleContainer">
              <Tab title={'контакты'} />
            </div>
            <img
              style={{ paddingTop: '55%' }}
              className="mainImages"
              src={require('../../assets/images/main3.png')}
              alt="Main Contacts"
            />
          </div>
        </div>
        <MenuBtn />
        <div onClick={()=> setIsVisibleForm(true)} className="contactUsBtnContainer">
          <ContactUsBtn />
        </div>

        <div className="mainDescriptionBox">
          <span>
            Разработка и интеграция IT-решений <br /> Автоматизация бизнеса{' '}
            <br /> Аутстаффинг специалистов
          </span>
        </div>
        <img className="elgrowLogo" src={ElgrowLogo} alt="Elgrow Logo" />
      </div>
      <Form onClickClose={()=> setIsVisibleForm(false)} isVisible={isVisibleForm}/>



      <div className="mainBottomContent">
        <Link style={{ textDecoration: 'none' }} to={'/services'}>
          <div className="mainBottomContentBtn">
            <img
              className="mainBottomContentImg"
              src={require('../../assets/images/block.png')}
              alt="Services Block"
            />
            <p>Услуги</p>
          </div>
        </Link>
        <div className="line" />
        <Link style={{ textDecoration: 'none' }} to={'/portfolio'}>
          <div className="mainBottomContentBtn">
            <img
              className="mainBottomContentImg"
              src={require('../../assets/images/block1.png')}
              alt="Portfolio Block"
            />
            <p>Портфолио</p>
          </div>
        </Link>
        <div className="line" />
        <div className="mainBottomContentBtn">
          <img
            className="mainBottomContentImg"
            src={require('../../assets/images/block2.png')}
            alt="Contacts Block"
          />
          <p>Контакты</p>
        </div>
      </div>

    </div>
  );
};

export default MainScreen;
