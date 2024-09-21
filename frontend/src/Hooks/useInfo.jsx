import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInfoByVibhag } from "../feature/vargikrn/VargikrnSlice";

const useIffo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoByVibhag());
  }, [getInfoByVibhag]);

  const fetchInfoByVibhag = useSelector((state) => state?.getInfo);

  return { fetchInfoByVibhag };
};


export { useIffo };
