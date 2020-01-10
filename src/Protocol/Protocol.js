import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import PerformanceSection from "./PerformanceSection";
import DeploymentOptionsSection from "./DeploymentOptionsSection";
import DesignSection from "./DesignSection";
import ConfigurationSection from "./ConfigurationSection";

import Ceremony from "../Ceremony/Ceremony";

import "./Protocol.scss";

class Protocol extends React.Component {
  render() {
    return (
      <div className="page-protocol">
        <Header />
        <PerformanceSection />
        <DesignSection />
        <DeploymentOptionsSection />
        <Ceremony />
        <Footer />
      </div>
    );
  }
}

export default Protocol;
