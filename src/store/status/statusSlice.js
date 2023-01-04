import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  
  initialState: {
    isLoadingStatus: true,
    status: [],
    activeStatus: null, 
  
  },
  reducers: {
    onSetActiveStatus: (state, { payload }) => {
      state.activeStatus = payload;
    },
    onLoadingStatus: (state, { payload = [] }) => {
      state.isLoadingStatus = false;
      state.status = payload.body;
    },
 
  },
});

export const {
  onSetActiveStatus,
  onLoadingStatus,
 
} = statusSlice.actions;
