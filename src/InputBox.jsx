import React from "react";

const InputBox = (props) => {
  return (
    <>
      <label>{props.Label}</label>
      <input
        type="text"
        className="form-control"
        // placeholder="Last name"
      />
    </>
  );
};
export default InputBox;
