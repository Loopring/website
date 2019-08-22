import React from 'react';
import './SectionThroughput.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class SectionThroughput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section section-throughput is-large has-text-black has-background-blue">
        <div className="container">
          <div className="columns is-centered is-multiline">
            <div className="column is-12 is-centered has-text-centered">
              <h1>3.0 Throughput</h1>
            </div>
            <div className="column is-12 is-centered has-text-centered">
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
                      <span className="h">350</span>
                    </td>
                    <td>
                      <span className="h">6,900</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="first">Post Istanbul Fork</td>
                    <td>
                      <span className="h">1,400</span>
                    </td>
                    <td>
                      <span className="h">10,500</span>
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
            <div className="column bordered is-4 has-text-centered">afaa</div>
            <div className="column bordered is-4 has-text-centered">aaa</div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionThroughput;
