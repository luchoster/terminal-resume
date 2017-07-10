import { combineReducers } from 'redux'
import skills from './skills'
import jobs from './jobs'
import work from './work'

export default combineReducers({
  skills,
  jobs,
  work
})
