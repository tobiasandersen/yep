import music from './music'
import general from './general'
import food from './food'
import history from './history'
import people from './people'

const seed = (categories) => {
  const categoryMap = {}
  const cards = {}
  let cardId

  const createCard = ({ q, a, id, value }, idx) => {
    const card = {
      id,
      value,
      question: q,
      answer: a
    }

    cards[id] = card
    return card.id
  }

  const createCategory = ({ id, title, questions }, idx) => {
    const category = {
      id,
      title,
      cards: questions.map((card, i) => createCard({
        ...card,
        id: (idx + 1) * (i + 1),
        value: (i + 1) * 100
      }))
    }

    categoryMap[id] = category
  }

  categories.map(createCategory)

  return {
    categories: categoryMap,
    cards: cards
  }

}

const categories = [music, general, food, history, people]
const data = seed(categories)

export default {
  categoryIdList: categories.map(({ id }) => id),
  categories: data.categories,
  cards: data.cards
}

