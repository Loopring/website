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
      <section className="section is-large parallax">
        <div className="under"></div>
      </section>
    );
  }
}

export default SectionProjectHero;
