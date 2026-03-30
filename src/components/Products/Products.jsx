import { use, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Cart from "../Cart/Cart";

const Products = ({ productPromise,carts,
         setCarts }) => {
  const products = use(productPromise);
  console.log(products);
 const [selectedProduct, setSelectedProduct] = useState('products');
  return (
    <div className="container mx-auto mt-10">
      <div className="text-center my-10">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-zinc-500 font-semibold mt-3">
          Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
        </p>
      </div>

       <div className='flex justify-center items-center my-6'>
          
          
            <div className=" flex items-center gap-4">
        <button className={`tab ${selectedProduct === 'products'? 'bg-linear-to-r from-purple-500 to-indigo-500 text-white': ''} px-5 py-2 rounded-full shadow-md font-medium`} 
          onClick={()=> setSelectedProduct("products")} >
            Products
        </button>
        <button  className={`tab ${selectedProduct === 'cart'? 'bg-linear-to-r from-purple-500 to-indigo-500 text-white': ''} px-5 py-2 rounded-full shadow-md font-medium : ''}`} 
          onClick={()=> setSelectedProduct("cart")} >
            {`Carts (${carts.length})`}
          </button>
      </div>
                
         
         </div>

    {
        selectedProduct === 'products' ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} carts={carts}
         setCarts={setCarts} product={product}></ProductCard>
        ))}
      </div>:<Cart carts={carts}
         setCarts={setCarts}></Cart>
    }


      

    </div>
  );
};

export default Products;
