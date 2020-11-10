import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import FunctionsSection from "./FunctionsSection";
import TradeSection from "./TradeSection";

import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="page-team">
        <Header />
        <HeroSection />
        {/* <FeatureSection />*/}
        <FunctionsSection />
        <TradeSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
