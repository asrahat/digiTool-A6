import "./App.css";
import Banner from "./components/Banner/Banner";
import GetStart from "./components/GetStart/GetStart";
import NavBar from "./components/NavBar/NavBar";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <GetStart></GetStart>
    </>
  );
}

export default App;
