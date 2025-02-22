import React from "react";
import "../../public/stylesheets/LogIn.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup({ setToggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [name, email, password]);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    try {
      const response = await axios.post("/user/register", userData);
      console.log(response.data);
      navigate("/in/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mainContainer flex flex-col gap-4">
      <form onSubmit={handleSignup}>
        <div className="flex flex-col gap-2 bg-[--containers-background]">
          <div className="textField">
            <div className="textFieldHeading">Name</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name"
              placeholder="Karam Abbas"
              required
            ></input>
          </div>

          <div className="textField">
            <div className="textFieldHeading">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              minLength={8}
              maxLength={16}
            ></input>
            {password.length < 8 && password.length > 0 && (
              <div style={{ color: "red" }}>
                Password must be at least 8 characters long.
              </div>
            )}
            {password.length > 20 && (
              <div style={{ color: "red" }}>
                Password must not exceed 20 characters.
              </div>
            )}
            <p className="textFieldInfo">
              The password must be 8-16 characters long, with at least one
              special character and number.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[--containers-background] pt-4">
          <button
            type="submit"
            className="transition-transform delay-0 font-karla flex hover:scale-105 w-80 px-5 py-3 items-center justify-center bg-[--secondary-color] rounded-md text-white text-2xl font-bold"
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
            className="text-[--accent-color] cursor-pointer bg-[--containers-background] hover:text-blue-700 hover:scale-105"
          >
            Login
          </a>{" "}
          instead.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-[1.2rem] bg-[--containers-background]">
        <p className="text-2xl font-karla font-bold text-[#667085] tracking-tight bg-[--containers-background]">
          Use Social Login
        </p>
        <div className="flex flex-row items-center justify-between gap-3 rounded-md  w-full bg-[--containers-background]">
          <button className="transition-transform delay-0 hover:scale-110 bg-[--containers-background]">
            <img src="/images/google.svg" alt="" />
          </button>
          <button className="transition-transform delay-0 hover:scale-110 bg-[--containers-background]">
            <img src="/images/fb.svg" alt="" />
          </button>
          <button className="transition-transform delay-0 hover:scale-110 bg-[--containers-background]">
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
