import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HeroSection from "./HeroSection";
import StakingSection from "./StakingSection";
import TokenInfoSection from "./TokenInfoSection";

import "./LRC.scss";

class LRC extends React.Component {
  render() {
    return (
      <div className="page-lrc">
        <Header />
        <HeroSection />
        <StakingSection />
        <TokenInfoSection />
        <Footer />
      </div>
    );
  }
}

export default LRC;
