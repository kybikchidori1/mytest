import React, { useEffect } from "react";
import Table from "./components/Table/Table";
import users from "./components/Table/users.json";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

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

  const addUser = (user) => {
    setData((prevState) => [...prevState, user]);
  };

  return (
    <div className="App">
      <div className="header"></div>
      <div className="wrapper">
        <div className="navbar"></div>
        <div className="content">
          <Table users={data} />
          <Modal onAddUser={addUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
