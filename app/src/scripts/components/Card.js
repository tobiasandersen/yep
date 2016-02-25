import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from 'styles/Card.css'

const Card = ({ id, value, handleClick, isSelected }) => (
  <div styleName={classNames({
    'card': true,
    'is-selected': isSelected
  })} onClick={() => {handleClick(id)}}>
    {value * 100}
  </div>
)

Card.propTypes = {
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}

export default CSSModules(Card, styles, { allowMultiple: true })
