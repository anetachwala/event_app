import React from "react";
import Modal from "react-modal";
import "../../style/EventForm.css";
import { useDispatch } from "react-redux";
import { addEvent } from "../../store/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "80%",
    bottom: "auto",
    width: "400px",
    transform: "translate(-50%, -50%)",
    background: "#424B54",
    borderRadius: "25px",
  },
};

Modal.setAppElement("#root");

function EventForm() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { fName, sName, email, date } = event.target.elements;
    const obj = {
      fName: fName.value,
      sName: sName.value,
      email: email.value,
      date: date.value,
    };
    dispatch(addEvent(obj));
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        data-cy="AddEvent"
        className="EventForm_button"
        onClick={openModal}
      >
        + Add event
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form data-cy="EventForm" className="EventForm" onSubmit={handleSubmit}>
          <h2>Event form</h2>
          <label>First name</label>
          <input data-cy="FirstName" type="text" name="fName" required />
          <label>Second name</label>
          <input data-cy="SecondName" type="text" name="sName" required />
          <label>E-mail</label>
          <input data-cy="Email" type="email" name="email" required />
          <label>Event date</label>
          <input data-cy="Date" type="date" name="date" required />
          <div className="SubmitForm">
            <input
              data-cy="SubmitForm"
              type="submit"
              id="submit"
              value="Save"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EventForm;
