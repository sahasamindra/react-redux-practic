import React from "react";
import Content from "./Content";
import ThemeContext from "../lib/Context/ThemeContext";

export default class Section extends React.Component {
  state = {
    theme: "dark",
  };

  render() {
    return (
      <div>
        <h1>This is section</h1>
        <ThemeContext.Provider value={{ theme: this.state.theme }}>
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}
