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
    this.state.ceremony = {
      done: [],
      running: [],
      waiting: []
    };
  }

  componentDidMount() {
    const urlBase =
      "https://gist.githubusercontent.com/dong77/c1478297907ae87fdad66e05b06eece6/raw/a290665f6770f6c4169fc9802296bf209d948d23/";
    const url = this.isChinese()
      ? urlBase + "ceremony.zh.json"
      : urlBase + "ceremony.en.json";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ ceremony: data }));
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
                <div className="fire">
                  <div className="red flame"></div>
                  <div className="orange flame"></div>
                  <div className="yellow flame"></div>
                  <div className="white flame"></div>
                  <div className="blue circle"></div>
                  <div className="black circle"></div>
                </div>
                <div className="title">
                  <h2>Loopring ZKP Trusted Setup</h2>
                  <h2>Multi-party Computation Ceremony</h2>
                </div>
              </div>
              <div data-aos="fade-up" className="column has-text-centered is-7">
                {this.state.ceremony.done.map((participant, idx) => (
                  <Participant
                    key={idx}
                    name={participant.name}
                    org={participant.org}
                    hash={participant.hash}
                    status="done"
                  />
                ))}

                {this.state.ceremony.running.map((participant, idx) => (
                  <Participant
                    key={idx}
                    name={participant.name}
                    org={participant.org}
                    hash={participant.hash}
                    status="running"
                  />
                ))}

                {this.state.ceremony.waiting.map((participant, idx) => (
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
