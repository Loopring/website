import React from "react";

import DarkHeader from "../Components/DarkHeader";
import Footer from "../Components/Footer";

import CoreTeamSection from "./CoreTeamSection";
import GroupPhotoSection from "./GroupPhotoSection";
import ContributorsSection from "./ContributorsSection";
import CeremonySection from "./CeremonySection";

import "./Team.scss";

class Team extends React.Component {
  render() {
    return (
      <div className="page-team">
        <DarkHeader />
        <CoreTeamSection />
        <GroupPhotoSection />
        <ContributorsSection />
        <CeremonySection />
        <Footer />
      </div>
    );
  }
}

export default Team;
