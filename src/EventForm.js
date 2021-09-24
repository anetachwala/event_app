import React from 'react';
import Modal from 'react-modal';
import './EventForm.css';


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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
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
        <form className="EventForm">
          <h2>Event form</h2>
          <label for="fname">First name</label>
          <input type="text" id="fname" name="fname" required />
          <label for="sname">Second name</label>
          <input type="text" id="sname" name="sname" required />
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required />
          <label for="date">Event date</label>
          <input type="date" id="date" name="name" required />
          <div className="SubmitForm"><input type="submit" id="submit" value="Save" /></div>
        </form>
      </Modal>
    </div>
  );
}

export default EventForm;