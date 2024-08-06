import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { delVibhag, getAllVibhag } from "../feature/vibhag/vibhagSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const fetchVibhag = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVibhag());
  }, [getAllVibhag, dispatch]);

  const fetchVibhagState = useSelector(
    (state) => state?.vibhag?.vibhag,
    shallowEqual
  );
  //   console.log(fetchVibhagState);

  return fetchVibhagState;
};

const useVibhag = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const vibhagState = fetchVibhag();
  const data1 = [];
  for (let index = 0; index < vibhagState.length; index++) {
    data1.push({
      index: index + 1,
      name: `${vibhagState[index]?.વિભાગ‌નુ‌નામ}`,
      unit: `${vibhagState[index]?.યૂનીટનંબર}`,
      makan: `${vibhagState[index]?.મકાનનુ‌નામ}`,
      oldmilkat: `${vibhagState[index]?.જુનોમિલ્કતનંબર}`,
      newmilkat: `${vibhagState[index]?.નવોમિલ્કતનંબર}`,
      bill1: `${vibhagState[index]?.બિલનંબર_1}`,
      bill2: `${vibhagState[index]?.બિલનંબર_2}`,
      totalbill: `${vibhagState[index]?.બિલનીકુલરકમ}`,
      makanuse: `${vibhagState[index]?.મકાનનોઉપયોગ}`,
      gass: `${vibhagState[index]?.ગેસલાઈનગ્રાહકનંબર}`,
      elecnum: `${vibhagState[index]?.ઈલેકટ્રીકગ્રાહકનંબર}`,
      makanuse: `${vibhagState[index]?.મકાનનોઉપયોગ}`,
      fire: `${vibhagState[index]?.ફાયરનીવ્યવસ્થા}`,
      edit: (
        <FaEdit
          style={{ cursor: "pointer", height: "20px" }}
          onClick={() => {
            const vibhagData = {
              વિભાગ‌નુ‌નામ: vibhagState[index]?.વિભાગ‌નુ‌નામ,
              યૂનીટનંબર: vibhagState[index]?.યૂનીટનંબર,
              મકાનનુ‌નામ: vibhagState[index]?.મકાનનુ‌નામ,
              જુનોમિલ્કતનંબર: vibhagState[index]?.જુનોમિલ્કતનંબર,
              નવોમિલ્કતનંબર: vibhagState[index]?.નવોમિલ્કતનંબર,
              બિલનંબર_1: vibhagState[index]?.બિલનંબર_1,
              બિલનંબર_2: vibhagState[index]?.બિલનંબર_2,
              બિલનીકુલરકમ: vibhagState[index]?.બિલનીકુલરકમ,
              મકાનનોઉપયોગ: vibhagState[index]?.મકાનનોઉપયોગ,
              ગેસલાઈનગ્રાહકનંબર: vibhagState[index]?.ગેસલાઈનગ્રાહકનંબર,
              ઈલેકટ્રીકગ્રાહકનંબર: vibhagState[index]?.ઈલેકટ્રીકગ્રાહકનંબર,
              મકાનનોઉપયોગ: vibhagState[index]?.મકાનનોઉપયોગ,
              ફાયરનીવ્યવસ્થા: vibhagState[index]?.ફાયરનીવ્યવસ્થા,
            };
            navigate(`/vibhag/${vibhagState[index]._id}`, {
              state: vibhagData,
            });
          }}
        />
      ),
      delete: (
        <MdDelete
          style={{ cursor: "pointer", height: "20px" }}
          onClick={() => {
            dispatch(delVibhag(vibhagState[index]._id));
            setTimeout(() => {
              dispatch(getAllVibhag());
            }, 100);
          }}
        />
      ),
    });
  }
  return { vibhagState, data1 };
};

export { useVibhag };