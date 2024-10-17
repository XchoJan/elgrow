import React from 'react';
import { useSelector } from 'react-redux';

import MenuModal from './menu-modal';

interface WrapperProps{
  children: any
}

const Wrapper: React.FC<WrapperProps> = ({ children }: any) => {
  const isVisible = useSelector((store: any) => store.example.showMenu);

  return (
    <div>
      {children}
      <MenuModal isVisible={isVisible}/>
    </div>
  );
};
export default Wrapper;
