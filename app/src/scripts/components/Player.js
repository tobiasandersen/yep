import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/Players.css'

const Player = ({ name, score }) => (
  <div styleName="player">
    <p styleName="name">{name}</p>
    <p styleName="score">{score ? score : 0}</p>
  </div>
)

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number
}

export default CSSModules(Player, styles)
