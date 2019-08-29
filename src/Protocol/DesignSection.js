import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/DesignSection.en.json";
import chineseTranslation from "./i18n/DesignSection.zh.json";
import I18nComponent from "../Components/I18nComponent";

import "./DesignSection.scss";

class DesignSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section is-large section-protocol-design  has-background-blue">
        <div className="fixed-label is-hidden-mobile">100% open-source</div>

        {/* ---*/}
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column has-text-centered  is-12">
              <h1>
                <Translate id="headingDesign" />
              </h1>
            </div>
          </div>

          {/* ---*/}
          <div className="columns is-centered is-multiline">
            <div data-aos="fade-up" className="column is-5 has-text-justify">
              <div className="content">
                <h2>
                  <Translate id="designTitles.whitepaper" />{" "}
                  <span className="deprecate is-unselectable">
                    <Translate id="deprecated" />
                  </span>
                </h2>
                <p>
                  There is no better source than our Design Doc for you to learn
                  about all the ideas behind Loopring 3.0.
                </p>
                <h2>
                  <Translate id="designTitles.designDoc" />
                </h2>
                <p>
                  There is no better source than our Design Doc for you to learn
                  about all the ideas behind Loopring 3.0.
                </p>
                {/* <FontAwesomeIcon icon={faFileAlt} size="5x" />*/}
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a,
                </p>
              </div>
            </div>

            {/* "contracts": "Loopring 3.0 Smart Contracts·············the on-chain part ⟁",
        "circuits": "Loopring 3.0 ZKP circuits·····················the off-chain part ⧉",
        "zkRollupPost": "Vitalik's post on zkRollup ··············································· ◎",
        "zkRollupTechTalk": "Vitalik's tech-talk on zkRollup······························ ◎",
        "zkp": "Zero Knowledge Proof / ZKP···································· ◎",
        "poseidon": "Poseidon hash function ················································· ◱",
        "quadTree": "Quad-Merkle Tree ··························································· ◱",
        "loopring3.0Audit": "SECBIT Security Audit Report ································· ◒"
    }*/}

            <div data-aos="fade-up" className="column is-5">
              <div className="content">
                <h2>
                  <Translate id="designTitles.buildingBlocks" />
                </h2>
                <ul className="links">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                    >
                      <Translate id="blocks.zkRollupPost" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://www.youtube.com/watch?v=mOm47gBMfg8"
                    >
                      <Translate id="blocks.zkRollupTechTalk" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://en.wikipedia.org/wiki/Zero-knowledge_proof"
                    >
                      <Translate id="blocks.zkp" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://github.com/scipr-lab/libsnark"
                    >
                      <Translate id="blocks.libsnark" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://github.com/HarryR/ethsnarks"
                    >
                      <Translate id="blocks.ethsnark" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://dusk.network/news/poseidon-the-most-efficient-zero-knowledge-friendly-implementation"
                    >
                      <Translate id="blocks.poseidon" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://en.wikipedia.org/wiki/Merkle_tree"
                    >
                      <Translate id="blocks.quardTree" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href=""
                    >
                      <Translate id="blocks.contracts" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href=""
                    >
                      <Translate id="blocks.circuits" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href=""
                    >
                      <Translate id="blocks.loopring3.0audit" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(DesignSection);
