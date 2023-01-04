import { useDispatch, useSelector } from "react-redux";
import scoutApi from "../api/scoutApi";
import {
  onLoadingStatus,
  onSetActiveStatus,
} from "../store";

export const useStatusStore = () => {
  const dispatch = useDispatch();
  const { status, activeStatus ,isLoadingStatus} = useSelector((state) => state.status);
  const setActiveStatus = (status) => {
    dispatch(onSetActiveStatus(status));
  };
  const startLoadingStatus = async (id) => {
    try {
      const  {data} = await scoutApi.get(`/status`);
      dispatch(onLoadingStatus(data));
    } catch (err) {
      console.log(err)
    }
  };

  return {
    activeStatus,
    status,
     isLoadingStatus,
    //methods
    setActiveStatus,
    startLoadingStatus,
  };
};
