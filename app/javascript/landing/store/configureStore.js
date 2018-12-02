import { createStore, applyMiddleware, compose } from 'redux'
import landingReducer from '../reducers/landing'
import thunkMiddleware from 'redux-thunk'

console.log("hi");

export default function configureStore (initialState = {}) {

  const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore

  const createStoreWithMiddleware = applyMiddleware(
      thunkMiddleware
  )(create);

  const store = createStoreWithMiddleware(landingReducer, initialState);

  return store
}