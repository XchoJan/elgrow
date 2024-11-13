import React from 'react';

import Circle from '../assets/svg/arrowCircle.svg';
const ContactUsBtn: React.FC = () => (
  <div className="contactUsBtn">
    <p className="contactUsBtnTitle btnDesc">Cвязаться</p>
    <img className="contactUsBtnImg" src={Circle} alt="" />
  </div>
);

export default ContactUsBtn;
