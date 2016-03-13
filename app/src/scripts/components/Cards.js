import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/Cards.css'
import Card from './Card'

const Cards = ({ cards, categories, selectCard, selectedCard }) => (
  <div className="container">
    {cards.map(card => (
      <Card 
        key={card.id} 
        id={card.id} 
        value={card.value} 
        question={card.question} 
        answer={card.answer} 
        handleClick={selectCard}
        isSelected={card.id === selectedCard}
      />
    ))}
  </div>
)

Cards.propTypes = { 
  categories: PropTypes.array.isRequired,
  selectedCard: PropTypes.number
}

export default CSSModules(Cards, styles)
