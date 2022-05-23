import React from "react";
import { BrowserRouter, Route, Switch, Swith } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={"/"} component={Table} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
