import {
    createStore,
    applyMiddleware
}
from 'redux'
import rootReducer from '../reducers'

const vanillaPromise = store => next => action => {
  if (typeof action.then !== 'function') {
    return next(action)
  }

  return Promise.resolve(action).then(store.dispatch)
}

export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState, applyMiddleware(vanillaPromise))
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            store.replaceReducer(nextReducer)
        })
    }
    return store
}
