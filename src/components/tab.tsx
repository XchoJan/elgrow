import React from 'react';

import Subtract from '../assets/svg/Subtract.svg';

interface TabProps {
  title?: string;
  isActive?: boolean;
  elemIsHovered?: boolean;
}

const Tab: React.FC<TabProps> = ({ title, isActive, elemIsHovered }) => (
  <span className={`tabContainer ${isActive ? 'active' : ''}`}>
    <span className="rightElemTitle t3">{title}</span>
    <img
      className={`subtract ${elemIsHovered ? 'visible' : ''}`}
      src={Subtract}
      alt=""
    />
  </span>
);

export default Tab;
