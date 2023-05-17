import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { show: false, items: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.show = !state.show;
      console.log(state.show);
    },

    addItems(state, action) {
      console.log("object");
      const existingItemIndex = state.items.findIndex(
        (el) => el.title === action.payload.title
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + action.payload.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, { ...action.payload }];
      }
      state.items = updatedItems;
      console.log(state.items);
    },

    removeItem(state, action) {
      const existingItemIndex = state.items.findIndex(
        (el) => el.title === action.payload
      );
      const existingItem = state.items[existingItemIndex];
      console.log(existingItem);
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: +existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      state.items = updatedItems;
      console.log("remove", state.items);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
