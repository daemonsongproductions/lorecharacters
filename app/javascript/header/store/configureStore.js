import { createStore, applyMiddleware, compose } from 'redux'
import headerReducer from '../reducers/header'
import thunkMiddleware from 'redux-thunk'

export default function configureStore (initialState = {}) {

  const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore

  const createStoreWithMiddleware = applyMiddleware(
      thunkMiddleware
  )(create);

  const store = createStoreWithMiddleware(headerReducer, initialState);

  return store;
}