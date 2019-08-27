import React from 'react';
import './ContributorsSection.scss';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRadiationAlt} from '@fortawesome/free-solid-svg-icons';

class ContributorsSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <section className="section section-contributors is-medium  has-background-blue">
          <div className="container">
            <div className="columns ">
              <div
                data-aos="fade-up"
                className="column is-6 has-text-centered has-text-right-tablet"
              >
                {' '}
                <h1>Advisors</h1>
              </div>
              <div data-aos="fade-up" className="column is-6">
                <ul>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Xuefeng Li
                    </a>{' '}
                    / CTO of Zhongan Technology
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Hongfei Da
                    </a>{' '}
                    / Founder of NEO and Ontology
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Hitters Xu
                    </a>{' '}
                    / Founder of Nebulas
                  </li>
                  <li>
                    {' '}
                    ⟶ Yuhang Guo / Council, Chain Blockchain Application
                    Research Center
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Terence Lam
                    </a>{' '}
                    / CEO, Loopnest Blockchain Accelerator
                  </li>
                  <li>
                    {' '}
                    ⟶ Alex Cheng / CTO of Vipkid, Senior VP of Baidu, Director
                    at Google
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Yin Cao
                    </a>{' '}
                    / Founder, Energy Blockchain Lab
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Xiaohu Guo
                    </a>{' '}
                    / CS Professor, University of Texas
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Yipeng Guo
                    </a>{' '}
                    / President, Guangzhou Development Fund
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Huaxia Xia
                    </a>{' '}
                    / Chief Scientist, Meituan Group
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Mingchen Zhang
                    </a>{' '}
                    / Partner, Redpoint Ventures
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Shuo Bai
                    </a>{' '}
                    / Supervisor of ChinaLedger
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Steven Li
                    </a>{' '}
                    / Founder, Univalue Associates
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Yu Guo
                    </a>{' '}
                    / Founder, SECBIT Labs
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns ">
              <div
                data-aos="fade-up"
                className="column is-3 has-text-centered has-text-right-tablet"
              >
                {' '}
                <h1>Contributors</h1>
              </div>
              <div data-aos="fade-up" className="column is-9">
                <ul>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Bella Long
                    </a>{' '}
                    / PR Director
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Zongbao Hou
                    </a>{' '}
                    / Developer
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Kun Fu
                    </a>{' '}
                    / Developer
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Tao Li
                    </a>{' '}
                    / Developer
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Hui Shao
                    </a>{' '}
                    / Developer
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Weichao Li
                    </a>{' '}
                    / Developer
                  </li>
                  <li>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href="https://github.com/BenjaminPrice"
                    >
                      Benjamin Price
                    </a>{' '}
                    / Developer
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Shuhong Chang
                    </a>{' '}
                    / Designer
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Jinchen Hou
                    </a>{' '}
                    / Community
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Kai Zeng
                    </a>{' '}
                    / Community, Marketing, Operation
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Dawei Li
                    </a>{' '}
                    / Community
                  </li>
                  <li>
                    <a disabled className="highlight has-leading-thin-arrow">
                      Jie Liu
                    </a>{' '}
                    / Operation
                  </li>
                  <li>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href="mailto:nataligonina@gmail.com"
                    >
                      Натали Игонина
                    </a>{' '}
                    / Translation
                  </li>

                  <li>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href="https://github.com/HarryR"
                    >
                      HarryR
                    </a>{' '}
                    / ethSnarks
                  </li>
                  <li>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href="https://github.com/barryWhiteHat"
                    >
                      BarryWhitehat
                    </a>{' '}
                    / zkRollup
                  </li>
                  <li>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href="https://github.com/khovratovich"
                    >
                      Dmitry Khovratovich
                    </a>{' '}
                    / Poseidon Hash Function
                  </li>
                  <li>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href="https://matter-labs.io/"
                    >
                      Matter Labs
                    </a>{' '}
                    / SNARK Batch Proof Verification
                  </li>
                  <li>
                    <a
                      className="highlight has-leading-thin-arrow"
                      href="https://secbit.io/"
                    >
                      SECBIT Labs
                    </a>{' '}
                    / Formal Verification & Auditing
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

export default ContributorsSection;
