import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tagline from "../components/Tagline";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Donations from "./Donations";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Hero />
      <Tagline /> */}
      <Donations />
      <Footer />
      <Form />
    </div>
  );
};

export default Home;
