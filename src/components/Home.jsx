import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Home = () => {
  return (
    <div className="home max-sm:bg-center	">
      <div
        className="w-full min-h-[95vh] bg-[#00000090]  flex px-10 p-4 h-full flex items-center justify-center flex-col gap-10 scroll-mt-[100px]"
        id="home"
      >
        <h3 className="text-white text-[4em] font-semibold max-sm:text-[3em]">
          Believing in Better Health.
        </h3>
        <a href="#contact">
          <button className="bg-secondary text-white p-4 rounded-lg text-lg flex gap-2 transition ease-in-out duration-200 font-medium hover:bg-background hover:text-secondary items-center">
            Request a quote <BsArrowRight className="w-5 h-5 " />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
