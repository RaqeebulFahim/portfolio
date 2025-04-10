import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";


const Homepage = () => {
  return (
    <>
      <Header />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
