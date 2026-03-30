import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import GetStart from "./components/GetStart/GetStart";
import NavBar from "./components/NavBar/NavBar";
import Optional from "./components/Optional/Optional";
import Pricing from "./components/Pricing/Pricing";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <GetStart></GetStart>
      <Pricing></Pricing>
      <Optional></Optional>
      <Footer></Footer>
    </>
  );
}

export default App;
