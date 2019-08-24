import React from 'react';

import './Protocol.scss';

import Header from './Header.js';
import Footer from './Sections/Footer.js';
import SectionLoopringV30 from './Sections/SectionLoopringV30.js';
import SectionThroughput from './Sections/SectionThroughput.js';
import Section3 from './Sections/Section3.js';
import Section4 from './Sections/Section4.js';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Protocol extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionLoopringV30 />
        <SectionThroughput />
        {/* <Section3 />*/}
        {/* <Section4 />*/}
        <Footer />
      </div>
    );
  }
}

export default Protocol;
