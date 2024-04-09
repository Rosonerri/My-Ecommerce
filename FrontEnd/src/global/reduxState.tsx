import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleMenu: false,
  memberToggle: false,
  toggleText: false,
};

const reduxState = createSlice({
  name: "weCareHMO",
  initialState,
  reducers: {
   
    changeToggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
    
  },
});

export const {
  changeToggleMenu,
} = reduxState.actions;

export default reduxState.reducer;
