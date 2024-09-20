import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInfoByVibhag } from "../feature/vargikrn/VargikrnSlice";

const fetchinfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoByVibhag());
  }, [getInfoByVibhag]);

  // const fetchKacheri = useSelector(
  //   (state) => state?.kacheri?.kacheri,
  //   shallowEqual
  // );
  // return fetchKacheri;
};

const useIffo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getInfoByVibhag());
  }, [getInfoByVibhag]);

  const fetchInfoByVibhag = useSelector((state) => state?.getInfo);
  return { fetchInfoByVibhag };
};

export { useIffo };
