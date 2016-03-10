import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Modal from 'react-modal'
import styles from 'styles/EditCategory'

class EditCategory extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      modalIsOpen,
      closeEditCategoryModal
    } = this.props

    console.log(modalIsOpen)

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

    return (
      <Modal
        isOpen={modalIsOpen}
        style={modalStyles} >

        <div styleName="container">
          <div styleName="title">
            CategoryName
          </div>
          <button onClick={() => closeEditCategoryModal()}>Close</button>
        </div>

      </Modal>
    )
  }
}

EditCategory.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeEditCategoryModal: PropTypes.func.isRequired
}

export default CSSModules(EditCategory, styles)
