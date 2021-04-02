import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';

import './HeroSection.scss';

import {CenterAlignContainer} from './Common';

const HoverableButton = styled(Button)`
  &:hover {
    background-color: #00bba8 !important;
  }
`;

const DownloadButton = (props) => {
  const opacity = props.url ? 1 : 0.3;
  const height = props.small ? '32px' : '36px';
  return (
    <a href={props.url}>
      <img
        style={{
          display: 'inlineBlock',
          height: height,
          margin: '16px 8px',
          opacity: opacity,
        }}
        src={props.imageUrl}
      />
    </a>
  );
};

const HeroSection = (props) => {
  return (
    <>
      <Section
        className="hero-section-top has-background-primary has-text-white"
        style={{
          paddingBottom: '40px',
          backgroundImage:
            'url(\'' + process.env.PUBLIC_URL + '/images/bg_color_top.png\')',
          backgroundSize: 'cover',
          borderBottom: '180px solid white',
        }}
      >
        <CenterAlignContainer>
          <div className="has-text-centered">
            <div
              className="is-size-4-mobile is-size-3 has-text-din"
              style={{fontWeight: '600'}}
            >
              Loopring Wallet
            </div>
            <div
              className="is-size-3-mobile is-size-1 has-text-din"
              style={{
                fontWeight: '100',
                paddingBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              Freedom at Your Fingertips
            </div>
          </div>
        </CenterAlignContainer>

        <CenterAlignContainer>
          <Image
            style={{
              userSelect: 'none',
              userDrag: 'none',
              margin: 'auto',
              marginTop: '10px',
              marginBottom: '-240px',
              width: '420px',
              filter: 'drop-shadow(0 0 1rem #1c42ff50)',
            }}
            src={process.env.PUBLIC_URL + '/images/top_en.png'}
          />
        </CenterAlignContainer>
      </Section>

      <Section className="hero-section-bottom is-small has-background-white">
        <CenterAlignContainer>
          <div className="has-text-centered" style={{marginTop: '0'}}>
            <DownloadButton
              url="https://play.google.com/store/apps/details?id=loopring.defi.wallet"
              imageUrl={
                process.env.PUBLIC_URL + '/images/download_google_play.png'
              }
            />
            <DownloadButton
              url="http://52.82.125.33:8082/LoopringWallet.apk"
              imageUrl={process.env.PUBLIC_URL + '/images/download_apk.png'}
            />
            <DownloadButton
              url="https://apps.apple.com/us/app/loopring-smart-wallet/id1550921126"
              imageUrl={
                process.env.PUBLIC_URL + '/images/download_apple_appstore.svg'
              }
            />
            <div
              className="first-zkrollup has-text-black-bis has-text-din"
              style={{
                paddingTop: '60px',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            >
              First Ever
            </div>
            <div
              className="has-text-black-bis is-size-4-mobile is-size-4"
              style={{fontWeight: '500'}}
            >
              Ethereum Smart Wallet with zkRollup-based Trading, Transfers &
              AMMs.
            </div>

            <div
              className="has-text-grey-dark is-size-6"
              style={{
                maxWidth: '600px',
                margin: 'auto',
                marginTop: '30px',
                marginBottom: '120px',
              }}
            >
              Loopring's zkRollup L2 solution offers the same security
              guarantees as Ethereum mainnet, with a big scalability boost:
              throughput increased by 1000x, and cost reduced to just 0.1% of
              L1. Ethereum is now unleashed. One year ago, we launched the first
              zkRollup on Ethereum - now we put its power in your pocket. Smooth
              orderbook trading, AMMs, and global payments, right from the
              Loopring wallet.
            </div>
             <div
               Already have a different wallet and just want to use Loopring L2 on web?
               Head to Loopring Exchange and connect.
            </div>
          </div>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
export default HeroSection;
export {CenterAlignContainer, DownloadButton};
