import React from "react";
import "../../public/stylesheets/LogIn.css";
function Login({ setToggle }) {
  return (
    <div className="mainContainer flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="textField">
          <div className="textFieldHeading">Email</div>
          <input
            type="email"
            name=""
            className="email"
            placeholder="karam@financetracker.com"
          ></input>
        </div>
        <div className="textField">
          <div className="textFieldHeading">Password</div>
          <input
            type="password"
            name=""
            className="password"
            placeholder="***********"
          ></input>
        </div>
        <div className="flex align-center justify-center">
          <p className="textFieldInfo">
            Don't have an account?{" "}
            <a onClick={()=>setToggle("Signup")} className="text-[--accent-color] cursor-pointer">
              {" "}
              Signup{" "}
            </a>{" "}
            instead.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex w-80 px-5 py-3 items-center justify-center bg-[#1adc30] rounded-md text-white font-[karla] text-2xl font-bold">
          Log In
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.2rem]">
        <p className="text-2xl font-[Karla] font-bold text-[#667085] tracking-tight">
          Use Social Login
        </p>
        <div className="flex flex-row items-center justify-between gap-3 rounded-md  w-full">
        <button className="hover:scale-110">
            <img src="/images/google.svg" alt="" />
          </button>
          <button className="hover:scale-110">
            <img src="/images/fb.svg" alt="" />
          </button >
          <button className="hover:scale-110">
            <img src="/images/apple.svg
            " alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
