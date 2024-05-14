import React, { useState } from "react";
import BackgroundImage from "../assets/background.png";
import EmailIcon from "../assets/icons/email.png";
import PasswordIcon from "../assets/icons/password.png";
import Logo from "../assets/logo.png";

// SignUp component with form for email, name, museum, phone number, and password
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [museum, setMuseum] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length !== 8) {
      setError("Password must be exactly 8 characters long.");
      return;
    }
    setError("");
    // Proceed with form submission
    console.log("Form submitted successfully!");
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-cover" 
      style={{
        backgroundImage: `url(${BackgroundImage})`
      }} 
    >
      <img src={Logo} alt="logo" className="m-10 self-start"/>

      <div className="flex flex-grow justify-center items-center w-full">
        <div className="w-[750px] bg-white p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)]">
          <h1 className="text-center mt-5 mb-10 font-bold text-[24px]">Sign Up</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form className="space-y-9" onSubmit={handleSubmit}>
            <div className="mb-4 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={EmailIcon} alt="email-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input className="w-full py-2 px-5 text-gray-700 focus:outline-none" id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={EmailIcon} alt="name-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input className="w-full py-2 px-5 text-gray-700 focus:outline-none" id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="museum">
                Museum
              </label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={EmailIcon} alt="museum-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input className="w-full py-2 px-5 text-gray-700 focus:outline-none" id="museum" type="text" placeholder="Enter your museum" value={museum} onChange={(e) => setMuseum(e.target.value)}/>
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={EmailIcon} alt="phone-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input className="w-full py-2 px-5 text-gray-700 focus:outline-none" id="phone" type="text" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
            </div>
            <div className="mb-6 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={PasswordIcon} alt="password-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input className="w-full py-2 px-5 text-gray-700 focus:outline-none" id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={8} />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-[#728969] hover:bg-[#728969] text-white font-bold w-full py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex flex-row space-x-2 my-10 justify-center items-center font-light">
            <h1 className="text-black text-[20px]">
              Already have an account?
            </h1>
            <button className="text-[#728969] font-bold">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
