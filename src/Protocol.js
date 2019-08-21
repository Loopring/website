import React from 'react';

import './Protocol.scss';

import Header from './Header.js';
import Section1 from './Protocol/Section1.js';
import Section2 from './Protocol/Section2.js';
import Section3 from './Protocol/Section3.js';
import Section4 from './Protocol/Section4.js';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Protocol extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    );
  }
}

export default Protocol;
