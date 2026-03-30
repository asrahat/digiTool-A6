import packageImg from "../../assets/package.png";
import userImg from "../../assets/user.png";
import rocketImg from "../../assets/rocket.png";

const GetStart = () => {
  return (
    <div className="bg-zinc-100 py-20 mt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
          <p className="text-zinc-500 font-semibold mt-3">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" shadow-xl rounded-2xl py-10 px-4">
            <div className="flex justify-end mb-8">
              <div className="bg-purple-600 text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                01
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4" >
              <img
                className="border-0 bg-[#e3dfff] rounded-full p-2"
                src={userImg}
                alt=""
              />
              <h2 className="text-xl font-bold">Create Account</h2>
              <p className="">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className=" shadow-xl rounded-2xl py-10 px-4">
            <div className="flex justify-end mb-8">
              <div className="bg-purple-600 text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                02
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4" >
              <img
                className="border-0 bg-[#e3dfff] rounded-full p-2"
                src={packageImg}
                alt=""
              />
              <h2 className="text-xl font-bold">Choose Products</h2>
              <p className="">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className=" shadow-xl rounded-2xl py-10 px-4">
            <div className="flex justify-end mb-8">
              <div className="bg-purple-600 text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                03
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4" >
              <img
                className="border-0 bg-[#e3dfff] rounded-full p-2"
                src={rocketImg}
                alt=""
              />
              <h2 className="text-xl font-bold">Start Creating</h2>
              <p className="">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
