import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const ThisGameList = ({ categories, players, rounds, removePlayerFromGame }) => (
  <div styleName="list">

    <h3 styleName="list-heading">Players</h3>

    <div styleName="players-container">
      {players.map(player => (
        <div styleName="player" key={player.id}>

          <span styleName="player-name">{player.name}</span>
          <button styleName="remove-button" onClick={() => {
            removePlayerFromGame(player.id)
          }}>✖</button>

        </div>
      ))}
    </div>

    <h3 styleName="list-heading">Categories</h3>

    {rounds.map(round => (
      <div styleName="round" key={round.roundNumber}>
        <h3 styleName="round-number">Round {round.roundNumber}</h3>

        {round.categoryIds.map(id => categories[id]).map(category => (
          <div styleName="list-title" key={category.id}>
            {category.title}    
          </div>
        ))}
      </div>
    ))}

  </div>
)

ThisGameList.propTypes = {
  categories: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  rounds: PropTypes.array.isRequired,
  removePlayerFromGame: PropTypes.func.isRequired
}

export default CSSModules(ThisGameList, styles)
