import React from 'react';
import './SectionThroughput.scss';

import '../../node_modules/aos/dist/aos.css';

import Odometer from 'react-odometerjs';
import AOS from 'aos';

class SectionThroughput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      throughput: '100',
    };
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  componentDidMount() {
    this.timer = setTimeout((data) => this.setState({throughput: '350'}), 50);
  }

  render() {
    return (
      <section className="section section-throughput is-large has-text-black has-background-blue">
        <div className="container">
          <div className="columns is-centered is-multiline">
            <div
              data-aos="fade-up"
              className="column is-12 is-centered has-text-centered"
            >
              <h1>High Throughput</h1>
              <Odometer value={this.state.throughput} />
            </div>
            <div
              data-aos="fade-up"
              className="column is-12 is-centered has-text-centered"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th className="first"></th>
                    <th>TPS w/ OCDA</th>
                    <th>TPS w/o OCDA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="first">Currently</td>
                    <td>
                      <span className="highlighted">350</span>
                    </td>
                    <td>
                      <span className="highlighted">6,900</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="first">Post Istanbul Fork</td>
                    <td>
                      <span className="highlighted">1,400</span>
                    </td>
                    <td>
                      <span className="highlighted">10,500</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <ul className="footnote">
                <li>
                  <i>● TPS = trades per seconds</i>
                </li>
                <li>
                  <i>● OCDA = on-chain data availability</i>
                </li>
              </ul>
            </div>
          </div>

          <div className="columns is-centered is-multiline">
            <div
              data-aos="fade-up"
              className="column bordered is-4 has-text-centered"
            >
              afaa
            </div>
            <div
              data-aos="fade-up"
              className="column bordered is-4 has-text-centered"
            >
              aaa
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionThroughput;
