import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import {DownloadButton} from './HeroSection';

import './WithdrawalMining.scss';

const CenterAlignContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const WithdrawalMining = (props) => {
  return (
    <Section
      className="withdrawal-section-en is-large has-background-black-bis has-text-white"
      style={{border: '20px solid white'}}
    >
      <CenterAlignContainer>
        <div style={{minHeight: '400px'}}>
          <div
            className="title graidient-text has-text-din"
            style={{
              fontWeight: 600,
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Withdrawal Mining
          </div>

          <div
            className="slogan is-size-4 "
            style={{
              paddingBottom: '50px',
              color: '#65FFDA',
            }}
          >
            <span>Withdraw from CEXs to Loopring Wallet </span>
            <span>and earn your share of 1,000,000 LRC. </span>
          </div>
          <p
            className="desc has-text-white is-size-6"
            style={{maxWidth: '680px'}}
          >
            The objective of the "Withdrawal Mining" program is to incentivize
            our community to withdraw cryptoassets from centralized platforms
            and learn to take control of their assets with a non-custodial
            wallet.
          </p>

          <div className="is-size-6 rules">
            <ol
              style={{maxWidth: '800px', padding: '20px', color: '#65ffda'}}
            >
              <li>
                This program will be active from November 27th (inclusive) to
                December 26th (inclusive), Beijing time. 30 days.
              </li>
              <li>
                The total mining reward is <b>1,000,000 LRC</b>, 33,333 LRC each
                day.
              </li>
              <li>
                You can withdraw <b>LRC</b>, <b>ETH</b>, <b>WBTC</b>,{' '}
                <b>USDT</b>, <b>USDC</b>, and <b>DAI</b> from custodial
                platforms to Loopring Wallet to join the mining program.
              </li>
              <li>
                To qualify, the total value of your wallet balance shall be no
                less than 100 USD. Rewards are based on your daily balances.
              </li>
              <li>
                Users who paid to create a wallet (bought a short ENS or
                'special' address), OR users who have created a wallet before
                midnight Beijing time on November 27th will earn a{' '}
                <b>double reward</b>.
              </li>
              <li>
                LRC will earn a <b>double reward</b>.
              </li>
              <li>
                Assets on Loopring 3.6's layer-2 account will earn a{' '}
                <b>double reward</b>.
              </li>
              <li>
                Wallets with three or more guardians will earn a{' '}
                <b>double reward</b>.
              </li>

              <li>
                The above doubles can be 'stacked' (multiplied) but are capped
                at 8X. Each wallet's effective participation amount is limited
                to 800,000 USD.
              </li>
              <li>
                We will randomly select a time every day to take a snapshot and
                calculate the reward based on your effective participation
                amount.
              </li>
              <li>
                We will distribute LRC rewards directly to your wallet's layer-2
                account the next day.
              </li>
              <li>
                This program only supports Loopring Wallets that are on the new
                Loopring 3.6 protocol (If you create a wallet before Nov 27th,
                you can one-click migrate. All wallets created after Nov 27th
                are on v3.6 by default.)
              </li>
              <li>
                While the spirit of this program is to incentivize users to take
                control away from CEXs, assets coming from anywhere, including
                other self-custodial wallets are eligible.
              </li>
              <li>
                Loopring reserves the right to interpret, modify, and cancel
                this program if necessary.
              </li>
            </ol>
          </div>
        </div>
        <div style={{marginTop: '80px'}}>
          <DownloadButton />
        </div>
      </CenterAlignContainer>
    </Section>
  );
};

export default WithdrawalMining;
