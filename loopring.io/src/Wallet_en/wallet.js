import React, {useEffect} from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
// import WithdrawalMining from './WithdrawalMining';
import AOS from 'aos';
import FooterSection from './FooterSection';
import SlidesSection from './SlidesSection';

import './wallet.scss';

const WalletPage = ({t}) => {
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
        h1={'Secure'}
        h2={'Guardians, locks, and limits'}
        h3={
          'Completely self-custodial, only you control your assets. And say goodbye to seed phrases and paper backups. You can choose people, ' +
          'institutions, and hardware that you trust as the guardians of your wallet. If you ever lose access to your mobile, ' +
          'they can help you recover all your assets. As long as more than half of your guardians are trustworthy, your ' +
          'assets are secure. You can also set limits on daily transfers, and lock it down if ever needed.'
        }
        imageUrl={
          process.env.PUBLIC_URL + '/images/feature_social_recover_en.png'
        }
      />
      <FeatureSection
        h1={'Own Your Identity'}
        imageSize={'contain'}
        h2={'A continuous identity on Ethereum'}
        h3={
          'Loopring Wallet decouples identity and security: you can choose your wallet name and ' +
          'address, and maintain this identity forever. Even if the worst security incident occurs, ' +
          'you can continue to use the same wallet and ensure that any assets on the ' +
          'wallet are safe. Compared to an ordinary wallet where, if the private key is leaked, all ' +
          'your assets are no longer safe.'
        }
        imageUrl={process.env.PUBLIC_URL + '/images/feature_identity_en.png'}
      />
      <FeatureSection
        even
        imageSize={'contain'}
        h1={'Fast, Cheap, & Easy to use'}
        h2={'zkRollup layer-2 scaling brings high performance to Ethereum'}
        h3={
          'Loopring Wallet integrates Loopring\'s zkRollup layer-2 scaling protocol to raise speeds and lower fees by 1000x, ' +
          'while inheriting the absolute same security guarantees as Ethereum mainnet. ' +
          'Loopring provides a trading experience like Robinhood or Binance, a payment experience like Alipay or Venmo, but with ' +
          'the power and permissionlessness of Ethereum. Best of both worlds: ' +
          'traditional speed and cost efficiency & Ethereum security, opportunity, and global reach.'
        }
        imageUrl={process.env.PUBLIC_URL + '/images/feature_akhs_en.png'}
      />
      <FeatureSection
        imageSize={'contain'}
        h1={'Forward looking and future-proof'}
        h2={'Easily upgradable and adaptable to future technology'}
        h3={
          'Based on Ethereum smart contracts, Loopring Wallet adopts a pluggable, modular ' +
          'design, which can be continuously upgraded under your authorization to use future ' +
          'standards and new technologies. Ethereum finance has unlimited possibilities. Ordinary ' +
          'wallets focus on the present, while Loopring Wallet is positioned for the future, whatever ' +
          'it may bring.'
        }
        imageUrl={
          process.env.PUBLIC_URL + '/images/feature_future_looking_en.png'
        }
      />

      <FeatureSection
        even
        imageSize={'contain'}
        h1={'Ethereum Unleashed'}
        h2={'Gateway to Decentralized Finance on Ethereum'}
        h3={
          'We will continue to integrate more Ethereum-based DeFi applications and layer-2 ' +
          'scaling solutions - not just Loopring. Earn, invest, trade, and more. The new financial system is at your fingertips, and you can put your money to work within your wallet. ' +
          'Always adhering to the principles of open source, no custody of user assets, and safety first. You are always in control.'
        }
        imageUrl={process.env.PUBLIC_URL + '/images/feature_best_choice_en.png'}
      />

      {/* <WithdrawalMining />*/}
      <FooterSection />
    </>
  );
};

export default WalletPage;
