import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import Phone from "./Phone";
import { BsArrowRight } from "react-icons/bs";
import {
  Tab1Step1,
  Tab1Step2,
  Tab1Step3,
  Tab1Step4,
  Tab2Step2,
  Tab2Step3,
  Tab2Step4,
  Tab2Step6,
  Tab2Step7,
  Tab3Step2,
  Tab3Step3,
  Tab3Step4,
  Tab4Step2,
  Tab4Step3,
  Tab4Step4,
  Tab4Step5,
  Tab4Step6,
  Tab4Step7,
  Tab4Step8,
  Tab4Step9,
} from "../assets/Features";
const About = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);
  const [stopAutoChange, setStopAutoChange] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);

  const features = useRef([
    { name: "Add a Lab Technician" },
    { name: "Assign Customer Visit" },
    { name: "Track Summary" },
    { name: "Check Reports" },
  ]);

  const featureData = useRef([
    {
      img: [Tab1Step1, Tab1Step2, Tab1Step3, Tab1Step4],
      steps: [
        "Click on Add Lab Technician",
        "Enter User Details",
        "Enter User Address",
        "Save and Share Login Details",
      ],
    },
    {
      img: [
        Tab1Step1,
        Tab2Step2,
        Tab2Step3,
        Tab2Step4,
        Tab2Step6,
        Tab1Step3,
        Tab2Step7,
      ],
      steps: [
        "Click on Assign Visit",
        "Enter Visit Details",
        "Select Date",
        "Select Time",
        "Select Visit Type",
        "Enter Your Address",
        "Save",
      ],
    },
    {
      img: [Tab1Step1, Tab3Step2, Tab3Step3, Tab3Step4],
      steps: [
        "Click on Track Summary",
        "Click on Live Tracking",
        "Use Filter Option and Select User",
        "Get Live Location of User",
      ],
    },
    {
      img: [
        Tab1Step1,
        Tab4Step2,
        Tab4Step4,
        Tab4Step5,
        Tab4Step6,
        Tab4Step7,
        Tab4Step8,
        Tab4Step9,
      ],
      steps: [
        "Click on Reports",
        "Click on Analysis Report",
        "Use Filter Option and Select User",
        "Click on View under Required Lab Technician",
        "Click on Lab Technician Report",
        "Lab Technician Report",
        "Use Filter Option to Get Reports",
        "Click on More Options to View Details",
      ],
    },
  ]);

  useEffect(() => {
    setStopAutoChange(false);
    setStepNumber(0);
  }, [selectedFeatureIndex]);
  const setNextStep = () => {
    setStepNumber(
      (prevCount) =>
        (prevCount + 1) %
        featureData.current[selectedFeatureIndex]?.steps?.length
    );
  };
  const setPrevStep = () => {
    setStepNumber((prevCount) => {
      return prevCount == 0
        ? featureData.current[selectedFeatureIndex]?.steps?.length - 1
        : prevCount - 1;
    });
  };
  // auto change selectindex every 5 seconds
  useEffect(() => {
    if (!stopAutoChange) {
      const interval = setInterval(() => {
        setNextStep();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [stopAutoChange]);
  return (
    <div
      className="w-full text-white flex items-center justify-center flex-col h-full px-10 max-sm:px-4 scroll-mt-[80px] min-h-[90vh] "
      id="about"
    >
      <div className="  rounded-md px-10 py-8 flex flex-col items-center gap-10 text-center max-sm:px-2 ">
        <span className="text-4xl font-bold text-primary">Our Product</span>
        <div className="flex gap-10   max-sm:flex-col-reverse items-center">
          {/* <p className=" text-gray-800 text-xl max-sm:w-[100%]   text-left ">
            <span className="text-secondary font-semibold">
              {" "}
              Easy Diagnostic{" "}
            </span>
            is a smart mobile app that simplifies diagnostic center operations.
            It helps manage lab technicians, offers real- time tracking, and
            ensures smooth scheduling.
            <br /> <br />
            With Easy Diagnostic, customers can enjoy the convenience of
            doorstep diagnostic services, while centers benefit from improved
            efficiency and reliability.
          </p> */}
          <p className="text-gray-800 text-xl max-sm:w-[100%] text-justify">
            <span className="text-secondary font-semibold">
              Easy Diagnostic
            </span>{" "}
            is an innovative mobile app designed to streamline and revolutionize
            the operations of diagnostic centers. By leveraging cutting-edge
            technology, the app provides comprehensive management tools for lab
            technicians, including assignment automation, workload balancing,
            and real-time performance monitoring. With its intuitive scheduling
            system, Easy Diagnostic minimizes downtime and ensures that
            appointments are handled efficiently, reducing wait times and
            optimizing resource allocation.
            <br /> <br />
            The app also offers real-time tracking features, enabling diagnostic
            centers to monitor the status and location of technicians, ensuring
            timely service delivery. For customers, Easy Diagnostic transforms
            the diagnostic experience by offering the convenience of doorstep
            services, allowing them to schedule and receive lab tests from the
            comfort of their homes. This not only enhances customer satisfaction
            but also expands the reach of diagnostic centers to a broader
            audience.
            <br /> <br />
          </p>

          <img src={logo} alt="logo" className="h-[200px]  " />
        </div>
        <div className="flex items-center flex-col  gap-10 ">
          <p className="text-3xl font-semibold text-secondary">
            {" "}
            Here are our awesome features
          </p>
          <ul className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-center gap-2 text-primary items-center  border-gray-300 p-2 border-2 rounded-full w-fit max-lg:rounded-xl max-sm:rounded-lg">
            {features.current?.map((feature, idx) => {
              const isSelected = idx == selectedFeatureIndex;
              return (
                <li
                  className={`text-center  px-4 p-2   max-sm:basis-[256px] max-lg:rounded-xl max-sm:rounded-lg  rounded-full cursor-pointer font-medium hover:bg-primary hover:text-white transition ease-in-out duration-200 ${
                    isSelected && ` bg-primary text-white `
                  }`}
                  onClick={() => {
                    setStopAutoChange(true);
                    setSelectedFeatureIndex(idx);
                  }}
                  key={idx}
                >
                  {feature?.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center  max-sm:flex-col  gap-10 max-sm:gap-4 lg:w-[70%] sm:mt-4 ">
          {/* visible on phone */}
          <div className=" text-gray-800 text-lg flex flex-col gap-4 p-auto items-center justify-center w-2/4 max-sm:w-full sm:hidden">
            <span className="text-black font-semibold text-center">
              Steps to {features.current[selectedFeatureIndex]?.name}
            </span>
            <span
              className={`flex font-medium items-center gap-2 hover:underline cursor-pointer`}
            >
              {stepNumber + 1}.{" "}
              {featureData.current[selectedFeatureIndex]?.steps[stepNumber]}
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 w-2/4 max-sm:w-full">
            <Phone
              img={featureData.current[selectedFeatureIndex]?.img[stepNumber]}
            />
            <div className="flex gap-4 mt-5 justify-center">
              <button
                className="bg-secondary text-white p-2 w-fit px-4  rounded-full whitespace-nowrap text-sm flex gap-2 transition ease-in-out duration-200 font-medium hover:scale-110 items-center"
                onClick={() => {
                  setPrevStep(), setStopAutoChange(true);
                }}
              >
                <BsArrowRight className="w-5 h-5 rotate-180" /> Prev Step
              </button>
              <button
                className="bg-secondary text-white p-2 w-fit px-4 rounded-full whitespace-nowrap text-sm flex gap-2 transition ease-in-out duration-200 font-medium hover:scale-110 items-center"
                onClick={() => {
                  setNextStep(), setStopAutoChange(true);
                }}
              >
                Next Step
                <BsArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/*not visible on phone */}
          <div className=" text-gray-800 text-lg flex flex-col self-start gap-4 p-auto text-left w-2/4 max-sm:w-full max-sm:hidden">
            <span className="text-black font-semibold ">
              Steps to {features.current[selectedFeatureIndex]?.name}
            </span>
            {featureData.current[selectedFeatureIndex]?.steps?.map(
              (step, idx) => {
                const onThisStep = idx == stepNumber;
                return (
                  <span
                    className={`flex ${
                      onThisStep && "font-semibold"
                    } items-center gap-2 hover:underline cursor-pointer transition ease-in-out duration-200`}
                    onClick={() => {
                      setStepNumber(idx);
                      setStopAutoChange(true);
                    }}
                    key={idx}
                  >
                    <BsArrowRight
                      className={`w-5 h-5 ${
                        onThisStep ? "text-secondary" : "text-background"
                      } transition ease-in-out duration-200`}
                    />{" "}
                    {idx + 1}. {step}
                  </span>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
