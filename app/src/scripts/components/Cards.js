import React from 'react'
import styles from 'styles/Cards.css'
import Card from './Card'
import { response } from '../dummyData'

const Cards = () => {
  const categories = response.board.rounds[0].categories


  return (
    <div>
      {categories
        .map(category => category
          .cards
          .map(card => <Card value={card.value} />)
        )
      }
    </div>
  )
}

export default Cards
