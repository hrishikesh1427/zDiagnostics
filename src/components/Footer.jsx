import React from "react";
import mwb from "../assets/mwb.png";
import logo from "../assets/logo.png";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const nav = useNavigate();
  return (
    <div className="w-full bg-white text-black grid grid-cols-2  max-sm:grid-cols-1 text-center justify-between p-4 py-10 gap-10 ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500 font-medium text-sm max-w-[350px]">
          WB Plaza, 1st Floor, Opposite Traffic Police Station, New Cotton
          Market, Hubli - 580029 Karnataka, India
        </p>
        <p className="text-gray-500 font-medium text-sm flex gap-2 items-center hover:underline cursor-pointer">
          <IoMail className="w-4 h-4" />
          <a href="mailto:reachus@wbtechindia.com">reachus@wbtechindia.com</a>
        </p>
      </div>
      <div className="flex flex-col items-center  text-sm gap-2">
        <div className="w-full flex justify-center divide-x-2 ">
          <div className="w-12 pr-2">
            <img src={logo} alt="logo" className="w-12 " />
          </div>
          <div className="w-12 pl-2">
            <img src={mwb} alt="mwb" className="w-12 " />
          </div>
        </div>
        <p className="text-gray-500 font-medium">
          An app by{" "}
          <a
            href="https://wbtechindia.com/#/"
            className="hover:underline text-teal-600"
            target="_blank"
          >
            MWB Technologies India Pvt Ltd.
          </a>
        </p>
        <p>
          {" "}
          © {year}. MWB Technologies India Pvt Ltd . All Rights Reserved .{" "}
        </p>
        <span>
          <a
            onClick={() => {
              nav("/policy");
            }}
            className="hover:underline cursor-pointer"
          >
            Privacy Policy
          </a>
          .{" "}
          <a
            onClick={() => {
              nav("/terms");
            }}
            className="hover:underline cursor-pointer"
          >
            Terms & Conditions
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
