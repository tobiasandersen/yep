import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from 'styles/Card.css'

const Card = ({ id, categoryNumber, value, handleClick, isPicked, isSelected }) => (
  <div styleName={classNames({
    'card': true,
    'is-selected': isSelected,
    'is-picked': isPicked,
    'is-in-last-category': (++categoryNumber % 5) === 0
  })} onClick={() => {handleClick(id)}}>
    <span styleName="value">${value * 100}</span>
  </div>
)

Card.propTypes = {
  id: PropTypes.number.isRequired,
  categoryNumber: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isPicked: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired
}

export default CSSModules(Card, styles, { allowMultiple: true })
