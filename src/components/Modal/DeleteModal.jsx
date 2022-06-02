import React from "react";

const DeleteModal = ({ close, deleteUser }) => {
  return (
    <div className="background">
      <div className="user-modal">
        <div className="user-modal__header">Удаление пользователя</div>
        <div className="user-modal__body_delete">
          Удалить выбранного пользователя?
        </div>
        <div className="user-modal__footer">
          <button type="cancel" text="Отменить" onClick={close}>
            Отменить
          </button>
          <button type="add" text="Удалить" onClick={deleteUser}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
