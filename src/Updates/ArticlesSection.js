import React from "react";
import { NavLink } from "react-router-dom";

import "./ArticlesSection.scss";
import ArticleGroup from "./ArticleGroup";

class ArticlesSection extends React.Component {
  render() {
    console.log("CAT: ", this.props.tag);

    let tag = this.props.tag;
    if (tag === "updates") {
      tag = "zhou-bao";
    } else if (tag === "version3.0") {
      tag = "Version3.0";
    } else if (tag === "learning") {
      tag = "learning";
    } else if (tag === "thoughts") {
      tag = "thoughts";
    } else if (tag === "news") {
      tag = "news";
    }

    console.log("CAT2: " + tag);

    return (
      <div>
        <section className="section  section-hero-image" />

        <section className="section has-text-centered is-centered section-sub-nav has-background-blue">
          <div className="columns is-centered has-text-centered">
            <div className="column is-12  is-centered has-text-dentered">
              <ul>
                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/updates"
                  >
                    All
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/updates/3.0"
                  >
                    Loopring 3.0
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/updates/learning"
                  >
                    Learning Series
                  </NavLink>
                </li>

                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/updates/thoughts"
                  >
                    Thoughts
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/updates/news"
                  >
                    News
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="article-section">
          <ArticleGroup tag={tag} />
        </div>
      </div>
    );
  }
}

export default ArticlesSection;
