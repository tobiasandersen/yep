const categories = ['1', '2', '3', '4', '5']
import questions from './questions'

let id = 0

function createCategory(title) {
  return {
    id: id++,
    title: 'Category ' + title,
    cards: questions[title].map(createCard)
  }
}

let cardId = 1
const cards = {}

function createCard({ q, a }, idx) {
  const id = cardId++
  const card = {
    id,
    question: q,
    answer: a,
    value: (idx + 1) * 100
  }

  cards[id] = card
  return card.id
}

export default {
  categories: categories.map(createCategory),
  cards
}

