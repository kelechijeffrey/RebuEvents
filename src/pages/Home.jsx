import React from "react";

import Hero from "../component/Hero";
import About from "../component/About";
import Services from "../component/Services";
import Project from "../component/Project";
import LoveStories from "../component/LoveStories";
import Contact from "../component/Contact";

const Home = () => {
  return (
    <>
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="love-stories">
        <LoveStories />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
