import { applyMiddleware, compose, createStore } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../rootReducer'

const middlewares = []//api, thunk , createLogger() ...etc
const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

export default function configureStore(initialState) {

  const store= createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
        console.log('replace reducer')
      const nextRootReducer = require('../rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}