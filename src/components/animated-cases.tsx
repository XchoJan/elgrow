import React from 'react';
import { Link } from 'react-router-dom';

import CaseArrow from '../assets/svg/caseArrow.svg';
interface AnimatedCasesProps {
  title?: string;
  link?: any
}
const AnimatedCases: React.FC<AnimatedCasesProps>  = ({ title, link }) => (
  <div className="casesBox">
    <Link style={{ textDecoration: 'none' }} to={link}>
      <span style={{ color: '#000' }}>{title} <img
        src={CaseArrow}
        alt=""
        style={{ marginBottom: '4px', marginLeft: '6px' }}
      /> </span>
      <div className="casesLine"/>
    </Link>
  </div>
);

export default AnimatedCases;
