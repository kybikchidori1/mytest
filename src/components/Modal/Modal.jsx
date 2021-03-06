import { useState } from "react";

const emptyUser = {
    name: "",
    second_name: "",
    patronymic_name: "",
    email: "",
    login: "",
};

const Modal = ({ currentUser, userHandler, onClose }) => {
    const [newUserData, setNewUserData] = useState(
        currentUser ? currentUser : emptyUser
    );

    const changeNewUserData = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;

        setNewUserData((prevState) => ({
            ...prevState,
            [inputName]: value,
        }));
    };

    const pressButtonAdd = () => {
        userHandler(newUserData);

        onClose();
    };

    return (
        <div className="modal__background active">
            <div className="modal__window">
                <div className="modal__window_area">
                    <div className="modal__content">
                        <div className="modal__header">
                            <div className="modal__title">
                                {currentUser
                                    ? "Редактирование пользователя"
                                    : "Создание пользователя"}
                            </div>
                            <button
                                className="modal__close"
                                onClick={onClose}
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
                                    name="second_name"
                                    value={newUserData.second_name}
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
                                    name="name"
                                    value={newUserData.name}
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
                                disabled={
                                    !newUserData?.name ||
                                    !newUserData?.second_name ||
                                    !newUserData?.patronymic_name ||
                                    !newUserData?.email ||
                                    !newUserData?.login
                                }
                                className="btn__add"
                                onClick={pressButtonAdd}
                            >
                                {currentUser ? "Сохранить" : "Создать"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
