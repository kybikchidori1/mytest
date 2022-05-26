import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import users from "./components/Table/users.json";
import { useState } from "react";

const getMockData = () => {
  return users;
};

function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const dataFromServer = getMockData().data;

    setData(dataFromServer);
  }, []);

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
