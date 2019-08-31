import React from "react";

import "./HeroSection.scss";

class HeroSection extends React.Component {
  render() {
    return (
      <section className="section section-updates-hero is-large has-background-white has-text-black">
        <div className="is-centered is-full">{this.props.category}</div>
      </section>
    );
  }
}

export default HeroSection;
