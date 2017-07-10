import R from 'ramda'
import { Jobs } from '../actions/index'

const reducer = (state = [], action) => R.cond([
  [ R.equals(Jobs.TYPE.receive), R.always(action.payload) ],
  [ R.T, R.always(state) ]
])(action.type)

export default reducer
