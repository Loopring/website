import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import SectionUpdatesHero from "./HeroSection";
import ArticlesSection from "./ArticlesSection";

import GhostContentAPI from "@tryghost/content-api";

import "./Updates.scss";

const api = new GhostContentAPI({
  url: "https://loopring.ghost.io",
  key: "b19ddb3d08ecbf3eed7c737e17",
  version: "v2"
});

class Updates extends React.Component {
  componentDidMount() {
    api.posts
      .browse({
        limit: 5,
        include: "title,url,published_at,custom_excerpt,featured,feature_image"
      })
      .then(posts => {
        posts.forEach(post => {
          console.log(post);
        });
      })
      .catch(err => {
        console.error(err);
      });

    // fetch(API)
    //   .then(response => {
    //     return response.text();
    //   })
    //   .then(text =>
    //     ReactDOM.render(
    //       <ReactMarkdown source={text} />,
    //       document.getElementById("markdown")
    //     )
    //   );
  }

  render() {
    return (
      <div className="page-updates">
        <Header />
        <SectionUpdatesHero />
        <ArticlesSection />
        <Footer />
      </div>
    );
  }
}

export default Updates;
