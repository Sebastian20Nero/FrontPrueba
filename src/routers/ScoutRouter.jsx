import React from "react";
import {  Route, Routes } from "react-router-dom";
import {
  TaskEdit,
  TaskPage,
  SubTaskPage,
} from "../scout";
import { TaskModal } from "../scout/components/task/TaskModal";

export const ScoutRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/task" element={<TaskPage />} />
        <Route path="/subtask/:id" element={<SubTaskPage />} />
        <Route path="/task/create" element={<TaskModal />} />
        <Route path="/task/edit/:id" element={<TaskEdit />} />
        <Route path="/task/create/:idPad" element={<TaskModal />} />
        <Route path="/task/edit/:id/:idPad" element={<TaskEdit />} />
       </Routes>

    </>
  );
};
