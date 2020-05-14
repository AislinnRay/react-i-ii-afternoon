import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Previous from "./Previous";
import Next from "./Next";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Previous} />
    <Route path="/details" component={Next} />
  </Switch>
);