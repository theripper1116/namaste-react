import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { payload } = action;
      // console.log(payload);
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
      state.items.map((val, index) => {
        if (payload[0] === val.dishId && payload[1] === "increment") {
          val.dishCount = val.dishCount + 1;
        } else if (payload[0] === val.dishId && payload[1] === "decrement") {
          val.dishCount = val.dishCount - 1;
          if (val.dishCount === 0) {
            state.items.splice(index, 1);
          }
        }
      });
    },
  },
});

export const { addItem, removeItem, clearCart, modifyCart } = cartSlice.actions;

export default cartSlice.reducer;
