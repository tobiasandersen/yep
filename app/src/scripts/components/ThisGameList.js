import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import PickedGameSection from './PickedGameSection'
import PickedGameItem from './PickedGameItem'
import PickedRound from './PickedRound'
import ButtonStart from './ButtonStart'
import styles from 'styles/ThisGameList.css'
import {
  MIN_NBR_OF_PLAYERS,
  MAX_NBR_OF_PLAYERS,
  MIN_NBR_OF_ROUNDS,
  MAX_NBR_OF_ROUNDS 
} from '../constants/GameSettings'

const ThisGameList = ({ 
  categories, 
  players, 
  rounds,
  removePlayerFromGame,
  removeCategoryFromGame
}) => (
  <div styleName="container">

    <PickedGameSection 
      title="Players"
      addedItems={players.length}
      minItems={MIN_NBR_OF_PLAYERS}
      maxItems={MAX_NBR_OF_PLAYERS}
      content={players.map(player => (
        <PickedGameItem 
          handleClick={() => removePlayerFromGame(player.id)}
          key={player.id}
          name={player.name}
        />
      ))}
    />

    <PickedGameSection 
      title="Categories"
      addedItems={rounds.reduce((sum, current) => (
        sum += current.categoryIds.length
      ), 0)}
      minItems={MIN_NBR_OF_ROUNDS * 5}
      maxItems={MAX_NBR_OF_ROUNDS * 5} 
      content={rounds.map(round => (
        <PickedRound 
          categoryIds={round.categoryIds}
          categories={categories}
          removeCategoryFromGame={removeCategoryFromGame}
          key={round.roundNumber}
          roundNumber={round.roundNumber}
        />
      ))}
    />

    <ButtonStart isReadyToStart={false} />

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
