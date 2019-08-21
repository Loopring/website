import React from 'react';
import './Section1.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class Section1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section protocol-section-1 is-large has-text-black">
        <div className="container">
          <div className="columns"></div>

          <div className="column is-6">
            ➜ <span className="obsoleted">Loopring 1.0 (obsoleted)</span>{' '}
            ····························
          </div>
          <div className="column is-6">
            <span className="tag highlight">Ring-Matching</span>
            <span className="tag">Order-Sharing</span>
            <span className="tag">Noncustodial</span>
          </div>

          <div className="column is-6">
            ➜ <span className="obsoleted">Loopring 1.5 (obsoleted)</span>{' '}
            ····························
          </div>
          <div className="column is-6">
            <span className="tag">Ring-Matching</span>
            <span className="tag ">Order-Sharing</span>
            <span className="tag">Noncustodial</span>
            <span className="tag highlight">Dual-Authoring</span>
          </div>

          <div className="column is-6">
            ➜ <span className="obsoleted">Loopring 2.0 (obsoleted)</span>{' '}
            ····························
          </div>
          <div className="column is-6">
            <span className="tag">Ring-Matching</span>
            <span className="tag">Order-Sharing</span>
            <span className="tag">Noncustodial</span>
            <span className="tag">Dual-Authoring</span>
            <span className="tag highlight">Any-Token-As-Fee</span>
            <span className="tag highlight">LRC-Burning</span>
          </div>

          <div className="column is-6">
            ➜ <span className="obsoleted">Loopring 3.0</span>{' '}
            ····························
          </div>
          <div className="column is-6">
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
      </section>
    );
  }
}

export default Section1;
