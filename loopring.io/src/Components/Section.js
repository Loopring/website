import React from "react";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

const Section = props => {
  return (
    <section
      className={"section is-small has-background-primary " + props.classes}
      style={{ border: "1px solid red" }}
    >
      <div className="container">
        <div className="columns">
          <div
            data-aos="fade-up"
            className="column is-centered is-vcentered has-text-centered"
          >
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
