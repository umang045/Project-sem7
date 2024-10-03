import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { useKacheri } from "../Hooks/useKacheri";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addVibhag } from "../feature/vibhag/vibhagSlice";
import { useVibhag } from "../Hooks/useVibahg";
import { useLocation, useParams } from "react-router-dom";
import { getOneKacheri } from "../feature/kacheri/kacheriSlice";
import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

let schema = yup.object().shape({
  ક્ચેરી‌નુ‌નામ: yup.string().required("ક્ચેરી‌ નુ‌ નામ જરુરી છે."),
  વિભાગ‌નુ‌નામ: yup.string().required("વિભાગ‌ નુ‌ નામ જરુરી છે."),
  મકાનનુ‌નામ: yup.string().required("મકાનનુ‌નામ જરુરી છે."),
});

const AddVibhag = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const vibhagData = location.state;
  // console.log(vibhagData.name);

  const { kacheriState } = useKacheri();
  const onekacheriState = useSelector((state) => state?.kacheri?.getOneKacheri);

  useEffect(() => {
    if (id != undefined && vibhagData != null) {
      dispatch(getOneKacheri(vibhagData?.kacheriId));
      formik.setValues({
        kacheriId: onekacheriState?._id,
        વિભાગ‌નુ‌નામ: vibhagData.વિભાગ‌નુ‌નામ,
        યૂનીટનંબર: vibhagData.યૂનીટનંબર,
        ઈલેકટ્રીકગ્રાહકનંબર: vibhagData.ઈલેકટ્રીકગ્રાહકનંબર,
        ગેસલાઈનગ્રાહકનંબર: vibhagData.ગેસલાઈનગ્રાહકનંબર,
        મકાનનોઉપયોગ: vibhagData.મકાનનોઉપયોગ,
        બિલનીકુલરકમ: vibhagData.બિલનીકુલરકમ,
        બિલનંબર_1: vibhagData.બિલનંબર_1,
        બિલનંબર_2: vibhagData.બિલનંબર_2,
        નવોમિલ્કતનંબર: vibhagData.નવોમિલ્કતનંબર,
        જુનોમિલ્કતનંબર: vibhagData.જુનોમિલ્કતનંબર,
        મકાનનુ‌નામ: vibhagData.મકાનનુ‌નામ,
        વિભાગ‌નુ‌નામ: vibhagData.વિભાગ‌નુ‌નામ,
        યૂનીટનંબર: vibhagData.યૂનીટનંબર,
        ફાયરનીવ્યવસ્થા: vibhagData.ફાયરનીવ્યવસ્થા ? "true" : "false",
      });
    } else {
      formik.setValues({
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
      });
    }
  }, [vibhagData, id]);

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
      // console.log(values);
      dispatch(addVibhag(values));
    },
  });
  
  return (
    <>
      <div>
        <h3 className="mb-4 ">ક્ચેરી‌ ની માહીતી</h3>
        <div style={{ height: "60vh", overflowY: "scroll" }}>
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
              placeholder="વિભાગ‌ નુ‌ નામ"
              name="વિભાગ‌નુ‌નામ"
              onChng={formik.handleChange("વિભાગ‌નુ‌નામ")}
              onBlr={formik.handleBlur("વિભાગ‌નુ‌નામ")}
              val={formik.values.વિભાગ‌નુ‌નામ}
            />
            <CustomInput
              type="text"
              placeholder="યૂનીટ નંબર"
              name="યૂનીટનંબર"
              onChng={formik.handleChange("યૂનીટનંબર")}
              onBlr={formik.handleBlur("યૂનીટનંબર")}
              val={formik.values.યૂનીટનંબર}
            />
            <CustomInput
              type="text"
              placeholder="મકાન નુ ‌નામ"
              name="મકાનનુ‌નામ"
              onChng={formik.handleChange("મકાનનુ‌નામ")}
              onBlr={formik.handleBlur("મકાનનુ‌નામ")}
              val={formik.values.મકાનનુ‌નામ}
            />
            <CustomInput
              type="text"
              placeholder="જુનો મિલ્કત નંબર"
              name="જુનોમિલ્કતનંબર"
              onChng={formik.handleChange("જુનોમિલ્કતનંબર")}
              onBlr={formik.handleBlur("જુનોમિલ્કતનંબર")}
              val={formik.values.જુનોમિલ્કતનંબર}
            />
            <CustomInput
              type="text"
              placeholder="નવો મિલ્કત નંબર"
              name="નવોમિલ્કતનંબર"
              onChng={formik.handleChange("નવોમિલ્કતનંબર")}
              onBlr={formik.handleBlur("નવોમિલ્કતનંબર")}
              val={formik.values.નવોમિલ્કતનંબર}
            />
            <CustomInput
              type="text"
              placeholder="બિલનંબર 1"
              name="બિલનંબર_1"
              onChng={formik.handleChange("બિલનંબર_1")}
              onBlr={formik.handleBlur("બિલનંબર_1")}
              val={formik.values.બિલનંબર_1}
            />
            <CustomInput
              type="text"
              placeholder="બિલનંબર 2"
              name="બિલનંબર_2"
              onChng={formik.handleChange("બિલનંબર_2")}
              onBlr={formik.handleBlur("બિલનંબર_2")}
              val={formik.values.બિલનંબર_2}
            />
            <CustomInput
              type="number"
              placeholder="બિલ ની કુલ રકમ"
              name="બિલનીકુલરકમ"
              onChng={formik.handleChange("બિલનીકુલરકમ")}
              onBlr={formik.handleBlur("બિલનીકુલરકમ")}
              val={formik.values.બિલનીકુલરકમ}
            />
            <CustomInput
              type="text"
              placeholder="મકાન નો ઉપયોગ"
              name="મકાનનોઉપયોગ"
              onChng={formik.handleChange("મકાનનોઉપયોગ")}
              onBlr={formik.handleBlur("મકાનનોઉપયોગ")}
              val={formik.values.મકાનનોઉપયોગ}
            />
            <CustomInput
              type="text"
              placeholder="ગેસ લાઈન ગ્રાહક નંબર"
              name="ગેસલાઈનગ્રાહકનંબર"
              onChng={formik.handleChange("ગેસલાઈનગ્રાહકનંબર")}
              onBlr={formik.handleBlur("ગેસલાઈનગ્રાહકનંબર")}
              val={formik.values.ગેસલાઈનગ્રાહકનંબર}
            />
            <CustomInput
              type="text"
              placeholder="ઈલેકટ્રીક ગ્રાહક નંબર"
              name="ઈલેકટ્રીકગ્રાહકનંબર"
              onChng={formik.handleChange("ઈલેકટ્રીકગ્રાહકનંબર")}
              onBlr={formik.handleBlur("ઈલેકટ્રીકગ્રાહકનંબર")}
              val={formik.values.ઈલેકટ્રીકગ્રાહકનંબર}
            />
            <CustomInput type="text" placeholder="મિલ્કત વેરો" name="title" />
            <div>
              <label className="h6 mt-3 p-3 gap-15">ફાયરનીવ્યવસ્થા</label>
              <input
                type="radio"
                name="ફાયરનીવ્યવસ્થા"
                value="true"
                checked={formik.values.ફાયરનીવ્યવસ્થા === "true"}
                onChange={formik.handleChange("ફાયરનીવ્યવસ્થા")}
                onBlur={formik.handleChange("ફાયરનીવ્યવસ્થા")}
              />
              હા
              <input
                type="radio"
                name="ફાયરનીવ્યવસ્થા"
                value="false"
                checked={formik.values.ફાયરનીવ્યવસ્થા === "false"}
                onChange={formik.handleChange("ફાયરનીવ્યવસ્થા")}
                onBlur={formik.handleChange("ફાયરનીવ્યવસ્થા")}
              />
              ના
            </div>
            {formik.values.ફાયરનીવ્યવસ્થા === "true" ? (
              <>
                {" "}
                <Upload>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </>
            ) : (
              <></>
            )}

            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 my-5"
              // onSubmit={console.log(formik.values)}
            >
              {id !== undefined ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVibhag;
