import React from "react";
import Hero from "../components/Hero";
import Tagline from "../components/Tagline";
import Form from "../components/Form";
// import Loader from "../components/Loader";

const Home = () => {
  return (
    <div>
      <Hero />
      <Tagline />
      <Form />
      {/* <Loader /> */}
    </div>
  );
};

export default Home;
