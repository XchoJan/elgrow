import React from 'react';

import CaseArrow from '../assets/svg/caseArrow.svg';
interface AnimatedCasesProps {
  title?: string
}
const AnimatedCases: React.FC<AnimatedCasesProps>  = ({ title }) => (
  <div className="casesBox">
    <span>{title} <img
      src={CaseArrow}
      alt=""
      style={{ marginBottom: '4px', marginLeft: '6px' }}
    /> </span>
    <div className="casesLine"/>
  </div>
);

export default AnimatedCases;
