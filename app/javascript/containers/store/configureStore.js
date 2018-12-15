import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

export default function configureStore () {

  const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore

  const createStoreWithMiddleware = applyMiddleware(
      thunkMiddleware
  )(create);

  const store = createStoreWithMiddleware(rootReducer);

  return store
}