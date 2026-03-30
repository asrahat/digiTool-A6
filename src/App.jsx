import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import GetStart from "./components/GetStart/GetStart";
import NavBar from "./components/NavBar/NavBar";
import Optional from "./components/Optional/Optional";
import Pricing from "./components/Pricing/Pricing";
import Products from "./components/Products/Products";
import Stats from "./components/Stats/Stats";
import { ToastContainer } from "react-toastify";


const getProducts = async()=>{
  const res= await fetch('/products.json');
  return res.json()
}

const productPromise = getProducts();

function App() {
  const [carts,setCarts] = useState([])
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
{/* ----------------------------------------------------------- */}

      <Products carts={carts}
         setCarts={setCarts} productPromise={productPromise}></Products>



{/* ----------------------------------------------------------- */}
      <GetStart></GetStart>
      <Pricing></Pricing>
      <Optional></Optional>
      <Footer></Footer>


      <ToastContainer />
    </>
  );
}

export default App;
