import React from 'react';

import Subtract from '../assets/svg/Subtract.svg';

interface TabProps {
  title?: string;
}

const Tab: React.FC<TabProps> = ({ title }) => (
  <span className="tabContainer">
    <span className="rightElemTitle">{title}</span>
    <div className="subtractBox">
      <img className="subtract" src={Subtract} alt="" />
    </div>
  </span>
);

export default Tab;
