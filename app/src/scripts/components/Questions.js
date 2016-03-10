import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/Questions'
import QuestionsValueBox from './QuestionsValueBox'

const Questions = ({ category, cards }) => (
  <div styleName="container">
    {category.cards.map((cardId) => cards[cardId]).map(card => (
      <QuestionsValueBox
        key={card.id}
        value={card.value}
        question={card.question} />
    ))}
  </div>
)

Questions.propTypes = {
  category: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired
}

export default CSSModules(Questions, styles)
