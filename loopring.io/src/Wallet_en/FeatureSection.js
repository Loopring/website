import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import {
  CenterAlignContainer,
  RightAlignContainer,
  LeftAlignContainer,
} from './Common';

import './FeatureSection.scss';

const FeatureSection = ({h1, h2, h3, imageUrl, even, imageSize}) => {
  const bgImgUrl = 'url(\'' + imageUrl + '\')';
  const bgImgPosition = even ? 'right center' : 'right center';
  const columnsClassName = even ? 'is-reversed-mobile' : '';

  const textBlock = (
    <RightAlignContainer
      data-aos="fade-up"
      style={{
        padding: '10% 10%',
        minHeight: '840px',
      }}
    >
      <div>
        <Image className="is-hidden-tablet" src={imageUrl} />

        <div
          className="has-text-black-bis is-size-2 has-text-din"
          style={{fontWeight: 600, textTransform: 'uppercase'}}
        >
          {h1}
        </div>

        <div
          className="has-text-black-ter is-size-4"
          style={{
            paddingBottom: '20px',
          }}
        >
          {h2}
        </div>

        <p className="has-text-grey-dark is-size-6">{h3}</p>

        {/*     <a
          className="download-link"
          href="https://play.google.com/store/apps/details?id=loopring.defi.wallet"
        >
          Get Android App (beta)
        </a>*/}
      </div>
    </RightAlignContainer>
  );

  const imageBlock = (
    <LeftAlignContainer
      className="is-hidden-mobile"
      style={{
        height: '100%',
        width: '100%',
        minHeight: '400px',
        backgroundImage: bgImgUrl,
        backgroundSize: imageSize || 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: bgImgPosition,
      }}
    ></LeftAlignContainer>
  );

  return (
    <Section
      className="feature-section is-large"
      style={{
        paddingTop: '12px',
        paddingBottom: '12px',
        background: even ? '#f1f2f5' : 'white',
      }}
    >
      <Container>
        <Columns className={columnsClassName}>
          <Columns.Column size={6} style={{padding: '0'}}>
            {even ? textBlock : imageBlock}
          </Columns.Column>

          <Columns.Column size={6} style={{padding: '0'}}>
            {even ? imageBlock : textBlock}
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};

export default FeatureSection;
