import { combineReducers } from 'redux'
import todos from './todos'
import errors from './errors'

const rootReducer = combineReducers({
  todos,
  errors
})

export default rootReducer
