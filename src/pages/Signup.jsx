import { LogIn, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="h-screen bg-linear-to-t from-sky-500 to-indigo-500 flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-rose-800 flex items-center justify-center rounded-full animate__animated animate__slideInDown">
          <User className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-8xl font-bold text-white animate__animated animate__fadeIn">
          Signup
        </h1>
        <p className="p-12 text-center text-white/80 animate__animated animate__fadeIn">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ea
          velit similique repudiandae. Aut in maiores soluta vel totam pariatur
          repellat debitis! Aliquam labore debitis nesciunt, repudiandae nam
          suscipit sequi.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <form className="w-lg flex flex-col gap-4 animate__animated animate__fadeIn">
          <input
            name="fullname"
            type="text"
            placeholder="fullname"
            className="border-b border-b-gray-300 py-3 focus:outline-none focus:border-b-blue-600 focus:border-b-2 focus:placeholder-sky-600 focus:font-medium"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            className="border-b border-b-gray-300 py-3 focus:outline-none focus:border-b-blue-600 focus:border-b-2 focus:placeholder-sky-600 focus:font-medium"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="border-b border-b-gray-300 py-3 focus:outline-none focus:border-b-blue-600 focus:border-b-2 focus:placeholder-sky-600 focus:font-medium"
            required
          />
          <button className="bg-linear-to-t from-blue-500 to-indigo-500 py-3 text-white font-medium rounded-lg mt-3">
            Submit
          </button>
          <div className="mt-2 text-black/80 text-center">
            already have an account ?{" "}
            <Link
              to="/login"
              className="text-blue-400 font-medium hover:underline hover:text-blue-500"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
