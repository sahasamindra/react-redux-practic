import React from "react";

const ClickCounter = ({ count, increaseCount }) => {
  return (
    <div>
      <button type="button" onClick={increaseCount}>
        Button Clicked {count} times
      </button>
    </div>
  );
};

export default ClickCounter;
