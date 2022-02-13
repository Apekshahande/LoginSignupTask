import React from "react";
import Account from "./Account";
import Billing from "./Billing";
import Company from "./Company";
import PlainCard from "./PlainCard";
import SideBar from "./SideBar";

const List = () => {
  return (
    <ul>
      <h6>Semikart Account Features </h6>
      <li>Faster Checkouts</li>
      <li>Saved shopping baskets for repeat or planned orders</li>
      <li>Order tracking and order history</li>
      <li>Import a Bill Of Material (BOM)</li>
      <li>Download invoice & order COC of your order</li>
    </ul>
  );
};

const Info_Button = () => {
  return (
    <div className="d-flex">
      <div>
        <h5 className="text_size">Already Registered? </h5>
      </div>
      <div>
        <button className="info_btn1"> Resend Activation Link</button>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div>
      <div>
        <SideBar
          Head="Join Semikart Family"
          list={List()}
          info={Info_Button()}
        />
      </div>
      <div className="center ">
        <h1 className="header">Please fill in your information</h1>
        <div className="card">
          <Account />
        </div>
        <div className="card my-4">
          <Billing />
        </div>
        <div className="card my-4">
          <Company />
        </div>
        <div className="card my-4">
          <PlainCard />
        </div>
        <button className="info_btn"> Create Account</button>
      </div>
    </div>
  );
};
export default Info;
