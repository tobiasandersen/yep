import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import PickedGameItem from './PickedGameItem'
import styles from 'styles/ThisGameList.css'

const ThisGameList = ({ 
  categories, 
  players, 
  rounds,
  removePlayerFromGame,
  removeCategoryFromGame
}) => (
  <div styleName="container">

    <h3 styleName="section-title">Players (0/5)</h3>

    <div styleName="picked-items-section">
      {players.map(player => <PickedGameItem 
        handleClick={() => removePlayerFromGame(player.id)}
        key={player.id}
        name={player.name}
      />)}
    </div>

    <h3 styleName="section-title">Categories (0/10)</h3>

    {rounds.map(round => (
      <div styleName="round" key={round.roundNumber}>
        <h3 styleName="round-number">Round {round.roundNumber} (0/5)</h3>

        <div styleName="picked-items-section">
          {round.categoryIds.map(id => categories[id]).map(category => (
            <PickedGameItem 
              handleClick={() => removeCategoryFromGame(category.id)}
              key={category.id}
              name={category.title}
            />
          ))}
        </div>

      </div>
    ))}

  </div>
)

ThisGameList.propTypes = {
  categories: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  rounds: PropTypes.array.isRequired,
  removePlayerFromGame: PropTypes.func.isRequired,
  removeCategoryFromGame: PropTypes.func.isRequired
}

export default CSSModules(ThisGameList, styles)
