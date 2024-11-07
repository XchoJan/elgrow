import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppLogo from '../assets/svg/logo.svg';

import Tab from './tab';
import MenuBtn from './menu-btn';

interface HeaderProps {
  minHeight?: boolean;
  onPressContactUs?: any;
  showContactUs?: boolean
}
const Header: React.FC<HeaderProps> = ({ minHeight, onPressContactUs, showContactUs }) =>{
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div style={{ width: '100%', height: '120px' }}>
        <div
          style={minHeight ? { height: '100px' } : { height: '100vh' }}
          className="mainContainer"
        >
          <div className="mainLogoBox">
            <Link style={{ textDecoration: 'none' }} to={'/'}>
              <img className="headerAppLogo" src={AppLogo} alt="" />
            </Link>
          </div>

          {showContactUs &&
            <div onClick={onPressContactUs} className="mediaContactUs">
              <p>Cвязаться</p>
            </div>
          }
          <MenuBtn />
          <div className="mainRightContent headerRightContent">
            <div className="headeRrightElem">
              <Link style={{ textDecoration: 'none' }} to={'/services'}>
                <div className="rightElemTitleContainer">
                  <Tab title={'услуги'} isActive={isActive('/services')} />
                </div>
              </Link>
            </div>

            <div className="headeRrightElem">
              <Link style={{ textDecoration: 'none' }} to={'/portfolio'}>
                <div className="rightElemTitleContainer">
                  <Tab title={'кейсы'} isActive={isActive('/portfolio')} />
                </div>
              </Link>
            </div>

            <div className="headeRrightElem">
              <Link style={{ textDecoration: 'none' }} to={'/contacts'}>
                <div className="rightElemTitleContainer">
                  <Tab title={'контакты'} isActive={isActive('/contacts')} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
