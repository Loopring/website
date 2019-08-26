import React from 'react';
import './SectionLoopringV30.scss';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class SectionLoopringV30 extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section is-large section-opensource  has-background-grey">
        <div className="fixed-label is-hidden-mobile">100% open-source</div>
        <div className="container">
          <div className="columns is-centered is-multiline">
            <div data-aos="fade-up" className="column is-12  has-text-centered">
              <h1>Design and Building Blocks</h1>
            </div>
            <div data-aos="fade-up" className="column is-5">
              <h2>Design Doc</h2>
              <div className="content">
                There is no better source than our Design Doc for you to learn
                about all the ideas behind Loopring 3.0.
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

            <div data-aos="fade-up" className="column is-5">
              <h2>Resources</h2>
              <ul className="links">
                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                  >
                    Vitalik's post on zkRollup
                    ···············································
                    <span className="symboled"> ◎</span>
                  </a>
                </li>

                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href="https://www.youtube.com/watch?v=mOm47gBMfg8"
                  >
                    Vitalik's TechTalk on
                    zkRollup··································
                    <span className="symboled"> ◎</span>
                  </a>
                </li>
                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                  >
                    LibSNARK
                    ································································
                    <span className="symboled"> ◱</span>
                  </a>
                </li>

                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                  >
                    EthSNARK ··················································
                    <span className="symboled"> ◱</span>
                  </a>
                </li>

                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                  >
                    Poseidon Hashing
                    ·················································
                    <span className="symboled"> ◱</span>
                  </a>
                </li>
                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                  >
                    Quad-Merkle Tree
                    ···························································
                    <span className="symboled"> ◱</span>
                  </a>
                </li>

                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href=""
                  >
                    Loopring 3.0 smart contracts··············the on-chain part{' '}
                    <span className="symboled">⟁</span>
                  </a>
                </li>
                <li>
                  {' '}
                  ➜{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="highlight"
                    href=""
                  >
                    Loopring 3.0 ZKP circuits····················the off-chain
                    part <span className="symboled"> ⧉</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionLoopringV30;
