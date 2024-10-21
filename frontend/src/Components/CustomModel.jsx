import React, { useState } from "react";
import { Button, Modal } from "antd";
import CustomInput from "./CustomInput";

function CustomModal(props) {
  const { open, hideModal, performAction, title } = props;
  //   console.log(props);
  let yearArr = [];
  let date = new Date();
  const year = date.getFullYear();

  for (let index = 2004; index <= year; index++) {
    yearArr.push(index);
  }
  return (
    <Modal
      title="Add  Information"
      open={open}
      onOk={performAction}
      onCancel={hideModal}
      okText="Add"
      cancelText="Cancel"
    >
      <p>{title}</p>
      <div>
        <CustomInput
          type="number"
          placeholder="office number"
          name="index"
          className="w-100"
        />
        <CustomInput
          type="text"
          placeholder="એરીયા / ચો.ફૂટ"
          name="area"
          className="w-100"
        />
        <select
          name="year"
          id=""
          className="w-100 border  py-3 mt-3"
          style={{ outlineStyle: "none", borderRadius: "5px" }}
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
        <CustomInput type="number" placeholder="બાધકામ ની રકમ" name="cost" />
      </div>
    </Modal>
  );
}

export default CustomModal;
