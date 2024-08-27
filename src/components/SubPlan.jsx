// import React, { useEffect, useRef, useState } from "react";
// import { CiCircleCheck } from "react-icons/ci";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { IoCheckmarkCircleSharp, IoRemoveCircleSharp } from "react-icons/io5";
// import FeatureIcons from "./FeatureIcons";
// import { RxCross2 } from "react-icons/rx";
// import { FaRegCircleXmark } from "react-icons/fa6";
// import LogoNav from "../assets/PlanIcon.png";
// import { HashLink } from "react-router-hash-link";
// const SubPlan = ({ subplanData, Description, AddOns }) => {

//   console.log(AddOns, 'Im Addon')
//   const planColors = useRef({
//     Gold: { color: "#FFBF00", gradient: ["#AE8265", "#F7EF8A"] },
//     Silver: { color: "#FF512F", gradient: ["#B7B4AF", "#F0F0F0"] },
//     Platinum: { color: "#C0C0C0", gradient: ["#707070", "#F0F0F0"] },
//     null: { color: "#C0C0C0", gradient: ["#82EA9B", "#B8FFB3"] },
//     Trail: { color: "#C0C0C0", gradient: ["#82EA9B", "#B8FFB3"] },
//     Basic: { color: "#FFBF00", gradient: ["#AE8265", "#F7EF8A"] },
//   });

//   return (
// <div
//   className={`w-full max-w-[350px] rounded-2xl mx-auto`}
//   style={{
//     backgroundImage: `linear-gradient(45deg, ${planColors.current[subplanData?.Name]?.gradient[0]} 0%,${planColors.current[subplanData?.Name]?.gradient[1]}  51%, ${planColors.current[subplanData?.Name]?.gradient[0]}  100%)`,
//   }}
// >
//   <div
//     className={`flex flex-col bg-background card_box text-black p-4 min-h-[450px] max-h-[600px] h-full items-start rounded-xl gap-4 m-1`}
//   >
//     <span className="relative">
//       <div
//         className="color-black"
//         style={{
//           position: "absolute",
//           width: "150%",
//           height: "40px",
//           backgroundImage: `linear-gradient(45deg, ${planColors.current[subplanData?.Name]?.gradient[0]} 0%,${planColors.current[subplanData?.Name]?.gradient[1]}  51%, ${planColors.current[subplanData?.Name]?.gradient[0]}  100%)`,
//           transform: "rotate(-45deg) translateY(-20px)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontWeight: "600",
//           letterSpacing: "0.1em",
//           textTransform: "uppercase",
//           boxShadow: "0 5px 10px rgba(0,0,0,0.23)",
//         }}
//       >
//         {subplanData?.Name || "Free"}
//       </div>
//     </span>

//     <div className={`flex items-center gap-4 p-2 w-full`}>
//       <img src={LogoNav} alt="Logo" className="object-cover " />
//     </div>

//     <p className="text-lg font-semibold">Features</p>
//     <ul className="list-none w-full">
//       {subplanData?.Features?.map((feature, idx) => {
//         return (
//           feature?.IsActive != 0 && (
//             <li
//               className="flex gap-2 items-center font-medium w-full mb-2"
//               key={idx}
//             >
//               <FeatureIcons IconName={feature?.FeatureName} />
//               <p className="text-sm leading-6">{feature?.FeatureName}</p>
//               <p className="flex-1 flex flex-col w-full items-end">
//                 {feature?.status ? (
//                   feature?.Count
//                 ) : (
//                   <FaRegCircleXmark className="w-4 h-4 text-red-500" />
//                 )}
//               </p>
//             </li>
//           )
//         );
//       })}
//     </ul>

//     <div
//       className="w-full rounded-xl mt-auto"
//       style={{
//         backgroundImage: `linear-gradient(45deg, ${planColors.current[subplanData?.Name]?.gradient[0]} 0%,${planColors.current[subplanData?.Name]?.gradient[1]}  51%, ${planColors.current[subplanData?.Name]?.gradient[0]}  100%)`,
//       }}
//     >
//       <p className="text-base cursor-pointer font-medium m-1 rounded-xl bg-white px-4 py-2 text-secondary transition ease-in-out duration-150 text-center">
//         {subplanData?.Amount == 0 ? "Free trial" : `₹ ${subplanData?.Amount}`}{" "}
//         for {subplanData?.Duration} days
//       </p>
//     </div>

//     {AddOns?.Features.length > 0 ? (
//       <ul className="list-none w-full mt-4">
//         <p className="text-lg font-semibold">Add Ons</p>
//         {AddOns?.Features.map((data, idx) => {
//           return (
//             <li className="flex gap-2 items-center font-medium w-full" key={idx}>
//               <p className="text-sm font-medium">
//                 {data.AddOnName}
//                 <br /> ₹ {data?.Price} per Annum
//               </p>
//             </li>
//           );
//         })}
//       </ul>
//     ):<ul className="list-none w-full mt-4">
//     <p className="text-lg font-semibold">Add Ons</p>
//     {AddOns?.Features.map((data, idx) => {
//       return (
//         <li className="flex gap-2 items-center font-medium w-full" key={idx}>
//           <p className="text-sm font-medium">
//             {data.AddOnName}
//             <br /> ₹ {data?.Price} per Annum
//           </p>
//         </li>
//       );
//     })}
//   </ul>}
//   </div>
// </div>

//   );
// };

// export default SubPlan;
import React, { useEffect, useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCheckmarkCircleSharp, IoRemoveCircleSharp } from "react-icons/io5";
import FeatureIcons from "./FeatureIcons";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
const SubPlan = ({ subplanData, Description,AddOns }) => {
  const planColors = useRef({
    Gold: { color: "#FFBF00", gradient: ["#AE8265", "#F7EF8A"] },
    Silver: { color: "#FF512F", gradient: ["#B7B4AF", "#F0F0F0"] },
    Platinum: { color: "#C0C0C0", gradient: ["#707070", "#F0F0F0"] },
    null: { color: "#C0C0C0", gradient: ["#82EA9B", "#B8FFB3"] },
    Trail: { color: "#C0C0C0", gradient: ["#82EA9B", "#B8FFB3"] },
    Basic: { color: "#FFBF00", gradient: ["#AE8265", "#F7EF8A"] },
  });
// console.log(subplanData);

  return (
    <div
      className="w-max rounded-2xl "
      style={{
        backgroundImage: `linear-gradient(45deg, ${
          planColors.current[subplanData?.Name]?.gradient[0]
        } 0%,${planColors.current[subplanData?.Name]?.gradient[1]}  51%, ${
          planColors.current[subplanData?.Name]?.gradient[0]
        }  100%)`,
      }}
    >
      <div
        className={`flex m-1 flex-col w-1 bg-background card_box text-black min-w-[300px] h-fit items-start rounded-xl gap-3 scroll-mt-[100px]`}
      >
        <span className="realative">
          <div
            className="color-black"
            style={{
              position: "absolute",
              width: "150%",
              height: "40px",
              backgroundImage: `linear-gradient(45deg, ${
                planColors.current[subplanData?.Name]?.gradient[0]
              } 0%,${
                planColors.current[subplanData?.Name]?.gradient[1]
              }  51%, ${
                planColors.current[subplanData?.Name]?.gradient[0]
              }  100%)`,
              transform: "rotate(-45deg) translateY(-20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              letterSpacing: " 0.1em",
              textTransform: "uppercase",
              boxShadow: " 0 5px 10px rgba(0,0,0,0.23)",
            }}
          >
            {subplanData?.Name || "Free"}
          </div>
          <div
            style={{
              position: "absolute",
              width: "10px",
              bottom: "0",
              left: "0",
              height: "10px",
              zIndex: "-1",
              boxShadow: "140px -140px #cc3f47",
              backgroundImage:
                "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)",
            }}
          ></div>
        </span>

        <p className="text-2xl font-bold self-center ">{Description}</p>
        <p className="text-xl font-semibold">Features</p>
        <ul className="list-none w-full gap-2 flex flex-col">
          {/* <li
            className="flex gap-2 items-center  font-medium w-full mb-2 underline"
            key={-1}
          >
            <p>Name</p>
            <p className="flex-1 flex flex-col w-full items-end ">Count</p>
          </li> */}
          {subplanData?.Features?.map((feature, idx) => {
            return (
              feature?.IsActive != 0 && (
                <li
                  className="flex gap-2 items-center  font-medium w-full"
                  key={idx}
                >
                  <FeatureIcons IconName={feature?.FeatureName} />

                  <>
                    <p className="text-sm">{feature?.FeatureName}</p>
                  </>

                </li>
              )
            );
          })}
        </ul>
        <div
          className="w-full rounded-xl "
          style={{
            backgroundImage: `linear-gradient(45deg, ${
              planColors.current[subplanData?.Name]?.gradient[0]
            } 0%,${planColors.current[subplanData?.Name]?.gradient[1]}  51%, ${
              planColors.current[subplanData?.Name]?.gradient[0]
            }  100%)`,
          }}
        >
         <HashLink to="/#contact"> <p  className="text-medium cursor-pointer font-medium m-1 rounded-xl  bg-white text-center   p-2 text-secoandry transtion ease-in-out duration-150">
            {" "}
            {subplanData?.Amount == 0
              ? "Free trial"
              : `₹ ${subplanData?.Amount}`}{" "}
            for {subplanData?.Duration} days
          </p>
          </HashLink>


        </div>
        {
             AddOns?.Features.length > 0 ? (
      <ul className="list-none w-full mt-4">
        <p className="text-lg font-semibold">Add Ons</p>
        {AddOns?.Features.map((data, idx) => {
          return (
            <li className="flex gap-2 items-center font-medium w-full" key={idx}>
              <p className="text-sm font-medium">
                {data.AddOnName}
                <br /> ₹ {data?.Price} per Annum
              </p>
            </li>
          );
        })}
      </ul>
    ):<ul className="list-none w-full mt-4">
    {AddOns?.Features?.length==0 ?<div className="flex h-16"><p className="text-lg font-semibold"></p></div>:
    AddOns?.Features.map((data, idx) => {
      return (
        <li className="flex gap-2 items-center font-medium w-full" key={idx}>
          <p className="text-sm font-medium">
            {data.AddOnName}
            <br /> ₹ {data?.Price} per Annum
          </p>
        </li>
      );
    })}
    </ul>}
      </div>
    </div>
  );
};

export default SubPlan;
