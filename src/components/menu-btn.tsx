import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setMenuVisibility } from '../store/features/exampleSlice';
import MenuIcon from '../assets/svg/burger.svg';
import MenuIconHovered from '../assets/svg/hoveredBurger.svg';

const MenuBtn: React.FC = () => {
  const dispatch = useDispatch();
  const [closeIsHovered, setCloseIsHovered] = useState(false);

  return (
    <div
      onMouseMove={()=> setCloseIsHovered(true)}
      onMouseLeave={()=> setCloseIsHovered(false)}
      onClick={()=> dispatch(setMenuVisibility(true))}
      className="menuBtn"
    >
      <img src={closeIsHovered ? MenuIconHovered : MenuIcon}/>
    </div>
  );
};

export default MenuBtn;
