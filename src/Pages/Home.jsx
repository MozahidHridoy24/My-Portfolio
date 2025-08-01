import Banner from "../components/Banner";
import About from "./About";
import Skills from "../components/Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import GitHubContributions from "../components/GithubContributions";

const Home = () => {
  return (
    <div>
      <section id="banner">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <GitHubContributions/>
    </div>
  );
};

export default Home;
