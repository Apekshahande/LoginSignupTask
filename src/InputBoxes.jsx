import React from "react";

const InputBoxes = (props) => {
  return (
    <>
      <label>{props.Inp1}</label>
      <input
        type="text"
        className="form-control"
        // placeholder={props.Inp1}
      />

      <label className="my-1">{props.Inp2}</label>
      <input
        type="text"
        className="form-control"
        // placeholder={props.Inp2}
      />
      <label className="my-1">{props.Inp3}</label>
      <input
        type="text"
        className="form-control"
        // placeholder={props.Inp3}
      />
    </>
  );
};
export default InputBoxes;
