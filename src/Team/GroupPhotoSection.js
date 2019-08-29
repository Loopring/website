import React from "react";
import "./GroupPhotoSection.scss";
import "../../node_modules/aos/dist/aos.css";
import AOS from "aos";

class GroupPhotoSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    return (
      <section className="section section-group-photo">
        <figure data-aos="fade-up" className="image covered">
          <img
            className="team-picture is-unselectable"
            src="/images/team.jpeg"
          />
        </figure>
      </section>
    );
  }
}

export default GroupPhotoSection;
