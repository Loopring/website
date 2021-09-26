import React, {useEffect} from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import SlidesSection from './SlidesSection';
// import WithdrawalMining from './WithdrawalMining';
import AOS from 'aos';

import './wallet.scss';

const WalletPage = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navigation />
      {/* <SlidesSection />*/}
      <HeroSection />
      <FeatureSection
        even
        h1={'社交守护'}
        h2={'提供安全与易用间最好的平衡'}
        h3={
          '向私钥和助记词说再见吧。您可以选择自己相信的人、机构、和硬件作为您钱包的守护人，为您的资产保驾护航。' +
          '过半数守护人可信，您的资产就安全。'
        }
        imageUrl={
          './images/feature_social_recover_zh.png'
        }
      />
      <FeatureSection
        h1={'永久身份'}
        imageSize={'contain'}
        h2={'铸造以太坊上永久的身份标识'}
        h3={
          '路印钱包将身份与安全解耦。即使发生最坏的安全事故，您也可以继续使用同一个钱包，且保证与其关联的任何长短期利益都安全如初。' +
          '而普通钱包一旦私钥泄露，相关利益一下子就都不再安全。'
        }
        imageUrl={'./images/feature_identity_zh.png'}
      />
      <FeatureSection
        even
        imageSize={'contain'}
        h1={'安快好省'}
        h2={'二层扩容，做到安全、快速、好用、省钱'}
        h3={
          '路印钱包集成路印的zkRollup二层扩容协议，保障与以太坊主网一致的安全性，' +
          '同时提供媲美支付宝和微信的支付体验，费用仅为以太坊主网费用的百分之一。'
        }
        imageUrl={'./images/feature_akhs_zh.png'}
      />
      <FeatureSection
        imageSize={'contain'}
        h1={'面向未来'}
        h2={'可轻松升级以使用未来新技术'}
        h3={
          '路印钱包是以太坊主网智能合约钱包，采用去中心模块化设计，可在您的授权下不断升级使用未来的新标准和新技术。' +
          '基于区块链的新金融有着无限可能，普通钱包关注当下之时，路印已看见未来。'
        }
        imageUrl={
          './images/feature_future_looking_zh.png'
        }
      />

      <FeatureSection
        even
        imageSize={'contain'}
        h1={'不二之选'}
        h2={'路印钱包是您以太坊的财富入口，自由之门'}
        h3={
          '我们会集成更多去中心化金融应用和二层扩容方案。' +
          '我们将秉承开源，不托管用户资产，安全第一的原则，立志成为您区块链财富自由的领航员。'
        }
        imageUrl={'./images/feature_best_choice_zh.png'}
      />

      {/* <WithdrawalMining />*/}
      <FooterSection />
    </>
  );
};

export default WalletPage;
