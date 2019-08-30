import React from "react";

import "./ArticleGroup.scss";
import ArticleCard from "./ArticleCard";
import GhostContentAPI from "@tryghost/content-api";
import InfiniteScroll from "react-infinite-scroller";
// import ContentLoader, { Facebook } from "react-content-loader";

const api = new GhostContentAPI({
  url: "https://loopring.ghost.io",
  key: "b19ddb3d08ecbf3eed7c737e17",
  version: "v2"
});

class ArticleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasMorePosts: true
    };
  }

  loadPosts(page) {
    api.posts
      .browse({
        page: page,
        include: this.props.fields
      })
      .then(posts => {
        const _posts = this.state.posts;
        if (posts.length < 15) {
          this.state.hasMorePosts = false;
        }

        posts.map(post => {
          _posts.push(<ArticleCard key={_posts.length + 1} post={post} />);
        });

        this.setState({ posts: _posts });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const loader = (
      <div key={0} className="loader">
        Loading..
      </div>
    );

    return (
      <section className="section is-large section-article-group has-background-blue">
        <div className="container">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadPosts.bind(this)}
            hasMore={this.state.hasMorePosts}
            loader={loader}
          >
            <div className="columns is-multiline">{this.state.posts}</div>
          </InfiniteScroll>
        </div>
      </section>
    );
  }
}

export default ArticleGroup;
