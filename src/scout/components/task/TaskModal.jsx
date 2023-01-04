import "sweetalert2/dist/sweetalert2.min.css";
import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useTaskStore } from "../../../hooks";
import { useStatusStore } from "../../../hooks";
import { usePriorityStore } from "../../../hooks";
import { useParams } from "react-router-dom";


Modal.setAppElement("#root");
export const TaskModal = ({task}) => {
  const { activeTask, startSavingTask } = useTaskStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, startLoadingStatus } = useStatusStore();
  const { prioritys, startLoadingPrioritys } = usePriorityStore();
  const  {idPad}  = useParams();
  
  const [idPadre, setidPadre] = useState(0);

  const [formValues, setFormValues] = useState({
    idtask: null,
    description: "",
    begindate: "",
    enddate: "",
    duration: "",
    idpadre: idPadre,
    idpriority: 0,
    idstatus: 0,
    estado: 1,
    names:"",
    namep:""
  });
  
  useEffect(() => {
    //consultar status
    startLoadingStatus();

    //consultar priority     
    startLoadingPrioritys();
  
   
    if (activeTask !== null) {
      setFormValues({ ...activeTask });
    }
    if(task?.length>0){
      setFormValues({ ...task[0] });
    }
  }, [activeTask,task]);
  
  

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]:  target.value,
    });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // TODO:
    
  if(idPad>0){
    formValues.idpadre=parseInt(idPad)
  } 
    
    
    formValues.idpriority=parseInt(formValues.idpriority)
    formValues.idstatus=parseInt(formValues.idstatus)
    formValues.duration=parseInt(formValues.duration)
    console.log(formValues)
    await startSavingTask(formValues);
    setFormSubmitted(false);
  };
  return (
    <>
    <div class="panel panel-warning">
      <div class="panel panel-warning">
        <div className="x_panel ">
        <h1> Nuevo Task </h1>
        <hr />
        <form className="container" onSubmit={onSubmitHandle}>
          <div className="form-row">
            <div className="form-group col">
              <label>Description</label>
              <input
                type="text"
                className={`form-control `}
                placeholder="Name del Task"
                name="description"
                value={formValues.description}
                onChange={onInputChanged}
                autoComplete="off"
              />
            </div>
            <div className="form-group col">
              <label>BeginDate</label>
              <input
                type="date"
                className={`form-control `}
                name="begindate"
                value={formValues.begindate}
                onChange={onInputChanged}
              />
            </div>
            
            <div className="form-group col">
              <label>EndDate</label>
              <input
                type="date"
                className={`form-control `}
                name="enddate"
                  value={formValues.enddate}
                onChange={onInputChanged}
              />
            </div>
            <div className="form-group col">
              <label>Duration</label>
              <input
                type="number"
                className={`form-control `}
                placeholder="Duracion en minutos"
                name="duration"
                value={formValues.duration}
                onChange={onInputChanged}
                autoComplete="off"
              />
            </div>
            <div className="form-group col">
              <label>Priority</label>
              <select name="idpriority" className={`form-control `}  value={formValues.idpriority}  onChange={onInputChanged}>
                <option value={0}>---Seleccione---</option>
                {prioritys &&
                  prioritys.map((row) => (
                  <option key={row.idpriority}
                  value={row.idpriority}
                  >{row.name}</option>
                  ))}
              </select>
            </div>
            <div className="form-group col">
              <label>Status</label>
              <select name="idstatus"  className={`form-control `} value={formValues.idstatus}  onChange={onInputChanged}>
          
                {status &&
                  status.map((row) => (
                  <option key={row.idstatus} value={row.idstatus}>{row.name}</option>
                  ))}
              </select>
            </div>
          </div>
          <hr/>
          <button
            type="submit"
            className="btn btn-outline-primary btn-block"
          >
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        
        </form>
        <Link to={`/task`} className="btn btn-outline-secondary pull-right m-4">List Task</Link>  
        </div>
      </div>              
      </div> 
      </>
   
  );
};
