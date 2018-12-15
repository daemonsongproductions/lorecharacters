import { combineReducers} from 'redux'

import landingState from './landing'
import headerState from './header'


const rootReducer = combineReducers({
  landingState, // specific key name instead of the variable name
  headerState // key name same as the carefully renamed named export
});


export default rootReducer;
