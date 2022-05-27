import React from "react";
import "../Table/Table.scss";

const Table = ({ users, addUser }) => {
  return (
    <>
      <button
        onClick={() => {
          addUser([
            {
              name: "Hui",
              second_name: "Ivanovich",
              patronymic_name: "Ivanko",
              email: "email",
              login: "useruser",
            },
            {
              name: "Hui",
              second_name: "Ivanovich",
              patronymic_name: "Ivanko",
              email: "email",
              login: "useruser",
            },
            {
              name: "Hui",
              second_name: "Ivanovich",
              patronymic_name: "Ivanko",
              email: "email",
              login: "useruser",
            },
          ]);
        }}
      >
        МОГУЧАЯКНОПКАЕБАТь
      </button>
      <table class="table">
        <thead>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>E-mail</th>
            <th>Логин</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, second_name, patronymic_name, email, login }) => (
            <tr>
              <th>{name}</th>
              <th>{second_name}</th>
              <th>{patronymic_name}</th>
              <th>{email}</th>
              <th>{login}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
