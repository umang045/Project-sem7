import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addKacheri, getKacheri } from "../feature/kacheri/kacheriSlice";
import { useKacheri } from "../Hooks/useKacheri";

let schema = yup.object().shape({
  ક્ચેરી‌નુ‌નામ: yup.string().required("ક્ચેરી‌ નુ‌ નામ જરુરી છે."),
});

const AddkacheriInfo = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      ક્ચેરી‌નુ‌નામ: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addKacheri(values));
      setTimeout(() => {
        dispatch(getKacheri());
      }, 100);
    },
  });
  return (
    <>
      <div>
        <h3 className="mb-4 ">ક્ચેરી‌ ની માહીતી</h3>
        <div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              placeholder="ક્ચેરી‌નુ‌નામ"
              name="ક્ચેરી‌નુ‌નામ"
              onChng={formik.handleChange("ક્ચેરી‌નુ‌નામ")}
              onBlr={formik.handleBlur("ક્ચેરી‌નુ‌નામ")}
              val={formik.values.ક્ચેરી‌નુ‌નામ}
            />
            <div className="error">
              {formik.touched.ક્ચેરી‌નુ‌નામ && formik.errors.ક્ચેરી‌નુ‌નામ}
            </div>
            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 my-5"
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
