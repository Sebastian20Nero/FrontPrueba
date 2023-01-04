import { createSlice } from "@reduxjs/toolkit";

export const prioritySlice = createSlice({
  name: "priority",
  initialState: {
    isLoadingPrioritys: true,
    prioritys: [],
    activePriority: null,
  },
  reducers: {
    
    onLoadingPriority: (state, { payload = [] }) => {
      state.isLoadingPrioritys = false;
      state.prioritys = payload.body;
    },
    onSetActivePriority: (state, { payload }) => {
      state.activePriority = payload;
    },
  },
});

export const {
  onSetActivePriority,
  onLoadingPriority,
} = prioritySlice.actions;
