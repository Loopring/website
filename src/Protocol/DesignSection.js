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
                {this.isChinese() ? (
                  <p>
                    我们曾为路印较早的1.0、1.5、和2.0版本发表过
                    <a
                      className="highlight underline"
                      href="/resources/zh_whitepaper.pdf"
                    >
                      技术白皮书
                    </a>
                    。但对最新的3.0版本，我们选择直接发布更具技术细节的
                    <a className="highlight underline" href="">
                      设计文档
                    </a>
                    （目前只有英文版）。如果您想了解路印协议的设计背景和理念，我们白皮书中相关的章节依然会提供很好参考。
                  </p>
                ) : (
                  <p>
                    We published a{" "}
                    <a
                      className="highlight underline"
                      href="/resources/en_whitepaper.pdf"
                    >
                      Whitepaper
                    </a>{" "}
                    for version 1.0, 1.5, and 2.0. For 3.0, however, we decided
                    to share our{" "}
                    <a className="highlight underline" href="">
                      Design Doc
                    </a>{" "}
                    as it provides a lot more details than a whitepaper. Many
                    background information can still be found in the origin
                    whitepaper.
                  </p>
                )}

                <h2>
                  <Translate id="designTitles.designDoc" />
                </h2>
                {this.isChinese() ? (
                  <p>
                    There is no better source than our Design Doc for you to
                    learn about all the ideas behind Loopring 3.0.
                  </p>
                ) : (
                  <p>
                    There is no better source than our Design Doc for you to
                    learn about all the ideas behind Loopring 3.0.
                  </p>
                )}
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
