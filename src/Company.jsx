import React from "react";
import InputBox from "./InputBox";
// import InputBoxes from "./InputBoxes";

const Company = () => {
  return (
    <>
      <div className="card-header">Company Details</div>
      <div className="card-body">
        <div class="row">
          <div className="col">
            <InputBox Label="Company Name" />
            <InputBox Label="Type" />
          </div>
          <div class="col ">
            <InputBox Label="GSTIN" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
