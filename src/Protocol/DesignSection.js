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
        <div className="fixed-label is-unselectable is-hidden-mobile">
          <Translate id="sidenote" />
        </div>

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
                      href="/#/resources/zh_whitepaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      技术白皮书
                    </a>
                    。但对最新的3.0版本，我们选择直接发布更具技术细节的
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight underline"
                      href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md"
                    >
                      设计文档
                    </a>
                    （目前只有英文版）。如果您想了解路印协议的设计背景和理念，我们白皮书中相关的章节依然会提供很好的参考。
                  </p>
                ) : (
                  <p>
                    We published a{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight underline"
                      href="/#/Fresources/en_whitepaper.pdf"
                    >
                      Whitepaper
                    </a>{" "}
                    for version 1.0, 1.5, and 2.0. For 3.0, however, we’ve
                    decided to share our{" "}
                    <a
                      className="highlight underline"
                      href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md"
                    >
                      Design Doc
                    </a>{" "}
                    as it provides a lot more granular details than a
                    whitepaper. Much of the general background information,
                    though, is still available in the original whitepaper.
                  </p>
                )}

                <h2>
                  <Translate id="designTitles.designDoc" />
                </h2>
                {this.isChinese() ? (
                  <div>
                    <p>
                      路印协议3.0的核心设计目标包括两个：第一是高安全性，第二是高性能。协议设计的很多方面，都是围绕着在各种可能的情况下，为用户提现自己充值的资产提供各种保障。这种保障允许用户在极端情况下，仅提供默克尔证明，不依靠于交易所的任何动作，就可以将资产全部取出。而默克尔证明，则可以通过区块链上的数据可用性计算得到。
                    </p>
                    <p>
                      为了提高吞吐量，并降低清结算成本，路印协议3.0将几乎全部的计算都迁移到区块链下完成。这种计算会更新中继维护的一棵四叉默克尔树，用以保存每个用户每个币种的余额，以及每个订单的成交历史。
                      中继批量处理几十到几万个充值提现和交易清结算等请求，并将批量更新后的树根上链。为了保障中继的计算更新方式严格遵循协议的规则，中级必须在一定时间内提供批量处理相关的零知识证明。
                    </p>

                    <p>
                      路印协议3.0的安全性、高吞吐量、和低成本证明了zkRollup思路是去中心化应用扩容的最佳方式之一。二层协议消极依靠底层公有链来扩容是不可取的。
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      We designed Loopring 3.0 with two major objectives in
                      mind: Security and Performance. The protocol ensures that
                      users can withdraw their assets under all circumstances.
                      In the worst-case scenario, users can still withdraw their
                      assets with Merkle proofs that can be generated from the
                      on-chain data if OCDA is enabled. This means users don't
                      need to trust or turn to any central party for help in any
                      circumstance.
                    </p>
                    <p>
                      To significantly improve throughput and lower settlement
                      cost, Loopring 3.0 migrates most computations off-chain
                      and uses the underlying blockchain as a data and a ZKP
                      verification layer. User balances and order trading
                      histories are all organized in an off-chain Quad-Merkle
                      tree. User requests, including deposits, withdrawals,
                      transfers, and settlements, are processed in large
                      batches. The state root after each batch will be published
                      on-chain together with other data necessary for
                      re-construction and verification of state roots. The ZK
                      proofs for new state roots are verified to finalize those
                      state updates.
                    </p>
                  </div>
                )}
              </div>
              <div className="content">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight has-leading-thick-arrow highlight"
                  href="https://github.com/Loopring/protocols/blob/master/packages/loopring_v3/DESIGN.md"
                >
                  <Translate id="blocks.designdoc" />
                </a>
              </div>
            </div>

            <div data-aos="fade-up" className="column building-blocks is-5">
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
                      <Translate id="blocks.quadTree" />
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://github.com/Loopring/protocols/tree/master/packages/loopring_v3/contracts"
                    >
                      <Translate id="blocks.contracts" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href="https://github.com/Loopring/protocols/tree/master/packages/loopring_v3/circuit"
                    >
                      <Translate id="blocks.circuits" />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight has-leading-thick-arrow highlight"
                      href=""
                    >
                      <Translate id="blocks.loopring3.0audit" />
                    </a>
                  </li>*/}
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
