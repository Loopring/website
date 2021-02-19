import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';

import './WithdrawalMining.scss';

const WithdrawalMining = (props) => {
  return (
    <Section
      className="withdrawal-section is-medium has-background-primary has-text-white"
      style={{
        border: '20px solid white',
      }}
    >
      <Container
        style={{
          minHeight: '500px',
          padding: '40px',
        }}
      >
        <div
          style={{
            minHeight: '400px',
            display: 'block',
            padding: '40px',
          }}
        >
          <div
            className="title "
            style={{
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            提现挖矿
          </div>

          <div
            className="slogan is-size-4 "
            style={{
              paddingBottom: '20px',
              color: '#65FFDA',
            }}
          >
            <span>提现到路印钱包 </span>
            <span>赢百万LRC大奖 </span>
          </div>
          <p className="desc has-text-white is-size-6">
            路印的“提现挖矿”活动是为了激励用户把币从中心化平台提到非托管钱包，学会自己管理虚拟资产。
          </p>
          <p>
            <a href="/#/wmining">了解更多</a>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default WithdrawalMining;
