import React from "react";

import "./SectionArticles.scss";
import Post from "../Components/Post.js";

class SectionArticles extends React.Component {
  render() {
    return (
      <section className="section section-articles  has-text-black">
        <div className="tile is-ancestor">
          <div className="tile is-2 is-vertical is-parent">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className="tile is-2 is-vertical is-parent">
            <Post />
          </div>
          <div className="tile is-2 is-vertical is-parent">
            <Post />
          </div>
          <div className="tile is-2 is-vertical is-parent">
            <Post />
          </div>
          <div className="tile is-2 is-vertical is-parent">
            <Post />
          </div>
          <div className="tile is-2 is-vertical is-parent">
            <Post />
          </div>
        </div>
      </section>
    );
  }
}

export default SectionArticles;
