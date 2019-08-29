import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import CoreTeamSection from "./CoreTeamSection";
import GroupPhotoSection from "./GroupPhotoSection";
import ContributorsSection from "./ContributorsSection";

import "./Team.scss";

class Team extends React.Component {
  render() {
    return (
      <div className="page-team">
        <Header />
        <CoreTeamSection />
        <GroupPhotoSection />
        <ContributorsSection />
        <Footer />
      </div>
    );
  }
}

export default Team;
