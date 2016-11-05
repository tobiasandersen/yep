import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from '../../styles/Players.css'

const Player = ({ isAnswering, name, score }) => (
  <div styleName={classNames({
    'player': true,
    'is-answering': isAnswering
  })}>
    <p styleName="name">{name}</p>
    <p styleName="score">{score ? score : 0}</p>
  </div>
)

Player.propTypes = {
  isAnswering: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number
}

export default CSSModules(Player, styles, { allowMultiple: true })
