import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
//   console.log(carts);

const totalPrice = carts.reduce((sum,item)=>sum + item.price,0);
const intTotalPrice = parseInt(totalPrice)

const handleCheckout =()=>{
    setCarts([])
     toast.success('Your Product is Under Proceed')
}

const handleDelete = (item)=>{
    const filteredProduct = carts.filter(cart => cart.id!==item.id);
    setCarts(filteredProduct)
     toast.success('Product Deleted Successfully!')
}

  return (
    <div className="container  mx-auto">
      <div className=" bg-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Cart</h2>

        {carts.length === 0 ? (
          <p className="text-center text-2xl font-bold bg-zinc-100 p-5 rounded-xl text-zinc-500">
            Your Cart is Empty.
          </p>
        ) : (
          <div className=" space-y-4">
            {carts.map((cart) => (
              <div className="flex items-center justify-between  bg-gray-200 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-xl">
                    <img src={cart.img} alt="" />
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800">{cart.name}</h3>
                    <p className="text-gray-500 text-sm">${cart.price}</p>
                  </div>
                </div>

                <button
            onClick={()=>handleDelete(cart)}
                className="text-pink-500 text-sm font-medium hover:underline">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">Total:</span>
          <span className="text-xl font-semibold text-gray-800">${intTotalPrice}</span>
        </div>

        <button
        onClick={handleCheckout}
          className="w-full py-3 rounded-full text-white font-medium
    bg-linear-to-r from-purple-600 via-purple-500 to-pink-500
    hover:opacity-90 transition"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
