import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/MediaSection.en.json";
import chineseTranslation from "./i18n/MediaSection.zh.json";
import I18nComponent from "../Components/I18nComponent";

import "./MediaSection.scss";

class MediaSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <section className="section section-about-media is-large has-text-black">
        <div className="container">
          <div className="columns is-mobile is-centered  is-vcentered is-multiline">
            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://defiprime.com/images/logo.svg"
                />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image">
                <img draggable="false" src="/images/coinswitch.png" />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://cdn.ttgtmedia.com/rms/ux/responsive/img/cw_logo.png"
                />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://dl.airtable.com/AtMkgs9PQgWel7a5U2eg_large_Messari_twitter_share_logo.png"
                />
              </figure>
            </div>
            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://cdn.ethnews.com/images/content/ETH-News-Logo-Black.png"
                />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image ">
                <img
                  draggable="false"
                  src="https://theme.zdassets.com/theme_assets/2178282/c55747dcb2ca7170dae4f7261e2dcc72d80e18d3.png"
                />
              </figure>
            </div>
            <div className="column  is-narrow">
              <figure className="image ">
                <img
                  draggable="false"
                  src="https://miro.medium.com/max/1200/1*p-klOrcN4pln3VOjiUJqaQ.png"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(MediaSection);
