import React from "react";
import "../Table/Table.scss";

const Table = ({ users }) => {
  return (
    <>
      <div className="table__hat">
        <div className="table__subhat">Пользователи</div>
        <button className="table__subbtn">+ Добавить</button>
      </div>
      <table className="table">
        <thead className="table__header">
          <tr className="table__row_header">
            <th className="table__cell_header">Фамилия</th>
            <th className="table__cell_header">Имя</th>
            <th className="table__cell_header">Отчество</th>
            <th className="table__cell_header">E-mail</th>
            <th className="table__cell_header">Логин</th>
            <th className="table__cell_header"></th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {users.map(
            ({ name, second_name, patronymic_name, email, login }, index) => (
              <tr key={index} className="table__row_body">
                <td className="table__cell_body">{name}</td>
                <td className="table__cell_body">{second_name}</td>
                <td className="table__cell_body">{patronymic_name}</td>
                <td className="table__cell_body">{email}</td>
                <td className="table__cell_body">{login}</td>
                <td>
                  <div className="area__btn">
                    <button className="change__btn"></button>
                    <button className="trash__btn"></button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
