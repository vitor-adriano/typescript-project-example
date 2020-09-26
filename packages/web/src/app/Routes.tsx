import React from "react";
import { Switch, Route } from "react-router-dom";

import { Example } from "@Routes/Example";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Example />
      </Route>
    </Switch>
  );
};

export { Routes };
