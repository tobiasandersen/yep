import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Modal from 'react-modal'
import styles from '../../styles/AddNew'
import AddNewUser from './AddNewUser'

class AddNew extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const modalStyles = {
      overlay: {
        alignItems: 'center',
        WebkitAlignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .9)',
        display: 'flex',
        WebkitDisplay: 'flex',
        justifyContent: 'center',
        WebkitJustifyContent: 'center',
        zIndex: '10'
      },
      content: {
        background: 'transparent',
        border: 'none',
        borderRadius: 0,
        bottom: 'auto',
        height: '80vh',
        left: 'auto',
        maxHeight: 600,
        maxWidth: 955,
        overflow: 'initial',
        padding: '0',
        position: 'relative',
        perspective: 1000,
        right: 'auto',
        top: 'auto',
        width: '100%'
      }
    }

    const { 
      modalIsOpen,
      closeModal,
      addNew
    } = this.props

    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => { 
          closeModal()
        }}
        style={modalStyles}
      >
        {modalIsOpen 
          ? <AddNewUser 
            handleKeyPress={addNew}
            close={closeModal} />
          : null
        }
      </Modal>
    )
  }
}

AddNew.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired
}

export default CSSModules(AddNew, styles)
