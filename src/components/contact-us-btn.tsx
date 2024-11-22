import React, { useState } from 'react';

import Circle from '../assets/svg/arrowCircle.svg';
import Circle2 from '../assets/svg/contactUsReversedIcon.svg';

const ContactUsBtn: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return(
    <div
      onMouseLeave={()=> setIsHovered(false)}
      onMouseMove={()=> setIsHovered(true)}
      className="contactUsBtn"
    >
      <p className="contactUsBtnTitle btnDesc">Cвязаться</p>
      <img className="contactUsBtnImg" src={isHovered ? Circle2 : Circle} alt="" />
    </div>
  );
};

export default ContactUsBtn;
