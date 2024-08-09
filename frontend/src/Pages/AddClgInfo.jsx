import React from "react";
import CustomInput from "../Components/CustomInput";
import { useKacheri } from "../Hooks/useKacheri";
import { useDispatch } from "react-redux";
import { getVibhagByKacheri } from "../feature/vibhag/vibhagSlice";

const AddClgInfo = () => {
  const dispatch = useDispatch();
  let yearArr = [];
  let date = new Date();
  const year = date.getFullYear();

  for (let index = 2004; index <= year; index++) {
    yearArr.push(index);
  }

  const { kacheriState } = useKacheri();
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <h3 className="mb-4 ">Add Information</h3>

      <form>
        <select
          name="kacheriId"
          id=""
          className="w-100 border  py-3 mb-3 "
          style={{ outlineStyle: "none", borderRadius: "5px" }}
          // value={formik.values.kacheriId}
          onChange={(e) => {
            const id = e.target.value;
            dispatch(
              getVibhagByKacheri({kacheriId: id  })
            );
          }}
          // onBlur={formik.handleBlur("kacheriId")}
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
          {/* {kacheriState?.map((item, index) => {
                  return (
                    <option key={index} value={item?._id}>
                      {item?.ક્ચેરી‌નુ‌નામ}
                    </option>
                  );
                })} */}
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
          {/* {kacheriState?.map((item, index) => {
                  return (
                    <option key={index} value={item?._id}>
                      {item?.ક્ચેરી‌નુ‌નામ}
                    </option>
                  );
                })} */}
        </select>

        <CustomInput
          type="text"
          placeholder="ઓફિસ નો એરીયા / ચો.ફૂટ"
          name="title"
          className="w-100"
        />

        <select
          name="kacheriId"
          id=""
          className="w-100 border  py-3 mt-3"
          style={{ outlineStyle: "none", borderRadius: "5px" }}
          // onChange={formik.handleChange("kacheriId")}
          // onBlur={formik.handleBlur("kacheriId")}
          // value={formik.values.kacheriId}
        >
          <option value="">બાધકામ નુ વર્ષ</option>
          {yearArr?.map((item, index) => {
            return (
              <option key={index} value={item?._id}>
                {item}
              </option>
            );
          })}
        </select>

        <CustomInput type="number" placeholder="બાધકામ ની રકમ" name="title" />
        <CustomInput type="number" placeholder="એ.સી ની સંખ્યા" name="title" />
        <CustomInput type="text" placeholder="મિલ્કત વેરો" name="title" />

        <button
          type="submit"
          className="btn btn-success border-0 rounded-3 my-5"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddClgInfo;
