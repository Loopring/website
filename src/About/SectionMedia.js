import React from "react";
import "./SectionMedia.scss";

class SectionMedia extends React.Component {
  render() {
    return (
      <section className="section section-media is-large has-text-black">
        <div className="container">
          <div className="columns is-mobile is-centered  is-vcentered is-multiline">
            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://defiprime.com/images/logo.svg"
                />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image">
                <img draggable="false" src="images/coinswitch.png" />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://cdn.ttgtmedia.com/rms/ux/responsive/img/cw_logo.png"
                />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://dl.airtable.com/AtMkgs9PQgWel7a5U2eg_large_Messari_twitter_share_logo.png"
                />
              </figure>
            </div>
            <div className="column  is-narrow">
              <figure className="image">
                <img
                  draggable="false"
                  src="https://cdn.ethnews.com/images/content/ETH-News-Logo-Black.png"
                />
              </figure>
            </div>

            <div className="column  is-narrow">
              <figure className="image ">
                <img
                  draggable="false"
                  src="https://theme.zdassets.com/theme_assets/2178282/c55747dcb2ca7170dae4f7261e2dcc72d80e18d3.png"
                />
              </figure>
            </div>

            {/*          <div className="column  is-narrow">
       <figure className="image ">
  <img  draggable="false" src="https://cdn.freebiesupply.com/logos/large/2x/coinranking-logo-svg-vector.svg"/>
</figure>
</div>
*/}

            <div className="column  is-narrow">
              <figure className="image ">
                <img
                  draggable="false"
                  src="https://miro.medium.com/max/1200/1*p-klOrcN4pln3VOjiUJqaQ.png"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionMedia;
