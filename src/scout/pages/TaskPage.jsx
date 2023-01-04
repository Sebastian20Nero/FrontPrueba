import React,{useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTaskStore } from "../../hooks";
import { useParams } from "react-router-dom";

export const TaskPage = () => {
  const { tasks, startLoadingTasks } = useTaskStore();
  const {task, startDeletingTask}= useTaskStore()
  const {color, setcolor}= useState()

    useEffect(() => { 
      startLoadingTasks(0)
    }, []);


    const eliminar = (id)=>{
      startDeletingTask(id)  
    }

    
  return (
    
    <>
    <div class="panel panel-warning">
    <div className="x_panel ">
        <div className="x_title ">
          <h2 className="m-4">List Taks</h2>
    
          <Link to="/task/create"   className="btn btn-outline-success pull-right m-4" >
          <i className="fas fa-plus"></i> New Task
          </Link>
        </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                
                <th>Priority</th>
                <th>Description</th>
                <th>Begindate</th>
                <th>Enddate</th>
                <th>Duration</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {tasks &&
                tasks.map((row) => (
                  <tr key={row.idtask}>
                    <td>{row.idtask}</td>
                    <td> 
                      {row.idpriority==1 && <button type="button" class="btn btn-danger">{row.namep}</button>} 
                      {row.idpriority==2 && <button type="button" class="btn btn-warning">{row.namep}</button>} 
                      {row.idpriority==3 && <button type="button" class="btn btn-success">{row.namep}</button>} 
                    </td>
                    <td>{row.description}</td>
                    <td>{row.begindate}</td>
                    <td>{row.enddate}</td>
                    <td>{row.duration}</td>
                    <td>{row.names}</td>
                    <td>
                      <Link to={`/task/edit/${row.idtask}`} className="btn btn-outline-secondary pull-right m-4">
                        Edit
                      </Link>
                      <button className="btn btn-outline-success pull-right m-4" onClick={(e) => eliminar(row.idtask, e)}>
                        <i className="fas fa-plus"></i> Delete
                      </button>
                      <Link to={`/subtask/${row.idtask}`} className="btn btn-outline-secondary pull-right m-4">
                        SubTarea
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
         </div> 
    </div>
    </>
  );
};
