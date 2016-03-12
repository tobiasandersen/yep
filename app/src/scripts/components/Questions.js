import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/Questions'
import classNames from 'classnames'
import QuestionDetails from './QuestionDetails'
import EditQuestion from './EditQuestion'
import _ from 'underscore'
import ButtonQuestion from './ButtonQuestion'

class Questions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      category,
      cards,
      showQuestionDetails,
      editingCard,
      createNewQuestion,
      editingQuestion,
      saveQuestion,
      editQuestion,
      updateCard
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
          {editingQuestion ? <EditQuestion 
            card={_.isEmpty(editingCard) ? {
              question: '',
              answer: '',
              value: 0
            } : editingCard} 
            handleChange={updateCard} /> 
          : <QuestionDetails
            card={_.isEmpty(editingCard) ? {
              question: '',
              answer: '',
              value: 0
            } : editingCard} />}
        </div>
        <div styleName="bottom">
          <div styleName="bottom-left">
            <ButtonQuestion 
              label="Create New"
              handleClick={createNewQuestion}
              isSaveButton={false} />
          </div>
          <div styleName="bottom-right">
            <ButtonQuestion
              label="Edit"
              handleClick={editingQuestion ? saveQuestion : editQuestion}
              isSaveButton={editingQuestion} />
          </div>
        </div>
      </div>
    )
  }

}

Questions.propTypes = {
  category: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
  showQuestionDetails: PropTypes.func.isRequired,
  editingCard: PropTypes.object,
  createNewQuestion: PropTypes.func.isRequired,
  editingQuestion: PropTypes.bool.isRequired,
  saveQuestion: PropTypes.func.isRequired,
  editQuestion: PropTypes.func.isRequired,
  updateCard: PropTypes.func.isRequired
}

export default CSSModules(Questions, styles, { allowMultiple: true })
