import React from "react";
import { BsGooglePlay } from "react-icons/bs";
import edMock from "../assets/edMock.png";
import playstoreQr from "../assets/playstoreQr.png";
const DownloadApp = () => {
  return (
    <div
      className="w-full text-white flex items-center justify-evenly flex-col bg-shape h-full px-10 scroll-mt-[100px] gap-10 px-10 py-8 download relative "
      id="download"
    >
      <span className="text-3xl font-bold text-secondary flex gap-2 text-center ">
        Our App is available on Playstore
      </span>
      <div className="flex w-full justify-evenly   flex max-sm:flex-col items-center gap-5  ">
        <div className=" flex items-center flex-col">
          <img src={edMock} alt="Jama kharch App" className="w-[400px]" />
        </div>
        <div className="flex flex-col items-center gap-5 justify-center max-sm:w-full">
          <span className="text-secondary text-2xl font-bold">
            {" "}
            Scan the QR to download the app
          </span>
          <div className="rounded-xl overflow-hidden border ">
            <img src={playstoreQr} alt="Qr" className="w-[250px]" />
          </div>
          <span className="text-secondary text-2xl font-bold"> or</span>
          <a href="https://play.google.com/store/apps/details?id=com.yuva.easy_diagnostic" target="_blank">
            <span className="text-2xl font-medium custom-button transition ease-in-out duration-[.3s] rounded-full px-5 p-2 items-center flex gap-4 cursor-pointer">
              Download Now{" "}
              <BsGooglePlay className="w-5 h-5" onClick={() => {}} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
