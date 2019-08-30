import React from "react";

import "./ArticlesSection.scss";
import ArticleGroup from "./ArticleGroup";

class ArticlesSection extends React.Component {
  render() {
    return (
      <div className="article-section">
        <ArticleGroup fields="title,url,published_at,custom_excerpt,featured,feature_image" />
      </div>
    );
  }
}

export default ArticlesSection;
