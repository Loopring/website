import React from 'react';

import './Protocol.scss';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import SectionLoopringV30 from './Sections/SectionLoopringV30.js';
import SectionPerformance from './Sections/SectionPerformance.js';
import SectionProtocolParams from './Sections/SectionProtocolParams.js';
import Section3 from './Sections/Section3.js';
import Section4 from './Sections/Section4.js';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Protocol extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionPerformance />
        <SectionLoopringV30 />
        <SectionProtocolParams />
        {/* <Section3 />*/}
        {/* <Section4 />*/}
        <Footer />
      </div>
    );
  }
}

export default Protocol;
