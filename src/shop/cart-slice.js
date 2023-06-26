import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cart: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cart = action.payload.cart;
    },
    addCart(state, action) {
      const item = action.payload;
      const existingItem = state.cart.find(
        (existing_item) => existing_item.id === item.id
      );

      if (!existingItem) {
        state.cart.push({
          id: item.id,
          price: item.price,
          total: item.price,
          quantity: 1,
          title: item.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
      }
      state.totalQuantity++;
      state.changed = true;
    },
    removeCart(state, action) {
      const existingItem = state.cart.find(
        (existing_item) => existing_item.id === action.payload
      );

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
