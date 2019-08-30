import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import SectionUpdatesHero from "./HeroSection";
import ArticlesSection from "./ArticlesSection";

import GhostContentAPI from "@tryghost/content-api";

import "./Updates.scss";

const API =
  "https://loopring.ghost.io/ghost/api/v2/content/posts/?key=b19ddb3d08ecbf3eed7c737e17&page=1&fields=title,url,published_at,custom_excerpt,featured,feature_image";

class Updates extends React.Component {
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
