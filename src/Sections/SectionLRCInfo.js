import React from 'react';

import './SectionLRCInfo.scss';

import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

const API = './exchanges.json';

class SectionLRCInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      exchanges: [],
    };
    AOS.init();
  }

  componentDidMount() {
    fetch(API)
        .then((response) => response.json())
        .then((data) => this.setState({exchanges: data.exchanges}));
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <section className="section section-lrc-info is-large has-background-grey">
        <div className="container is-centered has-text-centered">
          <div className="columns is-centered">
            <div data-aos="fade-up" className="column is-10 has-text-centered">
              <h1>Trade LRC</h1>
            </div>
          </div>

          <div className="columns is-centered is-multiline">
            <div
              data-aos="fade-up"
              className="column column-exchange  is-5 has-text-left"
            >
              <div className="content">
                <h2>Token Information</h2>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="column column-exchange  is-5 has-text-left"
            >
              <div className="content">
                <h2>Exchanges</h2>
                <ul>
                  {this.state.exchanges.map((exchange) => (
                    <li>
                      ⟶{' '}
                      <a target="_blank" href={exchange.url}>
                        {exchange.name} /
                        {exchange.pairs.map((token) => (
                          <span className="tag">LRC/{token}</span>
                        ))}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionLRCInfo;
