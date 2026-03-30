import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-zinc-500 font-semibold mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div
          className="card bg-base-200
              px-8 
              shadow-lg 
              transform 
         transition-all
         duration-500
         hover:shadow-[0_0_40px_rgba(160,90,260,0.3)]
         hover:-translate-y-2
         animate-fadeInl"
        >
          <div className="card-body flex flex-col ">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Starter</h2>
              Perfect for getting started
              <span className="text-2xl font-bold mt-5">$29/mo</span>
            </div>
            <div className="flex-1">
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Community</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 project per month</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button
                className="w-full border-none outline-none cursor-pointer
         px-5 py-2
         text-[18px] font-semibold text-white
         rounded-full
        bg-[linear-gradient(90deg,rgba(255,60,172,1),rgba(120,75,160,1),rgba(43,134,197,1))]
         shadow-[0_0_20px_rgba(255,60,172,0.6)]
         transition-all duration-300 ease-in-out
         hover:-translate-y-0.5
         hover:shadow-[0_0_30px_rgba(255,60,172,0.9)] nav-btn"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        {/* ------------ */}
        <div
          className="relative
        px-8 
        transform 
         transition-all
         duration-500
         hover:shadow-[0_0_40px_rgba(160,90,260,0.3)]
         hover:-translate-y-2
         animate-fadeInl

        card bg-linear-to-r from-indigo-600  to-purple-500 shadow-2xl text-white"
        >
          <div className="card-body flex flex-col">
            <span
              className="absolute left-40 -top-2 p-3 text-sm rounded-full text-white
             badge badge-xs badge-warning"
            >
              Most Popular
            </span>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Pro</h2>
              Best for professionals
              <span className="text-2xl font-bold mt-5">$29/mo</span>
            </div>
            <div className="flex-1">
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access to all premium tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited projects</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Cloud sync</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button
                className="w-full btn px-6 py-3 text-lg font-semibold rounded-full 
    bg-white 
    transition-all duration-300 ease-in-out 
    hover:scale-105 hover:shadow-xl 
    hover:shadow-purple-500/40
    active:scale-95 cursor-pointer"
              >
                <span className="tracking-tight bg-linear-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  Start Pro Trail
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* ------------ */}
        <div
          className="card rounded-2xl 
              bg-base-200
              px-8 
              shadow-lg 
              transform 
         transition-all
         duration-500
         hover:shadow-[0_0_40px_rgba(160,90,260,0.3)]
         hover:-translate-y-2
         animate-fadeIn"
        >
          <div className="card-body flex flex-col">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Enterprise</h2>
              For teams and businesses
              <span className="text-2xl font-bold mt-5">$99/mo</span>
            </div>
            <div className="flex1">
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Team collaboration</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Dedicated support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>SLA guarantee</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom branding</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button
                className="w-full border-none outline-none cursor-pointer
         px-5 py-2
         text-[18px] font-semibold text-white
         rounded-full
        bg-[linear-gradient(90deg,rgba(255,60,172,1),rgba(120,75,160,1),rgba(43,134,197,1))]
         shadow-[0_0_20px_rgba(255,60,172,0.6)]
         transition-all duration-300 ease-in-out
         hover:-translate-y-0.5
         hover:shadow-[0_0_30px_rgba(255,60,172,0.9)] nav-btn"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        {/* ------------ */}
      </div>
    </div>
  );
};

export default Pricing;
