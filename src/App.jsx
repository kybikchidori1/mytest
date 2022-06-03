import React, { useEffect } from "react";
import Table from "./components/Table/Table";
import users from "./components/Table/users.json";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import DeleteModal from "./components/Modal/DeleteModal";

const getMockData = () => {
  return users;
};

function App() {
  const [edit, setEdit] = useState({});
  const [data, setData] = useState(users.data);
  const [modalDelete, setModalDelete] = useState(false);

  const [userModal, setUserModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [counter, setCounter] = useState(6);

  const deleteUser = () => {
    setData((state) => state.filter((userData) => userData.id !== edit.id));
    setEdit({});
    setModalDelete(false);
  };

  const getNewId = () => {
    setCounter((prevState) => prevState + 1);
    return counter + 1;
  };

  useEffect(() => {
    const dataFromServer = getMockData().data;
    setData(dataFromServer);
  }, []);

  const userHandler = (userData) => {
    if (data.some((user) => user.id === userData.id)) {
      setData(data.map((user) => (user.id === userData.id ? userData : user)));
    } else {
      setData((prevState) => [{ ...userData, id: getNewId() }, ...prevState]);
    }
  };

  const openModal = (userId) => {
    if (userId) {
      setCurrentUser(data.find((user) => user.id === userId));
    }

    setUserModal(true);
  };

  const openDeleteModal = () => {
    setModalDelete(true);
  };

  const closeModal = () => {
    setUserModal(false);
    setCurrentUser(null);
  };

  return (
    <>
      <div className="App">
        <div className="header"></div>
        <div className="wrapper">
          <div className="navbar"></div>
          <div className="content">
            <Table
              openDeleteModal={openDeleteModal}
              data={setData}
              users={data}
              openModal={openModal}
              edit={edit}
              setEdit={setEdit}
            />
          </div>
        </div>
      </div>
      {userModal && (
        <Modal
          data={data}
          userHandler={userHandler}
          currentUser={currentUser}
          onClose={closeModal}
        />
      )}
      {modalDelete && (
        <DeleteModal
          close={() => {
            setEdit({});
            setModalDelete(false);
          }}
          deleteUser={deleteUser}
        />
      )}
    </>
  );
}

export default App;
