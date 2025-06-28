import React from "react";
import Banner from "../components/Banner";
import About from "./About";
import Skills from "../components/Skills";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
