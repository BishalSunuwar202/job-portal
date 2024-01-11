import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    addJobToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          position: newItem.position,
          name: newItem.name,
        });
      }
    },
  },
});

export const jobActions = jobSlice.actions;
export default jobSlice;
