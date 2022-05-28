import React from "react";
import "../Table/Table.scss";

const Table = ({ users }) => {
  return (
    <>
      <table className="table">
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
          {users.map(
            ({ name, second_name, patronymic_name, email, login }, index) => (
              <tr key={index}>
                <th>{name}</th>
                <th>{second_name}</th>
                <th>{patronymic_name}</th>
                <th>{email}</th>
                <th>{login}</th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
