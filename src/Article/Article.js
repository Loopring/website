import React from "react";

import "./Article.scss";
import "./Ghost.scss";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

import GhostContentAPI from "@tryghost/content-api";
import Moment from "react-moment";
import "moment-timezone";

const api = new GhostContentAPI({
  url: "https://loopring.ghost.io",
  key: "b19ddb3d08ecbf3eed7c737e17",
  version: "v2"
});

const calendarStrings = {
  lastDay: "[Yesterday] LT",
  sameDay: "[Today] LT",
  nextDay: "[Tomorrow] LT",
  lastWeek: "[last] dddd [at] LT",
  nextWeek: "dddd [at] LT",
  sameElse: "L"
};

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {}, error: "" };
  }

  trimHtml(html) {
    if (html) {
      const idx = html.lastIndexOf("<hr>");
      return html.slice(0, idx) + "</div></div>";
    } else {
      return "";
    }
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    api.posts
      .read({
        slug: params.postId,
        include: "tags"
      })
      .then(post => {
        this.setState({ post: post });
        console.log(post);
      })
      .catch(err => {
        console.error(err);
        this.setState({ error: err });
      });
  }

  render() {
    const {
      match: { params }
    } = this.props;
    const html = this.trimHtml(this.state.post.html);
    const tags = this.state.post.tags ? this.state.post.tags : [];
    const publishedAt = this.state.post.published_at
      ? this.state.post.published_at
      : "";

    const featureImg = this.state.post.feature_image
      ? this.state.post.feature_image
      : "/images/post_hero.png";
    return (
      <div>
        <Header />
        <section className="section section-article-heading has-background-white">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6 has-text-left">
                <h1>{this.state.post.title}</h1>
                <div>
                  {" "}
                  <Moment
                    className="datetime"
                    lparse="YYYY-MM-DD HH:mm"
                    calendar={calendarStrings}
                  >
                    {publishedAt}
                  </Moment>
                  {tags.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-article-hero">
          <figure data-aos="fade-zoom-in" className="image">
            {<img draggable="false" src={featureImg} />}
          </figure>
        </section>

        <section className="section is-centered section-article-body has-background-white">
          <div className="inner content">
            <article className="post-full post tag-shuangzhoubao tag-luyin ">
              <section className="post-full-content">
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                ></div>
              </section>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Article;
