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

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './SlidesSection.scss';
const handleDragStart = (e) => e.preventDefault();
const SlidesSection = () => {
  const items = [
    <a
      href="https://loopring.org/#/post/loopring-to-launch-amm-liquidity-mining-on-layer-2-cn"
      target="_blank"
      className="slide"
    >
      <img
        src={'./images/promotions/1_zh.png'}
        onDragStart={handleDragStart}
      />
    </a>,
    <a
      href="https://loopring.org/#/post/loopring-to-launch-amm-liquidity-mining-on-layer-2-cn"
      target="_blank"
      className="slide"
    >
      <img
        src={'./images/promotions/2_zh.png'}
        onDragStart={handleDragStart}
      />
    </a>,
    <a
      href="https://loopring.org/#/post/loopring-to-launch-amm-liquidity-mining-on-layer-2-cn"
      target="_blank"
      className="slide"
    >
      <img
        src={'./images/promotions/3_zh.png'}
        onDragStart={handleDragStart}
      />
    </a>,
  ];

  return (
    <Section
      className="slide-show-section"
      style={{
        background: '#1c42ff',
      }}
    >
      <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="action"
        autoPlayInterval={8000}
        animationDuration={1000}
        animationType="fadeout"
        disableButtonsControls={true}
        infinite
        touchTracking={false}
        items={items}
      />
    </Section>
  );
};

export default SlidesSection;
