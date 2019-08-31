import React from "react";
import { NavLink } from "react-router-dom";

import englishTranslation from "./i18n/ArticlesSection.en.json";
import chineseTranslation from "./i18n/ArticlesSection.zh.json";
import JsonI18nComponent from "../Components/JsonI18nComponent";

import ArticleGroup from "./ArticleGroup";
import "./ArticlesSection.scss";

class ArticlesSection extends JsonI18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

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
                    {this.state.I.subNavigation.all}
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
                    {this.state.I.subNavigation.loopring30}
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
                    {this.state.I.subNavigation.learning}
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
                    {this.state.I.subNavigation.thoughts}
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
                    {this.state.I.subNavigation.news}
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
