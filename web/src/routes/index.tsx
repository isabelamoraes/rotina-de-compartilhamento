import React from "react";
import {
  BrowserRouter, Route, Routes as Switch
} from "react-router-dom";

import Example from "../pages/Example3";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
      </Switch>
    </BrowserRouter>
)
}

export default Routes;