import React from "react";
import Clock from "./Clock";

const ClockList = ({ quantity = 0 }) => {
  return (
    <div>
      {Array.from({ length: quantity }, (v, i) => (
        <Clock key={i + Math.random()} />
      ))}
    </div>
  );
};

export default ClockList;
