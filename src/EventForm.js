import React from 'react';
import Modal from 'react-modal';
import './EventForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from './actions';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '80%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function EventForm() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let eventObject = {};
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const arr = []
    for (let [key, value] of formData.entries()) {
      arr.push([key, value])
    }
    const entries = new Map(arr);
    eventObject = Object.fromEntries(entries);
    dispatch(addEvent(eventObject));
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return(
    <div>
      <button className="EventForm_button" onClick={openModal}>+ Add event</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form className="EventForm" onSubmit={handleSubmit}>
          <h2>Event form</h2>
          <label for="fname">First name</label>
          <input type="text" id="fname" name="fName" required />
          <label for="sname">Second name</label>
          <input type="text" id="sname" name="sName" required />
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required />
          <label for="date">Event date</label>
          <input type="date" id="date" name="date" required />
          <div className="SubmitForm"><input type="submit" id="submit" value="Save" /></div>
        </form>
      </Modal>
    </div>
  );
}

export default EventForm;