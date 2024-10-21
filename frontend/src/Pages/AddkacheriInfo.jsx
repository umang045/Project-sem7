import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  addKacheri,
  getKacheri,
  updateKacheri,
} from "../feature/kacheri/kacheriSlice";
import { useLocation, useParams } from "react-router-dom";

let schema = yup.object().shape({
  ક્ચેરી‌નુ‌નામ: yup.string().required("ક્ચેરી‌ નુ‌ નામ જરુરી છે."),
});

const AddkacheriInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const kacheriItem = location.state;
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      ક્ચેરી‌નુ‌નામ: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // console.log(id);
      if (id !== undefined) dispatch(updateKacheri({ values, id }));
      else {
        dispatch(addKacheri(values));
        setTimeout(() => {
          dispatch(getKacheri());
        }, 100);
      }
    },
  });
  useLayoutEffect(() => {
    if (id != undefined && kacheriItem != null && kacheriItem) {
      formik.setValues({ ક્ચેરી‌નુ‌નામ: kacheriItem });
    } else formik.setValues({ ક્ચેરી‌નુ‌નામ: "" });
  }, [kacheriItem, id]);
  return (
    <>
      {/* <div className="w-full h-full p-4 bg-red-600"> */}
      <h3 className="text-center">ક્ચેરી‌ ઉમેરો</h3>
      {/* <div className="w-200" style={{
        width: "300px",
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        margin: "100px auto"
      }}>
        <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              placeholder="ક્ચેરી‌ નુ ‌નામ"
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
              className="btn btn-success border-3 rounded-3 my-5"
            >
              {id === undefined ? "ADD" : "Update"}
            </button>
          </form>
      </div> */}

      {/* </div> */}


      <div className="w-200" style={{
        width: "450px",
        height: "300px",
        padding: "40px",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        border: "2px solid #ccc",
        borderRadius: "12px",
        margin: "100px auto",
        textAlign: "center"
      }}>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            placeholder="ક્ચેરી‌ નુ ‌નામ"
            name="ક્ચેરી‌નુ‌નામ"
            onChng={formik.handleChange("ક્ચેરી‌નુ‌નામ")}
            onBlr={formik.handleBlur("ક્ચેરી‌નુ‌નામ")}
            val={formik.values.ક્ચેરી‌નુ‌નામ}
            style={{

            }}
            onFocus={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0, 123, 255, 0.3)'}
            // onBlr={(e) => e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'}
          />
          <div className="error" style={{ color: "red", fontSize: "12px" }}>
            {formik.touched.ક્ચેરી‌નુ‌નામ && formik.errors.ક્ચેરી‌નુ‌નામ}
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              background: "linear-gradient(to right, #28a745 50%, #226acd 50%)",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "50px",
              backgroundSize: "200% 100%",
              backgroundPosition: "left bottom",
              transition: "background-position 0.4s ease"
            }}
            onMouseEnter={(e) => e.target.style.backgroundPosition = 'right bottom'}
            onMouseLeave={(e) => e.target.style.backgroundPosition = 'left bottom'}
          >
            {id === undefined ? "ADD" : "Update"}
          </button>
        </form>
      </div>

    </>
  );
};

export default AddkacheriInfo;
