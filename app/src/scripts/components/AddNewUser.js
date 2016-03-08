import React, { PropTypes } from 'react'
import Modal from 'react-modal'

const AddNewUser = ({ modalIsOpen, closeModal }) => (
  <div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => {closeModal}} >
      <h1>Hello from Users Modal</h1>
      <button onClick={() => closeModal()}>Close</button>
    </Modal>
  </div>
)

AddNewUser.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AddNewUser
