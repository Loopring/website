import React from 'react';

import './LRC.scss';

import Header from './Header.js';
import Footer from './Sections/Footer.js';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class LRC extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="section is-large has-background-white section-lrc-hero">
          <div className="columns is-multiline">
            <div className="column is-12 is-unselectable hero">
              <div className="container">
                <div data-aos="fade-up" className="text">
                  Buy and stake <span className="symbol">LRC</span>
                </div>
                <div data-aos="fade-up" className="text smaller">
                  to capture the growing value of Loopring's ecosystem.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lrc-icon   has-text-black has-background-white">
          <div className="container is-centered has-text-centered">
            <div className="columns is-unselectable is-centered">
              <div
                data-aos="fade-up"
                className="column is-12 has-text-centered"
              >
                <figure className="image lrc-logo">
                  <img
                    draggable="false"
                    className="is-rounded"
                    src="images/lrc.svg"
                  />
                </figure>{' '}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lrc-utilities is-large has-text-white has-background-black">
          <div className="container is-centered has-text-centered">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-10 has-text-centered"
              >
                <h1>Utilities</h1>
              </div>
            </div>

            <div className="columns is-centered is-multiline">
              <div data-aos="fade-up" className="column  is-4 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">#1</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  {' '}
                  <h2>fdfda fldja fdaf </h2>
                  <p>
                    Loopring 1.5 introduced another unique feature called{' '}
                    <i>Dual Authoring</i> to prevent front-running. Each order
                    has a randomly generated DA key-pair — the public key is
                    part of the order; the private key is not part of the order
                    but is sent to the relayer so that the relayer can and must
                    use it to sign rings that include the order.
                  </p>
                  <p>
                    Dual Authoring comes very handy for scenarios where orders
                    can be matched by more than one exchange/relayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lrc-utilities is-large has-text-white has-background-black">
          <div className="container is-centered has-text-centered">
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column  is-4 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">#2</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  {' '}
                  <h2>fdfda fldja fdaf </h2>
                  <p>
                    Loopring 1.5 introduced another unique feature called{' '}
                    <i>Dual Authoring</i> to prevent front-running. Each order
                    has a randomly generated DA key-pair — the public key is
                    part of the order; the private key is not part of the order
                    but is sent to the relayer so that the relayer can and must
                    use it to sign rings that include the order.
                  </p>
                  <p>
                    Dual Authoring comes very handy for scenarios where orders
                    can be matched by more than one exchange/relayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lrc-utilities is-large has-text-white has-background-black">
          <div className="container is-centered has-text-centered">
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column  is-4 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">#3</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  {' '}
                  <h2>fdfda fldja fdaf </h2>
                  <p>
                    Loopring 1.5 introduced another unique feature called{' '}
                    <i>Dual Authoring</i> to prevent front-running. Each order
                    has a randomly generated DA key-pair — the public key is
                    part of the order; the private key is not part of the order
                    but is sent to the relayer so that the relayer can and must
                    use it to sign rings that include the order.
                  </p>
                  <p>
                    Dual Authoring comes very handy for scenarios where orders
                    can be matched by more than one exchange/relayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lrc-utilities is-large has-text-white has-background-black">
          <div className="container is-centered has-text-centered">
            <div className="columns is-centered">
              <div data-aos="fade-up" className="column  is-4 has-text-right">
                <div className="content">
                  <div className="category is-unselectable">#4</div>
                </div>
              </div>

              <div data-aos="fade-up" className="column  is-4 has-text-left">
                <div className="content">
                  {' '}
                  <h2>fdfda fldja fdaf </h2>
                  <p>
                    Loopring 1.5 introduced another unique feature called{' '}
                    <i>Dual Authoring</i> to prevent front-running. Each order
                    has a randomly generated DA key-pair — the public key is
                    part of the order; the private key is not part of the order
                    but is sent to the relayer so that the relayer can and must
                    use it to sign rings that include the order.
                  </p>
                  <p>
                    Dual Authoring comes very handy for scenarios where orders
                    can be matched by more than one exchange/relayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default LRC;
