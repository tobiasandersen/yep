import React, { PropTypes } from 'react'
import styles from 'styles/Cards.css'
import Card from './Card'

const Cards = ({ categories, selectCard, selectedCard }) => {

  return (
    <div className={styles.container}>
      {
        categories.map(category => 
          <div key={category.title} className={styles.column}>
            <div className={styles.category}>
              {category.title}
            </div>
            <div className={styles.cards}>
              {
                category
                  .cards
                  .map(card => 
                    <Card 
                      key={card.id} 
                      id={card.id} 
                      value={card.value} 
                      question={card.question} 
                      answer={card.answer} 
                      handleClick={selectCard}
                      isSelected={card.id === selectedCard}
                    />
                  )
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

Cards.propTypes = { 
  categories: PropTypes.array.isRequired,
  selectedCard: PropTypes.number
}

export default Cards
