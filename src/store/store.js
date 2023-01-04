import { configureStore } from "@reduxjs/toolkit";

import {
  taskSlice,
  statusSlice,
  prioritySlice,
} from "./";

export const store = configureStore({
  reducer: {

    task: taskSlice.reducer,
    status: statusSlice.reducer,
    priority: prioritySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
