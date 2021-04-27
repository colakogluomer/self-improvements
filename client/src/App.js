import React from "react";
import FormComp from "./FormComp";
import Monitor from "./Monitor";
import { Row } from "reactstrap";
const App = () => {
  return (
    <div>
      <Row>
        <FormComp />
      </Row>
      <Row>
        <Monitor />
      </Row>
    </div>
  );
};

export default App;
