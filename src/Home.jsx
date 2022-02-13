import React from "react";
import Signup from "./Signup";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <SideBar
            Head="Welcome Back to Semikart"
            info="All Your Electronic Need Is Here And Classified!"
          />
        </div>
        <div className="center">
          <Signup />
        </div>
      </div>
    </>
  );
};

export default Home;
