import React from "react";

import DarkHeader from "../Components/DarkHeader";
import "./Ceremony.scss";

import Participant from "./Participant";

import englishTranslation from "./i18n/Ceremony.en.json";
import chineseTranslation from "./i18n/Ceremony.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

class Ceremony extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }
  render() {
    return (
      <div className="page-ceremony">
        <DarkHeader />

        <section className="section section-terminal is-small">
          <div className="container">
            <div className="columns is-multiline is-centered">
              <div
                data-aos="fade-up"
                className="column is-12 is-centered has-text-centered "
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
              <div data-aos="fade-up" className="column has-text-centered is-7">
                {this.state.I.done.map((participant, idx) => (
                  <Participant
                    key={idx}
                    name={participant.name}
                    org={participant.org}
                    hash={participant.hash}
                    status="done"
                  />
                ))}

                {this.state.I.running.map((participant, idx) => (
                  <Participant
                    key={idx}
                    name={participant.name}
                    org={participant.org}
                    hash={participant.hash}
                    status="running"
                  />
                ))}

                {this.state.I.waiting.map((participant, idx) => (
                  <Participant
                    key={idx}
                    name={participant.name}
                    org={participant.org}
                    hash={participant.hash}
                    status="waiting"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Ceremony;
