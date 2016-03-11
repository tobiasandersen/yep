import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/Questions'
import classNames from 'classnames'
import QuestionDetails from './QuestionDetails'
import _ from 'underscore'

class Questions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      category,
      cards,
      showQuestionDetails,
      editingCard
    } = this.props

    return (
      <div styleName="container">
        <div styleName="left">
          {category.cards.map((cardId) => cards[cardId]).map(card => (
            <div key={card.id} styleName={classNames({
              'item': true,
              'is-active': card.id === editingCard.id
            })} onClick={() => showQuestionDetails(card.id)}>
              {card.question} 
            </div>
          ))}
        </div>
        <div styleName="right">
          <QuestionDetails
            card={_.isEmpty(editingCard) ? {
              question: '',
              answer: '',
              value: 0
            } : editingCard} />
        </div>
      </div>
    )
  }

}

Questions.propTypes = {
  category: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
  showQuestionDetails: PropTypes.func.isRequired,
  editingCard: PropTypes.object
}

export default CSSModules(Questions, styles, { allowMultiple: true })
