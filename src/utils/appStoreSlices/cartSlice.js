import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { payload } = action;
      console.log(payload);
      state.items.push(payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    modifyCart: (state, action) => {
      const { payload } = action;
      state.items.map((val) => {
        console.log(val);
        if (payload.id === val.dishId) {
          val.dishCount = val.dishCount + 1;
        }
      });
    },
  },
});

export const { addItem, removeItem, clearCart, modifyCart } = cartSlice.actions;

export default cartSlice.reducer;
