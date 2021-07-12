import React from "react";
import Counter from "../counter/Counter";
import Logo from "../logo/Logo";
import SampleLinks from "../sample_links/SampleLinks";

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
