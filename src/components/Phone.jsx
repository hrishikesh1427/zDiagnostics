import React from "react";
import "./Phone.css"
const Phone = ({img}) => {
  return (
    <div className="card w-full max-w-[200px] min-w-[200px]">
      <div className="btn1"></div>
      <div className="btn2"></div>
      <div className="btn3"></div>
      <div className="btn4"></div>
      <div className="card-int">
          <img src={img} className="hello" alt="steps Image"  />
      </div>
      <div className="top">
        <div className="camera">
          <div className="int"></div>
        </div>
        <div className="speaker"></div>
      </div>
    </div>
  );
};

export default Phone;
