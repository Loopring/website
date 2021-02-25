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
  return (
    <a href={props.url}>
      <img
        style={{
          display: 'inlineBlock',
          height: '36px',
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
              className="is-size-5-mobile is-size-4"
              style={{fontWeight: '300'}}
            >
              路印智能钱包
            </div>
            <div
              className="is-size-2-mobile is-size-1"
              style={{
                fontWeight: '600',
                paddingBottom: '20px',
              }}
            >
              自由触手可及
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
            src={process.env.PUBLIC_URL + '/images/top_zh.png'}
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
              imageUrl={
                process.env.PUBLIC_URL + '/images/download_apple_appstore.svg'
              }
            />
            <div
              className="first-zkrollup has-text-black-bis "
              style={{paddingTop: '60px', fontWeight: '600'}}
            >
              全球第一个
            </div>
            <div
              className="has-text-black-bis is-size-3-mobile is-size-3"
              style={{fontWeight: '500'}}
            >
              zkRollup加持的以太坊智能钱包
            </div>

            <div
              className="has-text-grey-dark is-size-6"
              style={{
                maxWidth: '600px',
                fontWeight: '300',
                marginTop: '20px',
                marginBottom: '120px',
              }}
            >
              零知卷叠（zkRollup）二层扩容技术具有和以太坊主网同样的安全保障，性能有上千倍的提升，费用却只是主网的百分之一。
              作为世界上第一个主网上线的零知卷叠技术，路印协议为路印钱包带来畅快淋漓的订单本和AMM交易体验。
            </div>
          </div>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
export default HeroSection;
export {CenterAlignContainer, DownloadButton};
