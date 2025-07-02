import { SignupInput } from "@amanchaudhary/medium2-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const Auth = ({type}:{type: "signup" | "signin"}) => {
  
    const [postInputs,setpostInputs]= useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    });

    const navigate=useNavigate();

async function sendRequest() {
    const BACKEND_URL = "https://backend.chaudharyaman-0052.workers.dev";
    console.log("Type:", type);
    console.log("Post Inputs:", postInputs);

  try {
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs);
    console.log("Full response:", response);

   const jwt = response.data.token;
    console.log("JWT from response:", jwt);

    if (!jwt) {
      throw new Error("JWT is undefined!");
    }

    localStorage.setItem("token", jwt);
    console.log("Token stored in localStorage!");
    navigate("/blogs");
    toast.success(`Successfully ${type === "signup" ? "signed up" : "logged in"}!`);
  } catch (err) {
    alert(`An error occurred. Please try again.`);
    console.error("Error sending request:", err);
    throw new Error("Failed to send request");
  }
}


    return (
        <div className="h-screen flex flex-col justify-center items-center bg-[#F7F4ED] px-4">
            <div className="flex justify-center items-center mb-8 flex-col">
            <div className="text-3xl font-bold text-gray-800 ">
               {type=== "signup" ? "Create an account" : "Login to your account"}
            </div>
            <div className="text-gray-600 text-lg">
                {type === "signup" ? "Already have an account?" : "Don't have an account?"}

                <Link to={type === "signup" ? "/signin" : "/signup"} className="underline text-blue-500 ml-1 pl-2">
                            {type === "signup" ? "Sign In" : "Sign Up"}
            </Link>

            </div>
            </div>
            {type === "signup" ? 
            <Input
                label="Name"
                type="text"
                placeholder="Enter your Name"
                onChange={(e) => setpostInputs({...postInputs, name: e.target.value})}
                />: null}
                <Input
                label="Email"
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setpostInputs({...postInputs, email: e.target.value})}
                />
                <Input
                label="Password"
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setpostInputs({...postInputs, password: e.target.value})}
                />
            <button className="bg-black text-white w-[50%] px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            onClick={sendRequest}
            >
                {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
        </div>
    );
}

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({label, type, placeholder,onChange}:InputProps) {
    return (
        <div className="mb-4 w-[90%] ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
}