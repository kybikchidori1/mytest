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
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const dataFromServer = getMockData().data;

    setData(dataFromServer);
  }, []);

  const addUser = (user) => {
    setData((prevState) => [user, ...prevState]);
  };

  return (
    <div className="App">
      <Modal
        onAddUser={addUser}
        active={modalActive}
        setActive={setModalActive}
      />
      <div className="header"></div>
      <div className="wrapper">
        <div className="navbar"></div>
        <div className="content">
          <Table users={data} active={modalActive} setActive={setModalActive} />
        </div>
      </div>
    </div>
  );
}

export default App;
