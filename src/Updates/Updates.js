import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";

import "./Updates.scss";

class Updates extends React.Component {
  render() {
    console.log("Updates > props ", this.props);
    return (
      <div className="page-updates">
        <Header />
        <HeroSection group={this.props.group} />
        {/* <ArticlesSection group={this.props.group} />*/}
        <Footer />
      </div>
    );
  }
}

export default Updates;
