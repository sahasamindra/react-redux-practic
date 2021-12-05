import React, { Component } from "react";

export class Button extends Component {
  state = {
    en: "Click Here",
    bn: "ক্লিক করুন",
  };

  // shouldComponentUpdate(nextProps) {
  //   const { change: currentChange } = this.props;
  //   const { change: nextChange } = nextProps;

  //   if (currentChange === nextChange) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    const { change, text } = this.props;
    return (
      <div>
        <button type="button" onClick={change}>
          {text === "en-US" ? this.state.en : this.state.bn}
        </button>
      </div>
    );
  }
}

export default Button;
