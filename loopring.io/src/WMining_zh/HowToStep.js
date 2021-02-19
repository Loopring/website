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
} from '../Wallet_zh/Common';

import './HowToStep.scss';

const HowToStep = ({titles}) => {
  return (
    <>
      <Section className="howto-step is-medium">
        <CenterAlignContainer>
          <div className="has-text-left">
            <div
              className="is-size-1 has-text-dark"
              style={{fontWeight: '600', paddingBottom: '40px'}}
            >
              如何参与
            </div>
          </div>
        </CenterAlignContainer>
        <Container>
          <Columns>
            {titles.map((title, index) => (
              <Columns.Column size={4}>
                <Container className="one-step is-centered has-text-left">
                  <div className=" is-centered">
                    <Image
                      className=" is-centered"
                      style={{
                        width: '300px',
                        overflow: 'hidden',
                        border: '1px solid #1c42ff10',
                        filter: 'drop-shadow(0 0 1rem #1c42ff50)',
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        '/images/wmining/' +
                        (index + 1) +
                        '.jpeg'
                      }
                    />
                    <div
                      className="is-size-6 has-text-dark"
                      style={{
                        padding: '20px',
                        fontWeight: '600',
                        minHeight: '80px',
                        maxWidth: '310px',
                      }}
                    >
                      <div style={{marginTop: 'auto'}}>
                        <span className="has-text-grey circle-index">
                          {index + 1}.
                        </span>{' '}
                        {title}
                      </div>
                    </div>
                  </div>
                </Container>
              </Columns.Column>
            ))}
          </Columns>
        </Container>
      </Section>
    </>
  );
};

export default HowToStep;
