import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    isLoadingTasks: true,
    tasks: [],
    activeTask: null,
  },
  reducers: {
    onSetActiveTask: (state, { payload }) => {
      state.activeTask = payload;
    },
    onAddNewTask: (state, { payload }) => {
      state.isLoadingTasks=payload;
      state.activeTask = null;
    },
    onUpdateTask: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
    },
    onDeleteTask: (state) => {
      if (state.activeTask) {
        state.tasks = state.tasks.filter((task) => task.id !== state.activeTask.id);
        state.activeTask = null;
      }
    },
    onLoadingTask: (state, { payload = [] }) => {
      state.isLoadingTasks = false;
      state.tasks = payload.body;
    },
    onLoguotTask: (state) => {
      (state.isLoadingTasks = true), (state.tasks = []), (state.activeTask = null);
    },
  },
});

export const {
  onSetActiveTask,
  onLoadingTask,
  onDeleteTask,
  onUpdateTask,
  onAddNewTask,
  onLoguotTask,
} = taskSlice.actions;
