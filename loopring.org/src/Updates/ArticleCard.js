import React from "react";

import Moment from "react-moment";
import "moment-timezone";

import "./ArticleCard.scss";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const divStyle = {
      backgroundImage: "url(" + this.props.post.feature_image + ")"
    };

    const calendarStrings = {
      lastDay: "[Yesterday] LT",
      sameDay: "[Today] LT",
      nextDay: "[Tomorrow] LT",
      lastWeek: "[last] dddd [at] LT",
      nextWeek: "dddd [at] LT",
      sameElse: "L"
    };

    const url = "/#/post/" + this.props.post.slug;

    return (
      <div className="column article-card is-4">
        <div className="card-wrapper">
          <a href={url}>
            <div className="card">
              <div className="card-image" style={divStyle}>
                <figure className="is-unselectable image is-16by9"></figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-12">{this.props.post.title}</p>
                    <p className="subtitle is-6" dateTime="2016-1-1">
                      <Moment
                        lparse="YYYY-MM-DD HH:mm"
                        calendar={calendarStrings}
                      >
                        {this.props.post.published_at}
                      </Moment>
                    </p>
                  </div>
                </div>

                <div className="content">
                  {this.props.post.custom_excerpt}

                  <br />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
