import React from "react";

import "./Participant.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const Participant = ({ name, org, hash, status }) => {
  let icon = faClock;

  switch (status) {
    case "done":
      icon = faCheckCircle;
      break;
    case "running":
      icon = faSync;
      break;
    default:
  }

  return (
    <div
      className={
        status + " columns  setup-participant  is-centered is-multiline"
      }
    >
      <div className="column is-1 has-text-left ">{name}</div>

      <div className="column is-1 has-text-left  ">{org}</div>

      <div className="column is-8 is-vcentered ">
        <span className="hash">{hash}</span>
      </div>
      <div className="column is-1">
        <FontAwesomeIcon
          className="icon"
          spin={status === "running"}
          icon={icon}
          size="1x"
        />
      </div>
    </div>
  );
};

export default Participant;
