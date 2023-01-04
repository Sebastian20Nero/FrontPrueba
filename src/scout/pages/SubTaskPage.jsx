import React,{useEffect } from "react";
import { Link } from "react-router-dom";
import { useTaskStore } from "../../hooks";
import { useParams } from "react-router-dom";

export const SubTaskPage = () => {
  const { tasks, startLoadingTasks } = useTaskStore();
  const {task, startDeletingTask}= useTaskStore()

  const  {id}  = useParams();
  
  
    useEffect(() => { 
      startLoadingTasks(id)
    }, []);


    const eliminar = (id)=>{
      startDeletingTask(id)  
    }
  return (
    
    <>
    <div className="x_panel ">
        <div className="x_title ">
          <h2 className="m-4">List SubTaks</h2>
    
          <Link to={`/task/create/${id}`}   className="btn btn-outline-success pull-right m-4" >
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
                      <Link to={`/task/edit/${row.idtask}/${row.idtask}`} className="btn btn-outline-secondary pull-right m-4">
                        Edit
                      </Link>
                      <button className="btn btn-outline-success pull-right m-4" onClick={(e) => eliminar(row.idtask, e)}>
                        <i className="fas fa-plus"></i> Delete
                      </button>

                    </td>
                  </tr>
                ))}
                <Link to={`/task`} className="btn btn-outline-secondary pull-right m-4">
                        Tareas
                      </Link>
            </tbody>
          </table>
        
         </div> 
        </>
  );
};
