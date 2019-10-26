import React from "react";

import DarkHeader from "../Components/DarkHeader";
import Footer from "../Components/Footer";
import "./Ceremony.scss";

class Ceremony extends React.Component {
  render() {
    return (
      <div className="page-ceremony">
        <DarkHeader />

        <section className="section section-terminal is-small">
          <div className="container">
            <div className="columns is-multiline">
              <div
                data-aos="fade-up"
                className="column is-12 has-text-centered "
              >
                <div class="fire">
                  <div class="red flame"></div>
                  <div class="orange flame"></div>
                  <div class="yellow flame"></div>
                  <div class="white flame"></div>
                  <div class="blue circle"></div>
                  <div class="black circle"></div>
                </div>
                <div className="title">
                  <h2>Loopring ZKP Trusted Setup</h2>
                  <h2>Multi-party Computation Ceremony</h2>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="column has-text-centered is-12"
              >
                <ul>
                  <li>fdafjdoafjdafa; f</li>
                  <li>fdafjdoafjdafa; f</li>
                  <li>fdafjdoafjdafa; f</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Ceremony;
