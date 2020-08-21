import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import {
  Home,
  CounterRedux,
  CounterContext,
  FormikFormValidation,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ height: "64px" }} />

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/counterRedux" component={CounterRedux} exact={true} />
          <Route
            path="/counterContext"
            component={CounterContext}
            exact={true}
          />
          <Route
            path="/formikFormValidation"
            component={FormikFormValidation}
            exact={true}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
