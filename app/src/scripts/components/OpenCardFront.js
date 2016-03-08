import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/OpenCard.css'

const OpenCardFront = ({ question, handleShowAnswerClick, value }) => (
  <div styleName="card">

    <p styleName="value-container">
      <span styleName="value">{value * 100}</span>
    </p>

    <p styleName="text">{question}</p>

    <div styleName="buttons-container">
      <button styleName="button" onClick={() => { handleShowAnswerClick() }}>
        Show answer
      </button>
    </div>

  </div>
)

OpenCardFront.propTypes = {
  question: PropTypes.string.isRequired,
  handleShowAnswerClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default CSSModules(OpenCardFront, styles)
