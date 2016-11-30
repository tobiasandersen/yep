import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/QuestionDetails'
import ValueItem from './ValueItem'

const values = [ 1, 2, 3, 4, 5 ]

const QuestionDetails = ({ card }) => (
  <div styleName="container">
    <div styleName="text-box">
      <div styleName="text-type">Q</div>
      <div styleName="text">{card.question}</div>
    </div>
    <div styleName="text-box"></div>
      <div styleName="text-type">A</div>
      <div styleName="text"><i>{card.answer}</i></div>
    <div styleName="text-type">Difficulty</div>
    <div styleName="difficulty-container">
      {values.map(value => (
        <div styleName="difficulty-item" key={value}>
          <ValueItem value={value} cardValue={card.value}/>
        </div>
      ))} 
    </div>
  </div>
)

QuestionDetails.propTypes = {
  card: PropTypes.object
}

export default CSSModules(QuestionDetails, styles)
