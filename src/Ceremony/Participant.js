import React, { useState, useEffect } from "react";

import "./Participant.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";

class Participant extends React.Component {
  randomHash() {
    const HASH_SIZE = 48;
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
      }, 100);
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
      default:
    }

    return (
      <div
        className={
          this.props.status +
          " columns is-mobile setup-participant  is-centered is-multiline"
        }
      >
        <div className="column is-5-mobile has-text-left">
          {this.props.name}{" "}
        </div>

        <div className="column is-5-mobile  has-text-left">
          {this.props.org}
        </div>

        <div className="column  is-hidden-tablet has-text-right">
          <FontAwesomeIcon
            className="icon"
            spin={this.state.isRunning}
            icon={icon}
            size="1x"
          />
        </div>

        <div className="column is-12-mobile is-vcentered">
          <div className="hash">{this.state.hash}</div>
        </div>

        <div className="column is-2-mobile is-hidden-mobile has-text-right">
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
