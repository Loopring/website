import React from "react";

import englishTranslation from "./i18n/TokenInfoSection.en.json";
import chineseTranslation from "./i18n/TokenInfoSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import "./TokenInfoSection.scss";

class TokenInfoSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-lrc-info is-large has-background-grey">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>{this.state.I.heading}</h1>
            </div>
          </div>

          {/* ---*/}

          <div className="columns is-centered is-multiline">
            <div className="column column-info is-5 has-text-left">
              <div data-aos="fade-up" className="content">
                <h2>{this.state.I.titles.tokenInfo}</h2>
                <ul>
                  {this.state.I.facts.map((item, idx) => (
                    <li key={idx}>
                      <span className="has-leading-thin-arrow key">
                        {item.key}:{" "}
                      </span>
                      <span className="tag value">{item.value}</span>
                      {item.url ? (
                        <a className="highlight" href={item.url}>
                          ↗
                        </a>
                      ) : (
                        <span />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-up" className="content">
                <h2>{this.state.I.titles.migration}</h2>
                {this.isChinese() ? (
                  <div>
                    <p className="has-text-justify">
                      我们已于2019年5月7日完成了LRC代币从
                      <a
                        className="highlight "
                        href="https://etherscan.io/token/0xef68e7c694f40c8202821edf525de3782458639f"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        1.0版本
                      </a>
                      到2.0版本的升级。LRC
                      2.0依然严格遵循ERC20代币标准，并引入了一个代币燃烧机制。该机制确保路印协议被逐渐广泛采用后，
                      LRC的发行和流通总量都会逐渐减少
                      。路印协议用其它代币收取的协议手续费会通过我们的
                      <a
                        href="https://medium.com/loopring-protocol/oedax-looprings-open-ended-dutch-auction-exchange-model-d92cebbd3667"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight "
                      >
                        Oedax协议
                      </a>
                      和路印DAO，拍卖成LRC，之后再燃烧掉。
                    </p>
                    <p>
                      您可以通过我们的
                      <a className="highlight" href="/#/updates">
                        博客
                      </a>
                      了解更多关于LRC代币升级的一些细节。请注意LRC1.0代币已经不具价值，请不要尝试用LRC1.0代币在交易所上充值，白白浪费转账手续费！
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      On May 7th 2019, we migrated LRC from{" "}
                      <a
                        className="highlight "
                        href="https://etherscan.io/token/0xef68e7c694f40c8202821edf525de3782458639f"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        version 1.0
                      </a>{" "}
                      to version 2.0. Note, LRC versioning does not relate to
                      Loopring protocol versions. LRC v2 is simply the updated
                      token - used in Loopring protocol 3.0 and beyond.
                    </p>
                    <p>
                      LRC is the Loopring protocol token, used to incentivize
                      protocol-desirable behaviour from liquidity providers,
                      insurers, and DAO governors. Protocol fees come from
                      Loopring L2 economic activity, and flow into productive
                      Loopring network participants and into LRC itself. To
                      learn more about the LRC token model, please check out our{" "}
                      <a
                        className="highlight "
                        href="https://medium.com/loopring-protocol/lrc-tokenomics-v2-1e6fd99e9e9c"
                      >
                        blog post
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TokenInfoSection;
