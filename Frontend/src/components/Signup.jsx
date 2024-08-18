import React from "react";
import "../../public/stylesheets/LogIn.css";
function Signup({ setToggle }) {
  return (
    <div className="mainContainer flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-[--containers-background]">
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
          <p className="textFieldInfo">
            The password must be 8-16 characters long, with at least one special
            character and number.
          </p>
        </div>
        <div className="flex align-center justify-center bg-[--containers-background]">
          <p className="textFieldInfo ">
            Already have an account?{" "}
            <a onClick={()=>setToggle("Login")} className="text-[--accent-color] cursor-pointer bg-[--containers-background]">
              Login
            </a>{" "}
            instead.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[--containers-background]">
        <button className="font-karla flex hover:scale-105 w-80 px-5 py-3 items-center justify-center bg-[--secondary-color] rounded-md text-white text-2xl font-bold">
          Sign Up
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.2rem] bg-[--containers-background]">
        <p className="text-2xl font-karla font-bold text-[#667085] tracking-tight bg-[--containers-background]">
          Use Social Login
        </p>
        <div className="flex flex-row items-center justify-between gap-3 rounded-md  w-full bg-[--containers-background]">
          <button className="hover:scale-110 bg-[--containers-background]">
            <img src="/images/google.svg" alt="" />
          </button>
          <button className="hover:scale-110 bg-[--containers-background]">
            <img src="/images/fb.svg" alt="" />
          </button >
          <button className="hover:scale-110 bg-[--containers-background]">
            <img src="/images/apple.svg
            " alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
