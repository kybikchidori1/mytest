import React from "react";
import "../Table/Table.scss";

const Table = ({ users, openModal, setEdit, openDeleteModal }) => (
  <>
    <div className="table__hat">
      <div className="table__subhat">Пользователи</div>
      <button className="table__subbtn" onClick={() => openModal()}>
        + Добавить
      </button>
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
        {users.map((user) => (
          <tr key={user.id} className="table__row_body">
            <td className="table__cell_body">{user.second_name}</td>
            <td className="table__cell_body">{user.name}</td>
            <td className="table__cell_body">{user.patronymic_name}</td>
            <td className="table__cell_body">{user.email}</td>
            <td className="table__cell_body">{user.login}</td>
            <td>
              <div className="area__btn">
                <button
                  className="change__btn"
                  onClick={() => {
                    setEdit(user);
                    openModal(user.id);
                  }}
                ></button>
                <button
                  className="trash__btn"
                  onClick={() => {
                    setEdit(user);
                    openDeleteModal();
                  }}
                ></button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Table;
