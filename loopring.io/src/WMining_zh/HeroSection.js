import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';

import './HeroSection.scss';

import {CenterAlignContainer} from '../Wallet_zh/Common';

const HeroSection = (props) => {
  return (
    <>
      <Section className="wmining-hero-section has-background-primary has-text-white">
        <CenterAlignContainer>
          <div className="has-text-centered">
            <div
              className="is-size-5-mobile is-size-4"
              style={{fontWeight: '300'}}
            >
              30天
            </div>
            <div
              className="is-size-2-mobile is-size-1"
              style={{
                fontWeight: '600',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
            >
              100万LRC
            </div>
          </div>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
export default HeroSection;
