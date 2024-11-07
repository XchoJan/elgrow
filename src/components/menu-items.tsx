import React from 'react';
import { Link } from 'react-router-dom';

import Tab from './tab';

const MenuItems: React.FC = () => (
  <div className="menu-items">
    <div className="menuItemsLine"/>
    <Link style={{ textDecoration: 'none' }} to={'/services'}>
      <div className="rightElemTitleContainer">
        <Tab title={'услуги'} />
      </div>
    </Link>
    <div className="menuItemsLine"/>
    <Link style={{ textDecoration: 'none' }} to={'/portfolio'}>
      <div className="rightElemTitleContainer">
        <Tab title={'кейсы'} />
      </div>
    </Link>
    <div className="menuItemsLine"/>
    <Link style={{ textDecoration: 'none' }} to={'/contacts'}>
      <div className="rightElemTitleContainer">
        <Tab title={'контакты'} />
      </div>
    </Link>
  </div>
);

export default MenuItems;
