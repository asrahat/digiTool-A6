import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  // const [isBuy,setIsBuy] =useState(false)

  const handleBuyNow = () => {
    // setIsBuy(true)
    const isFound = carts.find((item) => item.id === product.id);
    if (isFound) {
      toast.error("This Product is Already Added!");
      return;
    }
    setCarts([...carts, product]);
    toast.success("Product Added to Cart. Check it out!!");
  };

  return (
    <div
      className="card bg-base-200 
    transform 
         transition-all
         duration-500
         hover:shadow-[0_0_40px_rgba(160,90,260,0.3)]
         hover:-translate-y-2
         animate-fadeIn
    "
    >
      <div className="card-body flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <img className="w-10" src={product.img} alt="" />
          <div
            className={`${product.tag === "best seller" && "bg-[#FEF3C6] text-[#BB4D00]"} ${product.tag === "new" && "bg-[#DBFCE7] text-[#0A883E]"} ${product.tag === "popular" && "bg-[#e1e7ff] text-[#7700ff]"} text-xs font-semibold p-2 rounded-full flex items-center justify-center`}
          >
            {product.tag}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <span className="text-2xl font-bold mt-5">${product.price}/mo</span>
          <p>{product.description}</p>
        </div>
        <div className="flex1">
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {product.features.map((p) => (
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
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button
            onClick={handleBuyNow}
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
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
