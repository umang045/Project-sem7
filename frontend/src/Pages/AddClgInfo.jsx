import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import { useKacheri } from "../Hooks/useKacheri";
import { useDispatch, useSelector } from "react-redux";
import { getVibhagByKacheri } from "../feature/vibhag/vibhagSlice";
import { usegetVibhagByKacheri } from "../Hooks/useVibahg";
import CustomModal from "../Components/CustomModel";
import { Collapse } from "antd";
import { ResponsiveTable } from "responsive-table-react";
import * as yup from "yup";
import { useVibhag } from "../Hooks/useVibahg";
import {
  addFloors,
  addInfo,
  getFloors,
} from "../feature/vargikrn/VargikrnSlice";

import { useIffo } from "../Hooks/useInfo";


const columns = [
  {
    id: "index",
    text: "ક્રમ",
  },
  {
    id: "name",
    text: "ક્ચેરી‌ નુ‌ નામ",
  },
  {
    id: "name",
    text: "વિભાગ‌ નુ‌ નામ",
  },
  {
    id: "makan",
    text: "માણ ક્રમ",
  },
  {
    id: "newmilkat",
    text: "નામ",
  },
  {
    id: "bill1",
    text: "એરિયા (ચો.ફૂટ)",
  },
  {
    id: "bill2",
    text: "વર્ષ",
  },
  {
    id: "totalbill",
    text: "બિલ ની કુલ રકમ",
  },
  {
    id: "edit",
    text: "Edit",
  },
  {
    id: "delete",
    text: "Delete",
  },
];



const AddClgInfo = () => {
  const [open, setOpen] = useState(false);
  const [roomType, setRoomType] = useState("");
  const [floorNumber, setFloorNumber] = useState(0);
  const [floorInfo, setFloorInfo] = useState({});
  const [floors, setFloors] = useState([]);
  const [floor, setFloor] = useState(0);
  const [vibhagId, setVibhagId] = useState("");
  const [showFloor, setShowFloor] = useState(false);

  const fetchInfoByVibhag = useIffo();
  const dispatch = useDispatch();

  const hideModal = () => {
    setOpen(false);
  };

  const showModal = (roomType, floorNumber) => {
    setOpen(true);
    setRoomType(roomType);
    setFloorNumber(floorNumber);
  };

  const { kacheriState } = useKacheri();
  const { getVibhagbyKacheriState } = usegetVibhagByKacheri();

  const getFloorsbyid = useSelector((state) => state?.vargikrn?.getfloors);
  // console.log(getFloorsbyid[0]?.માહીતી?.length);

  useEffect(() => {
    if (getFloorsbyid && getFloorsbyid[0]?.માહીતી?.length != undefined) {
      setFloor(getFloorsbyid[0]?.માહીતી?.length);
      setShowFloor(true);
    } else setShowFloor(false);
  }, [getFloorsbyid]);

  // console.log(getFloorsbyid[0].માહીતી);


  const floorItems = Array.from({ length: floor }, (_, index) => ({
    key: `floor-${index + 1}`,
    label: `Floor ${index + 1}`,
    floorNumber: index + 1,
    children: (


      <div>

        <table style={{ width: "100%" }}>
          <th>name</th>
          <th>total</th>

          <tr className="">
            <td>office</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("office", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>
          {/* {console.log(floor)} */}

          <tr className="">
            <td>college</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("college", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>laboratory</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("laboratory", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>hostel</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("hostel", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>store room</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("store room", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>meeting room</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("meeting room", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>room</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() => showModal("room", floorItems[index].floorNumber)}
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>exam class room</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("exam class room", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>staff quaters</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("staff quaters", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>labour quatars</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("labour quatars", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>staff room</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("staff room", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>oditorium</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("oditorium", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>class room</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("class room", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>musium</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("musium", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>kichen</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("kichen", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>dianing hall</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("dianing hall", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>shed</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() => showModal("shed", floorItems[index].floorNumber)}
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>gense toilet</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("gense toilet", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>ladies toilet</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("ladies toilet", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>kacheri vahan</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("kacheri vahan", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>waiting room</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("waiting room", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>parking area</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("parking area", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>
        </table>
      </div>
    ),
  }));

  const { data1 } = useVibhag();
  return (
    <div style={{ height: "90vh", overflowY: "scroll" }}>
      <h3 className="mb-4 ">Add Information</h3>

      <form>
        <select
          name="kacheriId"
          id=""
          className="w-100 border  py-3 mb-3 "
          style={{ outlineStyle: "none", borderRadius: "5px" }}
          onChange={(e) => {
            const id = e.target.value;
            dispatch(getVibhagByKacheri({ kacheriId: id }));
          }}
        >
          <option value="">ક્ચેરી‌નુ‌નામ</option>
          {kacheriState?.map((item, index) => {
            return (
              <option
                key={index}
                value={item?._id}
                onChange={() => {
                  setVibhagId(item?._id);
                  setFloor(0);
                  setShowFloor(false);
                }}
              >
                {item?.ક્ચેરી‌નુ‌નામ}
              </option>
            );
          })}
        </select>

        <select
          name="vibhagId"
          id=""
          className="w-100 border  py-3 mb-3 "
          style={{ outlineStyle: "none", borderRadius: "5px" }}
          // onChange={(e)=>{dispatch(getFloors())}}
          onChange={(e) => {
            dispatch(getFloors(e.target.value));
          }}
        >
          <option value="">વિભાગ‌નુ‌નામ</option>
          {getVibhagbyKacheriState?.map((item, index) => {
            return (
              <option key={index} value={item?._id}>
                {item?.વિભાગ‌નુ‌નામ}
              </option>
            );
          })}
        </select>

        <CustomInput
          type="number"
          placeholder="total floor"
          name="floors"
          val={floor}
          className="w-100"
          onChng={(e) => {
            setFloor(e.target.value);
            setShowFloor(false);
            setFloorInfo({});
          }}
        />

        <button
          name="addfloorbtn"
          type="button"
          className="btn btn-success border-0 rounded-3 mt-3"
          onClick={() => {
            setShowFloor(true);
            const selectedVibhagId = document.querySelector(
              'select[name="vibhagId"]'
            ).value;
            dispatch(
              addFloors({
                numFloors: Number.parseInt(floor),
                vibhagId: selectedVibhagId,
              })
            );
          }}
        >
          Add floor
        </button>

        {showFloor && <Collapse items={floorItems} />}

        <CustomModal
          hideModal={hideModal}
          open={open}
          performAction={() => {
            const selectedVibhagId = document.querySelector(
              'select[name="vibhagId"]'
            ).value;
            const area = document.querySelector('input[name="area"]').value;
            const cost = document.querySelector('input[name="cost"]').value;
            const year = document.querySelector('select[name="year"]').value;
            dispatch(
              addInfo({
                vibhagId: selectedVibhagId,
                floor: Number.parseInt(floorNumber),
                index: 1,
                name: `${roomType}`,
                area: Number.parseInt(area),
                cost: Number.parseInt(cost),
                year: Number.parseInt(year),
              })
            );
            hideModal();
          }}
          title={`Add ${roomType} on floor ${floorNumber}`}
        />
      </form>
      <div  className="w-100" style={{ overflowX: "scroll",marginTop:"20px" }}>
        <ResponsiveTable columns={columns}  data={data1}/>
      </div>
    </div>
  );
};

export default AddClgInfo;
