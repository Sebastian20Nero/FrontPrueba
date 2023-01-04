import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import scoutApi from "../api/scoutApi";
import {
  onLoadingTask,
  onAddNewTask,
  onDeleteTask,
  onSetActiveTask,
  onUpdateTask,
} from "../store";

export const useTaskStore = () => {
  const dispatch = useDispatch();
  const { tasks, activeTask ,isLoadingTask} = useSelector((state) => state.task);
  const setActiveTask = (task) => {
    console.log(tasks);
    //dispatch(onSetActiveTask(task));
  };
  const startLoadingTasks = async (id) => {
    try {
      const  {data} = await scoutApi.get(`/task?idpadre=${id}`);
      
      dispatch(onLoadingTask(data));

    } catch (err) {
      console.log(err)
    }
  };
  const startSavingTask = async (task) => {
    // TODO: llegar al backend

    // Todo bien
    try { console.log(task)
      // if (task.idtask) {
      //   // Actualizando
      //   const { data } = await scoutApi.post(`/task/`, {
      //     ...task,
      //   });
      //   Swal.fire("Success", data.msg, "success");
      //   dispatch(onUpdateTask({ ...data.data }));
      //   return;
      // }
      const { data } = await scoutApi.post("/task/", { ...task });
       await startSavingTask(0)
      
      dispatch(onAddNewTask(data.body));
      Swal.fire("Success", data.msg, "success");
    } catch (err) {
      console.log(err)
      const { response } = err;
      Swal.fire("error", response.data.error, "error");
    }
  };

  const startDeletingTask = async (id) => {
    
    try {
      const { data } = await scoutApi.delete(`/task/eliminar?id=${id}`);
      Swal.fire("Remove", data.msg, "info");
      dispatch(onDeleteTask());
      await startLoadingRols();
    } catch (err) {
      const { response } = err;
      Swal.fire("error", response.data.error, "error");
    }
  };
  return {
    activeTask,
    tasks,
     isLoadingTask,
    //methods
    setActiveTask,
    startLoadingTasks,
    startSavingTask,
    startDeletingTask,
  };
};
