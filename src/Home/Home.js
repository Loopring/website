import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import BuildDexSection from "./BuildDexSection";
import TradeSection from "./TradeSection";

import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="page-team">
        <Header />
        <HeroSection />
        <FeatureSection />
        <TradeSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
