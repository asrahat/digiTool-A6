import React from "react";

const Optional = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600  to-purple-500 py-8 px-4">
      <div className="mx-auto flex flex-col items-center space-y-10
       border-purple-400/40 rounded-xl p-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-100 font-semibold mt-5">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="px-6 py-3 text-white text-lg font-semibold rounded-full 
    bg-white 
    transition-all duration-300 ease-in-out 
    hover:scale-105 hover:shadow-xl 
    hover:shadow-purple-500/40
    active:scale-95 cursor-pointer"
          >
            <span className="tracking-tight bg-linear-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">

            Explore Products
            </span>
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 text-white text-lg font-semibold rounded-full 
    border
    transition-all duration-300 ease-in-out 
    hover:scale-105 hover:shadow-xl 
    hover:shadow-purple-500/40
    active:scale-95 cursor-pointer"
          > View Pricing
          </button>
        </div>
          <p className="text-xl text-white">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Optional;
