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
                  <li>
                    {' '}
                    ⟶ <a href="mailto:hongyu@loopring.org">Hongyu Yu</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:xiaolu@loopring.org">Xiaolu Wu</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:eric@loopring.org">Eric Yang</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:yadong@loopring.org">Yadong Li</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:yongfeng@loopring.org">Yongfeng Du</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:chen@loopring.org">Chen Wang</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:yanyan@loopring.org">Yanyan Lai</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:yue@loopring.org">Yue Wang</a> / Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:sheng@loopring.org">Sheng Chen</a> /
                    Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:ruby@loopring.org">Ruby Qi</a> / Developer
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:leila@loopring.org">Leila Lin</a> / HR &
                    Administration
                  </li>
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
