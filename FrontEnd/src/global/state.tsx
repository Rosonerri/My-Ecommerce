import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  cart: [],
};

const state = createSlice({
  name: "store",
  initialState,
  reducers: {
    loginUser: (state: any, { payload }: any) => {
      state.user = payload;
    },
    addCart: (state: any, { payload }: any) => {
      const check = state.cart.findIndex((el: any) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        const items = {
          ...payload,
          qty: 1,
        };

        state.cart.push(items);
      }
    },

    reduceCart: (state: any, { payload }: any) => {
  const check = state.cart.findIndex((el: any) => el._id === payload._id);
  if (check >= 0) {
    if (state.cart[check].qty > 1) {
      state.cart[check].qty -= 1;
    } else {
      state.cart.splice(check, 1); 
    }
  }
},


    removeItem: (state: any, { payload }: any) => {
      const remove = state.cart.filter((el: any) => el._id !== payload._id);

      state.cart = remove;
    },
  },
});

export const { loginUser, addCart, removeItem, reduceCart } = state.actions;

export default state.reducer;
