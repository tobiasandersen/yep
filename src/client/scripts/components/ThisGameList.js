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
  game,
  players,
  rounds,
  startGame,
  removePlayerFromGame,
  removeCategoryFromGame
}) => {

  const addedCategories = rounds
  .reduce((sum, current) => (
    sum += current.categoryIds.length
  ), 0)

  const addedPlayers = players.length

  return (
    <div styleName="container">

      <PickedGameSection
        title="Players"
        addedItems={addedPlayers}
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
        addedItems={addedCategories}
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

    <ButtonStart
      isReadyToStart={
        addedCategories >= (MIN_NBR_OF_ROUNDS * 5) &&
        addedPlayers >= MIN_NBR_OF_PLAYERS
      }
      startGame={() => startGame(game)}
    />

    </div>
  )
}

ThisGameList.propTypes = {
  categories: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  rounds: PropTypes.array.isRequired,
  removePlayerFromGame: PropTypes.func.isRequired,
  removeCategoryFromGame: PropTypes.func.isRequired
}

export default CSSModules(ThisGameList, styles)
