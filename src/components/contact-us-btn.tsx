import React from 'react';

import Circle from '../assets/svg/arrowCircle.svg';
const ContactUsBtn: React.FC = () => (
  <div className="contactUsBtn">
    <p>Cвязаться</p>
    <img style={{ width: '78px', height: '78px', marginLeft: '24px' }} src={Circle} alt="" />
  </div>
);

export default ContactUsBtn;
