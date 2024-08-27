// import React, { useEffect, useRef, useState } from "react";
// import SubPlan from "./SubPlan";
// import axios from "axios";
// import _ from "lodash";
// import { BASE_URL } from "../constants";
// const Pricing = () => {
//   const [plans, setPlans] = useState([]);
//   const [planList, setPlanList] = useState([]);

//   const [initialData,setInitialData] = useState([ {
//     _id:2,
//     Name: "Trail",
//     Description: "ED Trail",
//     AddOns:{
//       Features:[]
//     },
//     SubPlans: {
//       Duration: 14,
//       Amount: 0,
//       Image: "/images/plan/ED.png",
//       id: 1,
//       Name:"Trail",
//       Features: [
//         {
//           "FeatureName": "Add Doctor/Lab Technician",
//           "status": true,
//         },
//         {
//           "FeatureName": "Assign & Add Appointment/Visit",
//           "status": true,
//         },
//         {
//           "FeatureName": "Tracking Summary",
//           "status": true,
//         },
//         {
//           "FeatureName": "Analysis Report",
//           "status": true,
//         },
//         {
//           "FeatureName": "Live Tracking of Doctor/Lab Technician",
//           "status": true,
//         },

//       ]
//     },
//     ExpiryDate: "2025-12-31T23:30:00.000Z",
//     IsPlan: true,
//     SoftwareName: "Jama Kharch",
//   },{
//     _id: 1,
//     Name: "Basic",
//     Description: "ED Home",
//     Softwares: { SoftwareID: "6489a4a5ca348ff5405ca955", Version: "1" },
//     SubPlans: {
//       Duration: 365,
//       Amount: 5500,
//       Image: "/images/plan/ED.png",
//       id: 1,
//       Name: "Basic",

//         Features: [
//           {
//             "FeatureName": "Add Doctor/Lab Technician",
//             "status": true,
//           },
//           {
//             "FeatureName": "Assign & Add Appointment/Visit",
//             "status": true,
//           },
//           {
//             "FeatureName": "Tracking Summary",
//             "status": true,
//           },
//           {
//             "FeatureName": "Analysis Report",
//             "status": true,
//           },
//           {
//             "FeatureName": "Live Tracking of Doctor/Lab Technician",
//             "status": true,
//           },

//         ]

//     },

//     AddOns:{
//       Features:[{
//         AddOnName: "Per Doctor/Lab Technician per Annum",
//         Price: 360,
//         IsActive: true,
//       }]
//     },

//     ExpiryDate: "2025-12-31T23:30:00.000Z",
//     IsPlan: true,
//     SoftwareName: "Jama Kharch",
//   },
//   ]);
//   const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

//   useEffect(() => {
//     if (initialData?.length > 0) {
//       setPlans((prev) => {
//         // Deep clone initial data
//         const dataClone = [...initialData];
//         const updatedPlans = {};

//         dataClone.forEach((plan) => {
//           const { Name, SubPlans, Description,AddOns } = plan;
//           if (!updatedPlans[Name]) {
//             updatedPlans[Name] = {
//               Name,
//               Description,
//               SubPlans: [],
//               AddOns
//             };
//           }

//           updatedPlans[Name].SubPlans.push(SubPlans);
//         });

//         // Convert object to array of values
//         const putBasicFirst = [...Object.values(updatedPlans)];
//         putBasicFirst?.forEach((data, idx) => {
//           if (data?.Name === "Basic") {
//             const temp = { ...putBasicFirst[idx] };
//             putBasicFirst[idx] = { ...putBasicFirst[0] };
//             putBasicFirst[0] = { ...temp };
//           }
//         });
//         return [...putBasicFirst];
//       });
//     }
//   }, [initialData]);
//   // console.log(plans, planList);
//   useEffect(() => {
//     if (plans.length) {
//       setPlanList((prev) => {
//         const tempList = [
//           ...plans?.map((plan) => {
//             return plan?.Name;
//           }),
//         ];
//         return [...tempList];
//       });
//     }
//   }, [plans]);

//   // auto change selectindex every 5 seconds
//   //   useEffect(() => {
//   //     const interval = setInterval(() => {
//   //       setSelectedPlanIndex(prevCount => (prevCount + 1) % 4);
//   //     }, 5000);

//   //     return () => clearInterval(interval);
//   //   }, []);

//   return (
//     <div
//           className="w-full bg-shape text-white flex items-center flex-col h-full  scroll-mt-[80px] rounded-xl  max-sm:px-4  min-h-[90vh]  "
//           id="pricing"
//         >
//       <span className="text-3xl font-bold text-secondary flex text-center underline">
//         Plans & Pricings
//       </span>
//       <div className="flex md:flex-wrap-reverse flex-row-reverse justify-evenly w-full gap-10  transition ease-in-out duration-150 flex-1 items-center overflow-x-auto">
//       {plans.map((subplanData,AddOns, idx)  => (


// <SubPlan
//               subplanData={subplanData.SubPlans[0]}
//               AddOns={subplanData.AddOns}
//               key={idx}
//               Description={plans[selectedPlanIndex]?.Description }
//             />

//           // <div key={plan._id} className="bg-white rounded-lg shadow-md p-6">
//           //   <img src={plan.SubPlans.Image} alt={plan.Name} className="w-full h-40 object-cover rounded-lg mb-4" />
//           //   <h2 className="text-2xl font-bold mb-4">{plan.Name}</h2>
//           //   <p className="text-gray-700 mb-4">{plan.Description}</p>
//           //   <h3 className="text-xl font-semibold mb-2">{plan.SubPlans.Name} Plan</h3>
//           //   <p className="text-gray-700 mb-4">Duration: {plan.SubPlans.Duration} days</p>
//           //   <p className="text-gray-700 mb-4">Amount: ₹{plan.SubPlans.Amount}</p>
//           //   <ul className="list-disc list-inside mb-4">
//           //     {plan.SubPlans.Features.map((feature) => (
//           //       <li key={feature._id} className={feature.status ? "text-green-500" : "text-red-500"}>
//           //         {feature.FeatureName} ({feature.Count})
//           //       </li>
//           //     ))}
//           //   </ul>
//           //   <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//           //     Select Plan
//           //   </button>
//           // </div>
//           // <SubPlan
//           //           subplanData={plan.SubPlans[0]}
//           //           key={idx}
//           //           Description={plans[selectedPlanIndex]?.Description }
//           //         />
//         ))}
//       </div>
//       {/* <div className="flex md:flex-wrap-reverse flex-row-reverse justify-evenly w-full gap-10  transition ease-in-out duration-150 flex-1 items-center overflow-x-auto">
//         {plans.map((subplanData,AddOns, idx) => {

//           console.log(subplanData,'yes')
//   return(

//     <SubPlan
//               subplanData={subplanData.SubPlans[0]}
//               AddOns={subplanData.AddOns}
//               key={idx}
//               Description={plans[selectedPlanIndex]?.Description }
//             />

//   )

// })}
//       </div> */}
//     </div>
// //     <div
// //       className="w-full bg-shape text-white flex items-center flex-col h-full  scroll-mt-[80px] rounded-xl gap-10 px-10 py-8 max-sm:px-4  min-h-[90vh]  "
// //       id="pricing"
// //     >
// //       <span className="text-3xl font-bold text-secondary flex gap-2 text-center underline">
// //         Plans & Pricings
// //       </span>
// //       {/* <div className="flex justify-center gap-x-10 gap-y-4 w-full flex-wrap ">
// //         {planList?.map((planName, idx) => {
// //           const isActive = idx === selectedPlanIndex;
// //           return (
// //             <button
// //               key={idx}
// //               className={` font-medium text-lg border-2 basis-32 rounded-xl px-4 p-2  border-secondary  transition ease-in-out duration-150 ${
// //                 isActive
// //                   ? "bg-secondary text-white"
// //                   : "text-secondary hover:underline"
// //               }`}
// //               onClick={() => setSelectedPlanIndex(idx)}
// //             >
// //               {planName}
// //             </button>
// //           );
// //         })}
// //       </div> */}
// //       {/* <div className="flex justify-evenly w-full gap-10 flex-wrap transition ease-in-out duration-150 flex-1 items-center">
// //         {plans.SubPlans?.map((subplanData, idx) => {
// //           return (
// //             <SubPlan
// //               subplanData={subplanData}
// //               key={idx}
// //               Description={plans[selectedPlanIndex]?.Description }
// //             />
// //           );
// //         })}
// //       </div> */}

// // {/* <div className="flex justify-center  items-center w-full gap-10  transition ease-in-out duration-150 ">
// //         {plans.map((subplanData, idx) => {
// //           return (
// //             <>

// //             <SubPlan
// //               subplanData={subplanData}
// //               key={idx}
// //               Description={plans[selectedPlanIndex]?.Description }
// //             />
// //             </>
// //           );
// //         })}
// //       </div> */}

// // <div className="flex justify-evenly w-full gap-10 md:flex-row flex-col transition ease-in-out duration-150 flex-1 items-center">

// // {plans.map((subplanData, idx) => {
// //   return(

// //     <SubPlan
// //               subplanData={subplanData.SubPlans[0]}
// //               key={idx}
// //               Description={plans[selectedPlanIndex]?.Description }
// //             />

// //   )

// // })

// // }
// //       </div>
// //     </div>
//   );
// };

// export default Pricing;


import React, { useEffect, useRef, useState } from "react";
import SubPlan from "./SubPlan";
import axios from "axios";
import _ from "lodash";
import { BASE_URL } from "../constants";
const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [initialData, setInitialData] = useState([{
    _id: 2,
    Name: "Trail",
    Description: "ED Trail",
    AddOns: {
      Features: []
    },
    SubPlans: {
      Duration: 14,
      Amount: 0,
      Image: "/images/plan/ED.png",
      id: 1,
      Name: "Trail",
      Features: [
        {
          "FeatureName": "Add Doctor/Lab Technician",
          "status": true,
        },
        {
          "FeatureName": "Assign & Add Appointment/Visit",
          "status": true,
        },
        {
          "FeatureName": "Tracking Summary",
          "status": true,
        },
        {
          "FeatureName": "Analysis Report",
          "status": true,
        },
        {
          "FeatureName": "Live Tracking of Doctor/Lab Technician",
          "status": true,
        },

      ]
    },
    ExpiryDate: "2025-12-31T23:30:00.000Z",
    IsPlan: true,
    SoftwareName: "Jama Kharch",
  }, {
    _id: 1,
    Name: "Basic",
    Description: "ED Home",
    Softwares: { SoftwareID: "6489a4a5ca348ff5405ca955", Version: "1" },
    SubPlans: {
      Duration: 365,
      Amount: 5500,
      Image: "/images/plan/ED.png",
      id: 1,
      Name: "Basic",

      Features: [
        {
          "FeatureName": "Add Doctor/Lab Technician",
          "status": true,
        },
        {
          "FeatureName": "Assign & Add Appointment/Visit",
          "status": true,
        },
        {
          "FeatureName": "Tracking Summary",
          "status": true,
        },
        {
          "FeatureName": "Analysis Report",
          "status": true,
        },
        {
          "FeatureName": "Live Tracking of Doctor/Lab Technician",
          "status": true,
        },

      ]

    },

    AddOns: {
      Features: [{
        AddOnName: "Per Doctor/Lab Technician ",
        Price: 360,
        IsActive: true,
      }]
    },

    ExpiryDate: "2025-12-31T23:30:00.000Z",
    IsPlan: true,
    SoftwareName: "Jama Kharch",
  },
  ]);
  const [stopAutoChange, setStopAutoChange] = useState(true);
  const [planList, setPlanList] = useState([]);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const ref = useRef();
  // const getPlans = async () => {
  //   try {
  //     const res = await axios.post(`${BASE_URL}/plan/ListSoftwarePlans`, {
  //       SoftwareID: 1,
  //     });
  //     // console.log(JSON.stringify(res?.data?.data));
  //     setInitialData(res?.data?.data);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getPlans();
  // }, []);

  //this useEffect is to check if the user has scrolled upto the price screen only then the auto change would start
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setStopAutoChange(false);
  //         observer.unobserve(ref.current); // Stop observing once the element is visible
  //       }
  //     },
  //     { threshold: 0.1 } // Adjust the threshold as needed
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (initialData?.length > 0) {
  //     setPlans((prev) => {
  //       // Deep clone initial data
  //       const dataClone = [...initialData];
  //       const updatedPlans = {};

  //       dataClone.forEach((plan) => {
  //         const { Name, SubPlans, Description } = plan;
  //         if (!updatedPlans[Name]) {
  //           updatedPlans[Name] = {
  //             Name,
  //             Description,
  //             SubPlans: [],
  //           };
  //         }

  //         updatedPlans[Name].SubPlans.push(SubPlans);
  //       });

  //       // Convert object to array of values
  //       const putBasicFirst = [...Object.values(updatedPlans)];
  //       putBasicFirst?.forEach((data, idx) => {
  //         if (data?.Name === "Basic") {
  //           const temp = { ...putBasicFirst[idx] };
  //           putBasicFirst[idx] = { ...putBasicFirst[0] };
  //           putBasicFirst[0] = { ...temp };
  //         }
  //       });
  //       return [...putBasicFirst];
  //     });
  //   }
  // }, [initialData]);
  // console.log(plans, planList);
  // useEffect(() => {
  //   if (plans.length) {
  //     setPlanList((prev) => {
  //       const tempList = [
  //         ...plans?.map((plan) => {
  //           return plan?.Name;
  //         }),
  //       ];
  //       return [...tempList];
  //     });
  //   }
  // }, [plans]);

  // auto change selectindex every 5 seconds
  // useEffect(() => {
  //   if (!stopAutoChange) {
  //     const interval = setInterval(() => {
  //       setSelectedPlanIndex((prevCount) => (prevCount + 1) % 4);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }
  // }, [stopAutoChange]);

  return (
    <div
      className="w-full bg-shape text-white flex items-center flex-col h-full px-10 scroll-mt-[80px] rounded-xl gap-10 px-10 py-8  min-h-[90vh]  "
      id="pricing"
      ref={ref}
    >
      <span className="text-3xl font-bold text-secondary flex gap-2 text-center ">
        Plans & Pricings
      </span>
      {/* <div className="flex justify-center gap-x-10 gap-y-4 w-full flex-wrap ">
        {planList?.map((planName, idx) => {
          const isActive = idx === selectedPlanIndex;
          return (
            <button
              key={idx}
              className={` font-medium text-lg border-2 basis-32 rounded-xl px-4 p-2  border-secondary  transition ease-in-out duration-[.5s] ${
                isActive
                  ? "bg-secondary text-white"
                  : "text-secondary hover:underline"
              }`}
              onClick={() => {
                setSelectedPlanIndex(idx), setStopAutoChange(true);
              }}
            >
              {planName}
            </button>
          );
        })}
      </div> */}
      <div className="flex justify-center gap-y-4 w-full  md:flex-row  flex-col transition ease-in-out duration-150 items-center gap-10">
        {initialData?.map((plan,idx) => {


          return (

            <SubPlan
            subplanData={plan.SubPlans}
            key={idx}
            Description={plan.Description}
            AddOns={plan.AddOns}
          />
                )
              }




          )
        }

      </div>
    </div>
  );
};

export default Pricing;
