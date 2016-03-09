import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/QuestionsValueBox'

const QuestionsValueBox = () => (
  <div styleName="container">
    <div styleName="value">
      1
    </div>
    <div styleName="list">
      <div styleName="list-item">
        This is a Question
      </div>
    </div>
  </div>
)

export default CSSModules(QuestionsValueBox, styles)
