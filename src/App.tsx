// import React from 'react'

import BlueBanner from "./components/BlueBanner";
import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Features from "./components/Features";

const App = () => {
  return (
    <div>
      <Banner />
      <Navigation />
      <HeroSection/>
      <BlueBanner/>
      <Features/>
    </div>
  );
};

export default App;
