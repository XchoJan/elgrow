import React from 'react';
import { Link } from 'react-router-dom';

interface PoliticProps {
  title?: string;
  link?: any;
  onClick?: ()=> void
}

const PoliticBtn: React.FC<PoliticProps>  = ({ onClick }) => (
  <div onClick={onClick} className="casesBox">
    <Link style={{ textDecoration: 'none' }} to={'/politic'}>
      <span className="t4 animatedCaseTitle" style={{ fontFamily: 'InterTight', color: '#303030', fontSize: '16px', fontWeight: 400 }}>
        Политика обработки персональных данных
      </span>
      <div className="casesLine"/>
    </Link>
  </div>
);

export default PoliticBtn;
