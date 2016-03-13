import React from 'react'
import styles from 'styles/Board.css'
import CategoriesContainer from '../containers/CategoriesContainer'
import PlayersContainer from '../containers/PlayersContainer'
import OpenCardContainer from '../containers/OpenCardContainer'

const Board = () => (
  <div className={styles.board}>
    <OpenCardContainer /> 
    <CategoriesContainer />
    <PlayersContainer />
  </div>
)

export default Board
