import Modal from "react-modal";

import "./modal.css";
Modal.setAppElement("#root");

import { FiUser } from "react-icons/fi";

import { Input } from "../Input";
import { DateInput } from "../Input/dateInput";

export function FormModal({
  modalIsOpen,
  updateModal,
  closeModal,
  setName,
  setBirthDate,
  currentName,
  currentBirthDate,
}) {
  return (
    <div className="Container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="form"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <form className="modal-form">
          <Input
            type="text"
            icon={FiUser}
            value={currentName}
            onChange={(event) => setName(event.target.value)}
          />
          <DateInput
            date={currentBirthDate}
            onChange={(date) => setBirthDate(date)}
          />
        </form>
        <div className="button-wrapper">
          <button className="button" onClick={closeModal}>
            Cancelar
          </button>
          <button className="button" onClick={updateModal}>
            Atualizar
          </button>
        </div>
      </Modal>
    </div>
  );
}
