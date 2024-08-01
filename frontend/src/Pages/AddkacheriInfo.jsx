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
            <CustomInput
              type="text"
              placeholder="વિભાગ‌નુ‌નામ"
              name="વિભાગ‌નુ‌નામ"
            />
            <CustomInput type="text" placeholder="યૂનીટનંબર" name="યૂનીટનંબર" />
            <CustomInput
              type="text"
              placeholder="મકાનનુ‌નામ"
              name="મકાનનુ‌નામ"
            />
            <CustomInput
              type="text"
              placeholder="જુનોમિલ્કતનંબર"
              name="જુનોમિલ્કતનંબર"
            />
            <CustomInput
              type="text"
              placeholder="નવોમિલ્કતનંબર"
              name="નવોમિલ્કતનંબર"
            />
            <CustomInput type="text" placeholder="બિલનંબર_1" name="બિલનંબર_1" />
            <CustomInput type="text" placeholder="બિલનંબર_2" name="બિલનંબર_2" />
            <CustomInput
              type="text"
              placeholder="મકાનનોઉપયોગ"
              name="મકાનનોઉપયોગ"
            />
            <CustomInput
              type="text"
              placeholder="ગેસલાઈનગ્રાહકનંબર"
              name="ગેસલાઈનગ્રાહકનંબર"
            />
            <CustomInput
              type="text"
              placeholder="ઈલેકટ્રીકગ્રાહકનંબર"
              name="ઈલેકટ્રીકગ્રાહકનંબર"
            />
            <CustomInput
              type="text"
              placeholder="ફાયરનીવ્યવસ્થા"
              name="ફાયરનીવ્યવસ્થા"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddkacheriInfo;
