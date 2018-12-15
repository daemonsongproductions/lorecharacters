import { combineReducers} from 'redux'

import landingState from './landing'
import headerState from './header'
import signInState from './signin'


const rootReducer = combineReducers({
  landingState,
  headerState,
  signInState
});


export default rootReducer;
