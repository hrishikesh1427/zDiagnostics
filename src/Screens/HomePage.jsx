import React from "react";
import Home from "../components/Home";
import DownloadApp from "../components/DownloadApp";
import ContactUs from "../components/ContactUs";
import About from "../components/About";
import Pricing from "../components/Pricing";
import MoreApps from "../components/MoreApps";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Home />
      <About />
      <DownloadApp />
      <Pricing />
      <ContactUs />
      <MoreApps />
    </div>
  );
};

export default HomePage;
