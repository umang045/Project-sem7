import React from "react";

function CustomInput(props) {
    const {type , placeholder , i_id ,i_class , name ,onChng,val,onBlr ,onFocus} = props
  return (
    <>
      <div className="form-floating mt-3">
      <label className="h6" htmlFor={placeholder} style={{marginBottom:"20px"}}>{placeholder}</label>
        <input
          type={type}
          className={`form-control ${i_class}`}
          id={i_id}
          placeholder={placeholder}
          name={name}
          onChange={onChng}
          value={val}
          onBlur={onBlr}
          onFocus = {onFocus}
        />
      </div>
    </>
  );
}

export default CustomInput;