import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default App;
