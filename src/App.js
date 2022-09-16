import "./App.css";
import Menu from "./Component/Navbar/Menu";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
