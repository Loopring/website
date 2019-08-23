import React from 'react';
import './SectionLoopringHistory.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class SectionLoopringHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section protocol-section-1 is-large has-text-black has-background-blue">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8 has-text-left">
              <h1>A brief history of Loopring</h1>
              <p>We have released 4 major versions of the Loopring protocol.</p>
            </div>
          </div>
          <div className="columns">
            <div className="column version-heading is-4 is-offset-2 has-text-left">
              <div className="content">
                <h2> Loopring 1.0</h2>

                <p>
                  Loopring 1.0 introduced the <i>Ring-Matching</i> concept — in
                  one trade, up to 12 orders can circularly swap crypto-assets
                  in the form of <i>ring</i>s. This feature is unique and brings
                  the potential for improved price discovery and higher trading
                  volume. Our project name "Loopring" actually comes after this
                  feature.
                </p>
                <p>
                  With 1.0, orders are managed and matched off-chain. The
                  protocol's smart contracts verify order signatures, trading
                  prices, and settlement amounts on-chain and perform token
                  transfers for each order accordingly. Because of the off-chain
                  order management and matching, the performance of Loopring 1.0
                  is better than that of EtherDelta and the like.
                </p>

                <h2> Loopring 1.5</h2>

                <p>
                  Loopring 1.5 introduced another unique feature called{' '}
                  <i>Dual Authoring</i> to prevent front-running. Each order has
                  a randomly generated DA key-pair — the public key is part of
                  the order; the private key is not part of the order but is
                  sent to the relayer so that the relayer can and must use it to
                  sign rings that include the order.
                </p>
                <p>
                  Dual Authoring effectively prevents pending settlements and
                  their orders from being stolen by middlemen in the Ethereum
                  network, as those middlemen have no access to the orders' DA
                  private keys.
                </p>
                <p>
                  Dual Authoring comes very handy for scenarios where orders can
                  be matched by more than one exchanges/relayers.
                </p>
              </div>
            </div>
            <div className="column version-heading is-4  has-text-left">
              <div className="content">
                <h2> Loopring 2.0</h2>

                <p>
                  Loopring 1.0 introduced the <i>Ring-Matching</i> concept — in
                  one trade, up to 12 orders can circularly swap crypto-assets
                  in the form of <i>ring</i>s. This feature is unique and brings
                  the potential for improved price discovery and higher trading
                  volume. Our project name "Loopring" actually comes after this
                  feature.
                </p>
                <p>
                  With 1.0, orders are managed and matched off-chain. The
                  protocol's smart contracts verify order signatures, trading
                  prices, and settlement amounts on-chain and perform token
                  transfers for each order accordingly. Because of the off-chain
                  order management and matching, the performance of Loopring 1.0
                  is better than that of EtherDelta and the like.
                </p>

                <h2> The Most Promising Loopring 3.0-beta3</h2>

                <p>
                  Loopring 1.5 introduced another unique feature called{' '}
                  <i>Dual Authoring</i> to prevent front-running. Each order has
                  a randomly generated DA key-pair — the public key is part of
                  the order; the private key is not part of the order but is
                  sent to the relayer so that the relayer can and must use it to
                  sign rings that include the order.
                </p>
                <p>
                  Dual Authoring effectively prevents pending settlements and
                  their orders from being stolen by middlemen in the Ethereum
                  network, as those middlemen have no access to the orders' DA
                  private keys.
                </p>
                <p>
                  Dual Authoring comes very handy for scenarios where orders can
                  be matched by more than one exchanges/relayers.
                </p>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-2 is-offset-2 has-text-left">
              ➜ <span className="obsoleted">Loopring 1.0 (obsoleted)</span>{' '}
              ········
            </div>
            <div className="column is-6 has-text-left">
              <span className="tag highlight">Ring-Matching</span>
              <span className="tag">Order-Sharing</span>
              <span className="tag">Noncustodial</span>
            </div>

            <div className="column is-2 is-offset-2 has-text-left">
              ➜ <span className="obsoleted">Loopring 1.5 (obsoleted)</span>{' '}
              ········
            </div>
            <div className="column is-6 has-text-left">
              <span className="tag">Ring-Matching</span>
              <span className="tag ">Order-Sharing</span>
              <span className="tag">Noncustodial</span>
              <span className="tag highlight">Dual-Authoring</span>
            </div>

            <div className="column is-2 is-offset-2 has-text-left">
              ➜ <span className="obsoleted">Loopring 2.0 (obsoleted)</span>{' '}
              ········
            </div>
            <div className="column is-6 has-text-left">
              <span className="tag">Ring-Matching</span>
              <span className="tag">Order-Sharing</span>
              <span className="tag">Noncustodial</span>
              <span className="tag">Dual-Authoring</span>
              <span className="tag highlight">Any-Token-As-Fee</span>
              <span className="tag highlight">LRC-Burning</span>
            </div>

            <div className="column is-2 is-offset-2 has-text-left">
              ➜ <span className="">Loopring 3.0</span>{' '}
              ···························
            </div>
            <div className="column is-6 has-text-left">
              <span className="tag obsoleted">Ring-Matching</span>
              <span className="tag obsoleted">Order-Sharing</span>
              <span className="tag">Noncustodial</span>
              <span className="tag">Dual-Authoring</span>
              <span className="tag obsoleted">Any-Token-as-Fee</span>
              <span className="tag">LRC-Burning</span>
              <span className="tag highlight">Trade-Token-As-Fee</span>
              <span className="tag highlight">zkRollup</span>
              <span className="tag highlight">LRC-Staking</span>
              <span className="tag highlight">High-Performance</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionLoopringHistory;
