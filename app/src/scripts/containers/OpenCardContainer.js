import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import OpenCard from '../components/OpenCard'
import { closeCard } from '../actions/cards'
import { registerAnswer } from '../actions/players'

function mapStateToProps(state) {
  const { cards, selectedCard: openCardId, players } = state

  if (openCardId) {
    const { answer, question, value } = cards[openCardId]

    return {
      value,
      answer,
      id: openCardId,
      isOpen: true,
      players,
      question
    }
  }

  return { isOpen: false }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    handleClose: closeCard,
    registerAnswer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenCard)
