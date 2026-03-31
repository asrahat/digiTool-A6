import { ShoppingCart } from "lucide-react";
import React from "react";

const NavBar = ({ carts }) => {
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
          DigiTool
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg font-semibold">Products</a>
          </li>
          <li>
            <a className="text-lg font-semibold">Features</a>
          </li>
          <li>
            <a className="text-lg font-semibold">Pricing</a>
          </li>
          <li>
            <a className="text-lg font-semibold">Testimonials</a>
          </li>
          <li>
            <a className="text-lg font-semibold">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <div className="relative -top-5">
          <p className="relative left-3 top-2 bg-red-500 px-2 rounded-full text-center text-white">
            {carts.length}
          </p>
          <ShoppingCart className="absolute" />
        </div>
        <a className=" text-sm md:text-lg font-semibold">login</a>
        <a
          className="border-none outline-none cursor-pointer
         px-3 md:px-5 py-2 text-sm
         md:text-xl font-semibold text-white
         rounded-full
        bg-[linear-gradient(90deg,rgba(255,60,172,1),rgba(120,75,160,1),rgba(43,134,197,1))]
         shadow-[0_0_20px_rgba(255,60,172,0.6)]
         transition-all duration-300 ease-in-out
         hover:-translate-y-0.5
         hover:shadow-[0_0_30px_rgba(255,60,172,0.9)] nav-btn"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
