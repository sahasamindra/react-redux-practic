import React, { useState } from "react";
import "./assets/css/global.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import Logo from "./Logo";

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      {visible && (
        <Alert variant="success" className="mt-5">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      )}
      <Button
        className="mb-3 mt-auto"
        variant="info"
        onClick={() => setVisible((prevState) => !prevState)}
      >
        {!visible ? "Show Alert" : "Hide Alert"}
      </Button>
      <h1>This is the Logo</h1>
      <Logo />
    </div>
  );
}
