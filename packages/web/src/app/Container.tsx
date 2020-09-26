import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "@App/Routes";

const Container: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export { Container };
