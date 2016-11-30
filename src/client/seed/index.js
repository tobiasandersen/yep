import music from './music'
import general from './general'
import food from './food'
import history from './history'
import people from './people'

const seed = (categories) => {
  const categoryMap = {}
  const cards = {}
  let cardId = 1

  const createCard = ({ q, a, value }) => {
    const id = cardId++

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

Object.size = function(obj) {
  let size = 0, key
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++
  }
  return size
}

const categories = [music, general, food, history, people]
const data = seed(categories)
console.log({data})

export default {
  categoryIdList: categories.map(({ id }) => id),
  categories: data.categories,
  cards: data.cards
}

