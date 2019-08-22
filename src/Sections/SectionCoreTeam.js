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
        <section className="section protocol-section-3 is-large has-text-black">
          <div className="container">
            <div className="columns ">
              <div className="column is-5 has-text-centered has-text-right-tablet">
                {' '}
                <h1>Core Team</h1>
              </div>
              <div className="column is-7">
                <ul>
                  <li> ⟶ Daniel Wang / Founder & CEO</li>
                  <li> ⟶ Jay Zhou / CMO</li>
                  <li> ⟶ Johnston Chen / COO</li>
                  <li> ⟶ Steve Guo / CTO</li>
                  <li> ⟶ Hoss Ma / Chief Scientist</li>
                  <li> ⟶ Matthew Finestone /BD Director</li>
                  <li> ⟶ Freeman Zhong / Developer</li>
                  <li> ⟶ Brecht Devos / Developer</li>
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
