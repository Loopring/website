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

  getTag() {
    const tag = this.state.I.groupTagMapping[this.props.group];
    if (tag) {
      return tag;
    } else {
      console.error("no tag match");
      return "";
    }
  }

  render() {
    return (
      <div>
        <section className="section has-text-centered is-centered section-sub-nav has-background-black">
          <div className="columns is-centered has-text-centered">
            <div className="column is-12  is-centered has-text-dentered">
              <ul>
                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/blog"
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
                    to="/blog/update"
                  >
                    {this.state.I.subNavigation.biweekly}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/blog/loopring3.0"
                  >
                    {this.state.I.subNavigation.loopring30}
                  </NavLink>
                </li>
                {!this.isChinese() ? (
                  <li>
                    {" "}
                    <NavLink
                      exact
                      activeClassName="active"
                      className="navbar-item"
                      to="/blog/learning"
                    >
                      {this.state.I.subNavigation.learning}
                    </NavLink>
                  </li>
                ) : (
                  <span />
                )}

                <li>
                  {" "}
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-item"
                    to="/blog/thoughts"
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
                    to="/blog/news"
                  >
                    {this.state.I.subNavigation.news}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <ArticleGroup
          key={this.getTag() + "_article_group"}
          tag={this.getTag()}
        />
      </div>
    );
  }
}

export default ArticlesSection;
