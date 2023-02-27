import React from "react";
import Navbar1 from "../components/Navbar1";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Skills } from "../components/Skills";

const Main = () => {
  return (
    <>
      <Navbar1 />
      <Hero />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
