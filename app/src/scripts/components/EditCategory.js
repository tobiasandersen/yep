import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Modal from 'react-modal'
import styles from 'styles/EditCategory'
import Questions from './Questions'
import QuestionDetails from './QuestionDetails'

class EditCategory extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      modalIsOpen,
      category,
      cards,
      closeEditCategoryModal
    } = this.props

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
          <span styleName="title">{category.title}</span>
          <div 
            styleName="save-and-close" 
            onClick={() => closeEditCategoryModal()} >
            Save & Close
          </div>
          <div styleName="content">
            <div styleName="left">
              <Questions 
                category={category}
                cards={cards} />
            </div>
            <div styleName="right">
              <QuestionDetails />
            </div>
          </div>
        </div>

      </Modal>
    )
  }
}

EditCategory.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  category: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
  closeEditCategoryModal: PropTypes.func.isRequired
}

export default CSSModules(EditCategory, styles)
