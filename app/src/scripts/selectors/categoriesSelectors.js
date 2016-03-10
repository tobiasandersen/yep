import { createSelector } from 'reselect'

const categoryMap = state => state.categories
const categoryIdList = state => state.categoryIdList

export const categoriesSelector = createSelector(
  categoryMap,
  categoryIdList,
  (categoryMap, categoryIdList) => ({
    categories: categoryIdList.map(id => categoryMap[id])
  })
)

