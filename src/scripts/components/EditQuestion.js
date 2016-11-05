import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/EditQuestion'
import ValueItem from './ValueItem'

const values = [ 1, 2, 3, 4, 5 ]

const EditQuestion = ({ card, handleChange }) => (
  <div styleName="container">
    <div styleName="text-box">
      <div styleName="text-type">Q</div>
      <div styleName="text">
        <textarea 
          onChange={() => handleChange(card, 'question', event.target.value)}>
          {card.question}</textarea>
      </div>
    </div>
    <div styleName="text-box"></div>
      <div styleName="text-type">A</div>
      <div styleName="text">
        <textarea 
          onChange={() => handleChange(card, 'answer', event.target.value)}>
          {card.answer}</textarea>
      </div>
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

EditQuestion.propTypes = {
  card: PropTypes.object,
  handleChangeQuestion: PropTypes.func.isRequired,
  handleChangeAnswer: PropTypes.func.isRequired
}

export default CSSModules(EditQuestion, styles)
