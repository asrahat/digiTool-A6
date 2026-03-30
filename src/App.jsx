import "./App.css";
import Banner from "./components/Banner/Banner";
import GetStart from "./components/GetStart/GetStart";
import NavBar from "./components/NavBar/NavBar";
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
    </>
  );
}

export default App;
