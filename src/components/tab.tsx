import React from 'react';

import Subtract from '../assets/svg/Subtract.svg';

interface TabProps {
  title?: string;
  isActive?: boolean;
  elemIsHovered?: boolean;
}

const Tab: React.FC<TabProps> = ({ title, isActive = false, elemIsHovered = false }) => (
  <span className={`tabContainer ${isActive ? 'active' : ''}`}>
    <span
      className="rightElemTitle t3"
      style={{
        fontSize: '20px',
        color: '#303030',
      }}
    >
      {title}
    </span>
    <img
      className={`subtract ${isActive || elemIsHovered ? 'visible' : ''}`}
      src={Subtract}
      alt=""
    />
  </span>
);

export default Tab;
