import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from 'styles/ValueItem'

const ValueItem = ({ value, cardValue }) => (
  <div styleName={ classNames({
    'container': true,
    'is-filled': value === cardValue
  }) }>
    {value}
  </div>
)

ValueItem.propTypes = {
  value: PropTypes.number.isRequired,
  cardValue: PropTypes.number.isRequired
}

export default CSSModules(ValueItem, styles, { allowMultiple: true })
