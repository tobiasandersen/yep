import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/QuestionsValueBox'

const QuestionsValueBox = ({ value, question }) => (
  <div styleName="container">
    <span styleName="value">{value}</span>
    <span styleName="question">{question}</span>
  </div>
)

QuestionsValueBox.propTypes = {
  value: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired 
}

export default CSSModules(QuestionsValueBox, styles)
