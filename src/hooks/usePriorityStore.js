import { useDispatch, useSelector } from "react-redux";
import scoutApi from "../api/scoutApi";
import {
  onLoadingPriority,
  onSetActivePriority,
} from "../store";

export const usePriorityStore = () => {
  const dispatch = useDispatch();
  const { prioritys, activePriority ,isLoadingPriority} = useSelector((state) => state.priority);
  const setActivePriority = (priority) => {
    dispatch(onSetActivePriority(priority));
  };
  const startLoadingPrioritys = async () => {
    try {
      const  {data} = await scoutApi.get(`/priority`);
       dispatch(onLoadingPriority(data)); 
    } catch (err) {
      console.log(err)
    }
  };

  return {
    activePriority,
    prioritys,
     isLoadingPriority,
    //methods
    setActivePriority,
    startLoadingPrioritys,
    
  };
};
