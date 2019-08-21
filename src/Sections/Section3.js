import React from "react";
import "./Section3.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiationAlt } from "@fortawesome/free-solid-svg-icons";

const API = "./hacks_en.json";

class Section3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section protocol-section-3 is-large has-text-black has-background-blue">
        <div className="container">
          <div className="columns"></div>
        </div>
      </section>
    );
  }
}

export default Section3;
