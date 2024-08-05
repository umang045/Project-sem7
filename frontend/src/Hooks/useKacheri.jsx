import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getKacheri } from "../feature/kacheri/kacheriSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const fetchKacheri = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getKacheri());
  }, [getKacheri]);

  const fetchKacheri = useSelector(
    (state) => state?.kacheri?.kacheri,
    shallowEqual
  );
  return fetchKacheri;
};

const useKacheri = () => {
  const kacheriState = fetchKacheri();
  const data1 = [];
  for (let index = 0; index < kacheriState.length; index++) {
    data1.push({
      index: index + 1,
      name: `${kacheriState[index]?.ક્ચેરી‌નુ‌નામ}`,
      edit: <FaEdit style={{ cursor: "pointer", height: "20px" }} />,
      delete: <MdDelete style={{ cursor: "pointer", height: "20px" }} />,
    });
  }
  return { kacheriState, data1 };
};

export { useKacheri };
