import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/RedPacket.en.json';
import chineseTranslation from './i18n/RedPacket.zh.json';
import I18nComponent from '../Components/I18nComponent';
import {DownloadButton} from '../Wallet_en/HeroSection';

import './RedPacket.scss';

class RedPacket extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    const classes = this.props.isChinese ? 'card chinese' : 'card english';

    return (
      <div className="redpacket-page">
        <div className={classes} />

        <div className="downloadButtons has-text-centered is-vcentered is-centered">
          <span className="prompt">
            <Translate id="download" />
          </span>
          <div>
            <DownloadButton
              small
              url="https://play.google.com/store/apps/details?id=loopring.defi.wallet"
              imageUrl="%PUBLIC_URL%/images/download_google_play.png"
            />
            <DownloadButton
              small
              url="http://52.82.125.33:8082/LoopringWallet.apk"
              imageUrl="%PUBLIC_URL%/images/download_apk.png"
            />
            <DownloadButton
              small
              url="https://apps.apple.com/us/app/%E8%B7%AF%E5%8D%B0%E6%99%BA%E8%83%BD%E9%92%B1%E5%8C%85/id1550921126"
              imageUrl="%PUBLIC_URL%/images/download_apple_appstore.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalize(RedPacket);
