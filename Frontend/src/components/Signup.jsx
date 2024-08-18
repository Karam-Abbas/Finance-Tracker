import React from "react";
import "../../public/stylesheets/LogIn.css";
import { useState } from "react";
import { registerUser } from "../services/api";
function Signup({ setToggle }) {
  let { name, setName } = useState("");
  let { email, setEmail } = useState("");
  let { password, setPassword } = useState("");

  const handleSignup = async(e) => {
    e.preventDefault();
    const userData = {name,email,password};
    try {
      const data = await registerUser(userData);
      console.log("Login Successful",data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mainContainer flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-[--containers-background]">
        <form onSubmit={handleSignup}>
          <div className="textField">
            <div className="textFieldHeading">Name</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="name"
              placeholder="Karam Abbas"
              required
            ></input>
          </div>

          <div className="textField">
            <div className="textFieldHeading">Email</div>
            <input
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="email"
              placeholder="karam@financetracker.com"
              required
            ></input>
          </div>

          <div className="textField">
            <div className="textFieldHeading">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              placeholder="***********"
              required
            ></input>
            <p className="textFieldInfo">
              The password must be 8-16 characters long, with at least one
              special character and number.
            </p>
          </div>
          <div className="flex items-center justify-center bg-[--containers-background]">
            <button
              type="submit"
              className="font-karla flex hover:scale-105 w-80 px-5 py-3 items-center justify-center bg-[--secondary-color] rounded-md text-white text-2xl font-bold"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex align-center justify-center bg-[--containers-background]">
          <p className="textFieldInfo ">
            Already have an account?{" "}
            <a
              onClick={() => setToggle("Login")}
              className="text-[--accent-color] cursor-pointer bg-[--containers-background]"
            >
              Login
            </a>{" "}
            instead.
          </p>
        </div>
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
          </button>
          <button className="hover:scale-110 bg-[--containers-background]">
            <img
              src="/images/apple.svg
            "
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
