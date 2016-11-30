import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from 'styles/ButtonQuestion'

const ButtonQuestion = ({ label, handleClick, isSaveButton }) => (
  <div styleName={classNames({
    'container': true,
    'save-button': isSaveButton
  })} onClick={() => handleClick()}>
    {isSaveButton ? 'Save' : label}
  </div>
)

ButtonQuestion.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isSaveButton: PropTypes.bool.isRequired
}

export default CSSModules(ButtonQuestion, styles, { allowMultiple: true })
