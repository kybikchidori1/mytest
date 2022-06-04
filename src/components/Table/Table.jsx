import React from "react";
import "../Table/Table.scss";
import plus from "../../img/plus.svg";

const Table = ({ users, openModal, setEdit, openDeleteModal }) => (
  <>
    <div className="main-page">
      <div className="main-page__header"></div>
      <div className="main-page__body">
        <div className="main-page__side-bar"></div>
        <div className="main-page__box-table">
          <div className="main-page__top-box">
            <div className="main-page__page-name">Пользователи</div>
            <button className="main-page__page-btn" onClick={() => openModal()}>
              <img className="main-page__btn-plus" src={plus} alt="" />
              Добавить
            </button>
          </div>
          <table className="main-page__table">
            <thead className="main-page__table-header">
              <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>E-mail</th>
                <th>Логин</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="main-page__table-body">
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.second_name}</td>
                  <td>{user.name}</td>
                  <td>{user.patronymic_name}</td>
                  <td>{user.email}</td>
                  <td>{user.login}</td>
                  <td>
                    <div className="main-page__table-actions">
                      <button
                        className="main-page__table-edit"
                        onClick={() => {
                          setEdit(user);
                          openModal(user.id);
                        }}
                      ></button>
                      <button
                        className="main-page__table-delete"
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
        </div>
      </div>
    </div>
  </>
);

export default Table;
