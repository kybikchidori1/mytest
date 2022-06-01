import { useState } from "react";

const emptyUser = {
  name: "",
  second_name: "",
  patronymic_name: "",
  email: "",
  login: "",
};

const Modal = ({ onAddUser, active, setActive }) => {
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

  let showBtn = (document.getElementsByClassName("btn__add").disabled = true);
  const input = document.getElementById("input").value;

  const showBtnAdd = () => {
    if (input.length > 0) {
      showBtn.disabled = false;
    } else {
      showBtn.disabled = true;
    }
  };

  return (
    <div
      className={active ? "modal__background active" : "modal__background"}

      // onClick={() => setActive(false)} >>>>> Можно нажать на зону вокруг модального окна и оно закроется
    >
      <div className="modal__window">
        <div className="modal__window_area">
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <div className="modal__title">Создание пользователя</div>
              <button
                className="modal__close"
                onClick={() => setActive(false)}
              ></button>
            </div>
            <div className="modal__content_input">
              <div className="input__dialog">
                <div className="input__title">Фамилия</div>
                <input
                  id="input"
                  className="input"
                  placeholder="Введите фамилию"
                  type="text"
                  name="name"
                  value={newUserData.name}
                  onChange={changeNewUserData}
                />
              </div>
              <div className="input__dialog">
                <div className="input__title">Имя</div>
                <input
                  id="input"
                  className="input"
                  placeholder="Введите имя"
                  type="text"
                  name="second_name"
                  value={newUserData.second_name}
                  onChange={changeNewUserData}
                />
              </div>
              <div className="input__dialog">
                <div className="input__title">Отчество</div>
                <input
                  id="input"
                  className="input"
                  placeholder="Введите отчество"
                  type="text"
                  name="patronymic_name"
                  value={newUserData.patronymic_name}
                  onChange={changeNewUserData}
                />
              </div>
              <div className="input__dialog">
                <div className="input__title">E-mail</div>
                <input
                  id="input"
                  className="input"
                  placeholder="Введите электронную почту"
                  type="text"
                  name="email"
                  value={newUserData.email}
                  onChange={changeNewUserData}
                />
              </div>
              <div className="input__dialog">
                <div className="input__title">Логин</div>
                <input
                  id="input"
                  className="input"
                  placeholder="Введите логин"
                  type="text"
                  name="login"
                  value={newUserData.login}
                  onChange={changeNewUserData}
                />
              </div>
            </div>
            <div className="modal__footer">
              <button
                disabled={showBtnAdd}
                className="btn__add"
                onClick={pressButtonAdd}
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
