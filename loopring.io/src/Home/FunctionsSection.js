import React from "react";

import englishTranslation from "./i18n/FunctionsSection.en.json";
import chineseTranslation from "./i18n/FunctionsSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./FunctionsSection.scss";

class FunctionsSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div>
        <section className="section section-functions is-large has-background-white">
          <div className="container">
            <div className="columns is-multiline is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-centered"
              >
                <div className="has-text-left">
                  <h1>社交守护</h1>
                  <h2>提供安全与易用间最好的平衡</h2>
                  <p>
                    向私钥和助记词说再见吧。您可以选择自己相信的人、机构、和硬件作您钱包的守护人，为您的资产保驾护航。只要过半守护人可信，您的资产就绝对安全。
                  </p>

                </div>
              </div>
              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-left"
              >
                <figure className="image">
                  <img draggable="false" src={"/images/feature_B1.jpg"} />
                </figure>
              </div>
            </div>
          </div>
        </section>

         <section className="section section-functions is-large has-background-grey-blue">
          <div className="container">
            <div className="columns is-multiline is-centered is-vcentered">

               <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-left"
              >
                <figure className="image">
                  <img draggable="false" src={"/images/feature_B1.jpg"} />
                </figure>
              </div>
              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-centered"
              >
                <div className="has-text-left">
                  <h1>永久身份</h1>
                  <h2>为您提供以太坊上永久的身份标识</h2>
                  <p>
                    路印钱包将身份与安全解耦。即使发生最坏的安全事故，您也可以继续使用您的路印钱包，且保证与钱包关联的任何利益都安全。而普通钱包一旦私钥泄漏，绑定的全部利益都不再安全。
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>



           <section className="section section-functions is-large has-background-white">
          <div className="container">
            <div className="columns is-multiline is-centered is-vcentered">

       <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-centered"
              >
                <div className="has-text-left">
                  <h1>安快好省</h1>
                  <h2>二层扩容，做到安全、快速、好用、省钱</h2>
                  <p>
                    路印钱包集成了路印的zkRollup二层扩容协议，保障与以太坊主网一致的安全性，同时提供媲美支付宝和微信的支付体验，费用仅为以太坊主网费用的百分之一。
                  </p>
                </div>
              </div>

               <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-left"
              >
                <figure className="image">
                  <img draggable="false" src={"/images/feature_B1.jpg"} />
                </figure>
              </div>



            </div>
          </div>
        </section>

         <section className="section section-functions is-large has-background-grey-blue">
          <div className="container">
            <div className="columns is-multiline is-centered is-vcentered">

              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-left"
              >
                <figure className="image">
                  <img draggable="false" src={"/images/feature_B1.jpg"} />
                </figure>
              </div>

                    <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-centered"
              >
                <div className="has-text-left">
                  <h1>面向未来</h1>
                  <h2>可轻松升级钱包以使用未来新技术</h2>
                  <p>
                    路印钱包是以太坊主网智能合约钱包，采用去中心模块化设计，可在您的授权下不断升级使用未来的新标准和新技术。基于区块链的新金融有着无限可能，当普通钱包关注当下，路印钱包已预见未来。
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>


         <section className="section section-functions is-large has-background-white">
          <div className="container">
            <div className="columns is-multiline is-centered is-vcentered">
              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-centered"
              >
                <div className="has-text-left">
                  <h1>不二之选</h1>
                  <h2>路印钱包是您以太坊的财富入口，开启财务自由的一扇门</h2>
                  <p>
                    我们会集成更多以太坊主网DeFi应用，也会集成更多的二层扩容方案。我们将秉承开源，不托管用户资产，安全第一的原则，成为您区块链财富自由的领航员。
                  </p>

                </div>
              </div>
              <div
                data-aos="fade-up"
                className="column is-6 is-centered is-vcentered has-text-left"
              >
                <figure className="image">
                  <img draggable="false" src={"/images/feature_B1.jpg"} />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FunctionsSection;
