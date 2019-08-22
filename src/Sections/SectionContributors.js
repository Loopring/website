import React from 'react';
import './SectionContributors.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

const API = './hacks_en.json';

class SectionContributors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="section section-contributors is-medium has-text-black has-background-blue">
          <div className="container">
            <div className="columns ">
              <div className="column is-6 has-text-centered has-text-right-tablet">
                {' '}
                <h1>Advisors</h1>
              </div>
              <div className="column is-6">
                <ul>
                  <li> ⟶ Xuefeng Li / CTO of Zhongan Technology</li>
                  <li> ⟶ Hongfei DA / Founder of NEO and Ontology</li>
                  <li> ⟶ Hitters Xu / Founder of Nebulas</li>
                  <li>
                    {' '}
                    ⟶ Yuhuang Guo / Council, Chain Blockchain Application
                    Research Center
                  </li>
                  <li> ⟶ Terence Lam / CEO, Loopnest Blockchain Accelerator</li>
                  <li>
                    {' '}
                    ⟶ Alex Cheng / CTO of Vipkid, Senior VP of Baidu, Director
                    at Google
                  </li>
                  <li> ⟶ Yin Cao / Founder, Energy Blockchain Lab</li>
                  <li> ⟶ Xiaohu Guo / CS Professor, University of Texas</li>
                  <li> ⟶ Yipeng Guo / President, Guangzhou Development Fund</li>
                  <li> ⟶ Huaxia Xia / Chief Scientist, Meituan Group</li>
                  <li> ⟶ Mingchen Zhang / Partner, Redpoint Ventures</li>
                  <li> ⟶ Shuo Bai / Supervisor of ChinaLedger</li>
                  <li> ⟶ Steven Li / Founder, Univalue Associates</li>
                  <li> ⟶ Yu Guo / Founder, SECBIT Labs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns ">
              <div className="column is-3 has-text-centered has-text-right-tablet">
                {' '}
                <h1>Exctra Hands</h1>
              </div>
              <div className="column is-9">
                <ul>
                  <li> ⟶ Bella Long / PR Director</li>
                  <li> ⟶ Zongbao Hou / Developer</li>
                  <li> ⟶ Kun Fu / Developer</li>
                  <li> ⟶ Tao Li / Developer</li>
                  <li> ⟶ Weichao Li / Developer</li>
                  <li> ⟶ Shuhong Chang / Designer</li>
                  <li>
                    {' '}
                    ⟶ <a href="mailto:nataligonina@gmail.com">
                      Натали Игонина
                    </a>{' '}
                    / Translation
                  </li>
                  <li> ⟶ Jinchen Hou / Community Manager</li>
                  <li>
                    {' '}
                    ⟶ <a href="https://github.com/HarryR">HarryR</a> / ethSnarks
                  </li>
                  <li>
                    {' '}
                    ⟶{' '}
                    <a href="https://github.com/barryWhiteHat">
                      BarryWhitehat
                    </a>{' '}
                    / zkRollup
                  </li>
                  <li>
                    {' '}
                    ⟶{' '}
                    <a href="https://github.com/khovratovich">
                      Dmitry Khovratovich
                    </a>{' '}
                    / Poseidon Hash Function
                  </li>
                  <li>
                    {' '}
                    ⟶ <a href="https://matter-labs.io/">Matter Labs</a> / SNARK
                    Batch Proof Verification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionContributors;
