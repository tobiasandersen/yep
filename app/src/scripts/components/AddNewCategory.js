import React, { PropTypes } from 'react'
import Modal from 'react-modal'

const AddNewCategory = ({ modalIsOpen, closeModal }) => (
  <div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => {closeModal}} >
      <h1>Hello from Category Modal</h1>
      <button onClick={() => closeModal()}>Close</button>
    </Modal>
  </div>
)

AddNewCategory.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AddNewCategory
