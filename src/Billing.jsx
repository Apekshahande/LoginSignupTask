import React from "react";
import InputBox from "./InputBox";
import InputBoxes from "./InputBoxes";

const Billing = () => {
  return (
    <>
      <div className="card-header">Billing Details</div>
      <div className="card-body">
        <div class="row">
          <div className="col">
            <InputBoxes
              Inp1="Billing Name *"
              Inp2="Address "
              Inp3="Town/City"
            />
          </div>
          <div class="col bottom">
            <InputBox Label="Landmark" />
            {/* <div> */}
            <div className="col my-2 d-flex Space ">
              <div className="col-8 ">
                <InputBox Label="State" />
              </div>
              <div>
                <InputBox Label="Pin Code *" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
