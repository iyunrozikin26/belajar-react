import {combineReducers} from 'redux'
import companyReducer from './companyReducer.js'
import jobsReducer from './jobsReducer'

export default combineReducers ({
  jobsReducer, companyReducer
})