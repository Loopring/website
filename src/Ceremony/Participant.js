import React, { useState, useEffect } from "react";

import "./Participant.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

class Participant extends React.Component {
  randomHash() {
    const HASH_SIZE = 66;
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const charactersLength = characters.length;
    for (let i = 0; i < HASH_SIZE; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  constructor(props) {
    super(props);
    this.state = {
      hash: this.props.hash,
      isRunning: this.props.status === "running"
    };

    if (this.state.isRunning) {
      this.refresh = setInterval(() => {
        this.setState({ hash: this.randomHash() });
      }, 500);
    }
  }

  componentWillUnmount() {
    if (this.refresh) {
      clearInterval(this.refresh);
    }
  }

  render() {
    let icon = faClock;

    switch (this.props.status) {
      case "done":
        icon = faCheckCircle;
        break;
      case "running":
        icon = faYinYang;
        break;
      case "preparing":
        icon = faCheckCircle;
        break;
      default:
        if (this.props.cat === "gitcoin") {
          icon = faCrown;
        }
    }

    return (
      <div
        className={
          (this.props.cat || "") +
          " " +
          this.props.status +
          " columns setup-participant  is-mobile is-centered is-multiline"
        }
      >
        <div className="column has-text-left is-6-mobile is-2-tablet">
          {this.props.name}
        </div>

        <div className="column has-text-right has-text-left-tablet is-6-mobile  is-2-tablet">
          {this.props.org}
        </div>

        <div className="column has-text-left has-text-center-tablet is-10-mobile is-6-tablet">
          <div className="hash">{this.state.hash}</div>
        </div>

        <div className="column has-text-right is-2-mobile">
          <FontAwesomeIcon
            className="icon"
            spin={this.state.isRunning}
            icon={icon}
            size="1x"
          />
        </div>
      </div>
    );
  }
}

export default Participant;
