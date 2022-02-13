import React from "react";
import InputBox from "./InputBox";

import InputBoxes from "./InputBoxes";

const Account = () => {
  return (
    <>
      <div className="card-header">Account Details</div>
      <div className="card-body">
        <div class="row">
          <div className="col">
            <InputBoxes Inp1="First Name *" Inp2="Email " Inp3="Password *" />
          </div>
          <div class="col">
            <InputBox Label="Last Name" />
            {/* <div> */}
            <div className="col-12 my-2 d-flex">
              <div>
                <InputBox Label="Mobile Number *" />
              </div>
              {/* <div className="col-12"> */}
              <div className="form-check">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="inlineFormCheck"
                />
                <label className="form-check-label" for="inlineFormCheck">
                  Verify Later
                </label>
              </div>
              {/* </div> */}
            </div>
            <div className="top">
              <InputBox Label="Confirm Password *" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
