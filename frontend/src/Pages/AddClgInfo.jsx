import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import { useKacheri } from "../Hooks/useKacheri";
import { useDispatch } from "react-redux";
import { getVibhagByKacheri } from "../feature/vibhag/vibhagSlice";
import { usegetVibhagByKacheri } from "../Hooks/useVibahg";
import CustomModal from "../Components/CustomModel";
import { Collapse } from "antd";

const AddClgInfo = () => {
  const [floors, setFloor] = useState(0);
  const [open, setOpen] = useState(false);
  const [showFloor, setShowFloor] = useState(false);
  const [floorInfo, setFloorInfo] = useState({});
  const dispatch = useDispatch();



  const hideModal = () => {
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };



  const { kacheriState } = useKacheri();
  const { getVibhagbyKacheriState } = usegetVibhagByKacheri();

  const floorItems = Array.from({ length: floors }, (_, index) => ({
    key: `floor-${index + 1}`,
    label: `Floor ${index + 1}`,
    children: (
      <div>
        <table>
          <th>name</th>
          <th>total</th>

          <tr className="">
            <td>office</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  console.log(floorInfo);
                  setFloorInfo((prev) => {
                    return {
                      ...prev,
                      [`office-${index + 1}`]: e.target.value,
                    };
                  });

                  console.log(floorInfo);
                }}
              />
            </td>
            <td>
              {floorInfo &&
                Array.from(
                  { length: floorInfo[`office-${index + 1}`] },
                  (_, index) => (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-success border-0 rounded-3 m-2"
                      onClick={() => {
                        showModal();
                      }}
                    >
                      AddOffice {index + 1}
                    </button>
                  )
                )}
            </td>
          </tr>

          <tr className="">
            <td>college</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>laboratory</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>hostel</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>store room</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>meeting room</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>room</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>exam class room</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>staff quaters</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>labour quatars</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>staff room</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>oditorium</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>class room</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>musium</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>kichen</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>dianing hall</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>shed</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>gense toilet</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>ladies toilet</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>kacheri vahan</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>waiting room</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>

          <tr className="">
            <td>parking area</td>
            <td>
              <input type="text" className="form-control" />
            </td>
          </tr>
        </table>
      </div>
    ),
  }));

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
            // console.log(id);
            dispatch(getVibhagByKacheri({ kacheriId: id }));
          }}
        >
          <option value="">ક્ચેરી‌નુ‌નામ</option>
          {kacheriState?.map((item, index) => {
            return (
              <option key={index} value={item?._id}>
                {item?.ક્ચેરી‌નુ‌નામ}
              </option>
            );
          })}
        </select>

        <select
          name="kacheriId"
          id=""
          className="w-100 border  py-3 mb-3 "
          style={{ outlineStyle: "none", borderRadius: "5px" }}
          // onChange={formik.handleChange("kacheriId")}
          // onBlur={formik.handleBlur("kacheriId")}
          // value={formik.values.kacheriId}
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
          name="title"
          className="w-100"
          onChng={(e) => {
            // console.log(floors);
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
          }}
        >
          Add floor
        </button>
        {showFloor && (
          <Collapse items={floorItems}  />
        )}

    
      

        {/* <button
          type="button"
          className="btn btn-success border-0 rounded-3 my-5"
          onClick={() => showModal()}
        >
          ADD
        </button> */}
        <CustomModal
          hideModal={hideModal}
          open={open}
          performAction={() => {
            alert("hello");
            setOpen(false);
          }}
          title="Are you sure you want alert?"
        />
      </form>
    </div>
  );
};

export default AddClgInfo;
