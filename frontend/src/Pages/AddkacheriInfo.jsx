import React from "react";
import CustomInput from "../Components/CustomInput";
const AddkacheriInfo = () => {
  return (
    <>
      <div>
        <h3 className="mb-4 ">ક્ચેરી‌ ની માહીતી</h3>
        <div>
          <form action="">
            <CustomInput
              type="text"
              placeholder="ક્ચેરી‌નુ‌નામ"
              name="ક્ચેરી‌નુ‌નામ"
            />

            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 my-5"
              // onSubmit={console.log(formik.values)}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddkacheriInfo;
