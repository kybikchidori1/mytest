import { useState } from "react";

const emptyUser = {
  name: "",
  second_name: "",
  patronymic_name: "",
  email: "",
  login: "",
};

const Modal = ({ onAddUser }) => {
  const [newUserData, setNewUserData] = useState(emptyUser);

  const changeNewUserData = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setNewUserData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const pressButtonAdd = () => {
    onAddUser(newUserData);

    setNewUserData(() => emptyUser);
  };

  return (
    <div>
      <div>Modal</div>
      <button>KNOPKA CLOSE</button>
      <div>
        <input
          type="text"
          name="name"
          value={newUserData.name}
          onChange={changeNewUserData}
        />
        <input
          type="text"
          name="second_name"
          value={newUserData.second_name}
          onChange={changeNewUserData}
        />
        <input
          type="text"
          name="patronymic_name"
          value={newUserData.patronymic_name}
          onChange={changeNewUserData}
        />
        <input
          type="text"
          name="email"
          value={newUserData.email}
          onChange={changeNewUserData}
        />
        <input
          type="text"
          name="login"
          value={newUserData.login}
          onChange={changeNewUserData}
        />
      </div>
      <button onClick={pressButtonAdd}>KNOPKA ADD</button>
    </div>
  );
};

export default Modal;
