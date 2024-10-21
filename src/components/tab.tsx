import React from 'react';

import Subtract from '../assets/svg/Subtract.svg';

interface TabProps {
  title?: string;
  isActive?: boolean;
}

const Tab: React.FC<TabProps> = ({ title, isActive }) => (
  <span className={`tabContainer ${isActive ? 'active' : ''}`}>
    <span className="rightElemTitle">{title}</span>
    <img className="subtract" src={Subtract} alt="" />
  </span>
);

export default Tab;
