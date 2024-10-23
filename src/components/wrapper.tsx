import React from 'react';
import { useSelector } from 'react-redux';

import MenuModal from './menu-modal';

interface WrapperProps{
  children: any
}

const Wrapper: React.FC<WrapperProps> = ({ children }: any) => {
  const isVisibleMenu = useSelector((store: any) => store.example.showMenu);

  return (
    <div>
      {children}
      <MenuModal isVisible={isVisibleMenu}/>
    </div>
  );
};
export default Wrapper;
