import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

// import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import VersionsSection from "./VersionsSection";
import FeaturesSection from "./FeaturesSection";
// import MediaSection from "./MediaSection";

import "./About.scss";

class About extends React.Component {
  render() {
    return (
      <div className="page-about">
        <Header />
        {/* <HeroSection />*/}
        <OverviewSection />
        <VersionsSection />
        <Footer />
      </div>
    );
  }
}

export default About;
