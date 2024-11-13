import React from 'react';
import { Link } from 'react-router-dom';

import CaseArrow from '../assets/svg/caseArrow.svg';
interface AnimatedCasesProps {
  title?: string;
  link?: any;
  onClick?: ()=> void
}
const AnimatedCases: React.FC<AnimatedCasesProps>  = ({ title, link, onClick }) => (
  <div onClick={onClick} className="casesBox">
    <Link style={{ textDecoration: 'none' }} to={link}>
      <span style={{ color: '#303030', fontSize: '20px', fontWeight: 400 }}>{title} <img
        src={CaseArrow}
        alt=""
        style={{ marginBottom: '4px', marginLeft: '6px' }}
      /> </span>
      <div className="casesLine"/>
    </Link>
  </div>
);

export default AnimatedCases;
