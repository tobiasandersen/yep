import React from 'react'
import styles from 'styles/Cards.css'
import Card from './Card'
import { response } from '../dummyData'

const Cards = () => {
  const categories = response.board.rounds[0].categories

  return (
    <div className={styles.container}>
      {
        categories
          .map(category => 
            <div className={styles.column}>
              <div className={styles.category}>
                {category.title}
              </div>
              <div className={styles.cards}>
                {
                  category
                    .cards
                      .map(card => <Card value={card.value} />)
                }
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Cards
