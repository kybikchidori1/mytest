import React, { useEffect } from "react";
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
  console.log("data", data);
  const addUser = (newUser) => {
    setData((prevState) => [...prevState, newUser]);
  };
  return (
    <div className="container">
      <Table users={data} addUser={addUser} />
    </div>
  );
}

export default App;
