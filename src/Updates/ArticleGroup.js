import React from "react";

import "./ArticleGroup.scss";
import ArticleCard from "./ArticleCard";
import GhostContentAPI from "@tryghost/content-api";
// import ContentLoader, { Facebook } from "react-content-loader";

const api = new GhostContentAPI({
  url: "https://loopring.ghost.io",
  key: "b19ddb3d08ecbf3eed7c737e17",
  version: "v2"
});

class ArticleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: "" };
  }

  componentDidMount() {
    api.posts
      .browse({
        limit: 100,
        include: this.props.fields
      })
      .then(posts => {
        this.setState({ posts: posts });
        // console.log(posts);
      })
      .catch(err => {
        console.error(err);
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <section className="section is-large section-article-group has-background-blue">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.posts.map((post, idx) => (
              <ArticleCard key={idx} post={post} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default ArticleGroup;
