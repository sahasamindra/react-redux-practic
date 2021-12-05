import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../lib/Context/ThemeContext";

export default function Content() {
  return (
    <div>
      <h1>This is a content</h1>
      <Counter
        renderProp={(c, ICF) => (
          <ThemeContext.Consumer>
            {({ theme }) => <HoverCounter cnt={c} ic={ICF} theme={theme} />}
          </ThemeContext.Consumer>
        )}
      />
    </div>
  );
}
