import React from "react";
import InputBox from "./InputBox";

const PlainCard = () => {
  return (
    <>
      <div className="card-body">
        <div class="row">
          <div className="col">
            <InputBox Label="Company Name" />
            <div className="form-check">
              <input
                className="form-check-input "
                type="checkbox"
                id="inlineFormCheck"
              />
              <label className="form-check-label" for="inlineFormCheck">
                I'm not a robot
              </label>
            </div>
          </div>
          <div className="col d-flex Space">
            <div className="col-8 ">
              <InputBox Label="State" />
            </div>
            <div>
              <button className="my-4 btn btn-outline-danger btn_size">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlainCard;
