import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Modal from 'react-modal'
import CardFlipper from './CardFlipper'
import OpenCardFront from './OpenCardFront'
import OpenCardBack from './OpenCardBack'
import styles from '../../styles/OpenCard'

class OpenCard extends Component {
  constructor(props) {
    super(props)
    this.state = { isFlipped: true }
  }

  render() {
    const modalStyles = {
      overlay: {
        alignItems: 'center',
        WebkitAlignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
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
      answer,
      handleClose,
      id,
      isOpen,
      players,
      question,
      value
    } = this.props

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => { 
          handleClose(id) 
          this.setState({ isFlipped: true })
        }}
        style={modalStyles}
      >
        {isOpen 
          ? <CardFlipper 
            isFlipped={this.state.isFlipped}
            front={
              <OpenCardFront 
                question={question}
                handleShowAnswerClick={() => { 
                  this.setState({ isFlipped: true }) 
                }} 
                value={value} 
              />
            } 
            back={
              <OpenCardBack answer={answer} players={players}/>
            } 
          /> 
          : null
        }
      </Modal>
    )
  }
}

OpenCard.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default CSSModules(OpenCard, styles)
