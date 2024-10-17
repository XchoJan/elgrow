import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  showMenu: boolean;
}

const initialState: MenuState = {
  showMenu: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
    setMenuVisibility(state, action: PayloadAction<boolean>) {
      state.showMenu = action.payload;
    },
  },
});

export const { toggleMenu, setMenuVisibility } = menuSlice.actions;
export default menuSlice.reducer;
