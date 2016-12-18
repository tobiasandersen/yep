import { autorun } from 'mobx'

const defaultSelectLocationState = store => store.routing

// Based on https://github.com/reactjs/react-router-redux/blob/master/src/sync.js
export default function syncHistoryWithStore (history, store, {
  selectLocationState = defaultSelectLocationState,
} = {}) {
  let initialLocation
  let isTimeTraveling
  let unsubscribeFromStore
  let unsubscribeFromHistory

  const getLocationInStore = (useInitialIfEmpty) =>
    selectLocationState(store).locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined)

  const subscribeToStore = callback => autorun(() => callback(getLocationInStore(true)))

  let currentLocation = getLocationInStore()

  const handleLocationChange = (location) => {
    if (isTimeTraveling) {
      return
    }

    currentLocation = location

    if (!initialLocation) {
      initialLocation = location
      if (getLocationInStore()) {
        return
      }
    }

    selectLocationState(store).changeLocation(location)
  }
  unsubscribeFromHistory = history.listen(handleLocationChange)

  return {
    ...history,
    listen (listener) {
      let lastPublishedLocation = null
      return subscribeToStore(() => {
        const currentLocation = getLocationInStore(true)
        if (currentLocation === lastPublishedLocation) {
          return
        }
        lastPublishedLocation = currentLocation
        listener(lastPublishedLocation)
      })
    },
    unsubscribe () {
      unsubscribeFromHistory()
    }
  }
}
