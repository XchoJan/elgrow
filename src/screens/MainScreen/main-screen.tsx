import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppLogo from '../../assets/svg/logo.svg';
import ContactUsBtn from '../../components/contact-us-btn';
import Tab from '../../components/tab';
import ElgrowLogo from '../../assets/svg/elgrow.svg';
import Form from '../../components/form';
import ContactUsBtnReversed from '../../components/contact-us-btn-reversed';
import MenuItems from '../../components/menu-items';
import FloatingInput from '../../components/floating-input';
import MenuBtn from '../../components/menu-btn';

const MainScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div style={{ width: '100%', height: '100%', overflowY: 'hidden' }}>
      <div className="mainContainer">
        <div className="mainLogoBox">
          <img className="headerAppLogo mainScreenAppLogo" src={AppLogo} alt="" />
        </div>

        <div className="mainRightContent">
          <Link
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            to={'/services'}
            style={{
              borderColor: isHovered1 ? '#CFCFCF' : '#fff',
              cursor: 'pointer',
              textDecoration: 'none',
              position: 'relative'

            }}
            className="rightElem ">
            <div className="rightElemTitleContainer main-link-1">
              <Tab elemIsHovered={isHovered1} title={'услуги'} />
            </div>

            <img
              style={{
                // marginTop: isHovered1 ? '24px' : '0',
                opacity: isHovered1 ? 1 : 0,

              }}
              className="mainImages main-link-img-1"
              src={require('../../assets/images/main1.jpg')}
              alt="Main Service"
            />
            <div style={{ visibility: isHovered1 ? 'visible' : 'hidden' }} className="mainAbsoluteDiv"/>
          </Link>

          <Link
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            to={'/portfolio'}
            style={{
              borderColor: isHovered2 ? '#CFCFCF' : '#fff',
              cursor: 'pointer',
              textDecoration: 'none',
              position: 'relative'
            }}
            className="rightElem"
          >
            <div className="rightElemTitleContainer main-link-2">
              <Tab elemIsHovered={isHovered2} title={'клиенты'} />
            </div>

            <img
              style={{
                // paddingTop: '56%',
                // marginTop: isHovered2 ? '24px' : '0',
                opacity: isHovered2 ? 1 : 0,
              }}
              className="mainImages main-link-img-2"
              src={require('../../assets/images/main2.jpg')}
              alt="Main Portfolio"
            />
            <div style={{ visibility: isHovered2 ? 'visible' : 'hidden' }} className="mainAbsoluteDiv"/>

          </Link>

          <Link
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            to={'/contacts'}
            style={{
              borderColor: isHovered3 ? '#CFCFCF' : '#fff',
              cursor: 'pointer',
              textDecoration: 'none',
              position: 'relative'
            }}
            className="rightElem "
          >
            <div className="rightElemTitleContainer main-link-3">
              <Tab elemIsHovered={isHovered3} title={'контакты'} />
            </div>

            <img
              style={{
                // paddingTop: '50%',
                // marginTop: isHovered3 ? '24px' : '0',
                opacity: isHovered3 ? 1 : 0,
              }}
              className="mainImages main-link-img-3"
              src={require('../../assets/images/main3.jpg')}
              alt="Main Contacts"
            />
            <div style={{ visibility: isHovered3 ? 'visible' : 'hidden' }} className="mainAbsoluteDiv"/>

          </Link>
        </div>

        {/*<MenuItems/>*/}
        <MenuBtn/>
        <div
          onClick={() => setIsVisibleForm(true)}
          className="contactUsBtnContainer"
        >
          <ContactUsBtn />
        </div>

        <div
          onClick={() => setIsVisibleForm(true)}
          className="contactUsBtnContainerReversed"
        >
          <ContactUsBtnReversed/>
        </div>


        <div className="mainDescriptionBox">
          <p className="t2">
            Разработка и интеграция IT-решений <br /> Автоматизация бизнеса{' '}
            <br /> Аутстаффинг специалистов
          </p>
        </div>
      </div>

      <img className="elgrowLogo" src={ElgrowLogo} alt="Elgrow Logo" />

      <Form
        onClickClose={() => setIsVisibleForm(false)}
        isVisible={isVisibleForm}
      />

      <div  className="mainBottomContent">
        <Link className="mainBottomContentLink" to={'/services'}>
          <div className="mainBottomContentBtn">
            <img
              className="mainBottomContentImg"
              src={require('../../assets/images/block.png')}
              alt="Services Block"
            />
            <p style={{ color: '#000' }}>Услуги</p>
          </div>
        </Link>
        {/*<div className="line" />*/}
        <Link  className="mainBottomContentLink mainBottomContentLeftPadding" to={'/portfolio'}>
          <div className="mainBottomContentBtn">
            <img
              className="mainBottomContentImg"
              src={require('../../assets/images/block1.png')}
              alt="Portfolio Block"
            />
            <p style={{ color: '#000' }}>кейсы</p>
          </div>
        </Link>

        <Link className="mainBottomContentLeftPadding" style={{ textDecoration: 'none' }} to={'/contacts'}>
          <div className="mainBottomContentBtn">
            <img
              className="mainBottomContentImg"
              src={require('../../assets/images/block2.png')}
              alt="Contacts Block"
            />
            <p style={{ color: '#000' }}>Контакты</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainScreen;
