import React from 'react'
import CSSModules from 'react-css-modules'
import Player from './Player'
import styles from '../../styles/Players.css'
import { ANSWERING } from 'reducers/game'

const Players = ({ players }) => (
  <div styleName="container">
    {players.map(player => (
      <Player 
        key={player.id} 
        name={player.name} 
        score={player.score} 
        isAnswering={player.status === ANSWERING} 
      /> 
    ))}
  </div>
)

export default CSSModules(Players, styles)
