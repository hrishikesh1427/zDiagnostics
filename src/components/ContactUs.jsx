// import React, { useEffect, useState } from "react";
// import service from "../assets/service.png";
// import axios from "axios";
// import { useForm } from "@formspree/react";

// const ContactUs = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [state, handleSubmit] = useForm("xdknejjj");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (state.succeeded) {
//       setSuccessMessage(
//         "Thank you! You will receive a response shortly."
//       );
//       setIsSubmitting(false);
//     }
//   }, [state.succeeded]);
//   useEffect(() => {
//     if (state.submitting) {
//       setIsSubmitting(true);
//     }
//   }, [state.submitting]);

//   return (
//     <div
//       className="w-full bg-shape text-white flex items-center flex-col h-full  scroll-mt-[100px] rounded-xl gap-10 px-10 py-8  min-h-[90vh]  "
//       id="contact"
//     >
//       <div className="flex flex-col items-center justify-center gap-10">
//         <span className="text-3xl font-bold text-secondary flex gap-2 text-center ">
//           Contact Us
//         </span>
//         <p className="text-gray-800 text-lg w-[90%] max-sm:w-[100%] text-left">
//           {/* Select your Area of Interest Below and Start a Conversation. Expect a
//           Prompt Response from an MWB Technologies India Pvt Ltd (AN IS0
//           9001:2015) Representative Shortly upon Submitting your Request. We
//           look Forward to Connecting with you and Discussing your Interests and
//           Queries in Detail. */}

// Select your area of interest below and start a conversation. Upon submitting your request, you can expect a prompt response from an MWB Technologies India Pvt Ltd (an ISO 9001:2015 certified company) representative. We look forward to connecting with you and discussing your interests and queries in detail.
//         </p>
//       </div>
//       <div className="flex w-full items-center justify-around px-10 m gap-10 max-lg:flex-col">
//         <div className=" max-md:w-full flex items-center justify-center max-sm:hidden">
//           <img
//             src={service}
//             alt="homepage"
//             className="floating w-[100%] max-w-[500px]"
//           />
//         </div>
//         <div className=" max-md:w-full flex items-center flex-col justify-center text-black ">
//           <div className="bg-gradient-to-r from-secondary via-background to-secondary  p-1 rounded-xl">
//             <form
//               className="flex flex-col  border rounded-xl bg-white p-10  gap-5 sm:min-w-[400px]  items-center"
//               onSubmit={handleSubmit}
//             >
//               <div className="flex flex-col gap-2 w-[250px]">
//                 <div className=" opacity-0 h-[0px]">
//                   <label htmlFor="app" className=" ">
//                     App
//                   </label>
//                   <input
//                     required
//                     className="bg-gray-200 rounded-md border-1 px-2 p-1"
//                     type="text"
//                     name="app"
//                     id="app"
//                     value="Easy Diagnostic"
//                     readOnly
//                   />
//                 </div>
//                 <p className="self-center font-semibold text-xl">
//                   Enter Details
//                 </p>
//                 <span className="text-green-600">{successMessage}</span>
//                 <label htmlFor="name" className=" ">
//                   Name
//                 </label>
//                 <input
//                   required
//                   className="bg-gray-200 rounded-md border-1 px-2 p-1"
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div className="flex flex-col gap-2 w-[250px]">
//                 <label htmlFor="mail" className=" ">
//                   Mail id
//                 </label>
//                 <input
//                   required
//                   className="bg-gray-200 rounded-md border-1 px-2 p-1"
//                   type="text"
//                   name="mail"
//                   id="mail"
//                   placeholder="Your Mail"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 w-[250px]">
//                 <label htmlFor="number" className=" ">
//                   Mobile Number
//                 </label>
//                 <input
//                   required
//                   className="bg-gray-200 rounded-md border-1 px-2 p-1"
//                   type="number"
//                   name="number"
//                   id="number"
//                   placeholder="Your Phone Number"
//                 />
//               </div>
//               <div className="flex flex-col gap-2 w-[250px]">
//                 <label htmlFor="comment" className=" ">
//                   Comment
//                 </label>
//                 <textarea
//                   className="bg-gray-200 rounded-md border-1 px-2 p-1"
//                   type="text"
//                   name="comment"
//                   id="comment"
//                   placeholder="Your Message"
//                 />
//               </div>

//               <button
//                 className="px-4 p-2 bg-white rounded-xl border-2 hover:bg-secondary hover:text-white transition ease-in-out duration-150 border-secondary"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";
import service from "../assets/service.png";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [errors, setErrors] = useState({}); // State for tracking validation errors

  const navigate = useNavigate();

  const validateName = (name) => {
    if (!name) return "Name is required.";
    if (name.length < 3) return "Name must be at least 3 characters long.";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phone) return "Phone number is required.";
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number.";
    return "";
  };

  const validateComment = (comment) => {
    if (!comment) return "Message is required.";
    if (comment.length < 10) return "Message must be at least 10 characters long.";
    return "";
  };

  const handleValidation = () => {
    const errors = {};
    errors.name = validateName(name);
    errors.email = validateEmail(email);
    errors.phone = validatePhone(phone);
    errors.comment = validateComment(comment);
    setErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/xdknejjj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, comment }),
    });

    if (response.ok) {
      setSuccessMessage("Thank you! You will receive a response shortly.");
      setIsSubmitting(false);

    } else {
      alert("Failed to submit form");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full bg-shape text-white flex items-center flex-col h-full scroll-mt-[100px] rounded-xl gap-10 px-10 py-8 min-h-[90vh]"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <span className="text-3xl font-bold text-secondary flex gap-2 text-center">
          Contact Us
        </span>
        <p className="text-gray-800 text-lg w-[90%] max-sm:w-[100%] text-left">
  Select your area of interest below and start a conversation. Upon
  submitting your request, you can expect a prompt response from an MWB
  Technologies India Pvt. Ltd. (an ISO 9001:2015 certified company)
  representative. We look forward to connecting with you and discussing
  your interests and queries in detail.
</p>

      </div>
      <div className="flex w-full items-center justify-around px-10 m gap-10 max-lg:flex-col">
        <div className="max-md:w-full flex items-center justify-center max-sm:hidden">
          <img
            src={service}
            alt="homepage"
            className="floating w-[100%] max-w-[500px]"
          />
        </div>
        <div className="max-md:w-full flex items-center flex-col justify-center text-black">
          <div className="bg-gradient-to-r from-secondary via-background to-secondary p-1 rounded-xl">
            <form
              className="flex flex-col border rounded-xl bg-white p-10 gap-5 sm:min-w-[400px] items-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2 w-[250px]">
                <div className="opacity-0 h-[0px]">
                  <label htmlFor="app" className="">
                    App
                  </label>
                  <input
                    required
                    className="bg-gray-200 rounded-md border-1 px-2 p-1"
                    type="text"
                    name="app"
                    id="app"
                    value="Easy Diagnostic"
                    readOnly
                  />
                </div>
                <p className="self-center font-semibold text-xl">Enter Details</p>
                <span className="text-green-600">{successMessage}</span>
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  required
                  className="bg-gray-200 rounded-md border-1 px-2 p-1"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-2 w-[250px]">
                <label htmlFor="mail" className="">
                  Mail id
                </label>
                <input
                  required
                  className="bg-gray-200 rounded-md border-1 px-2 p-1"
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Your Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-2 w-[250px]">
                <label htmlFor="number" className="">
                  Mobile Number
                </label>
                <input
                  required
                  className="bg-gray-200 rounded-md border-1 px-2 p-1"
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="flex flex-col gap-2 w-[250px]">
                <label htmlFor="comment" className="">
                  Comment
                </label>
                <textarea
                  className="bg-gray-200 rounded-md border-1 px-2 p-1"
                  name="comment"
                  id="comment"
                  placeholder="Your Message"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
              </div>

              <button
                className="px-4 p-2 bg-white rounded-xl border-2 hover:bg-secondary hover:text-white transition ease-in-out duration-150 border-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
