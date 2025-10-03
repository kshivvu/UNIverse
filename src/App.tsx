// import React from 'react'

import BlueBanner from "./components/BlueBanner";
import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Features from "./components/Features";
import Work from "./components/Work";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Banner />
      <Navigation />
      <HeroSection/>
      <BlueBanner/>
      <Features/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default App;
