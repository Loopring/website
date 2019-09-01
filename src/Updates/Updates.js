import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";

import "./Updates.scss";

class Updates extends React.Component {
  render() {
    return (
      <div className="page-updates">
        <Header />
        <HeroSection
          key={this.props.group + "_hero"}
          group={this.props.group}
        />
        <ArticlesSection
          key={this.props.group + "_article_section"}
          group={this.props.group}
        />
        <Footer />
      </div>
    );
  }
}

export default Updates;
