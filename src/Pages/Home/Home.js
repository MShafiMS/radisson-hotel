import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Sections from "./Sections";
import Slider from "./Slider";
import Slider2 from "./Slider2";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Sections></Sections>
      <Slider></Slider>
      <Slider2></Slider2>
      <Contact></Contact>
    </div>
  );
};

export default Home;
