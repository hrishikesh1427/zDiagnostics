import { useState } from "react";
import Layout from "./Screens/Layout";
import HomePage from "./Screens/HomePage";
import { Route, Routes } from "react-router-dom";
import Demo from "./Screens/Demo";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import TermsAndConditions from "./Screens/TermsAndCondition";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background w-full text-black min-h-[100vh] font-montserrat flex flex-col  ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" index element={<HomePage />} />
          <Route path="demo" element={<Demo />} />
          <Route path="policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms" element={<TermsAndConditions/>} />  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
