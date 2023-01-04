import { useParams } from "react-router-dom";
import { TaskModal } from "./TaskModal"
import { useTaskStore } from "../../../hooks"; 
import { useEffect } from "react";



export const TaskEdit = () => {
const{tasks,startLoadingTasks}=useTaskStore()
  const  {id}  = useParams();

const taskdata=tasks.filter((task) =>task.idtask === parseInt(id))


useEffect(()=>{
  startLoadingTasks(1)
},[]);
  return (
   <>
   <TaskModal task={taskdata}/>
   </>
  )
}
