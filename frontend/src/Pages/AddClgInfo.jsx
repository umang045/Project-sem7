import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import { useKacheri } from "../Hooks/useKacheri";
import { useDispatch } from "react-redux";
import { getVibhagByKacheri } from "../feature/vibhag/vibhagSlice";
import { usegetVibhagByKacheri } from "../Hooks/useVibahg";
import CustomModal from "../Components/CustomModel";
import { Collapse } from "antd";

import * as yup from "yup";
import { useFormik } from "formik";
import { addFloors, addInfo } from "../feature/vargikrn/VargikrnSlice";

import { useIffo } from "../Hooks/useInfo";

let schema = yup.object().shape({
  ક્ચેરી‌નુ‌નામ: yup.string().required("ક્ચેરી‌ નુ‌ નામ જરુરી છે."),
});

const AddClgInfo = () => {
  const [floors, setFloor] = useState(0);
  const [open, setOpen] = useState(false);
  const [showFloor, setShowFloor] = useState(false);
  const [roomType, setRoomType] = useState("");
  const [floorNumber, setFloorNumber] = useState(0);
  const [floorInfo, setFloorInfo] = useState({});

  const fetchInfoByVibhag = useIffo();
  console.log(fetchInfoByVibhag);

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
  const floorItems = Array.from({ length: floors }, (_, index) => ({
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

          <tr className="w-100 border border-1 " style={{ height: "100px" }}>
            <p>index : </p>
            <p>area : </p>
            <p>cost : </p>
            <p>year : </p>
          </tr>

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

  // console.log(floors,vibhagId);

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
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
          className="w-100"
          onChng={(e) => {
            setFloor(e.target.value);
            setShowFloor(false);
            setFloorInfo({});
            // console.log(floorInfo);
          }}
        />

        <button
          type="button"
          className="btn btn-success border-0 rounded-3 mt-3"
          onClick={() => {
            setShowFloor(true);
            const selectedVibhagId = document.querySelector(
              'select[name="vibhagId"]'
            ).value;
            console.log(selectedVibhagId);
            console.log(floors);
            dispatch(
              addFloors({
                numFloors: Number.parseInt(floors),
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
    </div>
  );
};

export default AddClgInfo;
