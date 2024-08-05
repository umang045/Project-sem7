import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { useKacheri } from "../Hooks/useKacheri";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getAllVibhag } from "../feature/vibhag/vibhagSlice";

let schema = yup.object().shape({
  ક્ચેરી‌નુ‌નામ: yup.string().required("ક્ચેરી‌ નુ‌ નામ જરુરી છે."),
  વિભાગ‌નુ‌નામ: yup.string().required("વિભાગ‌ નુ‌ નામ જરુરી છે."),
  મકાનનુ‌નામ: yup.string().required("મકાનનુ‌નામ જરુરી છે."),
});

const addVibhag = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVibhag());
  }, [getAllVibhag,dispatch]);
  const { kacheriState } = useKacheri();
  const formik = useFormik({
    initialValues: {
      kacheriId: "",
      ફાયરનીવ્યવસ્થા: true,
      ઈલેકટ્રીકગ્રાહકનંબર: "",
      ગેસલાઈનગ્રાહકનંબર: "",
      મકાનનોઉપયોગ: "",
      બિલનીકુલરકમ: 0,
      બિલનંબર_1: "",
      બિલનંબર_2: "",
      નવોમિલ્કતનંબર: "",
      જુનોમિલ્કતનંબર: "",
      મકાનનુ‌નામ: "",
      વિભાગ‌નુ‌નામ: "",
      યૂનીટનંબર: "",
    },
    onSubmit: (values) => {
      alert(values);
    },
  });
  return (
    <>
      <div>
        <h3 className="mb-4 ">ક્ચેરી‌ ની માહીતી</h3>
        <div>
          <form action="" onSubmit={formik.handleSubmit}>
            <select
              name="kacheriId"
              id=""
              className="w-100 border  py-3 mb-3 "
              style={{ outlineStyle: "none", borderRadius: "5px" }}
              onChange={formik.handleChange("kacheriId")}
              onBlur={formik.handleBlur("kacheriId")}
              value={formik.values.kacheriId}
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
            <CustomInput
              type="text"
              placeholder="વિભાગ‌નુ‌નામ"
              name="વિભાગ‌નુ‌નામ"
              onChng={formik.handleChange("વિભાગ‌નુ‌નામ")}
              onBlr={formik.handleBlur("વિભાગ‌નુ‌નામ")}
              val={formik.values.વિભાગ‌નુ‌નામ}
            />
            <CustomInput
              type="text"
              placeholder="યૂનીટનંબર"
              name="યૂનીટનંબર"
              onChng={formik.handleChange("યૂનીટનંબર")}
              onBlr={formik.handleBlur("યૂનીટનંબર")}
              val={formik.values.યૂનીટનંબર}
            />
            <CustomInput
              type="text"
              placeholder="મકાનનુ‌નામ"
              name="મકાનનુ‌નામ"
              onChng={formik.handleChange("મકાનનુ‌નામ")}
              onBlr={formik.handleBlur("મકાનનુ‌નામ")}
              val={formik.values.મકાનનુ‌નામ}
            />
            <CustomInput
              type="text"
              placeholder="જુનોમિલ્કતનંબર"
              name="જુનોમિલ્કતનંબર"
              onChng={formik.handleChange("જુનોમિલ્કતનંબર")}
              onBlr={formik.handleBlur("જુનોમિલ્કતનંબર")}
              val={formik.values.જુનોમિલ્કતનંબર}
            />
            <CustomInput
              type="text"
              placeholder="નવોમિલ્કતનંબર"
              name="નવોમિલ્કતનંબર"
              onChng={formik.handleChange("નવોમિલ્કતનંબર")}
              onBlr={formik.handleBlur("નવોમિલ્કતનંબર")}
              val={formik.values.નવોમિલ્કતનંબર}
            />
            <CustomInput
              type="text"
              placeholder="બિલનંબર_1"
              name="બિલનંબર_1"
              onChng={formik.handleChange("બિલનંબર_1")}
              onBlr={formik.handleBlur("બિલનંબર_1")}
              val={formik.values.બિલનંબર_1}
            />
            <CustomInput
              type="text"
              placeholder="બિલનંબર_2"
              name="બિલનંબર_2"
              onChng={formik.handleChange("બિલનંબર_2")}
              onBlr={formik.handleBlur("બિલનંબર_2")}
              val={formik.values.બિલનંબર_2}
            />
            <CustomInput
              type="number"
              placeholder="બિલનીકુલરકમ"
              name="બિલનીકુલરકમ"
              onChng={formik.handleChange("બિલનીકુલરકમ")}
              onBlr={formik.handleBlur("બિલનીકુલરકમ")}
              val={formik.values.બિલનીકુલરકમ}
            />
            <CustomInput
              type="text"
              placeholder="મકાનનોઉપયોગ"
              name="મકાનનોઉપયોગ"
              onChng={formik.handleChange("મકાનનોઉપયોગ")}
              onBlr={formik.handleBlur("મકાનનોઉપયોગ")}
              val={formik.values.મકાનનોઉપયોગ}
            />
            <CustomInput
              type="text"
              placeholder="ગેસલાઈનગ્રાહકનંબર"
              name="ગેસલાઈનગ્રાહકનંબર"
              onChng={formik.handleChange("ગેસલાઈનગ્રાહકનંબર")}
              onBlr={formik.handleBlur("ગેસલાઈનગ્રાહકનંબર")}
              val={formik.values.ગેસલાઈનગ્રાહકનંબર}
            />
            <CustomInput
              type="text"
              placeholder="ઈલેકટ્રીકગ્રાહકનંબર"
              name="ઈલેકટ્રીકગ્રાહકનંબર"
              onChng={formik.handleChange("ઈલેકટ્રીકગ્રાહકનંબર")}
              onBlr={formik.handleBlur("ઈલેકટ્રીકગ્રાહકનંબર")}
              val={formik.values.ઈલેકટ્રીકગ્રાહકનંબર}
            />
            <div>
              <label className="h6 mt-3 p-3 gap-15">ફાયરનીવ્યવસ્થા</label>
              <input type="radio" name="fire" value={true} checked />
              હા
              <input type="radio" name="fire" value={false} />
              ના
            </div>
            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 my-5"
              onSubmit={console.log(formik.values)}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default addVibhag;
