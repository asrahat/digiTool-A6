import bannerImg from "../../assets/banner.png";
import { Play } from "lucide-react";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className=" rounded-lg shadow-2xl" />
          <div>
            <div className="w-80">
              <p className="bg-[#e1e7ff] p-3 font-semibold text-[#4f39f6] rounded-full">
                New: AI-Powered Tools Available
              </p>
            </div>
            <h1 className="text-5xl font-bold">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center gap-4">
              <button
                className="border-none outline-none cursor-pointer
         px-5 py-2
         text-[18px] font-semibold text-white
         rounded-full
        bg-[linear-gradient(90deg,rgba(255,60,172,1),rgba(120,75,160,1),rgba(43,134,197,1))]
         shadow-[0_0_20px_rgba(255,60,172,0.6)]
         transition-all duration-300 ease-in-out
         hover:-translate-y-0.5
         hover:shadow-[0_0_30px_rgba(255,60,172,0.9)] nav-btn"
              >
                Explore Products
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 text-white text-lg font-semibold rounded-full 
    bg-linear-to-r from-purple-600 to-indigo-500 
    transition-all duration-300 ease-in-out 
    hover:scale-105 hover:shadow-xl 
    hover:shadow-purple-500/40
    active:scale-95 cursor-pointer"
              >
                <Play /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
