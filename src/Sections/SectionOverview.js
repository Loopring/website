import React from 'react';
import './SectionOverview.scss';

class SectionOverview extends React.Component {
  render() {
    return (
      <section className="section is-large section-overview has-background-grey">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-4">
              <h1>Overview</h1>
              <h2>Loopring's Vision & Objectives</h2>
              <div className="content">
                The blockchain technology empowers definite ownership — the
                ownership of digital assets, and soon the ownership of physical
                assets as well. It is believed to be the disruptor to the
                traditional notions of currency and will establish the very
                foundation of the next generation of finance. It is, however,
                ironic that most crypto-holders are still trading their assets
                on Centralized Exchanges, or CEXes, by giving up their ownership
                temporarily. Over the years, more than two billion US dollars
                crypto-assets that belong to the users got hacked on those
                platforms.
              </div>
              <div className="content">
                We believe that crypto-trading shall be and can be made
                risk-free on Decentralized Exchanges, or DEXes, that are powered
                by blockchain and Smart Contract technology. We also envision
                that trading crypto-assets on DEXes will be less expensive
                compared to CEXes, and the liquidity will be aggregated at a
                much larger scale, if not globally.
              </div>
              <div className="content">
                Loopring's objective is to design and engineer the best-in-class
                order-based DEX protocol and make it available for the whole
                industry to improve crypto-holders' overall trading experience.
                We expect our effort will accelerate the adoption of the
                blockchain technology and crypto-currencies.
              </div>
            </div>
            <div className="column is-8">
              <figure className="image covered is-8by6">
                <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" />
              </figure>
            </div>
            <div className="column is-4">
              <figure className="image covered is-1by1">
                <img
                  className="is-rounded"
                  src="https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                />
              </figure>
            </div>
            <div className="column is-4">
              <h2>Loopring is Secure</h2>
              <div className="content">
                The security of user assets is and will remain to be Loopring's
                first priority. Here at Loopring, we believe it's absurd to talk
                about other aspects of a protocol without evaluating its
                security guarantees.
              </div>
              <div className="content">
                The first three versions of the Loopring protocol do not take
                any custody of user assets at all — traders are always in
                possession of their asset. The latest version, Loopring 3.0,
                relies on smart contract to hold assets to be traded. We
                designed the protocol in a way such that users can always claim
                their assets in all circumstances, even when DEX operators are
                anonymously evil.
              </div>
              <div className="content">
                We claim that Loopring offers users the same level of security
                as the underlying Ethereum blockchain — if a feature called
                On-Chain Data Availability, aka OCDA, is turned on. Trading on
                Loopring-based DEXes demands traders no trust in the DEX owners
                or operators, nor the Loopring team. In terms of crypto-trading,
                being trustless will become the new standard of trustworthiness.
              </div>
            </div>
            <div className="column is-4">
              <h2>Loopring's Performance</h2>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionOverview;
