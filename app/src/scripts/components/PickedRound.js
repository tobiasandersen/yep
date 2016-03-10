import React, { PropTypes } from 'react'
import PickedGameSection from './PickedGameSection'
import PickedGameItem from './PickedGameItem'

const PickedRound = ({
  categories,
  categoryIds,
  roundNumber,
  removeCategoryFromGame
}) => (
  <PickedGameSection 
    title={`Round ${roundNumber}`}
    addedItems={categoryIds.length}
    minItems={5}
    maxItems={5}
    content={categoryIds.map(id => categories[id]).map(category => (
      <PickedGameItem 
        handleClick={() => removeCategoryFromGame(category.id)}
        key={category.id}
        name={category.title}
      />
    ))}
  />
)

PickedRound.propTypes = {
  categories: PropTypes.object.isRequired,
  categoryIds: PropTypes.array.isRequired,
  removeCategoryFromGame: PropTypes.func.isRequired,
  roundNumber: PropTypes.number.isRequired
}

export default PickedRound
