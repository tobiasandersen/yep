import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/OpenCardBack.css'

const OpenCardBack = ({ answer, players }) => (
  <div styleName="card">
    <div styleName="answer-container">
      <p styleName="answer">{answer}</p>
    </div>

    <div styleName="players-container">
      {players.map(player => (
        <div key={player.id} styleName="player">
          <p styleName="player-name">{player.name}</p>
          <button styleName="button-correct">Correct</button>
          <button styleName="button-wrong">Wrong</button>
        </div>
      ))}
    </div>
  </div>
)

OpenCardBack.propTypes = {
  answer: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}

export default CSSModules(OpenCardBack, styles)
