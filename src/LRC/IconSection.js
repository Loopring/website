import React from "react";

import "./IconSection.scss";

import "../../node_modules/aos/dist/aos.css";
import AOS from "aos";

class IconSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section section-lrc-icon   has-text-black has-background-white">
        <div className="container is-centered has-text-centered">
          <div className="columns is-unselectable is-centered">
            <div data-aos="fade-up" className="column is-12 has-text-centered">
              <figure className="image lrc-logo">
                <img
                  draggable="false"
                  className="is-rounded"
                  src="/images/lrc.svg"
                />
              </figure>{" "}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IconSection;
