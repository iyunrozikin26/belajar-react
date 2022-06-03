import {combineReducers} from 'redux'
import jobsReducer from './jobsReducer'
import userReducer from './userReducer'

export default combineReducers ({
  jobsReducer, userReducer
})