import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import { useKacheri } from "../Hooks/useKacheri";
import { useDispatch, useSelector } from "react-redux";
import { getVibhagByKacheri } from "../feature/vibhag/vibhagSlice";
import { usegetVibhagByKacheri } from "../Hooks/useVibahg";
import CustomModal from "../Components/CustomModel";
import { Collapse } from "antd";
import { ResponsiveTable } from "responsive-table-react";
import { useVibhag } from "../Hooks/useVibahg";
import { MdDelete } from "react-icons/md";

import {
  addFloors,
  addInfo,
  delFloorsInfo,
  getFloors,
} from "../feature/vargikrn/VargikrnSlice";

import { useIffo } from "../Hooks/useInfo";


const columns = [
  {
    id: "cnt",
    text: "ક્રમ",
  },
  {
    id: "i",
    text: "vigat ક્રમ",
  },
  {
    id: "floor",
    text: "માણ ક્રમ",
  },
  {
    id: "name",
    text: "નામ",
  },
  {
    id: "area",
    text: "એરિયા (ચો.ફૂટ)",
  },
  {
    id: "year",
    text: "વર્ષ",
  },
  {
    id: "cost",
    text: "કુલ રકમ",
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
  const [floordata, setFloordata] = useState([]);

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
  // console.log(getFloorsbyid[0]?.માહીતી);
  useEffect(() => {
    if (getFloorsbyid && getFloorsbyid[0]?.માહીતી?.length != undefined) {
      setFloor(getFloorsbyid[0]?.માહીતી?.length);
      setShowFloor(true);
    } else setShowFloor(false);
    updateFloorData();
  }, [getFloorsbyid]);


  useEffect(() => {
    updateFloorData();
  }, [getFloorsbyid]);

  const updateFloorData = () => {
    if (getFloorsbyid && getFloorsbyid[0] && getFloorsbyid[0].માહીતી && getFloorsbyid[0].માહીતી.length > 0) {
      let newFloordata = [];
      let count = 0;
      for (let index = 0; index < getFloorsbyid[0]?.માહીતી?.length; index++) {
        // setFloordata(newFloordata);
        getFloorsbyid[0]?.માહીતી[index]?.floor[0]?.info.forEach((item, idx) => {
          newFloordata.push({
            cnt: ++count,
            i: item?.index,
            floor: index + 1,
            name: item.name,
            area: item.area,
            cost: item.cost,
            year: item.year,
            delete: (
              <MdDelete
                style={{ cursor: "pointer", height: "20px" }}
                onClick={() => {
                  const selectedVibhagId = document.querySelector(
                    'select[name="vibhagId"]'
                  ).value;
                  dispatch(delFloorsInfo({
                    "vibhgId": selectedVibhagId,
                    "floorNum": index,
                    "idx": `${item?.index}`,
                    "name": `${item?.name}`
                  })).then(()=>{
                    const updatedFloordata = newFloordata.filter(
                    (data) => data.i !== item.index
                  );
                  setFloordata(updatedFloordata);
                  })
                }}
              />
            ),
          });
        });
        setFloordata(newFloordata);
      }
    }
  };
  // updateFloorData();

  // console.log(floordata);
  
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
            <td>ઓફિસ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("ઓફિસ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>
          {/* {console.log(floor)} */}

          <tr className="">
            <td>કોલેજ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("કોલેજ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>લૅબોરેટરી</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("લૅબોરેટરી", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>હોસ્ટેલ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("હોસ્ટેલ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>સ્ટોર રૂમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("સ્ટોર રૂમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>મીટિંગ રૂમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("મીટિંગ રૂમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>રૂમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() => showModal("રૂમ", floorItems[index].floorNumber)}
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>એક્જામ રૂમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("એક્જામ રૂમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>સ્ટાફ કુઆટાર્સ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("સ્ટાફ કુઆટાર્સ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>લેબોર કુઆટાર્સ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("લેબોર કુઆટાર્સ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>સ્ટાફ રૂમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("સ્ટાફ રૂમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>ઓડિટોરિયમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("ઓડિટોરિયમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>ક્લાસ રૂમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("ક્લાસ રૂમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>મ્યુસીયમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("મ્યુસીયમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>કિચન</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("કિચન", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>ડાયનીંગ હોલ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("ડાયનીંગ હોલ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>શેડ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() => showModal("શેડ", floorItems[index].floorNumber)}
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>જેનસ ટોઇલેટ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("જેનસ ટોઇલેટ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>લેડિસ ટોઇલેટ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("લેડિસ ટોઇલેટ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>કચેરી વાહન</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("કચેરી વાહન", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>વેટિંગ રૂમ</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("વેટિંગ રૂમ", floorItems[index].floorNumber)
                }
              >
                +
              </button>
            </td>
          </tr>

          <tr className="">
            <td>પાર્કિંગ એરિયા</td>
            <td>
              <button
                type="button"
                className="btn btn-success border-0 rounded-3 mt-3"
                onClick={() =>
                  showModal("પાર્કિંગ એરિયા", floorItems[index].floorNumber)
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
            const selectedkacheriId = document.querySelector(
              'select[name="kacheriId"]'
            ).value;
            dispatch(
              addFloors({
                numFloors: Number.parseInt(floor),
                vibhagId: selectedVibhagId,
                kacheriId: selectedkacheriId,
              })
            );
            setTimeout(() => {
              dispatch(getFloors(selectedVibhagId));
            }, 200)
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
            const index = document.querySelector('input[name="index"]').value;
            const area = document.querySelector('input[name="area"]').value;
            const cost = document.querySelector('input[name="cost"]').value;
            const year = document.querySelector('select[name="year"]').value;
            dispatch(
              addInfo({
                vibhagId: selectedVibhagId,
                floor: Number.parseInt(floorNumber),
                index: Number.parseInt(index),
                name: `${roomType}`,
                area: Number.parseInt(area),
                cost: Number.parseInt(cost),
                year: Number.parseInt(year),
              })
            );
            setTimeout(() => {
              dispatch(getFloors(selectedVibhagId));
            }, 200)
            hideModal();
          }}
          title={`Add ${roomType} on floor ${floorNumber}`}
        />
      </form>
      <div className="w-100" style={{ overflowX: "scroll", marginTop: "20px" }}>
        <ResponsiveTable columns={columns} data={floordata} />
      </div>
    </div>
  );
};

export default AddClgInfo;
