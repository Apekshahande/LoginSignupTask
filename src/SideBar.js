import React from "react";

const SideBar = (props) => {
  return (
    <div className="sidenav">
      <div className="left">
        <h1>
          <span className="Color">SEMI</span>KART
        </h1>
      </div>
      <div className="my-5 left">
        <h1>{props.Head}</h1>
      </div>
      {props.list && <div>{props.list}</div>}
      <div className="my-4 left">{props.info}</div>
      <div className="fix">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5WnSVPiH2T4Sbj35XHKvbX_w8D-ENuT8wg&usqp=CAU" />
      </div>
    </div>
  );
};
export default SideBar;
