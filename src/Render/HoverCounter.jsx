import React from "react";

const HoverCounter = ({ cnt, ic, theme }) => {
  const style =
    theme === "dark"
      ? {
          backgroundColor: "#000000",
          color: "#ffffff",
        }
      : null;

  return (
    <div>
      <h2 onMouseOver={ic}>Hover Count {cnt} times</h2>
      <p style={style}>This is context example inside hover</p>
    </div>
  );
};

export default HoverCounter;
