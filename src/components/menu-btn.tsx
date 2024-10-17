import React from 'react';
import { useDispatch } from 'react-redux';

import { setMenuVisibility } from '../store/features/exampleSlice';


const MenuBtn: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="menuBtn">
      <p
        onClick={()=> dispatch(setMenuVisibility(true))}
        style={{ cursor: 'pointer' }}
      >
        меню
      </p>
    </div>
  );
};

export default MenuBtn;
