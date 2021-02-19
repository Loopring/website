import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons';
import NavigationEn from '../Wallet_en/Navigation';
import FooterSectionEn from '../Wallet_en/FooterSection';

import NavigationZh from '../Wallet_zh/Navigation';
import FooterSectionZh from '../Wallet_zh/FooterSection';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/StakingClaim.en.json';
import chineseTranslation from './i18n/StakingClaim.zh.json';
import I18nComponent from '../Components/I18nComponent';
import {DownloadButton} from '../Wallet_en/HeroSection';

import './StakingClaim.scss';

class StakingClaim extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    const content = this.props.isChinese ? (
      <div className="has-text-centered is-vcentered is-centered">
        <code>https://staking.loopring.org</code>已过期
        <div className="items">
          <div className="item">
            ➞ 查看通过
            <a
              href="https://cn.etherscan.com/address/stakingpool.lrctoken.eth#writeContract"
              target="_blank"
            >
              Etherscan.io
            </a>
            取回自己质押LRC的
            <a
              href="https://drive.google.com/file/d/1GbgVYaDKNmFNyl_-xv5k92q7G7RM_1hl/view"
              target="_blank"
            >
              视频教程
            </a>
          </div>
          <div className="item">
            ➞ 查看我应得的，在路印二层分发的
            <a
              href="https://github.com/LoopringSecondary/v1_staking_rewards/blob/master/staking_rewards.csv"
              target="_blank"
            >
              质押奖励数量
            </a>
          </div>
          <div className="item">
            ➞ 进一步了解
            <a
              href="https://loopring.org/#/post/lrc-tokenomics-v2-zh"
              target="_blank"
            >
              LRC新的代币经济模型
            </a>
          </div>
        </div>
      </div>
    ) : (
      <div className="has-text-centered is-vcentered is-centered">
        <code>https://staking.loopring.org</code> is now deprecated
        <div className="items">
          <div className="item">
            ➞ Withdraw your LRC from our staking pool, please follow{' '}
            <a
              href="https://drive.google.com/file/d/1GbgVYaDKNmFNyl_-xv5k92q7G7RM_1hl/view"
              target="_blank"
            >
              this totorial
            </a>{' '}
            and claim on{' '}
            <a
              href="https://etherscan.io/address/stakingpool.lrctoken.eth#writeContract"
              target="_blank"
            >
              Etherscan.io
            </a>
          </div>
          <div className="item">
            ➞ Check your{' '}
            <a
              href="https://github.com/LoopringSecondary/v1_staking_rewards/blob/master/staking_rewards.csv"
              target="_blank"
            >
              staking reward (to be) distributed on L2
            </a>
          </div>
          <div className="item">
            ➞ Learn more about the new{' '}
            <a
              href="https://medium.com/loopring-protocol/lrc-tokenomics-v2-1e6fd99e9e9c"
              target="_blank"
            >
              LRC Tokenomics
            </a>
          </div>
        </div>
      </div>
    );

    const nav = this.props.isChinese ? <NavigationZh /> : <NavigationEn />;
    const footer = this.props.isChinese ? (
      <FooterSectionZh />
    ) : (
      <FooterSectionEn />
    );

    return (
      <div className="page-staking-claim">
        {nav}
        <section className="section has-text-centered is-vcentered is-centered is-large">
          <img
            className="staking"
            draggable="false"
            src="%PUBLIC_URL%/images/staking.png"
          />
          {content}
        </section>
        {footer}
      </div>
    );
  }
}

export default withLocalize(StakingClaim);
