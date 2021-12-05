import React, { Component } from "react";
import Button from "./Button";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      local: "bn-BD",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState((state, props) => ({
      date: new Date(),
    }));
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = () => {
    if (this.state.local === "bn-BD") {
      this.setState((state, props) => ({
        local: "en-US",
      }));
    }
    if (this.state.local === "en-US") {
      this.setState((state, props) => ({
        local: "bn-BD",
      }));
    }
  };

  render() {
    const { local } = this.state;
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString(local)}</h1>
        <Button change={this.handleClick} text={this.state.local} />
      </div>
    );
  }
}

export default Clock;
