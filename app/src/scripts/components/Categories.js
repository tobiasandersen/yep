import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Card from './Card'
import styles from '../../styles/Categories'

const Categories = ({ cards, categories, selectCard, selectedCard }) => (
  <div styleName="container">
    {categories.map((category, i) => (
      <div key={category.id} styleName="category">
        <div styleName="title">{category.title}</div>

        {category
          .cards
          .filter((cardId, i) => i < 5)
          .map((cardId) => cards[cardId]).map(card => (
            <Card 
              key={card.id}
              id={card.id} 
              value={card.value}
              handleClick={selectCard}
              isPicked={card.isPicked != null}
              isSelected={card.id === selectedCard}
              categoryNumber={i}
            />
          )
        )}

      </div>
    ))}
  </div>
)

Categories.propTypes = { 
  cards: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.number
}

export default CSSModules(Categories, styles)
