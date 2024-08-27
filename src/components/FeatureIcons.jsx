import React from "react";
import {
  FaBuilding,
  FaExchangeAlt,
  FaImages,
  FaUserFriends,
} from "react-icons/fa";
import { MdSms } from "react-icons/md";

const featureIcons = ({ IconName }) => {
  const icons = {
    "Company": <FaBuilding />,
    "Sub User": <FaUserFriends />,
    "Transaction": <FaExchangeAlt />,
    "Images": <FaImages />,
    'SMS':<MdSms />,
  };

  return <>{icons[IconName]}</>;
};

export default featureIcons;
