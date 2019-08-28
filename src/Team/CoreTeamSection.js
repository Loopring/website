import React from 'react';
import './CoreTeamSection.scss';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class CoreTeamSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    return (
      <section className="section section-coreteam is-large  has-background-grey">
        <div className="container">
          <div className="columns ">
            <div
              data-aos="fade-up"
              className="column is-5 has-text-centered has-text-right-tablet"
            >
              <h1>Core Team</h1>
            </div>
            <div data-aos="fade-up" className="column is-7">
              <ul>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:daniel@loopring.org"
                  >
                    Daniel Wang
                  </a>{' '}
                  / Founder & CEO
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:jay@loopring.org"
                  >
                    Jay Zhou
                  </a>{' '}
                  / CMO
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:johnston@loopring.org"
                  >
                    Johnston Chen
                  </a>{' '}
                  / COO
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:steve@loopring.org"
                  >
                    Steve Guo
                  </a>{' '}
                  / CTO
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:hoss@loopring.org"
                  >
                    Hoss Ma
                  </a>{' '}
                  / Chief Scientist
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:matthew@loopring.org"
                  >
                    Matthew Finestone
                  </a>{' '}
                  /BD Director
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:kongliang@loopring.org"
                  >
                    Freeman Zhong
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:brecht@loopring.org"
                  >
                    Brecht Devos
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:hongyu@loopring.org"
                  >
                    Hongyu Yu
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:xiaolu@loopring.org"
                  >
                    Xiaolu Wu
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:eric@loopring.org"
                  >
                    Eric Yang
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yadong@loopring.org"
                  >
                    Yadong Li
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yongfeng@loopring.org"
                  >
                    Yongfeng Du
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:chen@loopring.org"
                  >
                    Chen Wang
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yanyan@loopring.org"
                  >
                    Yanyan Lai
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:yue@loopring.org"
                  >
                    Yue Wang
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:sheng@loopring.org"
                  >
                    Sheng Chen
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:ruby@loopring.org"
                  >
                    Ruby Qi
                  </a>{' '}
                  / Developer
                </li>
                <li>
                  <a
                    className="highlight has-leading-thin-arrow"
                    href="mailto:leila@loopring.org"
                  >
                    Leila Lin
                  </a>{' '}
                  / HR & Administration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoreTeamSection;
