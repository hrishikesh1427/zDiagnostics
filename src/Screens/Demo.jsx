import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import YtModal from "../components/YtModal";
import { HiMagnifyingGlass, HiMagnifyingGlassCircle } from "react-icons/hi2";
import Logo from "../assets/logo.png";
import { FaPlay, FaYoutube } from "react-icons/fa";
import axios from "axios";
import { ytStaticApiData } from "../constants";

const Demo = () => {
  const [showYtModal, setShowYtModal] = useState(false);
  const [Serch, setSerch] = useState("");
  const [initailData, setInitailData] = useState([]);
  const [ytPlaylist, setYtPlaylist] = useState([]);
  const [selectedYtIndex, setSelectedYtIndex] = useState(0);
  const getYtVideos = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL-mWv5WwhcjwpetUfGfGwAds5Tn23DGh1&key=${import.meta.env.VITE_YTAPI}`);
      setInitailData(res?.data?.items)
      
    } catch (error) {
      // console.log(error);
      setInitailData(ytStaticApiData?.items)
    }
  };
  useEffect(() => {
    getYtVideos();
  },[]);
  useEffect(() => {
    if (initailData?.length) {
      if (Serch.length > 2) {
        const serchedYtData = [
          ...initailData.filter((yt, idx) => {
            return yt?.snippet?.title
              .toLowerCase()
              ?.includes(Serch?.toLowerCase());
          }),
        ];
        setYtPlaylist([...serchedYtData]);
      } else {
        setYtPlaylist([...initailData]);
      }
    }
  }, [Serch, initailData]);
  return (
    <div className="w-full relative min-h-[90vh] bg-shape flex px-10 px-4  p-2 max-md:px-4 max-sm:px-1 flex-1 flex-col gap-5 ">
      <span className="text-3xl font-bold text-secondary flex gap-2 text-center ">
        FAQ's
      </span>

      {showYtModal && (
        <YtModal
          name={ytPlaylist[selectedYtIndex]?.snippet?.title}
          url={ytPlaylist[selectedYtIndex]?.snippet?.resourceId?.videoId}
          setShowYtModal={() => setShowYtModal()}
        />
      )}
      <div className="px-2 p-1 rounded-md   bg-gray-200   flex items-center  max-sm:w-[90%] w-[300px] ">
        <input
          type="text"
          value={Serch}
          className="bg-gray-200 focus:outline-none placeholder-gray-800 flex-1 "
          placeholder={`Serch videos`}
          onChange={(e) => setSerch(e.target.value)}
        />
        <HiMagnifyingGlass className="w-4 h-4 text-black " />
      </div>
      <div className="flex flex-wrap items-center justify-center self-center gap-8 transition ease-in-out duration-[.5s]">
        {ytPlaylist?.length ? (
          ytPlaylist?.map((yt, idx) => {
            return (
              <div
                className="w-[300px]  bg-white shadow-xl rounded-xl group/item  overflow-hidden  min-h-[281px]"
                key={idx}
                onClick={() => {
                  setSelectedYtIndex(idx);
                  setShowYtModal(true);
                }}
              >
                <div className="w-[300px] group h-[225px]  bg-gray-600 rounded-t-xl overflow-hidden h-full relative cursor-pointer">
                  <img
                    src={yt?.snippet?.thumbnails?.standard?.url}
                    alt={yt?.snippet?.title}
                    className="  rounded-t-xl : group-hover/item:scale-110   transition ease-in-out duration-[.3s] cursor-pointer"
                  />
                  <div className="absolute w-[300px] h-[100%] top-0 left-0 bg-[#00000080] text-white flex items-center  transition ease-in-out duration-[.3s] justify-center opacity-0 group-hover:opacity-100	">
                    <div className="relative">
                      <FaPlay className="w-14 h-14 text-secondary 	" />
                      <FaPlay className="w-14 h-14 text-secondary animate-ping absolute top-0 left-[5%]" />
                    </div>
                  </div>
                </div>
                <span className="text-sm w-full flex items-center  px-4 p-2 text-secondary font-semibold line-clamp-2  ">
                  {yt?.snippet?.title} ?
                </span>
              </div>
            );
          })
        ) : Serch?.length ? (
          <p className="text-secondary font-semibold  "> No Results Found</p>
        ) : (
          <>
            <img src={Logo} className="w-[40px] animate-pulse" />
            <p className="text-secondary font-semibold animate-pulse  ">
              Loading Data...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Demo;
