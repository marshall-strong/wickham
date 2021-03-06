import React from "react";
import Counter from "../../features/counter/Counter";
import Logo from "./Logo";
import SampleLinks from "./SampleLinks";

const Home = () => {
  return (
    <main>
      <Logo />
      <Counter />
      <SampleLinks />
    </main>
  );
};

export default Home;
