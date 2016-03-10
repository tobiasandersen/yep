import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/OpenCardBack.css'

const RegisterAnswerButton = ({ 
  cardId,
  playerId, 
  flipCard,
  registerCorrect, 
  registerAnswer,
  value
}) => (
  <button 
    styleName={`button-${registerCorrect ? 'correct' : 'wrong'}`}
    onClick={() => {
      registerAnswer({
        playerId,
        cardId,
        value,
        wasCorrect: registerCorrect
      })

      flipCard()
    }}
  >
    {registerCorrect ? 'Correct' : 'Wrong'}
  </button>
)

RegisterAnswerButton.propTypes = {
  cardId: PropTypes.number.isRequired,
  playerId: PropTypes.number.isRequired,
  registerCorrect: PropTypes.bool.isRequired,
  registerAnswer: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default CSSModules(RegisterAnswerButton, styles)
