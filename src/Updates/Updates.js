import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";

import "./Updates.scss";

class Updates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: this.props.category };
  }
  render() {
    return (
      <div className="page-updates">
        <Header />
        <HeroSection category={this.state.category} />
        <ArticlesSection category={this.state.category} />
        <Footer />
      </div>
    );
  }
}

export default Updates;
