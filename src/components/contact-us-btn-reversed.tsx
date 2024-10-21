import React from 'react';

import Circle from '../assets/svg/arrowCircleReversed.svg';

const ContactUsBtnReversed: React.FC = () => (
  <div className="contactUsBtnReversed">
    <img className="contactUsBtnImgReversed" src={Circle} alt="" />
    <p style={{ fontSize: 18, fontWeight: 400, lineHeight: '27px', marginTop: '18px' }}>Cвязаться</p>
  </div>
);

export default ContactUsBtnReversed;
