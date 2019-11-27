import { combineReducers} from 'redux'

import accountState from './account'
import landingState from './landing'
import headerState from './header'
import signInState from './signin'
import playerState from './player'


const rootReducer = combineReducers({
  landingState,
  headerState,
  playerState,
  signInState,
  accountState
});


export default rootReducer;
