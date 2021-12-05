import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    const { renderProp } = this.props;
    const { count } = this.state;

    return renderProp(count, this.increaseCount);
  }
}

export default Counter;
