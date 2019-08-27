import React from 'react';
import './SectionProjectHero.scss';

class SectionProjectHero extends React.Component {
  render() {
    return (
      <section className="section section-project-hero is-large">
        <div className="backdrop"></div>

        <div className="text">
          <svg>
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                <text
                  className="has-text-din"
                  id="title"
                  x="50%"
                  y="35%"
                  dy="1.58em"
                >
                  LOOPRING
                </text>
                <text id="subtitle" x="50%" y="40%" dy="9.8em">
                  High-Performance Ethereum DEX Protocol
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
