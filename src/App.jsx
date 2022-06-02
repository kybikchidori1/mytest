import React, { useEffect } from "react";
import Table from "./components/Table/Table";
import users from "./components/Table/users.json";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

const getMockData = () => {
  return users;
};

function App() {
  const [edit, setEdit] = useState({});
  const [data, setData] = useState([]);
  const [modalUser, setModalUser] = useState(false);

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
        setData={setData}
        data={data}
        onAddUser={addUser}
        active={modalUser}
        setActive={setModalUser}
        edit={edit}
        setEdit={setEdit}
      />
      <div className="header"></div>
      <div className="wrapper">
        <div className="navbar"></div>
        <div className="content">
          <Table
            data={setData}
            users={data}
            active={modalUser}
            setActive={setModalUser}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
