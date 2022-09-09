import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const loadItem = action.payload;
      state.totalQuantity++;
      state.totalAmount += loadItem.price;
      // find item
      const existingItemIndex = state.items.findIndex((item) => {
        return item.id === loadItem.id;
      });
      if (existingItemIndex !== -1) {
        // just increase amount
        const updateItem = state.items[existingItemIndex];
        updateItem.amount++;
        state.items[existingItemIndex] = updateItem;
      } else {
        // add new item to list
        state.items.push({
          id: loadItem.id,
          title: loadItem.title,
          price: loadItem.price,
          amount: loadItem.amount,
        });
      }
    },
    removeItems(state, action) {
      // delete item with ID, amount = 1
      // find item

      const deleteItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload;
      }); //expect payload = id
      // check if item amount == 1
      state.totalQuantity--;
      state.totalAmount -= state.items[deleteItemIndex].price;

      if (state.items[deleteItemIndex].amount === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== action.payload;
        });
      } else {
        state.items[deleteItemIndex].amount--;
      }
      // update the totalQuantity & totalAmount
    },
    replaceCart(state, action) {
      if (action.payload) {
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
        state.totalAmount = action.payload.totalAmount;
      } else {
        state.items = [];
        state.totalQuantity = 0;
        state.totalAmount = 0;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
