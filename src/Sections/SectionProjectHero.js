import React from 'react';
import './SectionProjectHero.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class SectionProjectHero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section section-project-hero is-large">
        <div className="backdrop"></div>

        <div className="text">
          <svg>
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                <text id="title" x="50%" y="30%" dy="1.58em">
                  LOOPRING
                </text>
                <text id="subtitle" x="50%" y="35%" dy="9.8em">
                  A High-Performance Ethereum DEX Protocol
                </text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
      </section>
    );
  }
}

export default SectionProjectHero;
