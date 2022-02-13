import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    msg: ""
  });

  const navigation = useNavigate();
  const inputEvent = (event) => {
    // one object we are getting.
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };
  const fromSubmit = (e) => {
    e.preventDefault();
    console.log(`Your username is ${data.username} \n
    Your password is  ${data.password} \n `);
    navigation("/info");
  };
  return (
    <div className="">
      <div className="">
        <div className="row ">
          <div className="col-md-6 col-5 mx-auto">
            <form onSubmit={fromSubmit}>
              <div className="my-5">
                <h1 className="text-center text">
                  Sign in to continue to your account
                </h1>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="username"
                    value={data.username}
                    onChange={inputEvent}
                    placeholder="Enter Username"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="password"
                    value={data.password}
                    onChange={inputEvent}
                    placeholder="Enter your password"
                  />

                  <div className="Link ">
                    <div>
                      <NavLink to="">Forgot Password?</NavLink>
                    </div>
                    <div>
                      <NavLink to="">Resend Activation Link?</NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-12 ">
                  <button className="btn btn-danger" type="submit">
                    Sign In
                  </button>
                </div>
                <hr />
                <p className="p_text">
                  Don't have an account? Click here to
                  <span className="Color"> create </span>one now!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
