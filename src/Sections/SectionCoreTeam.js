import React from 'react';
import './SectionCoreTeam.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class SectionCoreTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="section section-coreteam is-large has-text-black">
          <div className="container">
            <div className="columns ">
              <div className="column is-5 has-text-centered has-text-right-tablet">
                {' '}
                <h1>Core Team</h1>
              </div>
              <div className="column is-7">
                <ul>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:daniel@loopring.org">Daniel Wang</a> /
                    Founder & CEO
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:jay@loopring.org">Jay Zhou</a> / CMO
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:johnston@loopring.org">Johnston Chen</a> /
                    COO
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:steve@loopring.org">Steve Guo</a> / CTO
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:hoss@loopring.org">Hoss Ma</a> / Chief
                    Scientist
                  </li>
                  <li>
                    {' '}
                    ⟶{' '}
                    <a href="mailto:matthew@loopring.org">
                      Matthew Finestone
                    </a>{' '}
                    /BD Director
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:kongliang@loopring.org">
                      Freeman Zhong
                    </a>{' '}
                    / Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:brecht@loopring.org">Brecht Devos</a> /
                    Developer
                  </li>
                  <li> ⟶ Hongyu Yu / Developer</li>
                  <li> ⟶ Xiaolu Wu / Developer</li>
                  <li> ⟶ Eric Yang / Developer</li>
                  <li> ⟶ Yadong Li / Developer</li>
                  <li> ⟶ Yongfeng Du / Developer</li>
                  <li> ⟶ Chen Wang / Developer</li>
                  <li> ⟶ Yanyan Lai / Developer</li>
                  <li> ⟶ Yue Wang / Developer</li>
                  <li> ⟶ Sheng Chen / Developer</li>
                  <li> ⟶ Ruby Qi / Developer</li>
                  <li> ⟶ Leila Lin / Facility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="is-medium">
          <figure className="image covered">
            <img className="team-picture" src="images/team.jpeg" />
          </figure>
        </section>
      </div>
    );
  }
}

export default SectionCoreTeam;
