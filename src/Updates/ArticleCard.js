import React from "react";

import "./ArticleCard.scss";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const divStyle = {
      backgroundImage: "url(" + this.props.post.feature_image + ")"
    };

    return (
      <div className="column article-card is-4">
        <div className="card">
          <div className="card-image" style={divStyle}>
            <figure className="is-unselectable image is-16by9"></figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-12">{this.props.post.title}</p>
                <p className="subtitle is-6" dateTime="2016-1-1">
                  {this.props.post.published_at}
                </p>
              </div>
            </div>

            <div className="content">
              {this.props.post.custom_excerpt}

              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
