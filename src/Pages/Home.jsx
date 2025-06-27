import React from "react";
import Banner from "../components/Banner";
import About from "./About";
import Skills from "../components/Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
