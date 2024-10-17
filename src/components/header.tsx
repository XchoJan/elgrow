import React from 'react';
import { Link } from 'react-router-dom';

import AppLogo from '../assets/svg/logo.svg';

import Tab from './tab';
import MenuBtn from './menu-btn';

const Header: React.FC = () => (
  <>
    <div style={{ width: '100%', height: '120px' }}>
      <div className="mainContainer">
        <div className="mainLogoBox">
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <img className="headerAppLogo" src={AppLogo} alt="" />
          </Link>
        </div>

        <MenuBtn />
        <div className="mainRightContent">
          <div className="headeRrightElem">
            <Link style={{ textDecoration: 'none' }} to={'/services'}>
              <div className="rightElemTitleContainer">
                <Tab title={'услуги'} />
              </div>
            </Link>
          </div>

          <div className="headeRrightElem">
            <Link style={{ textDecoration: 'none' }} to={'/portfolio'}>
              <div className="rightElemTitleContainer">
                <Tab title={'портфолио'}/>
              </div>
            </Link>
          </div>

          <div className="headeRrightElem">
            <div className="rightElemTitleContainer">
              <Tab title={'контакты'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
