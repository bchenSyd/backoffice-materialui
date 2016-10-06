import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../rootReducer'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import createLogger from 'redux-logger'


const middlewares = [api, thunk]
const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

const loggerMiddleware = createLogger()
export default function configureStore(initialState = {}){


  if (false && process.env.NODE_ENV === 'development') { //eslint-disable-line  no-constant-condition   
    middlewares.push(loggerMiddleware)
  }

  return createStoreWithMiddleware(rootReducer, initialState)
}
