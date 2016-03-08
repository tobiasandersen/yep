import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import RegisterAnswerButton from './RegisterAnswerButton'
import styles from 'styles/OpenCardBack.css'

const OpenCardBack = ({ answer, cardId, players, registerAnswer, value }) => (
  <div styleName="card">
    <div styleName="answer-container">
      <p styleName="answer">{answer}</p>
    </div>

    <div styleName="players-container">
      {players.map(player => (
        <div key={player.id} styleName="player">

          <p styleName="player-name">{player.name}</p>

          {[ true, false ].map(registerCorrect => (
            <RegisterAnswerButton 
              key={registerCorrect ? 1 : 0}
              cardId={cardId}
              registerAnswer={registerAnswer}
              registerCorrect={registerCorrect}
              playerId={player.id}
              value={value}
            />
          ))}

        </div>
      ))}
    </div>
  </div>
)

OpenCardBack.propTypes = {
  answer: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
  registerAnswer: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default CSSModules(OpenCardBack, styles)
