import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import OpenCard from '../components/OpenCard'
import { closeCard } from '../actions/cards'
import { registerAnswer } from '../actions/players'

function mapStateToProps(state) {
  const { cards, game, selectedCard: openCardId } = state

  if (openCardId) {
    const { answer, question, value } = cards[openCardId]

    return {
      value,
      answer,
      isFlipped: game.isShowingAnswer,
      id: openCardId,
      isOpen: true,
      players: game.players,
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
