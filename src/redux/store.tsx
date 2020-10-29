import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types/types'
import rootSaga from './sagas'
import createRootReducer from './reducers'

const initial: AppState = {
  state: {
    allProducts: [],
    inCart: [],
  }
}

const makeStore = (initialState: any = initial) => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const savedState = localStorage.getItem('state') || ''
  if (savedState) initialState = JSON.parse(savedState)

  const store = createStore(createRootReducer(), initialState, composeEnhancers(applyMiddleware(...middlewares)))

  sagaMiddleware.run(rootSaga)
  if ((module as any).hot) {
    ; (module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default makeStore