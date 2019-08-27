import React from 'react';

import './Protocol.scss';

import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

import PerformanceSection from './PerformanceSection.js';
import DesignSection from './DesignSection.js';
import ConfigurationSection from './ConfigurationSection.js';

// import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

class Protocol extends React.Component {
  render() {
    return (
      <div className="page-protocol">
        <Header />
        <PerformanceSection />
        <DesignSection />
        <ConfigurationSection />
        <Footer />
      </div>
    );
  }
}

export default Protocol;
