import React from 'react';
import './Section1.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class Section1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section protocol-section-1 is-large has-text-black">
        <div className="container">
          <div className="columns"></div>
        </div>
      </section>
    );
  }
}

export default Section1;
