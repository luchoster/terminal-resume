import R from 'ramda'
import { Skills } from '../actions/index'

const reducer = (state = [], action) => R.cond([
  [ R.equals(Skills.TYPE.receive), R.always(action.payload) ],
  [ R.T, R.always(state) ]
])(action.type)

export default reducer
